import axios from "axios";
import { prisma } from "@/database";
import { AppError } from "@/utils/errors";
import type { RoadmapPhase, RoadmapResponse } from "../types/roadmap.types";
import type { Prisma } from "@prisma/client";

function asJson<T>(v: T): Prisma.InputJsonValue {
	return JSON.parse(JSON.stringify(v)) as Prisma.InputJsonValue;
}

const AI_TIMEOUT_MS = 60_000;

const STRUCTURED_ROADMAPS: Record<string, Omit<RoadmapPhase, "status" | "order">[]> = {
	"AI / Machine Learning Engineer": [
		{ id: "phase-1", label: "Math & Python Foundations", duration: "3 weeks", description: "Build the mathematical and programming foundation required for all ML work.", skills: ["Linear Algebra", "Statistics", "NumPy", "Pandas", "Python OOP"], milestones: ["Implement matrix operations from scratch", "Complete a statistics project with NumPy/Pandas", "Write unit tests for your data processing pipeline"], resources: [
			{ label: "3Blue1Brown – Essence of Linear Algebra", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
			{ label: "Kaggle Learn – Python", url: "https://www.kaggle.com/learn/python" },
			{ label: "Khan Academy – Statistics & Probability", url: "https://www.khanacademy.org/math/statistics-probability" },
			{ label: "NumPy Official Guide", url: "https://numpy.org/doc/stable/user/absolute_beginners.html" },
			{ label: "Pandas Documentation – Getting Started", url: "https://pandas.pydata.org/docs/getting_started/index.html" },
			{ label: "MIT OCW – Linear Algebra", url: "https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/" },
			{ label: "Real Python – Python OOP", url: "https://realpython.com/python3-object-oriented-programming/" },
			{ label: "DataCamp – Intro to Python", url: "https://www.datacamp.com/courses/intro-to-python-for-data-science" },
			{ label: "StatQuest – Statistics Basics", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9" },
			{ label: "Google Colab Tutorial", url: "https://colab.research.google.com/notebooks/intro.ipynb" },
		] },
		{ id: "phase-2", label: "Classic Machine Learning", duration: "4 weeks", description: "Master supervised and unsupervised learning algorithms with scikit-learn.", skills: ["Regression", "Classification", "Clustering", "Scikit-learn", "Model Evaluation"], milestones: ["Train and evaluate 3 models on a real dataset", "Achieve 80%+ accuracy on a Kaggle beginner competition", "Create a model comparison notebook with cross-validation"], resources: [
			{ label: "Hands-On ML with Scikit-Learn", url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" },
			{ label: "StatQuest – ML Fundamentals", url: "https://www.youtube.com/@statquest" },
			{ label: "Scikit-learn Official Tutorials", url: "https://scikit-learn.org/stable/tutorial/index.html" },
			{ label: "Kaggle – Intro to Machine Learning", url: "https://www.kaggle.com/learn/intro-to-machine-learning" },
			{ label: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
			{ label: "Towards Data Science – ML Articles", url: "https://towardsdatascience.com/" },
			{ label: "Analytics Vidhya – ML Guide", url: "https://www.analyticsvidhya.com/blog/2021/01/5-free-courses-to-learn-machine-learning/" },
			{ label: "Machine Learning Mastery", url: "https://machinelearningmastery.com/" },
			{ label: "Kaggle – Intermediate ML", url: "https://www.kaggle.com/learn/intermediate-machine-learning" },
			{ label: "Coursera – ML Specialization (Andrew Ng)", url: "https://www.coursera.org/specializations/machine-learning-introduction" },
		] },
		{ id: "phase-3", label: "Deep Learning", duration: "5 weeks", description: "Understand neural networks and build deep learning models with PyTorch.", skills: ["PyTorch", "CNNs", "RNNs", "Backpropagation", "Transfer Learning"], milestones: ["Train a CNN on CIFAR-10 with >85% accuracy", "Build an RNN for text generation", "Implement transfer learning on a custom dataset"], resources: [
			{ label: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials/" },
			{ label: "fast.ai – Practical Deep Learning", url: "https://course.fast.ai" },
			{ label: "Deep Learning Specialization – Coursera", url: "https://www.coursera.org/specializations/deep-learning" },
			{ label: "d2l.ai – Dive into Deep Learning", url: "https://d2l.ai/" },
			{ label: "CS231n – Stanford CNNs", url: "https://cs231n.github.io/" },
			{ label: "PyTorch Lightning Docs", url: "https://lightning.ai/docs/pytorch/stable/" },
			{ label: "Papers With Code – Trending Research", url: "https://paperswithcode.com/" },
			{ label: "Neural Networks from Scratch – YouTube", url: "https://www.youtube.com/playlist?list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3" },
			{ label: "Distill.pub – Visual ML Explanations", url: "https://distill.pub/" },
			{ label: "TensorFlow Tutorials (for comparison)", url: "https://www.tensorflow.org/tutorials" },
		] },
		{ id: "phase-4", label: "NLP & Transformers", duration: "4 weeks", description: "Master transformer architecture and large language models.", skills: ["Tokenization", "Attention Mechanism", "HuggingFace", "Fine-tuning", "RAG"], milestones: ["Fine-tune a language model on custom data", "Build a RAG pipeline with vector search", "Deploy a model behind a Gradio interface"], resources: [
			{ label: "HuggingFace NLP Course", url: "https://huggingface.co/learn/nlp-course" },
			{ label: "Attention Is All You Need (Paper)", url: "https://arxiv.org/abs/1706.03762" },
			{ label: "Stanford CS224n – NLP with Deep Learning", url: "https://web.stanford.edu/class/cs224n/" },
			{ label: "Gradio Docs – ML Demos", url: "https://www.gradio.app/docs" },
			{ label: "LangChain Documentation", url: "https://python.langchain.com/docs/get_started/introduction" },
			{ label: "Weaviate – Vector Search Guide", url: "https://weaviate.io/developers/weaviate" },
			{ label: "OpenAI Tokenizer Playground", url: "https://platform.openai.com/tokenizer" },
			{ label: "The Annotated Transformer", url: "https://nlp.seas.harvard.edu/2018/04/03/attention.html" },
			{ label: "HuggingFace Transformers Docs", url: "https://huggingface.co/docs/transformers/index" },
			{ label: "LLM University by Cohere", url: "https://docs.cohere.com/docs/llmu" },
		] },
		{ id: "phase-5", label: "MLOps & Deployment", duration: "3 weeks", description: "Ship models to production with monitoring and CI/CD.", skills: ["FastAPI", "Docker", "MLflow", "Model Serving", "CI/CD"], milestones: ["Deploy a model as a REST API", "Set up experiment tracking with MLflow", "Containerize your ML app with Docker"], resources: [
			{ label: "Full Stack Deep Learning", url: "https://fullstackdeeplearning.com" },
			{ label: "MLflow Docs", url: "https://mlflow.org/docs/latest/index.html" },
			{ label: "FastAPI Official Docs", url: "https://fastapi.tiangolo.com/" },
			{ label: "Docker Curriculum", url: "https://docker-curriculum.com/" },
			{ label: "Made With ML – MLOps", url: "https://madewithml.com/" },
			{ label: "Neptune.ai – MLOps Guide", url: "https://neptune.ai/blog/mlops" },
			{ label: "GitHub Actions CI/CD Docs", url: "https://docs.github.com/en/actions" },
			{ label: "Kubeflow Docs", url: "https://www.kubeflow.org/docs/" },
			{ label: "Weights & Biases Docs", url: "https://docs.wandb.ai/" },
			{ label: "Ray – ML Compute", url: "https://docs.ray.io/en/latest/" },
		] },
		{ id: "phase-6", label: "Capstone Project", duration: "4 weeks", description: "Build an end-to-end ML project demonstrating all acquired skills.", skills: ["Problem Scoping", "Data Collection", "Model Training", "Deployment", "Documentation"], milestones: ["Ship a complete ML project on GitHub", "Write a detailed README with results and architecture", "Present your project with a live demo video"], resources: [
			{ label: "Kaggle Competitions", url: "https://www.kaggle.com/competitions" },
			{ label: "Papers With Code", url: "https://paperswithcode.com" },
			{ label: "Awesome ML Projects on GitHub", url: "https://github.com/maelfabien/Machine-Learning" },
			{ label: "Google Dataset Search", url: "https://datasetsearch.research.google.com/" },
			{ label: "UCI ML Repository", url: "https://archive.ics.uci.edu/ml/index.php" },
			{ label: "GitHub README Guide", url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes" },
			{ label: "Streamlit – ML App Builder", url: "https://docs.streamlit.io/" },
			{ label: "HuggingFace Spaces", url: "https://huggingface.co/spaces" },
			{ label: "DagsHub – ML Project Hosting", url: "https://dagshub.com/" },
			{ label: "ML Project Checklist", url: "https://www.mlprojectchecklist.com/" },
		] },
	],
	"Frontend Engineer": [
		{ id: "phase-1", label: "HTML & CSS Mastery", duration: "2 weeks", description: "Build pixel-perfect, responsive layouts with modern CSS.", skills: ["Semantic HTML5", "CSS Grid", "Flexbox", "Responsive Design", "CSS Animations"], milestones: ["Clone 3 real website layouts from scratch", "Build a fully responsive portfolio page", "Create an animated landing page with CSS transitions"], resources: [
			{ label: "CSS Tricks – Complete Guide to Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
			{ label: "Kevin Powell – CSS YouTube", url: "https://www.youtube.com/@KevinPowell" },
			{ label: "MDN Web Docs – HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
			{ label: "Flexbox Froggy Game", url: "https://flexboxfroggy.com/" },
			{ label: "CSS Grid Garden Game", url: "https://cssgridgarden.com/" },
			{ label: "web.dev – Learn Responsive Design", url: "https://web.dev/learn/design/" },
			{ label: "Frontend Mentor Challenges", url: "https://www.frontendmentor.io/" },
			{ label: "Codepip – CSS Games", url: "https://codepip.com/" },
			{ label: "Can I Use – Browser Support", url: "https://caniuse.com/" },
			{ label: "CSS Zen Garden", url: "https://csszengarden.com/" },
		] },
		{ id: "phase-2", label: "JavaScript Deep Dive", duration: "3 weeks", description: "Master JavaScript fundamentals, async patterns, and modern ES6+ features.", skills: ["Closures & Scope", "Async/Await", "Promises", "Array Methods", "Modules"], milestones: ["Build a weather app with fetch API", "Implement a promise-based task queue", "Create a vanilla JS SPA with routing"], resources: [
			{ label: "javascript.info", url: "https://javascript.info" },
			{ label: "You Don't Know JS (Free Book)", url: "https://github.com/getify/You-Dont-Know-JS" },
			{ label: "MDN – JS Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
			{ label: "FreeCodeCamp – JS Algorithms", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
			{ label: "JSConf YouTube Channel", url: "https://www.youtube.com/user/jsconfeu" },
			{ label: "Codewars – JS Practice", url: "https://www.codewars.com/" },
			{ label: "Namaste JavaScript (YouTube)", url: "https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP" },
			{ label: "Eloquent JS (Free Book)", url: "https://eloquentjavascript.net/" },
			{ label: "TypeScript Handbook for JS Devs", url: "https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html" },
			{ label: "Dave Gray – JS Playlist", url: "https://www.youtube.com/@DaveGrayTeachesCode" },
		] },
		{ id: "phase-3", label: "React & TypeScript", duration: "4 weeks", description: "Build component-driven UIs with type safety and modern React patterns.", skills: ["JSX", "Hooks", "React Router", "TypeScript", "State Management"], milestones: ["Build a typed e-commerce product page", "Implement a custom hook library", "Set up React Router with auth guards"], resources: [
			{ label: "React Official Docs", url: "https://react.dev" },
			{ label: "Total TypeScript – Free Tutorials", url: "https://www.totaltypescript.com" },
			{ label: "Epic React (Kent C. Dodds)", url: "https://www.epicreact.dev/" },
			{ label: "React Router Docs", url: "https://reactrouter.com/en/main" },
			{ label: "Zustand – State Management", url: "https://docs.pmnd.rs/zustand/getting-started/introduction" },
			{ label: "TypeScript Cheatsheets – React", url: "https://react-typescript-cheatsheet.netlify.app/" },
			{ label: "Josh Comeau – React Blog", url: "https://www.joshwcomeau.com/" },
			{ label: "React Query Docs", url: "https://tanstack.com/query/latest" },
			{ label: "Framer Motion Docs", url: "https://www.framer.com/motion/" },
			{ label: "Vitest with React Testing Library", url: "https://vitest.dev/guide/" },
		] },
		{ id: "phase-4", label: "Modern Tooling & Testing", duration: "3 weeks", description: "Learn build tools, testing frameworks, and developer workflows.", skills: ["Vite", "Vitest", "React Testing Library", "Git Workflows", "CI/CD"], milestones: ["Set up a full CI pipeline with tests", "Achieve 80%+ test coverage on a project", "Configure lint-staged and commit hooks"], resources: [
			{ label: "Vite Official Docs", url: "https://vitejs.dev/guide/" },
			{ label: "Testing Library Docs", url: "https://testing-library.com/docs/react-testing-library/intro/" },
			{ label: "Vitest Guide", url: "https://vitest.dev/guide/" },
			{ label: "GitHub Actions Docs", url: "https://docs.github.com/en/actions" },
			{ label: "Husky – Git Hooks", url: "https://typicode.github.io/husky/" },
			{ label: "ESLint Configuration Guide", url: "https://eslint.org/docs/latest/user-guide/configuring/" },
			{ label: "Prettier Docs", url: "https://prettier.io/docs/en/" },
			{ label: "Biome.js Docs", url: "https://biomejs.dev/" },
			{ label: "kentcdodds – Testing Fundamentals", url: "https://testingjavascript.com/" },
			{ label: "Playwright Docs", url: "https://playwright.dev/docs/intro" },
		] },
		{ id: "phase-5", label: "Performance & Accessibility", duration: "2 weeks", description: "Make apps fast, accessible, and production-ready.", skills: ["Core Web Vitals", "WCAG 2.1", "Lighthouse", "Code Splitting", "SEO"], milestones: ["Achieve 90+ Lighthouse score", "Implement full keyboard navigation", "Set up lazy loading and code splitting"], resources: [
			{ label: "web.dev – Performance", url: "https://web.dev/learn/performance/" },
			{ label: "A11y Project Checklist", url: "https://www.a11yproject.com/checklist/" },
			{ label: "MDN – Accessibility", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility" },
			{ label: "Chrome DevTools – Lighthouse", url: "https://developer.chrome.com/docs/lighthouse/overview/" },
			{ label: "React Code Splitting Guide", url: "https://react.dev/reference/react/lazy" },
			{ label: "WCAG 2.1 Quick Reference", url: "https://www.w3.org/WAI/WCAG21/quickref/" },
			{ label: "WebPageTest", url: "https://www.webpagetest.org/" },
			{ label: "Patterns for Performant CSS", url: "https://web.dev/patterns/" },
			{ label: "Accessibility Insights Chrome Extension", url: "https://accessibilityinsights.io/docs/web/overview/" },
			{ label: "Smashing Magazine – Performance", url: "https://www.smashingmagazine.com/tag/performance/" },
		] },
		{ id: "phase-6", label: "Portfolio & Deployment", duration: "2 weeks", description: "Ship real projects and build a compelling portfolio.", skills: ["Project Planning", "Vercel/Netlify", "README Writing", "GitHub Profile"], milestones: ["Deploy 2 full-stack projects", "Write detailed case studies for each", "Optimize GitHub profile with pinned repos"], resources: [
			{ label: "Vercel Deployment Docs", url: "https://vercel.com/docs" },
			{ label: "Frontend Mentor", url: "https://www.frontendmentor.io" },
			{ label: "Netlify Docs", url: "https://docs.netlify.com/" },
			{ label: "GitHub Profile README Guide", url: "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme" },
			{ label: "Awesome GitHub Profile README", url: "https://github.com/abhisheknaiidu/awesome-github-profile-readme" },
			{ label: "Dribbble – Design Inspiration", url: "https://dribbble.com/" },
			{ label: "dev.to – Developer Blog", url: "https://dev.to/" },
			{ label: "Hashnode – Blog for Devs", url: "https://hashnode.com/" },
			{ label: "Product Hunt – Launch Projects", url: "https://www.producthunt.com/" },
			{ label: "Readme.so – README Generator", url: "https://readme.so/" },
		] },
	],
	"Backend Engineer": [
		{ id: "phase-1", label: "Programming Foundations", duration: "3 weeks", description: "Build a strong foundation in a backend language with clean coding practices.", skills: ["Python or Node.js", "OOP & Design Patterns", "File I/O", "Error Handling", "Testing Basics"], milestones: ["Build a CLI tool with clean architecture", "Write unit tests achieving 80%+ coverage", "Implement a REST client from scratch"], resources: [
			{ label: "Node.js Official Docs", url: "https://nodejs.org/en/docs/" },
			{ label: "Real Python – OOP Guide", url: "https://realpython.com/python3-object-oriented-programming/" },
			{ label: "Refactoring Guru – Design Patterns", url: "https://refactoring.guru/design-patterns" },
			{ label: "Postman – API Testing Guide", url: "https://learning.postman.com/docs/getting-started/introduction/" },
			{ label: "Jest Testing Framework", url: "https://jestjs.io/docs/getting-started" },
			{ label: "Node.js Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices" },
			{ label: "Python Type Hints Guide", url: "https://docs.python.org/3/library/typing.html" },
			{ label: "Clean Code in JS/TS", url: "https://github.com/ryanmcdermott/clean-code-javascript" },
			{ label: "Exercism – Practice Coding", url: "https://exercism.org/" },
			{ label: "Pytest Documentation", url: "https://docs.pytest.org/en/stable/" },
		] },
		{ id: "phase-2", label: "Databases & SQL", duration: "3 weeks", description: "Master relational and NoSQL databases with efficient query design.", skills: ["PostgreSQL", "SQL Queries", "Indexing", "MongoDB", "Prisma ORM"], milestones: ["Design a normalized database schema for an e-commerce app", "Write complex queries with JOINs and aggregations", "Implement database migrations with Prisma"], resources: [
			{ label: "PostgreSQL Official Docs", url: "https://www.postgresql.org/docs/" },
			{ label: "Prisma ORM Docs", url: "https://www.prisma.io/docs" },
			{ label: "MongoDB University", url: "https://learn.mongodb.com/" },
			{ label: "SQLZoo – Interactive SQL", url: "https://sqlzoo.net/" },
			{ label: "Use The Index, Luke", url: "https://use-the-index-luke.com/" },
			{ label: "Neon – Serverless PostgreSQL", url: "https://neon.tech/docs" },
			{ label: "PlanetScale – MySQL Workflow", url: "https://planetscale.com/docs" },
			{ label: "Knex.js Query Builder", url: "https://knexjs.org/guide/" },
			{ label: "DB Fiddle – SQL Playground", url: "https://www.db-fiddle.com/" },
			{ label: "SQL Performance Explained", url: "https://sql-performance-explained.com/" },
		] },
		{ id: "phase-3", label: "REST & GraphQL APIs", duration: "3 weeks", description: "Build robust, well-documented APIs following industry standards.", skills: ["Express.js or Fastify", "RESTful Design", "GraphQL", "Validation (Zod)", "API Documentation"], milestones: ["Build a CRUD API with Express + Zod validation", "Add GraphQL endpoint alongside REST", "Document API with OpenAPI/Swagger"], resources: [
			{ label: "Express.js Official Guide", url: "https://expressjs.com/en/guide/routing.html" },
			{ label: "Fastify Documentation", url: "https://www.fastify.io/docs/latest/" },
			{ label: "GraphQL Official Tutorials", url: "https://graphql.org/learn/" },
			{ label: "Zod Validation Library", url: "https://zod.dev/" },
			{ label: "Swagger/OpenAPI Guide", url: "https://swagger.io/docs/specification/about/" },
			{ label: "Apollo Server Docs", url: "https://www.apollographql.com/docs/apollo-server/" },
			{ label: "tRPC – End-to-end Typesafe APIs", url: "https://trpc.io/docs" },
			{ label: "Postman – API Design", url: "https://www.postman.com/api-platform/api-design/" },
			{ label: "REST API Tutorial", url: "https://restfulapi.net/" },
			{ label: "HTTP Status Codes Guide", url: "https://httpstatuses.io/" },
		] },
		{ id: "phase-4", label: "Authentication & Security", duration: "3 weeks", description: "Implement secure authentication, authorization, and data protection.", skills: ["JWT & OAuth2", "Session Management", "RBAC", "HTTPS/SSL", "Rate Limiting"], milestones: ["Implement JWT-based auth with refresh tokens", "Set up OAuth2 with Google login", "Add role-based access control to an API"], resources: [
			{ label: "Auth0 – JWT Handbook", url: "https://auth0.com/resources/ebooks/jwt-handbook" },
			{ label: "OWASP – Web Security Top 10", url: "https://owasp.org/www-project-top-ten/" },
			{ label: "Better Auth Docs", url: "https://www.better-auth.com/docs" },
			{ label: "OAuth 2.0 Simplified", url: "https://www.oauth.com/" },
			{ label: "bcrypt – Password Hashing", url: "https://github.com/kelektiv/node.bcrypt.js" },
			{ label: "Helmet.js – Secure Headers", url: "https://helmetjs.github.io/" },
			{ label: "Rate Limiting with express-rate-limit", url: "https://www.npmjs.com/package/express-rate-limit" },
			{ label: "CORS Guide by MDN", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" },
			{ label: "Node.js Security Checklist", url: "https://blog.risingstack.com/node-js-security-checklist/" },
			{ label: "Passport.js Auth Strategies", url: "https://www.passportjs.org/docs/" },
		] },
		{ id: "phase-5", label: "Caching, Queues & Scaling", duration: "3 weeks", description: "Scale your backend with caching, background jobs, and load balancing.", skills: ["Redis", "BullMQ / Celery", "Horizontal Scaling", "Load Balancers", "CDN"], milestones: ["Add Redis caching to reduce DB load by 50%", "Set up a background job queue with BullMQ", "Configure NGINX as a reverse proxy"], resources: [
			{ label: "Redis Official Docs", url: "https://redis.io/docs/latest/" },
			{ label: "BullMQ Documentation", url: "https://docs.bullmq.io/" },
			{ label: "Celery – Distributed Task Queue", url: "https://docs.celeryq.dev/en/stable/" },
			{ label: "NGINX Beginner's Guide", url: "https://nginx.org/en/docs/beginners_guide.html" },
			{ label: "AWS Elastic Beanstalk Docs", url: "https://docs.aws.amazon.com/elastic-beanstalk/" },
			{ label: "Docker Compose for Backend", url: "https://docs.docker.com/compose/" },
			{ label: "Varnish Cache Guide", url: "https://varnish-cache.org/docs/" },
			{ label: "Cloudflare CDN Docs", url: "https://developers.cloudflare.com/cdn/" },
			{ label: "System Design Primer – Scalability", url: "https://github.com/donnemartin/system-design-primer" },
			{ label: "High Scalability Blog", url: "http://highscalability.com/" },
		] },
		{ id: "phase-6", label: "Deployment & CI/CD", duration: "2 weeks", description: "Ship your backend with automated deployments, monitoring, and alerting.", skills: ["Docker", "GitHub Actions", "PM2 or Supervisor", "Logging", "Health Checks"], milestones: ["Containerize a backend with Docker", "Set up a GitHub Actions deploy pipeline", "Configure structured logging and uptime monitoring"], resources: [
			{ label: "Docker Official Docs", url: "https://docs.docker.com/" },
			{ label: "GitHub Actions Docs", url: "https://docs.github.com/en/actions" },
			{ label: "PM2 – Node.js Process Manager", url: "https://pm2.keymetrics.io/docs/usage/quick-start/" },
			{ label: "Winston – Logging Library", url: "https://github.com/winstonjs/winston" },
			{ label: "Render Deployment Docs", url: "https://render.com/docs" },
			{ label: "Fly.io Docs", url: "https://fly.io/docs/" },
			{ label: "Datadog – Monitoring Guide", url: "https://docs.datadoghq.com/" },
			{ label: "Sentry – Error Tracking", url: "https://docs.sentry.io/" },
			{ label: "UptimeRobot – Monitoring", url: "https://uptimerobot.com/" },
			{ label: "12 Factor App Methodology", url: "https://12factor.net/" },
		] },
	],
	"Full-Stack Developer": [
		{ id: "phase-1", label: "Frontend Foundations", duration: "3 weeks", description: "Master HTML, CSS, JavaScript and responsive design principles.", skills: ["Semantic HTML5", "CSS Grid & Flexbox", "JavaScript ES6+", "DOM Manipulation", "Responsive Design"], milestones: ["Build a responsive multi-page website from scratch", "Implement interactive UI features with vanilla JS", "Create a CSS animation library"], resources: [
			{ label: "MDN Web Docs – HTML & CSS", url: "https://developer.mozilla.org/en-US/docs/Learn" },
			{ label: "javascript.info – Modern JS", url: "https://javascript.info/" },
			{ label: "CSS Tricks – Complete Guide to Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
			{ label: "FreeCodeCamp – Responsive Design", url: "https://www.freecodecamp.org/learn/responsive-web-design/" },
			{ label: "Frontend Mentor Challenges", url: "https://www.frontendmentor.io/" },
			{ label: "Kevin Powell – CSS YouTube", url: "https://www.youtube.com/@KevinPowell" },
			{ label: "Can I Use – Browser Support", url: "https://caniuse.com/" },
			{ label: "Web.dev – Learn CSS", url: "https://web.dev/learn/css/" },
			{ label: "Flexbox Froggy Game", url: "https://flexboxfroggy.com/" },
			{ label: "Codecademy – JS Course", url: "https://www.codecademy.com/learn/introduction-to-javascript" },
		] },
		{ id: "phase-2", label: "React & TypeScript", duration: "4 weeks", description: "Build component-driven SPAs with TypeScript and modern React patterns.", skills: ["React (Hooks)", "TypeScript", "React Router", "State Management", "Tailwind CSS"], milestones: ["Build a full-stack task manager app", "Convert a JS codebase to TypeScript", "Implement global state with Zustand"], resources: [
			{ label: "React Official Docs", url: "https://react.dev" },
			{ label: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
			{ label: "Tailwind CSS Docs", url: "https://tailwindcss.com/docs" },
			{ label: "React Router Docs", url: "https://reactrouter.com/en/main" },
			{ label: "Zustand – State Management", url: "https://docs.pmnd.rs/zustand/getting-started/introduction" },
			{ label: "Total TypeScript", url: "https://www.totaltypescript.com/" },
			{ label: "Vite Guide", url: "https://vitejs.dev/guide/" },
			{ label: "Josh Comeau – React Blog", url: "https://www.joshwcomeau.com/" },
			{ label: "Framer Motion Animations", url: "https://www.framer.com/motion/" },
			{ label: "Vitest & Testing Library", url: "https://testing-library.com/docs/react-testing-library/intro/" },
		] },
		{ id: "phase-3", label: "Backend APIs & Databases", duration: "3 weeks", description: "Build RESTful APIs with Express and connect to PostgreSQL databases.", skills: ["Node.js / Express", "RESTful Design", "PostgreSQL", "Prisma ORM", "API Validation"], milestones: ["Build a CRUD API with Express + Prisma", "Design and migrate a relational schema", "Add input validation with Zod"], resources: [
			{ label: "Express.js Routing Guide", url: "https://expressjs.com/en/guide/routing.html" },
			{ label: "Prisma ORM Docs", url: "https://www.prisma.io/docs" },
			{ label: "PostgreSQL Official Docs", url: "https://www.postgresql.org/docs/" },
			{ label: "Zod Validation Library", url: "https://zod.dev/" },
			{ label: "Node.js Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices" },
			{ label: "SQLZoo – Interactive SQL", url: "https://sqlzoo.net/" },
			{ label: "Postman – API Testing", url: "https://learning.postman.com/docs/getting-started/introduction/" },
			{ label: "Swagger/OpenAPI Guide", url: "https://swagger.io/docs/specification/about/" },
			{ label: "Neon – Serverless Postgres", url: "https://neon.tech/docs" },
			{ label: "DB Fiddle – SQL Playground", url: "https://www.db-fiddle.com/" },
		] },
		{ id: "phase-4", label: "Authentication & Full-Stack Integration", duration: "3 weeks", description: "Connect frontend to backend with auth, sessions, and secure data flow.", skills: ["JWT Auth", "OAuth2", "CORS", "Axios / Fetch", "Environment Config"], milestones: ["Add JWT login/signup to your full-stack app", "Connect React frontend to Express backend", "Deploy both frontend and backend to production"], resources: [
			{ label: "JWT.io – JSON Web Tokens", url: "https://jwt.io/introduction" },
			{ label: "Better Auth Docs", url: "https://www.better-auth.com/docs" },
			{ label: "Auth0 – Full-Stack Auth Guide", url: "https://auth0.com/docs/quickstart/" },
			{ label: "Axios Documentation", url: "https://axios-http.com/docs/intro" },
			{ label: "CORS Guide by MDN", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" },
			{ label: "OWASP – Web Security", url: "https://owasp.org/www-project-top-ten/" },
			{ label: "Passport.js Auth Strategies", url: "https://www.passportjs.org/docs/" },
			{ label: "tRPC for Full-Stack Typesafety", url: "https://trpc.io/docs" },
			{ label: "NextAuth.js Docs", url: "https://next-auth.js.org/" },
			{ label: "Netlify – Environment Variables", url: "https://docs.netlify.com/environment-variables/overview/" },
		] },
		{ id: "phase-5", label: "DevOps & Testing", duration: "3 weeks", description: "Automate testing, CI/CD, and deployments for your full-stack apps.", skills: ["Docker", "GitHub Actions", "E2E Testing", "Vitest", "CI/CD Pipelines"], milestones: ["Set up CI pipeline with tests on every push", "Write E2E tests with Playwright", "Containerize full-stack app with Docker Compose"], resources: [
			{ label: "Docker Official Docs", url: "https://docs.docker.com/" },
			{ label: "GitHub Actions Docs", url: "https://docs.github.com/en/actions" },
			{ label: "Playwright – E2E Testing", url: "https://playwright.dev/docs/intro" },
			{ label: "Vitest Guide", url: "https://vitest.dev/guide/" },
			{ label: "Docker Compose Docs", url: "https://docs.docker.com/compose/" },
			{ label: "Vercel Deployment Docs", url: "https://vercel.com/docs" },
			{ label: "Render Deployment Docs", url: "https://render.com/docs" },
			{ label: "Cypress – E2E Framework", url: "https://docs.cypress.io/" },
			{ label: "ESLint & Prettier Setup", url: "https://eslint.org/docs/latest/user-guide/configuring/" },
			{ label: "Husky – Git Hooks", url: "https://typicode.github.io/husky/" },
		] },
		{ id: "phase-6", label: "Portfolio & Production Polish", duration: "2 weeks", description: "Ship production-ready features: monitoring, SEO, performance, and a killer portfolio.", skills: ["Performance Optimization", "SEO Basics", "Analytics", "Monitoring", "Documentation"], milestones: ["Achieve 90+ Lighthouse on both frontend and API", "Write comprehensive README and API docs", "Present your full-stack project with a live demo"], resources: [
			{ label: "web.dev – Performance", url: "https://web.dev/learn/performance/" },
			{ label: "Lighthouse Guide", url: "https://developer.chrome.com/docs/lighthouse/overview/" },
			{ label: "Google Search Central – SEO", url: "https://developers.google.com/search/docs" },
			{ label: "Sentry – Error Monitoring", url: "https://docs.sentry.io/" },
			{ label: "Plausible – Analytics", url: "https://plausible.io/docs" },
			{ label: "Next.js SEO Guide", url: "https://nextjs.org/learn/seo/introduction-to-seo" },
			{ label: "GitHub Profile README Guide", url: "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme" },
			{ label: "Readme.so – README Generator", url: "https://readme.so/" },
			{ label: "Product Hunt – Launch", url: "https://www.producthunt.com/" },
			{ label: "dev.to – Blog Your Journey", url: "https://dev.to/" },
		] },
	],
	"DevOps / Platform Engineer": [
		{ id: "phase-1", label: "Linux & Scripting", duration: "3 weeks", description: "Master Linux administration, shell scripting, and command-line productivity.", skills: ["Bash Scripting", "Linux File System", "Process Management", "Permissions", "SSH & Networking"], milestones: ["Write an automation script for system backups", "Set up a Linux server from scratch with hardened security", "Create a CLI tool in bash"], resources: [
			{ label: "Linux Journey – Interactive Tutorial", url: "https://linuxjourney.com/" },
			{ label: "Bash Scripting Guide (TLDP)", url: "https://tldp.org/LDP/abs/html/" },
			{ label: "Linux Command Line Basics (DigitalOcean)", url: "https://www.digitalocean.com/community/tutorials/linux-commands" },
			{ label: "SSH Essentials Guide", url: "https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys" },
			{ label: "Vim Tutorial", url: "https://www.vim.org/tutorials.php" },
			{ label: "Linux Permissions Explained", url: "https://www.redhat.com/sysadmin/linux-file-permissions-explained" },
			{ label: "tmux – Terminal Multiplexer", url: "https://github.com/tmux/tmux/wiki" },
			{ label: "The Art of Command Line", url: "https://github.com/jlevy/the-art-of-command-line" },
			{ label: "htop – Process Viewer", url: "https://htop.dev/" },
			{ label: "Networking Basics for DevOps", url: "https://www.digitalocean.com/community/tutorials/an-introduction-to-networking-terminology-interfaces-and-protocols" },
		] },
		{ id: "phase-2", label: "Containerization & Docker", duration: "3 weeks", description: "Containerize applications, manage images, and orchestrate multi-service setups.", skills: ["Dockerfile", "Docker Compose", "Image Optimization", "Volumes & Networks", "Registry & Tags"], milestones: ["Containerize a full-stack app with Docker Compose", "Optimize a Docker image from 1GB to <200MB", "Publish an image to Docker Hub"], resources: [
			{ label: "Docker Official Docs", url: "https://docs.docker.com/" },
			{ label: "Docker Compose Docs", url: "https://docs.docker.com/compose/" },
			{ label: "Play with Docker Lab", url: "https://labs.play-with-docker.com/" },
			{ label: "Docker Best Practices Guide", url: "https://docs.docker.com/develop/dev-best-practices/" },
			{ label: "Multi-stage Builds Guide", url: "https://docs.docker.com/build/building/multi-stage/" },
			{ label: "Docker Hub – Image Registry", url: "https://hub.docker.com/" },
			{ label: "Docker Networking Guide", url: "https://docs.docker.com/network/" },
			{ label: "Docker Volumes Explained", url: "https://docs.docker.com/storage/volumes/" },
			{ label: "Awesome Docker Compose Examples", url: "https://github.com/docker/awesome-compose" },
			{ label: "Docker Security Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html" },
		] },
		{ id: "phase-3", label: "CI/CD & Automation", duration: "3 weeks", description: "Automate build, test, and deployment pipelines for reliable software delivery.", skills: ["GitHub Actions", "Jenkins Basics", "Pipeline as Code", "Artifact Management", "Secrets Management"], milestones: ["Build a CI pipeline that runs tests and lints", "Create a CD pipeline deploying to staging on merge", "Set up branch protection and required checks"], resources: [
			{ label: "GitHub Actions Docs", url: "https://docs.github.com/en/actions" },
			{ label: "Jenkins User Guide", url: "https://www.jenkins.io/doc/" },
			{ label: "GitLab CI/CD Docs", url: "https://docs.gitlab.com/ee/ci/" },
			{ label: "CircleCI Docs", url: "https://circleci.com/docs/" },
			{ label: "Actions Marketplace", url: "https://github.com/marketplace/actions" },
			{ label: "Husky – Git Hooks", url: "https://typicode.github.io/husky/" },
			{ label: "Semantic Versioning Guide", url: "https://semver.org/" },
			{ label: "Conventional Commits", url: "https://www.conventionalcommits.org/en/v1.0.0/" },
			{ label: "SonarQube – Code Quality", url: "https://docs.sonarsource.com/sonarqube/latest/" },
			{ label: "Trunk Based Development", url: "https://trunkbaseddevelopment.com/" },
		] },
		{ id: "phase-4", label: "Orchestration & Kubernetes", duration: "4 weeks", description: "Orchestrate containers at scale with Kubernetes for production-grade deployments.", skills: ["Kubernetes Pods & Deployments", "Services & Ingress", "ConfigMaps & Secrets", "Helm Charts", "kubectl"], milestones: ["Deploy a microservice app on Minikube", "Write a Helm chart for your app", "Set up horizontal pod autoscaling"], resources: [
			{ label: "Kubernetes Official Docs", url: "https://kubernetes.io/docs/home/" },
			{ label: "Minikube – Local K8s", url: "https://minikube.sigs.k8s.io/docs/" },
			{ label: "Helm Docs", url: "https://helm.sh/docs/" },
			{ label: "Kubernetes The Hard Way", url: "https://github.com/kelseyhightower/kubernetes-the-hard-way" },
			{ label: "Kubectl Cheat Sheet", url: "https://kubernetes.io/docs/reference/kubectl/cheatsheet/" },
			{ label: "K3s – Lightweight K8s", url: "https://docs.k3s.io/" },
			{ label: "Kubernetes Networking Guide", url: "https://kubernetes.io/docs/concepts/services-networking/" },
			{ label: "Podman – K8s Alternative", url: "https://podman.io/docs" },
			{ label: "ArgoCD – GitOps", url: "https://argo-cd.readthedocs.io/en/stable/" },
			{ label: "Kubernetes Best Practices Book", url: "https://www.oreilly.com/library/view/kubernetes-best-practices/9781492056461/" },
		] },
		{ id: "phase-5", label: "Monitoring & Observability", duration: "3 weeks", description: "Implement logging, metrics, tracing, and alerting for production systems.", skills: ["Prometheus", "Grafana", "ELK Stack", "OpenTelemetry", "Alerting Rules"], milestones: ["Set up Prometheus + Grafana monitoring stack", "Create dashboards for CPU, memory, and request latency", "Configure alerts for critical system metrics"], resources: [
			{ label: "Prometheus Docs", url: "https://prometheus.io/docs/introduction/overview/" },
			{ label: "Grafana Dashboards Guide", url: "https://grafana.com/docs/grafana/latest/dashboards/" },
			{ label: "Elasticsearch – ELK Stack", url: "https://www.elastic.co/guide/index.html" },
			{ label: "OpenTelemetry Docs", url: "https://opentelemetry.io/docs/" },
			{ label: "Datadog – Monitoring Docs", url: "https://docs.datadoghq.com/" },
			{ label: "New Relic – APM Guide", url: "https://docs.newrelic.com/docs/apm/" },
			{ label: "Loki – Log Aggregation", url: "https://grafana.com/docs/loki/latest/" },
			{ label: "Alertmanager Guide", url: "https://prometheus.io/docs/alerting/latest/alertmanager/" },
			{ label: "Sentry – Error Tracking", url: "https://docs.sentry.io/" },
			{ label: "Uptime Kuma – Self-Hosted Monitoring", url: "https://github.com/louislam/uptime-kuma" },
		] },
		{ id: "phase-6", label: "Cloud & Infrastructure as Code", duration: "4 weeks", description: "Provision and manage cloud infrastructure using Terraform and cloud provider services.", skills: ["AWS / GCP Basics", "Terraform", "Ansible Basics", "Cloud Networking", "Cost Optimization"], milestones: ["Provision a VPC + EC2 instance with Terraform", "Set up a load-balanced auto-scaling group", "Write Ansible playbooks for server configuration"], resources: [
			{ label: "Terraform Docs", url: "https://developer.hashicorp.com/terraform/docs" },
			{ label: "AWS Free Tier Guide", url: "https://aws.amazon.com/free/" },
			{ label: "Google Cloud Docs", url: "https://cloud.google.com/docs" },
			{ label: "Ansible Documentation", url: "https://docs.ansible.com/ansible/latest/index.html" },
			{ label: "Pulumi – IaC in Code", url: "https://www.pulumi.com/docs/" },
			{ label: "AWS Certified Cloud Practitioner Guide", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
			{ label: "Terraform Best Practices", url: "https://www.terraform-best-practices.com/" },
			{ label: "Cloudflare – DNS & CDN Docs", url: "https://developers.cloudflare.com/" },
			{ label: "Nginx Configuration Guide", url: "https://nginx.org/en/docs/" },
			{ label: "System Design – The Primer", url: "https://github.com/donnemartin/system-design-primer" },
		] },
	],
	"Data Engineer": [
		{ id: "phase-1", label: "Python & SQL Foundations", duration: "3 weeks", description: "Build a strong foundation in Python for data processing and SQL for querying.", skills: ["Python (pandas, numpy)", "Advanced SQL", "Data Cleaning", "ETL Basics", "Jupyter Notebooks"], milestones: ["Clean and analyze a real-world dataset with pandas", "Write complex SQL queries with CTEs and window functions", "Build a reusable data processing pipeline in Python"], resources: [
			{ label: "Pandas Documentation", url: "https://pandas.pydata.org/docs/" },
			{ label: "NumPy Guide", url: "https://numpy.org/doc/stable/user/absolute_beginners.html" },
			{ label: "SQLZoo – Interactive SQL", url: "https://sqlzoo.net/" },
			{ label: "Mode – SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
			{ label: "Kaggle – Python for Data Science", url: "https://www.kaggle.com/learn/python" },
			{ label: "Jupyter Notebook Docs", url: "https://docs.jupyter.org/en/latest/" },
			{ label: "Real Python – Pandas Guide", url: "https://realpython.com/pandas-python-explore-dataset/" },
			{ label: "DataCamp – Data Engineer Track", url: "https://www.datacamp.com/tracks/data-engineer-with-python" },
			{ label: "SQL Bolt – Interactive Lessons", url: "https://sqlbolt.com/" },
			{ label: "Python Data Cleaning Cookbook", url: "https://www.oreilly.com/library/view/python-data-cleaning/9781492056997/" },
		] },
		{ id: "phase-2", label: "Data Warehousing & Modeling", duration: "3 weeks", description: "Design dimensional models and manage data warehouses for analytics.", skills: ["Dimensional Modeling", "Star Schema", "Snowflake Basics", "BigQuery", "dbt"], milestones: ["Design a star schema for an e-commerce data warehouse", "Build a dbt transformation pipeline", "Write optimized queries in BigQuery"], resources: [
			{ label: "dbt Docs", url: "https://docs.getdbt.com/" },
			{ label: "Google BigQuery Docs", url: "https://cloud.google.com/bigquery/docs" },
			{ label: "Snowflake Docs", url: "https://docs.snowflake.com/en/" },
			{ label: "Kimball – Dimensional Modeling", url: "https://www.kimballgroup.com/data-warehouse-bus-archive/" },
			{ label: "DataBuildTool – dbt Learn", url: "https://courses.getdbt.com/" },
			{ label: "Redshift – AWS Docs", url: "https://docs.aws.amazon.com/redshift/" },
			{ label: "Airbyte – Data Integration", url: "https://docs.airbyte.com/" },
			{ label: "Fivetran Docs", url: "https://fivetran.com/docs" },
			{ label: "Data Warehouse Toolkit Book", url: "https://www.oreilly.com/library/view/the-data-warehouse/9781119629264/" },
			{ label: "Star Schema vs Snowflake", url: "https://www.databricks.com/glossary/star-schema" },
		] },
		{ id: "phase-3", label: "ETL/ELT Pipelines & Workflow Orchestration", duration: "4 weeks", description: "Build robust data pipelines with workflow orchestration and scheduling.", skills: ["Apache Airflow", "Prefect", "Python ETL", "Incremental Loads", "Data Quality Checks"], milestones: ["Build a daily ETL pipeline with Airflow", "Implement incremental data loading", "Set up data quality monitoring checks"], resources: [
			{ label: "Apache Airflow Docs", url: "https://airflow.apache.org/docs/" },
			{ label: "Prefect Docs", url: "https://docs.prefect.io/" },
			{ label: "Astronomer – Airflow Tutorials", url: "https://docs.astronomer.io/learn/" },
			{ label: "Dagster Docs", url: "https://docs.dagster.io/" },
			{ label: "Great Expectations – Data Quality", url: "https://docs.greatexpectations.io/" },
			{ label: "Apache Spark – ETL Guide", url: "https://spark.apache.org/docs/latest/sql-programming-guide.html" },
			{ label: "Kestra – Workflow Orchestration", url: "https://kestra.io/docs" },
			{ label: "Data Engineering Cookbook", url: "https://github.com/andkret/Cookbook" },
			{ label: "Towards Data Science – ETL Articles", url: "https://towardsdatascience.com/tagged/etl" },
			{ label: "Meltano – Open Source ELT", url: "https://docs.meltano.com/" },
		] },
		{ id: "phase-4", label: "Big Data & Streaming", duration: "4 weeks", description: "Process large-scale datasets with distributed computing and real-time streaming.", skills: ["Apache Spark", "Kafka Basics", "Parquet/AVRO", "Batch Processing", "Stream Processing"], milestones: ["Process a 10GB+ dataset with PySpark", "Build a Kafka producer-consumer pipeline", "Convert batch jobs to streaming with Kafka Streams"], resources: [
			{ label: "Apache Spark Docs", url: "https://spark.apache.org/docs/latest/" },
			{ label: "Kafka Documentation", url: "https://kafka.apache.org/documentation/" },
			{ label: "PySpark Tutorials", url: "https://spark.apache.org/docs/latest/api/python/getting_started/index.html" },
			{ label: "Confluent – Kafka Learn", url: "https://developer.confluent.io/" },
			{ label: "Apache Flink Docs", url: "https://nightlies.apache.org/flink/flink-docs-stable/" },
			{ label: "Parquet Format Docs", url: "https://parquet.apache.org/docs/" },
			{ label: "Databricks – Spark Notebooks", url: "https://www.databricks.com/learning" },
			{ label: "Data Streaming Explained", url: "https://www.oreilly.com/library/view/streaming-systems/9781491983865/" },
			{ label: "Amazon Kinesis Docs", url: "https://docs.aws.amazon.com/kinesis/" },
			{ label: "Kafka the Definitive Guide (Book)", url: "https://www.oreilly.com/library/view/kafka-the-definitive/9781492043072/" },
		] },
		{ id: "phase-5", label: "Cloud Data Platforms", duration: "3 weeks", description: "Leverage cloud-native data services for scalable and cost-effective data engineering.", skills: ["AWS S3 & Glue", "GCP Dataflow", "Azure Data Factory", "Terraform for Data", "Data Lake Architecture"], milestones: ["Set up a data lake on S3 with Glue catalog", "Build a serverless ETL pipeline with Dataflow", "Provision data infrastructure with Terraform"], resources: [
			{ label: "AWS Glue Docs", url: "https://docs.aws.amazon.com/glue/" },
			{ label: "Google Dataflow Docs", url: "https://cloud.google.com/dataflow/docs" },
			{ label: "Azure Data Factory Docs", url: "https://learn.microsoft.com/en-us/azure/data-factory/" },
			{ label: "Terraform for Data Infrastructure", url: "https://developer.hashicorp.com/terraform/tutorials" },
			{ label: "AWS S3 Docs", url: "https://docs.aws.amazon.com/s3/" },
			{ label: "GCP Cloud Storage Docs", url: "https://cloud.google.com/storage/docs" },
			{ label: "Delta Lake Docs", url: "https://docs.delta.io/latest/index.html" },
			{ label: "Apache Iceberg Docs", url: "https://iceberg.apache.org/docs/latest/" },
			{ label: "Data Lake vs Warehouse Guide", url: "https://www.databricks.com/glossary/data-lake" },
			{ label: "dbt + Snowflake Quickstart", url: "https://quickstarts.snowflake.com/guide/dbt/" },
		] },
		{ id: "phase-6", label: "Data Governance & Production", duration: "3 weeks", description: "Implement data cataloging, lineage, and production monitoring for reliable pipelines.", skills: ["Data Cataloging", "Data Lineage", "SLA Monitoring", "Cost Optimization", "On-call Runbooks"], milestones: ["Set up data lineage tracking with OpenLineage", "Create SLA dashboards for pipeline health", "Write a production incident runbook"], resources: [
			{ label: "OpenLineage Docs", url: "https://openlineage.io/docs/" },
			{ label: "Apache Atlas – Data Governance", url: "https://atlas.apache.org/#/" },
			{ label: "Amundsen – Data Discovery", url: "https://www.amundsen.io/amundsen/" },
			{ label: "DataHub – Metadata Platform", url: "https://datahubproject.io/docs/" },
			{ label: "Monte Carlo – Data Observability", url: "https://www.montecarlodata.com/learn/" },
			{ label: "Soda – Data Quality Monitoring", url: "https://docs.soda.io/" },
			{ label: "dbt – Documentation & Lineage", url: "https://docs.getdbt.com/docs/build/documentation" },
			{ label: "Great Expectations – Data Validation", url: "https://docs.greatexpectations.io/" },
			{ label: "Data Engineering Best Practices", url: "https://github.com/datastacktv/data-engineer-roadmap" },
			{ label: "GDPR Compliance for Data Engineers", url: "https://gdpr-info.eu/" },
		] },
	],
};

function generateId(): string {
	return `phase-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function buildStructuredPhases(goal: string): RoadmapPhase[] {
	const template = STRUCTURED_ROADMAPS[goal] || STRUCTURED_ROADMAPS["Frontend Engineer"];
	return template.map((p, i) => ({
		...p,
		id: generateId(),
		status: i === 0 ? "available" : "locked",
		order: i + 1,
	})) as RoadmapPhase[];
}

async function callGemini(prompt: string): Promise<string | null> {
	const apiKey = process.env.GEMINI_API_KEY;
	if (!apiKey || apiKey === "your_gemini_api_key") return null;
	try {
		const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
		const response = await axios.post(
			`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
			{ contents: [{ role: "user", parts: [{ text: prompt }] }], generationConfig: { temperature: 0.7, maxOutputTokens: 4096 } },
			{ headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey }, timeout: AI_TIMEOUT_MS },
		);
		return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
	} catch {
		return null;
	}
}

async function callGroq(prompt: string): Promise<string | null> {
	const apiKey = process.env.GROQ_API_KEY;
	if (!apiKey || apiKey === "your_groq_api_key") return null;
	try {
		const response = await axios.post(
			"https://api.groq.com/openai/v1/chat/completions",
			{ model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile", messages: [{ role: "user", content: prompt }], temperature: 0.7, max_tokens: 4096 },
			{ headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, timeout: AI_TIMEOUT_MS },
		);
		return response.data?.choices?.[0]?.message?.content || null;
	} catch {
		return null;
	}
}

async function callGithub(prompt: string): Promise<string | null> {
	const apiKey = process.env.GITHUB_TOKEN;
	if (!apiKey || apiKey === "your_github_token") return null;
	try {
		const response = await axios.post(
			"https://models.inference.ai.azure.com/chat/completions",
			{ model: "gpt-4o-mini", messages: [{ role: "user", content: prompt }], temperature: 0.7, max_tokens: 4096 },
			{ headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, timeout: AI_TIMEOUT_MS },
		);
		return response.data?.choices?.[0]?.message?.content || null;
	} catch {
		return null;
	}
}

async function generateAIReply(prompt: string): Promise<string> {
	const gemini = await callGemini(prompt);
	if (gemini) return gemini;
	const groq = await callGroq(prompt);
	if (groq) return groq;
	const github = await callGithub(prompt);
	if (github) return github;
	throw new AppError("All AI providers are currently unavailable.", 503);
}

function buildAIPrompt(goal: string, skills: string[], weak: string[]): string {
	return `You are a senior career roadmap architect. Create a personalized 6-phase learning roadmap for someone pursuing "${goal}".

Their current skills: ${skills.join(", ") || "not specified"}.
Their skill gaps to fill: ${weak.join(", ") || "not specified"}.

Return a JSON array of 6 phases, each with:
- "label": short phase name
- "duration": estimated time (e.g. "3 weeks")
- "description": 1-2 sentence description
- "skills": array of 4-6 specific skills to learn
- "milestones": array of 3-4 measurable milestones
- "resources": array of 10 objects with "label" and "url" (use real, well-known resources)

Order them from foundational to advanced. Make the roadmap specific to ${goal} and tailored to the user's skill gaps.

Respond with ONLY the JSON array, no other text.`;

}

function parseAIPhases(text: string): RoadmapPhase[] {
	try {
		const cleaned = text.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
		const data = JSON.parse(cleaned);
		if (!Array.isArray(data)) throw new Error("Not an array");
		return data.map((p: Record<string, unknown>, i: number) => ({
			id: generateId(),
			label: String(p.label || `Phase ${i + 1}`),
			duration: String(p.duration || "2 weeks"),
			description: String(p.description || ""),
			skills: Array.isArray(p.skills) ? p.skills.map(String) : [],
			milestones: Array.isArray(p.milestones) ? p.milestones.map(String) : [],
			resources: Array.isArray(p.resources) ? p.resources.map((r: Record<string, string>) => ({ label: String(r.label || ""), url: String(r.url || "") })) : [],
			status: i === 0 ? "available" : "locked",
			order: i + 1,
		}));
	} catch {
		throw new AppError("AI returned an invalid roadmap format. Please try again.", 500);
	}
}

export async function generateRoadmap(
	userId: string,
	goal: string,
	source: "ai" | "structured" = "ai",
): Promise<RoadmapResponse> {
	const userRecord = await prisma.user.findUnique({
		where: { id: userId },
		select: { skills: true, careerGoal: true },
	});

	const latestSkillGap = await prisma.skillGap.findFirst({
		where: { userId },
		orderBy: { updatedAt: "desc" },
		select: { weak: true },
	});

	const skills = userRecord?.skills || [];
	const weak = latestSkillGap?.weak || [];

	let phases: RoadmapPhase[];

	if (source === "structured") {
		phases = buildStructuredPhases(goal);
	} else {
		const prompt = buildAIPrompt(goal, skills, weak);
		const aiText = await generateAIReply(prompt);
		phases = parseAIPhases(aiText);
	}

	const totalWeeks = phases.reduce((sum, p) => {
		const match = p.duration.match(/(\d+)/);
		return sum + (match ? Number.parseInt(match[1]) : 2);
	}, 0);

	const roadmap = await prisma.roadmap.create({
		data: {
			userId,
			title: `${goal} Learning Roadmap`,
			goal,
			duration: `${totalWeeks} weeks`,
			phases: asJson(phases),
		},
	});

	return formatRoadmap(roadmap);
}

export async function getUserRoadmaps(userId: string): Promise<RoadmapResponse[]> {
	const roadmaps = await prisma.roadmap.findMany({
		where: { userId },
		orderBy: { updatedAt: "desc" },
	});
	return roadmaps.map(formatRoadmap);
}

export async function getRoadmapById(userId: string, roadmapId: string): Promise<RoadmapResponse> {
	const roadmap = await prisma.roadmap.findUnique({ where: { id: roadmapId } });
	if (!roadmap || roadmap.userId !== userId) {
		throw new AppError("Roadmap not found", 404);
	}
	return formatRoadmap(roadmap);
}

export async function updatePhaseStatus(
	userId: string,
	roadmapId: string,
	phaseId: string,
	status: RoadmapPhase["status"],
): Promise<RoadmapResponse> {
	const roadmap = await prisma.roadmap.findUnique({ where: { id: roadmapId } });
	if (!roadmap || roadmap.userId !== userId) {
		throw new AppError("Roadmap not found", 404);
	}

	const phases = (roadmap.phases as unknown as RoadmapPhase[]).map((p) => {
		if (p.id !== phaseId) return p;
		return { ...p, status };
	});

	if (status === "completed") {
		const currentIndex = phases.findIndex((p) => p.id === phaseId);
		if (currentIndex >= 0 && currentIndex < phases.length - 1) {
			phases[currentIndex + 1] = { ...phases[currentIndex + 1], status: "available" };
		}
	}

	const updated = await prisma.roadmap.update({
		where: { id: roadmapId },
		data: { phases: asJson(phases) },
	});

	return formatRoadmap(updated);
}

export async function deleteRoadmap(userId: string, roadmapId: string): Promise<void> {
	const roadmap = await prisma.roadmap.findUnique({ where: { id: roadmapId } });
	if (!roadmap || roadmap.userId !== userId) {
		throw new AppError("Roadmap not found", 404);
	}
	await prisma.roadmap.delete({ where: { id: roadmapId } });
}

function formatRoadmap(roadmap: { id: string; title: string; goal: string; duration: string; phases: unknown; createdAt: Date; updatedAt: Date }): RoadmapResponse {
	const phases = roadmap.phases as unknown as RoadmapPhase[];
	const completed = phases.filter((p) => p.status === "completed").length;
	const progress = phases.length > 0 ? Math.round((completed / phases.length) * 100) : 0;

	return {
		id: roadmap.id,
		title: roadmap.title,
		goal: roadmap.goal,
		duration: roadmap.duration,
		phases,
		progress,
		createdAt: roadmap.createdAt.toISOString(),
		updatedAt: roadmap.updatedAt.toISOString(),
	};
}
