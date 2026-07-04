export interface CodingSolutionRequest {
	title: string;
	description: string;
	language: string;
	userCode?: string;
}

export interface CodingSolutionResponse {
	solution: string;
	explanation: string;
	timeComplexity?: string;
	spaceComplexity?: string;
}
