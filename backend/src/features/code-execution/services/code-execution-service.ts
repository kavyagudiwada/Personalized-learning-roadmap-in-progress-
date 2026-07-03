import { execFile } from "child_process";
import path from "path";
import fs from "fs";
import os from "os";

interface TestCase {
	input: string;
	expected: string;
	description: string;
}

interface RunResult {
	passed: boolean;
	description: string;
	input: string;
	expected: string;
	actual: string;
	error?: string;
}

function getRunner(language: string): { cmd: string; ext: string; wrap: (code: string, fnName: string, testCase: TestCase) => string } {
	switch (language) {
		case "python":
			return {
				cmd: "python3",
				ext: ".py",
				wrap: (code, fnName, tc) => {
					return `${code}\n\nimport json\nresult = ${fnName}${tc.input}\nif isinstance(result, (list, dict)):\n    print(json.dumps(result))\nelif isinstance(result, bool):\n    print(str(result).lower())\nelif result is None:\n    print("None")\nelse:\n    print(result)`;
				},
			};
		case "java":
			return {
				cmd: "java",
				ext: ".java",
				wrap: (code, fnName, tc) => {
					return `public class Main {\n    ${code.replace(/^public\s+/, "")}\n    public static void main(String[] args) {\n        System.out.println(${fnName}${tc.input});\n    }\n}`;
				},
			};
		case "cpp":
			return {
				cmd: "g++",
				ext: ".cpp",
				wrap: (code, fnName, tc) => {
					return `#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\n${code}\n\nint main() {\n    auto result = ${fnName}${tc.input};\n    cout << result << endl;\n    return 0;\n}`;
				},
			};
		default:
			return {
				cmd: "node",
				ext: ".mjs",
				wrap: (code, fnName, tc) => {
					return `${code}\n\nconst result = ${fnName}${tc.input};\nconsole.log(JSON.stringify(result));`;
				},
			};
	}
}

function execCmd(cmd: string, args: string[], input?: string): Promise<{ stdout: string; stderr: string }> {
	return new Promise((resolve, reject) => {
		const child = execFile(cmd, args, {
			timeout: 10_000,
			maxBuffer: 1024 * 1024,
			...(input ? { input } : {}),
		}, (err, stdout, stderr) => {
			if (err && (err as NodeJS.ErrnoException).code === "ENOENT") {
				reject(new Error(`Runtime not found: ${cmd}. Is it installed?`));
				return;
			}
			resolve({ stdout: stdout || "", stderr: stderr || "" });
		});
	});
}

async function runJava(code: string, workDir: string): Promise<string> {
	const sourcePath = path.join(workDir, "Main.java");
	fs.writeFileSync(sourcePath, code);
	const { stderr: compileErr } = await execCmd("javac", ["Main.java"], undefined).catch((e) => {
		throw new Error(`Compilation error: ${e.message}`);
	});
	if (compileErr) throw new Error(`Compilation error: ${compileErr}`);
	const { stdout } = await execCmd("java", ["-cp", workDir, "Main"]);
	return stdout.trim();
}

async function runCpp(code: string, workDir: string): Promise<string> {
	const sourcePath = path.join(workDir, "main.cpp");
	const binaryPath = path.join(workDir, "main" + (os.platform() === "win32" ? ".exe" : ""));
	fs.writeFileSync(sourcePath, code);
	const { stderr: compileErr } = await execCmd("g++", [sourcePath, "-o", binaryPath, "-std=c++17"], undefined).catch((e) => {
		throw new Error(`Compilation error: ${e.message}`);
	});
	if (compileErr) throw new Error(`Compilation error: ${compileErr}`);
	const { stdout } = await execCmd(binaryPath, []);
	try { fs.unlinkSync(binaryPath); } catch {}
	return stdout.trim();
}

export async function runCode(
	code: string,
	language: string,
	fnName: string,
	testCases: TestCase[],
): Promise<RunResult[]> {
	const runner = getRunner(language);

	const results: RunResult[] = [];

	for (const tc of testCases) {
		try {
			const wrappedCode = runner.wrap(code, fnName, tc);
			const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "code-run-"));
			const filePath = path.join(tmpDir, `code${runner.ext}`);
			fs.writeFileSync(filePath, wrappedCode);

			let stdout: string;
			try {
				if (language === "java") {
					stdout = await runJava(wrappedCode, tmpDir);
				} else if (language === "cpp") {
					stdout = await runCpp(wrappedCode, tmpDir);
				} else {
					const result = await execCmd(runner.cmd, [filePath]);
					stdout = result.stdout.trim();
				}
			} finally {
				try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {}
			}

			const actual = stdout || "(empty)";
			let expected = tc.expected;

			if (language === "python") {
				if (actual === "True") expected = expected === "true" ? "true" : expected;
				if (actual === "False") expected = expected === "false" ? "false" : expected;
			}

			const passed = actual === expected || normalizeOutput(actual) === normalizeOutput(expected);
			results.push({ passed, description: tc.description, input: tc.input, expected: tc.expected, actual });
		} catch (err: unknown) {
			results.push({
				passed: false,
				description: tc.description,
				input: tc.input,
				expected: tc.expected,
				actual: "Error",
				error: err instanceof Error ? err.message : String(err),
			});
		}
	}

	return results;
}

function normalizeOutput(s: string): string {
	try { return JSON.stringify(JSON.parse(s)); } catch {}
	return s.trim().replace(/\s+/g, " ");
}
