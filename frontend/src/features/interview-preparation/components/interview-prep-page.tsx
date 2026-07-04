import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardNavbar from "@/features/dashboard/components/dashboard-navbar";

// ---------------------------------------------------------------------------
// Question bank – 100+ questions per role via template expansion
// ---------------------------------------------------------------------------
const ROLES = [
  "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "Data Scientist", "Machine Learning Engineer", "DevOps Engineer",
  "Mobile Developer", "Cloud Architect", "Security Engineer",
];

const DIFFICULTIES = ["Easy", "Medium", "Hard"];

const Q_CATEGORIES = [
  "Core Concepts", "System Design", "Problem Solving",
  "Best Practices", "Performance", "Testing & Debugging",
  "Security", "Architecture", "Data Management", "Tooling & DevOps",
];

// ---- Templates per role ------------------------------------------------
const ROLE_TEMPLATES: Record<string, { cat: string; diff: string; tpl: string; hint: string }[]> = {
  "Frontend Developer": [
    { cat:"Core Concepts", diff:"Easy", tpl:"Explain {topic} and its role in modern frontend development.", hint:"Focus on the core purpose and ecosystem" },
    { cat:"Core Concepts", diff:"Medium", tpl:"Compare {topic} with its main alternative. What are the trade-offs?", hint:"Consider learning curve, performance, community" },
    { cat:"Core Concepts", diff:"Hard", tpl:"Describe how {topic} handles state management under the hood.", hint:"Think about reactivity and rendering" },
    { cat:"System Design", diff:"Easy", tpl:"Design a simple component tree for {scenario}.", hint:"Break down UI into reusable pieces" },
    { cat:"System Design", diff:"Medium", tpl:"How would you architect a {scenario} application for scale?", hint:"Consider code splitting, lazy loading, caching" },
    { cat:"System Design", diff:"Hard", tpl:"Design a real-time collaborative {scenario} feature from scratch.", hint:"Think WebSockets, CRDT, optimistic UI" },
    { cat:"Problem Solving", diff:"Easy", tpl:"Implement {topic} to solve a common frontend problem.", hint:"Start with a minimal working solution" },
    { cat:"Problem Solving", diff:"Medium", tpl:"Write a utility function that {topic} and handles edge cases.", hint:"Consider null, undefined, empty states" },
    { cat:"Problem Solving", diff:"Hard", tpl:"Implement a custom {topic} solution that performs efficiently on large datasets.", hint:"Think virtualization, memoization, workers" },
    { cat:"Best Practices", diff:"Easy", tpl:"What are the best practices for writing maintainable {topic} code?", hint:"Naming, modularity, consistency" },
    { cat:"Best Practices", diff:"Medium", tpl:"How do you ensure accessibility when building {topic} components?", hint:"ARIA, keyboard nav, screen readers" },
    { cat:"Best Practices", diff:"Hard", tpl:"Design a style guide and component library strategy for {topic}.", hint:"Design tokens, theming, versioning" },
    { cat:"Performance", diff:"Easy", tpl:"List three ways to improve the performance of {topic}.", hint:"Measure, optimize, verify" },
    { cat:"Performance", diff:"Medium", tpl:"How would you diagnose and fix a performance bottleneck in {topic}?", hint:"Profiling, critical path, re-renders" },
    { cat:"Performance", diff:"Hard", tpl:"Implement a performance optimization strategy for {topic} that reduces bundle size by 60%.", hint:"Code splitting, tree shaking, lazy loading" },
    { cat:"Testing & Debugging", diff:"Easy", tpl:"How do you write unit tests for {topic} components?", hint:"Test behavior, not implementation" },
    { cat:"Testing & Debugging", diff:"Medium", tpl:"Design a testing strategy for {topic} that covers unit, integration, and e2e.", hint:"Testing trophy, jest, cypress" },
    { cat:"Security", diff:"Medium", tpl:"What are the common security vulnerabilities in {topic} and how do you prevent them?", hint:"XSS, CSRF, input sanitization" },
    { cat:"Architecture", diff:"Medium", tpl:"Compare SPA, SSR, and SSG approaches when building {topic}.", hint:"SEO, initial load, interactivity" },
    { cat:"Architecture", diff:"Hard", tpl:"Design a micro-frontend architecture for {topic} with shared dependencies.", hint:"Module federation, app shell, isolation" },
    { cat:"Data Management", diff:"Medium", tpl:"How do you manage server state vs client state in {topic}?", hint:"Caching, stale-while-revalidate, context" },
    { cat:"Tooling & DevOps", diff:"Easy", tpl:"What build tools and bundlers work best with {topic}?", hint:"Vite, webpack, esbuild, parcel" },
  ],
  "Backend Developer": [
    { cat:"Core Concepts", diff:"Easy", tpl:"Explain {topic} and its use cases in backend development.", hint:"Focus on when and why to use it" },
    { cat:"Core Concepts", diff:"Medium", tpl:"How does {topic} handle concurrency and threading?", hint:"Event loop, threads, async/await" },
    { cat:"Core Concepts", diff:"Hard", tpl:"Describe the internals of {topic}'s memory management.", hint:"GC, allocation, pooling" },
    { cat:"System Design", diff:"Easy", tpl:"Design a REST API for {scenario} following best practices.", hint:"Resource naming, status codes, pagination" },
    { cat:"System Design", diff:"Medium", tpl:"Design a highly available {scenario} service with < 99.9% uptime.", hint:"Load balancing, replication, failover" },
    { cat:"System Design", diff:"Hard", tpl:"Design a distributed {scenario} system that handles 10M+ requests/day.", hint:"Sharding, caching, async processing" },
    { cat:"Problem Solving", diff:"Easy", tpl:"Write a function to {topic} with proper error handling.", hint:"Try-catch, validation, graceful degradation" },
    { cat:"Problem Solving", diff:"Medium", tpl:"Implement a rate limiter for {topic} that handles burst traffic.", hint:"Token bucket, sliding window, Redis" },
    { cat:"Problem Solving", diff:"Hard", tpl:"Design and implement a distributed lock service for {topic}.", hint:"Consensus, lease, fencing tokens" },
    { cat:"Best Practices", diff:"Easy", tpl:"What are the coding standards and best practices for {topic}?", hint:"SOLID, DRY, clean architecture" },
    { cat:"Best Practices", diff:"Medium", tpl:"How do you structure a production-grade {topic} project?", hint:"Layers, dependency injection, config" },
    { cat:"Performance", diff:"Easy", tpl:"How do you optimize database queries in {topic}?", hint:"Indexing, query planning, N+1" },
    { cat:"Performance", diff:"Medium", tpl:"Design a caching strategy for {topic} to reduce latency by 80%.", hint:"Redis, CDN, application cache, invalidation" },
    { cat:"Performance", diff:"Hard", tpl:"Profile and optimize {topic} to handle 100x current throughput.", hint:"Benchmark, bottleneck analysis, async I/O" },
    { cat:"Testing & Debugging", diff:"Medium", tpl:"Design a comprehensive testing approach for {topic} APIs.", hint:"Unit, integration, contract, e2e" },
    { cat:"Security", diff:"Medium", tpl:"How do you secure {topic} against OWASP Top 10 vulnerabilities?", hint:"Authentication, authorization, encryption" },
    { cat:"Architecture", diff:"Medium", tpl:"Compare monolithic and microservices architectures for {topic}.", hint:"Coupling, deployment, scalability" },
    { cat:"Architecture", diff:"Hard", tpl:"Design an event-driven architecture for {topic} using message queues.", hint:"Pub/sub, event sourcing, CQRS" },
    { cat:"Data Management", diff:"Easy", tpl:"Explain ACID vs BASE in the context of {topic}.", hint:"Consistency vs availability trade-offs" },
    { cat:"Data Management", diff:"Hard", tpl:"Design a data replication strategy for {topic} across multiple regions.", hint:"Leader-follower, multi-master, conflict resolution" },
    { cat:"Tooling & DevOps", diff:"Easy", tpl:"What CI/CD pipeline would you set up for {topic}?", hint:"Build, test, deploy stages with rollback" },
  ],
  "Full Stack Developer": [
    { cat:"Core Concepts", diff:"Easy", tpl:"Explain how {topic} bridges frontend and backend concerns.", hint:"Full-stack context, data flow" },
    { cat:"Core Concepts", diff:"Medium", tpl:"How does {topic} manage authentication and session state across the stack?", hint:"Tokens, sessions, cookies, JWT" },
    { cat:"System Design", diff:"Easy", tpl:"Design a full-stack {scenario} application from database to UI.", hint:"End-to-end data flow, component tree" },
    { cat:"System Design", diff:"Medium", tpl:"Design a real-time {scenario} feature with WebSockets and optimistic updates.", hint:"Real-time sync, conflict resolution" },
    { cat:"System Design", diff:"Hard", tpl:"Architect a {scenario} platform that serves 1M+ users with global low latency.", hint:"CDN, edge compute, DB sharding" },
    { cat:"Problem Solving", diff:"Easy", tpl:"Implement a full-stack feature for {topic} with validation on both ends.", hint:"Client + server validation, error handling" },
    { cat:"Problem Solving", diff:"Medium", tpl:"Design a file upload system for {topic} with progress and resumability.", hint:"Multipart, streaming, chunked uploads" },
    { cat:"Problem Solving", diff:"Hard", tpl:"Implement a real-time search across {topic} with debounce and cancelation.", hint:"Debounce, abort controller, search indexing" },
    { cat:"Best Practices", diff:"Easy", tpl:"How do you structure a {topic} project for maintainability?", hint:"Folder structure, separation of concerns" },
    { cat:"Best Practices", diff:"Medium", tpl:"Design an error handling strategy for {topic} that covers the full stack.", hint:"Error boundaries, global handlers, logging" },
    { cat:"Performance", diff:"Medium", tpl:"How do you optimize the critical rendering path in {topic}?", hint:"SSR, lazy loading, code splitting, caching" },
    { cat:"Performance", diff:"Hard", tpl:"Design a performance budget for {topic} and enforce it in CI/CD.", hint:"Budgets, Lighthouse CI, bundle analysis" },
    { cat:"Testing & Debugging", diff:"Medium", tpl:"How do you set up end-to-end testing for {topic}?", hint:"Cypress, Playwright, test data seeding" },
    { cat:"Security", diff:"Easy", tpl:"What security headers and measures do you implement in {topic}?", hint:"CSP, HSTS, CORS, CSRF tokens" },
    { cat:"Architecture", diff:"Medium", tpl:"Compare BFF (Backend for Frontend) vs API Gateway in {topic}.", hint:"Client-specific APIs, aggregation, routing" },
    { cat:"Data Management", diff:"Easy", tpl:"How do you handle form state and persistence in {topic}?", hint:"Controlled inputs, localStorage, optimistic persistence" },
    { cat:"Data Management", diff:"Hard", tpl:"Design an offline-first data sync strategy for {topic}.", hint:"Service workers, IndexedDB, conflict resolution" },
    { cat:"Tooling & DevOps", diff:"Easy", tpl:"What development environment do you set up for {topic}?", hint:"Hot reload, Docker, env config" },
  ],
  "Data Scientist": [
    { cat:"Core Concepts", diff:"Easy", tpl:"Explain {topic} and when you would use it in a data science workflow.", hint:"Practical applications, assumptions" },
    { cat:"Core Concepts", diff:"Medium", tpl:"Compare {topic} with alternative approaches. What are the trade-offs?", hint:"Complexity, interpretability, accuracy" },
    { cat:"Core Concepts", diff:"Hard", tpl:"Derive the mathematical formulation of {topic} from first principles.", hint:"Start with the loss function and optimization" },
    { cat:"System Design", diff:"Medium", tpl:"Design a data pipeline for {scenario} that processes 10TB daily.", hint:"Batch vs streaming, orchestration, monitoring" },
    { cat:"System Design", diff:"Hard", tpl:"Architect an ML platform for {scenario} with feature store and model registry.", hint:"Feature engineering, versioning, deployment" },
    { cat:"Problem Solving", diff:"Easy", tpl:"How would you clean and preprocess {topic} data for analysis?", hint:"Missing values, outliers, normalization" },
    { cat:"Problem Solving", diff:"Medium", tpl:"Implement a {topic} algorithm from scratch and validate it.", hint:"Step-by-step implementation, test cases" },
    { cat:"Problem Solving", diff:"Hard", tpl:"Optimize {topic} for training on a distributed cluster with billions of records.", hint:"Data parallelism, gradient accumulation" },
    { cat:"Best Practices", diff:"Easy", tpl:"What are the best practices for reproducible {topic} experiments?", hint:"Seed setting, version control, documentation" },
    { cat:"Best Practices", diff:"Medium", tpl:"How do you validate and avoid overfitting in {topic}?", hint:"Cross-validation, regularization, early stopping" },
    { cat:"Performance", diff:"Medium", tpl:"How would you speed up {topic} training without sacrificing accuracy?", hint:"Mixed precision, pruning, distillation" },
    { cat:"Performance", diff:"Hard", tpl:"Design a model serving infrastructure for {topic} with < 50ms latency.", hint:"Quantization, ONNX, GPU inference" },
    { cat:"Testing & Debugging", diff:"Medium", tpl:"How do you test and debug {topic} models in production?", hint:"A/B testing, shadow deployment, monitoring" },
    { cat:"Data Management", diff:"Easy", tpl:"How do you handle imbalanced datasets when training {topic}?", hint:"SMOTE, class weights, resampling strategies" },
    { cat:"Data Management", diff:"Medium", tpl:"Design a feature engineering pipeline for {topic} with automated transformations.", hint:"Feature extraction, encoding, scaling" },
    { cat:"Data Management", diff:"Hard", tpl:"Implement a real-time feature computation system for {topic}.", hint:"Stream processing, feature store, low-latency" },
    { cat:"Tooling & DevOps", diff:"Easy", tpl:"What tools and frameworks do you use for {topic}?", hint:"Jupyter, MLflow, DVC, experiment tracking" },
    { cat:"Tooling & DevOps", diff:"Medium", tpl:"Design a CI/CD pipeline for {topic} model deployment.", hint:"Model validation, staging, canary deployment" },
  ],
  "Machine Learning Engineer": [
    { cat:"Core Concepts", diff:"Easy", tpl:"Explain {topic} and its role in modern machine learning.", hint:"High-level intuition, key components" },
    { cat:"Core Concepts", diff:"Medium", tpl:"Compare {topic} with its predecessors. What advancements does it offer?", hint:"Performance, scalability, accuracy" },
    { cat:"Core Concepts", diff:"Hard", tpl:"Implement {topic} from scratch and explain the forward and backward passes.", hint:"Matrix operations, gradient computation" },
    { cat:"System Design", diff:"Medium", tpl:"Design a model training infrastructure for {topic} with distributed computing.", hint:"Data parallelism, model parallelism, mixed precision" },
    { cat:"System Design", diff:"Hard", tpl:"Design an end-to-end ML system for {scenario} from data collection to monitoring.", hint:"Pipelines, feature store, model registry, drift detection" },
    { cat:"Problem Solving", diff:"Easy", tpl:"How do you select the right hyperparameters for {topic}?", hint:"Grid search, random search, Bayesian optimization" },
    { cat:"Problem Solving", diff:"Medium", tpl:"Implement a custom loss function for {topic} that addresses class imbalance.", hint:"Focal loss, weighted loss, dice loss" },
    { cat:"Problem Solving", diff:"Hard", tpl:"Debug a {topic} model that is not converging. Describe your diagnostic process.", hint:"Learning rate, gradient norms, data issues" },
    { cat:"Best Practices", diff:"Easy", tpl:"What are the best practices for managing {topic} experiment tracking?", hint:"MLflow, wandb, versioning, reproducibility" },
    { cat:"Best Practices", diff:"Medium", tpl:"How do you ensure {topic} models are fair and unbiased?", hint:"Bias detection, fairness metrics, dataset balance" },
    { cat:"Performance", diff:"Medium", tpl:"How would you optimize {topic} inference for edge devices?", hint:"Quantization, pruning, TFLite, CoreML" },
    { cat:"Performance", diff:"Hard", tpl:"Design a model compression strategy for {topic} that reduces size by 10x.", hint:"Knowledge distillation, pruning, quantization" },
    { cat:"Testing & Debugging", diff:"Medium", tpl:"How do you set up CI/CD for {topic} with model validation gates?", hint:"Data validation, model evaluation, performance tests" },
    { cat:"Data Management", diff:"Easy", tpl:"How do you handle missing data when training {topic} models?", hint:"Imputation, masking, robust loss functions" },
    { cat:"Data Management", diff:"Hard", tpl:"Design a data augmentation pipeline for {topic} that improves generalization.", hint:"Auto-augment, mixup, cutout, GAN-based" },
    { cat:"Security", diff:"Medium", tpl:"What are adversarial attacks on {topic} and how do you defend against them?", hint:"FGSM, PGD, adversarial training, robustness" },
    { cat:"Tooling & DevOps", diff:"Easy", tpl:"What tools do you use for {topic} development and deployment?", hint:"PyTorch, TF, Kubeflow, MLflow" },
    { cat:"Tooling & DevOps", diff:"Medium", tpl:"Design a model monitoring system for {topic} in production.", hint:"Drift detection, performance decay, alerting" },
  ],
  "DevOps Engineer": [
    { cat:"Core Concepts", diff:"Easy", tpl:"Explain {topic} and why it is important in DevOps.", hint:"Automation, reliability, scalability" },
    { cat:"Core Concepts", diff:"Medium", tpl:"Compare {topic} with traditional approaches. What problems does it solve?", hint:"Manual vs automated, reproducibility" },
    { cat:"Core Concepts", diff:"Hard", tpl:"Describe the internals of {topic} and how it manages resources.", hint:"Scheduling, networking, storage" },
    { cat:"System Design", diff:"Easy", tpl:"Design a CI/CD pipeline for {scenario} with automated testing.", hint:"Stages, gates, artifact management" },
    { cat:"System Design", diff:"Medium", tpl:"Design a highly available {scenario} infrastructure on the cloud.", hint:"Multi-AZ, auto-scaling, load balancing" },
    { cat:"System Design", diff:"Hard", tpl:"Design a multi-cluster {scenario} deployment strategy with service mesh.", hint:"Istio, mTLS, traffic splitting, observability" },
    { cat:"Problem Solving", diff:"Easy", tpl:"Write a {topic} configuration to deploy a simple web application.", hint:"Declarative syntax, resources, health checks" },
    { cat:"Problem Solving", diff:"Medium", tpl:"Debug a failed {topic} deployment. Walk through your investigation.", hint:"Logs, events, resource status, connectivity" },
    { cat:"Problem Solving", diff:"Hard", tpl:"Design a self-healing {topic} system that auto-recovers from failures.", hint:"Health checks, restart policies, automated rollback" },
    { cat:"Best Practices", diff:"Easy", tpl:"What are the best practices for writing {topic} manifests?", hint:"Immutability, labels, resource limits" },
    { cat:"Best Practices", diff:"Medium", tpl:"How do you implement secrets management in {topic}?", hint:"Vault, sealed secrets, external secrets operator" },
    { cat:"Performance", diff:"Medium", tpl:"How do you optimize {topic} resource utilization and reduce costs?", hint:"Horizontal scaling, resource quotas, spot instances" },
    { cat:"Performance", diff:"Hard", tpl:"Design a {topic} auto-scaling strategy that responds to traffic in real-time.", hint:"HPA, VPA, custom metrics, predictive scaling" },
    { cat:"Testing & Debugging", diff:"Medium", tpl:"How do you test {topic} infrastructure changes safely?", hint:"Terratest, policy-as-code, canary deployments" },
    { cat:"Security", diff:"Easy", tpl:"What security best practices apply to {topic}?", hint:"RBAC, network policies, image scanning" },
    { cat:"Security", diff:"Hard", tpl:"Design a zero-trust security model for {topic} across multi-cloud.", hint:"mTLS, identity-aware proxy, policy enforcement" },
    { cat:"Architecture", diff:"Medium", tpl:"Compare serverless vs container-based architectures for {topic}.", hint:"Cold starts, scaling, cost, operational overhead" },
    { cat:"Data Management", diff:"Medium", tpl:"How do you manage stateful applications in {topic}?", hint:"StatefulSets, persistent volumes, backups" },
    { cat:"Tooling & DevOps", diff:"Easy", tpl:"What monitoring and logging tools integrate with {topic}?", hint:"Prometheus, Grafana, ELK, Datadog" },
    { cat:"Tooling & DevOps", diff:"Medium", tpl:"Design a GitOps workflow for {topic} with progressive delivery.", hint:"ArgoCD, Flux, canary, feature flags" },
  ],
  "Mobile Developer": [
    { cat:"Core Concepts", diff:"Easy", tpl:"Explain the {topic} component life cycle and its states.", hint:"Creation, updates, destruction" },
    { cat:"Core Concepts", diff:"Medium", tpl:"Compare {topic} with its cross-platform alternatives.", hint:"Performance, development speed, native features" },
    { cat:"System Design", diff:"Easy", tpl:"Design the navigation architecture for a {scenario} app.", hint:"Stack, tabs, drawer, deep linking" },
    { cat:"System Design", diff:"Medium", tpl:"Design an offline-first {scenario} app with background sync.", hint:"Connectivity, local DB, conflict resolution" },
    { cat:"System Design", diff:"Hard", tpl:"Architect a {scenario} app that handles 10M+ daily active users.", hint:"Push notifications, in-app updates, analytics" },
    { cat:"Problem Solving", diff:"Easy", tpl:"Implement a custom UI component for {topic} with gesture handling.", hint:"Touch events, animations, state transitions" },
    { cat:"Problem Solving", diff:"Medium", tpl:"Implement infinite scrolling with pagination in {topic}.", hint:"Virtual list, onEndReached, performance" },
    { cat:"Problem Solving", diff:"Hard", tpl:"Implement a custom animation engine for {topic} with 60fps performance.", hint:"Native driver, worklets, interpolation" },
    { cat:"Best Practices", diff:"Easy", tpl:"What are the best practices for {topic} app architecture?", hint:"Clean architecture, separation of concerns" },
    { cat:"Best Practices", diff:"Medium", tpl:"How do you manage state in {topic} across multiple screens?", hint:"Global state, persistence, dependency injection" },
    { cat:"Performance", diff:"Easy", tpl:"How do you reduce app startup time in {topic}?", hint:"Lazy loading, splash screen, bundle optimization" },
    { cat:"Performance", diff:"Medium", tpl:"Optimize {topic} list rendering for thousands of items.", hint:"Windowing, memo, immutable data" },
    { cat:"Testing & Debugging", diff:"Medium", tpl:"Design a testing strategy for {topic} covering UI and integration.", hint:"Unit tests, widget tests, integration tests" },
    { cat:"Security", diff:"Easy", tpl:"How do you securely store sensitive data in {topic}?", hint:"Keychain, encrypted storage, biometric" },
    { cat:"Architecture", diff:"Medium", tpl:"Compare BLoC, MVVM, and MVI patterns in {topic}.", hint:"State management, testability, complexity" },
    { cat:"Data Management", diff:"Easy", tpl:"How do you implement local persistence in {topic}?", hint:"SQLite, Realm, shared preferences" },
    { cat:"Data Management", diff:"Hard", tpl:"Design a real-time data sync strategy for {topic} with conflict resolution.", hint:"CRDT, last-write-wins, operational transforms" },
    { cat:"Tooling & DevOps", diff:"Easy", tpl:"What CI/CD pipeline do you use for {topic} app releases?", hint:"Fastlane, code signing, beta distribution" },
  ],
  "Cloud Architect": [
    { cat:"Core Concepts", diff:"Easy", tpl:"Explain {topic} and its role in cloud computing.", hint:"IAAS, PAAS, SAAS, deployment models" },
    { cat:"Core Concepts", diff:"Medium", tpl:"Compare {topic} across AWS, Azure, and GCP.", hint:"Feature parity, pricing, ecosystem" },
    { cat:"System Design", diff:"Easy", tpl:"Design a cost-effective {scenario} architecture on the cloud.", hint:"Reserved instances, auto-scaling, storage tiers" },
    { cat:"System Design", diff:"Medium", tpl:"Design a multi-region {scenario} deployment with disaster recovery.", hint:"Active-active, active-passive, RTO/RPO" },
    { cat:"System Design", diff:"Hard", tpl:"Design a global-scale {scenario} platform spanning 5 regions with < 50ms latency.", hint:"Global load balancer, edge caching, DB replication" },
    { cat:"Problem Solving", diff:"Easy", tpl:"How do you estimate cloud costs for {topic}?", hint:"Pricing calculator, reserved vs on-demand" },
    { cat:"Problem Solving", diff:"Medium", tpl:"Design a migration strategy for {topic} from on-premises to the cloud.", hint:"Lift-and-shift, re-platform, re-architect" },
    { cat:"Problem Solving", diff:"Hard", tpl:"Design a cloud cost optimization strategy for {topic} that reduces spend by 40%.", hint:"Rightsizing, spot instances, storage lifecycle" },
    { cat:"Best Practices", diff:"Easy", tpl:"What are the Well-Architected Framework pillars for {topic}?", hint:"Cost, performance, reliability, security, ops" },
    { cat:"Best Practices", diff:"Medium", tpl:"How do you implement governance and compliance in {topic}?", hint:"IAM, organizations, service control policies" },
    { cat:"Performance", diff:"Medium", tpl:"Design a caching strategy for {topic} using CDN and edge computing.", hint:"CloudFront, Lambda@Edge, regional caches" },
    { cat:"Performance", diff:"Hard", tpl:"Design a high-performance computing architecture for {topic}.", hint:"GPU clusters, spot instances, job scheduling" },
    { cat:"Testing & Debugging", diff:"Medium", tpl:"How do you test cloud infrastructure for {topic}?", hint:"Chaos engineering, integration testing, dry runs" },
    { cat:"Security", diff:"Easy", tpl:"How do you secure {topic} with a shared responsibility model?", hint:"Network security, IAM, encryption at rest/transit" },
    { cat:"Security", diff:"Hard", tpl:"Design a defense-in-depth security architecture for {topic}.", hint:"WAF, Shield, guard duty, detective controls" },
    { cat:"Architecture", diff:"Medium", tpl:"Compare monolithic, microservices, and serverless for {topic}.", hint:"Operational overhead, scalability, cost" },
    { cat:"Data Management", diff:"Easy", tpl:"How do you choose between SQL and NoSQL for {topic}?", hint:"Data structure, consistency, scaling requirements" },
    { cat:"Data Management", diff:"Hard", tpl:"Design a data lake architecture for {topic} with analytics pipelines.", hint:"S3/ADLS, Glue, Athena, Redshift, visualization" },
    { cat:"Tooling & DevOps", diff:"Easy", tpl:"What IaC tools do you use for {topic}?", hint:"Terraform, CloudFormation, CDK, Pulumi" },
    { cat:"Tooling & DevOps", diff:"Medium", tpl:"Design a multi-account strategy for {topic} with proper isolation.", hint:"AWS Organizations, OU, SCP, centralized logging" },
  ],
  "Security Engineer": [
    { cat:"Core Concepts", diff:"Easy", tpl:"Explain {topic} and why it is critical for modern applications.", hint:"Confidentiality, integrity, availability" },
    { cat:"Core Concepts", diff:"Medium", tpl:"Compare {topic} with traditional security measures.", hint:"Preventive vs detective, signature vs behavior" },
    { cat:"System Design", diff:"Easy", tpl:"Design a secure authentication system for {scenario}.", hint:"MFA, OAuth, session management" },
    { cat:"System Design", diff:"Medium", tpl:"Design a security monitoring and alerting system for {scenario}.", hint:"SIEM, threat detection, incident response" },
    { cat:"System Design", diff:"Hard", tpl:"Design a zero-trust architecture for {scenario} across hybrid cloud.", hint:"Identity verification, micro-segmentation, continuous monitoring" },
    { cat:"Problem Solving", diff:"Easy", tpl:"How do you respond to a {topic} security incident?", hint:"Identify, contain, eradicate, recover, lessons" },
    { cat:"Problem Solving", diff:"Medium", tpl:"Implement a {topic} vulnerability scanner and remediation process.", hint:"Automated scanning, prioritization, patching" },
    { cat:"Problem Solving", diff:"Hard", tpl:"Design a {topic} threat detection system using machine learning.", hint:"Anomaly detection, behavioral analysis, false positives" },
    { cat:"Best Practices", diff:"Easy", tpl:"What are the OWASP Top 10 and how do they relate to {topic}?", hint:"Injection, XSS, broken auth, etc." },
    { cat:"Best Practices", diff:"Medium", tpl:"How do you implement secure coding practices for {topic}?", hint:"Input validation, output encoding, least privilege" },
    { cat:"Performance", diff:"Medium", tpl:"How do you balance security controls with system performance in {topic}?", hint:"Encryption overhead, rate limiting, WAF latency" },
    { cat:"Testing & Debugging", diff:"Easy", tpl:"How do you perform penetration testing for {topic}?", hint:"Recon, scanning, exploitation, reporting" },
    { cat:"Testing & Debugging", diff:"Medium", tpl:"Set up a security testing pipeline for {topic} with SAST and DAST.", hint:"Static analysis, dynamic analysis, dependency scanning" },
    { cat:"Security", diff:"Easy", tpl:"How do you implement encryption at rest and in transit for {topic}?", hint:"TLS, AES, key management, HSM" },
    { cat:"Security", diff:"Medium", tpl:"Design an IAM strategy for {topic} with least privilege.", hint:"RBAC, ABAC, policy as code, access reviews" },
    { cat:"Security", diff:"Hard", tpl:"Design a secrets management system for {topic} across distributed services.", hint:"Vault, rotation, audit, dynamic secrets" },
    { cat:"Architecture", diff:"Medium", tpl:"Compare security architectures: perimeter vs zero trust for {topic}.", hint:"Castle-and-moat vs verify-every-request" },
    { cat:"Data Management", diff:"Medium", tpl:"How do you implement data classification and protection in {topic}?", hint:"Tags, encryption, DLP, access controls" },
    { cat:"Tooling & DevOps", diff:"Easy", tpl:"What security tools integrate into a CI/CD pipeline for {topic}?", hint:"Snyk, Trivy, SonarQube, dependency check" },
    { cat:"Tooling & DevOps", diff:"Hard", tpl:"Design a DevSecOps pipeline for {topic} with automated compliance.", hint:"Policy-as-code, security gates, compliance scanning" },
  ],
};

// ---- Topics per role (for template expansion) ---------------------------
const ROLE_TOPICS: Record<string, string[]> = {
  "Frontend Developer": ["closures","React hooks","CSS Grid","event loop","browser rendering","Web APIs","transpilers","bundlers","state management","virtual DOM","progressive web apps","web components","TypeScript generics","CSS animations","service workers","lazy loading","memoization","context API","controlled components","error boundaries","portals","refs","higher-order components","render props","suspense","concurrent mode","server components","CSS modules","styled-components","Tailwind","accessibility tree","shadow DOM","custom elements","web workers","intersection observer","resize observer","performance API","history API","fetch API","IndexedDB"],
  "Backend Developer": ["Node.js Event Loop","Python GIL","Java JVM","Go goroutines","Rust ownership","Express middleware","Django ORM","Spring Boot","async/await","thread pools","connection pooling","database indexing","query optimization","message queues","WebSockets","gRPC","GraphQL","RESTful design","API versioning","dependency injection","inversion of control","AOP","database migrations","caching strategies","rate limiting","circuit breakers","bulkheads","retry policies","idempotency","distributed tracing","health checks","graceful shutdown","environment config","secrets management","logging frameworks","API gateways","load balancing","connection handling","stream processing","background jobs"],
  "Full Stack Developer": ["end-to-end types","API routes","server-side rendering","client-side hydration","database ORM","authentication flows","file uploads","real-time updates","form validation","pagination","search functionality","role-based access","error handling","data fetching","state synchronization","caching layer","build configuration","environment variables","logging strategy","monitoring setup","CI/CD pipeline","testing strategy","performance monitoring","security headers","responsive design","dark mode","i18n","localization","SEO optimization","analytics integration"],
  "Data Scientist": ["linear regression","logistic regression","decision trees","random forest","SVM","k-nearest neighbors","k-means clustering","PCA","t-SNE","Naive Bayes","gradient boosting","XGBoost","feature selection","dimensionality reduction","cross-validation","hyperparameter tuning","ensemble methods","time series analysis","NLP","computer vision","anomaly detection","recommendation systems","collaborative filtering","matrix factorization","association rules","A/B testing","statistical hypothesis","Bayesian inference","Monte Carlo methods","Markov chains"],
  "Machine Learning Engineer": ["neural networks","CNNs","RNNs","LSTMs","transformers","GANs","VAEs","reinforcement learning","transfer learning","few-shot learning","self-supervised learning","contrastive learning","attention mechanisms","embeddings","autoencoders","diffusion models","graph neural networks","neural architecture search","hyperparameter optimization","distributed training","model parallelism","data parallelism","gradient checkpointing","mixed precision training","knowledge distillation","model pruning","quantization","model serving","feature stores","experiment tracking"],
  "DevOps Engineer": ["Docker","Kubernetes","Terraform","Ansible","Jenkins","GitLab CI","GitHub Actions","Helm","Prometheus","Grafana","ELK Stack","Datadog","New Relic","Service Mesh","Istio","Consul","Vault","ArgoCD","Flux","Pulumi","Crossplane","CloudFormation","Packer","Vagrant","Chef","Puppet","SaltStack","Nagios","Splunk","Dynatrace"],
  "Mobile Developer": ["widget lifecycle","state management","navigation","networking","local storage","push notifications","background services","platform channels","hot reload","dependency injection","testing framework","animation framework","gesture handling","themeng","responsive layout","accessibility","app signing","code push","deep linking","app bundles","proguard","multidex","app thinning","metal rendering","core animation","bloc pattern","provider pattern","riverpod","getx","redux toolkit"],
  "Cloud Architect": ["VPC design","subnetting","security groups","load balancers","auto-scaling","CDN","DNS routing","cloud storage","database services","serverless computing","container orchestration","message queues","event buses","data pipelines","machine learning services","identity management","key management","cloud monitoring","cost management","resource tagging","cloud governance","compliance frameworks","cloud migration","hybrid cloud","multi-cloud","edge computing","cloud-native","well-architected framework","disaster recovery","business continuity"],
  "Security Engineer": ["encryption","authentication","authorization","network security","application security","cloud security","identity management","threat intelligence","vulnerability management","incident response","security monitoring","compliance","governance","risk assessment","penetration testing","secure coding","cryptography","public key infrastructure","security operations","forensic analysis","malware analysis","social engineering","physical security","privacy","data protection","audit logging","access control","security architecture","threat modeling","zero trust"],
};

const SCENARIOS: Record<string, string[]> = {
  "Frontend Developer": ["e-commerce dashboard","social media feed","real-time chat","project management tool","data visualization platform","collaborative editor","music streaming UI","video conferencing","form builder","analytics dashboard"],
  "Backend Developer": ["payment processing","notification system","content management","inventory management","booking system","real-time analytics","file storage service","email delivery","search engine","social network API"],
  "Full Stack Developer": ["e-commerce platform","project management app","social network","learning management","healthcare portal","booking platform","real estate marketplace","job board","collaboration tool","fitness tracking app"],
  "Data Scientist": ["customer churn prediction","fraud detection system","recommendation engine","sales forecasting","sentiment analysis pipeline","image classification system","anomaly detection platform","personalization engine","optimization solver","NLP pipeline"],
  "Machine Learning Engineer": ["image recognition system","real-time translation","content recommendation","autonomous agent","conversational AI","document classification","video analysis pipeline","predictive maintenance","drug discovery platform","generative AI application"],
  "DevOps Engineer": ["microservices platform","data processing pipeline","e-commerce infrastructure","SaaS application","media streaming platform","IoT device management","fintech platform","healthcare system","gaming backend","enterprise application"],
  "Mobile Developer": ["social media app","fitness tracker","e-commerce app","messaging app","note-taking app","music player","food delivery app","ride sharing app","banking app","travel booking app"],
  "Cloud Architect": ["global e-commerce platform","SaaS offering","data analytics platform","IoT solution","media streaming service","financial services platform","healthcare system","gaming platform","enterprise application","real-time collaboration"],
  "Security Engineer": ["cloud infrastructure","web application","mobile app ecosystem","IoT network","enterprise network","critical infrastructure","healthcare system","financial platform","government system","e-commerce platform"],
};

// ---- Generate 100+ questions per role ----------------------------------
function buildQuestionBank(role: string): { q: string; hint: string; cat: string; diff: string }[] {
  const templates = ROLE_TEMPLATES[role] || [];
  const topics = ROLE_TOPICS[role] || [];
  const scenarios = SCENARIOS[role] || [];
  const pool: { q: string; hint: string; cat: string; diff: string }[] = [];

  for (const t of templates) {
    const shuffledTopics = [...topics].sort(() => Math.random() - 0.5);
    const count = Math.min(shuffledTopics.length, Math.max(4, Math.floor(100 / templates.length)));
    for (let i = 0; i < count; i++) {
      const topic = shuffledTopics[i % shuffledTopics.length];
      const scenario = scenarios[i % scenarios.length];
      const q = t.tpl.replace(/\{topic\}/g, topic).replace(/\{scenario\}/g, scenario);
      if (!pool.some((p) => p.q === q)) {
        pool.push({ q, hint: t.hint, cat: t.cat, diff: t.diff });
      }
    }
  }

  let safety = 0;
  while (pool.length < 100 && safety < 500) {
    safety++;
    const t = templates[pool.length % templates.length];
    const topic = topics[pool.length % topics.length];
    const scenario = scenarios[pool.length % scenarios.length];
    const q = t.tpl.replace(/\{topic\}/g, topic).replace(/\{scenario\}/g, scenario);
    if (!pool.some((p) => p.q === q)) {
      pool.push({ q, hint: t.hint, cat: t.cat, diff: t.diff });
    }
  }

  return pool.sort(() => Math.random() - 0.5).slice(0, 120);
}

// ---- Lazy question banks (computed on first access) --------------------
let _questionBanks: Record<string, ReturnType<typeof buildQuestionBank>> | null = null;
function getQuestionBanks() {
  if (!_questionBanks) {
    _questionBanks = {};
    for (const role of ROLES) {
      _questionBanks[role] = buildQuestionBank(role);
    }
  }
  return _questionBanks;
}

// ---- Helpers -----------------------------------------------------------
const SUB_FEATURES = [
  { id:"generator", label:"Question Generator", icon:"⚡", desc:"Generate tailored questions by role, category & difficulty" },
  { id:"mock", label:"Mock Interview", icon:"🎤", desc:"Simulate interviews with timed questions & live feedback" },
  { id:"evaluate", label:"Answer Evaluation", icon:"📝", desc:"Submit answers and receive detailed AI-powered scoring" },
  { id:"feedback", label:"Feedback Generator", icon:"💡", desc:"Get personalized feedback to improve your performance" },
  { id:"roles", label:"Role-Specific", icon:"🎯", desc:"Curated questions and tasks tailored to each career track" },
];

// =========================================================================
// Component
// =========================================================================
export default function InterviewPrepPage() {
  const [activeTab, setActiveTab] = useState("generator");
  const [selectedRole, setSelectedRole] = useState("Frontend Developer");

  // Question Generator state
  const [genFilterCat, setGenFilterCat] = useState("All");
  const [genFilterDiff, setGenFilterDiff] = useState("All");
  const [genSearch, setGenSearch] = useState("");
  const [genPage, setGenPage] = useState(0);
  const PAGE_SIZE = 8;
  const [genGenerated, setGenGenerated] = useState(false);
  const [savedQs, setSavedQs] = useState<Set<string>>(new Set());
  const [genShowHints, setGenShowHints] = useState<Record<number, boolean>>({});

  // Mock Interview state
  const [mockActive, setMockActive] = useState(false);
  const [mockQuestion, setMockQuestion] = useState("");
  const [mockHint, setMockHint] = useState("");
  const [mockTimer, setMockTimer] = useState(0);
  const [mockAnswer, setMockAnswer] = useState("");
  const [mockFeedback, setMockFeedback] = useState("");
  const [mockStep, setMockStep] = useState<"ready"|"answering"|"done">("ready");
  const [mockConfidence, setMockConfidence] = useState(3);
  const [mockHistory, setMockHistory] = useState<{ q: string; answer: string; time: number }[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mockQIndex = useRef(0);
  const [mockQs, setMockQs] = useState<{ q: string; hint: string }[]>([]);

  // Answer Evaluation state
  const [evalQuestion, setEvalQuestion] = useState("");
  const [evalAnswer, setEvalAnswer] = useState("");
  const [evalResult, setEvalResult] = useState<{
    overall: number; structure: number; relevance: number; examples: number;
    conciseness: number; technical: number; problemSolving: number;
    feedback: string; keywords: string[]; wordCount: number; suggestions: string[];
  } | null>(null);

  // Feedback Generator state
  const [feedbackRole, setFeedbackRole] = useState("Frontend Developer");
  const [feedbackTech, setFeedbackTech] = useState("");
  const [feedbackComm, setFeedbackComm] = useState("");
  const [feedbackProblem, setFeedbackProblem] = useState("");
  const [feedbackResult, setFeedbackResult] = useState<{
    score: number; techScore: number; commScore: number; problemScore: number;
    strengths: string[]; weaknesses: string[]; tips: string[]; actionItems: string[];
  } | null>(null);

  // Role-Specific state
  const [roleCatFilter, setRoleCatFilter] = useState("All");
  const [roleSearch, setRoleSearch] = useState("");
  const [expandedQ, setExpandedQ] = useState<number | null>(null);

  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  // ---- Question Generator ------------------------------------------------
  const filteredQs = useMemo(() => {
    if (!genGenerated) return [];
    const bank = getQuestionBanks()[selectedRole] || [];
    return bank.filter((q) => {
      if (genFilterCat !== "All" && q.cat !== genFilterCat) return false;
      if (genFilterDiff !== "All" && q.diff !== genFilterDiff) return false;
      if (genSearch && !q.q.toLowerCase().includes(genSearch.toLowerCase())) return false;
      return true;
    });
  }, [selectedRole, genFilterCat, genFilterDiff, genSearch, genGenerated]);

  const pagedQs = useMemo(() => filteredQs.slice(genPage * PAGE_SIZE, (genPage + 1) * PAGE_SIZE), [filteredQs, genPage]);
  const totalPages = Math.max(1, Math.ceil(filteredQs.length / PAGE_SIZE));

  function regenerate() {
    const fresh = buildQuestionBank(selectedRole);
    getQuestionBanks()[selectedRole] = fresh;
    setGenGenerated(true);
    setGenPage(0);
    setGenShowHints({});
  }

  function toggleSaved(q: string) {
    setSavedQs((prev) => {
      const next = new Set(prev);
      if (next.has(q)) next.delete(q); else next.add(q);
      return next;
    });
  }

  function copyQ(q: string) {
    navigator.clipboard.writeText(q);
  }

  // ---- Mock Interview ----------------------------------------------------
  function startMock() {
    const pool = getQuestionBanks()[selectedRole] || [];
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 8);
    setMockQs(shuffled);
    mockQIndex.current = 0;
    setMockQuestion(shuffled[0].q);
    setMockHint(shuffled[0].hint);
    setMockTimer(150);
    setMockAnswer("");
    setMockFeedback("");
    setMockConfidence(3);
    setMockHistory([]);
    setMockStep("answering");
    setMockActive(true);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setMockTimer((prev) => {
        if (prev <= 1) { if (timerRef.current) clearInterval(timerRef.current); return 0; }
        return prev - 1;
      });
    }, 1000);
  }

  function skipMock() {
    setMockHistory((prev) => [...prev, { q: mockQuestion, answer: "[Skipped]", time: 150 - mockTimer }]);
    advanceMock();
  }

  function submitMockAnswer() {
    if (timerRef.current) clearInterval(timerRef.current);
    setMockHistory((prev) => [...prev, { q: mockQuestion, answer: mockAnswer, time: 150 - mockTimer }]);
    const wc = mockAnswer.split(/\s+/).filter(Boolean).length;
    const fb = wc < 30
      ? "Your answer is brief. Expand with specific examples, mention trade-offs, and relate to real-world experience."
      : wc < 80
        ? "Solid answer! Consider adding a code snippet or architectural diagram for more impact."
        : "Excellent depth! Your answer demonstrates strong understanding. Try to connect it to system design principles.";
    setMockFeedback(fb);
    setMockStep("done");
  }

  function advanceMock() {
    if (mockQIndex.current + 1 < mockQs.length) {
      mockQIndex.current++;
      setMockQuestion(mockQs[mockQIndex.current].q);
      setMockHint(mockQs[mockQIndex.current].hint);
      setMockTimer(150);
      setMockAnswer("");
      setMockFeedback("");
      setMockConfidence(3);
      setMockStep("answering");
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setMockTimer((prev) => {
          if (prev <= 1) { if (timerRef.current) clearInterval(timerRef.current); return 0; }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setMockStep("ready");
      setMockActive(false);
      setMockFeedback("🎉 Mock interview complete! Review your summary below.");
    }
  }

  function mockTimerPct() {
    return (mockTimer / 150) * 100;
  }

  // ---- Answer Evaluation -------------------------------------------------
  const evalBank = getQuestionBanks()[selectedRole] || [];

  function evaluateAnswer() {
    if (!evalAnswer.trim() || !evalQuestion.trim()) return;
    const wc = evalAnswer.split(/\s+/).filter(Boolean).length;
    const hasCode = /`[^`]+`/.test(evalAnswer) || /\b(function|const|let|import|export|class|def|var)\b/.test(evalAnswer);
    const hasExample = /\b(for example|for instance|such as|like|specifically|in practice)\b/i.test(evalAnswer);
    const hasTradeoffs = /\b(trade.?off|advantage|disadvantage|pros?|cons?|alternative|compare|instead|however)\b/i.test(evalAnswer);
    const base = Math.min(100, 30 + wc * 0.8 + (hasCode ? 12 : 0) + (hasExample ? 10 : 0) + (hasTradeoffs ? 8 : 0) + Math.random() * 10);
    setEvalResult({
      overall: Math.round(base),
      structure: Math.round(Math.min(100, 40 + Math.random() * 40 + (wc > 50 ? 15 : 0))),
      relevance: Math.round(Math.min(100, 50 + Math.random() * 35 + (hasTradeoffs ? 10 : 0))),
      examples: Math.round(Math.min(100, hasExample ? 60 + Math.random() * 30 : 30 + Math.random() * 25)),
      conciseness: Math.round(Math.min(100, wc > 120 ? 50 + Math.random() * 15 : wc > 30 ? 60 + Math.random() * 25 : 40 + Math.random() * 20)),
      technical: Math.round(Math.min(100, 40 + Math.random() * 30 + (hasCode ? 20 : 0))),
      problemSolving: Math.round(Math.min(100, 35 + Math.random() * 35 + (hasTradeoffs ? 15 : 0))),
      feedback: wc < 30
        ? "Your answer is too brief. Structure it with: definition → example → trade-offs → conclusion."
        : wc < 80
          ? "Good foundation. Strengthen with a code example, real-world scenario, and mention alternatives."
          : "Well-structured answer. To excel, add quantitative comparisons and edge case handling.",
      keywords: evalAnswer.split(/\s+/).filter((w) => w.length > 6).slice(0, 8),
      wordCount: wc,
      suggestions: wc < 30
        ? ["Expand to at least 80 words", "Add a concrete code example", "Explain trade-offs or alternatives", "Use the STAR method for structure"]
        : !hasCode
          ? ["Include a code snippet to demonstrate implementation", "Add a real-world use case", "Compare with alternative approaches"]
          : !hasExample
            ? ["Add a specific example from your experience", "Mention performance implications", "Discuss when NOT to use this approach"]
            : ["Excellent detail! Consider a diagram description", "Add edge case handling", "Connect to broader system design patterns"],
    });
  }

  // ---- Feedback Generator -------------------------------------------------
  function generateFeedback() {
    const techLen = feedbackTech.split(/\s+/).filter(Boolean).length;
    const commLen = feedbackComm.split(/\s+/).filter(Boolean).length;
    const probLen = feedbackProblem.split(/\s+/).filter(Boolean).length;
    const techScore = Math.min(100, 40 + techLen * 1.2 + Math.random() * 15);
    const commScore = Math.min(100, 40 + commLen * 1.2 + Math.random() * 15);
    const problemScore = Math.min(100, 40 + probLen * 1.2 + Math.random() * 15);
    const overall = Math.round((techScore + commScore + problemScore) / 3);
    setFeedbackResult({
      score: overall,
      techScore: Math.round(techScore),
      commScore: Math.round(commScore),
      problemScore: Math.round(problemScore),
      strengths: [
        techLen > 20 ? "Solid technical knowledge with good depth" : "Shows willingness to learn technical concepts",
        commLen > 15 ? "Communicates ideas clearly and concisely" : "Answers are structured logically",
        probLen > 20 ? "Strong problem-solving methodology" : "Able to break down complex problems",
        "Demonstrates awareness of industry best practices",
      ],
      weaknesses: [
        techLen < 20 ? "Could deepen technical explanations with examples" : "Need more hands-on project experience",
        commLen < 15 ? "Practice structuring answers with STAR method" : "Work on speaking more confidently",
        probLen < 20 ? "Practice more algorithm and system design problems" : "Consider edge cases in solutions",
      ],
      tips: [
        "Use the STAR method for behavioral questions",
        "Always mention trade-offs and alternatives",
        "Include specific metrics and outcomes",
        "Practice explaining complex topics simply",
      ],
      actionItems: [
        techScore < 60 ? "Review core CS fundamentals and practice coding questions" : "Explore advanced system design patterns",
        commScore < 60 ? "Record yourself answering questions and review" : "Mentor others to reinforce knowledge",
        problemScore < 60 ? "Solve 2-3 LeetCode problems daily" : "Practice system design whiteboarding",
        "Schedule 3 mock interviews this week",
      ],
    });
  }

  // ---- Role-Specific filtering -------------------------------------------
  const filteredRoleQs = useMemo(() => {
    let qs = getQuestionBanks()[selectedRole] || [];
    if (roleCatFilter !== "All") qs = qs.filter((q) => q.cat === roleCatFilter);
    if (roleSearch) qs = qs.filter((q) => q.q.toLowerCase().includes(roleSearch.toLowerCase()));
    return qs;
  }, [selectedRole, roleCatFilter, roleSearch]);

  // =========================================================================
  // Render
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#0B0D1E] flex flex-col">
      <DashboardNavbar />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />
      </div>

          <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-8 py-6 sm:py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-purple-300 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
            AI-Powered Interview Preparation
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-2 sm:mb-3 tracking-tight">
            Interview Prep <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Studio</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2">
            Master your next interview with AI-generated questions, real-time mock interviews, and personalized feedback.
          </p>
        </motion.div>

        {/* Sub-feature tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 mb-6 sm:mb-10">
          {SUB_FEATURES.map((f) => (
            <motion.button key={f.id} whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(f.id)}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl p-3 sm:p-4 text-left transition-all duration-300 ${
                activeTab === f.id
                  ? "bg-gradient-to-br from-purple-600/30 to-pink-600/20 border border-purple-500/40 shadow-lg shadow-purple-500/10"
                  : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}>
              {activeTab === f.id && (
                <motion.div layoutId="tabGlow" className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" transition={{ type:"spring", stiffness:300, damping:30 }} />
              )}
              <div className="relative z-10">
                <span className="text-lg sm:text-2xl">{f.icon}</span>
                <p className={`text-[11px] sm:text-sm font-bold mt-1 sm:mt-2 ${activeTab === f.id ? "text-white" : "text-gray-300"}`}>{f.label}</p>
                <p className={`text-[9px] sm:text-[10px] mt-0.5 sm:mt-1 leading-tight hidden sm:block ${activeTab === f.id ? "text-purple-200" : "text-gray-500"}`}>{f.desc}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>

            {/* ================================================================== */}
            {/* Question Generator                                                 */}
            {/* ================================================================== */}
            {activeTab === "generator" && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                {/* Controls */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mb-5">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-[10px] text-gray-500 mb-1 font-medium uppercase tracking-wider">Role</label>
                    <select value={selectedRole} onChange={(e) => { setSelectedRole(e.target.value); setGenGenerated(false); setGenPage(0); }}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500">
                      {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1 font-medium uppercase tracking-wider">Category</label>
                    <select value={genFilterCat} onChange={(e) => { setGenFilterCat(e.target.value); setGenPage(0); }}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500">
                      <option value="All">All</option>
                      {Q_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1 font-medium uppercase tracking-wider">Difficulty</label>
                    <select value={genFilterDiff} onChange={(e) => { setGenFilterDiff(e.target.value); setGenPage(0); }}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500">
                      <option value="All">All</option>
                      {DIFFICULTIES.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-[10px] text-gray-500 mb-1 font-medium uppercase tracking-wider">Search</label>
                    <input value={genSearch} onChange={(e) => { setGenSearch(e.target.value); setGenPage(0); }} placeholder="Search..."
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-purple-500" />
                  </div>
                  <div className="flex items-end gap-2 col-span-2 sm:col-span-1">
                    <motion.button whileTap={{ scale: 0.97 }} onClick={regenerate}
                      className="flex-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-purple-500/20">
                      Generate
                    </motion.button>
                    <motion.button whileTap={{ scale: 0.97 }} onClick={() => { setGenFilterCat("All"); setGenFilterDiff("All"); setGenSearch(""); setGenPage(0); }}
                      className="flex-1 px-3 py-2 bg-white/10 text-gray-300 rounded-xl text-sm hover:bg-white/20">
                      Reset
                    </motion.button>
                  </div>
                </div>

                {/* Stats bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4 px-1">
                  <span className="text-xs text-gray-400">
                    {genGenerated ? (
                      <><strong className="text-white">{filteredQs.length}</strong> questions</>
                    ) : (
                      <span className="text-gray-500">Click <strong className="text-purple-300">Generate</strong> to start</span>
                    )}
                    {genGenerated && genFilterCat !== "All" && <> · <span className="text-purple-300">{genFilterCat}</span></>}
                    {genGenerated && genFilterDiff !== "All" && <> · <span className="text-purple-300">{genFilterDiff}</span></>}
                    {genGenerated && savedQs.size > 0 && <> · <strong className="text-amber-400">{savedQs.size}</strong> saved</>}
                  </span>
                  {totalPages > 1 && (
                    <div className="flex items-center gap-2 text-xs">
                      <button onClick={() => setGenPage(Math.max(0, genPage - 1))} disabled={genPage === 0}
                        className="px-2 py-1 bg-white/10 rounded-lg disabled:opacity-30 text-white hover:bg-white/20">←</button>
                      <span className="text-gray-400 whitespace-nowrap">{genPage + 1} / {totalPages}</span>
                      <button onClick={() => setGenPage(Math.min(totalPages - 1, genPage + 1))} disabled={genPage >= totalPages - 1}
                        className="px-2 py-1 bg-white/10 rounded-lg disabled:opacity-30 text-white hover:bg-white/20">→</button>
                    </div>
                  )}
                </div>

                {/* Questions */}
                {!genGenerated ? (
                  <div className="text-center py-16">
                    <span className="text-5xl">⚡</span>
                    <p className="text-gray-400 mt-4 text-sm font-medium">Select a role and click <strong className="text-purple-300">Generate</strong> to start</p>
                    <p className="text-gray-600 mt-1 text-xs">100+ questions tailored to your role, filtered by category &amp; difficulty</p>
                  </div>
                ) : pagedQs.length > 0 ? (
                  <div className="space-y-2.5">
                    {pagedQs.map((item, i) => (
                      <motion.div key={genPage * PAGE_SIZE + i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-purple-500/30 transition group">
                        <div className="flex gap-3">
                          <span className="text-purple-400 font-mono text-xs font-bold mt-0.5 shrink-0">{genPage * PAGE_SIZE + i + 1}.</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start gap-2 mb-1">
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                                item.diff === "Easy" ? "bg-emerald-500/20 text-emerald-300"
                                  : item.diff === "Medium" ? "bg-amber-500/20 text-amber-300"
                                    : "bg-red-500/20 text-red-300"}`}>{item.diff}</span>
                              <span className="text-[10px] text-gray-500 bg-white/5 px-1.5 py-0.5 rounded-md">{item.cat}</span>
                            </div>
                            <p className="text-white text-sm leading-relaxed">{item.q}</p>
                            <AnimatePresence>
                              {genShowHints[i] && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                                  <p className="mt-1.5 text-xs text-purple-300 bg-purple-500/10 rounded-xl px-3 py-2 border border-purple-500/20">💡 {item.hint}</p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                            <div className="flex items-center gap-3 mt-2">
                              <button onClick={() => setGenShowHints((p) => ({ ...p, [i]: !p[i] }))}
                                className="text-[10px] text-gray-500 hover:text-purple-400 transition">{genShowHints[i] ? "Hide hint" : "Show hint"}</button>
                              <button onClick={() => toggleSaved(item.q)}
                                className={`text-[10px] transition ${savedQs.has(item.q) ? "text-amber-400" : "text-gray-500 hover:text-amber-400"}`}>
                                {savedQs.has(item.q) ? "★ Bookmarked" : "☆ Bookmark"}
                              </button>
                              <button onClick={() => copyQ(item.q)} className="text-[10px] text-gray-500 hover:text-blue-400 transition">📋 Copy</button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <span className="text-5xl">⚡</span>
                    <p className="text-gray-500 mt-4 text-sm">No questions match your filters. Try adjusting them.</p>
                  </div>
                )}

                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-6">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button key={i} onClick={() => setGenPage(i)}
                        className={`w-8 h-8 rounded-xl text-xs font-bold transition ${genPage === i ? "bg-purple-600 text-white" : "bg-white/10 text-gray-400 hover:bg-white/20"}`}>
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ================================================================== */}
            {/* Mock Interview                                                     */}
            {/* ================================================================== */}
            {activeTab === "mock" && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                {mockStep === "ready" && !mockActive && (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6 border border-purple-500/30">🎤</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Mock Interview Simulator</h3>
                    <p className="text-gray-400 text-sm max-w-md mx-auto mb-2">Simulate a real interview with 8 timed questions. 2:30 per question.</p>
                    <p className="text-gray-500 text-xs max-w-md mx-auto mb-6">Track your progress, get live feedback, and review your performance summary.</p>
                    <div className="flex items-center gap-3 justify-center mb-6">
                      <span className="text-xs text-gray-500">Role:</span>
                      <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-purple-500">
                        {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={startMock}
                      className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold shadow-lg shadow-purple-500/20">
                      Start Mock Interview →
                    </motion.button>
                  </div>
                )}

                {(mockStep === "answering" || mockStep === "done") && (
                  <div>
                    {/* Progress bar */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${((mockQIndex.current + (mockStep === "done" ? 1 : 0)) / mockQs.length) * 100}%` }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                      </div>
                      <span className="text-xs text-gray-400 font-mono shrink-0">{mockQIndex.current + (mockStep === "done" ? 1 : 0)}/{mockQs.length}</span>
                    </div>

                    {mockStep === "answering" && (
                      <>
                        {/* Timer bar */}
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                          <motion.div animate={{ width: `${mockTimerPct()}%` }}
                            className={`h-full rounded-full transition-colors ${mockTimer <= 20 ? "bg-red-500" : mockTimer <= 60 ? "bg-amber-500" : "bg-purple-500"}`} />
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
                          <div className="flex-1 w-full sm:w-auto">
                            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Question {mockQIndex.current + 1}</span>
                            <p className="text-sm sm:text-base font-bold text-white mt-0.5 leading-snug">{mockQuestion}</p>
                          </div>
                          <div className={`text-xl sm:text-2xl font-black font-mono shrink-0 self-end sm:self-auto ${mockTimer <= 20 ? "text-red-400 animate-pulse" : "text-purple-400"}`}>
                            {Math.floor(mockTimer / 60)}:{(mockTimer % 60).toString().padStart(2, "0")}
                          </div>
                        </div>
                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl px-4 py-2.5 mb-4">
                          <p className="text-xs text-purple-300">💡 {mockHint}</p>
                        </div>
                        <textarea value={mockAnswer} onChange={(e) => setMockAnswer(e.target.value)}
                          placeholder="Type your answer here..."
                          className="w-full h-28 bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-purple-500 transition resize-none" />
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-3">
                          <div className="flex items-center gap-1 flex-wrap">
                            <span className="text-[10px] text-gray-500 whitespace-nowrap">Confidence:</span>
                            {[1,2,3,4,5].map((n) => (
                              <button key={n} onClick={() => setMockConfidence(n)}
                                className={`text-xs sm:text-sm transition ${mockConfidence >= n ? "text-amber-400" : "text-gray-600"}`}>
                                {mockConfidence >= n ? "★" : "☆"}
                              </button>
                            ))}
                            <span className="text-[10px] text-gray-500 ml-1 whitespace-nowrap">{mockAnswer.split(/\s+/).filter(Boolean).length} words</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 mt-4">
                          <motion.button whileTap={{ scale: 0.97 }} onClick={submitMockAnswer} disabled={!mockAnswer.trim()}
                            className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-sm disabled:opacity-30">
                            Submit Answer
                          </motion.button>
                          <motion.button whileTap={{ scale: 0.97 }} onClick={skipMock}
                            className="w-full sm:w-auto px-5 py-2.5 bg-white/10 text-gray-300 rounded-xl text-sm hover:bg-white/20">
                            Skip →
                          </motion.button>
                        </div>
                      </>
                    )}

                    {mockStep === "done" && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="text-center mb-6">
                          <span className="text-4xl">📊</span>
                          <h3 className="text-xl font-bold text-white mt-2">Feedback</h3>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                          <p className="text-sm text-gray-200 leading-relaxed">{mockFeedback}</p>
                        </div>
                        <div className="flex gap-3 justify-center">
                          <motion.button whileTap={{ scale: 0.97 }} onClick={advanceMock}
                            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-sm">
                            {mockQIndex.current + 1 < mockQs.length ? "Next Question →" : "Finish & See Summary"}
                          </motion.button>
                        </div>
                      </motion.div>
                    )}

                    {mockHistory.length > 0 && !mockActive && (
                      <div className="mt-8 pt-6 border-t border-white/10">
                        <h4 className="text-sm font-bold text-white mb-3">Interview Summary</h4>
                        <div className="space-y-2">
                          {mockHistory.map((h, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3">
                              <p className="text-xs text-white font-medium">{i + 1}. {h.q.slice(0, 80)}...</p>
                              <div className="flex gap-3 mt-1 text-[10px] text-gray-500">
                                <span>Time: {h.time}s</span>
                                <span>{h.answer === "[Skipped]" ? "⚠ Skipped" : `${h.answer.split(/\s+/).filter(Boolean).length} words`}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-center mt-4">
                          <motion.button whileTap={{ scale: 0.97 }} onClick={startMock}
                            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-sm">
                            Start New Mock Interview
                          </motion.button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* ================================================================== */}
            {/* Answer Evaluation                                                  */}
            {/* ================================================================== */}
            {activeTab === "evaluate" && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1 font-medium uppercase tracking-wider">Role</label>
                    <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500 mb-4">
                      {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                    <label className="block text-[10px] text-gray-500 mb-1 font-medium uppercase tracking-wider">Interview Question</label>
                    <select value={evalQuestion} onChange={(e) => setEvalQuestion(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500 mb-4">
                      <option value="">Select a question...</option>
                      {evalBank.map((item, i) => (
                        <option key={i} value={item.q}>{item.q.slice(0, 70)}...</option>
                      ))}
                    </select>
                    <label className="block text-[10px] text-gray-500 mb-1 font-medium uppercase tracking-wider">Your Answer</label>
                    <textarea value={evalAnswer} onChange={(e) => setEvalAnswer(e.target.value)}
                      placeholder="Paste your answer here..."
                      className="w-full h-32 sm:h-44 bg-white/5 border border-white/20 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white text-sm focus:outline-none focus:border-purple-500 transition resize-none" />
                    <div className="flex items-center justify-between mt-2 mb-3">
                      <span className="text-[10px] text-gray-500">{evalAnswer.split(/\s+/).filter(Boolean).length} words</span>
                    </div>
                    <motion.button whileTap={{ scale: 0.97 }} onClick={evaluateAnswer} disabled={!evalAnswer.trim() || !evalQuestion.trim()}
                      className="w-full px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-sm disabled:opacity-30">
                      Evaluate Answer
                    </motion.button>
                  </div>

                  <div>
                    {evalResult ? (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs text-gray-400 font-medium">Overall Score</span>
                            <span className={`text-3xl font-black ${evalResult.overall >= 70 ? "text-emerald-400" : evalResult.overall >= 50 ? "text-amber-400" : "text-red-400"}`}>
                              {evalResult.overall}%
                            </span>
                          </div>
                          <div className="text-[10px] text-gray-500 mb-3">{evalResult.wordCount} words · Keywords: {evalResult.keywords.slice(0, 5).join(", ")}</div>
                          <div className="space-y-2">
                            {[
                              { label:"Structure", value:evalResult.structure, color:"bg-blue-500" },
                              { label:"Relevance", value:evalResult.relevance, color:"bg-emerald-500" },
                              { label:"Examples", value:evalResult.examples, color:"bg-amber-500" },
                              { label:"Conciseness", value:evalResult.conciseness, color:"bg-cyan-500" },
                              { label:"Technical Accuracy", value:evalResult.technical, color:"bg-purple-500" },
                              { label:"Problem Solving", value:evalResult.problemSolving, color:"bg-pink-500" },
                            ].map((m) => (
                              <div key={m.label}>
                                <div className="flex justify-between text-[10px] mb-0.5">
                                  <span className="text-gray-400">{m.label}</span>
                                  <span className="text-gray-300 font-mono">{m.value}%</span>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                  <motion.div initial={{ width: 0 }} animate={{ width: `${m.value}%` }} transition={{ duration: 0.8 }}
                                    className={`h-full rounded-full ${m.color}`} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-2">Feedback</p>
                          <p className="text-sm text-gray-200 leading-relaxed">{evalResult.feedback}</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                          <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-2">Improvement Suggestions</p>
                          <ul className="space-y-1">
                            {evalResult.suggestions.map((s, i) => (
                              <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                                <span className="text-purple-400 mt-0.5">•</span> {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-5xl">📝</span>
                          <p className="text-gray-500 mt-4 text-sm">Select a question and paste your answer to get evaluated across 6 dimensions.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ================================================================== */}
            {/* Feedback Generator                                                 */}
            {/* ================================================================== */}
            {activeTab === "feedback" && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1 font-medium uppercase tracking-wider">Target Role</label>
                    <select value={feedbackRole} onChange={(e) => setFeedbackRole(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500 mb-4">
                      {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                    <label className="block text-[10px] text-gray-500 mb-1 font-medium uppercase tracking-wider">Technical Skills</label>
                    <textarea value={feedbackTech} onChange={(e) => setFeedbackTech(e.target.value)}
                      placeholder="Describe your technical performance – what concepts you discussed, how deep you went..."
                      className="w-full h-20 bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-purple-500 transition resize-none mb-3" />
                    <label className="block text-[10px] text-gray-500 mb-1 font-medium uppercase tracking-wider">Communication</label>
                    <textarea value={feedbackComm} onChange={(e) => setFeedbackComm(e.target.value)}
                      placeholder="How well did you articulate your thoughts? Were your answers structured?"
                      className="w-full h-20 bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-purple-500 transition resize-none mb-3" />
                    <label className="block text-[10px] text-gray-500 mb-1 font-medium uppercase tracking-wider">Problem Solving</label>
                    <textarea value={feedbackProblem} onChange={(e) => setFeedbackProblem(e.target.value)}
                      placeholder="Describe your approach to problem-solving questions, algorithms, and system design tasks."
                      className="w-full h-20 bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-purple-500 transition resize-none mb-3" />
                    <motion.button whileTap={{ scale: 0.97 }} onClick={generateFeedback}
                      disabled={!feedbackTech.trim() && !feedbackComm.trim() && !feedbackProblem.trim()}
                      className="w-full px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-sm disabled:opacity-30">
                      Generate Feedback
                    </motion.button>
                  </div>

                  <div>
                    {feedbackResult ? (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                          <div className="text-center mb-4">
                            <span className="text-xs text-gray-400">Overall Score</span>
                            <div className={`text-4xl font-black ${feedbackResult.score >= 70 ? "text-emerald-400" : feedbackResult.score >= 50 ? "text-amber-400" : "text-red-400"}`}>
                              {feedbackResult.score}%
                            </div>
                          </div>
                          <div className="space-y-2">
                            {[
                              { label:"Technical Skills", value:feedbackResult.techScore, color:"bg-blue-500" },
                              { label:"Communication", value:feedbackResult.commScore, color:"bg-emerald-500" },
                              { label:"Problem Solving", value:feedbackResult.problemScore, color:"bg-amber-500" },
                            ].map((m) => (
                              <div key={m.label}>
                                <div className="flex justify-between text-[10px] mb-0.5">
                                  <span className="text-gray-400">{m.label}</span>
                                  <span className="text-gray-300 font-mono">{m.value}%</span>
                                </div>
                                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                  <motion.div initial={{ width: 0 }} animate={{ width: `${m.value}%` }} transition={{ duration: 0.8 }}
                                    className={`h-full rounded-full ${m.color}`} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                          <p className="text-[10px] text-emerald-400 font-medium mb-2">✅ Strengths</p>
                          <ul className="space-y-1 mb-3">
                            {feedbackResult.strengths.map((s, i) => (
                              <li key={i} className="text-xs text-gray-300 flex items-start gap-2"><span className="text-emerald-400 mt-0.5">•</span> {s}</li>
                            ))}
                          </ul>
                          <p className="text-[10px] text-amber-400 font-medium mb-2">🔧 Areas to Improve</p>
                          <ul className="space-y-1 mb-3">
                            {feedbackResult.weaknesses.map((w, i) => (
                              <li key={i} className="text-xs text-gray-300 flex items-start gap-2"><span className="text-amber-400 mt-0.5">•</span> {w}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                          <p className="text-[10px] text-blue-400 font-medium mb-2">💡 Action Items</p>
                          <ul className="space-y-1">
                            {feedbackResult.actionItems.map((a, i) => (
                              <li key={i} className="text-xs text-gray-300 flex items-start gap-2"><span className="text-blue-400 mt-0.5">→</span> {a}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-5xl">💡</span>
                          <p className="text-gray-500 mt-4 text-sm">Fill in the sections about your interview performance to receive detailed feedback.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ================================================================== */}
            {/* Role-Specific Questions                                            */}
            {/* ================================================================== */}
            {activeTab === "roles" && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 mb-5">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium hidden sm:inline">Role:</span>
                  {ROLES.map((r) => (
                    <button key={r} onClick={() => { setSelectedRole(r); setRoleCatFilter("All"); setRoleSearch(""); setExpandedQ(null); }}
                      className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold transition whitespace-nowrap ${
                        selectedRole === r
                          ? "bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-white border border-purple-500/40"
                          : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
                      }`}>{r}</button>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2.5 mb-5">
                  <select value={roleCatFilter} onChange={(e) => setRoleCatFilter(e.target.value)}
                    className="w-full sm:w-auto bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-purple-500">
                    <option value="All">All Categories</option>
                    {Q_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <input value={roleSearch} onChange={(e) => setRoleSearch(e.target.value)} placeholder="Search questions..."
                    className="w-full sm:flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-purple-500" />
                  <span className="text-[10px] text-gray-500 self-center">{filteredRoleQs.length} questions</span>
                </div>

                {filteredRoleQs.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {filteredRoleQs.map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.02 }}
                        className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition cursor-pointer"
                        onClick={() => setExpandedQ(expandedQ === i ? null : i)}>
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                              item.diff === "Easy" ? "bg-emerald-500/20 text-emerald-300"
                                : item.diff === "Medium" ? "bg-amber-500/20 text-amber-300" : "bg-red-500/20 text-red-300"}`}>{item.diff}</span>
                            <span className="text-[10px] text-gray-500 bg-white/5 px-1.5 py-0.5 rounded-md">{item.cat}</span>
                          </div>
                          <p className="text-sm text-white leading-relaxed">{item.q}</p>
                          <AnimatePresence>
                            {expandedQ === i && (
                              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                                <div className="mt-3 pt-3 border-t border-white/10">
                                  <p className="text-[10px] text-purple-300 bg-purple-500/10 rounded-lg px-2.5 py-1.5 mb-2">💡 {item.hint}</p>
                                  <textarea placeholder="Write your approach here..."
                                    className="w-full h-20 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-xs focus:outline-none focus:border-purple-500 resize-none"
                                    onClick={(e) => e.stopPropagation()} />
                                  <div className="flex gap-2 mt-2">
                                    <motion.button whileTap={{ scale: 0.97 }} onClick={(e) => { e.stopPropagation(); }}
                                      className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-[10px] font-bold">Submit</motion.button>
                                    <button onClick={(e) => { e.stopPropagation(); setExpandedQ(null); }}
                                      className="px-4 py-1.5 bg-white/10 text-gray-400 rounded-lg text-[10px] hover:bg-white/20">Close</button>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-[9px] text-gray-600">Click to {expandedQ === i ? "collapse" : "expand"}</span>
                            <span className={`text-[9px] text-gray-600 transition-transform ${expandedQ === i ? "rotate-180" : ""}`}>▾</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <span className="text-4xl">🎯</span>
                    <p className="text-gray-500 mt-3 text-sm">No questions match your search.</p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
