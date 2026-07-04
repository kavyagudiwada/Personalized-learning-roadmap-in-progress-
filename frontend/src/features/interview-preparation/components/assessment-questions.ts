interface Question {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export const questionBank: Record<string, Record<string, Question[]>> = {
  "Frontend": {
    "Level 1": [
      {
        "question": "Level 1 · What does HTML stand for?",
        "options": [
          "HyperText Markup Language",
          "HyperText Markdown Language",
          "HighText Machine Language",
          "None"
        ],
        "answer": "HyperText Markup Language",
        "explanation": "HTML is the standard markup language for creating web pages."
      },
      {
        "question": "Level 1 · Which HTML tag creates a hyperlink?",
        "options": [
          "<a>",
          "<link>",
          "<href>",
          "<nav>"
        ],
        "answer": "<a>",
        "explanation": "The <a> tag with href attribute defines hyperlinks."
      },
      {
        "question": "Level 1 · What CSS property changes text color?",
        "options": [
          "color",
          "font-color",
          "text-color",
          "foreground"
        ],
        "answer": "color",
        "explanation": "The color property sets the foreground color of text."
      },
      {
        "question": "Level 1 · Which HTML element embeds JavaScript?",
        "options": [
          "<script>",
          "<javascript>",
          "<js>",
          "<code>"
        ],
        "answer": "<script>",
        "explanation": "The <script> tag is used to embed or reference JavaScript code."
      },
      {
        "question": "Level 1 · What does CSS stand for?",
        "options": [
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets"
        ],
        "answer": "Cascading Style Sheets",
        "explanation": "CSS describes how HTML elements are rendered on screen."
      },
      {
        "question": "Level 1 · Which tag makes text bold?",
        "options": [
          "<strong>",
          "<b>",
          "<bold>",
          "Both <strong> and <b>"
        ],
        "answer": "Both <strong> and <b>",
        "explanation": "Both work, but <strong> carries semantic importance."
      },
      {
        "question": "Level 1 · What is the file extension for JavaScript?",
        "options": [
          ".js",
          ".java",
          ".script",
          ".jvs"
        ],
        "answer": ".js",
        "explanation": "JavaScript files use the .js extension."
      },
      {
        "question": "Level 1 · Which HTML tag displays an image?",
        "options": [
          "<img>",
          "<image>",
          "<src>",
          "<pic>"
        ],
        "answer": "<img>",
        "explanation": "<img> uses the src attribute to specify the image URL."
      },
      {
        "question": "Level 1 · What does CSS specificity determine?",
        "options": [
          "Which styles take precedence",
          "Page load time",
          "File size",
          "Color value"
        ],
        "answer": "Which styles take precedence",
        "explanation": "Specificity decides which CSS rule is applied when multiple match."
      },
      {
        "question": "Level 1 · Which attribute opens a link in a new tab?",
        "options": [
          "target=\"_blank\"",
          "href=\"_new\"",
          "rel=\"new\"",
          "src=\"_blank\""
        ],
        "answer": "target=\"_blank\"",
        "explanation": "target=\"_blank\" opens the linked page in a new browser tab."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · What is React?",
        "options": [
          "A JavaScript library for building UIs",
          "A CSS framework",
          "A database",
          "A backend runtime"
        ],
        "answer": "A JavaScript library for building UIs",
        "explanation": "React is a declarative, component-based UI library."
      },
      {
        "question": "Level 2 · What is JSX?",
        "options": [
          "HTML-like syntax in JavaScript",
          "A SQL query language",
          "A CSS preprocessor",
          "A templating engine"
        ],
        "answer": "HTML-like syntax in JavaScript",
        "explanation": "JSX allows writing HTML-like markup directly in JavaScript."
      },
      {
        "question": "Level 2 · What is a React component?",
        "options": [
          "A reusable UI building block",
          "A Java class",
          "A CSS module",
          "A server endpoint"
        ],
        "answer": "A reusable UI building block",
        "explanation": "Components let you split the UI into independent, reusable pieces."
      },
      {
        "question": "Level 2 · What does useState return?",
        "options": [
          "An array with value and setter",
          "A single value",
          "An object",
          "A boolean"
        ],
        "answer": "An array with value and setter",
        "explanation": "useState returns [value, setterFunction] for state management."
      },
      {
        "question": "Level 2 · What is the virtual DOM?",
        "options": [
          "A lightweight copy of the real DOM",
          "A database",
          "A server",
          "A CSS framework"
        ],
        "answer": "A lightweight copy of the real DOM",
        "explanation": "The virtual DOM improves performance by batching real DOM updates."
      },
      {
        "question": "Level 2 · Which prop uniquely identifies list items?",
        "options": [
          "key",
          "id",
          "ref",
          "index"
        ],
        "answer": "key",
        "explanation": "key helps React identify which items have changed, been added, or removed."
      },
      {
        "question": "Level 2 · What is a React hook?",
        "options": [
          "Functions that add state to functional components",
          "Class methods",
          "CSS properties",
          "HTML attributes"
        ],
        "answer": "Functions that add state to functional components",
        "explanation": "Hooks let you use state and other React features without classes."
      },
      {
        "question": "Level 2 · What does useEffect do?",
        "options": [
          "Runs side effects after render",
          "Creates HTML elements",
          "Styles components",
          "Handles routing"
        ],
        "answer": "Runs side effects after render",
        "explanation": "useEffect handles data fetching, subscriptions, and DOM manipulation."
      },
      {
        "question": "Level 2 · What are props in React?",
        "options": [
          "Data passed from parent to child",
          "Component state",
          "Internal data",
          "Event handlers"
        ],
        "answer": "Data passed from parent to child",
        "explanation": "Props are read-only inputs passed to components."
      },
      {
        "question": "Level 2 · What does npm stand for?",
        "options": [
          "Node Package Manager",
          "Node Project Manager",
          "New Package Manager",
          "None"
        ],
        "answer": "Node Package Manager",
        "explanation": "npm is the default package manager for Node.js."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What does display:flex create?",
        "options": [
          "A one-dimensional flexible layout",
          "A grid layout",
          "A hidden element",
          "An inline element"
        ],
        "answer": "A one-dimensional flexible layout",
        "explanation": "Flexbox distributes space along a single axis."
      },
      {
        "question": "Level 3 · What does display:grid create?",
        "options": [
          "A two-dimensional layout",
          "A flex layout",
          "A hidden element",
          "A stacked layout"
        ],
        "answer": "A two-dimensional layout",
        "explanation": "CSS Grid handles both rows and columns simultaneously."
      },
      {
        "question": "Level 3 · What is the CSS Box Model?",
        "options": [
          "Content, padding, border, margin",
          "Padding and margin only",
          "Content and border only",
          "Display and position"
        ],
        "answer": "Content, padding, border, margin",
        "explanation": "Every element is a rectangular box with these four layers."
      },
      {
        "question": "Level 3 · What does position:absolute do?",
        "options": [
          "Positions relative to nearest positioned ancestor",
          "Positions relative to viewport",
          "Stays in normal flow",
          "Fixes on screen"
        ],
        "answer": "Positions relative to nearest positioned ancestor",
        "explanation": "Absolute positioning removes the element from normal document flow."
      },
      {
        "question": "Level 3 · What does z-index control?",
        "options": [
          "Stacking order of elements",
          "Element width",
          "Element height",
          "Element opacity"
        ],
        "answer": "Stacking order of elements",
        "explanation": "Higher z-index values appear on top of lower ones."
      },
      {
        "question": "Level 3 · What is a media query?",
        "options": [
          "Applies CSS based on device characteristics",
          "A SQL query",
          "A JavaScript method",
          "An HTML attribute"
        ],
        "answer": "Applies CSS based on device characteristics",
        "explanation": "Media queries enable responsive design for different screen sizes."
      },
      {
        "question": "Level 3 · What does box-sizing:border-box do?",
        "options": [
          "Includes padding and border in width",
          "Excludes padding",
          "Adds margin",
          "Removes border"
        ],
        "answer": "Includes padding and border in width",
        "explanation": "border-box makes width calculations include padding and border."
      },
      {
        "question": "Level 3 · What is a pseudo-class?",
        "options": [
          "Targets elements in a specific state",
          "A fake class",
          "A CSS variable",
          "A classless element"
        ],
        "answer": "Targets elements in a specific state",
        "explanation": ":hover, :focus, and :nth-child() are examples of pseudo-classes."
      },
      {
        "question": "Level 3 · What is a CSS preprocessor?",
        "options": [
          "Extends CSS with variables and functions",
          "A browser tool",
          "Server-side CSS",
          "A CSS reset"
        ],
        "answer": "Extends CSS with variables and functions",
        "explanation": "SASS and LESS add nesting, variables, and mixins to CSS."
      },
      {
        "question": "Level 3 · What is responsive design?",
        "options": [
          "Design that adapts to different screen sizes",
          "Fixed-width design",
          "Mobile-only design",
          "Desktop-only design"
        ],
        "answer": "Design that adapts to different screen sizes",
        "explanation": "Responsive design uses fluid grids and media queries."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · What is the Context API for?",
        "options": [
          "Sharing data across component tree",
          "Local state only",
          "Styling components",
          "Routing"
        ],
        "answer": "Sharing data across component tree",
        "explanation": "Context provides a way to pass data without prop drilling."
      },
      {
        "question": "Level 4 · What is a custom hook?",
        "options": [
          "Reusable function with state logic",
          "A built-in hook",
          "A class method",
          "A style utility"
        ],
        "answer": "Reusable function with state logic",
        "explanation": "Custom hooks encapsulate stateful logic for reuse across components."
      },
      {
        "question": "Level 4 · What is React Router?",
        "options": [
          "A navigation library for React",
          "A state manager",
          "A CSS framework",
          "A build tool"
        ],
        "answer": "A navigation library for React",
        "explanation": "React Router enables client-side routing in single-page applications."
      },
      {
        "question": "Level 4 · What is code splitting?",
        "options": [
          "Loading code on demand to reduce bundle size",
          "Writing less code",
          "Minifying code",
          "Compiling TypeScript"
        ],
        "answer": "Loading code on demand to reduce bundle size",
        "explanation": "Code splitting improves initial load time by lazy-loading chunks."
      },
      {
        "question": "Level 4 · What does useRef do?",
        "options": [
          "Creates a persistent mutable reference",
          "Manages state",
          "Styles elements",
          "Handles events"
        ],
        "answer": "Creates a persistent mutable reference",
        "explanation": "useRef is useful for accessing DOM nodes directly."
      },
      {
        "question": "Level 4 · What is a controlled component?",
        "options": [
          "Form input controlled by React state",
          "An uncontrolled input",
          "A server component",
          "A HOC"
        ],
        "answer": "Form input controlled by React state",
        "explanation": "In controlled components, React state drives the input value."
      },
      {
        "question": "Level 4 · What does the children prop contain?",
        "options": [
          "Content between component tags",
          "Component state",
          "Component props",
          "Component events"
        ],
        "answer": "Content between component tags",
        "explanation": "children renders any JSX nested inside the component."
      },
      {
        "question": "Level 4 · What is React.StrictMode?",
        "options": [
          "Dev tool highlighting potential problems",
          "Production mode",
          "Build optimization",
          "Testing utility"
        ],
        "answer": "Dev tool highlighting potential problems",
        "explanation": "StrictMode checks for unsafe lifecycles and side effects."
      },
      {
        "question": "Level 4 · What is PropTypes?",
        "options": [
          "Type-checking for React props",
          "Creating props",
          "Styling components",
          "Handling state"
        ],
        "answer": "Type-checking for React props",
        "explanation": "PropTypes document and validate props passed to components."
      },
      {
        "question": "Level 4 · What is the component lifecycle?",
        "options": [
          "Mount, update, unmount",
          "Compile, link, run",
          "Design, develop, deploy",
          "Style, script, render"
        ],
        "answer": "Mount, update, unmount",
        "explanation": "Components go through mounting, updating, and unmounting phases."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · What is Redux?",
        "options": [
          "A predictable state container",
          "A CSS framework",
          "A testing library",
          "A router"
        ],
        "answer": "A predictable state container",
        "explanation": "Redux centralizes app state in a single immutable store."
      },
      {
        "question": "Level 5 · What is a Redux action?",
        "options": [
          "A plain object describing a change",
          "A reducer function",
          "A component",
          "Middleware"
        ],
        "answer": "A plain object describing a change",
        "explanation": "Actions have a type field and optional payload."
      },
      {
        "question": "Level 5 · What is a reducer?",
        "options": [
          "Pure function returning new state",
          "API call handler",
          "Component",
          "CSS rule"
        ],
        "answer": "Pure function returning new state",
        "explanation": "Reducers take current state and an action and compute the next state."
      },
      {
        "question": "Level 5 · What is the Redux store?",
        "options": [
          "Single source of truth for state",
          "A database",
          "A cache layer",
          "A server"
        ],
        "answer": "Single source of truth for state",
        "explanation": "The store holds the complete application state tree."
      },
      {
        "question": "Level 5 · What is Redux middleware?",
        "options": [
          "Extends dispatch with side effects",
          "The main reducer",
          "A component",
          "CSS preprocessor"
        ],
        "answer": "Extends dispatch with side effects",
        "explanation": "Middleware intercepts actions for async logic like API calls."
      },
      {
        "question": "Level 5 · What is the Flux pattern?",
        "options": [
          "Unidirectional data flow",
          "Bidirectional flow",
          "Event-driven",
          "Object-oriented"
        ],
        "answer": "Unidirectional data flow",
        "explanation": "Flux enforces one-way data: action, dispatcher, store, view."
      },
      {
        "question": "Level 5 · What is Zustand?",
        "options": [
          "A small state management library",
          "CSS framework",
          "Testing library",
          "Build tool"
        ],
        "answer": "A small state management library",
        "explanation": "Zustand provides a minimal API for global state."
      },
      {
        "question": "Level 5 · What is React Query?",
        "options": [
          "Server state caching library",
          "Client state only",
          "CSS-in-JS",
          "Animation"
        ],
        "answer": "Server state caching library",
        "explanation": "React Query handles async data fetching with caching."
      },
      {
        "question": "Level 5 · Difference between state and props?",
        "options": [
          "State is mutable internal, props are immutable external",
          "State is for styling",
          "Props are mutable",
          "They are the same"
        ],
        "answer": "State is mutable internal, props are immutable external",
        "explanation": "State is managed within a component; props come from parent."
      },
      {
        "question": "Level 5 · What is a HOC?",
        "options": [
          "Function that enhances a component",
          "A class component",
          "A functional component",
          "A state manager"
        ],
        "answer": "Function that enhances a component",
        "explanation": "Higher-Order Components wrap components to add extra behavior."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · What does useMemo do?",
        "options": [
          "Memoizes expensive calculations",
          "Memoizes state",
          "Memoizes effects",
          "Memoizes CSS"
        ],
        "answer": "Memoizes expensive calculations",
        "explanation": "useMemo avoids re-computation when dependencies haven't changed."
      },
      {
        "question": "Level 6 · What does useCallback do?",
        "options": [
          "Returns a memoized callback",
          "Creates a new callback",
          "Binds a function",
          "Executes a function"
        ],
        "answer": "Returns a memoized callback",
        "explanation": "useCallback prevents child re-rendering by stabilizing function references."
      },
      {
        "question": "Level 6 · What is React.memo?",
        "options": [
          "Memoizes component render output",
          "A hook",
          "A state creator",
          "CSS utility"
        ],
        "answer": "Memoizes component render output",
        "explanation": "React.memo prevents re-render when props are unchanged."
      },
      {
        "question": "Level 6 · What is lazy loading?",
        "options": [
          "Loading components on demand",
          "Loading everything at once",
          "Pre-loading assets",
          "Loading CSS first"
        ],
        "answer": "Loading components on demand",
        "explanation": "React.lazy enables dynamic import of components."
      },
      {
        "question": "Level 6 · What is server-side rendering?",
        "options": [
          "Rendering React on the server",
          "Rendering on client only",
          "In-memory rendering",
          "Caching output"
        ],
        "answer": "Rendering React on the server",
        "explanation": "SSR improves initial load time and SEO."
      },
      {
        "question": "Level 6 · What is hydration?",
        "options": [
          "Attaching events to server HTML",
          "Compiling React",
          "Minifying JS",
          "Optimizing images"
        ],
        "answer": "Attaching events to server HTML",
        "explanation": "Hydration makes server-rendered HTML interactive."
      },
      {
        "question": "Level 6 · What is Next.js?",
        "options": [
          "React framework for SSR and SSG",
          "State manager",
          "CSS framework",
          "Testing library"
        ],
        "answer": "React framework for SSR and SSG",
        "explanation": "Next.js provides SSR, SSG, API routes, and file-based routing."
      },
      {
        "question": "Level 6 · What is tree shaking?",
        "options": [
          "Removing unused code during build",
          "Shaking the DOM",
          "Animating elements",
          "Testing coverage"
        ],
        "answer": "Removing unused code during build",
        "explanation": "Tree shaking eliminates dead exports from bundles."
      },
      {
        "question": "Level 6 · What is the PRPL pattern?",
        "options": [
          "Push, Render, Pre-cache, Lazy-load",
          "Preload, React, Process, Layout",
          "Push, Render, Paint, Load",
          "Parse, Render, Process, Load"
        ],
        "answer": "Push, Render, Pre-cache, Lazy-load",
        "explanation": "PRPL optimizes initial load for Progressive Web Apps."
      },
      {
        "question": "Level 6 · What is code splitting?",
        "options": [
          "Breaking bundles into smaller chunks",
          "Writing less code",
          "Minifying code",
          "Compressing assets"
        ],
        "answer": "Breaking bundles into smaller chunks",
        "explanation": "Code splitting loads only the code needed for the current view."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · What is TypeScript?",
        "options": [
          "Typed superset of JavaScript",
          "A new language",
          "CSS preprocessor",
          "Database"
        ],
        "answer": "Typed superset of JavaScript",
        "explanation": "TypeScript adds static typing to JavaScript."
      },
      {
        "question": "Level 7 · What is an interface in TypeScript?",
        "options": [
          "Defines the shape of an object",
          "A class",
          "A function",
          "A variable"
        ],
        "answer": "Defines the shape of an object",
        "explanation": "Interfaces specify the structure that objects must follow."
      },
      {
        "question": "Level 7 · What does ? mean in TypeScript properties?",
        "options": [
          "Property is optional",
          "Property is required",
          "Property is readonly",
          "Property is private"
        ],
        "answer": "Property is optional",
        "explanation": "Optional properties with ? may be undefined."
      },
      {
        "question": "Level 7 · What is a generic in TypeScript?",
        "options": [
          "Reusable component for multiple types",
          "A specific type",
          "A decorator",
          "A utility"
        ],
        "answer": "Reusable component for multiple types",
        "explanation": "Generics allow type-safe reusable code."
      },
      {
        "question": "Level 7 · What does as do in TypeScript?",
        "options": [
          "Performs type assertion",
          "Creates alias",
          "Declares variable",
          "Defines type"
        ],
        "answer": "Performs type assertion",
        "explanation": "Type assertions tell the compiler to treat a value as a specific type."
      },
      {
        "question": "Level 7 · What is an enum?",
        "options": [
          "Set of named constants",
          "A function",
          "A CSS value",
          "An array"
        ],
        "answer": "Set of named constants",
        "explanation": "Enums define a collection of related named values."
      },
      {
        "question": "Level 7 · What is the never type?",
        "options": [
          "Represents values that never occur",
          "Null",
          "Undefined",
          "Empty array"
        ],
        "answer": "Represents values that never occur",
        "explanation": "never is for functions that always throw or never return."
      },
      {
        "question": "Level 7 · What is type inference?",
        "options": [
          "TypeScript deduces types automatically",
          "Manual type declaration",
          "Runtime type check",
          "Compilation step"
        ],
        "answer": "TypeScript deduces types automatically",
        "explanation": "TypeScript infers types from values and usage."
      },
      {
        "question": "Level 7 · What is React.FC?",
        "options": [
          "Type for functional components",
          "Class component type",
          "CSS framework",
          "State type"
        ],
        "answer": "Type for functional components",
        "explanation": "React.FC defines props type for functional components."
      },
      {
        "question": "Level 7 · What is a discriminated union?",
        "options": [
          "Union with literal property for narrowing",
          "Generic type",
          "Mapped type",
          "Collection of types"
        ],
        "answer": "Union with literal property for narrowing",
        "explanation": "Discriminated unions enable exhaustive type checking."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What is unit testing?",
        "options": [
          "Testing components in isolation",
          "Testing the whole system",
          "Testing UI",
          "Testing network"
        ],
        "answer": "Testing components in isolation",
        "explanation": "Unit tests verify the smallest testable parts of code."
      },
      {
        "question": "Level 8 · What is Jest?",
        "options": [
          "A JavaScript testing framework",
          "CSS framework",
          "State manager",
          "Build tool"
        ],
        "answer": "A JavaScript testing framework",
        "explanation": "Jest has built-in mocking, assertions, and code coverage."
      },
      {
        "question": "Level 8 · What is React Testing Library?",
        "options": [
          "Tests focusing on user behavior",
          "A testing framework",
          "CSS testing",
          "State testing"
        ],
        "answer": "Tests focusing on user behavior",
        "explanation": "Testing Library encourages testing how users interact."
      },
      {
        "question": "Level 8 · What is a mock function?",
        "options": [
          "Replaces a real function for testing",
          "A real function",
          "A class method",
          "An async function"
        ],
        "answer": "Replaces a real function for testing",
        "explanation": "Mocks let you control behavior and spy on calls."
      },
      {
        "question": "Level 8 · What is code coverage?",
        "options": [
          "Metric of how much code is tested",
          "Covered by comments",
          "Minified code",
          "Compiled code"
        ],
        "answer": "Metric of how much code is tested",
        "explanation": "Coverage reports which lines, branches, and functions are tested."
      },
      {
        "question": "Level 8 · What is integration testing?",
        "options": [
          "Testing how units work together",
          "Testing a single function",
          "UI appearance",
          "Performance"
        ],
        "answer": "Testing how units work together",
        "explanation": "Integration tests verify combined component behavior."
      },
      {
        "question": "Level 8 · What is end-to-end testing?",
        "options": [
          "Testing full user flow",
          "Individual functions",
          "APIs only",
          "Database queries"
        ],
        "answer": "Testing full user flow",
        "explanation": "E2E tests simulate real user scenarios."
      },
      {
        "question": "Level 8 · What is TDD?",
        "options": [
          "Write tests before code",
          "Test Documentation",
          "Total Duration",
          "Technical Design"
        ],
        "answer": "Write tests before code",
        "explanation": "TDD: red (failing test), green (pass), refactor."
      },
      {
        "question": "Level 8 · What is a snapshot test?",
        "options": [
          "Compares rendered output to saved snapshot",
          "Photo test",
          "Memory snapshot",
          "CSS snapshot"
        ],
        "answer": "Compares rendered output to saved snapshot",
        "explanation": "Snapshot tests catch unexpected UI changes."
      },
      {
        "question": "Level 8 · What is CI/CD?",
        "options": [
          "Continuous Integration and Deployment",
          "Code Integration",
          "Continuous Interface",
          "Code Isolation"
        ],
        "answer": "Continuous Integration and Deployment",
        "explanation": "CI automatically builds and tests; CD automates deployment."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · What is Webpack?",
        "options": [
          "Static module bundler",
          "A database",
          "A web server",
          "CSS framework"
        ],
        "answer": "Static module bundler",
        "explanation": "Webpack bundles JS files into optimized bundles for production."
      },
      {
        "question": "Level 9 · What is Babel?",
        "options": [
          "JS compiler for backwards compatibility",
          "A bundler",
          "CSS preprocessor",
          "Testing tool"
        ],
        "answer": "JS compiler for backwards compatibility",
        "explanation": "Babel transpiles modern JS for older browsers."
      },
      {
        "question": "Level 9 · What is Vite?",
        "options": [
          "Modern build tool with fast HMR",
          "Virtual machine",
          "IDE",
          "Testing framework"
        ],
        "answer": "Modern build tool with fast HMR",
        "explanation": "Vite uses native ESM for dev and Rollup for production builds."
      },
      {
        "question": "Level 9 · What is ESLint?",
        "options": [
          "Static code analysis tool",
          "CSS linter",
          "Type checker",
          "Formatter"
        ],
        "answer": "Static code analysis tool",
        "explanation": "ESLint catches problematic patterns and enforces style."
      },
      {
        "question": "Level 9 · What is Prettier?",
        "options": [
          "Opinionated code formatter",
          "Linter",
          "Compiler",
          "Bundler"
        ],
        "answer": "Opinionated code formatter",
        "explanation": "Prettier auto-formats code for consistent style."
      },
      {
        "question": "Level 9 · What is package.json?",
        "options": [
          "Project metadata file",
          "JSON database",
          "Webpack config",
          "CSS file"
        ],
        "answer": "Project metadata file",
        "explanation": "package.json lists dependencies, scripts, and project info."
      },
      {
        "question": "Level 9 · What is node_modules?",
        "options": [
          "Folder where npm installs dependencies",
          "Source code",
          "Build output",
          "Tests"
        ],
        "answer": "Folder where npm installs dependencies",
        "explanation": "node_modules contains all installed packages."
      },
      {
        "question": "Level 9 · What is a bundler?",
        "options": [
          "Combines files into optimized bundles",
          "Bundles CSS",
          "Database",
          "Server runtime"
        ],
        "answer": "Combines files into optimized bundles",
        "explanation": "Bundlers like Webpack optimize code for production."
      },
      {
        "question": "Level 9 · What is HMR?",
        "options": [
          "Hot Module Replacement without full reload",
          "Hot Mail",
          "High Memory",
          "Hard Reload"
        ],
        "answer": "Hot Module Replacement without full reload",
        "explanation": "HMR updates modules in real-time preserving app state."
      },
      {
        "question": "Level 9 · What is NPM script?",
        "options": [
          "Custom command in package.json",
          "Database script",
          "CSS script",
          "Build script"
        ],
        "answer": "Custom command in package.json",
        "explanation": "npm scripts automate common development tasks."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What are micro-frontends?",
        "options": [
          "Independent modules composing one app",
          "Monolithic frontend",
          "Server architecture",
          "CSS methodology"
        ],
        "answer": "Independent modules composing one app",
        "explanation": "Micro-frontends let teams own independent features."
      },
      {
        "question": "Level 10 · What is Module Federation?",
        "options": [
          "Dynamically loading remote code",
          "New module system",
          "CSS modules",
          "Testing module"
        ],
        "answer": "Dynamically loading remote code",
        "explanation": "Module Federation shares code across separate builds."
      },
      {
        "question": "Level 10 · What is the JAMstack?",
        "options": [
          "JavaScript, APIs, Markup",
          "Java, Angular, MongoDB",
          "JS animation stack",
          "CSS framework"
        ],
        "answer": "JavaScript, APIs, Markup",
        "explanation": "JAMstack decouples frontend from backend."
      },
      {
        "question": "Level 10 · What are Core Web Vitals?",
        "options": [
          "LCP, FID, CLS metrics",
          "Design system",
          "State pattern",
          "CSS framework"
        ],
        "answer": "LCP, FID, CLS metrics",
        "explanation": "Core Web Vitals measure real user experience."
      },
      {
        "question": "Level 10 · What is progressive enhancement?",
        "options": [
          "Core function first, enhancements later",
          "Adding features",
          "Removing features",
          "Testing modern browsers"
        ],
        "answer": "Core function first, enhancements later",
        "explanation": "Content works without JavaScript."
      },
      {
        "question": "Level 10 · What is graceful degradation?",
        "options": [
          "Works in older browsers",
          "Upgrading servers",
          "Adding animations",
          "Removing features"
        ],
        "answer": "Works in older browsers",
        "explanation": "Degradation ensures basic functionality in legacy browsers."
      },
      {
        "question": "Level 10 · What is the Shadow DOM?",
        "options": [
          "Scoped DOM with encapsulated styles",
          "Main DOM",
          "Virtual DOM",
          "Server DOM"
        ],
        "answer": "Scoped DOM with encapsulated styles",
        "explanation": "Shadow DOM isolates component markup and styles."
      },
      {
        "question": "Level 10 · What are web components?",
        "options": [
          "Browser APIs for custom elements",
          "React components",
          "CSS framework",
          "Testing library"
        ],
        "answer": "Browser APIs for custom elements",
        "explanation": "Web components use Custom Elements and Shadow DOM."
      },
      {
        "question": "Level 10 · What is web accessibility?",
        "options": [
          "Design for people with disabilities",
          "Adding animations",
          "Modern CSS",
          "Optimizing images"
        ],
        "answer": "Design for people with disabilities",
        "explanation": "Accessibility ensures content is usable by everyone."
      },
      {
        "question": "Level 10 · What is the RAIL model?",
        "options": [
          "Response, Animation, Idle, Load",
          "Rapid, Agile, Iterative, Lean",
          "React, Animate, Interact, Layout",
          "Request, Answer, Input, Load"
        ],
        "answer": "Response, Animation, Idle, Load",
        "explanation": "RAIL optimizes for user-centric performance."
      }
    ]
  },
  "Cybersecurity": {
    "Level 1": [
      {
        "question": "Level 1 · What is CIA triad in Cybersecurity?",
        "options": [
          "CIA triad",
          "confidentiality",
          "integrity",
          "availability"
        ],
        "answer": "CIA triad",
        "explanation": "CIA triad is a key concept in Cybersecurity."
      },
      {
        "question": "Level 1 · How would you define confidentiality in Cybersecurity?",
        "options": [
          "confidentiality",
          "CIA triad",
          "integrity",
          "availability"
        ],
        "answer": "confidentiality",
        "explanation": "confidentiality is a key concept in Cybersecurity."
      },
      {
        "question": "Level 1 · Which describes integrity in Cybersecurity?",
        "options": [
          "integrity",
          "CIA triad",
          "confidentiality",
          "availability"
        ],
        "answer": "integrity",
        "explanation": "integrity is a key concept in Cybersecurity."
      },
      {
        "question": "Level 1 · What does the term availability in Cybersecurity?",
        "options": [
          "availability",
          "CIA triad",
          "confidentiality",
          "integrity"
        ],
        "answer": "availability",
        "explanation": "availability is a key concept in Cybersecurity."
      },
      {
        "question": "Level 1 · What concept is threat modeling in Cybersecurity?",
        "options": [
          "threat modeling",
          "CIA triad",
          "confidentiality",
          "integrity"
        ],
        "answer": "threat modeling",
        "explanation": "threat modeling is a key concept in Cybersecurity."
      },
      {
        "question": "Level 1 · What is risk assessment in Cybersecurity?",
        "options": [
          "risk assessment",
          "CIA triad",
          "confidentiality",
          "integrity"
        ],
        "answer": "risk assessment",
        "explanation": "risk assessment is a key concept in Cybersecurity."
      },
      {
        "question": "Level 1 · How would you define vulnerability in Cybersecurity?",
        "options": [
          "vulnerability",
          "CIA triad",
          "confidentiality",
          "integrity"
        ],
        "answer": "vulnerability",
        "explanation": "vulnerability is a key concept in Cybersecurity."
      },
      {
        "question": "Level 1 · Which describes exploit in Cybersecurity?",
        "options": [
          "exploit",
          "CIA triad",
          "confidentiality",
          "integrity"
        ],
        "answer": "exploit",
        "explanation": "exploit is a key concept in Cybersecurity."
      },
      {
        "question": "Level 1 · What does the term attack vector in Cybersecurity?",
        "options": [
          "attack vector",
          "CIA triad",
          "confidentiality",
          "integrity"
        ],
        "answer": "attack vector",
        "explanation": "attack vector is a key concept in Cybersecurity."
      },
      {
        "question": "Level 1 · What concept is zero-day in Cybersecurity?",
        "options": [
          "zero-day",
          "CIA triad",
          "confidentiality",
          "integrity"
        ],
        "answer": "zero-day",
        "explanation": "zero-day is a key concept in Cybersecurity."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you symmetric encryption in Cybersecurity?",
        "options": [
          "symmetric encryption",
          "asymmetric encryption",
          "AES",
          "RSA"
        ],
        "answer": "symmetric encryption",
        "explanation": "symmetric encryption is a key concept in Cybersecurity."
      },
      {
        "question": "Level 2 · What is the purpose of asymmetric encryption in Cybersecurity?",
        "options": [
          "asymmetric encryption",
          "symmetric encryption",
          "AES",
          "RSA"
        ],
        "answer": "asymmetric encryption",
        "explanation": "asymmetric encryption is a key concept in Cybersecurity."
      },
      {
        "question": "Level 2 · Which tool is used to AES in Cybersecurity?",
        "options": [
          "AES",
          "symmetric encryption",
          "asymmetric encryption",
          "RSA"
        ],
        "answer": "AES",
        "explanation": "AES is a key concept in Cybersecurity."
      },
      {
        "question": "Level 2 · What does RSA in Cybersecurity?",
        "options": [
          "RSA",
          "symmetric encryption",
          "asymmetric encryption",
          "AES"
        ],
        "answer": "RSA",
        "explanation": "RSA is a key concept in Cybersecurity."
      },
      {
        "question": "Level 2 · How can you public key in Cybersecurity?",
        "options": [
          "public key",
          "symmetric encryption",
          "asymmetric encryption",
          "AES"
        ],
        "answer": "public key",
        "explanation": "public key is a key concept in Cybersecurity."
      },
      {
        "question": "Level 2 · How do you private key in Cybersecurity?",
        "options": [
          "private key",
          "symmetric encryption",
          "asymmetric encryption",
          "AES"
        ],
        "answer": "private key",
        "explanation": "private key is a key concept in Cybersecurity."
      },
      {
        "question": "Level 2 · What is the purpose of digital signature in Cybersecurity?",
        "options": [
          "digital signature",
          "symmetric encryption",
          "asymmetric encryption",
          "AES"
        ],
        "answer": "digital signature",
        "explanation": "digital signature is a key concept in Cybersecurity."
      },
      {
        "question": "Level 2 · Which tool is used to certificate authority in Cybersecurity?",
        "options": [
          "certificate authority",
          "symmetric encryption",
          "asymmetric encryption",
          "AES"
        ],
        "answer": "certificate authority",
        "explanation": "certificate authority is a key concept in Cybersecurity."
      },
      {
        "question": "Level 2 · What does TLS/SSL in Cybersecurity?",
        "options": [
          "TLS/SSL",
          "symmetric encryption",
          "asymmetric encryption",
          "AES"
        ],
        "answer": "TLS/SSL",
        "explanation": "TLS/SSL is a key concept in Cybersecurity."
      },
      {
        "question": "Level 2 · How can you PKI in Cybersecurity?",
        "options": [
          "PKI",
          "symmetric encryption",
          "asymmetric encryption",
          "AES"
        ],
        "answer": "PKI",
        "explanation": "PKI is a key concept in Cybersecurity."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between firewall in Cybersecurity?",
        "options": [
          "firewall",
          "IDS",
          "IPS",
          "WAF"
        ],
        "answer": "firewall",
        "explanation": "firewall is a key concept in Cybersecurity."
      },
      {
        "question": "Level 3 · How does IDS in Cybersecurity?",
        "options": [
          "IDS",
          "firewall",
          "IPS",
          "WAF"
        ],
        "answer": "IDS",
        "explanation": "IDS is a key concept in Cybersecurity."
      },
      {
        "question": "Level 3 · What problem does IPS in Cybersecurity?",
        "options": [
          "IPS",
          "firewall",
          "IDS",
          "WAF"
        ],
        "answer": "IPS",
        "explanation": "IPS is a key concept in Cybersecurity."
      },
      {
        "question": "Level 3 · Which approach WAF in Cybersecurity?",
        "options": [
          "WAF",
          "firewall",
          "IDS",
          "IPS"
        ],
        "answer": "WAF",
        "explanation": "WAF is a key concept in Cybersecurity."
      },
      {
        "question": "Level 3 · What is the role of DMZ in Cybersecurity?",
        "options": [
          "DMZ",
          "firewall",
          "IDS",
          "IPS"
        ],
        "answer": "DMZ",
        "explanation": "DMZ is a key concept in Cybersecurity."
      },
      {
        "question": "Level 3 · What is the difference between network segmentation in Cybersecurity?",
        "options": [
          "network segmentation",
          "firewall",
          "IDS",
          "IPS"
        ],
        "answer": "network segmentation",
        "explanation": "network segmentation is a key concept in Cybersecurity."
      },
      {
        "question": "Level 3 · How does VPN in Cybersecurity?",
        "options": [
          "VPN",
          "firewall",
          "IDS",
          "IPS"
        ],
        "answer": "VPN",
        "explanation": "VPN is a key concept in Cybersecurity."
      },
      {
        "question": "Level 3 · What problem does proxy server in Cybersecurity?",
        "options": [
          "proxy server",
          "firewall",
          "IDS",
          "IPS"
        ],
        "answer": "proxy server",
        "explanation": "proxy server is a key concept in Cybersecurity."
      },
      {
        "question": "Level 3 · Which approach honeypot in Cybersecurity?",
        "options": [
          "honeypot",
          "firewall",
          "IDS",
          "IPS"
        ],
        "answer": "honeypot",
        "explanation": "honeypot is a key concept in Cybersecurity."
      },
      {
        "question": "Level 3 · What is the role of security zones in Cybersecurity?",
        "options": [
          "security zones",
          "firewall",
          "IDS",
          "IPS"
        ],
        "answer": "security zones",
        "explanation": "security zones is a key concept in Cybersecurity."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use OWASP Top 10 in Cybersecurity?",
        "options": [
          "OWASP Top 10",
          "SQL injection",
          "XSS",
          "CSRF"
        ],
        "answer": "OWASP Top 10",
        "explanation": "OWASP Top 10 is a key concept in Cybersecurity."
      },
      {
        "question": "Level 4 · What is a real-world example of SQL injection in Cybersecurity?",
        "options": [
          "SQL injection",
          "OWASP Top 10",
          "XSS",
          "CSRF"
        ],
        "answer": "SQL injection",
        "explanation": "SQL injection is a key concept in Cybersecurity."
      },
      {
        "question": "Level 4 · How would you implement XSS in Cybersecurity?",
        "options": [
          "XSS",
          "OWASP Top 10",
          "SQL injection",
          "CSRF"
        ],
        "answer": "XSS",
        "explanation": "XSS is a key concept in Cybersecurity."
      },
      {
        "question": "Level 4 · What pattern applies CSRF in Cybersecurity?",
        "options": [
          "CSRF",
          "OWASP Top 10",
          "SQL injection",
          "XSS"
        ],
        "answer": "CSRF",
        "explanation": "CSRF is a key concept in Cybersecurity."
      },
      {
        "question": "Level 4 · What strategy handles SSRF in Cybersecurity?",
        "options": [
          "SSRF",
          "OWASP Top 10",
          "SQL injection",
          "XSS"
        ],
        "answer": "SSRF",
        "explanation": "SSRF is a key concept in Cybersecurity."
      },
      {
        "question": "Level 4 · When would you use command injection in Cybersecurity?",
        "options": [
          "command injection",
          "OWASP Top 10",
          "SQL injection",
          "XSS"
        ],
        "answer": "command injection",
        "explanation": "command injection is a key concept in Cybersecurity."
      },
      {
        "question": "Level 4 · What is a real-world example of file inclusion in Cybersecurity?",
        "options": [
          "file inclusion",
          "OWASP Top 10",
          "SQL injection",
          "XSS"
        ],
        "answer": "file inclusion",
        "explanation": "file inclusion is a key concept in Cybersecurity."
      },
      {
        "question": "Level 4 · How would you implement session hijacking in Cybersecurity?",
        "options": [
          "session hijacking",
          "OWASP Top 10",
          "SQL injection",
          "XSS"
        ],
        "answer": "session hijacking",
        "explanation": "session hijacking is a key concept in Cybersecurity."
      },
      {
        "question": "Level 4 · What pattern applies clickjacking in Cybersecurity?",
        "options": [
          "clickjacking",
          "OWASP Top 10",
          "SQL injection",
          "XSS"
        ],
        "answer": "clickjacking",
        "explanation": "clickjacking is a key concept in Cybersecurity."
      },
      {
        "question": "Level 4 · What strategy handles RCE in Cybersecurity?",
        "options": [
          "RCE",
          "OWASP Top 10",
          "SQL injection",
          "XSS"
        ],
        "answer": "RCE",
        "explanation": "RCE is a key concept in Cybersecurity."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize penetration testing in Cybersecurity?",
        "options": [
          "penetration testing",
          "white box",
          "black box",
          "gray box"
        ],
        "answer": "penetration testing",
        "explanation": "penetration testing is a key concept in Cybersecurity."
      },
      {
        "question": "Level 5 · What is the best practice for white box in Cybersecurity?",
        "options": [
          "white box",
          "penetration testing",
          "black box",
          "gray box"
        ],
        "answer": "white box",
        "explanation": "white box is a key concept in Cybersecurity."
      },
      {
        "question": "Level 5 · What performance consideration involves black box in Cybersecurity?",
        "options": [
          "black box",
          "penetration testing",
          "white box",
          "gray box"
        ],
        "answer": "black box",
        "explanation": "black box is a key concept in Cybersecurity."
      },
      {
        "question": "Level 5 · How do you scale gray box in Cybersecurity?",
        "options": [
          "gray box",
          "penetration testing",
          "white box",
          "black box"
        ],
        "answer": "gray box",
        "explanation": "gray box is a key concept in Cybersecurity."
      },
      {
        "question": "Level 5 · What tradeoff exists when using vulnerability scanning in Cybersecurity?",
        "options": [
          "vulnerability scanning",
          "penetration testing",
          "white box",
          "black box"
        ],
        "answer": "vulnerability scanning",
        "explanation": "vulnerability scanning is a key concept in Cybersecurity."
      },
      {
        "question": "Level 5 · How do you optimize Nmap in Cybersecurity?",
        "options": [
          "Nmap",
          "penetration testing",
          "white box",
          "black box"
        ],
        "answer": "Nmap",
        "explanation": "Nmap is a key concept in Cybersecurity."
      },
      {
        "question": "Level 5 · What is the best practice for Metasploit in Cybersecurity?",
        "options": [
          "Metasploit",
          "penetration testing",
          "white box",
          "black box"
        ],
        "answer": "Metasploit",
        "explanation": "Metasploit is a key concept in Cybersecurity."
      },
      {
        "question": "Level 5 · What performance consideration involves Burp Suite in Cybersecurity?",
        "options": [
          "Burp Suite",
          "penetration testing",
          "white box",
          "black box"
        ],
        "answer": "Burp Suite",
        "explanation": "Burp Suite is a key concept in Cybersecurity."
      },
      {
        "question": "Level 5 · How do you scale social engineering in Cybersecurity?",
        "options": [
          "social engineering",
          "penetration testing",
          "white box",
          "black box"
        ],
        "answer": "social engineering",
        "explanation": "social engineering is a key concept in Cybersecurity."
      },
      {
        "question": "Level 5 · What tradeoff exists when using phishing in Cybersecurity?",
        "options": [
          "phishing",
          "penetration testing",
          "white box",
          "black box"
        ],
        "answer": "phishing",
        "explanation": "phishing is a key concept in Cybersecurity."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare malware in Cybersecurity?",
        "options": [
          "malware",
          "virus",
          "worm",
          "trojan"
        ],
        "answer": "malware",
        "explanation": "malware is a key concept in Cybersecurity."
      },
      {
        "question": "Level 6 · How is it different from virus in Cybersecurity?",
        "options": [
          "virus",
          "malware",
          "worm",
          "trojan"
        ],
        "answer": "virus",
        "explanation": "virus is a key concept in Cybersecurity."
      },
      {
        "question": "Level 6 · What are the pros and cons of worm in Cybersecurity?",
        "options": [
          "worm",
          "malware",
          "virus",
          "trojan"
        ],
        "answer": "worm",
        "explanation": "worm is a key concept in Cybersecurity."
      },
      {
        "question": "Level 6 · What advantage does trojan in Cybersecurity?",
        "options": [
          "trojan",
          "malware",
          "virus",
          "worm"
        ],
        "answer": "trojan",
        "explanation": "trojan is a key concept in Cybersecurity."
      },
      {
        "question": "Level 6 · What limitation does ransomware in Cybersecurity?",
        "options": [
          "ransomware",
          "malware",
          "virus",
          "worm"
        ],
        "answer": "ransomware",
        "explanation": "ransomware is a key concept in Cybersecurity."
      },
      {
        "question": "Level 6 · Compare rootkit in Cybersecurity?",
        "options": [
          "rootkit",
          "malware",
          "virus",
          "worm"
        ],
        "answer": "rootkit",
        "explanation": "rootkit is a key concept in Cybersecurity."
      },
      {
        "question": "Level 6 · How is it different from keylogger in Cybersecurity?",
        "options": [
          "keylogger",
          "malware",
          "virus",
          "worm"
        ],
        "answer": "keylogger",
        "explanation": "keylogger is a key concept in Cybersecurity."
      },
      {
        "question": "Level 6 · What are the pros and cons of botnet in Cybersecurity?",
        "options": [
          "botnet",
          "malware",
          "virus",
          "worm"
        ],
        "answer": "botnet",
        "explanation": "botnet is a key concept in Cybersecurity."
      },
      {
        "question": "Level 6 · What advantage does DDoS in Cybersecurity?",
        "options": [
          "DDoS",
          "malware",
          "virus",
          "worm"
        ],
        "answer": "DDoS",
        "explanation": "DDoS is a key concept in Cybersecurity."
      },
      {
        "question": "Level 6 · What limitation does spyware in Cybersecurity?",
        "options": [
          "spyware",
          "malware",
          "virus",
          "worm"
        ],
        "answer": "spyware",
        "explanation": "spyware is a key concept in Cybersecurity."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with identity management in Cybersecurity?",
        "options": [
          "identity management",
          "IAM",
          "MFA",
          "SSO"
        ],
        "answer": "identity management",
        "explanation": "identity management is a key concept in Cybersecurity."
      },
      {
        "question": "Level 7 · What goes wrong when IAM in Cybersecurity?",
        "options": [
          "IAM",
          "identity management",
          "MFA",
          "SSO"
        ],
        "answer": "IAM",
        "explanation": "IAM is a key concept in Cybersecurity."
      },
      {
        "question": "Level 7 · What common mistake involves MFA in Cybersecurity?",
        "options": [
          "MFA",
          "identity management",
          "IAM",
          "SSO"
        ],
        "answer": "MFA",
        "explanation": "MFA is a key concept in Cybersecurity."
      },
      {
        "question": "Level 7 · How do you monitor SSO in Cybersecurity?",
        "options": [
          "SSO",
          "identity management",
          "IAM",
          "MFA"
        ],
        "answer": "SSO",
        "explanation": "SSO is a key concept in Cybersecurity."
      },
      {
        "question": "Level 7 · What failure mode occurs with LDAP in Cybersecurity?",
        "options": [
          "LDAP",
          "identity management",
          "IAM",
          "MFA"
        ],
        "answer": "LDAP",
        "explanation": "LDAP is a key concept in Cybersecurity."
      },
      {
        "question": "Level 7 · How do you debug issues with Active Directory in Cybersecurity?",
        "options": [
          "Active Directory",
          "identity management",
          "IAM",
          "MFA"
        ],
        "answer": "Active Directory",
        "explanation": "Active Directory is a key concept in Cybersecurity."
      },
      {
        "question": "Level 7 · What goes wrong when RBAC in Cybersecurity?",
        "options": [
          "RBAC",
          "identity management",
          "IAM",
          "MFA"
        ],
        "answer": "RBAC",
        "explanation": "RBAC is a key concept in Cybersecurity."
      },
      {
        "question": "Level 7 · What common mistake involves privilege escalation in Cybersecurity?",
        "options": [
          "privilege escalation",
          "identity management",
          "IAM",
          "MFA"
        ],
        "answer": "privilege escalation",
        "explanation": "privilege escalation is a key concept in Cybersecurity."
      },
      {
        "question": "Level 7 · How do you monitor principle of least privilege in Cybersecurity?",
        "options": [
          "principle of least privilege",
          "identity management",
          "IAM",
          "MFA"
        ],
        "answer": "principle of least privilege",
        "explanation": "principle of least privilege is a key concept in Cybersecurity."
      },
      {
        "question": "Level 7 · What failure mode occurs with zero trust architecture in Cybersecurity?",
        "options": [
          "zero trust architecture",
          "identity management",
          "IAM",
          "MFA"
        ],
        "answer": "zero trust architecture",
        "explanation": "zero trust architecture is a key concept in Cybersecurity."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves cryptography in Cybersecurity?",
        "options": [
          "cryptography",
          "hash functions",
          "SHA-256",
          "MD5"
        ],
        "answer": "cryptography",
        "explanation": "cryptography is a key concept in Cybersecurity."
      },
      {
        "question": "Level 8 · How do you secure hash functions in Cybersecurity?",
        "options": [
          "hash functions",
          "cryptography",
          "SHA-256",
          "MD5"
        ],
        "answer": "hash functions",
        "explanation": "hash functions is a key concept in Cybersecurity."
      },
      {
        "question": "Level 8 · What testing strategy covers SHA-256 in Cybersecurity?",
        "options": [
          "SHA-256",
          "cryptography",
          "hash functions",
          "MD5"
        ],
        "answer": "SHA-256",
        "explanation": "SHA-256 is a key concept in Cybersecurity."
      },
      {
        "question": "Level 8 · How do you ensure reliability of MD5 in Cybersecurity?",
        "options": [
          "MD5",
          "cryptography",
          "hash functions",
          "SHA-256"
        ],
        "answer": "MD5",
        "explanation": "MD5 is a key concept in Cybersecurity."
      },
      {
        "question": "Level 8 · What error handling applies to salting in Cybersecurity?",
        "options": [
          "salting",
          "cryptography",
          "hash functions",
          "SHA-256"
        ],
        "answer": "salting",
        "explanation": "salting is a key concept in Cybersecurity."
      },
      {
        "question": "Level 8 · What security concern involves key exchange in Cybersecurity?",
        "options": [
          "key exchange",
          "cryptography",
          "hash functions",
          "SHA-256"
        ],
        "answer": "key exchange",
        "explanation": "key exchange is a key concept in Cybersecurity."
      },
      {
        "question": "Level 8 · How do you secure Diffie-Hellman in Cybersecurity?",
        "options": [
          "Diffie-Hellman",
          "cryptography",
          "hash functions",
          "SHA-256"
        ],
        "answer": "Diffie-Hellman",
        "explanation": "Diffie-Hellman is a key concept in Cybersecurity."
      },
      {
        "question": "Level 8 · What testing strategy covers elliptic curve cryptography in Cybersecurity?",
        "options": [
          "elliptic curve cryptography",
          "cryptography",
          "hash functions",
          "SHA-256"
        ],
        "answer": "elliptic curve cryptography",
        "explanation": "elliptic curve cryptography is a key concept in Cybersecurity."
      },
      {
        "question": "Level 8 · How do you ensure reliability of quantum cryptography in Cybersecurity?",
        "options": [
          "quantum cryptography",
          "cryptography",
          "hash functions",
          "SHA-256"
        ],
        "answer": "quantum cryptography",
        "explanation": "quantum cryptography is a key concept in Cybersecurity."
      },
      {
        "question": "Level 8 · What error handling applies to block cipher in Cybersecurity?",
        "options": [
          "block cipher",
          "cryptography",
          "hash functions",
          "SHA-256"
        ],
        "answer": "block cipher",
        "explanation": "block cipher is a key concept in Cybersecurity."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with incident response in Cybersecurity?",
        "options": [
          "incident response",
          "NIST framework",
          "detect",
          "respond"
        ],
        "answer": "incident response",
        "explanation": "incident response is a key concept in Cybersecurity."
      },
      {
        "question": "Level 9 · What architectural pattern uses NIST framework in Cybersecurity?",
        "options": [
          "NIST framework",
          "incident response",
          "detect",
          "respond"
        ],
        "answer": "NIST framework",
        "explanation": "NIST framework is a key concept in Cybersecurity."
      },
      {
        "question": "Level 9 · How would you design a system with detect in Cybersecurity?",
        "options": [
          "detect",
          "incident response",
          "NIST framework",
          "respond"
        ],
        "answer": "detect",
        "explanation": "detect is a key concept in Cybersecurity."
      },
      {
        "question": "Level 9 · What dependency does have respond in Cybersecurity?",
        "options": [
          "respond",
          "incident response",
          "NIST framework",
          "detect"
        ],
        "answer": "respond",
        "explanation": "respond is a key concept in Cybersecurity."
      },
      {
        "question": "Level 9 · How do you migrate from recover in Cybersecurity?",
        "options": [
          "recover",
          "incident response",
          "NIST framework",
          "detect"
        ],
        "answer": "recover",
        "explanation": "recover is a key concept in Cybersecurity."
      },
      {
        "question": "Level 9 · How does integrate with containment in Cybersecurity?",
        "options": [
          "containment",
          "incident response",
          "NIST framework",
          "detect"
        ],
        "answer": "containment",
        "explanation": "containment is a key concept in Cybersecurity."
      },
      {
        "question": "Level 9 · What architectural pattern uses eradication in Cybersecurity?",
        "options": [
          "eradication",
          "incident response",
          "NIST framework",
          "detect"
        ],
        "answer": "eradication",
        "explanation": "eradication is a key concept in Cybersecurity."
      },
      {
        "question": "Level 9 · How would you design a system with forensics in Cybersecurity?",
        "options": [
          "forensics",
          "incident response",
          "NIST framework",
          "detect"
        ],
        "answer": "forensics",
        "explanation": "forensics is a key concept in Cybersecurity."
      },
      {
        "question": "Level 9 · What dependency does have chain of custody in Cybersecurity?",
        "options": [
          "chain of custody",
          "incident response",
          "NIST framework",
          "detect"
        ],
        "answer": "chain of custody",
        "explanation": "chain of custody is a key concept in Cybersecurity."
      },
      {
        "question": "Level 9 · How do you migrate from SIEM in Cybersecurity?",
        "options": [
          "SIEM",
          "incident response",
          "NIST framework",
          "detect"
        ],
        "answer": "SIEM",
        "explanation": "SIEM is a key concept in Cybersecurity."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of compliance in Cybersecurity?",
        "options": [
          "compliance",
          "GDPR",
          "HIPAA",
          "PCI DSS"
        ],
        "answer": "compliance",
        "explanation": "compliance is a key concept in Cybersecurity."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of GDPR in Cybersecurity?",
        "options": [
          "GDPR",
          "compliance",
          "HIPAA",
          "PCI DSS"
        ],
        "answer": "GDPR",
        "explanation": "GDPR is a key concept in Cybersecurity."
      },
      {
        "question": "Level 10 · How does evolve across scales HIPAA in Cybersecurity?",
        "options": [
          "HIPAA",
          "compliance",
          "GDPR",
          "PCI DSS"
        ],
        "answer": "HIPAA",
        "explanation": "HIPAA is a key concept in Cybersecurity."
      },
      {
        "question": "Level 10 · What is the future direction of PCI DSS in Cybersecurity?",
        "options": [
          "PCI DSS",
          "compliance",
          "GDPR",
          "HIPAA"
        ],
        "answer": "PCI DSS",
        "explanation": "PCI DSS is a key concept in Cybersecurity."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves SOC 2 in Cybersecurity?",
        "options": [
          "SOC 2",
          "compliance",
          "GDPR",
          "HIPAA"
        ],
        "answer": "SOC 2",
        "explanation": "SOC 2 is a key concept in Cybersecurity."
      },
      {
        "question": "Level 10 · What is the theoretical basis of ISO 27001 in Cybersecurity?",
        "options": [
          "ISO 27001",
          "compliance",
          "GDPR",
          "HIPAA"
        ],
        "answer": "ISO 27001",
        "explanation": "ISO 27001 is a key concept in Cybersecurity."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of audit in Cybersecurity?",
        "options": [
          "audit",
          "compliance",
          "GDPR",
          "HIPAA"
        ],
        "answer": "audit",
        "explanation": "audit is a key concept in Cybersecurity."
      },
      {
        "question": "Level 10 · How does evolve across scales data classification in Cybersecurity?",
        "options": [
          "data classification",
          "compliance",
          "GDPR",
          "HIPAA"
        ],
        "answer": "data classification",
        "explanation": "data classification is a key concept in Cybersecurity."
      },
      {
        "question": "Level 10 · What is the future direction of data retention in Cybersecurity?",
        "options": [
          "data retention",
          "compliance",
          "GDPR",
          "HIPAA"
        ],
        "answer": "data retention",
        "explanation": "data retention is a key concept in Cybersecurity."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves privacy by design in Cybersecurity?",
        "options": [
          "privacy by design",
          "compliance",
          "GDPR",
          "HIPAA"
        ],
        "answer": "privacy by design",
        "explanation": "privacy by design is a key concept in Cybersecurity."
      }
    ]
  },
  "AI & ML": {
    "Level 1": [
      {
        "question": "Level 1 · What is supervised learning in AI & ML?",
        "options": [
          "supervised learning",
          "unsupervised learning",
          "reinforcement learning",
          "classification"
        ],
        "answer": "supervised learning",
        "explanation": "supervised learning is a key concept in AI & ML."
      },
      {
        "question": "Level 1 · How would you define unsupervised learning in AI & ML?",
        "options": [
          "unsupervised learning",
          "supervised learning",
          "reinforcement learning",
          "classification"
        ],
        "answer": "unsupervised learning",
        "explanation": "unsupervised learning is a key concept in AI & ML."
      },
      {
        "question": "Level 1 · Which describes reinforcement learning in AI & ML?",
        "options": [
          "reinforcement learning",
          "supervised learning",
          "unsupervised learning",
          "classification"
        ],
        "answer": "reinforcement learning",
        "explanation": "reinforcement learning is a key concept in AI & ML."
      },
      {
        "question": "Level 1 · What does the term classification in AI & ML?",
        "options": [
          "classification",
          "supervised learning",
          "unsupervised learning",
          "reinforcement learning"
        ],
        "answer": "classification",
        "explanation": "classification is a key concept in AI & ML."
      },
      {
        "question": "Level 1 · What concept is regression in AI & ML?",
        "options": [
          "regression",
          "supervised learning",
          "unsupervised learning",
          "reinforcement learning"
        ],
        "answer": "regression",
        "explanation": "regression is a key concept in AI & ML."
      },
      {
        "question": "Level 1 · What is clustering in AI & ML?",
        "options": [
          "clustering",
          "supervised learning",
          "unsupervised learning",
          "reinforcement learning"
        ],
        "answer": "clustering",
        "explanation": "clustering is a key concept in AI & ML."
      },
      {
        "question": "Level 1 · How would you define overfitting in AI & ML?",
        "options": [
          "overfitting",
          "supervised learning",
          "unsupervised learning",
          "reinforcement learning"
        ],
        "answer": "overfitting",
        "explanation": "overfitting is a key concept in AI & ML."
      },
      {
        "question": "Level 1 · Which describes underfitting in AI & ML?",
        "options": [
          "underfitting",
          "supervised learning",
          "unsupervised learning",
          "reinforcement learning"
        ],
        "answer": "underfitting",
        "explanation": "underfitting is a key concept in AI & ML."
      },
      {
        "question": "Level 1 · What does the term bias-variance tradeoff in AI & ML?",
        "options": [
          "bias-variance tradeoff",
          "supervised learning",
          "unsupervised learning",
          "reinforcement learning"
        ],
        "answer": "bias-variance tradeoff",
        "explanation": "bias-variance tradeoff is a key concept in AI & ML."
      },
      {
        "question": "Level 1 · What concept is training data in AI & ML?",
        "options": [
          "training data",
          "supervised learning",
          "unsupervised learning",
          "reinforcement learning"
        ],
        "answer": "training data",
        "explanation": "training data is a key concept in AI & ML."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you neural network in AI & ML?",
        "options": [
          "neural network",
          "perceptron",
          "activation function",
          "ReLU"
        ],
        "answer": "neural network",
        "explanation": "neural network is a key concept in AI & ML."
      },
      {
        "question": "Level 2 · What is the purpose of perceptron in AI & ML?",
        "options": [
          "perceptron",
          "neural network",
          "activation function",
          "ReLU"
        ],
        "answer": "perceptron",
        "explanation": "perceptron is a key concept in AI & ML."
      },
      {
        "question": "Level 2 · Which tool is used to activation function in AI & ML?",
        "options": [
          "activation function",
          "neural network",
          "perceptron",
          "ReLU"
        ],
        "answer": "activation function",
        "explanation": "activation function is a key concept in AI & ML."
      },
      {
        "question": "Level 2 · What does ReLU in AI & ML?",
        "options": [
          "ReLU",
          "neural network",
          "perceptron",
          "activation function"
        ],
        "answer": "ReLU",
        "explanation": "ReLU is a key concept in AI & ML."
      },
      {
        "question": "Level 2 · How can you sigmoid in AI & ML?",
        "options": [
          "sigmoid",
          "neural network",
          "perceptron",
          "activation function"
        ],
        "answer": "sigmoid",
        "explanation": "sigmoid is a key concept in AI & ML."
      },
      {
        "question": "Level 2 · How do you tanh in AI & ML?",
        "options": [
          "tanh",
          "neural network",
          "perceptron",
          "activation function"
        ],
        "answer": "tanh",
        "explanation": "tanh is a key concept in AI & ML."
      },
      {
        "question": "Level 2 · What is the purpose of forward propagation in AI & ML?",
        "options": [
          "forward propagation",
          "neural network",
          "perceptron",
          "activation function"
        ],
        "answer": "forward propagation",
        "explanation": "forward propagation is a key concept in AI & ML."
      },
      {
        "question": "Level 2 · Which tool is used to backpropagation in AI & ML?",
        "options": [
          "backpropagation",
          "neural network",
          "perceptron",
          "activation function"
        ],
        "answer": "backpropagation",
        "explanation": "backpropagation is a key concept in AI & ML."
      },
      {
        "question": "Level 2 · What does gradient descent in AI & ML?",
        "options": [
          "gradient descent",
          "neural network",
          "perceptron",
          "activation function"
        ],
        "answer": "gradient descent",
        "explanation": "gradient descent is a key concept in AI & ML."
      },
      {
        "question": "Level 2 · How can you learning rate in AI & ML?",
        "options": [
          "learning rate",
          "neural network",
          "perceptron",
          "activation function"
        ],
        "answer": "learning rate",
        "explanation": "learning rate is a key concept in AI & ML."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between CNN in AI & ML?",
        "options": [
          "CNN",
          "convolutional layer",
          "pooling",
          "feature map"
        ],
        "answer": "CNN",
        "explanation": "CNN is a key concept in AI & ML."
      },
      {
        "question": "Level 3 · How does convolutional layer in AI & ML?",
        "options": [
          "convolutional layer",
          "CNN",
          "pooling",
          "feature map"
        ],
        "answer": "convolutional layer",
        "explanation": "convolutional layer is a key concept in AI & ML."
      },
      {
        "question": "Level 3 · What problem does pooling in AI & ML?",
        "options": [
          "pooling",
          "CNN",
          "convolutional layer",
          "feature map"
        ],
        "answer": "pooling",
        "explanation": "pooling is a key concept in AI & ML."
      },
      {
        "question": "Level 3 · Which approach feature map in AI & ML?",
        "options": [
          "feature map",
          "CNN",
          "convolutional layer",
          "pooling"
        ],
        "answer": "feature map",
        "explanation": "feature map is a key concept in AI & ML."
      },
      {
        "question": "Level 3 · What is the role of filter in AI & ML?",
        "options": [
          "filter",
          "CNN",
          "convolutional layer",
          "pooling"
        ],
        "answer": "filter",
        "explanation": "filter is a key concept in AI & ML."
      },
      {
        "question": "Level 3 · What is the difference between padding in AI & ML?",
        "options": [
          "padding",
          "CNN",
          "convolutional layer",
          "pooling"
        ],
        "answer": "padding",
        "explanation": "padding is a key concept in AI & ML."
      },
      {
        "question": "Level 3 · How does stride in AI & ML?",
        "options": [
          "stride",
          "CNN",
          "convolutional layer",
          "pooling"
        ],
        "answer": "stride",
        "explanation": "stride is a key concept in AI & ML."
      },
      {
        "question": "Level 3 · What problem does ImageNet in AI & ML?",
        "options": [
          "ImageNet",
          "CNN",
          "convolutional layer",
          "pooling"
        ],
        "answer": "ImageNet",
        "explanation": "ImageNet is a key concept in AI & ML."
      },
      {
        "question": "Level 3 · Which approach transfer learning in AI & ML?",
        "options": [
          "transfer learning",
          "CNN",
          "convolutional layer",
          "pooling"
        ],
        "answer": "transfer learning",
        "explanation": "transfer learning is a key concept in AI & ML."
      },
      {
        "question": "Level 3 · What is the role of data augmentation in AI & ML?",
        "options": [
          "data augmentation",
          "CNN",
          "convolutional layer",
          "pooling"
        ],
        "answer": "data augmentation",
        "explanation": "data augmentation is a key concept in AI & ML."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use RNN in AI & ML?",
        "options": [
          "RNN",
          "LSTM",
          "GRU",
          "sequence modeling"
        ],
        "answer": "RNN",
        "explanation": "RNN is a key concept in AI & ML."
      },
      {
        "question": "Level 4 · What is a real-world example of LSTM in AI & ML?",
        "options": [
          "LSTM",
          "RNN",
          "GRU",
          "sequence modeling"
        ],
        "answer": "LSTM",
        "explanation": "LSTM is a key concept in AI & ML."
      },
      {
        "question": "Level 4 · How would you implement GRU in AI & ML?",
        "options": [
          "GRU",
          "RNN",
          "LSTM",
          "sequence modeling"
        ],
        "answer": "GRU",
        "explanation": "GRU is a key concept in AI & ML."
      },
      {
        "question": "Level 4 · What pattern applies sequence modeling in AI & ML?",
        "options": [
          "sequence modeling",
          "RNN",
          "LSTM",
          "GRU"
        ],
        "answer": "sequence modeling",
        "explanation": "sequence modeling is a key concept in AI & ML."
      },
      {
        "question": "Level 4 · What strategy handles word embedding in AI & ML?",
        "options": [
          "word embedding",
          "RNN",
          "LSTM",
          "GRU"
        ],
        "answer": "word embedding",
        "explanation": "word embedding is a key concept in AI & ML."
      },
      {
        "question": "Level 4 · When would you use attention mechanism in AI & ML?",
        "options": [
          "attention mechanism",
          "RNN",
          "LSTM",
          "GRU"
        ],
        "answer": "attention mechanism",
        "explanation": "attention mechanism is a key concept in AI & ML."
      },
      {
        "question": "Level 4 · What is a real-world example of transformer in AI & ML?",
        "options": [
          "transformer",
          "RNN",
          "LSTM",
          "GRU"
        ],
        "answer": "transformer",
        "explanation": "transformer is a key concept in AI & ML."
      },
      {
        "question": "Level 4 · How would you implement BERT in AI & ML?",
        "options": [
          "BERT",
          "RNN",
          "LSTM",
          "GRU"
        ],
        "answer": "BERT",
        "explanation": "BERT is a key concept in AI & ML."
      },
      {
        "question": "Level 4 · What pattern applies GPT in AI & ML?",
        "options": [
          "GPT",
          "RNN",
          "LSTM",
          "GRU"
        ],
        "answer": "GPT",
        "explanation": "GPT is a key concept in AI & ML."
      },
      {
        "question": "Level 4 · What strategy handles fine-tuning in AI & ML?",
        "options": [
          "fine-tuning",
          "RNN",
          "LSTM",
          "GRU"
        ],
        "answer": "fine-tuning",
        "explanation": "fine-tuning is a key concept in AI & ML."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize NLP in AI & ML?",
        "options": [
          "NLP",
          "tokenization",
          "stemming",
          "lemmatization"
        ],
        "answer": "NLP",
        "explanation": "NLP is a key concept in AI & ML."
      },
      {
        "question": "Level 5 · What is the best practice for tokenization in AI & ML?",
        "options": [
          "tokenization",
          "NLP",
          "stemming",
          "lemmatization"
        ],
        "answer": "tokenization",
        "explanation": "tokenization is a key concept in AI & ML."
      },
      {
        "question": "Level 5 · What performance consideration involves stemming in AI & ML?",
        "options": [
          "stemming",
          "NLP",
          "tokenization",
          "lemmatization"
        ],
        "answer": "stemming",
        "explanation": "stemming is a key concept in AI & ML."
      },
      {
        "question": "Level 5 · How do you scale lemmatization in AI & ML?",
        "options": [
          "lemmatization",
          "NLP",
          "tokenization",
          "stemming"
        ],
        "answer": "lemmatization",
        "explanation": "lemmatization is a key concept in AI & ML."
      },
      {
        "question": "Level 5 · What tradeoff exists when using bag of words in AI & ML?",
        "options": [
          "bag of words",
          "NLP",
          "tokenization",
          "stemming"
        ],
        "answer": "bag of words",
        "explanation": "bag of words is a key concept in AI & ML."
      },
      {
        "question": "Level 5 · How do you optimize TF-IDF in AI & ML?",
        "options": [
          "TF-IDF",
          "NLP",
          "tokenization",
          "stemming"
        ],
        "answer": "TF-IDF",
        "explanation": "TF-IDF is a key concept in AI & ML."
      },
      {
        "question": "Level 5 · What is the best practice for named entity recognition in AI & ML?",
        "options": [
          "named entity recognition",
          "NLP",
          "tokenization",
          "stemming"
        ],
        "answer": "named entity recognition",
        "explanation": "named entity recognition is a key concept in AI & ML."
      },
      {
        "question": "Level 5 · What performance consideration involves sentiment analysis in AI & ML?",
        "options": [
          "sentiment analysis",
          "NLP",
          "tokenization",
          "stemming"
        ],
        "answer": "sentiment analysis",
        "explanation": "sentiment analysis is a key concept in AI & ML."
      },
      {
        "question": "Level 5 · How do you scale text classification in AI & ML?",
        "options": [
          "text classification",
          "NLP",
          "tokenization",
          "stemming"
        ],
        "answer": "text classification",
        "explanation": "text classification is a key concept in AI & ML."
      },
      {
        "question": "Level 5 · What tradeoff exists when using language model in AI & ML?",
        "options": [
          "language model",
          "NLP",
          "tokenization",
          "stemming"
        ],
        "answer": "language model",
        "explanation": "language model is a key concept in AI & ML."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare decision tree in AI & ML?",
        "options": [
          "decision tree",
          "random forest",
          "gradient boosting",
          "XGBoost"
        ],
        "answer": "decision tree",
        "explanation": "decision tree is a key concept in AI & ML."
      },
      {
        "question": "Level 6 · How is it different from random forest in AI & ML?",
        "options": [
          "random forest",
          "decision tree",
          "gradient boosting",
          "XGBoost"
        ],
        "answer": "random forest",
        "explanation": "random forest is a key concept in AI & ML."
      },
      {
        "question": "Level 6 · What are the pros and cons of gradient boosting in AI & ML?",
        "options": [
          "gradient boosting",
          "decision tree",
          "random forest",
          "XGBoost"
        ],
        "answer": "gradient boosting",
        "explanation": "gradient boosting is a key concept in AI & ML."
      },
      {
        "question": "Level 6 · What advantage does XGBoost in AI & ML?",
        "options": [
          "XGBoost",
          "decision tree",
          "random forest",
          "gradient boosting"
        ],
        "answer": "XGBoost",
        "explanation": "XGBoost is a key concept in AI & ML."
      },
      {
        "question": "Level 6 · What limitation does AdaBoost in AI & ML?",
        "options": [
          "AdaBoost",
          "decision tree",
          "random forest",
          "gradient boosting"
        ],
        "answer": "AdaBoost",
        "explanation": "AdaBoost is a key concept in AI & ML."
      },
      {
        "question": "Level 6 · Compare ensemble learning in AI & ML?",
        "options": [
          "ensemble learning",
          "decision tree",
          "random forest",
          "gradient boosting"
        ],
        "answer": "ensemble learning",
        "explanation": "ensemble learning is a key concept in AI & ML."
      },
      {
        "question": "Level 6 · How is it different from bagging in AI & ML?",
        "options": [
          "bagging",
          "decision tree",
          "random forest",
          "gradient boosting"
        ],
        "answer": "bagging",
        "explanation": "bagging is a key concept in AI & ML."
      },
      {
        "question": "Level 6 · What are the pros and cons of boosting in AI & ML?",
        "options": [
          "boosting",
          "decision tree",
          "random forest",
          "gradient boosting"
        ],
        "answer": "boosting",
        "explanation": "boosting is a key concept in AI & ML."
      },
      {
        "question": "Level 6 · What advantage does feature importance in AI & ML?",
        "options": [
          "feature importance",
          "decision tree",
          "random forest",
          "gradient boosting"
        ],
        "answer": "feature importance",
        "explanation": "feature importance is a key concept in AI & ML."
      },
      {
        "question": "Level 6 · What limitation does hyperparameter tuning in AI & ML?",
        "options": [
          "hyperparameter tuning",
          "decision tree",
          "random forest",
          "gradient boosting"
        ],
        "answer": "hyperparameter tuning",
        "explanation": "hyperparameter tuning is a key concept in AI & ML."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with PCA in AI & ML?",
        "options": [
          "PCA",
          "dimensionality reduction",
          "feature selection",
          "feature extraction"
        ],
        "answer": "PCA",
        "explanation": "PCA is a key concept in AI & ML."
      },
      {
        "question": "Level 7 · What goes wrong when dimensionality reduction in AI & ML?",
        "options": [
          "dimensionality reduction",
          "PCA",
          "feature selection",
          "feature extraction"
        ],
        "answer": "dimensionality reduction",
        "explanation": "dimensionality reduction is a key concept in AI & ML."
      },
      {
        "question": "Level 7 · What common mistake involves feature selection in AI & ML?",
        "options": [
          "feature selection",
          "PCA",
          "dimensionality reduction",
          "feature extraction"
        ],
        "answer": "feature selection",
        "explanation": "feature selection is a key concept in AI & ML."
      },
      {
        "question": "Level 7 · How do you monitor feature extraction in AI & ML?",
        "options": [
          "feature extraction",
          "PCA",
          "dimensionality reduction",
          "feature selection"
        ],
        "answer": "feature extraction",
        "explanation": "feature extraction is a key concept in AI & ML."
      },
      {
        "question": "Level 7 · What failure mode occurs with t-SNE in AI & ML?",
        "options": [
          "t-SNE",
          "PCA",
          "dimensionality reduction",
          "feature selection"
        ],
        "answer": "t-SNE",
        "explanation": "t-SNE is a key concept in AI & ML."
      },
      {
        "question": "Level 7 · How do you debug issues with autoencoder in AI & ML?",
        "options": [
          "autoencoder",
          "PCA",
          "dimensionality reduction",
          "feature selection"
        ],
        "answer": "autoencoder",
        "explanation": "autoencoder is a key concept in AI & ML."
      },
      {
        "question": "Level 7 · What goes wrong when manifold learning in AI & ML?",
        "options": [
          "manifold learning",
          "PCA",
          "dimensionality reduction",
          "feature selection"
        ],
        "answer": "manifold learning",
        "explanation": "manifold learning is a key concept in AI & ML."
      },
      {
        "question": "Level 7 · What common mistake involves eigenvalue in AI & ML?",
        "options": [
          "eigenvalue",
          "PCA",
          "dimensionality reduction",
          "feature selection"
        ],
        "answer": "eigenvalue",
        "explanation": "eigenvalue is a key concept in AI & ML."
      },
      {
        "question": "Level 7 · How do you monitor singular value decomposition in AI & ML?",
        "options": [
          "singular value decomposition",
          "PCA",
          "dimensionality reduction",
          "feature selection"
        ],
        "answer": "singular value decomposition",
        "explanation": "singular value decomposition is a key concept in AI & ML."
      },
      {
        "question": "Level 7 · What failure mode occurs with variance explained in AI & ML?",
        "options": [
          "variance explained",
          "PCA",
          "dimensionality reduction",
          "feature selection"
        ],
        "answer": "variance explained",
        "explanation": "variance explained is a key concept in AI & ML."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves model evaluation in AI & ML?",
        "options": [
          "model evaluation",
          "accuracy",
          "precision",
          "recall"
        ],
        "answer": "model evaluation",
        "explanation": "model evaluation is a key concept in AI & ML."
      },
      {
        "question": "Level 8 · How do you secure accuracy in AI & ML?",
        "options": [
          "accuracy",
          "model evaluation",
          "precision",
          "recall"
        ],
        "answer": "accuracy",
        "explanation": "accuracy is a key concept in AI & ML."
      },
      {
        "question": "Level 8 · What testing strategy covers precision in AI & ML?",
        "options": [
          "precision",
          "model evaluation",
          "accuracy",
          "recall"
        ],
        "answer": "precision",
        "explanation": "precision is a key concept in AI & ML."
      },
      {
        "question": "Level 8 · How do you ensure reliability of recall in AI & ML?",
        "options": [
          "recall",
          "model evaluation",
          "accuracy",
          "precision"
        ],
        "answer": "recall",
        "explanation": "recall is a key concept in AI & ML."
      },
      {
        "question": "Level 8 · What error handling applies to F1 score in AI & ML?",
        "options": [
          "F1 score",
          "model evaluation",
          "accuracy",
          "precision"
        ],
        "answer": "F1 score",
        "explanation": "F1 score is a key concept in AI & ML."
      },
      {
        "question": "Level 8 · What security concern involves ROC curve in AI & ML?",
        "options": [
          "ROC curve",
          "model evaluation",
          "accuracy",
          "precision"
        ],
        "answer": "ROC curve",
        "explanation": "ROC curve is a key concept in AI & ML."
      },
      {
        "question": "Level 8 · How do you secure AUC in AI & ML?",
        "options": [
          "AUC",
          "model evaluation",
          "accuracy",
          "precision"
        ],
        "answer": "AUC",
        "explanation": "AUC is a key concept in AI & ML."
      },
      {
        "question": "Level 8 · What testing strategy covers confusion matrix in AI & ML?",
        "options": [
          "confusion matrix",
          "model evaluation",
          "accuracy",
          "precision"
        ],
        "answer": "confusion matrix",
        "explanation": "confusion matrix is a key concept in AI & ML."
      },
      {
        "question": "Level 8 · How do you ensure reliability of cross-validation in AI & ML?",
        "options": [
          "cross-validation",
          "model evaluation",
          "accuracy",
          "precision"
        ],
        "answer": "cross-validation",
        "explanation": "cross-validation is a key concept in AI & ML."
      },
      {
        "question": "Level 8 · What error handling applies to holdout set in AI & ML?",
        "options": [
          "holdout set",
          "model evaluation",
          "accuracy",
          "precision"
        ],
        "answer": "holdout set",
        "explanation": "holdout set is a key concept in AI & ML."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with reinforcement learning in AI & ML?",
        "options": [
          "reinforcement learning",
          "agent",
          "environment",
          "state"
        ],
        "answer": "reinforcement learning",
        "explanation": "reinforcement learning is a key concept in AI & ML."
      },
      {
        "question": "Level 9 · What architectural pattern uses agent in AI & ML?",
        "options": [
          "agent",
          "reinforcement learning",
          "environment",
          "state"
        ],
        "answer": "agent",
        "explanation": "agent is a key concept in AI & ML."
      },
      {
        "question": "Level 9 · How would you design a system with environment in AI & ML?",
        "options": [
          "environment",
          "reinforcement learning",
          "agent",
          "state"
        ],
        "answer": "environment",
        "explanation": "environment is a key concept in AI & ML."
      },
      {
        "question": "Level 9 · What dependency does have state in AI & ML?",
        "options": [
          "state",
          "reinforcement learning",
          "agent",
          "environment"
        ],
        "answer": "state",
        "explanation": "state is a key concept in AI & ML."
      },
      {
        "question": "Level 9 · How do you migrate from action in AI & ML?",
        "options": [
          "action",
          "reinforcement learning",
          "agent",
          "environment"
        ],
        "answer": "action",
        "explanation": "action is a key concept in AI & ML."
      },
      {
        "question": "Level 9 · How does integrate with reward in AI & ML?",
        "options": [
          "reward",
          "reinforcement learning",
          "agent",
          "environment"
        ],
        "answer": "reward",
        "explanation": "reward is a key concept in AI & ML."
      },
      {
        "question": "Level 9 · What architectural pattern uses policy in AI & ML?",
        "options": [
          "policy",
          "reinforcement learning",
          "agent",
          "environment"
        ],
        "answer": "policy",
        "explanation": "policy is a key concept in AI & ML."
      },
      {
        "question": "Level 9 · How would you design a system with Q-learning in AI & ML?",
        "options": [
          "Q-learning",
          "reinforcement learning",
          "agent",
          "environment"
        ],
        "answer": "Q-learning",
        "explanation": "Q-learning is a key concept in AI & ML."
      },
      {
        "question": "Level 9 · What dependency does have deep Q network in AI & ML?",
        "options": [
          "deep Q network",
          "reinforcement learning",
          "agent",
          "environment"
        ],
        "answer": "deep Q network",
        "explanation": "deep Q network is a key concept in AI & ML."
      },
      {
        "question": "Level 9 · How do you migrate from exploration vs exploitation in AI & ML?",
        "options": [
          "exploration vs exploitation",
          "reinforcement learning",
          "agent",
          "environment"
        ],
        "answer": "exploration vs exploitation",
        "explanation": "exploration vs exploitation is a key concept in AI & ML."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of MLOps in AI & ML?",
        "options": [
          "MLOps",
          "model deployment",
          "model serving",
          "feature store"
        ],
        "answer": "MLOps",
        "explanation": "MLOps is a key concept in AI & ML."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of model deployment in AI & ML?",
        "options": [
          "model deployment",
          "MLOps",
          "model serving",
          "feature store"
        ],
        "answer": "model deployment",
        "explanation": "model deployment is a key concept in AI & ML."
      },
      {
        "question": "Level 10 · How does evolve across scales model serving in AI & ML?",
        "options": [
          "model serving",
          "MLOps",
          "model deployment",
          "feature store"
        ],
        "answer": "model serving",
        "explanation": "model serving is a key concept in AI & ML."
      },
      {
        "question": "Level 10 · What is the future direction of feature store in AI & ML?",
        "options": [
          "feature store",
          "MLOps",
          "model deployment",
          "model serving"
        ],
        "answer": "feature store",
        "explanation": "feature store is a key concept in AI & ML."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves model monitoring in AI & ML?",
        "options": [
          "model monitoring",
          "MLOps",
          "model deployment",
          "model serving"
        ],
        "answer": "model monitoring",
        "explanation": "model monitoring is a key concept in AI & ML."
      },
      {
        "question": "Level 10 · What is the theoretical basis of drift detection in AI & ML?",
        "options": [
          "drift detection",
          "MLOps",
          "model deployment",
          "model serving"
        ],
        "answer": "drift detection",
        "explanation": "drift detection is a key concept in AI & ML."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of A/B testing in AI & ML?",
        "options": [
          "A/B testing",
          "MLOps",
          "model deployment",
          "model serving"
        ],
        "answer": "A/B testing",
        "explanation": "A/B testing is a key concept in AI & ML."
      },
      {
        "question": "Level 10 · How does evolve across scales pipeline in AI & ML?",
        "options": [
          "pipeline",
          "MLOps",
          "model deployment",
          "model serving"
        ],
        "answer": "pipeline",
        "explanation": "pipeline is a key concept in AI & ML."
      },
      {
        "question": "Level 10 · What is the future direction of model registry in AI & ML?",
        "options": [
          "model registry",
          "MLOps",
          "model deployment",
          "model serving"
        ],
        "answer": "model registry",
        "explanation": "model registry is a key concept in AI & ML."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves experiment tracking in AI & ML?",
        "options": [
          "experiment tracking",
          "MLOps",
          "model deployment",
          "model serving"
        ],
        "answer": "experiment tracking",
        "explanation": "experiment tracking is a key concept in AI & ML."
      }
    ]
  },
  "System Design": {
    "Level 1": [
      {
        "question": "Level 1 · What is client-server in System Design?",
        "options": [
          "client-server",
          "peer-to-peer",
          "latency",
          "throughput"
        ],
        "answer": "client-server",
        "explanation": "client-server is a key concept in System Design."
      },
      {
        "question": "Level 1 · How would you define peer-to-peer in System Design?",
        "options": [
          "peer-to-peer",
          "client-server",
          "latency",
          "throughput"
        ],
        "answer": "peer-to-peer",
        "explanation": "peer-to-peer is a key concept in System Design."
      },
      {
        "question": "Level 1 · Which describes latency in System Design?",
        "options": [
          "latency",
          "client-server",
          "peer-to-peer",
          "throughput"
        ],
        "answer": "latency",
        "explanation": "latency is a key concept in System Design."
      },
      {
        "question": "Level 1 · What does the term throughput in System Design?",
        "options": [
          "throughput",
          "client-server",
          "peer-to-peer",
          "latency"
        ],
        "answer": "throughput",
        "explanation": "throughput is a key concept in System Design."
      },
      {
        "question": "Level 1 · What concept is availability in System Design?",
        "options": [
          "availability",
          "client-server",
          "peer-to-peer",
          "latency"
        ],
        "answer": "availability",
        "explanation": "availability is a key concept in System Design."
      },
      {
        "question": "Level 1 · What is consistency in System Design?",
        "options": [
          "consistency",
          "client-server",
          "peer-to-peer",
          "latency"
        ],
        "answer": "consistency",
        "explanation": "consistency is a key concept in System Design."
      },
      {
        "question": "Level 1 · How would you define partition tolerance in System Design?",
        "options": [
          "partition tolerance",
          "client-server",
          "peer-to-peer",
          "latency"
        ],
        "answer": "partition tolerance",
        "explanation": "partition tolerance is a key concept in System Design."
      },
      {
        "question": "Level 1 · Which describes CAP theorem in System Design?",
        "options": [
          "CAP theorem",
          "client-server",
          "peer-to-peer",
          "latency"
        ],
        "answer": "CAP theorem",
        "explanation": "CAP theorem is a key concept in System Design."
      },
      {
        "question": "Level 1 · What does the term ACID in System Design?",
        "options": [
          "ACID",
          "client-server",
          "peer-to-peer",
          "latency"
        ],
        "answer": "ACID",
        "explanation": "ACID is a key concept in System Design."
      },
      {
        "question": "Level 1 · What concept is BASE in System Design?",
        "options": [
          "BASE",
          "client-server",
          "peer-to-peer",
          "latency"
        ],
        "answer": "BASE",
        "explanation": "BASE is a key concept in System Design."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you load balancer in System Design?",
        "options": [
          "load balancer",
          "round robin",
          "least connections",
          "consistent hashing"
        ],
        "answer": "load balancer",
        "explanation": "load balancer is a key concept in System Design."
      },
      {
        "question": "Level 2 · What is the purpose of round robin in System Design?",
        "options": [
          "round robin",
          "load balancer",
          "least connections",
          "consistent hashing"
        ],
        "answer": "round robin",
        "explanation": "round robin is a key concept in System Design."
      },
      {
        "question": "Level 2 · Which tool is used to least connections in System Design?",
        "options": [
          "least connections",
          "load balancer",
          "round robin",
          "consistent hashing"
        ],
        "answer": "least connections",
        "explanation": "least connections is a key concept in System Design."
      },
      {
        "question": "Level 2 · What does consistent hashing in System Design?",
        "options": [
          "consistent hashing",
          "load balancer",
          "round robin",
          "least connections"
        ],
        "answer": "consistent hashing",
        "explanation": "consistent hashing is a key concept in System Design."
      },
      {
        "question": "Level 2 · How can you reverse proxy in System Design?",
        "options": [
          "reverse proxy",
          "load balancer",
          "round robin",
          "least connections"
        ],
        "answer": "reverse proxy",
        "explanation": "reverse proxy is a key concept in System Design."
      },
      {
        "question": "Level 2 · How do you forward proxy in System Design?",
        "options": [
          "forward proxy",
          "load balancer",
          "round robin",
          "least connections"
        ],
        "answer": "forward proxy",
        "explanation": "forward proxy is a key concept in System Design."
      },
      {
        "question": "Level 2 · What is the purpose of caching layer in System Design?",
        "options": [
          "caching layer",
          "load balancer",
          "round robin",
          "least connections"
        ],
        "answer": "caching layer",
        "explanation": "caching layer is a key concept in System Design."
      },
      {
        "question": "Level 2 · Which tool is used to CDN in System Design?",
        "options": [
          "CDN",
          "load balancer",
          "round robin",
          "least connections"
        ],
        "answer": "CDN",
        "explanation": "CDN is a key concept in System Design."
      },
      {
        "question": "Level 2 · What does edge server in System Design?",
        "options": [
          "edge server",
          "load balancer",
          "round robin",
          "least connections"
        ],
        "answer": "edge server",
        "explanation": "edge server is a key concept in System Design."
      },
      {
        "question": "Level 2 · How can you origin server in System Design?",
        "options": [
          "origin server",
          "load balancer",
          "round robin",
          "least connections"
        ],
        "answer": "origin server",
        "explanation": "origin server is a key concept in System Design."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between database sharding in System Design?",
        "options": [
          "database sharding",
          "horizontal partitioning",
          "vertical partitioning",
          "replication"
        ],
        "answer": "database sharding",
        "explanation": "database sharding is a key concept in System Design."
      },
      {
        "question": "Level 3 · How does horizontal partitioning in System Design?",
        "options": [
          "horizontal partitioning",
          "database sharding",
          "vertical partitioning",
          "replication"
        ],
        "answer": "horizontal partitioning",
        "explanation": "horizontal partitioning is a key concept in System Design."
      },
      {
        "question": "Level 3 · What problem does vertical partitioning in System Design?",
        "options": [
          "vertical partitioning",
          "database sharding",
          "horizontal partitioning",
          "replication"
        ],
        "answer": "vertical partitioning",
        "explanation": "vertical partitioning is a key concept in System Design."
      },
      {
        "question": "Level 3 · Which approach replication in System Design?",
        "options": [
          "replication",
          "database sharding",
          "horizontal partitioning",
          "vertical partitioning"
        ],
        "answer": "replication",
        "explanation": "replication is a key concept in System Design."
      },
      {
        "question": "Level 3 · What is the role of leader-follower in System Design?",
        "options": [
          "leader-follower",
          "database sharding",
          "horizontal partitioning",
          "vertical partitioning"
        ],
        "answer": "leader-follower",
        "explanation": "leader-follower is a key concept in System Design."
      },
      {
        "question": "Level 3 · What is the difference between multi-leader in System Design?",
        "options": [
          "multi-leader",
          "database sharding",
          "horizontal partitioning",
          "vertical partitioning"
        ],
        "answer": "multi-leader",
        "explanation": "multi-leader is a key concept in System Design."
      },
      {
        "question": "Level 3 · How does read replica in System Design?",
        "options": [
          "read replica",
          "database sharding",
          "horizontal partitioning",
          "vertical partitioning"
        ],
        "answer": "read replica",
        "explanation": "read replica is a key concept in System Design."
      },
      {
        "question": "Level 3 · What problem does write-ahead log in System Design?",
        "options": [
          "write-ahead log",
          "database sharding",
          "horizontal partitioning",
          "vertical partitioning"
        ],
        "answer": "write-ahead log",
        "explanation": "write-ahead log is a key concept in System Design."
      },
      {
        "question": "Level 3 · Which approach quorum in System Design?",
        "options": [
          "quorum",
          "database sharding",
          "horizontal partitioning",
          "vertical partitioning"
        ],
        "answer": "quorum",
        "explanation": "quorum is a key concept in System Design."
      },
      {
        "question": "Level 3 · What is the role of consensus in System Design?",
        "options": [
          "consensus",
          "database sharding",
          "horizontal partitioning",
          "vertical partitioning"
        ],
        "answer": "consensus",
        "explanation": "consensus is a key concept in System Design."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use microservices in System Design?",
        "options": [
          "microservices",
          "service mesh",
          "API gateway",
          "circuit breaker"
        ],
        "answer": "microservices",
        "explanation": "microservices is a key concept in System Design."
      },
      {
        "question": "Level 4 · What is a real-world example of service mesh in System Design?",
        "options": [
          "service mesh",
          "microservices",
          "API gateway",
          "circuit breaker"
        ],
        "answer": "service mesh",
        "explanation": "service mesh is a key concept in System Design."
      },
      {
        "question": "Level 4 · How would you implement API gateway in System Design?",
        "options": [
          "API gateway",
          "microservices",
          "service mesh",
          "circuit breaker"
        ],
        "answer": "API gateway",
        "explanation": "API gateway is a key concept in System Design."
      },
      {
        "question": "Level 4 · What pattern applies circuit breaker in System Design?",
        "options": [
          "circuit breaker",
          "microservices",
          "service mesh",
          "API gateway"
        ],
        "answer": "circuit breaker",
        "explanation": "circuit breaker is a key concept in System Design."
      },
      {
        "question": "Level 4 · What strategy handles bulkhead in System Design?",
        "options": [
          "bulkhead",
          "microservices",
          "service mesh",
          "API gateway"
        ],
        "answer": "bulkhead",
        "explanation": "bulkhead is a key concept in System Design."
      },
      {
        "question": "Level 4 · When would you use retry pattern in System Design?",
        "options": [
          "retry pattern",
          "microservices",
          "service mesh",
          "API gateway"
        ],
        "answer": "retry pattern",
        "explanation": "retry pattern is a key concept in System Design."
      },
      {
        "question": "Level 4 · What is a real-world example of timeout in System Design?",
        "options": [
          "timeout",
          "microservices",
          "service mesh",
          "API gateway"
        ],
        "answer": "timeout",
        "explanation": "timeout is a key concept in System Design."
      },
      {
        "question": "Level 4 · How would you implement rate limiting in System Design?",
        "options": [
          "rate limiting",
          "microservices",
          "service mesh",
          "API gateway"
        ],
        "answer": "rate limiting",
        "explanation": "rate limiting is a key concept in System Design."
      },
      {
        "question": "Level 4 · What pattern applies service discovery in System Design?",
        "options": [
          "service discovery",
          "microservices",
          "service mesh",
          "API gateway"
        ],
        "answer": "service discovery",
        "explanation": "service discovery is a key concept in System Design."
      },
      {
        "question": "Level 4 · What strategy handles health check in System Design?",
        "options": [
          "health check",
          "microservices",
          "service mesh",
          "API gateway"
        ],
        "answer": "health check",
        "explanation": "health check is a key concept in System Design."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize message queue in System Design?",
        "options": [
          "message queue",
          "Kafka",
          "RabbitMQ",
          "pub-sub"
        ],
        "answer": "message queue",
        "explanation": "message queue is a key concept in System Design."
      },
      {
        "question": "Level 5 · What is the best practice for Kafka in System Design?",
        "options": [
          "Kafka",
          "message queue",
          "RabbitMQ",
          "pub-sub"
        ],
        "answer": "Kafka",
        "explanation": "Kafka is a key concept in System Design."
      },
      {
        "question": "Level 5 · What performance consideration involves RabbitMQ in System Design?",
        "options": [
          "RabbitMQ",
          "message queue",
          "Kafka",
          "pub-sub"
        ],
        "answer": "RabbitMQ",
        "explanation": "RabbitMQ is a key concept in System Design."
      },
      {
        "question": "Level 5 · How do you scale pub-sub in System Design?",
        "options": [
          "pub-sub",
          "message queue",
          "Kafka",
          "RabbitMQ"
        ],
        "answer": "pub-sub",
        "explanation": "pub-sub is a key concept in System Design."
      },
      {
        "question": "Level 5 · What tradeoff exists when using point-to-point in System Design?",
        "options": [
          "point-to-point",
          "message queue",
          "Kafka",
          "RabbitMQ"
        ],
        "answer": "point-to-point",
        "explanation": "point-to-point is a key concept in System Design."
      },
      {
        "question": "Level 5 · How do you optimize event sourcing in System Design?",
        "options": [
          "event sourcing",
          "message queue",
          "Kafka",
          "RabbitMQ"
        ],
        "answer": "event sourcing",
        "explanation": "event sourcing is a key concept in System Design."
      },
      {
        "question": "Level 5 · What is the best practice for CQRS in System Design?",
        "options": [
          "CQRS",
          "message queue",
          "Kafka",
          "RabbitMQ"
        ],
        "answer": "CQRS",
        "explanation": "CQRS is a key concept in System Design."
      },
      {
        "question": "Level 5 · What performance consideration involves stream processing in System Design?",
        "options": [
          "stream processing",
          "message queue",
          "Kafka",
          "RabbitMQ"
        ],
        "answer": "stream processing",
        "explanation": "stream processing is a key concept in System Design."
      },
      {
        "question": "Level 5 · How do you scale consumer group in System Design?",
        "options": [
          "consumer group",
          "message queue",
          "Kafka",
          "RabbitMQ"
        ],
        "answer": "consumer group",
        "explanation": "consumer group is a key concept in System Design."
      },
      {
        "question": "Level 5 · What tradeoff exists when using offset in System Design?",
        "options": [
          "offset",
          "message queue",
          "Kafka",
          "RabbitMQ"
        ],
        "answer": "offset",
        "explanation": "offset is a key concept in System Design."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare caching in System Design?",
        "options": [
          "caching",
          "Redis",
          "Memcached",
          "cache aside"
        ],
        "answer": "caching",
        "explanation": "caching is a key concept in System Design."
      },
      {
        "question": "Level 6 · How is it different from Redis in System Design?",
        "options": [
          "Redis",
          "caching",
          "Memcached",
          "cache aside"
        ],
        "answer": "Redis",
        "explanation": "Redis is a key concept in System Design."
      },
      {
        "question": "Level 6 · What are the pros and cons of Memcached in System Design?",
        "options": [
          "Memcached",
          "caching",
          "Redis",
          "cache aside"
        ],
        "answer": "Memcached",
        "explanation": "Memcached is a key concept in System Design."
      },
      {
        "question": "Level 6 · What advantage does cache aside in System Design?",
        "options": [
          "cache aside",
          "caching",
          "Redis",
          "Memcached"
        ],
        "answer": "cache aside",
        "explanation": "cache aside is a key concept in System Design."
      },
      {
        "question": "Level 6 · What limitation does write through in System Design?",
        "options": [
          "write through",
          "caching",
          "Redis",
          "Memcached"
        ],
        "answer": "write through",
        "explanation": "write through is a key concept in System Design."
      },
      {
        "question": "Level 6 · Compare write behind in System Design?",
        "options": [
          "write behind",
          "caching",
          "Redis",
          "Memcached"
        ],
        "answer": "write behind",
        "explanation": "write behind is a key concept in System Design."
      },
      {
        "question": "Level 6 · How is it different from cache invalidation in System Design?",
        "options": [
          "cache invalidation",
          "caching",
          "Redis",
          "Memcached"
        ],
        "answer": "cache invalidation",
        "explanation": "cache invalidation is a key concept in System Design."
      },
      {
        "question": "Level 6 · What are the pros and cons of TTL in System Design?",
        "options": [
          "TTL",
          "caching",
          "Redis",
          "Memcached"
        ],
        "answer": "TTL",
        "explanation": "TTL is a key concept in System Design."
      },
      {
        "question": "Level 6 · What advantage does LRU cache in System Design?",
        "options": [
          "LRU cache",
          "caching",
          "Redis",
          "Memcached"
        ],
        "answer": "LRU cache",
        "explanation": "LRU cache is a key concept in System Design."
      },
      {
        "question": "Level 6 · What limitation does distributed cache in System Design?",
        "options": [
          "distributed cache",
          "caching",
          "Redis",
          "Memcached"
        ],
        "answer": "distributed cache",
        "explanation": "distributed cache is a key concept in System Design."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with SQL vs NoSQL in System Design?",
        "options": [
          "SQL vs NoSQL",
          "document store",
          "key-value store",
          "graph database"
        ],
        "answer": "SQL vs NoSQL",
        "explanation": "SQL vs NoSQL is a key concept in System Design."
      },
      {
        "question": "Level 7 · What goes wrong when document store in System Design?",
        "options": [
          "document store",
          "SQL vs NoSQL",
          "key-value store",
          "graph database"
        ],
        "answer": "document store",
        "explanation": "document store is a key concept in System Design."
      },
      {
        "question": "Level 7 · What common mistake involves key-value store in System Design?",
        "options": [
          "key-value store",
          "SQL vs NoSQL",
          "document store",
          "graph database"
        ],
        "answer": "key-value store",
        "explanation": "key-value store is a key concept in System Design."
      },
      {
        "question": "Level 7 · How do you monitor graph database in System Design?",
        "options": [
          "graph database",
          "SQL vs NoSQL",
          "document store",
          "key-value store"
        ],
        "answer": "graph database",
        "explanation": "graph database is a key concept in System Design."
      },
      {
        "question": "Level 7 · What failure mode occurs with wide column in System Design?",
        "options": [
          "wide column",
          "SQL vs NoSQL",
          "document store",
          "key-value store"
        ],
        "answer": "wide column",
        "explanation": "wide column is a key concept in System Design."
      },
      {
        "question": "Level 7 · How do you debug issues with time series in System Design?",
        "options": [
          "time series",
          "SQL vs NoSQL",
          "document store",
          "key-value store"
        ],
        "answer": "time series",
        "explanation": "time series is a key concept in System Design."
      },
      {
        "question": "Level 7 · What goes wrong when ACID compliance in System Design?",
        "options": [
          "ACID compliance",
          "SQL vs NoSQL",
          "document store",
          "key-value store"
        ],
        "answer": "ACID compliance",
        "explanation": "ACID compliance is a key concept in System Design."
      },
      {
        "question": "Level 7 · What common mistake involves eventual consistency in System Design?",
        "options": [
          "eventual consistency",
          "SQL vs NoSQL",
          "document store",
          "key-value store"
        ],
        "answer": "eventual consistency",
        "explanation": "eventual consistency is a key concept in System Design."
      },
      {
        "question": "Level 7 · How do you monitor sharding in System Design?",
        "options": [
          "sharding",
          "SQL vs NoSQL",
          "document store",
          "key-value store"
        ],
        "answer": "sharding",
        "explanation": "sharding is a key concept in System Design."
      },
      {
        "question": "Level 7 · What failure mode occurs with denormalization in System Design?",
        "options": [
          "denormalization",
          "SQL vs NoSQL",
          "document store",
          "key-value store"
        ],
        "answer": "denormalization",
        "explanation": "denormalization is a key concept in System Design."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves distributed systems in System Design?",
        "options": [
          "distributed systems",
          "consensus algorithm",
          "Paxos",
          "Raft"
        ],
        "answer": "distributed systems",
        "explanation": "distributed systems is a key concept in System Design."
      },
      {
        "question": "Level 8 · How do you secure consensus algorithm in System Design?",
        "options": [
          "consensus algorithm",
          "distributed systems",
          "Paxos",
          "Raft"
        ],
        "answer": "consensus algorithm",
        "explanation": "consensus algorithm is a key concept in System Design."
      },
      {
        "question": "Level 8 · What testing strategy covers Paxos in System Design?",
        "options": [
          "Paxos",
          "distributed systems",
          "consensus algorithm",
          "Raft"
        ],
        "answer": "Paxos",
        "explanation": "Paxos is a key concept in System Design."
      },
      {
        "question": "Level 8 · How do you ensure reliability of Raft in System Design?",
        "options": [
          "Raft",
          "distributed systems",
          "consensus algorithm",
          "Paxos"
        ],
        "answer": "Raft",
        "explanation": "Raft is a key concept in System Design."
      },
      {
        "question": "Level 8 · What error handling applies to gossip protocol in System Design?",
        "options": [
          "gossip protocol",
          "distributed systems",
          "consensus algorithm",
          "Paxos"
        ],
        "answer": "gossip protocol",
        "explanation": "gossip protocol is a key concept in System Design."
      },
      {
        "question": "Level 8 · What security concern involves vector clock in System Design?",
        "options": [
          "vector clock",
          "distributed systems",
          "consensus algorithm",
          "Paxos"
        ],
        "answer": "vector clock",
        "explanation": "vector clock is a key concept in System Design."
      },
      {
        "question": "Level 8 · How do you secure distributed ledger in System Design?",
        "options": [
          "distributed ledger",
          "distributed systems",
          "consensus algorithm",
          "Paxos"
        ],
        "answer": "distributed ledger",
        "explanation": "distributed ledger is a key concept in System Design."
      },
      {
        "question": "Level 8 · What testing strategy covers Byzantine fault tolerance in System Design?",
        "options": [
          "Byzantine fault tolerance",
          "distributed systems",
          "consensus algorithm",
          "Paxos"
        ],
        "answer": "Byzantine fault tolerance",
        "explanation": "Byzantine fault tolerance is a key concept in System Design."
      },
      {
        "question": "Level 8 · How do you ensure reliability of leader election in System Design?",
        "options": [
          "leader election",
          "distributed systems",
          "consensus algorithm",
          "Paxos"
        ],
        "answer": "leader election",
        "explanation": "leader election is a key concept in System Design."
      },
      {
        "question": "Level 8 · What error handling applies to distributed lock in System Design?",
        "options": [
          "distributed lock",
          "distributed systems",
          "consensus algorithm",
          "Paxos"
        ],
        "answer": "distributed lock",
        "explanation": "distributed lock is a key concept in System Design."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with design YouTube in System Design?",
        "options": [
          "design YouTube",
          "design Twitter",
          "design URL shortener",
          "design chat system"
        ],
        "answer": "design YouTube",
        "explanation": "design YouTube is a key concept in System Design."
      },
      {
        "question": "Level 9 · What architectural pattern uses design Twitter in System Design?",
        "options": [
          "design Twitter",
          "design YouTube",
          "design URL shortener",
          "design chat system"
        ],
        "answer": "design Twitter",
        "explanation": "design Twitter is a key concept in System Design."
      },
      {
        "question": "Level 9 · How would you design a system with design URL shortener in System Design?",
        "options": [
          "design URL shortener",
          "design YouTube",
          "design Twitter",
          "design chat system"
        ],
        "answer": "design URL shortener",
        "explanation": "design URL shortener is a key concept in System Design."
      },
      {
        "question": "Level 9 · What dependency does have design chat system in System Design?",
        "options": [
          "design chat system",
          "design YouTube",
          "design Twitter",
          "design URL shortener"
        ],
        "answer": "design chat system",
        "explanation": "design chat system is a key concept in System Design."
      },
      {
        "question": "Level 9 · How do you migrate from design file storage in System Design?",
        "options": [
          "design file storage",
          "design YouTube",
          "design Twitter",
          "design URL shortener"
        ],
        "answer": "design file storage",
        "explanation": "design file storage is a key concept in System Design."
      },
      {
        "question": "Level 9 · How does integrate with rate limiter design in System Design?",
        "options": [
          "rate limiter design",
          "design YouTube",
          "design Twitter",
          "design URL shortener"
        ],
        "answer": "rate limiter design",
        "explanation": "rate limiter design is a key concept in System Design."
      },
      {
        "question": "Level 9 · What architectural pattern uses design notification system in System Design?",
        "options": [
          "design notification system",
          "design YouTube",
          "design Twitter",
          "design URL shortener"
        ],
        "answer": "design notification system",
        "explanation": "design notification system is a key concept in System Design."
      },
      {
        "question": "Level 9 · How would you design a system with design news feed in System Design?",
        "options": [
          "design news feed",
          "design YouTube",
          "design Twitter",
          "design URL shortener"
        ],
        "answer": "design news feed",
        "explanation": "design news feed is a key concept in System Design."
      },
      {
        "question": "Level 9 · What dependency does have design parking lot in System Design?",
        "options": [
          "design parking lot",
          "design YouTube",
          "design Twitter",
          "design URL shortener"
        ],
        "answer": "design parking lot",
        "explanation": "design parking lot is a key concept in System Design."
      },
      {
        "question": "Level 9 · How do you migrate from design ride-sharing in System Design?",
        "options": [
          "design ride-sharing",
          "design YouTube",
          "design Twitter",
          "design URL shortener"
        ],
        "answer": "design ride-sharing",
        "explanation": "design ride-sharing is a key concept in System Design."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of estimation in System Design?",
        "options": [
          "estimation",
          "QPS calculation",
          "storage estimation",
          "cache size"
        ],
        "answer": "estimation",
        "explanation": "estimation is a key concept in System Design."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of QPS calculation in System Design?",
        "options": [
          "QPS calculation",
          "estimation",
          "storage estimation",
          "cache size"
        ],
        "answer": "QPS calculation",
        "explanation": "QPS calculation is a key concept in System Design."
      },
      {
        "question": "Level 10 · How does evolve across scales storage estimation in System Design?",
        "options": [
          "storage estimation",
          "estimation",
          "QPS calculation",
          "cache size"
        ],
        "answer": "storage estimation",
        "explanation": "storage estimation is a key concept in System Design."
      },
      {
        "question": "Level 10 · What is the future direction of cache size in System Design?",
        "options": [
          "cache size",
          "estimation",
          "QPS calculation",
          "storage estimation"
        ],
        "answer": "cache size",
        "explanation": "cache size is a key concept in System Design."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves bandwidth in System Design?",
        "options": [
          "bandwidth",
          "estimation",
          "QPS calculation",
          "storage estimation"
        ],
        "answer": "bandwidth",
        "explanation": "bandwidth is a key concept in System Design."
      },
      {
        "question": "Level 10 · What is the theoretical basis of server count in System Design?",
        "options": [
          "server count",
          "estimation",
          "QPS calculation",
          "storage estimation"
        ],
        "answer": "server count",
        "explanation": "server count is a key concept in System Design."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of data center in System Design?",
        "options": [
          "data center",
          "estimation",
          "QPS calculation",
          "storage estimation"
        ],
        "answer": "data center",
        "explanation": "data center is a key concept in System Design."
      },
      {
        "question": "Level 10 · How does evolve across scales SLA in System Design?",
        "options": [
          "SLA",
          "estimation",
          "QPS calculation",
          "storage estimation"
        ],
        "answer": "SLA",
        "explanation": "SLA is a key concept in System Design."
      },
      {
        "question": "Level 10 · What is the future direction of SLO in System Design?",
        "options": [
          "SLO",
          "estimation",
          "QPS calculation",
          "storage estimation"
        ],
        "answer": "SLO",
        "explanation": "SLO is a key concept in System Design."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves cost optimization in System Design?",
        "options": [
          "cost optimization",
          "estimation",
          "QPS calculation",
          "storage estimation"
        ],
        "answer": "cost optimization",
        "explanation": "cost optimization is a key concept in System Design."
      }
    ]
  },
  "Cloud": {
    "Level 1": [
      {
        "question": "Level 1 · What is AWS in Cloud?",
        "options": [
          "AWS",
          "EC2",
          "S3",
          "Lambda"
        ],
        "answer": "AWS",
        "explanation": "AWS is a key concept in Cloud."
      },
      {
        "question": "Level 1 · How would you define EC2 in Cloud?",
        "options": [
          "EC2",
          "AWS",
          "S3",
          "Lambda"
        ],
        "answer": "EC2",
        "explanation": "EC2 is a key concept in Cloud."
      },
      {
        "question": "Level 1 · Which describes S3 in Cloud?",
        "options": [
          "S3",
          "AWS",
          "EC2",
          "Lambda"
        ],
        "answer": "S3",
        "explanation": "S3 is a key concept in Cloud."
      },
      {
        "question": "Level 1 · What does the term Lambda in Cloud?",
        "options": [
          "Lambda",
          "AWS",
          "EC2",
          "S3"
        ],
        "answer": "Lambda",
        "explanation": "Lambda is a key concept in Cloud."
      },
      {
        "question": "Level 1 · What concept is VPC in Cloud?",
        "options": [
          "VPC",
          "AWS",
          "EC2",
          "S3"
        ],
        "answer": "VPC",
        "explanation": "VPC is a key concept in Cloud."
      },
      {
        "question": "Level 1 · What is IAM in Cloud?",
        "options": [
          "IAM",
          "AWS",
          "EC2",
          "S3"
        ],
        "answer": "IAM",
        "explanation": "IAM is a key concept in Cloud."
      },
      {
        "question": "Level 1 · How would you define RDS in Cloud?",
        "options": [
          "RDS",
          "AWS",
          "EC2",
          "S3"
        ],
        "answer": "RDS",
        "explanation": "RDS is a key concept in Cloud."
      },
      {
        "question": "Level 1 · Which describes DynamoDB in Cloud?",
        "options": [
          "DynamoDB",
          "AWS",
          "EC2",
          "S3"
        ],
        "answer": "DynamoDB",
        "explanation": "DynamoDB is a key concept in Cloud."
      },
      {
        "question": "Level 1 · What does the term CloudFront in Cloud?",
        "options": [
          "CloudFront",
          "AWS",
          "EC2",
          "S3"
        ],
        "answer": "CloudFront",
        "explanation": "CloudFront is a key concept in Cloud."
      },
      {
        "question": "Level 1 · What concept is Route 53 in Cloud?",
        "options": [
          "Route 53",
          "AWS",
          "EC2",
          "S3"
        ],
        "answer": "Route 53",
        "explanation": "Route 53 is a key concept in Cloud."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you Azure in Cloud?",
        "options": [
          "Azure",
          "Virtual Machines",
          "Blob Storage",
          "Azure Functions"
        ],
        "answer": "Azure",
        "explanation": "Azure is a key concept in Cloud."
      },
      {
        "question": "Level 2 · What is the purpose of Virtual Machines in Cloud?",
        "options": [
          "Virtual Machines",
          "Azure",
          "Blob Storage",
          "Azure Functions"
        ],
        "answer": "Virtual Machines",
        "explanation": "Virtual Machines is a key concept in Cloud."
      },
      {
        "question": "Level 2 · Which tool is used to Blob Storage in Cloud?",
        "options": [
          "Blob Storage",
          "Azure",
          "Virtual Machines",
          "Azure Functions"
        ],
        "answer": "Blob Storage",
        "explanation": "Blob Storage is a key concept in Cloud."
      },
      {
        "question": "Level 2 · What does Azure Functions in Cloud?",
        "options": [
          "Azure Functions",
          "Azure",
          "Virtual Machines",
          "Blob Storage"
        ],
        "answer": "Azure Functions",
        "explanation": "Azure Functions is a key concept in Cloud."
      },
      {
        "question": "Level 2 · How can you App Service in Cloud?",
        "options": [
          "App Service",
          "Azure",
          "Virtual Machines",
          "Blob Storage"
        ],
        "answer": "App Service",
        "explanation": "App Service is a key concept in Cloud."
      },
      {
        "question": "Level 2 · How do you Azure DevOps in Cloud?",
        "options": [
          "Azure DevOps",
          "Azure",
          "Virtual Machines",
          "Blob Storage"
        ],
        "answer": "Azure DevOps",
        "explanation": "Azure DevOps is a key concept in Cloud."
      },
      {
        "question": "Level 2 · What is the purpose of Active Directory in Cloud?",
        "options": [
          "Active Directory",
          "Azure",
          "Virtual Machines",
          "Blob Storage"
        ],
        "answer": "Active Directory",
        "explanation": "Active Directory is a key concept in Cloud."
      },
      {
        "question": "Level 2 · Which tool is used to SQL Database in Cloud?",
        "options": [
          "SQL Database",
          "Azure",
          "Virtual Machines",
          "Blob Storage"
        ],
        "answer": "SQL Database",
        "explanation": "SQL Database is a key concept in Cloud."
      },
      {
        "question": "Level 2 · What does Cosmos DB in Cloud?",
        "options": [
          "Cosmos DB",
          "Azure",
          "Virtual Machines",
          "Blob Storage"
        ],
        "answer": "Cosmos DB",
        "explanation": "Cosmos DB is a key concept in Cloud."
      },
      {
        "question": "Level 2 · How can you Azure Kubernetes in Cloud?",
        "options": [
          "Azure Kubernetes",
          "Azure",
          "Virtual Machines",
          "Blob Storage"
        ],
        "answer": "Azure Kubernetes",
        "explanation": "Azure Kubernetes is a key concept in Cloud."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between GCP in Cloud?",
        "options": [
          "GCP",
          "Compute Engine",
          "Cloud Storage",
          "Cloud Functions"
        ],
        "answer": "GCP",
        "explanation": "GCP is a key concept in Cloud."
      },
      {
        "question": "Level 3 · How does Compute Engine in Cloud?",
        "options": [
          "Compute Engine",
          "GCP",
          "Cloud Storage",
          "Cloud Functions"
        ],
        "answer": "Compute Engine",
        "explanation": "Compute Engine is a key concept in Cloud."
      },
      {
        "question": "Level 3 · What problem does Cloud Storage in Cloud?",
        "options": [
          "Cloud Storage",
          "GCP",
          "Compute Engine",
          "Cloud Functions"
        ],
        "answer": "Cloud Storage",
        "explanation": "Cloud Storage is a key concept in Cloud."
      },
      {
        "question": "Level 3 · Which approach Cloud Functions in Cloud?",
        "options": [
          "Cloud Functions",
          "GCP",
          "Compute Engine",
          "Cloud Storage"
        ],
        "answer": "Cloud Functions",
        "explanation": "Cloud Functions is a key concept in Cloud."
      },
      {
        "question": "Level 3 · What is the role of App Engine in Cloud?",
        "options": [
          "App Engine",
          "GCP",
          "Compute Engine",
          "Cloud Storage"
        ],
        "answer": "App Engine",
        "explanation": "App Engine is a key concept in Cloud."
      },
      {
        "question": "Level 3 · What is the difference between BigQuery in Cloud?",
        "options": [
          "BigQuery",
          "GCP",
          "Compute Engine",
          "Cloud Storage"
        ],
        "answer": "BigQuery",
        "explanation": "BigQuery is a key concept in Cloud."
      },
      {
        "question": "Level 3 · How does Cloud SQL in Cloud?",
        "options": [
          "Cloud SQL",
          "GCP",
          "Compute Engine",
          "Cloud Storage"
        ],
        "answer": "Cloud SQL",
        "explanation": "Cloud SQL is a key concept in Cloud."
      },
      {
        "question": "Level 3 · What problem does Cloud Run in Cloud?",
        "options": [
          "Cloud Run",
          "GCP",
          "Compute Engine",
          "Cloud Storage"
        ],
        "answer": "Cloud Run",
        "explanation": "Cloud Run is a key concept in Cloud."
      },
      {
        "question": "Level 3 · Which approach GKE in Cloud?",
        "options": [
          "GKE",
          "GCP",
          "Compute Engine",
          "Cloud Storage"
        ],
        "answer": "GKE",
        "explanation": "GKE is a key concept in Cloud."
      },
      {
        "question": "Level 3 · What is the role of Cloud CDN in Cloud?",
        "options": [
          "Cloud CDN",
          "GCP",
          "Compute Engine",
          "Cloud Storage"
        ],
        "answer": "Cloud CDN",
        "explanation": "Cloud CDN is a key concept in Cloud."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use IaaS in Cloud?",
        "options": [
          "IaaS",
          "PaaS",
          "SaaS",
          "FaaS"
        ],
        "answer": "IaaS",
        "explanation": "IaaS is a key concept in Cloud."
      },
      {
        "question": "Level 4 · What is a real-world example of PaaS in Cloud?",
        "options": [
          "PaaS",
          "IaaS",
          "SaaS",
          "FaaS"
        ],
        "answer": "PaaS",
        "explanation": "PaaS is a key concept in Cloud."
      },
      {
        "question": "Level 4 · How would you implement SaaS in Cloud?",
        "options": [
          "SaaS",
          "IaaS",
          "PaaS",
          "FaaS"
        ],
        "answer": "SaaS",
        "explanation": "SaaS is a key concept in Cloud."
      },
      {
        "question": "Level 4 · What pattern applies FaaS in Cloud?",
        "options": [
          "FaaS",
          "IaaS",
          "PaaS",
          "SaaS"
        ],
        "answer": "FaaS",
        "explanation": "FaaS is a key concept in Cloud."
      },
      {
        "question": "Level 4 · What strategy handles public cloud in Cloud?",
        "options": [
          "public cloud",
          "IaaS",
          "PaaS",
          "SaaS"
        ],
        "answer": "public cloud",
        "explanation": "public cloud is a key concept in Cloud."
      },
      {
        "question": "Level 4 · When would you use private cloud in Cloud?",
        "options": [
          "private cloud",
          "IaaS",
          "PaaS",
          "SaaS"
        ],
        "answer": "private cloud",
        "explanation": "private cloud is a key concept in Cloud."
      },
      {
        "question": "Level 4 · What is a real-world example of hybrid cloud in Cloud?",
        "options": [
          "hybrid cloud",
          "IaaS",
          "PaaS",
          "SaaS"
        ],
        "answer": "hybrid cloud",
        "explanation": "hybrid cloud is a key concept in Cloud."
      },
      {
        "question": "Level 4 · How would you implement multi-cloud in Cloud?",
        "options": [
          "multi-cloud",
          "IaaS",
          "PaaS",
          "SaaS"
        ],
        "answer": "multi-cloud",
        "explanation": "multi-cloud is a key concept in Cloud."
      },
      {
        "question": "Level 4 · What pattern applies cloud migration in Cloud?",
        "options": [
          "cloud migration",
          "IaaS",
          "PaaS",
          "SaaS"
        ],
        "answer": "cloud migration",
        "explanation": "cloud migration is a key concept in Cloud."
      },
      {
        "question": "Level 4 · What strategy handles lift and shift in Cloud?",
        "options": [
          "lift and shift",
          "IaaS",
          "PaaS",
          "SaaS"
        ],
        "answer": "lift and shift",
        "explanation": "lift and shift is a key concept in Cloud."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize serverless in Cloud?",
        "options": [
          "serverless",
          "event-driven",
          "cold start",
          "provisioned concurrency"
        ],
        "answer": "serverless",
        "explanation": "serverless is a key concept in Cloud."
      },
      {
        "question": "Level 5 · What is the best practice for event-driven in Cloud?",
        "options": [
          "event-driven",
          "serverless",
          "cold start",
          "provisioned concurrency"
        ],
        "answer": "event-driven",
        "explanation": "event-driven is a key concept in Cloud."
      },
      {
        "question": "Level 5 · What performance consideration involves cold start in Cloud?",
        "options": [
          "cold start",
          "serverless",
          "event-driven",
          "provisioned concurrency"
        ],
        "answer": "cold start",
        "explanation": "cold start is a key concept in Cloud."
      },
      {
        "question": "Level 5 · How do you scale provisioned concurrency in Cloud?",
        "options": [
          "provisioned concurrency",
          "serverless",
          "event-driven",
          "cold start"
        ],
        "answer": "provisioned concurrency",
        "explanation": "provisioned concurrency is a key concept in Cloud."
      },
      {
        "question": "Level 5 · What tradeoff exists when using function as a service in Cloud?",
        "options": [
          "function as a service",
          "serverless",
          "event-driven",
          "cold start"
        ],
        "answer": "function as a service",
        "explanation": "function as a service is a key concept in Cloud."
      },
      {
        "question": "Level 5 · How do you optimize API Gateway in Cloud?",
        "options": [
          "API Gateway",
          "serverless",
          "event-driven",
          "cold start"
        ],
        "answer": "API Gateway",
        "explanation": "API Gateway is a key concept in Cloud."
      },
      {
        "question": "Level 5 · What is the best practice for step functions in Cloud?",
        "options": [
          "step functions",
          "serverless",
          "event-driven",
          "cold start"
        ],
        "answer": "step functions",
        "explanation": "step functions is a key concept in Cloud."
      },
      {
        "question": "Level 5 · What performance consideration involves SQS in Cloud?",
        "options": [
          "SQS",
          "serverless",
          "event-driven",
          "cold start"
        ],
        "answer": "SQS",
        "explanation": "SQS is a key concept in Cloud."
      },
      {
        "question": "Level 5 · How do you scale SNS in Cloud?",
        "options": [
          "SNS",
          "serverless",
          "event-driven",
          "cold start"
        ],
        "answer": "SNS",
        "explanation": "SNS is a key concept in Cloud."
      },
      {
        "question": "Level 5 · What tradeoff exists when using event bridge in Cloud?",
        "options": [
          "event bridge",
          "serverless",
          "event-driven",
          "cold start"
        ],
        "answer": "event bridge",
        "explanation": "event bridge is a key concept in Cloud."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare container orchestration in Cloud?",
        "options": [
          "container orchestration",
          "Kubernetes",
          "ECS",
          "Fargate"
        ],
        "answer": "container orchestration",
        "explanation": "container orchestration is a key concept in Cloud."
      },
      {
        "question": "Level 6 · How is it different from Kubernetes in Cloud?",
        "options": [
          "Kubernetes",
          "container orchestration",
          "ECS",
          "Fargate"
        ],
        "answer": "Kubernetes",
        "explanation": "Kubernetes is a key concept in Cloud."
      },
      {
        "question": "Level 6 · What are the pros and cons of ECS in Cloud?",
        "options": [
          "ECS",
          "container orchestration",
          "Kubernetes",
          "Fargate"
        ],
        "answer": "ECS",
        "explanation": "ECS is a key concept in Cloud."
      },
      {
        "question": "Level 6 · What advantage does Fargate in Cloud?",
        "options": [
          "Fargate",
          "container orchestration",
          "Kubernetes",
          "ECS"
        ],
        "answer": "Fargate",
        "explanation": "Fargate is a key concept in Cloud."
      },
      {
        "question": "Level 6 · What limitation does EKS in Cloud?",
        "options": [
          "EKS",
          "container orchestration",
          "Kubernetes",
          "ECS"
        ],
        "answer": "EKS",
        "explanation": "EKS is a key concept in Cloud."
      },
      {
        "question": "Level 6 · Compare AKS in Cloud?",
        "options": [
          "AKS",
          "container orchestration",
          "Kubernetes",
          "ECS"
        ],
        "answer": "AKS",
        "explanation": "AKS is a key concept in Cloud."
      },
      {
        "question": "Level 6 · How is it different from GKE in Cloud?",
        "options": [
          "GKE",
          "container orchestration",
          "Kubernetes",
          "ECS"
        ],
        "answer": "GKE",
        "explanation": "GKE is a key concept in Cloud."
      },
      {
        "question": "Level 6 · What are the pros and cons of pod in Cloud?",
        "options": [
          "pod",
          "container orchestration",
          "Kubernetes",
          "ECS"
        ],
        "answer": "pod",
        "explanation": "pod is a key concept in Cloud."
      },
      {
        "question": "Level 6 · What advantage does cluster in Cloud?",
        "options": [
          "cluster",
          "container orchestration",
          "Kubernetes",
          "ECS"
        ],
        "answer": "cluster",
        "explanation": "cluster is a key concept in Cloud."
      },
      {
        "question": "Level 6 · What limitation does node group in Cloud?",
        "options": [
          "node group",
          "container orchestration",
          "Kubernetes",
          "ECS"
        ],
        "answer": "node group",
        "explanation": "node group is a key concept in Cloud."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with infrastructure as code in Cloud?",
        "options": [
          "infrastructure as code",
          "Terraform",
          "CloudFormation",
          "Pulumi"
        ],
        "answer": "infrastructure as code",
        "explanation": "infrastructure as code is a key concept in Cloud."
      },
      {
        "question": "Level 7 · What goes wrong when Terraform in Cloud?",
        "options": [
          "Terraform",
          "infrastructure as code",
          "CloudFormation",
          "Pulumi"
        ],
        "answer": "Terraform",
        "explanation": "Terraform is a key concept in Cloud."
      },
      {
        "question": "Level 7 · What common mistake involves CloudFormation in Cloud?",
        "options": [
          "CloudFormation",
          "infrastructure as code",
          "Terraform",
          "Pulumi"
        ],
        "answer": "CloudFormation",
        "explanation": "CloudFormation is a key concept in Cloud."
      },
      {
        "question": "Level 7 · How do you monitor Pulumi in Cloud?",
        "options": [
          "Pulumi",
          "infrastructure as code",
          "Terraform",
          "CloudFormation"
        ],
        "answer": "Pulumi",
        "explanation": "Pulumi is a key concept in Cloud."
      },
      {
        "question": "Level 7 · What failure mode occurs with CDK in Cloud?",
        "options": [
          "CDK",
          "infrastructure as code",
          "Terraform",
          "CloudFormation"
        ],
        "answer": "CDK",
        "explanation": "CDK is a key concept in Cloud."
      },
      {
        "question": "Level 7 · How do you debug issues with state management in Cloud?",
        "options": [
          "state management",
          "infrastructure as code",
          "Terraform",
          "CloudFormation"
        ],
        "answer": "state management",
        "explanation": "state management is a key concept in Cloud."
      },
      {
        "question": "Level 7 · What goes wrong when provisioner in Cloud?",
        "options": [
          "provisioner",
          "infrastructure as code",
          "Terraform",
          "CloudFormation"
        ],
        "answer": "provisioner",
        "explanation": "provisioner is a key concept in Cloud."
      },
      {
        "question": "Level 7 · What common mistake involves module in Cloud?",
        "options": [
          "module",
          "infrastructure as code",
          "Terraform",
          "CloudFormation"
        ],
        "answer": "module",
        "explanation": "module is a key concept in Cloud."
      },
      {
        "question": "Level 7 · How do you monitor remote state in Cloud?",
        "options": [
          "remote state",
          "infrastructure as code",
          "Terraform",
          "CloudFormation"
        ],
        "answer": "remote state",
        "explanation": "remote state is a key concept in Cloud."
      },
      {
        "question": "Level 7 · What failure mode occurs with drift detection in Cloud?",
        "options": [
          "drift detection",
          "infrastructure as code",
          "Terraform",
          "CloudFormation"
        ],
        "answer": "drift detection",
        "explanation": "drift detection is a key concept in Cloud."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves cloud security in Cloud?",
        "options": [
          "cloud security",
          "shared responsibility model",
          "security group",
          "NACL"
        ],
        "answer": "cloud security",
        "explanation": "cloud security is a key concept in Cloud."
      },
      {
        "question": "Level 8 · How do you secure shared responsibility model in Cloud?",
        "options": [
          "shared responsibility model",
          "cloud security",
          "security group",
          "NACL"
        ],
        "answer": "shared responsibility model",
        "explanation": "shared responsibility model is a key concept in Cloud."
      },
      {
        "question": "Level 8 · What testing strategy covers security group in Cloud?",
        "options": [
          "security group",
          "cloud security",
          "shared responsibility model",
          "NACL"
        ],
        "answer": "security group",
        "explanation": "security group is a key concept in Cloud."
      },
      {
        "question": "Level 8 · How do you ensure reliability of NACL in Cloud?",
        "options": [
          "NACL",
          "cloud security",
          "shared responsibility model",
          "security group"
        ],
        "answer": "NACL",
        "explanation": "NACL is a key concept in Cloud."
      },
      {
        "question": "Level 8 · What error handling applies to KMS in Cloud?",
        "options": [
          "KMS",
          "cloud security",
          "shared responsibility model",
          "security group"
        ],
        "answer": "KMS",
        "explanation": "KMS is a key concept in Cloud."
      },
      {
        "question": "Level 8 · What security concern involves cloud trail in Cloud?",
        "options": [
          "cloud trail",
          "cloud security",
          "shared responsibility model",
          "security group"
        ],
        "answer": "cloud trail",
        "explanation": "cloud trail is a key concept in Cloud."
      },
      {
        "question": "Level 8 · How do you secure guard duty in Cloud?",
        "options": [
          "guard duty",
          "cloud security",
          "shared responsibility model",
          "security group"
        ],
        "answer": "guard duty",
        "explanation": "guard duty is a key concept in Cloud."
      },
      {
        "question": "Level 8 · What testing strategy covers WAF in Cloud?",
        "options": [
          "WAF",
          "cloud security",
          "shared responsibility model",
          "security group"
        ],
        "answer": "WAF",
        "explanation": "WAF is a key concept in Cloud."
      },
      {
        "question": "Level 8 · How do you ensure reliability of encryption at rest in Cloud?",
        "options": [
          "encryption at rest",
          "cloud security",
          "shared responsibility model",
          "security group"
        ],
        "answer": "encryption at rest",
        "explanation": "encryption at rest is a key concept in Cloud."
      },
      {
        "question": "Level 8 · What error handling applies to encryption in transit in Cloud?",
        "options": [
          "encryption in transit",
          "cloud security",
          "shared responsibility model",
          "security group"
        ],
        "answer": "encryption in transit",
        "explanation": "encryption in transit is a key concept in Cloud."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with auto scaling in Cloud?",
        "options": [
          "auto scaling",
          "horizontal scaling",
          "vertical scaling",
          "launch template"
        ],
        "answer": "auto scaling",
        "explanation": "auto scaling is a key concept in Cloud."
      },
      {
        "question": "Level 9 · What architectural pattern uses horizontal scaling in Cloud?",
        "options": [
          "horizontal scaling",
          "auto scaling",
          "vertical scaling",
          "launch template"
        ],
        "answer": "horizontal scaling",
        "explanation": "horizontal scaling is a key concept in Cloud."
      },
      {
        "question": "Level 9 · How would you design a system with vertical scaling in Cloud?",
        "options": [
          "vertical scaling",
          "auto scaling",
          "horizontal scaling",
          "launch template"
        ],
        "answer": "vertical scaling",
        "explanation": "vertical scaling is a key concept in Cloud."
      },
      {
        "question": "Level 9 · What dependency does have launch template in Cloud?",
        "options": [
          "launch template",
          "auto scaling",
          "horizontal scaling",
          "vertical scaling"
        ],
        "answer": "launch template",
        "explanation": "launch template is a key concept in Cloud."
      },
      {
        "question": "Level 9 · How do you migrate from scaling policy in Cloud?",
        "options": [
          "scaling policy",
          "auto scaling",
          "horizontal scaling",
          "vertical scaling"
        ],
        "answer": "scaling policy",
        "explanation": "scaling policy is a key concept in Cloud."
      },
      {
        "question": "Level 9 · How does integrate with target tracking in Cloud?",
        "options": [
          "target tracking",
          "auto scaling",
          "horizontal scaling",
          "vertical scaling"
        ],
        "answer": "target tracking",
        "explanation": "target tracking is a key concept in Cloud."
      },
      {
        "question": "Level 9 · What architectural pattern uses scheduled scaling in Cloud?",
        "options": [
          "scheduled scaling",
          "auto scaling",
          "horizontal scaling",
          "vertical scaling"
        ],
        "answer": "scheduled scaling",
        "explanation": "scheduled scaling is a key concept in Cloud."
      },
      {
        "question": "Level 9 · How would you design a system with spot instance in Cloud?",
        "options": [
          "spot instance",
          "auto scaling",
          "horizontal scaling",
          "vertical scaling"
        ],
        "answer": "spot instance",
        "explanation": "spot instance is a key concept in Cloud."
      },
      {
        "question": "Level 9 · What dependency does have reserved instance in Cloud?",
        "options": [
          "reserved instance",
          "auto scaling",
          "horizontal scaling",
          "vertical scaling"
        ],
        "answer": "reserved instance",
        "explanation": "reserved instance is a key concept in Cloud."
      },
      {
        "question": "Level 9 · How do you migrate from savings plan in Cloud?",
        "options": [
          "savings plan",
          "auto scaling",
          "horizontal scaling",
          "vertical scaling"
        ],
        "answer": "savings plan",
        "explanation": "savings plan is a key concept in Cloud."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of cloud cost optimization in Cloud?",
        "options": [
          "cloud cost optimization",
          "rightsizing",
          "reserved capacity",
          "spot instances"
        ],
        "answer": "cloud cost optimization",
        "explanation": "cloud cost optimization is a key concept in Cloud."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of rightsizing in Cloud?",
        "options": [
          "rightsizing",
          "cloud cost optimization",
          "reserved capacity",
          "spot instances"
        ],
        "answer": "rightsizing",
        "explanation": "rightsizing is a key concept in Cloud."
      },
      {
        "question": "Level 10 · How does evolve across scales reserved capacity in Cloud?",
        "options": [
          "reserved capacity",
          "cloud cost optimization",
          "rightsizing",
          "spot instances"
        ],
        "answer": "reserved capacity",
        "explanation": "reserved capacity is a key concept in Cloud."
      },
      {
        "question": "Level 10 · What is the future direction of spot instances in Cloud?",
        "options": [
          "spot instances",
          "cloud cost optimization",
          "rightsizing",
          "reserved capacity"
        ],
        "answer": "spot instances",
        "explanation": "spot instances is a key concept in Cloud."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves cost explorer in Cloud?",
        "options": [
          "cost explorer",
          "cloud cost optimization",
          "rightsizing",
          "reserved capacity"
        ],
        "answer": "cost explorer",
        "explanation": "cost explorer is a key concept in Cloud."
      },
      {
        "question": "Level 10 · What is the theoretical basis of budget in Cloud?",
        "options": [
          "budget",
          "cloud cost optimization",
          "rightsizing",
          "reserved capacity"
        ],
        "answer": "budget",
        "explanation": "budget is a key concept in Cloud."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of tagging in Cloud?",
        "options": [
          "tagging",
          "cloud cost optimization",
          "rightsizing",
          "reserved capacity"
        ],
        "answer": "tagging",
        "explanation": "tagging is a key concept in Cloud."
      },
      {
        "question": "Level 10 · How does evolve across scales resource groups in Cloud?",
        "options": [
          "resource groups",
          "cloud cost optimization",
          "rightsizing",
          "reserved capacity"
        ],
        "answer": "resource groups",
        "explanation": "resource groups is a key concept in Cloud."
      },
      {
        "question": "Level 10 · What is the future direction of savings plans in Cloud?",
        "options": [
          "savings plans",
          "cloud cost optimization",
          "rightsizing",
          "reserved capacity"
        ],
        "answer": "savings plans",
        "explanation": "savings plans is a key concept in Cloud."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves commitment discounts in Cloud?",
        "options": [
          "commitment discounts",
          "cloud cost optimization",
          "rightsizing",
          "reserved capacity"
        ],
        "answer": "commitment discounts",
        "explanation": "commitment discounts is a key concept in Cloud."
      }
    ]
  },
  "Testing": {
    "Level 1": [
      {
        "question": "Level 1 · What is unit testing in Testing?",
        "options": [
          "unit testing",
          "test case",
          "assertion",
          "test runner"
        ],
        "answer": "unit testing",
        "explanation": "unit testing is a key concept in Testing."
      },
      {
        "question": "Level 1 · How would you define test case in Testing?",
        "options": [
          "test case",
          "unit testing",
          "assertion",
          "test runner"
        ],
        "answer": "test case",
        "explanation": "test case is a key concept in Testing."
      },
      {
        "question": "Level 1 · Which describes assertion in Testing?",
        "options": [
          "assertion",
          "unit testing",
          "test case",
          "test runner"
        ],
        "answer": "assertion",
        "explanation": "assertion is a key concept in Testing."
      },
      {
        "question": "Level 1 · What does the term test runner in Testing?",
        "options": [
          "test runner",
          "unit testing",
          "test case",
          "assertion"
        ],
        "answer": "test runner",
        "explanation": "test runner is a key concept in Testing."
      },
      {
        "question": "Level 1 · What concept is mocking in Testing?",
        "options": [
          "mocking",
          "unit testing",
          "test case",
          "assertion"
        ],
        "answer": "mocking",
        "explanation": "mocking is a key concept in Testing."
      },
      {
        "question": "Level 1 · What is stub in Testing?",
        "options": [
          "stub",
          "unit testing",
          "test case",
          "assertion"
        ],
        "answer": "stub",
        "explanation": "stub is a key concept in Testing."
      },
      {
        "question": "Level 1 · How would you define spy in Testing?",
        "options": [
          "spy",
          "unit testing",
          "test case",
          "assertion"
        ],
        "answer": "spy",
        "explanation": "spy is a key concept in Testing."
      },
      {
        "question": "Level 1 · Which describes fixture in Testing?",
        "options": [
          "fixture",
          "unit testing",
          "test case",
          "assertion"
        ],
        "answer": "fixture",
        "explanation": "fixture is a key concept in Testing."
      },
      {
        "question": "Level 1 · What does the term coverage in Testing?",
        "options": [
          "coverage",
          "unit testing",
          "test case",
          "assertion"
        ],
        "answer": "coverage",
        "explanation": "coverage is a key concept in Testing."
      },
      {
        "question": "Level 1 · What concept is test suite in Testing?",
        "options": [
          "test suite",
          "unit testing",
          "test case",
          "assertion"
        ],
        "answer": "test suite",
        "explanation": "test suite is a key concept in Testing."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you integration testing in Testing?",
        "options": [
          "integration testing",
          "API testing",
          "database testing",
          "service testing"
        ],
        "answer": "integration testing",
        "explanation": "integration testing is a key concept in Testing."
      },
      {
        "question": "Level 2 · What is the purpose of API testing in Testing?",
        "options": [
          "API testing",
          "integration testing",
          "database testing",
          "service testing"
        ],
        "answer": "API testing",
        "explanation": "API testing is a key concept in Testing."
      },
      {
        "question": "Level 2 · Which tool is used to database testing in Testing?",
        "options": [
          "database testing",
          "integration testing",
          "API testing",
          "service testing"
        ],
        "answer": "database testing",
        "explanation": "database testing is a key concept in Testing."
      },
      {
        "question": "Level 2 · What does service testing in Testing?",
        "options": [
          "service testing",
          "integration testing",
          "API testing",
          "database testing"
        ],
        "answer": "service testing",
        "explanation": "service testing is a key concept in Testing."
      },
      {
        "question": "Level 2 · How can you contract testing in Testing?",
        "options": [
          "contract testing",
          "integration testing",
          "API testing",
          "database testing"
        ],
        "answer": "contract testing",
        "explanation": "contract testing is a key concept in Testing."
      },
      {
        "question": "Level 2 · How do you component testing in Testing?",
        "options": [
          "component testing",
          "integration testing",
          "API testing",
          "database testing"
        ],
        "answer": "component testing",
        "explanation": "component testing is a key concept in Testing."
      },
      {
        "question": "Level 2 · What is the purpose of integration test pattern in Testing?",
        "options": [
          "integration test pattern",
          "integration testing",
          "API testing",
          "database testing"
        ],
        "answer": "integration test pattern",
        "explanation": "integration test pattern is a key concept in Testing."
      },
      {
        "question": "Level 2 · Which tool is used to test doubles in Testing?",
        "options": [
          "test doubles",
          "integration testing",
          "API testing",
          "database testing"
        ],
        "answer": "test doubles",
        "explanation": "test doubles is a key concept in Testing."
      },
      {
        "question": "Level 2 · What does sandbox in Testing?",
        "options": [
          "sandbox",
          "integration testing",
          "API testing",
          "database testing"
        ],
        "answer": "sandbox",
        "explanation": "sandbox is a key concept in Testing."
      },
      {
        "question": "Level 2 · How can you end-to-end in Testing?",
        "options": [
          "end-to-end",
          "integration testing",
          "API testing",
          "database testing"
        ],
        "answer": "end-to-end",
        "explanation": "end-to-end is a key concept in Testing."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between Jest in Testing?",
        "options": [
          "Jest",
          "describe",
          "it",
          "expect"
        ],
        "answer": "Jest",
        "explanation": "Jest is a key concept in Testing."
      },
      {
        "question": "Level 3 · How does describe in Testing?",
        "options": [
          "describe",
          "Jest",
          "it",
          "expect"
        ],
        "answer": "describe",
        "explanation": "describe is a key concept in Testing."
      },
      {
        "question": "Level 3 · What problem does it in Testing?",
        "options": [
          "it",
          "Jest",
          "describe",
          "expect"
        ],
        "answer": "it",
        "explanation": "it is a key concept in Testing."
      },
      {
        "question": "Level 3 · Which approach expect in Testing?",
        "options": [
          "expect",
          "Jest",
          "describe",
          "it"
        ],
        "answer": "expect",
        "explanation": "expect is a key concept in Testing."
      },
      {
        "question": "Level 3 · What is the role of beforeEach in Testing?",
        "options": [
          "beforeEach",
          "Jest",
          "describe",
          "it"
        ],
        "answer": "beforeEach",
        "explanation": "beforeEach is a key concept in Testing."
      },
      {
        "question": "Level 3 · What is the difference between afterEach in Testing?",
        "options": [
          "afterEach",
          "Jest",
          "describe",
          "it"
        ],
        "answer": "afterEach",
        "explanation": "afterEach is a key concept in Testing."
      },
      {
        "question": "Level 3 · How does mock function in Testing?",
        "options": [
          "mock function",
          "Jest",
          "describe",
          "it"
        ],
        "answer": "mock function",
        "explanation": "mock function is a key concept in Testing."
      },
      {
        "question": "Level 3 · What problem does jest.fn in Testing?",
        "options": [
          "jest.fn",
          "Jest",
          "describe",
          "it"
        ],
        "answer": "jest.fn",
        "explanation": "jest.fn is a key concept in Testing."
      },
      {
        "question": "Level 3 · Which approach snapshot testing in Testing?",
        "options": [
          "snapshot testing",
          "Jest",
          "describe",
          "it"
        ],
        "answer": "snapshot testing",
        "explanation": "snapshot testing is a key concept in Testing."
      },
      {
        "question": "Level 3 · What is the role of coverage report in Testing?",
        "options": [
          "coverage report",
          "Jest",
          "describe",
          "it"
        ],
        "answer": "coverage report",
        "explanation": "coverage report is a key concept in Testing."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use React Testing Library in Testing?",
        "options": [
          "React Testing Library",
          "render",
          "screen",
          "fireEvent"
        ],
        "answer": "React Testing Library",
        "explanation": "React Testing Library is a key concept in Testing."
      },
      {
        "question": "Level 4 · What is a real-world example of render in Testing?",
        "options": [
          "render",
          "React Testing Library",
          "screen",
          "fireEvent"
        ],
        "answer": "render",
        "explanation": "render is a key concept in Testing."
      },
      {
        "question": "Level 4 · How would you implement screen in Testing?",
        "options": [
          "screen",
          "React Testing Library",
          "render",
          "fireEvent"
        ],
        "answer": "screen",
        "explanation": "screen is a key concept in Testing."
      },
      {
        "question": "Level 4 · What pattern applies fireEvent in Testing?",
        "options": [
          "fireEvent",
          "React Testing Library",
          "render",
          "screen"
        ],
        "answer": "fireEvent",
        "explanation": "fireEvent is a key concept in Testing."
      },
      {
        "question": "Level 4 · What strategy handles userEvent in Testing?",
        "options": [
          "userEvent",
          "React Testing Library",
          "render",
          "screen"
        ],
        "answer": "userEvent",
        "explanation": "userEvent is a key concept in Testing."
      },
      {
        "question": "Level 4 · When would you use waitFor in Testing?",
        "options": [
          "waitFor",
          "React Testing Library",
          "render",
          "screen"
        ],
        "answer": "waitFor",
        "explanation": "waitFor is a key concept in Testing."
      },
      {
        "question": "Level 4 · What is a real-world example of getByText in Testing?",
        "options": [
          "getByText",
          "React Testing Library",
          "render",
          "screen"
        ],
        "answer": "getByText",
        "explanation": "getByText is a key concept in Testing."
      },
      {
        "question": "Level 4 · How would you implement getByRole in Testing?",
        "options": [
          "getByRole",
          "React Testing Library",
          "render",
          "screen"
        ],
        "answer": "getByRole",
        "explanation": "getByRole is a key concept in Testing."
      },
      {
        "question": "Level 4 · What pattern applies queryByText in Testing?",
        "options": [
          "queryByText",
          "React Testing Library",
          "render",
          "screen"
        ],
        "answer": "queryByText",
        "explanation": "queryByText is a key concept in Testing."
      },
      {
        "question": "Level 4 · What strategy handles act in Testing?",
        "options": [
          "act",
          "React Testing Library",
          "render",
          "screen"
        ],
        "answer": "act",
        "explanation": "act is a key concept in Testing."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize Cypress in Testing?",
        "options": [
          "Cypress",
          "cy.visit",
          "cy.get",
          "cy.click"
        ],
        "answer": "Cypress",
        "explanation": "Cypress is a key concept in Testing."
      },
      {
        "question": "Level 5 · What is the best practice for cy.visit in Testing?",
        "options": [
          "cy.visit",
          "Cypress",
          "cy.get",
          "cy.click"
        ],
        "answer": "cy.visit",
        "explanation": "cy.visit is a key concept in Testing."
      },
      {
        "question": "Level 5 · What performance consideration involves cy.get in Testing?",
        "options": [
          "cy.get",
          "Cypress",
          "cy.visit",
          "cy.click"
        ],
        "answer": "cy.get",
        "explanation": "cy.get is a key concept in Testing."
      },
      {
        "question": "Level 5 · How do you scale cy.click in Testing?",
        "options": [
          "cy.click",
          "Cypress",
          "cy.visit",
          "cy.get"
        ],
        "answer": "cy.click",
        "explanation": "cy.click is a key concept in Testing."
      },
      {
        "question": "Level 5 · What tradeoff exists when using cy.type in Testing?",
        "options": [
          "cy.type",
          "Cypress",
          "cy.visit",
          "cy.get"
        ],
        "answer": "cy.type",
        "explanation": "cy.type is a key concept in Testing."
      },
      {
        "question": "Level 5 · How do you optimize intercept in Testing?",
        "options": [
          "intercept",
          "Cypress",
          "cy.visit",
          "cy.get"
        ],
        "answer": "intercept",
        "explanation": "intercept is a key concept in Testing."
      },
      {
        "question": "Level 5 · What is the best practice for fixture in Testing?",
        "options": [
          "fixture",
          "Cypress",
          "cy.visit",
          "cy.get"
        ],
        "answer": "fixture",
        "explanation": "fixture is a key concept in Testing."
      },
      {
        "question": "Level 5 · What performance consideration involves custom command in Testing?",
        "options": [
          "custom command",
          "Cypress",
          "cy.visit",
          "cy.get"
        ],
        "answer": "custom command",
        "explanation": "custom command is a key concept in Testing."
      },
      {
        "question": "Level 5 · How do you scale viewport in Testing?",
        "options": [
          "viewport",
          "Cypress",
          "cy.visit",
          "cy.get"
        ],
        "answer": "viewport",
        "explanation": "viewport is a key concept in Testing."
      },
      {
        "question": "Level 5 · What tradeoff exists when using run vs open in Testing?",
        "options": [
          "run vs open",
          "Cypress",
          "cy.visit",
          "cy.get"
        ],
        "answer": "run vs open",
        "explanation": "run vs open is a key concept in Testing."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare TDD in Testing?",
        "options": [
          "TDD",
          "red-green-refactor",
          "test first",
          "baby steps"
        ],
        "answer": "TDD",
        "explanation": "TDD is a key concept in Testing."
      },
      {
        "question": "Level 6 · How is it different from red-green-refactor in Testing?",
        "options": [
          "red-green-refactor",
          "TDD",
          "test first",
          "baby steps"
        ],
        "answer": "red-green-refactor",
        "explanation": "red-green-refactor is a key concept in Testing."
      },
      {
        "question": "Level 6 · What are the pros and cons of test first in Testing?",
        "options": [
          "test first",
          "TDD",
          "red-green-refactor",
          "baby steps"
        ],
        "answer": "test first",
        "explanation": "test first is a key concept in Testing."
      },
      {
        "question": "Level 6 · What advantage does baby steps in Testing?",
        "options": [
          "baby steps",
          "TDD",
          "red-green-refactor",
          "test first"
        ],
        "answer": "baby steps",
        "explanation": "baby steps is a key concept in Testing."
      },
      {
        "question": "Level 6 · What limitation does refactor in Testing?",
        "options": [
          "refactor",
          "TDD",
          "red-green-refactor",
          "test first"
        ],
        "answer": "refactor",
        "explanation": "refactor is a key concept in Testing."
      },
      {
        "question": "Level 6 · Compare test-driven in Testing?",
        "options": [
          "test-driven",
          "TDD",
          "red-green-refactor",
          "test first"
        ],
        "answer": "test-driven",
        "explanation": "test-driven is a key concept in Testing."
      },
      {
        "question": "Level 6 · How is it different from behavior-driven in Testing?",
        "options": [
          "behavior-driven",
          "TDD",
          "red-green-refactor",
          "test first"
        ],
        "answer": "behavior-driven",
        "explanation": "behavior-driven is a key concept in Testing."
      },
      {
        "question": "Level 6 · What are the pros and cons of given-when-then in Testing?",
        "options": [
          "given-when-then",
          "TDD",
          "red-green-refactor",
          "test first"
        ],
        "answer": "given-when-then",
        "explanation": "given-when-then is a key concept in Testing."
      },
      {
        "question": "Level 6 · What advantage does outside-in in Testing?",
        "options": [
          "outside-in",
          "TDD",
          "red-green-refactor",
          "test first"
        ],
        "answer": "outside-in",
        "explanation": "outside-in is a key concept in Testing."
      },
      {
        "question": "Level 6 · What limitation does inside-out in Testing?",
        "options": [
          "inside-out",
          "TDD",
          "red-green-refactor",
          "test first"
        ],
        "answer": "inside-out",
        "explanation": "inside-out is a key concept in Testing."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with end-to-end testing in Testing?",
        "options": [
          "end-to-end testing",
          "Playwright",
          "Selenium",
          "Puppeteer"
        ],
        "answer": "end-to-end testing",
        "explanation": "end-to-end testing is a key concept in Testing."
      },
      {
        "question": "Level 7 · What goes wrong when Playwright in Testing?",
        "options": [
          "Playwright",
          "end-to-end testing",
          "Selenium",
          "Puppeteer"
        ],
        "answer": "Playwright",
        "explanation": "Playwright is a key concept in Testing."
      },
      {
        "question": "Level 7 · What common mistake involves Selenium in Testing?",
        "options": [
          "Selenium",
          "end-to-end testing",
          "Playwright",
          "Puppeteer"
        ],
        "answer": "Selenium",
        "explanation": "Selenium is a key concept in Testing."
      },
      {
        "question": "Level 7 · How do you monitor Puppeteer in Testing?",
        "options": [
          "Puppeteer",
          "end-to-end testing",
          "Playwright",
          "Selenium"
        ],
        "answer": "Puppeteer",
        "explanation": "Puppeteer is a key concept in Testing."
      },
      {
        "question": "Level 7 · What failure mode occurs with headless in Testing?",
        "options": [
          "headless",
          "end-to-end testing",
          "Playwright",
          "Selenium"
        ],
        "answer": "headless",
        "explanation": "headless is a key concept in Testing."
      },
      {
        "question": "Level 7 · How do you debug issues with browser automation in Testing?",
        "options": [
          "browser automation",
          "end-to-end testing",
          "Playwright",
          "Selenium"
        ],
        "answer": "browser automation",
        "explanation": "browser automation is a key concept in Testing."
      },
      {
        "question": "Level 7 · What goes wrong when page object model in Testing?",
        "options": [
          "page object model",
          "end-to-end testing",
          "Playwright",
          "Selenium"
        ],
        "answer": "page object model",
        "explanation": "page object model is a key concept in Testing."
      },
      {
        "question": "Level 7 · What common mistake involves cross-browser in Testing?",
        "options": [
          "cross-browser",
          "end-to-end testing",
          "Playwright",
          "Selenium"
        ],
        "answer": "cross-browser",
        "explanation": "cross-browser is a key concept in Testing."
      },
      {
        "question": "Level 7 · How do you monitor parallel execution in Testing?",
        "options": [
          "parallel execution",
          "end-to-end testing",
          "Playwright",
          "Selenium"
        ],
        "answer": "parallel execution",
        "explanation": "parallel execution is a key concept in Testing."
      },
      {
        "question": "Level 7 · What failure mode occurs with screenshot testing in Testing?",
        "options": [
          "screenshot testing",
          "end-to-end testing",
          "Playwright",
          "Selenium"
        ],
        "answer": "screenshot testing",
        "explanation": "screenshot testing is a key concept in Testing."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves performance testing in Testing?",
        "options": [
          "performance testing",
          "load testing",
          "stress testing",
          "spike testing"
        ],
        "answer": "performance testing",
        "explanation": "performance testing is a key concept in Testing."
      },
      {
        "question": "Level 8 · How do you secure load testing in Testing?",
        "options": [
          "load testing",
          "performance testing",
          "stress testing",
          "spike testing"
        ],
        "answer": "load testing",
        "explanation": "load testing is a key concept in Testing."
      },
      {
        "question": "Level 8 · What testing strategy covers stress testing in Testing?",
        "options": [
          "stress testing",
          "performance testing",
          "load testing",
          "spike testing"
        ],
        "answer": "stress testing",
        "explanation": "stress testing is a key concept in Testing."
      },
      {
        "question": "Level 8 · How do you ensure reliability of spike testing in Testing?",
        "options": [
          "spike testing",
          "performance testing",
          "load testing",
          "stress testing"
        ],
        "answer": "spike testing",
        "explanation": "spike testing is a key concept in Testing."
      },
      {
        "question": "Level 8 · What error handling applies to soak testing in Testing?",
        "options": [
          "soak testing",
          "performance testing",
          "load testing",
          "stress testing"
        ],
        "answer": "soak testing",
        "explanation": "soak testing is a key concept in Testing."
      },
      {
        "question": "Level 8 · What security concern involves JMeter in Testing?",
        "options": [
          "JMeter",
          "performance testing",
          "load testing",
          "stress testing"
        ],
        "answer": "JMeter",
        "explanation": "JMeter is a key concept in Testing."
      },
      {
        "question": "Level 8 · How do you secure k6 in Testing?",
        "options": [
          "k6",
          "performance testing",
          "load testing",
          "stress testing"
        ],
        "answer": "k6",
        "explanation": "k6 is a key concept in Testing."
      },
      {
        "question": "Level 8 · What testing strategy covers lighthouse in Testing?",
        "options": [
          "lighthouse",
          "performance testing",
          "load testing",
          "stress testing"
        ],
        "answer": "lighthouse",
        "explanation": "lighthouse is a key concept in Testing."
      },
      {
        "question": "Level 8 · How do you ensure reliability of web vitals in Testing?",
        "options": [
          "web vitals",
          "performance testing",
          "load testing",
          "stress testing"
        ],
        "answer": "web vitals",
        "explanation": "web vitals is a key concept in Testing."
      },
      {
        "question": "Level 8 · What error handling applies to profiling in Testing?",
        "options": [
          "profiling",
          "performance testing",
          "load testing",
          "stress testing"
        ],
        "answer": "profiling",
        "explanation": "profiling is a key concept in Testing."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with mock server in Testing?",
        "options": [
          "mock server",
          "API mocking",
          "MSW",
          "json-server"
        ],
        "answer": "mock server",
        "explanation": "mock server is a key concept in Testing."
      },
      {
        "question": "Level 9 · What architectural pattern uses API mocking in Testing?",
        "options": [
          "API mocking",
          "mock server",
          "MSW",
          "json-server"
        ],
        "answer": "API mocking",
        "explanation": "API mocking is a key concept in Testing."
      },
      {
        "question": "Level 9 · How would you design a system with MSW in Testing?",
        "options": [
          "MSW",
          "mock server",
          "API mocking",
          "json-server"
        ],
        "answer": "MSW",
        "explanation": "MSW is a key concept in Testing."
      },
      {
        "question": "Level 9 · What dependency does have json-server in Testing?",
        "options": [
          "json-server",
          "mock server",
          "API mocking",
          "MSW"
        ],
        "answer": "json-server",
        "explanation": "json-server is a key concept in Testing."
      },
      {
        "question": "Level 9 · How do you migrate from wiremock in Testing?",
        "options": [
          "wiremock",
          "mock server",
          "API mocking",
          "MSW"
        ],
        "answer": "wiremock",
        "explanation": "wiremock is a key concept in Testing."
      },
      {
        "question": "Level 9 · How does integrate with fake API in Testing?",
        "options": [
          "fake API",
          "mock server",
          "API mocking",
          "MSW"
        ],
        "answer": "fake API",
        "explanation": "fake API is a key concept in Testing."
      },
      {
        "question": "Level 9 · What architectural pattern uses stub response in Testing?",
        "options": [
          "stub response",
          "mock server",
          "API mocking",
          "MSW"
        ],
        "answer": "stub response",
        "explanation": "stub response is a key concept in Testing."
      },
      {
        "question": "Level 9 · How would you design a system with contract testing in Testing?",
        "options": [
          "contract testing",
          "mock server",
          "API mocking",
          "MSW"
        ],
        "answer": "contract testing",
        "explanation": "contract testing is a key concept in Testing."
      },
      {
        "question": "Level 9 · What dependency does have Pact in Testing?",
        "options": [
          "Pact",
          "mock server",
          "API mocking",
          "MSW"
        ],
        "answer": "Pact",
        "explanation": "Pact is a key concept in Testing."
      },
      {
        "question": "Level 9 · How do you migrate from consumer-driven contracts in Testing?",
        "options": [
          "consumer-driven contracts",
          "mock server",
          "API mocking",
          "MSW"
        ],
        "answer": "consumer-driven contracts",
        "explanation": "consumer-driven contracts is a key concept in Testing."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of CI/CD testing in Testing?",
        "options": [
          "CI/CD testing",
          "pipeline",
          "pre-commit",
          "build verification"
        ],
        "answer": "CI/CD testing",
        "explanation": "CI/CD testing is a key concept in Testing."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of pipeline in Testing?",
        "options": [
          "pipeline",
          "CI/CD testing",
          "pre-commit",
          "build verification"
        ],
        "answer": "pipeline",
        "explanation": "pipeline is a key concept in Testing."
      },
      {
        "question": "Level 10 · How does evolve across scales pre-commit in Testing?",
        "options": [
          "pre-commit",
          "CI/CD testing",
          "pipeline",
          "build verification"
        ],
        "answer": "pre-commit",
        "explanation": "pre-commit is a key concept in Testing."
      },
      {
        "question": "Level 10 · What is the future direction of build verification in Testing?",
        "options": [
          "build verification",
          "CI/CD testing",
          "pipeline",
          "pre-commit"
        ],
        "answer": "build verification",
        "explanation": "build verification is a key concept in Testing."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves smoke test in Testing?",
        "options": [
          "smoke test",
          "CI/CD testing",
          "pipeline",
          "pre-commit"
        ],
        "answer": "smoke test",
        "explanation": "smoke test is a key concept in Testing."
      },
      {
        "question": "Level 10 · What is the theoretical basis of regression testing in Testing?",
        "options": [
          "regression testing",
          "CI/CD testing",
          "pipeline",
          "pre-commit"
        ],
        "answer": "regression testing",
        "explanation": "regression testing is a key concept in Testing."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of canary release in Testing?",
        "options": [
          "canary release",
          "CI/CD testing",
          "pipeline",
          "pre-commit"
        ],
        "answer": "canary release",
        "explanation": "canary release is a key concept in Testing."
      },
      {
        "question": "Level 10 · How does evolve across scales blue-green in Testing?",
        "options": [
          "blue-green",
          "CI/CD testing",
          "pipeline",
          "pre-commit"
        ],
        "answer": "blue-green",
        "explanation": "blue-green is a key concept in Testing."
      },
      {
        "question": "Level 10 · What is the future direction of feature flag testing in Testing?",
        "options": [
          "feature flag testing",
          "CI/CD testing",
          "pipeline",
          "pre-commit"
        ],
        "answer": "feature flag testing",
        "explanation": "feature flag testing is a key concept in Testing."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves automation suite in Testing?",
        "options": [
          "automation suite",
          "CI/CD testing",
          "pipeline",
          "pre-commit"
        ],
        "answer": "automation suite",
        "explanation": "automation suite is a key concept in Testing."
      }
    ]
  },
  "JavaScript": {
    "Level 1": [
      {
        "question": "Level 1 · What is closures in JavaScript?",
        "options": [
          "closures",
          "lexical scope",
          "scope chain",
          "hoisting"
        ],
        "answer": "closures",
        "explanation": "closures is a key concept in JavaScript."
      },
      {
        "question": "Level 1 · How would you define lexical scope in JavaScript?",
        "options": [
          "lexical scope",
          "closures",
          "scope chain",
          "hoisting"
        ],
        "answer": "lexical scope",
        "explanation": "lexical scope is a key concept in JavaScript."
      },
      {
        "question": "Level 1 · Which describes scope chain in JavaScript?",
        "options": [
          "scope chain",
          "closures",
          "lexical scope",
          "hoisting"
        ],
        "answer": "scope chain",
        "explanation": "scope chain is a key concept in JavaScript."
      },
      {
        "question": "Level 1 · What does the term hoisting in JavaScript?",
        "options": [
          "hoisting",
          "closures",
          "lexical scope",
          "scope chain"
        ],
        "answer": "hoisting",
        "explanation": "hoisting is a key concept in JavaScript."
      },
      {
        "question": "Level 1 · What concept is temporal dead zone in JavaScript?",
        "options": [
          "temporal dead zone",
          "closures",
          "lexical scope",
          "scope chain"
        ],
        "answer": "temporal dead zone",
        "explanation": "temporal dead zone is a key concept in JavaScript."
      },
      {
        "question": "Level 1 · What is var let const in JavaScript?",
        "options": [
          "var let const",
          "closures",
          "lexical scope",
          "scope chain"
        ],
        "answer": "var let const",
        "explanation": "var let const is a key concept in JavaScript."
      },
      {
        "question": "Level 1 · How would you define execution context in JavaScript?",
        "options": [
          "execution context",
          "closures",
          "lexical scope",
          "scope chain"
        ],
        "answer": "execution context",
        "explanation": "execution context is a key concept in JavaScript."
      },
      {
        "question": "Level 1 · Which describes call stack in JavaScript?",
        "options": [
          "call stack",
          "closures",
          "lexical scope",
          "scope chain"
        ],
        "answer": "call stack",
        "explanation": "call stack is a key concept in JavaScript."
      },
      {
        "question": "Level 1 · What does the term event loop in JavaScript?",
        "options": [
          "event loop",
          "closures",
          "lexical scope",
          "scope chain"
        ],
        "answer": "event loop",
        "explanation": "event loop is a key concept in JavaScript."
      },
      {
        "question": "Level 1 · What concept is microtask vs macrotask in JavaScript?",
        "options": [
          "microtask vs macrotask",
          "closures",
          "lexical scope",
          "scope chain"
        ],
        "answer": "microtask vs macrotask",
        "explanation": "microtask vs macrotask is a key concept in JavaScript."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you promises in JavaScript?",
        "options": [
          "promises",
          "async/await",
          "callback hell",
          "Promise.all"
        ],
        "answer": "promises",
        "explanation": "promises is a key concept in JavaScript."
      },
      {
        "question": "Level 2 · What is the purpose of async/await in JavaScript?",
        "options": [
          "async/await",
          "promises",
          "callback hell",
          "Promise.all"
        ],
        "answer": "async/await",
        "explanation": "async/await is a key concept in JavaScript."
      },
      {
        "question": "Level 2 · Which tool is used to callback hell in JavaScript?",
        "options": [
          "callback hell",
          "promises",
          "async/await",
          "Promise.all"
        ],
        "answer": "callback hell",
        "explanation": "callback hell is a key concept in JavaScript."
      },
      {
        "question": "Level 2 · What does Promise.all in JavaScript?",
        "options": [
          "Promise.all",
          "promises",
          "async/await",
          "callback hell"
        ],
        "answer": "Promise.all",
        "explanation": "Promise.all is a key concept in JavaScript."
      },
      {
        "question": "Level 2 · How can you Promise.race in JavaScript?",
        "options": [
          "Promise.race",
          "promises",
          "async/await",
          "callback hell"
        ],
        "answer": "Promise.race",
        "explanation": "Promise.race is a key concept in JavaScript."
      },
      {
        "question": "Level 2 · How do you Promise.allSettled in JavaScript?",
        "options": [
          "Promise.allSettled",
          "promises",
          "async/await",
          "callback hell"
        ],
        "answer": "Promise.allSettled",
        "explanation": "Promise.allSettled is a key concept in JavaScript."
      },
      {
        "question": "Level 2 · What is the purpose of async function in JavaScript?",
        "options": [
          "async function",
          "promises",
          "async/await",
          "callback hell"
        ],
        "answer": "async function",
        "explanation": "async function is a key concept in JavaScript."
      },
      {
        "question": "Level 2 · Which tool is used to error handling in JavaScript?",
        "options": [
          "error handling",
          "promises",
          "async/await",
          "callback hell"
        ],
        "answer": "error handling",
        "explanation": "error handling is a key concept in JavaScript."
      },
      {
        "question": "Level 2 · What does try catch in JavaScript?",
        "options": [
          "try catch",
          "promises",
          "async/await",
          "callback hell"
        ],
        "answer": "try catch",
        "explanation": "try catch is a key concept in JavaScript."
      },
      {
        "question": "Level 2 · How can you rejection handling in JavaScript?",
        "options": [
          "rejection handling",
          "promises",
          "async/await",
          "callback hell"
        ],
        "answer": "rejection handling",
        "explanation": "rejection handling is a key concept in JavaScript."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between prototype chain in JavaScript?",
        "options": [
          "prototype chain",
          "class inheritance",
          "this keyword",
          "bind call apply"
        ],
        "answer": "prototype chain",
        "explanation": "prototype chain is a key concept in JavaScript."
      },
      {
        "question": "Level 3 · How does class inheritance in JavaScript?",
        "options": [
          "class inheritance",
          "prototype chain",
          "this keyword",
          "bind call apply"
        ],
        "answer": "class inheritance",
        "explanation": "class inheritance is a key concept in JavaScript."
      },
      {
        "question": "Level 3 · What problem does this keyword in JavaScript?",
        "options": [
          "this keyword",
          "prototype chain",
          "class inheritance",
          "bind call apply"
        ],
        "answer": "this keyword",
        "explanation": "this keyword is a key concept in JavaScript."
      },
      {
        "question": "Level 3 · Which approach bind call apply in JavaScript?",
        "options": [
          "bind call apply",
          "prototype chain",
          "class inheritance",
          "this keyword"
        ],
        "answer": "bind call apply",
        "explanation": "bind call apply is a key concept in JavaScript."
      },
      {
        "question": "Level 3 · What is the role of arrow function in JavaScript?",
        "options": [
          "arrow function",
          "prototype chain",
          "class inheritance",
          "this keyword"
        ],
        "answer": "arrow function",
        "explanation": "arrow function is a key concept in JavaScript."
      },
      {
        "question": "Level 3 · What is the difference between function declaration in JavaScript?",
        "options": [
          "function declaration",
          "prototype chain",
          "class inheritance",
          "this keyword"
        ],
        "answer": "function declaration",
        "explanation": "function declaration is a key concept in JavaScript."
      },
      {
        "question": "Level 3 · How does function expression in JavaScript?",
        "options": [
          "function expression",
          "prototype chain",
          "class inheritance",
          "this keyword"
        ],
        "answer": "function expression",
        "explanation": "function expression is a key concept in JavaScript."
      },
      {
        "question": "Level 3 · What problem does IIFE in JavaScript?",
        "options": [
          "IIFE",
          "prototype chain",
          "class inheritance",
          "this keyword"
        ],
        "answer": "IIFE",
        "explanation": "IIFE is a key concept in JavaScript."
      },
      {
        "question": "Level 3 · Which approach generator in JavaScript?",
        "options": [
          "generator",
          "prototype chain",
          "class inheritance",
          "this keyword"
        ],
        "answer": "generator",
        "explanation": "generator is a key concept in JavaScript."
      },
      {
        "question": "Level 3 · What is the role of iterator in JavaScript?",
        "options": [
          "iterator",
          "prototype chain",
          "class inheritance",
          "this keyword"
        ],
        "answer": "iterator",
        "explanation": "iterator is a key concept in JavaScript."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use ES6 modules in JavaScript?",
        "options": [
          "ES6 modules",
          "import export",
          "default export",
          "named export"
        ],
        "answer": "ES6 modules",
        "explanation": "ES6 modules is a key concept in JavaScript."
      },
      {
        "question": "Level 4 · What is a real-world example of import export in JavaScript?",
        "options": [
          "import export",
          "ES6 modules",
          "default export",
          "named export"
        ],
        "answer": "import export",
        "explanation": "import export is a key concept in JavaScript."
      },
      {
        "question": "Level 4 · How would you implement default export in JavaScript?",
        "options": [
          "default export",
          "ES6 modules",
          "import export",
          "named export"
        ],
        "answer": "default export",
        "explanation": "default export is a key concept in JavaScript."
      },
      {
        "question": "Level 4 · What pattern applies named export in JavaScript?",
        "options": [
          "named export",
          "ES6 modules",
          "import export",
          "default export"
        ],
        "answer": "named export",
        "explanation": "named export is a key concept in JavaScript."
      },
      {
        "question": "Level 4 · What strategy handles dynamic import in JavaScript?",
        "options": [
          "dynamic import",
          "ES6 modules",
          "import export",
          "default export"
        ],
        "answer": "dynamic import",
        "explanation": "dynamic import is a key concept in JavaScript."
      },
      {
        "question": "Level 4 · When would you use module resolution in JavaScript?",
        "options": [
          "module resolution",
          "ES6 modules",
          "import export",
          "default export"
        ],
        "answer": "module resolution",
        "explanation": "module resolution is a key concept in JavaScript."
      },
      {
        "question": "Level 4 · What is a real-world example of CommonJS in JavaScript?",
        "options": [
          "CommonJS",
          "ES6 modules",
          "import export",
          "default export"
        ],
        "answer": "CommonJS",
        "explanation": "CommonJS is a key concept in JavaScript."
      },
      {
        "question": "Level 4 · How would you implement AMD in JavaScript?",
        "options": [
          "AMD",
          "ES6 modules",
          "import export",
          "default export"
        ],
        "answer": "AMD",
        "explanation": "AMD is a key concept in JavaScript."
      },
      {
        "question": "Level 4 · What pattern applies tree shaking in JavaScript?",
        "options": [
          "tree shaking",
          "ES6 modules",
          "import export",
          "default export"
        ],
        "answer": "tree shaking",
        "explanation": "tree shaking is a key concept in JavaScript."
      },
      {
        "question": "Level 4 · What strategy handles side effects in JavaScript?",
        "options": [
          "side effects",
          "ES6 modules",
          "import export",
          "default export"
        ],
        "answer": "side effects",
        "explanation": "side effects is a key concept in JavaScript."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize Array methods in JavaScript?",
        "options": [
          "Array methods",
          "map",
          "filter",
          "reduce"
        ],
        "answer": "Array methods",
        "explanation": "Array methods is a key concept in JavaScript."
      },
      {
        "question": "Level 5 · What is the best practice for map in JavaScript?",
        "options": [
          "map",
          "Array methods",
          "filter",
          "reduce"
        ],
        "answer": "map",
        "explanation": "map is a key concept in JavaScript."
      },
      {
        "question": "Level 5 · What performance consideration involves filter in JavaScript?",
        "options": [
          "filter",
          "Array methods",
          "map",
          "reduce"
        ],
        "answer": "filter",
        "explanation": "filter is a key concept in JavaScript."
      },
      {
        "question": "Level 5 · How do you scale reduce in JavaScript?",
        "options": [
          "reduce",
          "Array methods",
          "map",
          "filter"
        ],
        "answer": "reduce",
        "explanation": "reduce is a key concept in JavaScript."
      },
      {
        "question": "Level 5 · What tradeoff exists when using forEach in JavaScript?",
        "options": [
          "forEach",
          "Array methods",
          "map",
          "filter"
        ],
        "answer": "forEach",
        "explanation": "forEach is a key concept in JavaScript."
      },
      {
        "question": "Level 5 · How do you optimize find in JavaScript?",
        "options": [
          "find",
          "Array methods",
          "map",
          "filter"
        ],
        "answer": "find",
        "explanation": "find is a key concept in JavaScript."
      },
      {
        "question": "Level 5 · What is the best practice for some in JavaScript?",
        "options": [
          "some",
          "Array methods",
          "map",
          "filter"
        ],
        "answer": "some",
        "explanation": "some is a key concept in JavaScript."
      },
      {
        "question": "Level 5 · What performance consideration involves every in JavaScript?",
        "options": [
          "every",
          "Array methods",
          "map",
          "filter"
        ],
        "answer": "every",
        "explanation": "every is a key concept in JavaScript."
      },
      {
        "question": "Level 5 · How do you scale flat in JavaScript?",
        "options": [
          "flat",
          "Array methods",
          "map",
          "filter"
        ],
        "answer": "flat",
        "explanation": "flat is a key concept in JavaScript."
      },
      {
        "question": "Level 5 · What tradeoff exists when using flatMap in JavaScript?",
        "options": [
          "flatMap",
          "Array methods",
          "map",
          "filter"
        ],
        "answer": "flatMap",
        "explanation": "flatMap is a key concept in JavaScript."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare spread operator in JavaScript?",
        "options": [
          "spread operator",
          "rest parameters",
          "destructuring",
          "template literals"
        ],
        "answer": "spread operator",
        "explanation": "spread operator is a key concept in JavaScript."
      },
      {
        "question": "Level 6 · How is it different from rest parameters in JavaScript?",
        "options": [
          "rest parameters",
          "spread operator",
          "destructuring",
          "template literals"
        ],
        "answer": "rest parameters",
        "explanation": "rest parameters is a key concept in JavaScript."
      },
      {
        "question": "Level 6 · What are the pros and cons of destructuring in JavaScript?",
        "options": [
          "destructuring",
          "spread operator",
          "rest parameters",
          "template literals"
        ],
        "answer": "destructuring",
        "explanation": "destructuring is a key concept in JavaScript."
      },
      {
        "question": "Level 6 · What advantage does template literals in JavaScript?",
        "options": [
          "template literals",
          "spread operator",
          "rest parameters",
          "destructuring"
        ],
        "answer": "template literals",
        "explanation": "template literals is a key concept in JavaScript."
      },
      {
        "question": "Level 6 · What limitation does optional chaining in JavaScript?",
        "options": [
          "optional chaining",
          "spread operator",
          "rest parameters",
          "destructuring"
        ],
        "answer": "optional chaining",
        "explanation": "optional chaining is a key concept in JavaScript."
      },
      {
        "question": "Level 6 · Compare nullish coalescing in JavaScript?",
        "options": [
          "nullish coalescing",
          "spread operator",
          "rest parameters",
          "destructuring"
        ],
        "answer": "nullish coalescing",
        "explanation": "nullish coalescing is a key concept in JavaScript."
      },
      {
        "question": "Level 6 · How is it different from object shorthand in JavaScript?",
        "options": [
          "object shorthand",
          "spread operator",
          "rest parameters",
          "destructuring"
        ],
        "answer": "object shorthand",
        "explanation": "object shorthand is a key concept in JavaScript."
      },
      {
        "question": "Level 6 · What are the pros and cons of computed property in JavaScript?",
        "options": [
          "computed property",
          "spread operator",
          "rest parameters",
          "destructuring"
        ],
        "answer": "computed property",
        "explanation": "computed property is a key concept in JavaScript."
      },
      {
        "question": "Level 6 · What advantage does symbol in JavaScript?",
        "options": [
          "symbol",
          "spread operator",
          "rest parameters",
          "destructuring"
        ],
        "answer": "symbol",
        "explanation": "symbol is a key concept in JavaScript."
      },
      {
        "question": "Level 6 · What limitation does Map Set in JavaScript?",
        "options": [
          "Map Set",
          "spread operator",
          "rest parameters",
          "destructuring"
        ],
        "answer": "Map Set",
        "explanation": "Map Set is a key concept in JavaScript."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with DOM manipulation in JavaScript?",
        "options": [
          "DOM manipulation",
          "querySelector",
          "addEventListener",
          "event bubbling"
        ],
        "answer": "DOM manipulation",
        "explanation": "DOM manipulation is a key concept in JavaScript."
      },
      {
        "question": "Level 7 · What goes wrong when querySelector in JavaScript?",
        "options": [
          "querySelector",
          "DOM manipulation",
          "addEventListener",
          "event bubbling"
        ],
        "answer": "querySelector",
        "explanation": "querySelector is a key concept in JavaScript."
      },
      {
        "question": "Level 7 · What common mistake involves addEventListener in JavaScript?",
        "options": [
          "addEventListener",
          "DOM manipulation",
          "querySelector",
          "event bubbling"
        ],
        "answer": "addEventListener",
        "explanation": "addEventListener is a key concept in JavaScript."
      },
      {
        "question": "Level 7 · How do you monitor event bubbling in JavaScript?",
        "options": [
          "event bubbling",
          "DOM manipulation",
          "querySelector",
          "addEventListener"
        ],
        "answer": "event bubbling",
        "explanation": "event bubbling is a key concept in JavaScript."
      },
      {
        "question": "Level 7 · What failure mode occurs with event delegation in JavaScript?",
        "options": [
          "event delegation",
          "DOM manipulation",
          "querySelector",
          "addEventListener"
        ],
        "answer": "event delegation",
        "explanation": "event delegation is a key concept in JavaScript."
      },
      {
        "question": "Level 7 · How do you debug issues with event capturing in JavaScript?",
        "options": [
          "event capturing",
          "DOM manipulation",
          "querySelector",
          "addEventListener"
        ],
        "answer": "event capturing",
        "explanation": "event capturing is a key concept in JavaScript."
      },
      {
        "question": "Level 7 · What goes wrong when custom events in JavaScript?",
        "options": [
          "custom events",
          "DOM manipulation",
          "querySelector",
          "addEventListener"
        ],
        "answer": "custom events",
        "explanation": "custom events is a key concept in JavaScript."
      },
      {
        "question": "Level 7 · What common mistake involves createElement in JavaScript?",
        "options": [
          "createElement",
          "DOM manipulation",
          "querySelector",
          "addEventListener"
        ],
        "answer": "createElement",
        "explanation": "createElement is a key concept in JavaScript."
      },
      {
        "question": "Level 7 · How do you monitor appendChild in JavaScript?",
        "options": [
          "appendChild",
          "DOM manipulation",
          "querySelector",
          "addEventListener"
        ],
        "answer": "appendChild",
        "explanation": "appendChild is a key concept in JavaScript."
      },
      {
        "question": "Level 7 · What failure mode occurs with innerHTML vs textContent in JavaScript?",
        "options": [
          "innerHTML vs textContent",
          "DOM manipulation",
          "querySelector",
          "addEventListener"
        ],
        "answer": "innerHTML vs textContent",
        "explanation": "innerHTML vs textContent is a key concept in JavaScript."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves fetch API in JavaScript?",
        "options": [
          "fetch API",
          "XMLHttpRequest",
          "Axios",
          "headers"
        ],
        "answer": "fetch API",
        "explanation": "fetch API is a key concept in JavaScript."
      },
      {
        "question": "Level 8 · How do you secure XMLHttpRequest in JavaScript?",
        "options": [
          "XMLHttpRequest",
          "fetch API",
          "Axios",
          "headers"
        ],
        "answer": "XMLHttpRequest",
        "explanation": "XMLHttpRequest is a key concept in JavaScript."
      },
      {
        "question": "Level 8 · What testing strategy covers Axios in JavaScript?",
        "options": [
          "Axios",
          "fetch API",
          "XMLHttpRequest",
          "headers"
        ],
        "answer": "Axios",
        "explanation": "Axios is a key concept in JavaScript."
      },
      {
        "question": "Level 8 · How do you ensure reliability of headers in JavaScript?",
        "options": [
          "headers",
          "fetch API",
          "XMLHttpRequest",
          "Axios"
        ],
        "answer": "headers",
        "explanation": "headers is a key concept in JavaScript."
      },
      {
        "question": "Level 8 · What error handling applies to CORS in JavaScript?",
        "options": [
          "CORS",
          "fetch API",
          "XMLHttpRequest",
          "Axios"
        ],
        "answer": "CORS",
        "explanation": "CORS is a key concept in JavaScript."
      },
      {
        "question": "Level 8 · What security concern involves same-origin policy in JavaScript?",
        "options": [
          "same-origin policy",
          "fetch API",
          "XMLHttpRequest",
          "Axios"
        ],
        "answer": "same-origin policy",
        "explanation": "same-origin policy is a key concept in JavaScript."
      },
      {
        "question": "Level 8 · How do you secure JSON parsing in JavaScript?",
        "options": [
          "JSON parsing",
          "fetch API",
          "XMLHttpRequest",
          "Axios"
        ],
        "answer": "JSON parsing",
        "explanation": "JSON parsing is a key concept in JavaScript."
      },
      {
        "question": "Level 8 · What testing strategy covers FormData in JavaScript?",
        "options": [
          "FormData",
          "fetch API",
          "XMLHttpRequest",
          "Axios"
        ],
        "answer": "FormData",
        "explanation": "FormData is a key concept in JavaScript."
      },
      {
        "question": "Level 8 · How do you ensure reliability of AbortController in JavaScript?",
        "options": [
          "AbortController",
          "fetch API",
          "XMLHttpRequest",
          "Axios"
        ],
        "answer": "AbortController",
        "explanation": "AbortController is a key concept in JavaScript."
      },
      {
        "question": "Level 8 · What error handling applies to interceptors in JavaScript?",
        "options": [
          "interceptors",
          "fetch API",
          "XMLHttpRequest",
          "Axios"
        ],
        "answer": "interceptors",
        "explanation": "interceptors is a key concept in JavaScript."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with design patterns in JS in JavaScript?",
        "options": [
          "design patterns in JS",
          "module pattern",
          "singleton",
          "observer"
        ],
        "answer": "design patterns in JS",
        "explanation": "design patterns in JS is a key concept in JavaScript."
      },
      {
        "question": "Level 9 · What architectural pattern uses module pattern in JavaScript?",
        "options": [
          "module pattern",
          "design patterns in JS",
          "singleton",
          "observer"
        ],
        "answer": "module pattern",
        "explanation": "module pattern is a key concept in JavaScript."
      },
      {
        "question": "Level 9 · How would you design a system with singleton in JavaScript?",
        "options": [
          "singleton",
          "design patterns in JS",
          "module pattern",
          "observer"
        ],
        "answer": "singleton",
        "explanation": "singleton is a key concept in JavaScript."
      },
      {
        "question": "Level 9 · What dependency does have observer in JavaScript?",
        "options": [
          "observer",
          "design patterns in JS",
          "module pattern",
          "singleton"
        ],
        "answer": "observer",
        "explanation": "observer is a key concept in JavaScript."
      },
      {
        "question": "Level 9 · How do you migrate from pub-sub in JavaScript?",
        "options": [
          "pub-sub",
          "design patterns in JS",
          "module pattern",
          "singleton"
        ],
        "answer": "pub-sub",
        "explanation": "pub-sub is a key concept in JavaScript."
      },
      {
        "question": "Level 9 · How does integrate with factory in JavaScript?",
        "options": [
          "factory",
          "design patterns in JS",
          "module pattern",
          "singleton"
        ],
        "answer": "factory",
        "explanation": "factory is a key concept in JavaScript."
      },
      {
        "question": "Level 9 · What architectural pattern uses mixin in JavaScript?",
        "options": [
          "mixin",
          "design patterns in JS",
          "module pattern",
          "singleton"
        ],
        "answer": "mixin",
        "explanation": "mixin is a key concept in JavaScript."
      },
      {
        "question": "Level 9 · How would you design a system with revealing module in JavaScript?",
        "options": [
          "revealing module",
          "design patterns in JS",
          "module pattern",
          "singleton"
        ],
        "answer": "revealing module",
        "explanation": "revealing module is a key concept in JavaScript."
      },
      {
        "question": "Level 9 · What dependency does have prototype pattern in JavaScript?",
        "options": [
          "prototype pattern",
          "design patterns in JS",
          "module pattern",
          "singleton"
        ],
        "answer": "prototype pattern",
        "explanation": "prototype pattern is a key concept in JavaScript."
      },
      {
        "question": "Level 9 · How do you migrate from decorator in JavaScript?",
        "options": [
          "decorator",
          "design patterns in JS",
          "module pattern",
          "singleton"
        ],
        "answer": "decorator",
        "explanation": "decorator is a key concept in JavaScript."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of performance in JavaScript?",
        "options": [
          "performance",
          "debounce",
          "throttle",
          "memoization"
        ],
        "answer": "performance",
        "explanation": "performance is a key concept in JavaScript."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of debounce in JavaScript?",
        "options": [
          "debounce",
          "performance",
          "throttle",
          "memoization"
        ],
        "answer": "debounce",
        "explanation": "debounce is a key concept in JavaScript."
      },
      {
        "question": "Level 10 · How does evolve across scales throttle in JavaScript?",
        "options": [
          "throttle",
          "performance",
          "debounce",
          "memoization"
        ],
        "answer": "throttle",
        "explanation": "throttle is a key concept in JavaScript."
      },
      {
        "question": "Level 10 · What is the future direction of memoization in JavaScript?",
        "options": [
          "memoization",
          "performance",
          "debounce",
          "throttle"
        ],
        "answer": "memoization",
        "explanation": "memoization is a key concept in JavaScript."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves lazy evaluation in JavaScript?",
        "options": [
          "lazy evaluation",
          "performance",
          "debounce",
          "throttle"
        ],
        "answer": "lazy evaluation",
        "explanation": "lazy evaluation is a key concept in JavaScript."
      },
      {
        "question": "Level 10 · What is the theoretical basis of Web Worker in JavaScript?",
        "options": [
          "Web Worker",
          "performance",
          "debounce",
          "throttle"
        ],
        "answer": "Web Worker",
        "explanation": "Web Worker is a key concept in JavaScript."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of requestAnimationFrame in JavaScript?",
        "options": [
          "requestAnimationFrame",
          "performance",
          "debounce",
          "throttle"
        ],
        "answer": "requestAnimationFrame",
        "explanation": "requestAnimationFrame is a key concept in JavaScript."
      },
      {
        "question": "Level 10 · How does evolve across scales requestIdleCallback in JavaScript?",
        "options": [
          "requestIdleCallback",
          "performance",
          "debounce",
          "throttle"
        ],
        "answer": "requestIdleCallback",
        "explanation": "requestIdleCallback is a key concept in JavaScript."
      },
      {
        "question": "Level 10 · What is the future direction of memory leak in JavaScript?",
        "options": [
          "memory leak",
          "performance",
          "debounce",
          "throttle"
        ],
        "answer": "memory leak",
        "explanation": "memory leak is a key concept in JavaScript."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves garbage collection in JavaScript?",
        "options": [
          "garbage collection",
          "performance",
          "debounce",
          "throttle"
        ],
        "answer": "garbage collection",
        "explanation": "garbage collection is a key concept in JavaScript."
      }
    ]
  },
  "Python": {
    "Level 1": [
      {
        "question": "Level 1 · What is list comprehension in Python?",
        "options": [
          "list comprehension",
          "generator",
          "iterator",
          "decorator"
        ],
        "answer": "list comprehension",
        "explanation": "list comprehension is a key concept in Python."
      },
      {
        "question": "Level 1 · How would you define generator in Python?",
        "options": [
          "generator",
          "list comprehension",
          "iterator",
          "decorator"
        ],
        "answer": "generator",
        "explanation": "generator is a key concept in Python."
      },
      {
        "question": "Level 1 · Which describes iterator in Python?",
        "options": [
          "iterator",
          "list comprehension",
          "generator",
          "decorator"
        ],
        "answer": "iterator",
        "explanation": "iterator is a key concept in Python."
      },
      {
        "question": "Level 1 · What does the term decorator in Python?",
        "options": [
          "decorator",
          "list comprehension",
          "generator",
          "iterator"
        ],
        "answer": "decorator",
        "explanation": "decorator is a key concept in Python."
      },
      {
        "question": "Level 1 · What concept is context manager in Python?",
        "options": [
          "context manager",
          "list comprehension",
          "generator",
          "iterator"
        ],
        "answer": "context manager",
        "explanation": "context manager is a key concept in Python."
      },
      {
        "question": "Level 1 · What is lambda in Python?",
        "options": [
          "lambda",
          "list comprehension",
          "generator",
          "iterator"
        ],
        "answer": "lambda",
        "explanation": "lambda is a key concept in Python."
      },
      {
        "question": "Level 1 · How would you define map filter reduce in Python?",
        "options": [
          "map filter reduce",
          "list comprehension",
          "generator",
          "iterator"
        ],
        "answer": "map filter reduce",
        "explanation": "map filter reduce is a key concept in Python."
      },
      {
        "question": "Level 1 · Which describes *args **kwargs in Python?",
        "options": [
          "*args **kwargs",
          "list comprehension",
          "generator",
          "iterator"
        ],
        "answer": "*args **kwargs",
        "explanation": "*args **kwargs is a key concept in Python."
      },
      {
        "question": "Level 1 · What does the term type hinting in Python?",
        "options": [
          "type hinting",
          "list comprehension",
          "generator",
          "iterator"
        ],
        "answer": "type hinting",
        "explanation": "type hinting is a key concept in Python."
      },
      {
        "question": "Level 1 · What concept is duck typing in Python?",
        "options": [
          "duck typing",
          "list comprehension",
          "generator",
          "iterator"
        ],
        "answer": "duck typing",
        "explanation": "duck typing is a key concept in Python."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you Django in Python?",
        "options": [
          "Django",
          "MVT pattern",
          "models",
          "views"
        ],
        "answer": "Django",
        "explanation": "Django is a key concept in Python."
      },
      {
        "question": "Level 2 · What is the purpose of MVT pattern in Python?",
        "options": [
          "MVT pattern",
          "Django",
          "models",
          "views"
        ],
        "answer": "MVT pattern",
        "explanation": "MVT pattern is a key concept in Python."
      },
      {
        "question": "Level 2 · Which tool is used to models in Python?",
        "options": [
          "models",
          "Django",
          "MVT pattern",
          "views"
        ],
        "answer": "models",
        "explanation": "models is a key concept in Python."
      },
      {
        "question": "Level 2 · What does views in Python?",
        "options": [
          "views",
          "Django",
          "MVT pattern",
          "models"
        ],
        "answer": "views",
        "explanation": "views is a key concept in Python."
      },
      {
        "question": "Level 2 · How can you templates in Python?",
        "options": [
          "templates",
          "Django",
          "MVT pattern",
          "models"
        ],
        "answer": "templates",
        "explanation": "templates is a key concept in Python."
      },
      {
        "question": "Level 2 · How do you URL routing in Python?",
        "options": [
          "URL routing",
          "Django",
          "MVT pattern",
          "models"
        ],
        "answer": "URL routing",
        "explanation": "URL routing is a key concept in Python."
      },
      {
        "question": "Level 2 · What is the purpose of ORM in Python?",
        "options": [
          "ORM",
          "Django",
          "MVT pattern",
          "models"
        ],
        "answer": "ORM",
        "explanation": "ORM is a key concept in Python."
      },
      {
        "question": "Level 2 · Which tool is used to migrations in Python?",
        "options": [
          "migrations",
          "Django",
          "MVT pattern",
          "models"
        ],
        "answer": "migrations",
        "explanation": "migrations is a key concept in Python."
      },
      {
        "question": "Level 2 · What does admin panel in Python?",
        "options": [
          "admin panel",
          "Django",
          "MVT pattern",
          "models"
        ],
        "answer": "admin panel",
        "explanation": "admin panel is a key concept in Python."
      },
      {
        "question": "Level 2 · How can you REST framework in Python?",
        "options": [
          "REST framework",
          "Django",
          "MVT pattern",
          "models"
        ],
        "answer": "REST framework",
        "explanation": "REST framework is a key concept in Python."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between Flask in Python?",
        "options": [
          "Flask",
          "route",
          "request object",
          "response"
        ],
        "answer": "Flask",
        "explanation": "Flask is a key concept in Python."
      },
      {
        "question": "Level 3 · How does route in Python?",
        "options": [
          "route",
          "Flask",
          "request object",
          "response"
        ],
        "answer": "route",
        "explanation": "route is a key concept in Python."
      },
      {
        "question": "Level 3 · What problem does request object in Python?",
        "options": [
          "request object",
          "Flask",
          "route",
          "response"
        ],
        "answer": "request object",
        "explanation": "request object is a key concept in Python."
      },
      {
        "question": "Level 3 · Which approach response in Python?",
        "options": [
          "response",
          "Flask",
          "route",
          "request object"
        ],
        "answer": "response",
        "explanation": "response is a key concept in Python."
      },
      {
        "question": "Level 3 · What is the role of Jinja2 in Python?",
        "options": [
          "Jinja2",
          "Flask",
          "route",
          "request object"
        ],
        "answer": "Jinja2",
        "explanation": "Jinja2 is a key concept in Python."
      },
      {
        "question": "Level 3 · What is the difference between Blueprints in Python?",
        "options": [
          "Blueprints",
          "Flask",
          "route",
          "request object"
        ],
        "answer": "Blueprints",
        "explanation": "Blueprints is a key concept in Python."
      },
      {
        "question": "Level 3 · How does SQLAlchemy in Python?",
        "options": [
          "SQLAlchemy",
          "Flask",
          "route",
          "request object"
        ],
        "answer": "SQLAlchemy",
        "explanation": "SQLAlchemy is a key concept in Python."
      },
      {
        "question": "Level 3 · What problem does Werkzeug in Python?",
        "options": [
          "Werkzeug",
          "Flask",
          "route",
          "request object"
        ],
        "answer": "Werkzeug",
        "explanation": "Werkzeug is a key concept in Python."
      },
      {
        "question": "Level 3 · Which approach session management in Python?",
        "options": [
          "session management",
          "Flask",
          "route",
          "request object"
        ],
        "answer": "session management",
        "explanation": "session management is a key concept in Python."
      },
      {
        "question": "Level 3 · What is the role of error handlers in Python?",
        "options": [
          "error handlers",
          "Flask",
          "route",
          "request object"
        ],
        "answer": "error handlers",
        "explanation": "error handlers is a key concept in Python."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use pandas in Python?",
        "options": [
          "pandas",
          "DataFrame",
          "Series",
          "read_csv"
        ],
        "answer": "pandas",
        "explanation": "pandas is a key concept in Python."
      },
      {
        "question": "Level 4 · What is a real-world example of DataFrame in Python?",
        "options": [
          "DataFrame",
          "pandas",
          "Series",
          "read_csv"
        ],
        "answer": "DataFrame",
        "explanation": "DataFrame is a key concept in Python."
      },
      {
        "question": "Level 4 · How would you implement Series in Python?",
        "options": [
          "Series",
          "pandas",
          "DataFrame",
          "read_csv"
        ],
        "answer": "Series",
        "explanation": "Series is a key concept in Python."
      },
      {
        "question": "Level 4 · What pattern applies read_csv in Python?",
        "options": [
          "read_csv",
          "pandas",
          "DataFrame",
          "Series"
        ],
        "answer": "read_csv",
        "explanation": "read_csv is a key concept in Python."
      },
      {
        "question": "Level 4 · What strategy handles groupby in Python?",
        "options": [
          "groupby",
          "pandas",
          "DataFrame",
          "Series"
        ],
        "answer": "groupby",
        "explanation": "groupby is a key concept in Python."
      },
      {
        "question": "Level 4 · When would you use merge in Python?",
        "options": [
          "merge",
          "pandas",
          "DataFrame",
          "Series"
        ],
        "answer": "merge",
        "explanation": "merge is a key concept in Python."
      },
      {
        "question": "Level 4 · What is a real-world example of pivot table in Python?",
        "options": [
          "pivot table",
          "pandas",
          "DataFrame",
          "Series"
        ],
        "answer": "pivot table",
        "explanation": "pivot table is a key concept in Python."
      },
      {
        "question": "Level 4 · How would you implement apply in Python?",
        "options": [
          "apply",
          "pandas",
          "DataFrame",
          "Series"
        ],
        "answer": "apply",
        "explanation": "apply is a key concept in Python."
      },
      {
        "question": "Level 4 · What pattern applies value_counts in Python?",
        "options": [
          "value_counts",
          "pandas",
          "DataFrame",
          "Series"
        ],
        "answer": "value_counts",
        "explanation": "value_counts is a key concept in Python."
      },
      {
        "question": "Level 4 · What strategy handles missing data handling in Python?",
        "options": [
          "missing data handling",
          "pandas",
          "DataFrame",
          "Series"
        ],
        "answer": "missing data handling",
        "explanation": "missing data handling is a key concept in Python."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize NumPy in Python?",
        "options": [
          "NumPy",
          "array",
          "ndarray",
          "shape"
        ],
        "answer": "NumPy",
        "explanation": "NumPy is a key concept in Python."
      },
      {
        "question": "Level 5 · What is the best practice for array in Python?",
        "options": [
          "array",
          "NumPy",
          "ndarray",
          "shape"
        ],
        "answer": "array",
        "explanation": "array is a key concept in Python."
      },
      {
        "question": "Level 5 · What performance consideration involves ndarray in Python?",
        "options": [
          "ndarray",
          "NumPy",
          "array",
          "shape"
        ],
        "answer": "ndarray",
        "explanation": "ndarray is a key concept in Python."
      },
      {
        "question": "Level 5 · How do you scale shape in Python?",
        "options": [
          "shape",
          "NumPy",
          "array",
          "ndarray"
        ],
        "answer": "shape",
        "explanation": "shape is a key concept in Python."
      },
      {
        "question": "Level 5 · What tradeoff exists when using reshape in Python?",
        "options": [
          "reshape",
          "NumPy",
          "array",
          "ndarray"
        ],
        "answer": "reshape",
        "explanation": "reshape is a key concept in Python."
      },
      {
        "question": "Level 5 · How do you optimize broadcasting in Python?",
        "options": [
          "broadcasting",
          "NumPy",
          "array",
          "ndarray"
        ],
        "answer": "broadcasting",
        "explanation": "broadcasting is a key concept in Python."
      },
      {
        "question": "Level 5 · What is the best practice for vectorization in Python?",
        "options": [
          "vectorization",
          "NumPy",
          "array",
          "ndarray"
        ],
        "answer": "vectorization",
        "explanation": "vectorization is a key concept in Python."
      },
      {
        "question": "Level 5 · What performance consideration involves linspace in Python?",
        "options": [
          "linspace",
          "NumPy",
          "array",
          "ndarray"
        ],
        "answer": "linspace",
        "explanation": "linspace is a key concept in Python."
      },
      {
        "question": "Level 5 · How do you scale random in Python?",
        "options": [
          "random",
          "NumPy",
          "array",
          "ndarray"
        ],
        "answer": "random",
        "explanation": "random is a key concept in Python."
      },
      {
        "question": "Level 5 · What tradeoff exists when using matrix operations in Python?",
        "options": [
          "matrix operations",
          "NumPy",
          "array",
          "ndarray"
        ],
        "answer": "matrix operations",
        "explanation": "matrix operations is a key concept in Python."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare asyncio in Python?",
        "options": [
          "asyncio",
          "async def",
          "await",
          "event loop"
        ],
        "answer": "asyncio",
        "explanation": "asyncio is a key concept in Python."
      },
      {
        "question": "Level 6 · How is it different from async def in Python?",
        "options": [
          "async def",
          "asyncio",
          "await",
          "event loop"
        ],
        "answer": "async def",
        "explanation": "async def is a key concept in Python."
      },
      {
        "question": "Level 6 · What are the pros and cons of await in Python?",
        "options": [
          "await",
          "asyncio",
          "async def",
          "event loop"
        ],
        "answer": "await",
        "explanation": "await is a key concept in Python."
      },
      {
        "question": "Level 6 · What advantage does event loop in Python?",
        "options": [
          "event loop",
          "asyncio",
          "async def",
          "await"
        ],
        "answer": "event loop",
        "explanation": "event loop is a key concept in Python."
      },
      {
        "question": "Level 6 · What limitation does coroutine in Python?",
        "options": [
          "coroutine",
          "asyncio",
          "async def",
          "await"
        ],
        "answer": "coroutine",
        "explanation": "coroutine is a key concept in Python."
      },
      {
        "question": "Level 6 · Compare Task in Python?",
        "options": [
          "Task",
          "asyncio",
          "async def",
          "await"
        ],
        "answer": "Task",
        "explanation": "Task is a key concept in Python."
      },
      {
        "question": "Level 6 · How is it different from Future in Python?",
        "options": [
          "Future",
          "asyncio",
          "async def",
          "await"
        ],
        "answer": "Future",
        "explanation": "Future is a key concept in Python."
      },
      {
        "question": "Level 6 · What are the pros and cons of gather in Python?",
        "options": [
          "gather",
          "asyncio",
          "async def",
          "await"
        ],
        "answer": "gather",
        "explanation": "gather is a key concept in Python."
      },
      {
        "question": "Level 6 · What advantage does asyncio.sleep in Python?",
        "options": [
          "asyncio.sleep",
          "asyncio",
          "async def",
          "await"
        ],
        "answer": "asyncio.sleep",
        "explanation": "asyncio.sleep is a key concept in Python."
      },
      {
        "question": "Level 6 · What limitation does run_in_executor in Python?",
        "options": [
          "run_in_executor",
          "asyncio",
          "async def",
          "await"
        ],
        "answer": "run_in_executor",
        "explanation": "run_in_executor is a key concept in Python."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with OOP in Python in Python?",
        "options": [
          "OOP in Python",
          "class",
          "inheritance",
          "polymorphism"
        ],
        "answer": "OOP in Python",
        "explanation": "OOP in Python is a key concept in Python."
      },
      {
        "question": "Level 7 · What goes wrong when class in Python?",
        "options": [
          "class",
          "OOP in Python",
          "inheritance",
          "polymorphism"
        ],
        "answer": "class",
        "explanation": "class is a key concept in Python."
      },
      {
        "question": "Level 7 · What common mistake involves inheritance in Python?",
        "options": [
          "inheritance",
          "OOP in Python",
          "class",
          "polymorphism"
        ],
        "answer": "inheritance",
        "explanation": "inheritance is a key concept in Python."
      },
      {
        "question": "Level 7 · How do you monitor polymorphism in Python?",
        "options": [
          "polymorphism",
          "OOP in Python",
          "class",
          "inheritance"
        ],
        "answer": "polymorphism",
        "explanation": "polymorphism is a key concept in Python."
      },
      {
        "question": "Level 7 · What failure mode occurs with encapsulation in Python?",
        "options": [
          "encapsulation",
          "OOP in Python",
          "class",
          "inheritance"
        ],
        "answer": "encapsulation",
        "explanation": "encapsulation is a key concept in Python."
      },
      {
        "question": "Level 7 · How do you debug issues with abstract class in Python?",
        "options": [
          "abstract class",
          "OOP in Python",
          "class",
          "inheritance"
        ],
        "answer": "abstract class",
        "explanation": "abstract class is a key concept in Python."
      },
      {
        "question": "Level 7 · What goes wrong when magic methods in Python?",
        "options": [
          "magic methods",
          "OOP in Python",
          "class",
          "inheritance"
        ],
        "answer": "magic methods",
        "explanation": "magic methods is a key concept in Python."
      },
      {
        "question": "Level 7 · What common mistake involves @staticmethod in Python?",
        "options": [
          "@staticmethod",
          "OOP in Python",
          "class",
          "inheritance"
        ],
        "answer": "@staticmethod",
        "explanation": "@staticmethod is a key concept in Python."
      },
      {
        "question": "Level 7 · How do you monitor @classmethod in Python?",
        "options": [
          "@classmethod",
          "OOP in Python",
          "class",
          "inheritance"
        ],
        "answer": "@classmethod",
        "explanation": "@classmethod is a key concept in Python."
      },
      {
        "question": "Level 7 · What failure mode occurs with @property in Python?",
        "options": [
          "@property",
          "OOP in Python",
          "class",
          "inheritance"
        ],
        "answer": "@property",
        "explanation": "@property is a key concept in Python."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves testing in Python in Python?",
        "options": [
          "testing in Python",
          "unittest",
          "pytest",
          "fixtures"
        ],
        "answer": "testing in Python",
        "explanation": "testing in Python is a key concept in Python."
      },
      {
        "question": "Level 8 · How do you secure unittest in Python?",
        "options": [
          "unittest",
          "testing in Python",
          "pytest",
          "fixtures"
        ],
        "answer": "unittest",
        "explanation": "unittest is a key concept in Python."
      },
      {
        "question": "Level 8 · What testing strategy covers pytest in Python?",
        "options": [
          "pytest",
          "testing in Python",
          "unittest",
          "fixtures"
        ],
        "answer": "pytest",
        "explanation": "pytest is a key concept in Python."
      },
      {
        "question": "Level 8 · How do you ensure reliability of fixtures in Python?",
        "options": [
          "fixtures",
          "testing in Python",
          "unittest",
          "pytest"
        ],
        "answer": "fixtures",
        "explanation": "fixtures is a key concept in Python."
      },
      {
        "question": "Level 8 · What error handling applies to parametrize in Python?",
        "options": [
          "parametrize",
          "testing in Python",
          "unittest",
          "pytest"
        ],
        "answer": "parametrize",
        "explanation": "parametrize is a key concept in Python."
      },
      {
        "question": "Level 8 · What security concern involves mock in Python?",
        "options": [
          "mock",
          "testing in Python",
          "unittest",
          "pytest"
        ],
        "answer": "mock",
        "explanation": "mock is a key concept in Python."
      },
      {
        "question": "Level 8 · How do you secure patch in Python?",
        "options": [
          "patch",
          "testing in Python",
          "unittest",
          "pytest"
        ],
        "answer": "patch",
        "explanation": "patch is a key concept in Python."
      },
      {
        "question": "Level 8 · What testing strategy covers assertions in Python?",
        "options": [
          "assertions",
          "testing in Python",
          "unittest",
          "pytest"
        ],
        "answer": "assertions",
        "explanation": "assertions is a key concept in Python."
      },
      {
        "question": "Level 8 · How do you ensure reliability of coverage in Python?",
        "options": [
          "coverage",
          "testing in Python",
          "unittest",
          "pytest"
        ],
        "answer": "coverage",
        "explanation": "coverage is a key concept in Python."
      },
      {
        "question": "Level 8 · What error handling applies to tox in Python?",
        "options": [
          "tox",
          "testing in Python",
          "unittest",
          "pytest"
        ],
        "answer": "tox",
        "explanation": "tox is a key concept in Python."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with web scraping in Python?",
        "options": [
          "web scraping",
          "BeautifulSoup",
          "requests",
          "Scrapy"
        ],
        "answer": "web scraping",
        "explanation": "web scraping is a key concept in Python."
      },
      {
        "question": "Level 9 · What architectural pattern uses BeautifulSoup in Python?",
        "options": [
          "BeautifulSoup",
          "web scraping",
          "requests",
          "Scrapy"
        ],
        "answer": "BeautifulSoup",
        "explanation": "BeautifulSoup is a key concept in Python."
      },
      {
        "question": "Level 9 · How would you design a system with requests in Python?",
        "options": [
          "requests",
          "web scraping",
          "BeautifulSoup",
          "Scrapy"
        ],
        "answer": "requests",
        "explanation": "requests is a key concept in Python."
      },
      {
        "question": "Level 9 · What dependency does have Scrapy in Python?",
        "options": [
          "Scrapy",
          "web scraping",
          "BeautifulSoup",
          "requests"
        ],
        "answer": "Scrapy",
        "explanation": "Scrapy is a key concept in Python."
      },
      {
        "question": "Level 9 · How do you migrate from Selenium in Python?",
        "options": [
          "Selenium",
          "web scraping",
          "BeautifulSoup",
          "requests"
        ],
        "answer": "Selenium",
        "explanation": "Selenium is a key concept in Python."
      },
      {
        "question": "Level 9 · How does integrate with XPath in Python?",
        "options": [
          "XPath",
          "web scraping",
          "BeautifulSoup",
          "requests"
        ],
        "answer": "XPath",
        "explanation": "XPath is a key concept in Python."
      },
      {
        "question": "Level 9 · What architectural pattern uses CSS selectors in Python?",
        "options": [
          "CSS selectors",
          "web scraping",
          "BeautifulSoup",
          "requests"
        ],
        "answer": "CSS selectors",
        "explanation": "CSS selectors is a key concept in Python."
      },
      {
        "question": "Level 9 · How would you design a system with rate limiting in Python?",
        "options": [
          "rate limiting",
          "web scraping",
          "BeautifulSoup",
          "requests"
        ],
        "answer": "rate limiting",
        "explanation": "rate limiting is a key concept in Python."
      },
      {
        "question": "Level 9 · What dependency does have robots.txt in Python?",
        "options": [
          "robots.txt",
          "web scraping",
          "BeautifulSoup",
          "requests"
        ],
        "answer": "robots.txt",
        "explanation": "robots.txt is a key concept in Python."
      },
      {
        "question": "Level 9 · How do you migrate from data extraction in Python?",
        "options": [
          "data extraction",
          "web scraping",
          "BeautifulSoup",
          "requests"
        ],
        "answer": "data extraction",
        "explanation": "data extraction is a key concept in Python."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of deployment in Python?",
        "options": [
          "deployment",
          "virtualenv",
          "pip",
          "requirements.txt"
        ],
        "answer": "deployment",
        "explanation": "deployment is a key concept in Python."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of virtualenv in Python?",
        "options": [
          "virtualenv",
          "deployment",
          "pip",
          "requirements.txt"
        ],
        "answer": "virtualenv",
        "explanation": "virtualenv is a key concept in Python."
      },
      {
        "question": "Level 10 · How does evolve across scales pip in Python?",
        "options": [
          "pip",
          "deployment",
          "virtualenv",
          "requirements.txt"
        ],
        "answer": "pip",
        "explanation": "pip is a key concept in Python."
      },
      {
        "question": "Level 10 · What is the future direction of requirements.txt in Python?",
        "options": [
          "requirements.txt",
          "deployment",
          "virtualenv",
          "pip"
        ],
        "answer": "requirements.txt",
        "explanation": "requirements.txt is a key concept in Python."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves Docker in Python?",
        "options": [
          "Docker",
          "deployment",
          "virtualenv",
          "pip"
        ],
        "answer": "Docker",
        "explanation": "Docker is a key concept in Python."
      },
      {
        "question": "Level 10 · What is the theoretical basis of Gunicorn in Python?",
        "options": [
          "Gunicorn",
          "deployment",
          "virtualenv",
          "pip"
        ],
        "answer": "Gunicorn",
        "explanation": "Gunicorn is a key concept in Python."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of uWSGI in Python?",
        "options": [
          "uWSGI",
          "deployment",
          "virtualenv",
          "pip"
        ],
        "answer": "uWSGI",
        "explanation": "uWSGI is a key concept in Python."
      },
      {
        "question": "Level 10 · How does evolve across scales environment variables in Python?",
        "options": [
          "environment variables",
          "deployment",
          "virtualenv",
          "pip"
        ],
        "answer": "environment variables",
        "explanation": "environment variables is a key concept in Python."
      },
      {
        "question": "Level 10 · What is the future direction of settings module in Python?",
        "options": [
          "settings module",
          "deployment",
          "virtualenv",
          "pip"
        ],
        "answer": "settings module",
        "explanation": "settings module is a key concept in Python."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves production checklist in Python?",
        "options": [
          "production checklist",
          "deployment",
          "virtualenv",
          "pip"
        ],
        "answer": "production checklist",
        "explanation": "production checklist is a key concept in Python."
      }
    ]
  },
  "Java": {
    "Level 1": [
      {
        "question": "Level 1 · What is JVM in Java?",
        "options": [
          "JVM",
          "JRE",
          "JDK",
          "bytecode"
        ],
        "answer": "JVM",
        "explanation": "JVM is a key concept in Java."
      },
      {
        "question": "Level 1 · How would you define JRE in Java?",
        "options": [
          "JRE",
          "JVM",
          "JDK",
          "bytecode"
        ],
        "answer": "JRE",
        "explanation": "JRE is a key concept in Java."
      },
      {
        "question": "Level 1 · Which describes JDK in Java?",
        "options": [
          "JDK",
          "JVM",
          "JRE",
          "bytecode"
        ],
        "answer": "JDK",
        "explanation": "JDK is a key concept in Java."
      },
      {
        "question": "Level 1 · What does the term bytecode in Java?",
        "options": [
          "bytecode",
          "JVM",
          "JRE",
          "JDK"
        ],
        "answer": "bytecode",
        "explanation": "bytecode is a key concept in Java."
      },
      {
        "question": "Level 1 · What concept is classloader in Java?",
        "options": [
          "classloader",
          "JVM",
          "JRE",
          "JDK"
        ],
        "answer": "classloader",
        "explanation": "classloader is a key concept in Java."
      },
      {
        "question": "Level 1 · What is garbage collection in Java?",
        "options": [
          "garbage collection",
          "JVM",
          "JRE",
          "JDK"
        ],
        "answer": "garbage collection",
        "explanation": "garbage collection is a key concept in Java."
      },
      {
        "question": "Level 1 · How would you define heap vs stack in Java?",
        "options": [
          "heap vs stack",
          "JVM",
          "JRE",
          "JDK"
        ],
        "answer": "heap vs stack",
        "explanation": "heap vs stack is a key concept in Java."
      },
      {
        "question": "Level 1 · Which describes JIT compilation in Java?",
        "options": [
          "JIT compilation",
          "JVM",
          "JRE",
          "JDK"
        ],
        "answer": "JIT compilation",
        "explanation": "JIT compilation is a key concept in Java."
      },
      {
        "question": "Level 1 · What does the term memory model in Java?",
        "options": [
          "memory model",
          "JVM",
          "JRE",
          "JDK"
        ],
        "answer": "memory model",
        "explanation": "memory model is a key concept in Java."
      },
      {
        "question": "Level 1 · What concept is class path in Java?",
        "options": [
          "class path",
          "JVM",
          "JRE",
          "JDK"
        ],
        "answer": "class path",
        "explanation": "class path is a key concept in Java."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you OOP concepts in Java?",
        "options": [
          "OOP concepts",
          "inheritance",
          "polymorphism",
          "encapsulation"
        ],
        "answer": "OOP concepts",
        "explanation": "OOP concepts is a key concept in Java."
      },
      {
        "question": "Level 2 · What is the purpose of inheritance in Java?",
        "options": [
          "inheritance",
          "OOP concepts",
          "polymorphism",
          "encapsulation"
        ],
        "answer": "inheritance",
        "explanation": "inheritance is a key concept in Java."
      },
      {
        "question": "Level 2 · Which tool is used to polymorphism in Java?",
        "options": [
          "polymorphism",
          "OOP concepts",
          "inheritance",
          "encapsulation"
        ],
        "answer": "polymorphism",
        "explanation": "polymorphism is a key concept in Java."
      },
      {
        "question": "Level 2 · What does encapsulation in Java?",
        "options": [
          "encapsulation",
          "OOP concepts",
          "inheritance",
          "polymorphism"
        ],
        "answer": "encapsulation",
        "explanation": "encapsulation is a key concept in Java."
      },
      {
        "question": "Level 2 · How can you abstraction in Java?",
        "options": [
          "abstraction",
          "OOP concepts",
          "inheritance",
          "polymorphism"
        ],
        "answer": "abstraction",
        "explanation": "abstraction is a key concept in Java."
      },
      {
        "question": "Level 2 · How do you interface vs abstract class in Java?",
        "options": [
          "interface vs abstract class",
          "OOP concepts",
          "inheritance",
          "polymorphism"
        ],
        "answer": "interface vs abstract class",
        "explanation": "interface vs abstract class is a key concept in Java."
      },
      {
        "question": "Level 2 · What is the purpose of method overriding in Java?",
        "options": [
          "method overriding",
          "OOP concepts",
          "inheritance",
          "polymorphism"
        ],
        "answer": "method overriding",
        "explanation": "method overriding is a key concept in Java."
      },
      {
        "question": "Level 2 · Which tool is used to method overloading in Java?",
        "options": [
          "method overloading",
          "OOP concepts",
          "inheritance",
          "polymorphism"
        ],
        "answer": "method overloading",
        "explanation": "method overloading is a key concept in Java."
      },
      {
        "question": "Level 2 · What does super keyword in Java?",
        "options": [
          "super keyword",
          "OOP concepts",
          "inheritance",
          "polymorphism"
        ],
        "answer": "super keyword",
        "explanation": "super keyword is a key concept in Java."
      },
      {
        "question": "Level 2 · How can you this keyword in Java?",
        "options": [
          "this keyword",
          "OOP concepts",
          "inheritance",
          "polymorphism"
        ],
        "answer": "this keyword",
        "explanation": "this keyword is a key concept in Java."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between Spring Boot in Java?",
        "options": [
          "Spring Boot",
          "dependency injection",
          "IoC container",
          "auto-configuration"
        ],
        "answer": "Spring Boot",
        "explanation": "Spring Boot is a key concept in Java."
      },
      {
        "question": "Level 3 · How does dependency injection in Java?",
        "options": [
          "dependency injection",
          "Spring Boot",
          "IoC container",
          "auto-configuration"
        ],
        "answer": "dependency injection",
        "explanation": "dependency injection is a key concept in Java."
      },
      {
        "question": "Level 3 · What problem does IoC container in Java?",
        "options": [
          "IoC container",
          "Spring Boot",
          "dependency injection",
          "auto-configuration"
        ],
        "answer": "IoC container",
        "explanation": "IoC container is a key concept in Java."
      },
      {
        "question": "Level 3 · Which approach auto-configuration in Java?",
        "options": [
          "auto-configuration",
          "Spring Boot",
          "dependency injection",
          "IoC container"
        ],
        "answer": "auto-configuration",
        "explanation": "auto-configuration is a key concept in Java."
      },
      {
        "question": "Level 3 · What is the role of starters in Java?",
        "options": [
          "starters",
          "Spring Boot",
          "dependency injection",
          "IoC container"
        ],
        "answer": "starters",
        "explanation": "starters is a key concept in Java."
      },
      {
        "question": "Level 3 · What is the difference between application properties in Java?",
        "options": [
          "application properties",
          "Spring Boot",
          "dependency injection",
          "IoC container"
        ],
        "answer": "application properties",
        "explanation": "application properties is a key concept in Java."
      },
      {
        "question": "Level 3 · How does embedded server in Java?",
        "options": [
          "embedded server",
          "Spring Boot",
          "dependency injection",
          "IoC container"
        ],
        "answer": "embedded server",
        "explanation": "embedded server is a key concept in Java."
      },
      {
        "question": "Level 3 · What problem does actuator in Java?",
        "options": [
          "actuator",
          "Spring Boot",
          "dependency injection",
          "IoC container"
        ],
        "answer": "actuator",
        "explanation": "actuator is a key concept in Java."
      },
      {
        "question": "Level 3 · Which approach profiles in Java?",
        "options": [
          "profiles",
          "Spring Boot",
          "dependency injection",
          "IoC container"
        ],
        "answer": "profiles",
        "explanation": "profiles is a key concept in Java."
      },
      {
        "question": "Level 3 · What is the role of Spring Data JPA in Java?",
        "options": [
          "Spring Data JPA",
          "Spring Boot",
          "dependency injection",
          "IoC container"
        ],
        "answer": "Spring Data JPA",
        "explanation": "Spring Data JPA is a key concept in Java."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use Hibernate in Java?",
        "options": [
          "Hibernate",
          "ORM",
          "entity",
          "JPQL"
        ],
        "answer": "Hibernate",
        "explanation": "Hibernate is a key concept in Java."
      },
      {
        "question": "Level 4 · What is a real-world example of ORM in Java?",
        "options": [
          "ORM",
          "Hibernate",
          "entity",
          "JPQL"
        ],
        "answer": "ORM",
        "explanation": "ORM is a key concept in Java."
      },
      {
        "question": "Level 4 · How would you implement entity in Java?",
        "options": [
          "entity",
          "Hibernate",
          "ORM",
          "JPQL"
        ],
        "answer": "entity",
        "explanation": "entity is a key concept in Java."
      },
      {
        "question": "Level 4 · What pattern applies JPQL in Java?",
        "options": [
          "JPQL",
          "Hibernate",
          "ORM",
          "entity"
        ],
        "answer": "JPQL",
        "explanation": "JPQL is a key concept in Java."
      },
      {
        "question": "Level 4 · What strategy handles criteria API in Java?",
        "options": [
          "criteria API",
          "Hibernate",
          "ORM",
          "entity"
        ],
        "answer": "criteria API",
        "explanation": "criteria API is a key concept in Java."
      },
      {
        "question": "Level 4 · When would you use lazy loading in Java?",
        "options": [
          "lazy loading",
          "Hibernate",
          "ORM",
          "entity"
        ],
        "answer": "lazy loading",
        "explanation": "lazy loading is a key concept in Java."
      },
      {
        "question": "Level 4 · What is a real-world example of eager loading in Java?",
        "options": [
          "eager loading",
          "Hibernate",
          "ORM",
          "entity"
        ],
        "answer": "eager loading",
        "explanation": "eager loading is a key concept in Java."
      },
      {
        "question": "Level 4 · How would you implement caching in Java?",
        "options": [
          "caching",
          "Hibernate",
          "ORM",
          "entity"
        ],
        "answer": "caching",
        "explanation": "caching is a key concept in Java."
      },
      {
        "question": "Level 4 · What pattern applies first level cache in Java?",
        "options": [
          "first level cache",
          "Hibernate",
          "ORM",
          "entity"
        ],
        "answer": "first level cache",
        "explanation": "first level cache is a key concept in Java."
      },
      {
        "question": "Level 4 · What strategy handles second level cache in Java?",
        "options": [
          "second level cache",
          "Hibernate",
          "ORM",
          "entity"
        ],
        "answer": "second level cache",
        "explanation": "second level cache is a key concept in Java."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize Maven in Java?",
        "options": [
          "Maven",
          "pom.xml",
          "dependency",
          "plugin"
        ],
        "answer": "Maven",
        "explanation": "Maven is a key concept in Java."
      },
      {
        "question": "Level 5 · What is the best practice for pom.xml in Java?",
        "options": [
          "pom.xml",
          "Maven",
          "dependency",
          "plugin"
        ],
        "answer": "pom.xml",
        "explanation": "pom.xml is a key concept in Java."
      },
      {
        "question": "Level 5 · What performance consideration involves dependency in Java?",
        "options": [
          "dependency",
          "Maven",
          "pom.xml",
          "plugin"
        ],
        "answer": "dependency",
        "explanation": "dependency is a key concept in Java."
      },
      {
        "question": "Level 5 · How do you scale plugin in Java?",
        "options": [
          "plugin",
          "Maven",
          "pom.xml",
          "dependency"
        ],
        "answer": "plugin",
        "explanation": "plugin is a key concept in Java."
      },
      {
        "question": "Level 5 · What tradeoff exists when using lifecycle in Java?",
        "options": [
          "lifecycle",
          "Maven",
          "pom.xml",
          "dependency"
        ],
        "answer": "lifecycle",
        "explanation": "lifecycle is a key concept in Java."
      },
      {
        "question": "Level 5 · How do you optimize repository in Java?",
        "options": [
          "repository",
          "Maven",
          "pom.xml",
          "dependency"
        ],
        "answer": "repository",
        "explanation": "repository is a key concept in Java."
      },
      {
        "question": "Level 5 · What is the best practice for build in Java?",
        "options": [
          "build",
          "Maven",
          "pom.xml",
          "dependency"
        ],
        "answer": "build",
        "explanation": "build is a key concept in Java."
      },
      {
        "question": "Level 5 · What performance consideration involves profile in Java?",
        "options": [
          "profile",
          "Maven",
          "pom.xml",
          "dependency"
        ],
        "answer": "profile",
        "explanation": "profile is a key concept in Java."
      },
      {
        "question": "Level 5 · How do you scale Gradle vs Maven in Java?",
        "options": [
          "Gradle vs Maven",
          "Maven",
          "pom.xml",
          "dependency"
        ],
        "answer": "Gradle vs Maven",
        "explanation": "Gradle vs Maven is a key concept in Java."
      },
      {
        "question": "Level 5 · What tradeoff exists when using multi-module in Java?",
        "options": [
          "multi-module",
          "Maven",
          "pom.xml",
          "dependency"
        ],
        "answer": "multi-module",
        "explanation": "multi-module is a key concept in Java."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare collections framework in Java?",
        "options": [
          "collections framework",
          "List",
          "Set",
          "Map"
        ],
        "answer": "collections framework",
        "explanation": "collections framework is a key concept in Java."
      },
      {
        "question": "Level 6 · How is it different from List in Java?",
        "options": [
          "List",
          "collections framework",
          "Set",
          "Map"
        ],
        "answer": "List",
        "explanation": "List is a key concept in Java."
      },
      {
        "question": "Level 6 · What are the pros and cons of Set in Java?",
        "options": [
          "Set",
          "collections framework",
          "List",
          "Map"
        ],
        "answer": "Set",
        "explanation": "Set is a key concept in Java."
      },
      {
        "question": "Level 6 · What advantage does Map in Java?",
        "options": [
          "Map",
          "collections framework",
          "List",
          "Set"
        ],
        "answer": "Map",
        "explanation": "Map is a key concept in Java."
      },
      {
        "question": "Level 6 · What limitation does ArrayList in Java?",
        "options": [
          "ArrayList",
          "collections framework",
          "List",
          "Set"
        ],
        "answer": "ArrayList",
        "explanation": "ArrayList is a key concept in Java."
      },
      {
        "question": "Level 6 · Compare LinkedList in Java?",
        "options": [
          "LinkedList",
          "collections framework",
          "List",
          "Set"
        ],
        "answer": "LinkedList",
        "explanation": "LinkedList is a key concept in Java."
      },
      {
        "question": "Level 6 · How is it different from HashMap in Java?",
        "options": [
          "HashMap",
          "collections framework",
          "List",
          "Set"
        ],
        "answer": "HashMap",
        "explanation": "HashMap is a key concept in Java."
      },
      {
        "question": "Level 6 · What are the pros and cons of TreeMap in Java?",
        "options": [
          "TreeMap",
          "collections framework",
          "List",
          "Set"
        ],
        "answer": "TreeMap",
        "explanation": "TreeMap is a key concept in Java."
      },
      {
        "question": "Level 6 · What advantage does HashSet in Java?",
        "options": [
          "HashSet",
          "collections framework",
          "List",
          "Set"
        ],
        "answer": "HashSet",
        "explanation": "HashSet is a key concept in Java."
      },
      {
        "question": "Level 6 · What limitation does Comparable vs Comparator in Java?",
        "options": [
          "Comparable vs Comparator",
          "collections framework",
          "List",
          "Set"
        ],
        "answer": "Comparable vs Comparator",
        "explanation": "Comparable vs Comparator is a key concept in Java."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with streams API in Java?",
        "options": [
          "streams API",
          "lambda",
          "functional interface",
          "method reference"
        ],
        "answer": "streams API",
        "explanation": "streams API is a key concept in Java."
      },
      {
        "question": "Level 7 · What goes wrong when lambda in Java?",
        "options": [
          "lambda",
          "streams API",
          "functional interface",
          "method reference"
        ],
        "answer": "lambda",
        "explanation": "lambda is a key concept in Java."
      },
      {
        "question": "Level 7 · What common mistake involves functional interface in Java?",
        "options": [
          "functional interface",
          "streams API",
          "lambda",
          "method reference"
        ],
        "answer": "functional interface",
        "explanation": "functional interface is a key concept in Java."
      },
      {
        "question": "Level 7 · How do you monitor method reference in Java?",
        "options": [
          "method reference",
          "streams API",
          "lambda",
          "functional interface"
        ],
        "answer": "method reference",
        "explanation": "method reference is a key concept in Java."
      },
      {
        "question": "Level 7 · What failure mode occurs with optional in Java?",
        "options": [
          "optional",
          "streams API",
          "lambda",
          "functional interface"
        ],
        "answer": "optional",
        "explanation": "optional is a key concept in Java."
      },
      {
        "question": "Level 7 · How do you debug issues with parallel stream in Java?",
        "options": [
          "parallel stream",
          "streams API",
          "lambda",
          "functional interface"
        ],
        "answer": "parallel stream",
        "explanation": "parallel stream is a key concept in Java."
      },
      {
        "question": "Level 7 · What goes wrong when collectors in Java?",
        "options": [
          "collectors",
          "streams API",
          "lambda",
          "functional interface"
        ],
        "answer": "collectors",
        "explanation": "collectors is a key concept in Java."
      },
      {
        "question": "Level 7 · What common mistake involves filter map reduce in Java?",
        "options": [
          "filter map reduce",
          "streams API",
          "lambda",
          "functional interface"
        ],
        "answer": "filter map reduce",
        "explanation": "filter map reduce is a key concept in Java."
      },
      {
        "question": "Level 7 · How do you monitor stream pipeline in Java?",
        "options": [
          "stream pipeline",
          "streams API",
          "lambda",
          "functional interface"
        ],
        "answer": "stream pipeline",
        "explanation": "stream pipeline is a key concept in Java."
      },
      {
        "question": "Level 7 · What failure mode occurs with terminal vs intermediate in Java?",
        "options": [
          "terminal vs intermediate",
          "streams API",
          "lambda",
          "functional interface"
        ],
        "answer": "terminal vs intermediate",
        "explanation": "terminal vs intermediate is a key concept in Java."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves multithreading in Java?",
        "options": [
          "multithreading",
          "thread",
          "Runnable",
          "Callable"
        ],
        "answer": "multithreading",
        "explanation": "multithreading is a key concept in Java."
      },
      {
        "question": "Level 8 · How do you secure thread in Java?",
        "options": [
          "thread",
          "multithreading",
          "Runnable",
          "Callable"
        ],
        "answer": "thread",
        "explanation": "thread is a key concept in Java."
      },
      {
        "question": "Level 8 · What testing strategy covers Runnable in Java?",
        "options": [
          "Runnable",
          "multithreading",
          "thread",
          "Callable"
        ],
        "answer": "Runnable",
        "explanation": "Runnable is a key concept in Java."
      },
      {
        "question": "Level 8 · How do you ensure reliability of Callable in Java?",
        "options": [
          "Callable",
          "multithreading",
          "thread",
          "Runnable"
        ],
        "answer": "Callable",
        "explanation": "Callable is a key concept in Java."
      },
      {
        "question": "Level 8 · What error handling applies to ExecutorService in Java?",
        "options": [
          "ExecutorService",
          "multithreading",
          "thread",
          "Runnable"
        ],
        "answer": "ExecutorService",
        "explanation": "ExecutorService is a key concept in Java."
      },
      {
        "question": "Level 8 · What security concern involves synchronized in Java?",
        "options": [
          "synchronized",
          "multithreading",
          "thread",
          "Runnable"
        ],
        "answer": "synchronized",
        "explanation": "synchronized is a key concept in Java."
      },
      {
        "question": "Level 8 · How do you secure volatile in Java?",
        "options": [
          "volatile",
          "multithreading",
          "thread",
          "Runnable"
        ],
        "answer": "volatile",
        "explanation": "volatile is a key concept in Java."
      },
      {
        "question": "Level 8 · What testing strategy covers atomic classes in Java?",
        "options": [
          "atomic classes",
          "multithreading",
          "thread",
          "Runnable"
        ],
        "answer": "atomic classes",
        "explanation": "atomic classes is a key concept in Java."
      },
      {
        "question": "Level 8 · How do you ensure reliability of locks in Java?",
        "options": [
          "locks",
          "multithreading",
          "thread",
          "Runnable"
        ],
        "answer": "locks",
        "explanation": "locks is a key concept in Java."
      },
      {
        "question": "Level 8 · What error handling applies to concurrent collections in Java?",
        "options": [
          "concurrent collections",
          "multithreading",
          "thread",
          "Runnable"
        ],
        "answer": "concurrent collections",
        "explanation": "concurrent collections is a key concept in Java."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with exception handling in Java?",
        "options": [
          "exception handling",
          "try catch finally",
          "checked vs unchecked",
          "custom exception"
        ],
        "answer": "exception handling",
        "explanation": "exception handling is a key concept in Java."
      },
      {
        "question": "Level 9 · What architectural pattern uses try catch finally in Java?",
        "options": [
          "try catch finally",
          "exception handling",
          "checked vs unchecked",
          "custom exception"
        ],
        "answer": "try catch finally",
        "explanation": "try catch finally is a key concept in Java."
      },
      {
        "question": "Level 9 · How would you design a system with checked vs unchecked in Java?",
        "options": [
          "checked vs unchecked",
          "exception handling",
          "try catch finally",
          "custom exception"
        ],
        "answer": "checked vs unchecked",
        "explanation": "checked vs unchecked is a key concept in Java."
      },
      {
        "question": "Level 9 · What dependency does have custom exception in Java?",
        "options": [
          "custom exception",
          "exception handling",
          "try catch finally",
          "checked vs unchecked"
        ],
        "answer": "custom exception",
        "explanation": "custom exception is a key concept in Java."
      },
      {
        "question": "Level 9 · How do you migrate from try-with-resources in Java?",
        "options": [
          "try-with-resources",
          "exception handling",
          "try catch finally",
          "checked vs unchecked"
        ],
        "answer": "try-with-resources",
        "explanation": "try-with-resources is a key concept in Java."
      },
      {
        "question": "Level 9 · How does integrate with multi-catch in Java?",
        "options": [
          "multi-catch",
          "exception handling",
          "try catch finally",
          "checked vs unchecked"
        ],
        "answer": "multi-catch",
        "explanation": "multi-catch is a key concept in Java."
      },
      {
        "question": "Level 9 · What architectural pattern uses exception propagation in Java?",
        "options": [
          "exception propagation",
          "exception handling",
          "try catch finally",
          "checked vs unchecked"
        ],
        "answer": "exception propagation",
        "explanation": "exception propagation is a key concept in Java."
      },
      {
        "question": "Level 9 · How would you design a system with assertion in Java?",
        "options": [
          "assertion",
          "exception handling",
          "try catch finally",
          "checked vs unchecked"
        ],
        "answer": "assertion",
        "explanation": "assertion is a key concept in Java."
      },
      {
        "question": "Level 9 · What dependency does have logging in Java?",
        "options": [
          "logging",
          "exception handling",
          "try catch finally",
          "checked vs unchecked"
        ],
        "answer": "logging",
        "explanation": "logging is a key concept in Java."
      },
      {
        "question": "Level 9 · How do you migrate from SLF4J in Java?",
        "options": [
          "SLF4J",
          "exception handling",
          "try catch finally",
          "checked vs unchecked"
        ],
        "answer": "SLF4J",
        "explanation": "SLF4J is a key concept in Java."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of REST API in Java?",
        "options": [
          "REST API",
          "@RestController",
          "@RequestMapping",
          "@GetMapping"
        ],
        "answer": "REST API",
        "explanation": "REST API is a key concept in Java."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of @RestController in Java?",
        "options": [
          "@RestController",
          "REST API",
          "@RequestMapping",
          "@GetMapping"
        ],
        "answer": "@RestController",
        "explanation": "@RestController is a key concept in Java."
      },
      {
        "question": "Level 10 · How does evolve across scales @RequestMapping in Java?",
        "options": [
          "@RequestMapping",
          "REST API",
          "@RestController",
          "@GetMapping"
        ],
        "answer": "@RequestMapping",
        "explanation": "@RequestMapping is a key concept in Java."
      },
      {
        "question": "Level 10 · What is the future direction of @GetMapping in Java?",
        "options": [
          "@GetMapping",
          "REST API",
          "@RestController",
          "@RequestMapping"
        ],
        "answer": "@GetMapping",
        "explanation": "@GetMapping is a key concept in Java."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves @PostMapping in Java?",
        "options": [
          "@PostMapping",
          "REST API",
          "@RestController",
          "@RequestMapping"
        ],
        "answer": "@PostMapping",
        "explanation": "@PostMapping is a key concept in Java."
      },
      {
        "question": "Level 10 · What is the theoretical basis of @RequestBody in Java?",
        "options": [
          "@RequestBody",
          "REST API",
          "@RestController",
          "@RequestMapping"
        ],
        "answer": "@RequestBody",
        "explanation": "@RequestBody is a key concept in Java."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of @PathVariable in Java?",
        "options": [
          "@PathVariable",
          "REST API",
          "@RestController",
          "@RequestMapping"
        ],
        "answer": "@PathVariable",
        "explanation": "@PathVariable is a key concept in Java."
      },
      {
        "question": "Level 10 · How does evolve across scales @RequestParam in Java?",
        "options": [
          "@RequestParam",
          "REST API",
          "@RestController",
          "@RequestMapping"
        ],
        "answer": "@RequestParam",
        "explanation": "@RequestParam is a key concept in Java."
      },
      {
        "question": "Level 10 · What is the future direction of ResponseEntity in Java?",
        "options": [
          "ResponseEntity",
          "REST API",
          "@RestController",
          "@RequestMapping"
        ],
        "answer": "ResponseEntity",
        "explanation": "ResponseEntity is a key concept in Java."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves error handling in Java?",
        "options": [
          "error handling",
          "REST API",
          "@RestController",
          "@RequestMapping"
        ],
        "answer": "error handling",
        "explanation": "error handling is a key concept in Java."
      }
    ]
  },
  "Git": {
    "Level 1": [
      {
        "question": "Level 1 · What is repository in Git?",
        "options": [
          "repository",
          "commit",
          "branch",
          "HEAD"
        ],
        "answer": "repository",
        "explanation": "repository is a key concept in Git."
      },
      {
        "question": "Level 1 · How would you define commit in Git?",
        "options": [
          "commit",
          "repository",
          "branch",
          "HEAD"
        ],
        "answer": "commit",
        "explanation": "commit is a key concept in Git."
      },
      {
        "question": "Level 1 · Which describes branch in Git?",
        "options": [
          "branch",
          "repository",
          "commit",
          "HEAD"
        ],
        "answer": "branch",
        "explanation": "branch is a key concept in Git."
      },
      {
        "question": "Level 1 · What does the term HEAD in Git?",
        "options": [
          "HEAD",
          "repository",
          "commit",
          "branch"
        ],
        "answer": "HEAD",
        "explanation": "HEAD is a key concept in Git."
      },
      {
        "question": "Level 1 · What concept is working directory in Git?",
        "options": [
          "working directory",
          "repository",
          "commit",
          "branch"
        ],
        "answer": "working directory",
        "explanation": "working directory is a key concept in Git."
      },
      {
        "question": "Level 1 · What is staging area in Git?",
        "options": [
          "staging area",
          "repository",
          "commit",
          "branch"
        ],
        "answer": "staging area",
        "explanation": "staging area is a key concept in Git."
      },
      {
        "question": "Level 1 · How would you define index in Git?",
        "options": [
          "index",
          "repository",
          "commit",
          "branch"
        ],
        "answer": "index",
        "explanation": "index is a key concept in Git."
      },
      {
        "question": "Level 1 · Which describes blob in Git?",
        "options": [
          "blob",
          "repository",
          "commit",
          "branch"
        ],
        "answer": "blob",
        "explanation": "blob is a key concept in Git."
      },
      {
        "question": "Level 1 · What does the term tree in Git?",
        "options": [
          "tree",
          "repository",
          "commit",
          "branch"
        ],
        "answer": "tree",
        "explanation": "tree is a key concept in Git."
      },
      {
        "question": "Level 1 · What concept is SHA hash in Git?",
        "options": [
          "SHA hash",
          "repository",
          "commit",
          "branch"
        ],
        "answer": "SHA hash",
        "explanation": "SHA hash is a key concept in Git."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you git init in Git?",
        "options": [
          "git init",
          "git clone",
          "git add",
          "git commit"
        ],
        "answer": "git init",
        "explanation": "git init is a key concept in Git."
      },
      {
        "question": "Level 2 · What is the purpose of git clone in Git?",
        "options": [
          "git clone",
          "git init",
          "git add",
          "git commit"
        ],
        "answer": "git clone",
        "explanation": "git clone is a key concept in Git."
      },
      {
        "question": "Level 2 · Which tool is used to git add in Git?",
        "options": [
          "git add",
          "git init",
          "git clone",
          "git commit"
        ],
        "answer": "git add",
        "explanation": "git add is a key concept in Git."
      },
      {
        "question": "Level 2 · What does git commit in Git?",
        "options": [
          "git commit",
          "git init",
          "git clone",
          "git add"
        ],
        "answer": "git commit",
        "explanation": "git commit is a key concept in Git."
      },
      {
        "question": "Level 2 · How can you git status in Git?",
        "options": [
          "git status",
          "git init",
          "git clone",
          "git add"
        ],
        "answer": "git status",
        "explanation": "git status is a key concept in Git."
      },
      {
        "question": "Level 2 · How do you git log in Git?",
        "options": [
          "git log",
          "git init",
          "git clone",
          "git add"
        ],
        "answer": "git log",
        "explanation": "git log is a key concept in Git."
      },
      {
        "question": "Level 2 · What is the purpose of git diff in Git?",
        "options": [
          "git diff",
          "git init",
          "git clone",
          "git add"
        ],
        "answer": "git diff",
        "explanation": "git diff is a key concept in Git."
      },
      {
        "question": "Level 2 · Which tool is used to git show in Git?",
        "options": [
          "git show",
          "git init",
          "git clone",
          "git add"
        ],
        "answer": "git show",
        "explanation": "git show is a key concept in Git."
      },
      {
        "question": "Level 2 · What does git rm in Git?",
        "options": [
          "git rm",
          "git init",
          "git clone",
          "git add"
        ],
        "answer": "git rm",
        "explanation": "git rm is a key concept in Git."
      },
      {
        "question": "Level 2 · How can you git mv in Git?",
        "options": [
          "git mv",
          "git init",
          "git clone",
          "git add"
        ],
        "answer": "git mv",
        "explanation": "git mv is a key concept in Git."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between branching in Git?",
        "options": [
          "branching",
          "git branch",
          "git checkout",
          "git switch"
        ],
        "answer": "branching",
        "explanation": "branching is a key concept in Git."
      },
      {
        "question": "Level 3 · How does git branch in Git?",
        "options": [
          "git branch",
          "branching",
          "git checkout",
          "git switch"
        ],
        "answer": "git branch",
        "explanation": "git branch is a key concept in Git."
      },
      {
        "question": "Level 3 · What problem does git checkout in Git?",
        "options": [
          "git checkout",
          "branching",
          "git branch",
          "git switch"
        ],
        "answer": "git checkout",
        "explanation": "git checkout is a key concept in Git."
      },
      {
        "question": "Level 3 · Which approach git switch in Git?",
        "options": [
          "git switch",
          "branching",
          "git branch",
          "git checkout"
        ],
        "answer": "git switch",
        "explanation": "git switch is a key concept in Git."
      },
      {
        "question": "Level 3 · What is the role of git merge in Git?",
        "options": [
          "git merge",
          "branching",
          "git branch",
          "git checkout"
        ],
        "answer": "git merge",
        "explanation": "git merge is a key concept in Git."
      },
      {
        "question": "Level 3 · What is the difference between merge conflict in Git?",
        "options": [
          "merge conflict",
          "branching",
          "git branch",
          "git checkout"
        ],
        "answer": "merge conflict",
        "explanation": "merge conflict is a key concept in Git."
      },
      {
        "question": "Level 3 · How does fast-forward in Git?",
        "options": [
          "fast-forward",
          "branching",
          "git branch",
          "git checkout"
        ],
        "answer": "fast-forward",
        "explanation": "fast-forward is a key concept in Git."
      },
      {
        "question": "Level 3 · What problem does three-way merge in Git?",
        "options": [
          "three-way merge",
          "branching",
          "git branch",
          "git checkout"
        ],
        "answer": "three-way merge",
        "explanation": "three-way merge is a key concept in Git."
      },
      {
        "question": "Level 3 · Which approach merge commit in Git?",
        "options": [
          "merge commit",
          "branching",
          "git branch",
          "git checkout"
        ],
        "answer": "merge commit",
        "explanation": "merge commit is a key concept in Git."
      },
      {
        "question": "Level 3 · What is the role of branch strategy in Git?",
        "options": [
          "branch strategy",
          "branching",
          "git branch",
          "git checkout"
        ],
        "answer": "branch strategy",
        "explanation": "branch strategy is a key concept in Git."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use remote in Git?",
        "options": [
          "remote",
          "git remote",
          "git push",
          "git pull"
        ],
        "answer": "remote",
        "explanation": "remote is a key concept in Git."
      },
      {
        "question": "Level 4 · What is a real-world example of git remote in Git?",
        "options": [
          "git remote",
          "remote",
          "git push",
          "git pull"
        ],
        "answer": "git remote",
        "explanation": "git remote is a key concept in Git."
      },
      {
        "question": "Level 4 · How would you implement git push in Git?",
        "options": [
          "git push",
          "remote",
          "git remote",
          "git pull"
        ],
        "answer": "git push",
        "explanation": "git push is a key concept in Git."
      },
      {
        "question": "Level 4 · What pattern applies git pull in Git?",
        "options": [
          "git pull",
          "remote",
          "git remote",
          "git push"
        ],
        "answer": "git pull",
        "explanation": "git pull is a key concept in Git."
      },
      {
        "question": "Level 4 · What strategy handles git fetch in Git?",
        "options": [
          "git fetch",
          "remote",
          "git remote",
          "git push"
        ],
        "answer": "git fetch",
        "explanation": "git fetch is a key concept in Git."
      },
      {
        "question": "Level 4 · When would you use origin in Git?",
        "options": [
          "origin",
          "remote",
          "git remote",
          "git push"
        ],
        "answer": "origin",
        "explanation": "origin is a key concept in Git."
      },
      {
        "question": "Level 4 · What is a real-world example of upstream in Git?",
        "options": [
          "upstream",
          "remote",
          "git remote",
          "git push"
        ],
        "answer": "upstream",
        "explanation": "upstream is a key concept in Git."
      },
      {
        "question": "Level 4 · How would you implement tracking branch in Git?",
        "options": [
          "tracking branch",
          "remote",
          "git remote",
          "git push"
        ],
        "answer": "tracking branch",
        "explanation": "tracking branch is a key concept in Git."
      },
      {
        "question": "Level 4 · What pattern applies remote branch in Git?",
        "options": [
          "remote branch",
          "remote",
          "git remote",
          "git push"
        ],
        "answer": "remote branch",
        "explanation": "remote branch is a key concept in Git."
      },
      {
        "question": "Level 4 · What strategy handles git ls-remote in Git?",
        "options": [
          "git ls-remote",
          "remote",
          "git remote",
          "git push"
        ],
        "answer": "git ls-remote",
        "explanation": "git ls-remote is a key concept in Git."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize rebasing in Git?",
        "options": [
          "rebasing",
          "git rebase",
          "interactive rebase",
          "rebase vs merge"
        ],
        "answer": "rebasing",
        "explanation": "rebasing is a key concept in Git."
      },
      {
        "question": "Level 5 · What is the best practice for git rebase in Git?",
        "options": [
          "git rebase",
          "rebasing",
          "interactive rebase",
          "rebase vs merge"
        ],
        "answer": "git rebase",
        "explanation": "git rebase is a key concept in Git."
      },
      {
        "question": "Level 5 · What performance consideration involves interactive rebase in Git?",
        "options": [
          "interactive rebase",
          "rebasing",
          "git rebase",
          "rebase vs merge"
        ],
        "answer": "interactive rebase",
        "explanation": "interactive rebase is a key concept in Git."
      },
      {
        "question": "Level 5 · How do you scale rebase vs merge in Git?",
        "options": [
          "rebase vs merge",
          "rebasing",
          "git rebase",
          "interactive rebase"
        ],
        "answer": "rebase vs merge",
        "explanation": "rebase vs merge is a key concept in Git."
      },
      {
        "question": "Level 5 · What tradeoff exists when using squash in Git?",
        "options": [
          "squash",
          "rebasing",
          "git rebase",
          "interactive rebase"
        ],
        "answer": "squash",
        "explanation": "squash is a key concept in Git."
      },
      {
        "question": "Level 5 · How do you optimize reword in Git?",
        "options": [
          "reword",
          "rebasing",
          "git rebase",
          "interactive rebase"
        ],
        "answer": "reword",
        "explanation": "reword is a key concept in Git."
      },
      {
        "question": "Level 5 · What is the best practice for reorder in Git?",
        "options": [
          "reorder",
          "rebasing",
          "git rebase",
          "interactive rebase"
        ],
        "answer": "reorder",
        "explanation": "reorder is a key concept in Git."
      },
      {
        "question": "Level 5 · What performance consideration involves drop in Git?",
        "options": [
          "drop",
          "rebasing",
          "git rebase",
          "interactive rebase"
        ],
        "answer": "drop",
        "explanation": "drop is a key concept in Git."
      },
      {
        "question": "Level 5 · How do you scale fixup in Git?",
        "options": [
          "fixup",
          "rebasing",
          "git rebase",
          "interactive rebase"
        ],
        "answer": "fixup",
        "explanation": "fixup is a key concept in Git."
      },
      {
        "question": "Level 5 · What tradeoff exists when using onto in Git?",
        "options": [
          "onto",
          "rebasing",
          "git rebase",
          "interactive rebase"
        ],
        "answer": "onto",
        "explanation": "onto is a key concept in Git."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare GitHub flow in Git?",
        "options": [
          "GitHub flow",
          "feature branch",
          "pull request",
          "code review"
        ],
        "answer": "GitHub flow",
        "explanation": "GitHub flow is a key concept in Git."
      },
      {
        "question": "Level 6 · How is it different from feature branch in Git?",
        "options": [
          "feature branch",
          "GitHub flow",
          "pull request",
          "code review"
        ],
        "answer": "feature branch",
        "explanation": "feature branch is a key concept in Git."
      },
      {
        "question": "Level 6 · What are the pros and cons of pull request in Git?",
        "options": [
          "pull request",
          "GitHub flow",
          "feature branch",
          "code review"
        ],
        "answer": "pull request",
        "explanation": "pull request is a key concept in Git."
      },
      {
        "question": "Level 6 · What advantage does code review in Git?",
        "options": [
          "code review",
          "GitHub flow",
          "feature branch",
          "pull request"
        ],
        "answer": "code review",
        "explanation": "code review is a key concept in Git."
      },
      {
        "question": "Level 6 · What limitation does protected branch in Git?",
        "options": [
          "protected branch",
          "GitHub flow",
          "feature branch",
          "pull request"
        ],
        "answer": "protected branch",
        "explanation": "protected branch is a key concept in Git."
      },
      {
        "question": "Level 6 · Compare merge queue in Git?",
        "options": [
          "merge queue",
          "GitHub flow",
          "feature branch",
          "pull request"
        ],
        "answer": "merge queue",
        "explanation": "merge queue is a key concept in Git."
      },
      {
        "question": "Level 6 · How is it different from CI checks in Git?",
        "options": [
          "CI checks",
          "GitHub flow",
          "feature branch",
          "pull request"
        ],
        "answer": "CI checks",
        "explanation": "CI checks is a key concept in Git."
      },
      {
        "question": "Level 6 · What are the pros and cons of git stash in Git?",
        "options": [
          "git stash",
          "GitHub flow",
          "feature branch",
          "pull request"
        ],
        "answer": "git stash",
        "explanation": "git stash is a key concept in Git."
      },
      {
        "question": "Level 6 · What advantage does git tag in Git?",
        "options": [
          "git tag",
          "GitHub flow",
          "feature branch",
          "pull request"
        ],
        "answer": "git tag",
        "explanation": "git tag is a key concept in Git."
      },
      {
        "question": "Level 6 · What limitation does release in Git?",
        "options": [
          "release",
          "GitHub flow",
          "feature branch",
          "pull request"
        ],
        "answer": "release",
        "explanation": "release is a key concept in Git."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with undoing changes in Git?",
        "options": [
          "undoing changes",
          "git reset",
          "git revert",
          "git restore"
        ],
        "answer": "undoing changes",
        "explanation": "undoing changes is a key concept in Git."
      },
      {
        "question": "Level 7 · What goes wrong when git reset in Git?",
        "options": [
          "git reset",
          "undoing changes",
          "git revert",
          "git restore"
        ],
        "answer": "git reset",
        "explanation": "git reset is a key concept in Git."
      },
      {
        "question": "Level 7 · What common mistake involves git revert in Git?",
        "options": [
          "git revert",
          "undoing changes",
          "git reset",
          "git restore"
        ],
        "answer": "git revert",
        "explanation": "git revert is a key concept in Git."
      },
      {
        "question": "Level 7 · How do you monitor git restore in Git?",
        "options": [
          "git restore",
          "undoing changes",
          "git reset",
          "git revert"
        ],
        "answer": "git restore",
        "explanation": "git restore is a key concept in Git."
      },
      {
        "question": "Level 7 · What failure mode occurs with reset soft mixed hard in Git?",
        "options": [
          "reset soft mixed hard",
          "undoing changes",
          "git reset",
          "git revert"
        ],
        "answer": "reset soft mixed hard",
        "explanation": "reset soft mixed hard is a key concept in Git."
      },
      {
        "question": "Level 7 · How do you debug issues with reflog in Git?",
        "options": [
          "reflog",
          "undoing changes",
          "git reset",
          "git revert"
        ],
        "answer": "reflog",
        "explanation": "reflog is a key concept in Git."
      },
      {
        "question": "Level 7 · What goes wrong when cherry-pick in Git?",
        "options": [
          "cherry-pick",
          "undoing changes",
          "git reset",
          "git revert"
        ],
        "answer": "cherry-pick",
        "explanation": "cherry-pick is a key concept in Git."
      },
      {
        "question": "Level 7 · What common mistake involves amend in Git?",
        "options": [
          "amend",
          "undoing changes",
          "git reset",
          "git revert"
        ],
        "answer": "amend",
        "explanation": "amend is a key concept in Git."
      },
      {
        "question": "Level 7 · How do you monitor clean in Git?",
        "options": [
          "clean",
          "undoing changes",
          "git reset",
          "git revert"
        ],
        "answer": "clean",
        "explanation": "clean is a key concept in Git."
      },
      {
        "question": "Level 7 · What failure mode occurs with checkout specific file in Git?",
        "options": [
          "checkout specific file",
          "undoing changes",
          "git reset",
          "git revert"
        ],
        "answer": "checkout specific file",
        "explanation": "checkout specific file is a key concept in Git."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves submodules in Git?",
        "options": [
          "submodules",
          "git submodule",
          "git subtree",
          "monorepo vs multi-repo"
        ],
        "answer": "submodules",
        "explanation": "submodules is a key concept in Git."
      },
      {
        "question": "Level 8 · How do you secure git submodule in Git?",
        "options": [
          "git submodule",
          "submodules",
          "git subtree",
          "monorepo vs multi-repo"
        ],
        "answer": "git submodule",
        "explanation": "git submodule is a key concept in Git."
      },
      {
        "question": "Level 8 · What testing strategy covers git subtree in Git?",
        "options": [
          "git subtree",
          "submodules",
          "git submodule",
          "monorepo vs multi-repo"
        ],
        "answer": "git subtree",
        "explanation": "git subtree is a key concept in Git."
      },
      {
        "question": "Level 8 · How do you ensure reliability of monorepo vs multi-repo in Git?",
        "options": [
          "monorepo vs multi-repo",
          "submodules",
          "git submodule",
          "git subtree"
        ],
        "answer": "monorepo vs multi-repo",
        "explanation": "monorepo vs multi-repo is a key concept in Git."
      },
      {
        "question": "Level 8 · What error handling applies to workspace in Git?",
        "options": [
          "workspace",
          "submodules",
          "git submodule",
          "git subtree"
        ],
        "answer": "workspace",
        "explanation": "workspace is a key concept in Git."
      },
      {
        "question": "Level 8 · What security concern involves sparse checkout in Git?",
        "options": [
          "sparse checkout",
          "submodules",
          "git submodule",
          "git subtree"
        ],
        "answer": "sparse checkout",
        "explanation": "sparse checkout is a key concept in Git."
      },
      {
        "question": "Level 8 · How do you secure shallow clone in Git?",
        "options": [
          "shallow clone",
          "submodules",
          "git submodule",
          "git subtree"
        ],
        "answer": "shallow clone",
        "explanation": "shallow clone is a key concept in Git."
      },
      {
        "question": "Level 8 · What testing strategy covers bare repository in Git?",
        "options": [
          "bare repository",
          "submodules",
          "git submodule",
          "git subtree"
        ],
        "answer": "bare repository",
        "explanation": "bare repository is a key concept in Git."
      },
      {
        "question": "Level 8 · How do you ensure reliability of hook in Git?",
        "options": [
          "hook",
          "submodules",
          "git submodule",
          "git subtree"
        ],
        "answer": "hook",
        "explanation": "hook is a key concept in Git."
      },
      {
        "question": "Level 8 · What error handling applies to pre-commit in Git?",
        "options": [
          "pre-commit",
          "submodules",
          "git submodule",
          "git subtree"
        ],
        "answer": "pre-commit",
        "explanation": "pre-commit is a key concept in Git."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with collaboration in Git?",
        "options": [
          "collaboration",
          "fork",
          "clone upstream",
          "sync fork"
        ],
        "answer": "collaboration",
        "explanation": "collaboration is a key concept in Git."
      },
      {
        "question": "Level 9 · What architectural pattern uses fork in Git?",
        "options": [
          "fork",
          "collaboration",
          "clone upstream",
          "sync fork"
        ],
        "answer": "fork",
        "explanation": "fork is a key concept in Git."
      },
      {
        "question": "Level 9 · How would you design a system with clone upstream in Git?",
        "options": [
          "clone upstream",
          "collaboration",
          "fork",
          "sync fork"
        ],
        "answer": "clone upstream",
        "explanation": "clone upstream is a key concept in Git."
      },
      {
        "question": "Level 9 · What dependency does have sync fork in Git?",
        "options": [
          "sync fork",
          "collaboration",
          "fork",
          "clone upstream"
        ],
        "answer": "sync fork",
        "explanation": "sync fork is a key concept in Git."
      },
      {
        "question": "Level 9 · How do you migrate from git blame in Git?",
        "options": [
          "git blame",
          "collaboration",
          "fork",
          "clone upstream"
        ],
        "answer": "git blame",
        "explanation": "git blame is a key concept in Git."
      },
      {
        "question": "Level 9 · How does integrate with bisect in Git?",
        "options": [
          "bisect",
          "collaboration",
          "fork",
          "clone upstream"
        ],
        "answer": "bisect",
        "explanation": "bisect is a key concept in Git."
      },
      {
        "question": "Level 9 · What architectural pattern uses worktree in Git?",
        "options": [
          "worktree",
          "collaboration",
          "fork",
          "clone upstream"
        ],
        "answer": "worktree",
        "explanation": "worktree is a key concept in Git."
      },
      {
        "question": "Level 9 · How would you design a system with archive in Git?",
        "options": [
          "archive",
          "collaboration",
          "fork",
          "clone upstream"
        ],
        "answer": "archive",
        "explanation": "archive is a key concept in Git."
      },
      {
        "question": "Level 9 · What dependency does have patch in Git?",
        "options": [
          "patch",
          "collaboration",
          "fork",
          "clone upstream"
        ],
        "answer": "patch",
        "explanation": "patch is a key concept in Git."
      },
      {
        "question": "Level 9 · How do you migrate from format-patch in Git?",
        "options": [
          "format-patch",
          "collaboration",
          "fork",
          "clone upstream"
        ],
        "answer": "format-patch",
        "explanation": "format-patch is a key concept in Git."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of advanced in Git?",
        "options": [
          "advanced",
          "rerere",
          "git notes",
          "replace"
        ],
        "answer": "advanced",
        "explanation": "advanced is a key concept in Git."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of rerere in Git?",
        "options": [
          "rerere",
          "advanced",
          "git notes",
          "replace"
        ],
        "answer": "rerere",
        "explanation": "rerere is a key concept in Git."
      },
      {
        "question": "Level 10 · How does evolve across scales git notes in Git?",
        "options": [
          "git notes",
          "advanced",
          "rerere",
          "replace"
        ],
        "answer": "git notes",
        "explanation": "git notes is a key concept in Git."
      },
      {
        "question": "Level 10 · What is the future direction of replace in Git?",
        "options": [
          "replace",
          "advanced",
          "rerere",
          "git notes"
        ],
        "answer": "replace",
        "explanation": "replace is a key concept in Git."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves filter-branch in Git?",
        "options": [
          "filter-branch",
          "advanced",
          "rerere",
          "git notes"
        ],
        "answer": "filter-branch",
        "explanation": "filter-branch is a key concept in Git."
      },
      {
        "question": "Level 10 · What is the theoretical basis of git fsck in Git?",
        "options": [
          "git fsck",
          "advanced",
          "rerere",
          "git notes"
        ],
        "answer": "git fsck",
        "explanation": "git fsck is a key concept in Git."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of git gc in Git?",
        "options": [
          "git gc",
          "advanced",
          "rerere",
          "git notes"
        ],
        "answer": "git gc",
        "explanation": "git gc is a key concept in Git."
      },
      {
        "question": "Level 10 · How does evolve across scales pack files in Git?",
        "options": [
          "pack files",
          "advanced",
          "rerere",
          "git notes"
        ],
        "answer": "pack files",
        "explanation": "pack files is a key concept in Git."
      },
      {
        "question": "Level 10 · What is the future direction of partial clone in Git?",
        "options": [
          "partial clone",
          "advanced",
          "rerere",
          "git notes"
        ],
        "answer": "partial clone",
        "explanation": "partial clone is a key concept in Git."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves bundle in Git?",
        "options": [
          "bundle",
          "advanced",
          "rerere",
          "git notes"
        ],
        "answer": "bundle",
        "explanation": "bundle is a key concept in Git."
      }
    ]
  },
  "Linux": {
    "Level 1": [
      {
        "question": "Level 1 · What is file system in Linux?",
        "options": [
          "file system",
          "root directory",
          "home",
          "etc"
        ],
        "answer": "file system",
        "explanation": "file system is a key concept in Linux."
      },
      {
        "question": "Level 1 · How would you define root directory in Linux?",
        "options": [
          "root directory",
          "file system",
          "home",
          "etc"
        ],
        "answer": "root directory",
        "explanation": "root directory is a key concept in Linux."
      },
      {
        "question": "Level 1 · Which describes home in Linux?",
        "options": [
          "home",
          "file system",
          "root directory",
          "etc"
        ],
        "answer": "home",
        "explanation": "home is a key concept in Linux."
      },
      {
        "question": "Level 1 · What does the term etc in Linux?",
        "options": [
          "etc",
          "file system",
          "root directory",
          "home"
        ],
        "answer": "etc",
        "explanation": "etc is a key concept in Linux."
      },
      {
        "question": "Level 1 · What concept is var in Linux?",
        "options": [
          "var",
          "file system",
          "root directory",
          "home"
        ],
        "answer": "var",
        "explanation": "var is a key concept in Linux."
      },
      {
        "question": "Level 1 · What is usr in Linux?",
        "options": [
          "usr",
          "file system",
          "root directory",
          "home"
        ],
        "answer": "usr",
        "explanation": "usr is a key concept in Linux."
      },
      {
        "question": "Level 1 · How would you define bin in Linux?",
        "options": [
          "bin",
          "file system",
          "root directory",
          "home"
        ],
        "answer": "bin",
        "explanation": "bin is a key concept in Linux."
      },
      {
        "question": "Level 1 · Which describes dev in Linux?",
        "options": [
          "dev",
          "file system",
          "root directory",
          "home"
        ],
        "answer": "dev",
        "explanation": "dev is a key concept in Linux."
      },
      {
        "question": "Level 1 · What does the term proc in Linux?",
        "options": [
          "proc",
          "file system",
          "root directory",
          "home"
        ],
        "answer": "proc",
        "explanation": "proc is a key concept in Linux."
      },
      {
        "question": "Level 1 · What concept is mount points in Linux?",
        "options": [
          "mount points",
          "file system",
          "root directory",
          "home"
        ],
        "answer": "mount points",
        "explanation": "mount points is a key concept in Linux."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you file permissions in Linux?",
        "options": [
          "file permissions",
          "chmod",
          "chown",
          "chgrp"
        ],
        "answer": "file permissions",
        "explanation": "file permissions is a key concept in Linux."
      },
      {
        "question": "Level 2 · What is the purpose of chmod in Linux?",
        "options": [
          "chmod",
          "file permissions",
          "chown",
          "chgrp"
        ],
        "answer": "chmod",
        "explanation": "chmod is a key concept in Linux."
      },
      {
        "question": "Level 2 · Which tool is used to chown in Linux?",
        "options": [
          "chown",
          "file permissions",
          "chmod",
          "chgrp"
        ],
        "answer": "chown",
        "explanation": "chown is a key concept in Linux."
      },
      {
        "question": "Level 2 · What does chgrp in Linux?",
        "options": [
          "chgrp",
          "file permissions",
          "chmod",
          "chown"
        ],
        "answer": "chgrp",
        "explanation": "chgrp is a key concept in Linux."
      },
      {
        "question": "Level 2 · How can you umask in Linux?",
        "options": [
          "umask",
          "file permissions",
          "chmod",
          "chown"
        ],
        "answer": "umask",
        "explanation": "umask is a key concept in Linux."
      },
      {
        "question": "Level 2 · How do you rwx in Linux?",
        "options": [
          "rwx",
          "file permissions",
          "chmod",
          "chown"
        ],
        "answer": "rwx",
        "explanation": "rwx is a key concept in Linux."
      },
      {
        "question": "Level 2 · What is the purpose of setuid in Linux?",
        "options": [
          "setuid",
          "file permissions",
          "chmod",
          "chown"
        ],
        "answer": "setuid",
        "explanation": "setuid is a key concept in Linux."
      },
      {
        "question": "Level 2 · Which tool is used to setgid in Linux?",
        "options": [
          "setgid",
          "file permissions",
          "chmod",
          "chown"
        ],
        "answer": "setgid",
        "explanation": "setgid is a key concept in Linux."
      },
      {
        "question": "Level 2 · What does sticky bit in Linux?",
        "options": [
          "sticky bit",
          "file permissions",
          "chmod",
          "chown"
        ],
        "answer": "sticky bit",
        "explanation": "sticky bit is a key concept in Linux."
      },
      {
        "question": "Level 2 · How can you ACL in Linux?",
        "options": [
          "ACL",
          "file permissions",
          "chmod",
          "chown"
        ],
        "answer": "ACL",
        "explanation": "ACL is a key concept in Linux."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between process management in Linux?",
        "options": [
          "process management",
          "ps",
          "top",
          "htop"
        ],
        "answer": "process management",
        "explanation": "process management is a key concept in Linux."
      },
      {
        "question": "Level 3 · How does ps in Linux?",
        "options": [
          "ps",
          "process management",
          "top",
          "htop"
        ],
        "answer": "ps",
        "explanation": "ps is a key concept in Linux."
      },
      {
        "question": "Level 3 · What problem does top in Linux?",
        "options": [
          "top",
          "process management",
          "ps",
          "htop"
        ],
        "answer": "top",
        "explanation": "top is a key concept in Linux."
      },
      {
        "question": "Level 3 · Which approach htop in Linux?",
        "options": [
          "htop",
          "process management",
          "ps",
          "top"
        ],
        "answer": "htop",
        "explanation": "htop is a key concept in Linux."
      },
      {
        "question": "Level 3 · What is the role of kill in Linux?",
        "options": [
          "kill",
          "process management",
          "ps",
          "top"
        ],
        "answer": "kill",
        "explanation": "kill is a key concept in Linux."
      },
      {
        "question": "Level 3 · What is the difference between nice in Linux?",
        "options": [
          "nice",
          "process management",
          "ps",
          "top"
        ],
        "answer": "nice",
        "explanation": "nice is a key concept in Linux."
      },
      {
        "question": "Level 3 · How does renice in Linux?",
        "options": [
          "renice",
          "process management",
          "ps",
          "top"
        ],
        "answer": "renice",
        "explanation": "renice is a key concept in Linux."
      },
      {
        "question": "Level 3 · What problem does bg in Linux?",
        "options": [
          "bg",
          "process management",
          "ps",
          "top"
        ],
        "answer": "bg",
        "explanation": "bg is a key concept in Linux."
      },
      {
        "question": "Level 3 · Which approach fg in Linux?",
        "options": [
          "fg",
          "process management",
          "ps",
          "top"
        ],
        "answer": "fg",
        "explanation": "fg is a key concept in Linux."
      },
      {
        "question": "Level 3 · What is the role of jobs in Linux?",
        "options": [
          "jobs",
          "process management",
          "ps",
          "top"
        ],
        "answer": "jobs",
        "explanation": "jobs is a key concept in Linux."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use package management in Linux?",
        "options": [
          "package management",
          "apt",
          "yum",
          "dnf"
        ],
        "answer": "package management",
        "explanation": "package management is a key concept in Linux."
      },
      {
        "question": "Level 4 · What is a real-world example of apt in Linux?",
        "options": [
          "apt",
          "package management",
          "yum",
          "dnf"
        ],
        "answer": "apt",
        "explanation": "apt is a key concept in Linux."
      },
      {
        "question": "Level 4 · How would you implement yum in Linux?",
        "options": [
          "yum",
          "package management",
          "apt",
          "dnf"
        ],
        "answer": "yum",
        "explanation": "yum is a key concept in Linux."
      },
      {
        "question": "Level 4 · What pattern applies dnf in Linux?",
        "options": [
          "dnf",
          "package management",
          "apt",
          "yum"
        ],
        "answer": "dnf",
        "explanation": "dnf is a key concept in Linux."
      },
      {
        "question": "Level 4 · What strategy handles pacman in Linux?",
        "options": [
          "pacman",
          "package management",
          "apt",
          "yum"
        ],
        "answer": "pacman",
        "explanation": "pacman is a key concept in Linux."
      },
      {
        "question": "Level 4 · When would you use dpkg in Linux?",
        "options": [
          "dpkg",
          "package management",
          "apt",
          "yum"
        ],
        "answer": "dpkg",
        "explanation": "dpkg is a key concept in Linux."
      },
      {
        "question": "Level 4 · What is a real-world example of rpm in Linux?",
        "options": [
          "rpm",
          "package management",
          "apt",
          "yum"
        ],
        "answer": "rpm",
        "explanation": "rpm is a key concept in Linux."
      },
      {
        "question": "Level 4 · How would you implement snap in Linux?",
        "options": [
          "snap",
          "package management",
          "apt",
          "yum"
        ],
        "answer": "snap",
        "explanation": "snap is a key concept in Linux."
      },
      {
        "question": "Level 4 · What pattern applies flatpak in Linux?",
        "options": [
          "flatpak",
          "package management",
          "apt",
          "yum"
        ],
        "answer": "flatpak",
        "explanation": "flatpak is a key concept in Linux."
      },
      {
        "question": "Level 4 · What strategy handles PPA in Linux?",
        "options": [
          "PPA",
          "package management",
          "apt",
          "yum"
        ],
        "answer": "PPA",
        "explanation": "PPA is a key concept in Linux."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize shell in Linux?",
        "options": [
          "shell",
          "bash",
          "zsh",
          "alias"
        ],
        "answer": "shell",
        "explanation": "shell is a key concept in Linux."
      },
      {
        "question": "Level 5 · What is the best practice for bash in Linux?",
        "options": [
          "bash",
          "shell",
          "zsh",
          "alias"
        ],
        "answer": "bash",
        "explanation": "bash is a key concept in Linux."
      },
      {
        "question": "Level 5 · What performance consideration involves zsh in Linux?",
        "options": [
          "zsh",
          "shell",
          "bash",
          "alias"
        ],
        "answer": "zsh",
        "explanation": "zsh is a key concept in Linux."
      },
      {
        "question": "Level 5 · How do you scale alias in Linux?",
        "options": [
          "alias",
          "shell",
          "bash",
          "zsh"
        ],
        "answer": "alias",
        "explanation": "alias is a key concept in Linux."
      },
      {
        "question": "Level 5 · What tradeoff exists when using environment variables in Linux?",
        "options": [
          "environment variables",
          "shell",
          "bash",
          "zsh"
        ],
        "answer": "environment variables",
        "explanation": "environment variables is a key concept in Linux."
      },
      {
        "question": "Level 5 · How do you optimize PATH in Linux?",
        "options": [
          "PATH",
          "shell",
          "bash",
          "zsh"
        ],
        "answer": "PATH",
        "explanation": "PATH is a key concept in Linux."
      },
      {
        "question": "Level 5 · What is the best practice for export in Linux?",
        "options": [
          "export",
          "shell",
          "bash",
          "zsh"
        ],
        "answer": "export",
        "explanation": "export is a key concept in Linux."
      },
      {
        "question": "Level 5 · What performance consideration involves source in Linux?",
        "options": [
          "source",
          "shell",
          "bash",
          "zsh"
        ],
        "answer": "source",
        "explanation": "source is a key concept in Linux."
      },
      {
        "question": "Level 5 · How do you scale profile in Linux?",
        "options": [
          "profile",
          "shell",
          "bash",
          "zsh"
        ],
        "answer": "profile",
        "explanation": "profile is a key concept in Linux."
      },
      {
        "question": "Level 5 · What tradeoff exists when using bashrc in Linux?",
        "options": [
          "bashrc",
          "shell",
          "bash",
          "zsh"
        ],
        "answer": "bashrc",
        "explanation": "bashrc is a key concept in Linux."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare text processing in Linux?",
        "options": [
          "text processing",
          "grep",
          "sed",
          "awk"
        ],
        "answer": "text processing",
        "explanation": "text processing is a key concept in Linux."
      },
      {
        "question": "Level 6 · How is it different from grep in Linux?",
        "options": [
          "grep",
          "text processing",
          "sed",
          "awk"
        ],
        "answer": "grep",
        "explanation": "grep is a key concept in Linux."
      },
      {
        "question": "Level 6 · What are the pros and cons of sed in Linux?",
        "options": [
          "sed",
          "text processing",
          "grep",
          "awk"
        ],
        "answer": "sed",
        "explanation": "sed is a key concept in Linux."
      },
      {
        "question": "Level 6 · What advantage does awk in Linux?",
        "options": [
          "awk",
          "text processing",
          "grep",
          "sed"
        ],
        "answer": "awk",
        "explanation": "awk is a key concept in Linux."
      },
      {
        "question": "Level 6 · What limitation does cut in Linux?",
        "options": [
          "cut",
          "text processing",
          "grep",
          "sed"
        ],
        "answer": "cut",
        "explanation": "cut is a key concept in Linux."
      },
      {
        "question": "Level 6 · Compare sort in Linux?",
        "options": [
          "sort",
          "text processing",
          "grep",
          "sed"
        ],
        "answer": "sort",
        "explanation": "sort is a key concept in Linux."
      },
      {
        "question": "Level 6 · How is it different from uniq in Linux?",
        "options": [
          "uniq",
          "text processing",
          "grep",
          "sed"
        ],
        "answer": "uniq",
        "explanation": "uniq is a key concept in Linux."
      },
      {
        "question": "Level 6 · What are the pros and cons of wc in Linux?",
        "options": [
          "wc",
          "text processing",
          "grep",
          "sed"
        ],
        "answer": "wc",
        "explanation": "wc is a key concept in Linux."
      },
      {
        "question": "Level 6 · What advantage does tr in Linux?",
        "options": [
          "tr",
          "text processing",
          "grep",
          "sed"
        ],
        "answer": "tr",
        "explanation": "tr is a key concept in Linux."
      },
      {
        "question": "Level 6 · What limitation does head in Linux?",
        "options": [
          "head",
          "text processing",
          "grep",
          "sed"
        ],
        "answer": "head",
        "explanation": "head is a key concept in Linux."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with networking in Linux?",
        "options": [
          "networking",
          "ifconfig",
          "ip",
          "ss"
        ],
        "answer": "networking",
        "explanation": "networking is a key concept in Linux."
      },
      {
        "question": "Level 7 · What goes wrong when ifconfig in Linux?",
        "options": [
          "ifconfig",
          "networking",
          "ip",
          "ss"
        ],
        "answer": "ifconfig",
        "explanation": "ifconfig is a key concept in Linux."
      },
      {
        "question": "Level 7 · What common mistake involves ip in Linux?",
        "options": [
          "ip",
          "networking",
          "ifconfig",
          "ss"
        ],
        "answer": "ip",
        "explanation": "ip is a key concept in Linux."
      },
      {
        "question": "Level 7 · How do you monitor ss in Linux?",
        "options": [
          "ss",
          "networking",
          "ifconfig",
          "ip"
        ],
        "answer": "ss",
        "explanation": "ss is a key concept in Linux."
      },
      {
        "question": "Level 7 · What failure mode occurs with netstat in Linux?",
        "options": [
          "netstat",
          "networking",
          "ifconfig",
          "ip"
        ],
        "answer": "netstat",
        "explanation": "netstat is a key concept in Linux."
      },
      {
        "question": "Level 7 · How do you debug issues with ping in Linux?",
        "options": [
          "ping",
          "networking",
          "ifconfig",
          "ip"
        ],
        "answer": "ping",
        "explanation": "ping is a key concept in Linux."
      },
      {
        "question": "Level 7 · What goes wrong when traceroute in Linux?",
        "options": [
          "traceroute",
          "networking",
          "ifconfig",
          "ip"
        ],
        "answer": "traceroute",
        "explanation": "traceroute is a key concept in Linux."
      },
      {
        "question": "Level 7 · What common mistake involves curl in Linux?",
        "options": [
          "curl",
          "networking",
          "ifconfig",
          "ip"
        ],
        "answer": "curl",
        "explanation": "curl is a key concept in Linux."
      },
      {
        "question": "Level 7 · How do you monitor wget in Linux?",
        "options": [
          "wget",
          "networking",
          "ifconfig",
          "ip"
        ],
        "answer": "wget",
        "explanation": "wget is a key concept in Linux."
      },
      {
        "question": "Level 7 · What failure mode occurs with nc in Linux?",
        "options": [
          "nc",
          "networking",
          "ifconfig",
          "ip"
        ],
        "answer": "nc",
        "explanation": "nc is a key concept in Linux."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves cron in Linux?",
        "options": [
          "cron",
          "crontab",
          "systemd timers",
          "at"
        ],
        "answer": "cron",
        "explanation": "cron is a key concept in Linux."
      },
      {
        "question": "Level 8 · How do you secure crontab in Linux?",
        "options": [
          "crontab",
          "cron",
          "systemd timers",
          "at"
        ],
        "answer": "crontab",
        "explanation": "crontab is a key concept in Linux."
      },
      {
        "question": "Level 8 · What testing strategy covers systemd timers in Linux?",
        "options": [
          "systemd timers",
          "cron",
          "crontab",
          "at"
        ],
        "answer": "systemd timers",
        "explanation": "systemd timers is a key concept in Linux."
      },
      {
        "question": "Level 8 · How do you ensure reliability of at in Linux?",
        "options": [
          "at",
          "cron",
          "crontab",
          "systemd timers"
        ],
        "answer": "at",
        "explanation": "at is a key concept in Linux."
      },
      {
        "question": "Level 8 · What error handling applies to schedule in Linux?",
        "options": [
          "schedule",
          "cron",
          "crontab",
          "systemd timers"
        ],
        "answer": "schedule",
        "explanation": "schedule is a key concept in Linux."
      },
      {
        "question": "Level 8 · What security concern involves backup in Linux?",
        "options": [
          "backup",
          "cron",
          "crontab",
          "systemd timers"
        ],
        "answer": "backup",
        "explanation": "backup is a key concept in Linux."
      },
      {
        "question": "Level 8 · How do you secure logrotate in Linux?",
        "options": [
          "logrotate",
          "cron",
          "crontab",
          "systemd timers"
        ],
        "answer": "logrotate",
        "explanation": "logrotate is a key concept in Linux."
      },
      {
        "question": "Level 8 · What testing strategy covers journalctl in Linux?",
        "options": [
          "journalctl",
          "cron",
          "crontab",
          "systemd timers"
        ],
        "answer": "journalctl",
        "explanation": "journalctl is a key concept in Linux."
      },
      {
        "question": "Level 8 · How do you ensure reliability of syslog in Linux?",
        "options": [
          "syslog",
          "cron",
          "crontab",
          "systemd timers"
        ],
        "answer": "syslog",
        "explanation": "syslog is a key concept in Linux."
      },
      {
        "question": "Level 8 · What error handling applies to rsyslog in Linux?",
        "options": [
          "rsyslog",
          "cron",
          "crontab",
          "systemd timers"
        ],
        "answer": "rsyslog",
        "explanation": "rsyslog is a key concept in Linux."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with LVM in Linux?",
        "options": [
          "LVM",
          "logical volume",
          "volume group",
          "physical volume"
        ],
        "answer": "LVM",
        "explanation": "LVM is a key concept in Linux."
      },
      {
        "question": "Level 9 · What architectural pattern uses logical volume in Linux?",
        "options": [
          "logical volume",
          "LVM",
          "volume group",
          "physical volume"
        ],
        "answer": "logical volume",
        "explanation": "logical volume is a key concept in Linux."
      },
      {
        "question": "Level 9 · How would you design a system with volume group in Linux?",
        "options": [
          "volume group",
          "LVM",
          "logical volume",
          "physical volume"
        ],
        "answer": "volume group",
        "explanation": "volume group is a key concept in Linux."
      },
      {
        "question": "Level 9 · What dependency does have physical volume in Linux?",
        "options": [
          "physical volume",
          "LVM",
          "logical volume",
          "volume group"
        ],
        "answer": "physical volume",
        "explanation": "physical volume is a key concept in Linux."
      },
      {
        "question": "Level 9 · How do you migrate from extend in Linux?",
        "options": [
          "extend",
          "LVM",
          "logical volume",
          "volume group"
        ],
        "answer": "extend",
        "explanation": "extend is a key concept in Linux."
      },
      {
        "question": "Level 9 · How does integrate with reduce in Linux?",
        "options": [
          "reduce",
          "LVM",
          "logical volume",
          "volume group"
        ],
        "answer": "reduce",
        "explanation": "reduce is a key concept in Linux."
      },
      {
        "question": "Level 9 · What architectural pattern uses snapshot in Linux?",
        "options": [
          "snapshot",
          "LVM",
          "logical volume",
          "volume group"
        ],
        "answer": "snapshot",
        "explanation": "snapshot is a key concept in Linux."
      },
      {
        "question": "Level 9 · How would you design a system with RAID in Linux?",
        "options": [
          "RAID",
          "LVM",
          "logical volume",
          "volume group"
        ],
        "answer": "RAID",
        "explanation": "RAID is a key concept in Linux."
      },
      {
        "question": "Level 9 · What dependency does have software RAID in Linux?",
        "options": [
          "software RAID",
          "LVM",
          "logical volume",
          "volume group"
        ],
        "answer": "software RAID",
        "explanation": "software RAID is a key concept in Linux."
      },
      {
        "question": "Level 9 · How do you migrate from mdadm in Linux?",
        "options": [
          "mdadm",
          "LVM",
          "logical volume",
          "volume group"
        ],
        "answer": "mdadm",
        "explanation": "mdadm is a key concept in Linux."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of containers in Linux?",
        "options": [
          "containers",
          "Docker",
          "podman",
          "LXC"
        ],
        "answer": "containers",
        "explanation": "containers is a key concept in Linux."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of Docker in Linux?",
        "options": [
          "Docker",
          "containers",
          "podman",
          "LXC"
        ],
        "answer": "Docker",
        "explanation": "Docker is a key concept in Linux."
      },
      {
        "question": "Level 10 · How does evolve across scales podman in Linux?",
        "options": [
          "podman",
          "containers",
          "Docker",
          "LXC"
        ],
        "answer": "podman",
        "explanation": "podman is a key concept in Linux."
      },
      {
        "question": "Level 10 · What is the future direction of LXC in Linux?",
        "options": [
          "LXC",
          "containers",
          "Docker",
          "podman"
        ],
        "answer": "LXC",
        "explanation": "LXC is a key concept in Linux."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves cgroups in Linux?",
        "options": [
          "cgroups",
          "containers",
          "Docker",
          "podman"
        ],
        "answer": "cgroups",
        "explanation": "cgroups is a key concept in Linux."
      },
      {
        "question": "Level 10 · What is the theoretical basis of namespaces in Linux?",
        "options": [
          "namespaces",
          "containers",
          "Docker",
          "podman"
        ],
        "answer": "namespaces",
        "explanation": "namespaces is a key concept in Linux."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of overlayfs in Linux?",
        "options": [
          "overlayfs",
          "containers",
          "Docker",
          "podman"
        ],
        "answer": "overlayfs",
        "explanation": "overlayfs is a key concept in Linux."
      },
      {
        "question": "Level 10 · How does evolve across scales container runtime in Linux?",
        "options": [
          "container runtime",
          "containers",
          "Docker",
          "podman"
        ],
        "answer": "container runtime",
        "explanation": "container runtime is a key concept in Linux."
      },
      {
        "question": "Level 10 · What is the future direction of OCI in Linux?",
        "options": [
          "OCI",
          "containers",
          "Docker",
          "podman"
        ],
        "answer": "OCI",
        "explanation": "OCI is a key concept in Linux."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves Dockerfile in Linux?",
        "options": [
          "Dockerfile",
          "containers",
          "Docker",
          "podman"
        ],
        "answer": "Dockerfile",
        "explanation": "Dockerfile is a key concept in Linux."
      }
    ]
  },
  "Networking": {
    "Level 1": [
      {
        "question": "Level 1 · What is OSI model in Networking?",
        "options": [
          "OSI model",
          "TCP/IP model",
          "application layer",
          "transport layer"
        ],
        "answer": "OSI model",
        "explanation": "OSI model is a key concept in Networking."
      },
      {
        "question": "Level 1 · How would you define TCP/IP model in Networking?",
        "options": [
          "TCP/IP model",
          "OSI model",
          "application layer",
          "transport layer"
        ],
        "answer": "TCP/IP model",
        "explanation": "TCP/IP model is a key concept in Networking."
      },
      {
        "question": "Level 1 · Which describes application layer in Networking?",
        "options": [
          "application layer",
          "OSI model",
          "TCP/IP model",
          "transport layer"
        ],
        "answer": "application layer",
        "explanation": "application layer is a key concept in Networking."
      },
      {
        "question": "Level 1 · What does the term transport layer in Networking?",
        "options": [
          "transport layer",
          "OSI model",
          "TCP/IP model",
          "application layer"
        ],
        "answer": "transport layer",
        "explanation": "transport layer is a key concept in Networking."
      },
      {
        "question": "Level 1 · What concept is network layer in Networking?",
        "options": [
          "network layer",
          "OSI model",
          "TCP/IP model",
          "application layer"
        ],
        "answer": "network layer",
        "explanation": "network layer is a key concept in Networking."
      },
      {
        "question": "Level 1 · What is data link layer in Networking?",
        "options": [
          "data link layer",
          "OSI model",
          "TCP/IP model",
          "application layer"
        ],
        "answer": "data link layer",
        "explanation": "data link layer is a key concept in Networking."
      },
      {
        "question": "Level 1 · How would you define physical layer in Networking?",
        "options": [
          "physical layer",
          "OSI model",
          "TCP/IP model",
          "application layer"
        ],
        "answer": "physical layer",
        "explanation": "physical layer is a key concept in Networking."
      },
      {
        "question": "Level 1 · Which describes encapsulation in Networking?",
        "options": [
          "encapsulation",
          "OSI model",
          "TCP/IP model",
          "application layer"
        ],
        "answer": "encapsulation",
        "explanation": "encapsulation is a key concept in Networking."
      },
      {
        "question": "Level 1 · What does the term PDU in Networking?",
        "options": [
          "PDU",
          "OSI model",
          "TCP/IP model",
          "application layer"
        ],
        "answer": "PDU",
        "explanation": "PDU is a key concept in Networking."
      },
      {
        "question": "Level 1 · What concept is protocol stack in Networking?",
        "options": [
          "protocol stack",
          "OSI model",
          "TCP/IP model",
          "application layer"
        ],
        "answer": "protocol stack",
        "explanation": "protocol stack is a key concept in Networking."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you HTTP in Networking?",
        "options": [
          "HTTP",
          "HTTPS",
          "HTTP methods",
          "GET POST PUT DELETE"
        ],
        "answer": "HTTP",
        "explanation": "HTTP is a key concept in Networking."
      },
      {
        "question": "Level 2 · What is the purpose of HTTPS in Networking?",
        "options": [
          "HTTPS",
          "HTTP",
          "HTTP methods",
          "GET POST PUT DELETE"
        ],
        "answer": "HTTPS",
        "explanation": "HTTPS is a key concept in Networking."
      },
      {
        "question": "Level 2 · Which tool is used to HTTP methods in Networking?",
        "options": [
          "HTTP methods",
          "HTTP",
          "HTTPS",
          "GET POST PUT DELETE"
        ],
        "answer": "HTTP methods",
        "explanation": "HTTP methods is a key concept in Networking."
      },
      {
        "question": "Level 2 · What does GET POST PUT DELETE in Networking?",
        "options": [
          "GET POST PUT DELETE",
          "HTTP",
          "HTTPS",
          "HTTP methods"
        ],
        "answer": "GET POST PUT DELETE",
        "explanation": "GET POST PUT DELETE is a key concept in Networking."
      },
      {
        "question": "Level 2 · How can you status codes in Networking?",
        "options": [
          "status codes",
          "HTTP",
          "HTTPS",
          "HTTP methods"
        ],
        "answer": "status codes",
        "explanation": "status codes is a key concept in Networking."
      },
      {
        "question": "Level 2 · How do you headers in Networking?",
        "options": [
          "headers",
          "HTTP",
          "HTTPS",
          "HTTP methods"
        ],
        "answer": "headers",
        "explanation": "headers is a key concept in Networking."
      },
      {
        "question": "Level 2 · What is the purpose of cookies in Networking?",
        "options": [
          "cookies",
          "HTTP",
          "HTTPS",
          "HTTP methods"
        ],
        "answer": "cookies",
        "explanation": "cookies is a key concept in Networking."
      },
      {
        "question": "Level 2 · Which tool is used to session in Networking?",
        "options": [
          "session",
          "HTTP",
          "HTTPS",
          "HTTP methods"
        ],
        "answer": "session",
        "explanation": "session is a key concept in Networking."
      },
      {
        "question": "Level 2 · What does REST in Networking?",
        "options": [
          "REST",
          "HTTP",
          "HTTPS",
          "HTTP methods"
        ],
        "answer": "REST",
        "explanation": "REST is a key concept in Networking."
      },
      {
        "question": "Level 2 · How can you idempotent in Networking?",
        "options": [
          "idempotent",
          "HTTP",
          "HTTPS",
          "HTTP methods"
        ],
        "answer": "idempotent",
        "explanation": "idempotent is a key concept in Networking."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between TCP in Networking?",
        "options": [
          "TCP",
          "UDP",
          "three-way handshake",
          "segments"
        ],
        "answer": "TCP",
        "explanation": "TCP is a key concept in Networking."
      },
      {
        "question": "Level 3 · How does UDP in Networking?",
        "options": [
          "UDP",
          "TCP",
          "three-way handshake",
          "segments"
        ],
        "answer": "UDP",
        "explanation": "UDP is a key concept in Networking."
      },
      {
        "question": "Level 3 · What problem does three-way handshake in Networking?",
        "options": [
          "three-way handshake",
          "TCP",
          "UDP",
          "segments"
        ],
        "answer": "three-way handshake",
        "explanation": "three-way handshake is a key concept in Networking."
      },
      {
        "question": "Level 3 · Which approach segments in Networking?",
        "options": [
          "segments",
          "TCP",
          "UDP",
          "three-way handshake"
        ],
        "answer": "segments",
        "explanation": "segments is a key concept in Networking."
      },
      {
        "question": "Level 3 · What is the role of acknowledgment in Networking?",
        "options": [
          "acknowledgment",
          "TCP",
          "UDP",
          "three-way handshake"
        ],
        "answer": "acknowledgment",
        "explanation": "acknowledgment is a key concept in Networking."
      },
      {
        "question": "Level 3 · What is the difference between flow control in Networking?",
        "options": [
          "flow control",
          "TCP",
          "UDP",
          "three-way handshake"
        ],
        "answer": "flow control",
        "explanation": "flow control is a key concept in Networking."
      },
      {
        "question": "Level 3 · How does congestion control in Networking?",
        "options": [
          "congestion control",
          "TCP",
          "UDP",
          "three-way handshake"
        ],
        "answer": "congestion control",
        "explanation": "congestion control is a key concept in Networking."
      },
      {
        "question": "Level 3 · What problem does sliding window in Networking?",
        "options": [
          "sliding window",
          "TCP",
          "UDP",
          "three-way handshake"
        ],
        "answer": "sliding window",
        "explanation": "sliding window is a key concept in Networking."
      },
      {
        "question": "Level 3 · Which approach ports in Networking?",
        "options": [
          "ports",
          "TCP",
          "UDP",
          "three-way handshake"
        ],
        "answer": "ports",
        "explanation": "ports is a key concept in Networking."
      },
      {
        "question": "Level 3 · What is the role of socket in Networking?",
        "options": [
          "socket",
          "TCP",
          "UDP",
          "three-way handshake"
        ],
        "answer": "socket",
        "explanation": "socket is a key concept in Networking."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use DNS in Networking?",
        "options": [
          "DNS",
          "DNS resolver",
          "authoritative server",
          "A record"
        ],
        "answer": "DNS",
        "explanation": "DNS is a key concept in Networking."
      },
      {
        "question": "Level 4 · What is a real-world example of DNS resolver in Networking?",
        "options": [
          "DNS resolver",
          "DNS",
          "authoritative server",
          "A record"
        ],
        "answer": "DNS resolver",
        "explanation": "DNS resolver is a key concept in Networking."
      },
      {
        "question": "Level 4 · How would you implement authoritative server in Networking?",
        "options": [
          "authoritative server",
          "DNS",
          "DNS resolver",
          "A record"
        ],
        "answer": "authoritative server",
        "explanation": "authoritative server is a key concept in Networking."
      },
      {
        "question": "Level 4 · What pattern applies A record in Networking?",
        "options": [
          "A record",
          "DNS",
          "DNS resolver",
          "authoritative server"
        ],
        "answer": "A record",
        "explanation": "A record is a key concept in Networking."
      },
      {
        "question": "Level 4 · What strategy handles CNAME in Networking?",
        "options": [
          "CNAME",
          "DNS",
          "DNS resolver",
          "authoritative server"
        ],
        "answer": "CNAME",
        "explanation": "CNAME is a key concept in Networking."
      },
      {
        "question": "Level 4 · When would you use MX record in Networking?",
        "options": [
          "MX record",
          "DNS",
          "DNS resolver",
          "authoritative server"
        ],
        "answer": "MX record",
        "explanation": "MX record is a key concept in Networking."
      },
      {
        "question": "Level 4 · What is a real-world example of TTL in Networking?",
        "options": [
          "TTL",
          "DNS",
          "DNS resolver",
          "authoritative server"
        ],
        "answer": "TTL",
        "explanation": "TTL is a key concept in Networking."
      },
      {
        "question": "Level 4 · How would you implement recursive query in Networking?",
        "options": [
          "recursive query",
          "DNS",
          "DNS resolver",
          "authoritative server"
        ],
        "answer": "recursive query",
        "explanation": "recursive query is a key concept in Networking."
      },
      {
        "question": "Level 4 · What pattern applies iterative query in Networking?",
        "options": [
          "iterative query",
          "DNS",
          "DNS resolver",
          "authoritative server"
        ],
        "answer": "iterative query",
        "explanation": "iterative query is a key concept in Networking."
      },
      {
        "question": "Level 4 · What strategy handles DNSSEC in Networking?",
        "options": [
          "DNSSEC",
          "DNS",
          "DNS resolver",
          "authoritative server"
        ],
        "answer": "DNSSEC",
        "explanation": "DNSSEC is a key concept in Networking."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize IP addressing in Networking?",
        "options": [
          "IP addressing",
          "IPv4",
          "IPv6",
          "subnet mask"
        ],
        "answer": "IP addressing",
        "explanation": "IP addressing is a key concept in Networking."
      },
      {
        "question": "Level 5 · What is the best practice for IPv4 in Networking?",
        "options": [
          "IPv4",
          "IP addressing",
          "IPv6",
          "subnet mask"
        ],
        "answer": "IPv4",
        "explanation": "IPv4 is a key concept in Networking."
      },
      {
        "question": "Level 5 · What performance consideration involves IPv6 in Networking?",
        "options": [
          "IPv6",
          "IP addressing",
          "IPv4",
          "subnet mask"
        ],
        "answer": "IPv6",
        "explanation": "IPv6 is a key concept in Networking."
      },
      {
        "question": "Level 5 · How do you scale subnet mask in Networking?",
        "options": [
          "subnet mask",
          "IP addressing",
          "IPv4",
          "IPv6"
        ],
        "answer": "subnet mask",
        "explanation": "subnet mask is a key concept in Networking."
      },
      {
        "question": "Level 5 · What tradeoff exists when using CIDR in Networking?",
        "options": [
          "CIDR",
          "IP addressing",
          "IPv4",
          "IPv6"
        ],
        "answer": "CIDR",
        "explanation": "CIDR is a key concept in Networking."
      },
      {
        "question": "Level 5 · How do you optimize private IP in Networking?",
        "options": [
          "private IP",
          "IP addressing",
          "IPv4",
          "IPv6"
        ],
        "answer": "private IP",
        "explanation": "private IP is a key concept in Networking."
      },
      {
        "question": "Level 5 · What is the best practice for public IP in Networking?",
        "options": [
          "public IP",
          "IP addressing",
          "IPv4",
          "IPv6"
        ],
        "answer": "public IP",
        "explanation": "public IP is a key concept in Networking."
      },
      {
        "question": "Level 5 · What performance consideration involves NAT in Networking?",
        "options": [
          "NAT",
          "IP addressing",
          "IPv4",
          "IPv6"
        ],
        "answer": "NAT",
        "explanation": "NAT is a key concept in Networking."
      },
      {
        "question": "Level 5 · How do you scale DHCP in Networking?",
        "options": [
          "DHCP",
          "IP addressing",
          "IPv4",
          "IPv6"
        ],
        "answer": "DHCP",
        "explanation": "DHCP is a key concept in Networking."
      },
      {
        "question": "Level 5 · What tradeoff exists when using APIPA in Networking?",
        "options": [
          "APIPA",
          "IP addressing",
          "IPv4",
          "IPv6"
        ],
        "answer": "APIPA",
        "explanation": "APIPA is a key concept in Networking."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare routing in Networking?",
        "options": [
          "routing",
          "static routing",
          "dynamic routing",
          "BGP"
        ],
        "answer": "routing",
        "explanation": "routing is a key concept in Networking."
      },
      {
        "question": "Level 6 · How is it different from static routing in Networking?",
        "options": [
          "static routing",
          "routing",
          "dynamic routing",
          "BGP"
        ],
        "answer": "static routing",
        "explanation": "static routing is a key concept in Networking."
      },
      {
        "question": "Level 6 · What are the pros and cons of dynamic routing in Networking?",
        "options": [
          "dynamic routing",
          "routing",
          "static routing",
          "BGP"
        ],
        "answer": "dynamic routing",
        "explanation": "dynamic routing is a key concept in Networking."
      },
      {
        "question": "Level 6 · What advantage does BGP in Networking?",
        "options": [
          "BGP",
          "routing",
          "static routing",
          "dynamic routing"
        ],
        "answer": "BGP",
        "explanation": "BGP is a key concept in Networking."
      },
      {
        "question": "Level 6 · What limitation does OSPF in Networking?",
        "options": [
          "OSPF",
          "routing",
          "static routing",
          "dynamic routing"
        ],
        "answer": "OSPF",
        "explanation": "OSPF is a key concept in Networking."
      },
      {
        "question": "Level 6 · Compare RIP in Networking?",
        "options": [
          "RIP",
          "routing",
          "static routing",
          "dynamic routing"
        ],
        "answer": "RIP",
        "explanation": "RIP is a key concept in Networking."
      },
      {
        "question": "Level 6 · How is it different from routing table in Networking?",
        "options": [
          "routing table",
          "routing",
          "static routing",
          "dynamic routing"
        ],
        "answer": "routing table",
        "explanation": "routing table is a key concept in Networking."
      },
      {
        "question": "Level 6 · What are the pros and cons of metrics in Networking?",
        "options": [
          "metrics",
          "routing",
          "static routing",
          "dynamic routing"
        ],
        "answer": "metrics",
        "explanation": "metrics is a key concept in Networking."
      },
      {
        "question": "Level 6 · What advantage does AS in Networking?",
        "options": [
          "AS",
          "routing",
          "static routing",
          "dynamic routing"
        ],
        "answer": "AS",
        "explanation": "AS is a key concept in Networking."
      },
      {
        "question": "Level 6 · What limitation does next hop in Networking?",
        "options": [
          "next hop",
          "routing",
          "static routing",
          "dynamic routing"
        ],
        "answer": "next hop",
        "explanation": "next hop is a key concept in Networking."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with load balancing in Networking?",
        "options": [
          "load balancing",
          "Layer 4 vs Layer 7",
          "round robin",
          "least connections"
        ],
        "answer": "load balancing",
        "explanation": "load balancing is a key concept in Networking."
      },
      {
        "question": "Level 7 · What goes wrong when Layer 4 vs Layer 7 in Networking?",
        "options": [
          "Layer 4 vs Layer 7",
          "load balancing",
          "round robin",
          "least connections"
        ],
        "answer": "Layer 4 vs Layer 7",
        "explanation": "Layer 4 vs Layer 7 is a key concept in Networking."
      },
      {
        "question": "Level 7 · What common mistake involves round robin in Networking?",
        "options": [
          "round robin",
          "load balancing",
          "Layer 4 vs Layer 7",
          "least connections"
        ],
        "answer": "round robin",
        "explanation": "round robin is a key concept in Networking."
      },
      {
        "question": "Level 7 · How do you monitor least connections in Networking?",
        "options": [
          "least connections",
          "load balancing",
          "Layer 4 vs Layer 7",
          "round robin"
        ],
        "answer": "least connections",
        "explanation": "least connections is a key concept in Networking."
      },
      {
        "question": "Level 7 · What failure mode occurs with health check in Networking?",
        "options": [
          "health check",
          "load balancing",
          "Layer 4 vs Layer 7",
          "round robin"
        ],
        "answer": "health check",
        "explanation": "health check is a key concept in Networking."
      },
      {
        "question": "Level 7 · How do you debug issues with sticky session in Networking?",
        "options": [
          "sticky session",
          "load balancing",
          "Layer 4 vs Layer 7",
          "round robin"
        ],
        "answer": "sticky session",
        "explanation": "sticky session is a key concept in Networking."
      },
      {
        "question": "Level 7 · What goes wrong when SSL termination in Networking?",
        "options": [
          "SSL termination",
          "load balancing",
          "Layer 4 vs Layer 7",
          "round robin"
        ],
        "answer": "SSL termination",
        "explanation": "SSL termination is a key concept in Networking."
      },
      {
        "question": "Level 7 · What common mistake involves reverse proxy in Networking?",
        "options": [
          "reverse proxy",
          "load balancing",
          "Layer 4 vs Layer 7",
          "round robin"
        ],
        "answer": "reverse proxy",
        "explanation": "reverse proxy is a key concept in Networking."
      },
      {
        "question": "Level 7 · How do you monitor HAProxy in Networking?",
        "options": [
          "HAProxy",
          "load balancing",
          "Layer 4 vs Layer 7",
          "round robin"
        ],
        "answer": "HAProxy",
        "explanation": "HAProxy is a key concept in Networking."
      },
      {
        "question": "Level 7 · What failure mode occurs with NGINX in Networking?",
        "options": [
          "NGINX",
          "load balancing",
          "Layer 4 vs Layer 7",
          "round robin"
        ],
        "answer": "NGINX",
        "explanation": "NGINX is a key concept in Networking."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves firewall in Networking?",
        "options": [
          "firewall",
          "stateful",
          "stateless",
          "packet filter"
        ],
        "answer": "firewall",
        "explanation": "firewall is a key concept in Networking."
      },
      {
        "question": "Level 8 · How do you secure stateful in Networking?",
        "options": [
          "stateful",
          "firewall",
          "stateless",
          "packet filter"
        ],
        "answer": "stateful",
        "explanation": "stateful is a key concept in Networking."
      },
      {
        "question": "Level 8 · What testing strategy covers stateless in Networking?",
        "options": [
          "stateless",
          "firewall",
          "stateful",
          "packet filter"
        ],
        "answer": "stateless",
        "explanation": "stateless is a key concept in Networking."
      },
      {
        "question": "Level 8 · How do you ensure reliability of packet filter in Networking?",
        "options": [
          "packet filter",
          "firewall",
          "stateful",
          "stateless"
        ],
        "answer": "packet filter",
        "explanation": "packet filter is a key concept in Networking."
      },
      {
        "question": "Level 8 · What error handling applies to proxy in Networking?",
        "options": [
          "proxy",
          "firewall",
          "stateful",
          "stateless"
        ],
        "answer": "proxy",
        "explanation": "proxy is a key concept in Networking."
      },
      {
        "question": "Level 8 · What security concern involves DMZ in Networking?",
        "options": [
          "DMZ",
          "firewall",
          "stateful",
          "stateless"
        ],
        "answer": "DMZ",
        "explanation": "DMZ is a key concept in Networking."
      },
      {
        "question": "Level 8 · How do you secure ACL in Networking?",
        "options": [
          "ACL",
          "firewall",
          "stateful",
          "stateless"
        ],
        "answer": "ACL",
        "explanation": "ACL is a key concept in Networking."
      },
      {
        "question": "Level 8 · What testing strategy covers security group in Networking?",
        "options": [
          "security group",
          "firewall",
          "stateful",
          "stateless"
        ],
        "answer": "security group",
        "explanation": "security group is a key concept in Networking."
      },
      {
        "question": "Level 8 · How do you ensure reliability of NACL in Networking?",
        "options": [
          "NACL",
          "firewall",
          "stateful",
          "stateless"
        ],
        "answer": "NACL",
        "explanation": "NACL is a key concept in Networking."
      },
      {
        "question": "Level 8 · What error handling applies to WAF in Networking?",
        "options": [
          "WAF",
          "firewall",
          "stateful",
          "stateless"
        ],
        "answer": "WAF",
        "explanation": "WAF is a key concept in Networking."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with VPN in Networking?",
        "options": [
          "VPN",
          "IPSec",
          "TLS VPN",
          "site-to-site"
        ],
        "answer": "VPN",
        "explanation": "VPN is a key concept in Networking."
      },
      {
        "question": "Level 9 · What architectural pattern uses IPSec in Networking?",
        "options": [
          "IPSec",
          "VPN",
          "TLS VPN",
          "site-to-site"
        ],
        "answer": "IPSec",
        "explanation": "IPSec is a key concept in Networking."
      },
      {
        "question": "Level 9 · How would you design a system with TLS VPN in Networking?",
        "options": [
          "TLS VPN",
          "VPN",
          "IPSec",
          "site-to-site"
        ],
        "answer": "TLS VPN",
        "explanation": "TLS VPN is a key concept in Networking."
      },
      {
        "question": "Level 9 · What dependency does have site-to-site in Networking?",
        "options": [
          "site-to-site",
          "VPN",
          "IPSec",
          "TLS VPN"
        ],
        "answer": "site-to-site",
        "explanation": "site-to-site is a key concept in Networking."
      },
      {
        "question": "Level 9 · How do you migrate from remote access in Networking?",
        "options": [
          "remote access",
          "VPN",
          "IPSec",
          "TLS VPN"
        ],
        "answer": "remote access",
        "explanation": "remote access is a key concept in Networking."
      },
      {
        "question": "Level 9 · How does integrate with tunnel in Networking?",
        "options": [
          "tunnel",
          "VPN",
          "IPSec",
          "TLS VPN"
        ],
        "answer": "tunnel",
        "explanation": "tunnel is a key concept in Networking."
      },
      {
        "question": "Level 9 · What architectural pattern uses encapsulation in Networking?",
        "options": [
          "encapsulation",
          "VPN",
          "IPSec",
          "TLS VPN"
        ],
        "answer": "encapsulation",
        "explanation": "encapsulation is a key concept in Networking."
      },
      {
        "question": "Level 9 · How would you design a system with authentication in Networking?",
        "options": [
          "authentication",
          "VPN",
          "IPSec",
          "TLS VPN"
        ],
        "answer": "authentication",
        "explanation": "authentication is a key concept in Networking."
      },
      {
        "question": "Level 9 · What dependency does have IKE in Networking?",
        "options": [
          "IKE",
          "VPN",
          "IPSec",
          "TLS VPN"
        ],
        "answer": "IKE",
        "explanation": "IKE is a key concept in Networking."
      },
      {
        "question": "Level 9 · How do you migrate from split tunneling in Networking?",
        "options": [
          "split tunneling",
          "VPN",
          "IPSec",
          "TLS VPN"
        ],
        "answer": "split tunneling",
        "explanation": "split tunneling is a key concept in Networking."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of network troubleshooting in Networking?",
        "options": [
          "network troubleshooting",
          "ping",
          "traceroute",
          "nslookup"
        ],
        "answer": "network troubleshooting",
        "explanation": "network troubleshooting is a key concept in Networking."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of ping in Networking?",
        "options": [
          "ping",
          "network troubleshooting",
          "traceroute",
          "nslookup"
        ],
        "answer": "ping",
        "explanation": "ping is a key concept in Networking."
      },
      {
        "question": "Level 10 · How does evolve across scales traceroute in Networking?",
        "options": [
          "traceroute",
          "network troubleshooting",
          "ping",
          "nslookup"
        ],
        "answer": "traceroute",
        "explanation": "traceroute is a key concept in Networking."
      },
      {
        "question": "Level 10 · What is the future direction of nslookup in Networking?",
        "options": [
          "nslookup",
          "network troubleshooting",
          "ping",
          "traceroute"
        ],
        "answer": "nslookup",
        "explanation": "nslookup is a key concept in Networking."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves dig in Networking?",
        "options": [
          "dig",
          "network troubleshooting",
          "ping",
          "traceroute"
        ],
        "answer": "dig",
        "explanation": "dig is a key concept in Networking."
      },
      {
        "question": "Level 10 · What is the theoretical basis of telnet in Networking?",
        "options": [
          "telnet",
          "network troubleshooting",
          "ping",
          "traceroute"
        ],
        "answer": "telnet",
        "explanation": "telnet is a key concept in Networking."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of netstat in Networking?",
        "options": [
          "netstat",
          "network troubleshooting",
          "ping",
          "traceroute"
        ],
        "answer": "netstat",
        "explanation": "netstat is a key concept in Networking."
      },
      {
        "question": "Level 10 · How does evolve across scales packet capture in Networking?",
        "options": [
          "packet capture",
          "network troubleshooting",
          "ping",
          "traceroute"
        ],
        "answer": "packet capture",
        "explanation": "packet capture is a key concept in Networking."
      },
      {
        "question": "Level 10 · What is the future direction of Wireshark in Networking?",
        "options": [
          "Wireshark",
          "network troubleshooting",
          "ping",
          "traceroute"
        ],
        "answer": "Wireshark",
        "explanation": "Wireshark is a key concept in Networking."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves latency in Networking?",
        "options": [
          "latency",
          "network troubleshooting",
          "ping",
          "traceroute"
        ],
        "answer": "latency",
        "explanation": "latency is a key concept in Networking."
      }
    ]
  },
  "Databases": {
    "Level 1": [
      {
        "question": "Level 1 · What is relational database in Databases?",
        "options": [
          "relational database",
          "table",
          "row",
          "column"
        ],
        "answer": "relational database",
        "explanation": "relational database is a key concept in Databases."
      },
      {
        "question": "Level 1 · How would you define table in Databases?",
        "options": [
          "table",
          "relational database",
          "row",
          "column"
        ],
        "answer": "table",
        "explanation": "table is a key concept in Databases."
      },
      {
        "question": "Level 1 · Which describes row in Databases?",
        "options": [
          "row",
          "relational database",
          "table",
          "column"
        ],
        "answer": "row",
        "explanation": "row is a key concept in Databases."
      },
      {
        "question": "Level 1 · What does the term column in Databases?",
        "options": [
          "column",
          "relational database",
          "table",
          "row"
        ],
        "answer": "column",
        "explanation": "column is a key concept in Databases."
      },
      {
        "question": "Level 1 · What concept is schema in Databases?",
        "options": [
          "schema",
          "relational database",
          "table",
          "row"
        ],
        "answer": "schema",
        "explanation": "schema is a key concept in Databases."
      },
      {
        "question": "Level 1 · What is data type in Databases?",
        "options": [
          "data type",
          "relational database",
          "table",
          "row"
        ],
        "answer": "data type",
        "explanation": "data type is a key concept in Databases."
      },
      {
        "question": "Level 1 · How would you define primary key in Databases?",
        "options": [
          "primary key",
          "relational database",
          "table",
          "row"
        ],
        "answer": "primary key",
        "explanation": "primary key is a key concept in Databases."
      },
      {
        "question": "Level 1 · Which describes foreign key in Databases?",
        "options": [
          "foreign key",
          "relational database",
          "table",
          "row"
        ],
        "answer": "foreign key",
        "explanation": "foreign key is a key concept in Databases."
      },
      {
        "question": "Level 1 · What does the term index in Databases?",
        "options": [
          "index",
          "relational database",
          "table",
          "row"
        ],
        "answer": "index",
        "explanation": "index is a key concept in Databases."
      },
      {
        "question": "Level 1 · What concept is constraint in Databases?",
        "options": [
          "constraint",
          "relational database",
          "table",
          "row"
        ],
        "answer": "constraint",
        "explanation": "constraint is a key concept in Databases."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you SQL queries in Databases?",
        "options": [
          "SQL queries",
          "SELECT",
          "INSERT",
          "UPDATE"
        ],
        "answer": "SQL queries",
        "explanation": "SQL queries is a key concept in Databases."
      },
      {
        "question": "Level 2 · What is the purpose of SELECT in Databases?",
        "options": [
          "SELECT",
          "SQL queries",
          "INSERT",
          "UPDATE"
        ],
        "answer": "SELECT",
        "explanation": "SELECT is a key concept in Databases."
      },
      {
        "question": "Level 2 · Which tool is used to INSERT in Databases?",
        "options": [
          "INSERT",
          "SQL queries",
          "SELECT",
          "UPDATE"
        ],
        "answer": "INSERT",
        "explanation": "INSERT is a key concept in Databases."
      },
      {
        "question": "Level 2 · What does UPDATE in Databases?",
        "options": [
          "UPDATE",
          "SQL queries",
          "SELECT",
          "INSERT"
        ],
        "answer": "UPDATE",
        "explanation": "UPDATE is a key concept in Databases."
      },
      {
        "question": "Level 2 · How can you DELETE in Databases?",
        "options": [
          "DELETE",
          "SQL queries",
          "SELECT",
          "INSERT"
        ],
        "answer": "DELETE",
        "explanation": "DELETE is a key concept in Databases."
      },
      {
        "question": "Level 2 · How do you WHERE in Databases?",
        "options": [
          "WHERE",
          "SQL queries",
          "SELECT",
          "INSERT"
        ],
        "answer": "WHERE",
        "explanation": "WHERE is a key concept in Databases."
      },
      {
        "question": "Level 2 · What is the purpose of ORDER BY in Databases?",
        "options": [
          "ORDER BY",
          "SQL queries",
          "SELECT",
          "INSERT"
        ],
        "answer": "ORDER BY",
        "explanation": "ORDER BY is a key concept in Databases."
      },
      {
        "question": "Level 2 · Which tool is used to GROUP BY in Databases?",
        "options": [
          "GROUP BY",
          "SQL queries",
          "SELECT",
          "INSERT"
        ],
        "answer": "GROUP BY",
        "explanation": "GROUP BY is a key concept in Databases."
      },
      {
        "question": "Level 2 · What does HAVING in Databases?",
        "options": [
          "HAVING",
          "SQL queries",
          "SELECT",
          "INSERT"
        ],
        "answer": "HAVING",
        "explanation": "HAVING is a key concept in Databases."
      },
      {
        "question": "Level 2 · How can you JOIN in Databases?",
        "options": [
          "JOIN",
          "SQL queries",
          "SELECT",
          "INSERT"
        ],
        "answer": "JOIN",
        "explanation": "JOIN is a key concept in Databases."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between normalization in Databases?",
        "options": [
          "normalization",
          "1NF",
          "2NF",
          "3NF"
        ],
        "answer": "normalization",
        "explanation": "normalization is a key concept in Databases."
      },
      {
        "question": "Level 3 · How does 1NF in Databases?",
        "options": [
          "1NF",
          "normalization",
          "2NF",
          "3NF"
        ],
        "answer": "1NF",
        "explanation": "1NF is a key concept in Databases."
      },
      {
        "question": "Level 3 · What problem does 2NF in Databases?",
        "options": [
          "2NF",
          "normalization",
          "1NF",
          "3NF"
        ],
        "answer": "2NF",
        "explanation": "2NF is a key concept in Databases."
      },
      {
        "question": "Level 3 · Which approach 3NF in Databases?",
        "options": [
          "3NF",
          "normalization",
          "1NF",
          "2NF"
        ],
        "answer": "3NF",
        "explanation": "3NF is a key concept in Databases."
      },
      {
        "question": "Level 3 · What is the role of BCNF in Databases?",
        "options": [
          "BCNF",
          "normalization",
          "1NF",
          "2NF"
        ],
        "answer": "BCNF",
        "explanation": "BCNF is a key concept in Databases."
      },
      {
        "question": "Level 3 · What is the difference between denormalization in Databases?",
        "options": [
          "denormalization",
          "normalization",
          "1NF",
          "2NF"
        ],
        "answer": "denormalization",
        "explanation": "denormalization is a key concept in Databases."
      },
      {
        "question": "Level 3 · How does functional dependency in Databases?",
        "options": [
          "functional dependency",
          "normalization",
          "1NF",
          "2NF"
        ],
        "answer": "functional dependency",
        "explanation": "functional dependency is a key concept in Databases."
      },
      {
        "question": "Level 3 · What problem does candidate key in Databases?",
        "options": [
          "candidate key",
          "normalization",
          "1NF",
          "2NF"
        ],
        "answer": "candidate key",
        "explanation": "candidate key is a key concept in Databases."
      },
      {
        "question": "Level 3 · Which approach composite key in Databases?",
        "options": [
          "composite key",
          "normalization",
          "1NF",
          "2NF"
        ],
        "answer": "composite key",
        "explanation": "composite key is a key concept in Databases."
      },
      {
        "question": "Level 3 · What is the role of surrogate key in Databases?",
        "options": [
          "surrogate key",
          "normalization",
          "1NF",
          "2NF"
        ],
        "answer": "surrogate key",
        "explanation": "surrogate key is a key concept in Databases."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use indexing in Databases?",
        "options": [
          "indexing",
          "B-tree",
          "hash index",
          "composite index"
        ],
        "answer": "indexing",
        "explanation": "indexing is a key concept in Databases."
      },
      {
        "question": "Level 4 · What is a real-world example of B-tree in Databases?",
        "options": [
          "B-tree",
          "indexing",
          "hash index",
          "composite index"
        ],
        "answer": "B-tree",
        "explanation": "B-tree is a key concept in Databases."
      },
      {
        "question": "Level 4 · How would you implement hash index in Databases?",
        "options": [
          "hash index",
          "indexing",
          "B-tree",
          "composite index"
        ],
        "answer": "hash index",
        "explanation": "hash index is a key concept in Databases."
      },
      {
        "question": "Level 4 · What pattern applies composite index in Databases?",
        "options": [
          "composite index",
          "indexing",
          "B-tree",
          "hash index"
        ],
        "answer": "composite index",
        "explanation": "composite index is a key concept in Databases."
      },
      {
        "question": "Level 4 · What strategy handles covering index in Databases?",
        "options": [
          "covering index",
          "indexing",
          "B-tree",
          "hash index"
        ],
        "answer": "covering index",
        "explanation": "covering index is a key concept in Databases."
      },
      {
        "question": "Level 4 · When would you use clustered index in Databases?",
        "options": [
          "clustered index",
          "indexing",
          "B-tree",
          "hash index"
        ],
        "answer": "clustered index",
        "explanation": "clustered index is a key concept in Databases."
      },
      {
        "question": "Level 4 · What is a real-world example of non-clustered index in Databases?",
        "options": [
          "non-clustered index",
          "indexing",
          "B-tree",
          "hash index"
        ],
        "answer": "non-clustered index",
        "explanation": "non-clustered index is a key concept in Databases."
      },
      {
        "question": "Level 4 · How would you implement full-text search in Databases?",
        "options": [
          "full-text search",
          "indexing",
          "B-tree",
          "hash index"
        ],
        "answer": "full-text search",
        "explanation": "full-text search is a key concept in Databases."
      },
      {
        "question": "Level 4 · What pattern applies query plan in Databases?",
        "options": [
          "query plan",
          "indexing",
          "B-tree",
          "hash index"
        ],
        "answer": "query plan",
        "explanation": "query plan is a key concept in Databases."
      },
      {
        "question": "Level 4 · What strategy handles index scan in Databases?",
        "options": [
          "index scan",
          "indexing",
          "B-tree",
          "hash index"
        ],
        "answer": "index scan",
        "explanation": "index scan is a key concept in Databases."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize transactions in Databases?",
        "options": [
          "transactions",
          "ACID",
          "atomicity",
          "consistency"
        ],
        "answer": "transactions",
        "explanation": "transactions is a key concept in Databases."
      },
      {
        "question": "Level 5 · What is the best practice for ACID in Databases?",
        "options": [
          "ACID",
          "transactions",
          "atomicity",
          "consistency"
        ],
        "answer": "ACID",
        "explanation": "ACID is a key concept in Databases."
      },
      {
        "question": "Level 5 · What performance consideration involves atomicity in Databases?",
        "options": [
          "atomicity",
          "transactions",
          "ACID",
          "consistency"
        ],
        "answer": "atomicity",
        "explanation": "atomicity is a key concept in Databases."
      },
      {
        "question": "Level 5 · How do you scale consistency in Databases?",
        "options": [
          "consistency",
          "transactions",
          "ACID",
          "atomicity"
        ],
        "answer": "consistency",
        "explanation": "consistency is a key concept in Databases."
      },
      {
        "question": "Level 5 · What tradeoff exists when using isolation in Databases?",
        "options": [
          "isolation",
          "transactions",
          "ACID",
          "atomicity"
        ],
        "answer": "isolation",
        "explanation": "isolation is a key concept in Databases."
      },
      {
        "question": "Level 5 · How do you optimize durability in Databases?",
        "options": [
          "durability",
          "transactions",
          "ACID",
          "atomicity"
        ],
        "answer": "durability",
        "explanation": "durability is a key concept in Databases."
      },
      {
        "question": "Level 5 · What is the best practice for commit in Databases?",
        "options": [
          "commit",
          "transactions",
          "ACID",
          "atomicity"
        ],
        "answer": "commit",
        "explanation": "commit is a key concept in Databases."
      },
      {
        "question": "Level 5 · What performance consideration involves rollback in Databases?",
        "options": [
          "rollback",
          "transactions",
          "ACID",
          "atomicity"
        ],
        "answer": "rollback",
        "explanation": "rollback is a key concept in Databases."
      },
      {
        "question": "Level 5 · How do you scale savepoint in Databases?",
        "options": [
          "savepoint",
          "transactions",
          "ACID",
          "atomicity"
        ],
        "answer": "savepoint",
        "explanation": "savepoint is a key concept in Databases."
      },
      {
        "question": "Level 5 · What tradeoff exists when using isolation levels in Databases?",
        "options": [
          "isolation levels",
          "transactions",
          "ACID",
          "atomicity"
        ],
        "answer": "isolation levels",
        "explanation": "isolation levels is a key concept in Databases."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare NoSQL in Databases?",
        "options": [
          "NoSQL",
          "document store",
          "MongoDB",
          "key-value store"
        ],
        "answer": "NoSQL",
        "explanation": "NoSQL is a key concept in Databases."
      },
      {
        "question": "Level 6 · How is it different from document store in Databases?",
        "options": [
          "document store",
          "NoSQL",
          "MongoDB",
          "key-value store"
        ],
        "answer": "document store",
        "explanation": "document store is a key concept in Databases."
      },
      {
        "question": "Level 6 · What are the pros and cons of MongoDB in Databases?",
        "options": [
          "MongoDB",
          "NoSQL",
          "document store",
          "key-value store"
        ],
        "answer": "MongoDB",
        "explanation": "MongoDB is a key concept in Databases."
      },
      {
        "question": "Level 6 · What advantage does key-value store in Databases?",
        "options": [
          "key-value store",
          "NoSQL",
          "document store",
          "MongoDB"
        ],
        "answer": "key-value store",
        "explanation": "key-value store is a key concept in Databases."
      },
      {
        "question": "Level 6 · What limitation does Redis in Databases?",
        "options": [
          "Redis",
          "NoSQL",
          "document store",
          "MongoDB"
        ],
        "answer": "Redis",
        "explanation": "Redis is a key concept in Databases."
      },
      {
        "question": "Level 6 · Compare wide column in Databases?",
        "options": [
          "wide column",
          "NoSQL",
          "document store",
          "MongoDB"
        ],
        "answer": "wide column",
        "explanation": "wide column is a key concept in Databases."
      },
      {
        "question": "Level 6 · How is it different from Cassandra in Databases?",
        "options": [
          "Cassandra",
          "NoSQL",
          "document store",
          "MongoDB"
        ],
        "answer": "Cassandra",
        "explanation": "Cassandra is a key concept in Databases."
      },
      {
        "question": "Level 6 · What are the pros and cons of graph database in Databases?",
        "options": [
          "graph database",
          "NoSQL",
          "document store",
          "MongoDB"
        ],
        "answer": "graph database",
        "explanation": "graph database is a key concept in Databases."
      },
      {
        "question": "Level 6 · What advantage does Neo4j in Databases?",
        "options": [
          "Neo4j",
          "NoSQL",
          "document store",
          "MongoDB"
        ],
        "answer": "Neo4j",
        "explanation": "Neo4j is a key concept in Databases."
      },
      {
        "question": "Level 6 · What limitation does eventual consistency in Databases?",
        "options": [
          "eventual consistency",
          "NoSQL",
          "document store",
          "MongoDB"
        ],
        "answer": "eventual consistency",
        "explanation": "eventual consistency is a key concept in Databases."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with query optimization in Databases?",
        "options": [
          "query optimization",
          "EXPLAIN",
          "query plan",
          "slow query"
        ],
        "answer": "query optimization",
        "explanation": "query optimization is a key concept in Databases."
      },
      {
        "question": "Level 7 · What goes wrong when EXPLAIN in Databases?",
        "options": [
          "EXPLAIN",
          "query optimization",
          "query plan",
          "slow query"
        ],
        "answer": "EXPLAIN",
        "explanation": "EXPLAIN is a key concept in Databases."
      },
      {
        "question": "Level 7 · What common mistake involves query plan in Databases?",
        "options": [
          "query plan",
          "query optimization",
          "EXPLAIN",
          "slow query"
        ],
        "answer": "query plan",
        "explanation": "query plan is a key concept in Databases."
      },
      {
        "question": "Level 7 · How do you monitor slow query in Databases?",
        "options": [
          "slow query",
          "query optimization",
          "EXPLAIN",
          "query plan"
        ],
        "answer": "slow query",
        "explanation": "slow query is a key concept in Databases."
      },
      {
        "question": "Level 7 · What failure mode occurs with optimizer in Databases?",
        "options": [
          "optimizer",
          "query optimization",
          "EXPLAIN",
          "query plan"
        ],
        "answer": "optimizer",
        "explanation": "optimizer is a key concept in Databases."
      },
      {
        "question": "Level 7 · How do you debug issues with index hint in Databases?",
        "options": [
          "index hint",
          "query optimization",
          "EXPLAIN",
          "query plan"
        ],
        "answer": "index hint",
        "explanation": "index hint is a key concept in Databases."
      },
      {
        "question": "Level 7 · What goes wrong when query rewrite in Databases?",
        "options": [
          "query rewrite",
          "query optimization",
          "EXPLAIN",
          "query plan"
        ],
        "answer": "query rewrite",
        "explanation": "query rewrite is a key concept in Databases."
      },
      {
        "question": "Level 7 · What common mistake involves partition pruning in Databases?",
        "options": [
          "partition pruning",
          "query optimization",
          "EXPLAIN",
          "query plan"
        ],
        "answer": "partition pruning",
        "explanation": "partition pruning is a key concept in Databases."
      },
      {
        "question": "Level 7 · How do you monitor materialized view in Databases?",
        "options": [
          "materialized view",
          "query optimization",
          "EXPLAIN",
          "query plan"
        ],
        "answer": "materialized view",
        "explanation": "materialized view is a key concept in Databases."
      },
      {
        "question": "Level 7 · What failure mode occurs with denormalization in Databases?",
        "options": [
          "denormalization",
          "query optimization",
          "EXPLAIN",
          "query plan"
        ],
        "answer": "denormalization",
        "explanation": "denormalization is a key concept in Databases."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves concurrency control in Databases?",
        "options": [
          "concurrency control",
          "locking",
          "optimistic lock",
          "pessimistic lock"
        ],
        "answer": "concurrency control",
        "explanation": "concurrency control is a key concept in Databases."
      },
      {
        "question": "Level 8 · How do you secure locking in Databases?",
        "options": [
          "locking",
          "concurrency control",
          "optimistic lock",
          "pessimistic lock"
        ],
        "answer": "locking",
        "explanation": "locking is a key concept in Databases."
      },
      {
        "question": "Level 8 · What testing strategy covers optimistic lock in Databases?",
        "options": [
          "optimistic lock",
          "concurrency control",
          "locking",
          "pessimistic lock"
        ],
        "answer": "optimistic lock",
        "explanation": "optimistic lock is a key concept in Databases."
      },
      {
        "question": "Level 8 · How do you ensure reliability of pessimistic lock in Databases?",
        "options": [
          "pessimistic lock",
          "concurrency control",
          "locking",
          "optimistic lock"
        ],
        "answer": "pessimistic lock",
        "explanation": "pessimistic lock is a key concept in Databases."
      },
      {
        "question": "Level 8 · What error handling applies to deadlock in Databases?",
        "options": [
          "deadlock",
          "concurrency control",
          "locking",
          "optimistic lock"
        ],
        "answer": "deadlock",
        "explanation": "deadlock is a key concept in Databases."
      },
      {
        "question": "Level 8 · What security concern involves deadlock detection in Databases?",
        "options": [
          "deadlock detection",
          "concurrency control",
          "locking",
          "optimistic lock"
        ],
        "answer": "deadlock detection",
        "explanation": "deadlock detection is a key concept in Databases."
      },
      {
        "question": "Level 8 · How do you secure two-phase locking in Databases?",
        "options": [
          "two-phase locking",
          "concurrency control",
          "locking",
          "optimistic lock"
        ],
        "answer": "two-phase locking",
        "explanation": "two-phase locking is a key concept in Databases."
      },
      {
        "question": "Level 8 · What testing strategy covers timestamp ordering in Databases?",
        "options": [
          "timestamp ordering",
          "concurrency control",
          "locking",
          "optimistic lock"
        ],
        "answer": "timestamp ordering",
        "explanation": "timestamp ordering is a key concept in Databases."
      },
      {
        "question": "Level 8 · How do you ensure reliability of serializability in Databases?",
        "options": [
          "serializability",
          "concurrency control",
          "locking",
          "optimistic lock"
        ],
        "answer": "serializability",
        "explanation": "serializability is a key concept in Databases."
      },
      {
        "question": "Level 8 · What error handling applies to conflict resolution in Databases?",
        "options": [
          "conflict resolution",
          "concurrency control",
          "locking",
          "optimistic lock"
        ],
        "answer": "conflict resolution",
        "explanation": "conflict resolution is a key concept in Databases."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with sharding in Databases?",
        "options": [
          "sharding",
          "horizontal sharding",
          "vertical sharding",
          "consistent hashing"
        ],
        "answer": "sharding",
        "explanation": "sharding is a key concept in Databases."
      },
      {
        "question": "Level 9 · What architectural pattern uses horizontal sharding in Databases?",
        "options": [
          "horizontal sharding",
          "sharding",
          "vertical sharding",
          "consistent hashing"
        ],
        "answer": "horizontal sharding",
        "explanation": "horizontal sharding is a key concept in Databases."
      },
      {
        "question": "Level 9 · How would you design a system with vertical sharding in Databases?",
        "options": [
          "vertical sharding",
          "sharding",
          "horizontal sharding",
          "consistent hashing"
        ],
        "answer": "vertical sharding",
        "explanation": "vertical sharding is a key concept in Databases."
      },
      {
        "question": "Level 9 · What dependency does have consistent hashing in Databases?",
        "options": [
          "consistent hashing",
          "sharding",
          "horizontal sharding",
          "vertical sharding"
        ],
        "answer": "consistent hashing",
        "explanation": "consistent hashing is a key concept in Databases."
      },
      {
        "question": "Level 9 · How do you migrate from rebalancing in Databases?",
        "options": [
          "rebalancing",
          "sharding",
          "horizontal sharding",
          "vertical sharding"
        ],
        "answer": "rebalancing",
        "explanation": "rebalancing is a key concept in Databases."
      },
      {
        "question": "Level 9 · How does integrate with shard key in Databases?",
        "options": [
          "shard key",
          "sharding",
          "horizontal sharding",
          "vertical sharding"
        ],
        "answer": "shard key",
        "explanation": "shard key is a key concept in Databases."
      },
      {
        "question": "Level 9 · What architectural pattern uses distributed query in Databases?",
        "options": [
          "distributed query",
          "sharding",
          "horizontal sharding",
          "vertical sharding"
        ],
        "answer": "distributed query",
        "explanation": "distributed query is a key concept in Databases."
      },
      {
        "question": "Level 9 · How would you design a system with cross-shard query in Databases?",
        "options": [
          "cross-shard query",
          "sharding",
          "horizontal sharding",
          "vertical sharding"
        ],
        "answer": "cross-shard query",
        "explanation": "cross-shard query is a key concept in Databases."
      },
      {
        "question": "Level 9 · What dependency does have read replica in Databases?",
        "options": [
          "read replica",
          "sharding",
          "horizontal sharding",
          "vertical sharding"
        ],
        "answer": "read replica",
        "explanation": "read replica is a key concept in Databases."
      },
      {
        "question": "Level 9 · How do you migrate from database proxy in Databases?",
        "options": [
          "database proxy",
          "sharding",
          "horizontal sharding",
          "vertical sharding"
        ],
        "answer": "database proxy",
        "explanation": "database proxy is a key concept in Databases."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of backup and recovery in Databases?",
        "options": [
          "backup and recovery",
          "full backup",
          "incremental backup",
          "point-in-time recovery"
        ],
        "answer": "backup and recovery",
        "explanation": "backup and recovery is a key concept in Databases."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of full backup in Databases?",
        "options": [
          "full backup",
          "backup and recovery",
          "incremental backup",
          "point-in-time recovery"
        ],
        "answer": "full backup",
        "explanation": "full backup is a key concept in Databases."
      },
      {
        "question": "Level 10 · How does evolve across scales incremental backup in Databases?",
        "options": [
          "incremental backup",
          "backup and recovery",
          "full backup",
          "point-in-time recovery"
        ],
        "answer": "incremental backup",
        "explanation": "incremental backup is a key concept in Databases."
      },
      {
        "question": "Level 10 · What is the future direction of point-in-time recovery in Databases?",
        "options": [
          "point-in-time recovery",
          "backup and recovery",
          "full backup",
          "incremental backup"
        ],
        "answer": "point-in-time recovery",
        "explanation": "point-in-time recovery is a key concept in Databases."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves WAL in Databases?",
        "options": [
          "WAL",
          "backup and recovery",
          "full backup",
          "incremental backup"
        ],
        "answer": "WAL",
        "explanation": "WAL is a key concept in Databases."
      },
      {
        "question": "Level 10 · What is the theoretical basis of snapshot in Databases?",
        "options": [
          "snapshot",
          "backup and recovery",
          "full backup",
          "incremental backup"
        ],
        "answer": "snapshot",
        "explanation": "snapshot is a key concept in Databases."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of replication in Databases?",
        "options": [
          "replication",
          "backup and recovery",
          "full backup",
          "incremental backup"
        ],
        "answer": "replication",
        "explanation": "replication is a key concept in Databases."
      },
      {
        "question": "Level 10 · How does evolve across scales failover in Databases?",
        "options": [
          "failover",
          "backup and recovery",
          "full backup",
          "incremental backup"
        ],
        "answer": "failover",
        "explanation": "failover is a key concept in Databases."
      },
      {
        "question": "Level 10 · What is the future direction of disaster recovery in Databases?",
        "options": [
          "disaster recovery",
          "backup and recovery",
          "full backup",
          "incremental backup"
        ],
        "answer": "disaster recovery",
        "explanation": "disaster recovery is a key concept in Databases."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves RTO in Databases?",
        "options": [
          "RTO",
          "backup and recovery",
          "full backup",
          "incremental backup"
        ],
        "answer": "RTO",
        "explanation": "RTO is a key concept in Databases."
      }
    ]
  },
  "Design Patterns": {
    "Level 1": [
      {
        "question": "Level 1 · What is Singleton in Design Patterns?",
        "options": [
          "Singleton",
          "ensures single instance",
          "static instance",
          "private constructor"
        ],
        "answer": "Singleton",
        "explanation": "Singleton is a key concept in Design Patterns."
      },
      {
        "question": "Level 1 · How would you define ensures single instance in Design Patterns?",
        "options": [
          "ensures single instance",
          "Singleton",
          "static instance",
          "private constructor"
        ],
        "answer": "ensures single instance",
        "explanation": "ensures single instance is a key concept in Design Patterns."
      },
      {
        "question": "Level 1 · Which describes static instance in Design Patterns?",
        "options": [
          "static instance",
          "Singleton",
          "ensures single instance",
          "private constructor"
        ],
        "answer": "static instance",
        "explanation": "static instance is a key concept in Design Patterns."
      },
      {
        "question": "Level 1 · What does the term private constructor in Design Patterns?",
        "options": [
          "private constructor",
          "Singleton",
          "ensures single instance",
          "static instance"
        ],
        "answer": "private constructor",
        "explanation": "private constructor is a key concept in Design Patterns."
      },
      {
        "question": "Level 1 · What concept is lazy initialization in Design Patterns?",
        "options": [
          "lazy initialization",
          "Singleton",
          "ensures single instance",
          "static instance"
        ],
        "answer": "lazy initialization",
        "explanation": "lazy initialization is a key concept in Design Patterns."
      },
      {
        "question": "Level 1 · What is thread-safe in Design Patterns?",
        "options": [
          "thread-safe",
          "Singleton",
          "ensures single instance",
          "static instance"
        ],
        "answer": "thread-safe",
        "explanation": "thread-safe is a key concept in Design Patterns."
      },
      {
        "question": "Level 1 · How would you define double-checked locking in Design Patterns?",
        "options": [
          "double-checked locking",
          "Singleton",
          "ensures single instance",
          "static instance"
        ],
        "answer": "double-checked locking",
        "explanation": "double-checked locking is a key concept in Design Patterns."
      },
      {
        "question": "Level 1 · Which describes enum singleton in Design Patterns?",
        "options": [
          "enum singleton",
          "Singleton",
          "ensures single instance",
          "static instance"
        ],
        "answer": "enum singleton",
        "explanation": "enum singleton is a key concept in Design Patterns."
      },
      {
        "question": "Level 1 · What does the term registry in Design Patterns?",
        "options": [
          "registry",
          "Singleton",
          "ensures single instance",
          "static instance"
        ],
        "answer": "registry",
        "explanation": "registry is a key concept in Design Patterns."
      },
      {
        "question": "Level 1 · What concept is service locator in Design Patterns?",
        "options": [
          "service locator",
          "Singleton",
          "ensures single instance",
          "static instance"
        ],
        "answer": "service locator",
        "explanation": "service locator is a key concept in Design Patterns."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you Factory Method in Design Patterns?",
        "options": [
          "Factory Method",
          "abstract factory",
          "parameterized factory",
          "factory pattern vs abstract factory"
        ],
        "answer": "Factory Method",
        "explanation": "Factory Method is a key concept in Design Patterns."
      },
      {
        "question": "Level 2 · What is the purpose of abstract factory in Design Patterns?",
        "options": [
          "abstract factory",
          "Factory Method",
          "parameterized factory",
          "factory pattern vs abstract factory"
        ],
        "answer": "abstract factory",
        "explanation": "abstract factory is a key concept in Design Patterns."
      },
      {
        "question": "Level 2 · Which tool is used to parameterized factory in Design Patterns?",
        "options": [
          "parameterized factory",
          "Factory Method",
          "abstract factory",
          "factory pattern vs abstract factory"
        ],
        "answer": "parameterized factory",
        "explanation": "parameterized factory is a key concept in Design Patterns."
      },
      {
        "question": "Level 2 · What does factory pattern vs abstract factory in Design Patterns?",
        "options": [
          "factory pattern vs abstract factory",
          "Factory Method",
          "abstract factory",
          "parameterized factory"
        ],
        "answer": "factory pattern vs abstract factory",
        "explanation": "factory pattern vs abstract factory is a key concept in Design Patterns."
      },
      {
        "question": "Level 2 · How can you creational pattern in Design Patterns?",
        "options": [
          "creational pattern",
          "Factory Method",
          "abstract factory",
          "parameterized factory"
        ],
        "answer": "creational pattern",
        "explanation": "creational pattern is a key concept in Design Patterns."
      },
      {
        "question": "Level 2 · How do you product family in Design Patterns?",
        "options": [
          "product family",
          "Factory Method",
          "abstract factory",
          "parameterized factory"
        ],
        "answer": "product family",
        "explanation": "product family is a key concept in Design Patterns."
      },
      {
        "question": "Level 2 · What is the purpose of factory class in Design Patterns?",
        "options": [
          "factory class",
          "Factory Method",
          "abstract factory",
          "parameterized factory"
        ],
        "answer": "factory class",
        "explanation": "factory class is a key concept in Design Patterns."
      },
      {
        "question": "Level 2 · Which tool is used to static factory in Design Patterns?",
        "options": [
          "static factory",
          "Factory Method",
          "abstract factory",
          "parameterized factory"
        ],
        "answer": "static factory",
        "explanation": "static factory is a key concept in Design Patterns."
      },
      {
        "question": "Level 2 · What does simple factory in Design Patterns?",
        "options": [
          "simple factory",
          "Factory Method",
          "abstract factory",
          "parameterized factory"
        ],
        "answer": "simple factory",
        "explanation": "simple factory is a key concept in Design Patterns."
      },
      {
        "question": "Level 2 · How can you dependency injection in Design Patterns?",
        "options": [
          "dependency injection",
          "Factory Method",
          "abstract factory",
          "parameterized factory"
        ],
        "answer": "dependency injection",
        "explanation": "dependency injection is a key concept in Design Patterns."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between Observer in Design Patterns?",
        "options": [
          "Observer",
          "publish-subscribe",
          "subject",
          "observer interface"
        ],
        "answer": "Observer",
        "explanation": "Observer is a key concept in Design Patterns."
      },
      {
        "question": "Level 3 · How does publish-subscribe in Design Patterns?",
        "options": [
          "publish-subscribe",
          "Observer",
          "subject",
          "observer interface"
        ],
        "answer": "publish-subscribe",
        "explanation": "publish-subscribe is a key concept in Design Patterns."
      },
      {
        "question": "Level 3 · What problem does subject in Design Patterns?",
        "options": [
          "subject",
          "Observer",
          "publish-subscribe",
          "observer interface"
        ],
        "answer": "subject",
        "explanation": "subject is a key concept in Design Patterns."
      },
      {
        "question": "Level 3 · Which approach observer interface in Design Patterns?",
        "options": [
          "observer interface",
          "Observer",
          "publish-subscribe",
          "subject"
        ],
        "answer": "observer interface",
        "explanation": "observer interface is a key concept in Design Patterns."
      },
      {
        "question": "Level 3 · What is the role of notify in Design Patterns?",
        "options": [
          "notify",
          "Observer",
          "publish-subscribe",
          "subject"
        ],
        "answer": "notify",
        "explanation": "notify is a key concept in Design Patterns."
      },
      {
        "question": "Level 3 · What is the difference between event listener in Design Patterns?",
        "options": [
          "event listener",
          "Observer",
          "publish-subscribe",
          "subject"
        ],
        "answer": "event listener",
        "explanation": "event listener is a key concept in Design Patterns."
      },
      {
        "question": "Level 3 · How does event emitter in Design Patterns?",
        "options": [
          "event emitter",
          "Observer",
          "publish-subscribe",
          "subject"
        ],
        "answer": "event emitter",
        "explanation": "event emitter is a key concept in Design Patterns."
      },
      {
        "question": "Level 3 · What problem does loose coupling in Design Patterns?",
        "options": [
          "loose coupling",
          "Observer",
          "publish-subscribe",
          "subject"
        ],
        "answer": "loose coupling",
        "explanation": "loose coupling is a key concept in Design Patterns."
      },
      {
        "question": "Level 3 · Which approach multicast in Design Patterns?",
        "options": [
          "multicast",
          "Observer",
          "publish-subscribe",
          "subject"
        ],
        "answer": "multicast",
        "explanation": "multicast is a key concept in Design Patterns."
      },
      {
        "question": "Level 3 · What is the role of event channel in Design Patterns?",
        "options": [
          "event channel",
          "Observer",
          "publish-subscribe",
          "subject"
        ],
        "answer": "event channel",
        "explanation": "event channel is a key concept in Design Patterns."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use Strategy in Design Patterns?",
        "options": [
          "Strategy",
          "algorithm family",
          "encapsulation",
          "interchangeable"
        ],
        "answer": "Strategy",
        "explanation": "Strategy is a key concept in Design Patterns."
      },
      {
        "question": "Level 4 · What is a real-world example of algorithm family in Design Patterns?",
        "options": [
          "algorithm family",
          "Strategy",
          "encapsulation",
          "interchangeable"
        ],
        "answer": "algorithm family",
        "explanation": "algorithm family is a key concept in Design Patterns."
      },
      {
        "question": "Level 4 · How would you implement encapsulation in Design Patterns?",
        "options": [
          "encapsulation",
          "Strategy",
          "algorithm family",
          "interchangeable"
        ],
        "answer": "encapsulation",
        "explanation": "encapsulation is a key concept in Design Patterns."
      },
      {
        "question": "Level 4 · What pattern applies interchangeable in Design Patterns?",
        "options": [
          "interchangeable",
          "Strategy",
          "algorithm family",
          "encapsulation"
        ],
        "answer": "interchangeable",
        "explanation": "interchangeable is a key concept in Design Patterns."
      },
      {
        "question": "Level 4 · What strategy handles strategy interface in Design Patterns?",
        "options": [
          "strategy interface",
          "Strategy",
          "algorithm family",
          "encapsulation"
        ],
        "answer": "strategy interface",
        "explanation": "strategy interface is a key concept in Design Patterns."
      },
      {
        "question": "Level 4 · When would you use context in Design Patterns?",
        "options": [
          "context",
          "Strategy",
          "algorithm family",
          "encapsulation"
        ],
        "answer": "context",
        "explanation": "context is a key concept in Design Patterns."
      },
      {
        "question": "Level 4 · What is a real-world example of runtime selection in Design Patterns?",
        "options": [
          "runtime selection",
          "Strategy",
          "algorithm family",
          "encapsulation"
        ],
        "answer": "runtime selection",
        "explanation": "runtime selection is a key concept in Design Patterns."
      },
      {
        "question": "Level 4 · How would you implement policy pattern in Design Patterns?",
        "options": [
          "policy pattern",
          "Strategy",
          "algorithm family",
          "encapsulation"
        ],
        "answer": "policy pattern",
        "explanation": "policy pattern is a key concept in Design Patterns."
      },
      {
        "question": "Level 4 · What pattern applies composition over inheritance in Design Patterns?",
        "options": [
          "composition over inheritance",
          "Strategy",
          "algorithm family",
          "encapsulation"
        ],
        "answer": "composition over inheritance",
        "explanation": "composition over inheritance is a key concept in Design Patterns."
      },
      {
        "question": "Level 4 · What strategy handles open-closed principle in Design Patterns?",
        "options": [
          "open-closed principle",
          "Strategy",
          "algorithm family",
          "encapsulation"
        ],
        "answer": "open-closed principle",
        "explanation": "open-closed principle is a key concept in Design Patterns."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize Decorator in Design Patterns?",
        "options": [
          "Decorator",
          "wrapping",
          "composition",
          "transparent"
        ],
        "answer": "Decorator",
        "explanation": "Decorator is a key concept in Design Patterns."
      },
      {
        "question": "Level 5 · What is the best practice for wrapping in Design Patterns?",
        "options": [
          "wrapping",
          "Decorator",
          "composition",
          "transparent"
        ],
        "answer": "wrapping",
        "explanation": "wrapping is a key concept in Design Patterns."
      },
      {
        "question": "Level 5 · What performance consideration involves composition in Design Patterns?",
        "options": [
          "composition",
          "Decorator",
          "wrapping",
          "transparent"
        ],
        "answer": "composition",
        "explanation": "composition is a key concept in Design Patterns."
      },
      {
        "question": "Level 5 · How do you scale transparent in Design Patterns?",
        "options": [
          "transparent",
          "Decorator",
          "wrapping",
          "composition"
        ],
        "answer": "transparent",
        "explanation": "transparent is a key concept in Design Patterns."
      },
      {
        "question": "Level 5 · What tradeoff exists when using recursive in Design Patterns?",
        "options": [
          "recursive",
          "Decorator",
          "wrapping",
          "composition"
        ],
        "answer": "recursive",
        "explanation": "recursive is a key concept in Design Patterns."
      },
      {
        "question": "Level 5 · How do you optimize decorator interface in Design Patterns?",
        "options": [
          "decorator interface",
          "Decorator",
          "wrapping",
          "composition"
        ],
        "answer": "decorator interface",
        "explanation": "decorator interface is a key concept in Design Patterns."
      },
      {
        "question": "Level 5 · What is the best practice for concrete component in Design Patterns?",
        "options": [
          "concrete component",
          "Decorator",
          "wrapping",
          "composition"
        ],
        "answer": "concrete component",
        "explanation": "concrete component is a key concept in Design Patterns."
      },
      {
        "question": "Level 5 · What performance consideration involves runtime enhancement in Design Patterns?",
        "options": [
          "runtime enhancement",
          "Decorator",
          "wrapping",
          "composition"
        ],
        "answer": "runtime enhancement",
        "explanation": "runtime enhancement is a key concept in Design Patterns."
      },
      {
        "question": "Level 5 · How do you scale io streams example in Design Patterns?",
        "options": [
          "io streams example",
          "Decorator",
          "wrapping",
          "composition"
        ],
        "answer": "io streams example",
        "explanation": "io streams example is a key concept in Design Patterns."
      },
      {
        "question": "Level 5 · What tradeoff exists when using class-based vs interface-based in Design Patterns?",
        "options": [
          "class-based vs interface-based",
          "Decorator",
          "wrapping",
          "composition"
        ],
        "answer": "class-based vs interface-based",
        "explanation": "class-based vs interface-based is a key concept in Design Patterns."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare Adapter in Design Patterns?",
        "options": [
          "Adapter",
          "compatible interfaces",
          "wrapper",
          "class adapter"
        ],
        "answer": "Adapter",
        "explanation": "Adapter is a key concept in Design Patterns."
      },
      {
        "question": "Level 6 · How is it different from compatible interfaces in Design Patterns?",
        "options": [
          "compatible interfaces",
          "Adapter",
          "wrapper",
          "class adapter"
        ],
        "answer": "compatible interfaces",
        "explanation": "compatible interfaces is a key concept in Design Patterns."
      },
      {
        "question": "Level 6 · What are the pros and cons of wrapper in Design Patterns?",
        "options": [
          "wrapper",
          "Adapter",
          "compatible interfaces",
          "class adapter"
        ],
        "answer": "wrapper",
        "explanation": "wrapper is a key concept in Design Patterns."
      },
      {
        "question": "Level 6 · What advantage does class adapter in Design Patterns?",
        "options": [
          "class adapter",
          "Adapter",
          "compatible interfaces",
          "wrapper"
        ],
        "answer": "class adapter",
        "explanation": "class adapter is a key concept in Design Patterns."
      },
      {
        "question": "Level 6 · What limitation does object adapter in Design Patterns?",
        "options": [
          "object adapter",
          "Adapter",
          "compatible interfaces",
          "wrapper"
        ],
        "answer": "object adapter",
        "explanation": "object adapter is a key concept in Design Patterns."
      },
      {
        "question": "Level 6 · Compare target interface in Design Patterns?",
        "options": [
          "target interface",
          "Adapter",
          "compatible interfaces",
          "wrapper"
        ],
        "answer": "target interface",
        "explanation": "target interface is a key concept in Design Patterns."
      },
      {
        "question": "Level 6 · How is it different from client expectation in Design Patterns?",
        "options": [
          "client expectation",
          "Adapter",
          "compatible interfaces",
          "wrapper"
        ],
        "answer": "client expectation",
        "explanation": "client expectation is a key concept in Design Patterns."
      },
      {
        "question": "Level 6 · What are the pros and cons of legacy code in Design Patterns?",
        "options": [
          "legacy code",
          "Adapter",
          "compatible interfaces",
          "wrapper"
        ],
        "answer": "legacy code",
        "explanation": "legacy code is a key concept in Design Patterns."
      },
      {
        "question": "Level 6 · What advantage does pluggable adapter in Design Patterns?",
        "options": [
          "pluggable adapter",
          "Adapter",
          "compatible interfaces",
          "wrapper"
        ],
        "answer": "pluggable adapter",
        "explanation": "pluggable adapter is a key concept in Design Patterns."
      },
      {
        "question": "Level 6 · What limitation does two-way adapter in Design Patterns?",
        "options": [
          "two-way adapter",
          "Adapter",
          "compatible interfaces",
          "wrapper"
        ],
        "answer": "two-way adapter",
        "explanation": "two-way adapter is a key concept in Design Patterns."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with MVC in Design Patterns?",
        "options": [
          "MVC",
          "Model View Controller",
          "separation of concerns",
          "observer pattern"
        ],
        "answer": "MVC",
        "explanation": "MVC is a key concept in Design Patterns."
      },
      {
        "question": "Level 7 · What goes wrong when Model View Controller in Design Patterns?",
        "options": [
          "Model View Controller",
          "MVC",
          "separation of concerns",
          "observer pattern"
        ],
        "answer": "Model View Controller",
        "explanation": "Model View Controller is a key concept in Design Patterns."
      },
      {
        "question": "Level 7 · What common mistake involves separation of concerns in Design Patterns?",
        "options": [
          "separation of concerns",
          "MVC",
          "Model View Controller",
          "observer pattern"
        ],
        "answer": "separation of concerns",
        "explanation": "separation of concerns is a key concept in Design Patterns."
      },
      {
        "question": "Level 7 · How do you monitor observer pattern in Design Patterns?",
        "options": [
          "observer pattern",
          "MVC",
          "Model View Controller",
          "separation of concerns"
        ],
        "answer": "observer pattern",
        "explanation": "observer pattern is a key concept in Design Patterns."
      },
      {
        "question": "Level 7 · What failure mode occurs with controller in Design Patterns?",
        "options": [
          "controller",
          "MVC",
          "Model View Controller",
          "separation of concerns"
        ],
        "answer": "controller",
        "explanation": "controller is a key concept in Design Patterns."
      },
      {
        "question": "Level 7 · How do you debug issues with view update in Design Patterns?",
        "options": [
          "view update",
          "MVC",
          "Model View Controller",
          "separation of concerns"
        ],
        "answer": "view update",
        "explanation": "view update is a key concept in Design Patterns."
      },
      {
        "question": "Level 7 · What goes wrong when model state in Design Patterns?",
        "options": [
          "model state",
          "MVC",
          "Model View Controller",
          "separation of concerns"
        ],
        "answer": "model state",
        "explanation": "model state is a key concept in Design Patterns."
      },
      {
        "question": "Level 7 · What common mistake involves user input in Design Patterns?",
        "options": [
          "user input",
          "MVC",
          "Model View Controller",
          "separation of concerns"
        ],
        "answer": "user input",
        "explanation": "user input is a key concept in Design Patterns."
      },
      {
        "question": "Level 7 · How do you monitor application flow in Design Patterns?",
        "options": [
          "application flow",
          "MVC",
          "Model View Controller",
          "separation of concerns"
        ],
        "answer": "application flow",
        "explanation": "application flow is a key concept in Design Patterns."
      },
      {
        "question": "Level 7 · What failure mode occurs with web frameworks in Design Patterns?",
        "options": [
          "web frameworks",
          "MVC",
          "Model View Controller",
          "separation of concerns"
        ],
        "answer": "web frameworks",
        "explanation": "web frameworks is a key concept in Design Patterns."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves SOLID in Design Patterns?",
        "options": [
          "SOLID",
          "Single Responsibility",
          "Open-Closed",
          "Liskov Substitution"
        ],
        "answer": "SOLID",
        "explanation": "SOLID is a key concept in Design Patterns."
      },
      {
        "question": "Level 8 · How do you secure Single Responsibility in Design Patterns?",
        "options": [
          "Single Responsibility",
          "SOLID",
          "Open-Closed",
          "Liskov Substitution"
        ],
        "answer": "Single Responsibility",
        "explanation": "Single Responsibility is a key concept in Design Patterns."
      },
      {
        "question": "Level 8 · What testing strategy covers Open-Closed in Design Patterns?",
        "options": [
          "Open-Closed",
          "SOLID",
          "Single Responsibility",
          "Liskov Substitution"
        ],
        "answer": "Open-Closed",
        "explanation": "Open-Closed is a key concept in Design Patterns."
      },
      {
        "question": "Level 8 · How do you ensure reliability of Liskov Substitution in Design Patterns?",
        "options": [
          "Liskov Substitution",
          "SOLID",
          "Single Responsibility",
          "Open-Closed"
        ],
        "answer": "Liskov Substitution",
        "explanation": "Liskov Substitution is a key concept in Design Patterns."
      },
      {
        "question": "Level 8 · What error handling applies to Interface Segregation in Design Patterns?",
        "options": [
          "Interface Segregation",
          "SOLID",
          "Single Responsibility",
          "Open-Closed"
        ],
        "answer": "Interface Segregation",
        "explanation": "Interface Segregation is a key concept in Design Patterns."
      },
      {
        "question": "Level 8 · What security concern involves Dependency Inversion in Design Patterns?",
        "options": [
          "Dependency Inversion",
          "SOLID",
          "Single Responsibility",
          "Open-Closed"
        ],
        "answer": "Dependency Inversion",
        "explanation": "Dependency Inversion is a key concept in Design Patterns."
      },
      {
        "question": "Level 8 · How do you secure design principles in Design Patterns?",
        "options": [
          "design principles",
          "SOLID",
          "Single Responsibility",
          "Open-Closed"
        ],
        "answer": "design principles",
        "explanation": "design principles is a key concept in Design Patterns."
      },
      {
        "question": "Level 8 · What testing strategy covers cohesion in Design Patterns?",
        "options": [
          "cohesion",
          "SOLID",
          "Single Responsibility",
          "Open-Closed"
        ],
        "answer": "cohesion",
        "explanation": "cohesion is a key concept in Design Patterns."
      },
      {
        "question": "Level 8 · How do you ensure reliability of coupling in Design Patterns?",
        "options": [
          "coupling",
          "SOLID",
          "Single Responsibility",
          "Open-Closed"
        ],
        "answer": "coupling",
        "explanation": "coupling is a key concept in Design Patterns."
      },
      {
        "question": "Level 8 · What error handling applies to dependency management in Design Patterns?",
        "options": [
          "dependency management",
          "SOLID",
          "Single Responsibility",
          "Open-Closed"
        ],
        "answer": "dependency management",
        "explanation": "dependency management is a key concept in Design Patterns."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with Builder in Design Patterns?",
        "options": [
          "Builder",
          "construct complex objects",
          "fluent interface",
          "immutable object"
        ],
        "answer": "Builder",
        "explanation": "Builder is a key concept in Design Patterns."
      },
      {
        "question": "Level 9 · What architectural pattern uses construct complex objects in Design Patterns?",
        "options": [
          "construct complex objects",
          "Builder",
          "fluent interface",
          "immutable object"
        ],
        "answer": "construct complex objects",
        "explanation": "construct complex objects is a key concept in Design Patterns."
      },
      {
        "question": "Level 9 · How would you design a system with fluent interface in Design Patterns?",
        "options": [
          "fluent interface",
          "Builder",
          "construct complex objects",
          "immutable object"
        ],
        "answer": "fluent interface",
        "explanation": "fluent interface is a key concept in Design Patterns."
      },
      {
        "question": "Level 9 · What dependency does have immutable object in Design Patterns?",
        "options": [
          "immutable object",
          "Builder",
          "construct complex objects",
          "fluent interface"
        ],
        "answer": "immutable object",
        "explanation": "immutable object is a key concept in Design Patterns."
      },
      {
        "question": "Level 9 · How do you migrate from step-by-step in Design Patterns?",
        "options": [
          "step-by-step",
          "Builder",
          "construct complex objects",
          "fluent interface"
        ],
        "answer": "step-by-step",
        "explanation": "step-by-step is a key concept in Design Patterns."
      },
      {
        "question": "Level 9 · How does integrate with director in Design Patterns?",
        "options": [
          "director",
          "Builder",
          "construct complex objects",
          "fluent interface"
        ],
        "answer": "director",
        "explanation": "director is a key concept in Design Patterns."
      },
      {
        "question": "Level 9 · What architectural pattern uses product in Design Patterns?",
        "options": [
          "product",
          "Builder",
          "construct complex objects",
          "fluent interface"
        ],
        "answer": "product",
        "explanation": "product is a key concept in Design Patterns."
      },
      {
        "question": "Level 9 · How would you design a system with builder interface in Design Patterns?",
        "options": [
          "builder interface",
          "Builder",
          "construct complex objects",
          "fluent interface"
        ],
        "answer": "builder interface",
        "explanation": "builder interface is a key concept in Design Patterns."
      },
      {
        "question": "Level 9 · What dependency does have StringBuilder analogy in Design Patterns?",
        "options": [
          "StringBuilder analogy",
          "Builder",
          "construct complex objects",
          "fluent interface"
        ],
        "answer": "StringBuilder analogy",
        "explanation": "StringBuilder analogy is a key concept in Design Patterns."
      },
      {
        "question": "Level 9 · How do you migrate from lombok @Builder in Design Patterns?",
        "options": [
          "lombok @Builder",
          "Builder",
          "construct complex objects",
          "fluent interface"
        ],
        "answer": "lombok @Builder",
        "explanation": "lombok @Builder is a key concept in Design Patterns."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of Proxy in Design Patterns?",
        "options": [
          "Proxy",
          "control access",
          "virtual proxy",
          "remote proxy"
        ],
        "answer": "Proxy",
        "explanation": "Proxy is a key concept in Design Patterns."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of control access in Design Patterns?",
        "options": [
          "control access",
          "Proxy",
          "virtual proxy",
          "remote proxy"
        ],
        "answer": "control access",
        "explanation": "control access is a key concept in Design Patterns."
      },
      {
        "question": "Level 10 · How does evolve across scales virtual proxy in Design Patterns?",
        "options": [
          "virtual proxy",
          "Proxy",
          "control access",
          "remote proxy"
        ],
        "answer": "virtual proxy",
        "explanation": "virtual proxy is a key concept in Design Patterns."
      },
      {
        "question": "Level 10 · What is the future direction of remote proxy in Design Patterns?",
        "options": [
          "remote proxy",
          "Proxy",
          "control access",
          "virtual proxy"
        ],
        "answer": "remote proxy",
        "explanation": "remote proxy is a key concept in Design Patterns."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves protection proxy in Design Patterns?",
        "options": [
          "protection proxy",
          "Proxy",
          "control access",
          "virtual proxy"
        ],
        "answer": "protection proxy",
        "explanation": "protection proxy is a key concept in Design Patterns."
      },
      {
        "question": "Level 10 · What is the theoretical basis of smart reference in Design Patterns?",
        "options": [
          "smart reference",
          "Proxy",
          "control access",
          "virtual proxy"
        ],
        "answer": "smart reference",
        "explanation": "smart reference is a key concept in Design Patterns."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of lazy loading in Design Patterns?",
        "options": [
          "lazy loading",
          "Proxy",
          "control access",
          "virtual proxy"
        ],
        "answer": "lazy loading",
        "explanation": "lazy loading is a key concept in Design Patterns."
      },
      {
        "question": "Level 10 · How does evolve across scales caching proxy in Design Patterns?",
        "options": [
          "caching proxy",
          "Proxy",
          "control access",
          "virtual proxy"
        ],
        "answer": "caching proxy",
        "explanation": "caching proxy is a key concept in Design Patterns."
      },
      {
        "question": "Level 10 · What is the future direction of logging proxy in Design Patterns?",
        "options": [
          "logging proxy",
          "Proxy",
          "control access",
          "virtual proxy"
        ],
        "answer": "logging proxy",
        "explanation": "logging proxy is a key concept in Design Patterns."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves AOP proxy in Design Patterns?",
        "options": [
          "AOP proxy",
          "Proxy",
          "control access",
          "virtual proxy"
        ],
        "answer": "AOP proxy",
        "explanation": "AOP proxy is a key concept in Design Patterns."
      }
    ]
  },
  "App Security": {
    "Level 1": [
      {
        "question": "Level 1 · What is OWASP Top 10 in App Security?",
        "options": [
          "OWASP Top 10",
          "injection",
          "broken authentication",
          "sensitive data exposure"
        ],
        "answer": "OWASP Top 10",
        "explanation": "OWASP Top 10 is a key concept in App Security."
      },
      {
        "question": "Level 1 · How would you define injection in App Security?",
        "options": [
          "injection",
          "OWASP Top 10",
          "broken authentication",
          "sensitive data exposure"
        ],
        "answer": "injection",
        "explanation": "injection is a key concept in App Security."
      },
      {
        "question": "Level 1 · Which describes broken authentication in App Security?",
        "options": [
          "broken authentication",
          "OWASP Top 10",
          "injection",
          "sensitive data exposure"
        ],
        "answer": "broken authentication",
        "explanation": "broken authentication is a key concept in App Security."
      },
      {
        "question": "Level 1 · What does the term sensitive data exposure in App Security?",
        "options": [
          "sensitive data exposure",
          "OWASP Top 10",
          "injection",
          "broken authentication"
        ],
        "answer": "sensitive data exposure",
        "explanation": "sensitive data exposure is a key concept in App Security."
      },
      {
        "question": "Level 1 · What concept is XXE in App Security?",
        "options": [
          "XXE",
          "OWASP Top 10",
          "injection",
          "broken authentication"
        ],
        "answer": "XXE",
        "explanation": "XXE is a key concept in App Security."
      },
      {
        "question": "Level 1 · What is broken access control in App Security?",
        "options": [
          "broken access control",
          "OWASP Top 10",
          "injection",
          "broken authentication"
        ],
        "answer": "broken access control",
        "explanation": "broken access control is a key concept in App Security."
      },
      {
        "question": "Level 1 · How would you define security misconfiguration in App Security?",
        "options": [
          "security misconfiguration",
          "OWASP Top 10",
          "injection",
          "broken authentication"
        ],
        "answer": "security misconfiguration",
        "explanation": "security misconfiguration is a key concept in App Security."
      },
      {
        "question": "Level 1 · Which describes XSS in App Security?",
        "options": [
          "XSS",
          "OWASP Top 10",
          "injection",
          "broken authentication"
        ],
        "answer": "XSS",
        "explanation": "XSS is a key concept in App Security."
      },
      {
        "question": "Level 1 · What does the term insecure deserialization in App Security?",
        "options": [
          "insecure deserialization",
          "OWASP Top 10",
          "injection",
          "broken authentication"
        ],
        "answer": "insecure deserialization",
        "explanation": "insecure deserialization is a key concept in App Security."
      },
      {
        "question": "Level 1 · What concept is logging in App Security?",
        "options": [
          "logging",
          "OWASP Top 10",
          "injection",
          "broken authentication"
        ],
        "answer": "logging",
        "explanation": "logging is a key concept in App Security."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you XSS in App Security?",
        "options": [
          "XSS",
          "reflected XSS",
          "stored XSS",
          "DOM-based XSS"
        ],
        "answer": "XSS",
        "explanation": "XSS is a key concept in App Security."
      },
      {
        "question": "Level 2 · What is the purpose of reflected XSS in App Security?",
        "options": [
          "reflected XSS",
          "XSS",
          "stored XSS",
          "DOM-based XSS"
        ],
        "answer": "reflected XSS",
        "explanation": "reflected XSS is a key concept in App Security."
      },
      {
        "question": "Level 2 · Which tool is used to stored XSS in App Security?",
        "options": [
          "stored XSS",
          "XSS",
          "reflected XSS",
          "DOM-based XSS"
        ],
        "answer": "stored XSS",
        "explanation": "stored XSS is a key concept in App Security."
      },
      {
        "question": "Level 2 · What does DOM-based XSS in App Security?",
        "options": [
          "DOM-based XSS",
          "XSS",
          "reflected XSS",
          "stored XSS"
        ],
        "answer": "DOM-based XSS",
        "explanation": "DOM-based XSS is a key concept in App Security."
      },
      {
        "question": "Level 2 · How can you payload in App Security?",
        "options": [
          "payload",
          "XSS",
          "reflected XSS",
          "stored XSS"
        ],
        "answer": "payload",
        "explanation": "payload is a key concept in App Security."
      },
      {
        "question": "Level 2 · How do you sanitization in App Security?",
        "options": [
          "sanitization",
          "XSS",
          "reflected XSS",
          "stored XSS"
        ],
        "answer": "sanitization",
        "explanation": "sanitization is a key concept in App Security."
      },
      {
        "question": "Level 2 · What is the purpose of Content Security Policy in App Security?",
        "options": [
          "Content Security Policy",
          "XSS",
          "reflected XSS",
          "stored XSS"
        ],
        "answer": "Content Security Policy",
        "explanation": "Content Security Policy is a key concept in App Security."
      },
      {
        "question": "Level 2 · Which tool is used to HttpOnly cookie in App Security?",
        "options": [
          "HttpOnly cookie",
          "XSS",
          "reflected XSS",
          "stored XSS"
        ],
        "answer": "HttpOnly cookie",
        "explanation": "HttpOnly cookie is a key concept in App Security."
      },
      {
        "question": "Level 2 · What does output encoding in App Security?",
        "options": [
          "output encoding",
          "XSS",
          "reflected XSS",
          "stored XSS"
        ],
        "answer": "output encoding",
        "explanation": "output encoding is a key concept in App Security."
      },
      {
        "question": "Level 2 · How can you XSS filter in App Security?",
        "options": [
          "XSS filter",
          "XSS",
          "reflected XSS",
          "stored XSS"
        ],
        "answer": "XSS filter",
        "explanation": "XSS filter is a key concept in App Security."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between CSRF in App Security?",
        "options": [
          "CSRF",
          "cross-site request forgery",
          "CSRF token",
          "SameSite cookie"
        ],
        "answer": "CSRF",
        "explanation": "CSRF is a key concept in App Security."
      },
      {
        "question": "Level 3 · How does cross-site request forgery in App Security?",
        "options": [
          "cross-site request forgery",
          "CSRF",
          "CSRF token",
          "SameSite cookie"
        ],
        "answer": "cross-site request forgery",
        "explanation": "cross-site request forgery is a key concept in App Security."
      },
      {
        "question": "Level 3 · What problem does CSRF token in App Security?",
        "options": [
          "CSRF token",
          "CSRF",
          "cross-site request forgery",
          "SameSite cookie"
        ],
        "answer": "CSRF token",
        "explanation": "CSRF token is a key concept in App Security."
      },
      {
        "question": "Level 3 · Which approach SameSite cookie in App Security?",
        "options": [
          "SameSite cookie",
          "CSRF",
          "cross-site request forgery",
          "CSRF token"
        ],
        "answer": "SameSite cookie",
        "explanation": "SameSite cookie is a key concept in App Security."
      },
      {
        "question": "Level 3 · What is the role of origin header in App Security?",
        "options": [
          "origin header",
          "CSRF",
          "cross-site request forgery",
          "CSRF token"
        ],
        "answer": "origin header",
        "explanation": "origin header is a key concept in App Security."
      },
      {
        "question": "Level 3 · What is the difference between referer header in App Security?",
        "options": [
          "referer header",
          "CSRF",
          "cross-site request forgery",
          "CSRF token"
        ],
        "answer": "referer header",
        "explanation": "referer header is a key concept in App Security."
      },
      {
        "question": "Level 3 · How does state changing in App Security?",
        "options": [
          "state changing",
          "CSRF",
          "cross-site request forgery",
          "CSRF token"
        ],
        "answer": "state changing",
        "explanation": "state changing is a key concept in App Security."
      },
      {
        "question": "Level 3 · What problem does double submit cookie in App Security?",
        "options": [
          "double submit cookie",
          "CSRF",
          "cross-site request forgery",
          "CSRF token"
        ],
        "answer": "double submit cookie",
        "explanation": "double submit cookie is a key concept in App Security."
      },
      {
        "question": "Level 3 · Which approach synchronizer token in App Security?",
        "options": [
          "synchronizer token",
          "CSRF",
          "cross-site request forgery",
          "CSRF token"
        ],
        "answer": "synchronizer token",
        "explanation": "synchronizer token is a key concept in App Security."
      },
      {
        "question": "Level 3 · What is the role of idempotent operations in App Security?",
        "options": [
          "idempotent operations",
          "CSRF",
          "cross-site request forgery",
          "CSRF token"
        ],
        "answer": "idempotent operations",
        "explanation": "idempotent operations is a key concept in App Security."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use SQL injection in App Security?",
        "options": [
          "SQL injection",
          "parameterized query",
          "prepared statement",
          "ORM injection"
        ],
        "answer": "SQL injection",
        "explanation": "SQL injection is a key concept in App Security."
      },
      {
        "question": "Level 4 · What is a real-world example of parameterized query in App Security?",
        "options": [
          "parameterized query",
          "SQL injection",
          "prepared statement",
          "ORM injection"
        ],
        "answer": "parameterized query",
        "explanation": "parameterized query is a key concept in App Security."
      },
      {
        "question": "Level 4 · How would you implement prepared statement in App Security?",
        "options": [
          "prepared statement",
          "SQL injection",
          "parameterized query",
          "ORM injection"
        ],
        "answer": "prepared statement",
        "explanation": "prepared statement is a key concept in App Security."
      },
      {
        "question": "Level 4 · What pattern applies ORM injection in App Security?",
        "options": [
          "ORM injection",
          "SQL injection",
          "parameterized query",
          "prepared statement"
        ],
        "answer": "ORM injection",
        "explanation": "ORM injection is a key concept in App Security."
      },
      {
        "question": "Level 4 · What strategy handles blind SQL injection in App Security?",
        "options": [
          "blind SQL injection",
          "SQL injection",
          "parameterized query",
          "prepared statement"
        ],
        "answer": "blind SQL injection",
        "explanation": "blind SQL injection is a key concept in App Security."
      },
      {
        "question": "Level 4 · When would you use error-based in App Security?",
        "options": [
          "error-based",
          "SQL injection",
          "parameterized query",
          "prepared statement"
        ],
        "answer": "error-based",
        "explanation": "error-based is a key concept in App Security."
      },
      {
        "question": "Level 4 · What is a real-world example of union-based in App Security?",
        "options": [
          "union-based",
          "SQL injection",
          "parameterized query",
          "prepared statement"
        ],
        "answer": "union-based",
        "explanation": "union-based is a key concept in App Security."
      },
      {
        "question": "Level 4 · How would you implement time-based in App Security?",
        "options": [
          "time-based",
          "SQL injection",
          "parameterized query",
          "prepared statement"
        ],
        "answer": "time-based",
        "explanation": "time-based is a key concept in App Security."
      },
      {
        "question": "Level 4 · What pattern applies input validation in App Security?",
        "options": [
          "input validation",
          "SQL injection",
          "parameterized query",
          "prepared statement"
        ],
        "answer": "input validation",
        "explanation": "input validation is a key concept in App Security."
      },
      {
        "question": "Level 4 · What strategy handles stored procedure in App Security?",
        "options": [
          "stored procedure",
          "SQL injection",
          "parameterized query",
          "prepared statement"
        ],
        "answer": "stored procedure",
        "explanation": "stored procedure is a key concept in App Security."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize authentication in App Security?",
        "options": [
          "authentication",
          "JWT",
          "OAuth 2.0",
          "OpenID Connect"
        ],
        "answer": "authentication",
        "explanation": "authentication is a key concept in App Security."
      },
      {
        "question": "Level 5 · What is the best practice for JWT in App Security?",
        "options": [
          "JWT",
          "authentication",
          "OAuth 2.0",
          "OpenID Connect"
        ],
        "answer": "JWT",
        "explanation": "JWT is a key concept in App Security."
      },
      {
        "question": "Level 5 · What performance consideration involves OAuth 2.0 in App Security?",
        "options": [
          "OAuth 2.0",
          "authentication",
          "JWT",
          "OpenID Connect"
        ],
        "answer": "OAuth 2.0",
        "explanation": "OAuth 2.0 is a key concept in App Security."
      },
      {
        "question": "Level 5 · How do you scale OpenID Connect in App Security?",
        "options": [
          "OpenID Connect",
          "authentication",
          "JWT",
          "OAuth 2.0"
        ],
        "answer": "OpenID Connect",
        "explanation": "OpenID Connect is a key concept in App Security."
      },
      {
        "question": "Level 5 · What tradeoff exists when using session management in App Security?",
        "options": [
          "session management",
          "authentication",
          "JWT",
          "OAuth 2.0"
        ],
        "answer": "session management",
        "explanation": "session management is a key concept in App Security."
      },
      {
        "question": "Level 5 · How do you optimize password hashing in App Security?",
        "options": [
          "password hashing",
          "authentication",
          "JWT",
          "OAuth 2.0"
        ],
        "answer": "password hashing",
        "explanation": "password hashing is a key concept in App Security."
      },
      {
        "question": "Level 5 · What is the best practice for bcrypt in App Security?",
        "options": [
          "bcrypt",
          "authentication",
          "JWT",
          "OAuth 2.0"
        ],
        "answer": "bcrypt",
        "explanation": "bcrypt is a key concept in App Security."
      },
      {
        "question": "Level 5 · What performance consideration involves multi-factor in App Security?",
        "options": [
          "multi-factor",
          "authentication",
          "JWT",
          "OAuth 2.0"
        ],
        "answer": "multi-factor",
        "explanation": "multi-factor is a key concept in App Security."
      },
      {
        "question": "Level 5 · How do you scale rate limiting in App Security?",
        "options": [
          "rate limiting",
          "authentication",
          "JWT",
          "OAuth 2.0"
        ],
        "answer": "rate limiting",
        "explanation": "rate limiting is a key concept in App Security."
      },
      {
        "question": "Level 5 · What tradeoff exists when using lockout policy in App Security?",
        "options": [
          "lockout policy",
          "authentication",
          "JWT",
          "OAuth 2.0"
        ],
        "answer": "lockout policy",
        "explanation": "lockout policy is a key concept in App Security."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare authorization in App Security?",
        "options": [
          "authorization",
          "RBAC",
          "ABAC",
          "permission"
        ],
        "answer": "authorization",
        "explanation": "authorization is a key concept in App Security."
      },
      {
        "question": "Level 6 · How is it different from RBAC in App Security?",
        "options": [
          "RBAC",
          "authorization",
          "ABAC",
          "permission"
        ],
        "answer": "RBAC",
        "explanation": "RBAC is a key concept in App Security."
      },
      {
        "question": "Level 6 · What are the pros and cons of ABAC in App Security?",
        "options": [
          "ABAC",
          "authorization",
          "RBAC",
          "permission"
        ],
        "answer": "ABAC",
        "explanation": "ABAC is a key concept in App Security."
      },
      {
        "question": "Level 6 · What advantage does permission in App Security?",
        "options": [
          "permission",
          "authorization",
          "RBAC",
          "ABAC"
        ],
        "answer": "permission",
        "explanation": "permission is a key concept in App Security."
      },
      {
        "question": "Level 6 · What limitation does privilege escalation in App Security?",
        "options": [
          "privilege escalation",
          "authorization",
          "RBAC",
          "ABAC"
        ],
        "answer": "privilege escalation",
        "explanation": "privilege escalation is a key concept in App Security."
      },
      {
        "question": "Level 6 · Compare horizontal vs vertical in App Security?",
        "options": [
          "horizontal vs vertical",
          "authorization",
          "RBAC",
          "ABAC"
        ],
        "answer": "horizontal vs vertical",
        "explanation": "horizontal vs vertical is a key concept in App Security."
      },
      {
        "question": "Level 6 · How is it different from ACL in App Security?",
        "options": [
          "ACL",
          "authorization",
          "RBAC",
          "ABAC"
        ],
        "answer": "ACL",
        "explanation": "ACL is a key concept in App Security."
      },
      {
        "question": "Level 6 · What are the pros and cons of policy engine in App Security?",
        "options": [
          "policy engine",
          "authorization",
          "RBAC",
          "ABAC"
        ],
        "answer": "policy engine",
        "explanation": "policy engine is a key concept in App Security."
      },
      {
        "question": "Level 6 · What advantage does least privilege in App Security?",
        "options": [
          "least privilege",
          "authorization",
          "RBAC",
          "ABAC"
        ],
        "answer": "least privilege",
        "explanation": "least privilege is a key concept in App Security."
      },
      {
        "question": "Level 6 · What limitation does access control in App Security?",
        "options": [
          "access control",
          "authorization",
          "RBAC",
          "ABAC"
        ],
        "answer": "access control",
        "explanation": "access control is a key concept in App Security."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with secure communication in App Security?",
        "options": [
          "secure communication",
          "TLS",
          "mTLS",
          "HTTPS"
        ],
        "answer": "secure communication",
        "explanation": "secure communication is a key concept in App Security."
      },
      {
        "question": "Level 7 · What goes wrong when TLS in App Security?",
        "options": [
          "TLS",
          "secure communication",
          "mTLS",
          "HTTPS"
        ],
        "answer": "TLS",
        "explanation": "TLS is a key concept in App Security."
      },
      {
        "question": "Level 7 · What common mistake involves mTLS in App Security?",
        "options": [
          "mTLS",
          "secure communication",
          "TLS",
          "HTTPS"
        ],
        "answer": "mTLS",
        "explanation": "mTLS is a key concept in App Security."
      },
      {
        "question": "Level 7 · How do you monitor HTTPS in App Security?",
        "options": [
          "HTTPS",
          "secure communication",
          "TLS",
          "mTLS"
        ],
        "answer": "HTTPS",
        "explanation": "HTTPS is a key concept in App Security."
      },
      {
        "question": "Level 7 · What failure mode occurs with certificate pinning in App Security?",
        "options": [
          "certificate pinning",
          "secure communication",
          "TLS",
          "mTLS"
        ],
        "answer": "certificate pinning",
        "explanation": "certificate pinning is a key concept in App Security."
      },
      {
        "question": "Level 7 · How do you debug issues with HSTS in App Security?",
        "options": [
          "HSTS",
          "secure communication",
          "TLS",
          "mTLS"
        ],
        "answer": "HSTS",
        "explanation": "HSTS is a key concept in App Security."
      },
      {
        "question": "Level 7 · What goes wrong when CSP in App Security?",
        "options": [
          "CSP",
          "secure communication",
          "TLS",
          "mTLS"
        ],
        "answer": "CSP",
        "explanation": "CSP is a key concept in App Security."
      },
      {
        "question": "Level 7 · What common mistake involves encryption in transit in App Security?",
        "options": [
          "encryption in transit",
          "secure communication",
          "TLS",
          "mTLS"
        ],
        "answer": "encryption in transit",
        "explanation": "encryption in transit is a key concept in App Security."
      },
      {
        "question": "Level 7 · How do you monitor cipher suite in App Security?",
        "options": [
          "cipher suite",
          "secure communication",
          "TLS",
          "mTLS"
        ],
        "answer": "cipher suite",
        "explanation": "cipher suite is a key concept in App Security."
      },
      {
        "question": "Level 7 · What failure mode occurs with SSL handshake in App Security?",
        "options": [
          "SSL handshake",
          "secure communication",
          "TLS",
          "mTLS"
        ],
        "answer": "SSL handshake",
        "explanation": "SSL handshake is a key concept in App Security."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves input validation in App Security?",
        "options": [
          "input validation",
          "whitelist",
          "blacklist",
          "escaping"
        ],
        "answer": "input validation",
        "explanation": "input validation is a key concept in App Security."
      },
      {
        "question": "Level 8 · How do you secure whitelist in App Security?",
        "options": [
          "whitelist",
          "input validation",
          "blacklist",
          "escaping"
        ],
        "answer": "whitelist",
        "explanation": "whitelist is a key concept in App Security."
      },
      {
        "question": "Level 8 · What testing strategy covers blacklist in App Security?",
        "options": [
          "blacklist",
          "input validation",
          "whitelist",
          "escaping"
        ],
        "answer": "blacklist",
        "explanation": "blacklist is a key concept in App Security."
      },
      {
        "question": "Level 8 · How do you ensure reliability of escaping in App Security?",
        "options": [
          "escaping",
          "input validation",
          "whitelist",
          "blacklist"
        ],
        "answer": "escaping",
        "explanation": "escaping is a key concept in App Security."
      },
      {
        "question": "Level 8 · What error handling applies to encode in App Security?",
        "options": [
          "encode",
          "input validation",
          "whitelist",
          "blacklist"
        ],
        "answer": "encode",
        "explanation": "encode is a key concept in App Security."
      },
      {
        "question": "Level 8 · What security concern involves sanitize in App Security?",
        "options": [
          "sanitize",
          "input validation",
          "whitelist",
          "blacklist"
        ],
        "answer": "sanitize",
        "explanation": "sanitize is a key concept in App Security."
      },
      {
        "question": "Level 8 · How do you secure validation framework in App Security?",
        "options": [
          "validation framework",
          "input validation",
          "whitelist",
          "blacklist"
        ],
        "answer": "validation framework",
        "explanation": "validation framework is a key concept in App Security."
      },
      {
        "question": "Level 8 · What testing strategy covers allowed characters in App Security?",
        "options": [
          "allowed characters",
          "input validation",
          "whitelist",
          "blacklist"
        ],
        "answer": "allowed characters",
        "explanation": "allowed characters is a key concept in App Security."
      },
      {
        "question": "Level 8 · How do you ensure reliability of length check in App Security?",
        "options": [
          "length check",
          "input validation",
          "whitelist",
          "blacklist"
        ],
        "answer": "length check",
        "explanation": "length check is a key concept in App Security."
      },
      {
        "question": "Level 8 · What error handling applies to format check in App Security?",
        "options": [
          "format check",
          "input validation",
          "whitelist",
          "blacklist"
        ],
        "answer": "format check",
        "explanation": "format check is a key concept in App Security."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with session security in App Security?",
        "options": [
          "session security",
          "session ID",
          "secure flag",
          "httpOnly"
        ],
        "answer": "session security",
        "explanation": "session security is a key concept in App Security."
      },
      {
        "question": "Level 9 · What architectural pattern uses session ID in App Security?",
        "options": [
          "session ID",
          "session security",
          "secure flag",
          "httpOnly"
        ],
        "answer": "session ID",
        "explanation": "session ID is a key concept in App Security."
      },
      {
        "question": "Level 9 · How would you design a system with secure flag in App Security?",
        "options": [
          "secure flag",
          "session security",
          "session ID",
          "httpOnly"
        ],
        "answer": "secure flag",
        "explanation": "secure flag is a key concept in App Security."
      },
      {
        "question": "Level 9 · What dependency does have httpOnly in App Security?",
        "options": [
          "httpOnly",
          "session security",
          "session ID",
          "secure flag"
        ],
        "answer": "httpOnly",
        "explanation": "httpOnly is a key concept in App Security."
      },
      {
        "question": "Level 9 · How do you migrate from session timeout in App Security?",
        "options": [
          "session timeout",
          "session security",
          "session ID",
          "secure flag"
        ],
        "answer": "session timeout",
        "explanation": "session timeout is a key concept in App Security."
      },
      {
        "question": "Level 9 · How does integrate with session fixation in App Security?",
        "options": [
          "session fixation",
          "session security",
          "session ID",
          "secure flag"
        ],
        "answer": "session fixation",
        "explanation": "session fixation is a key concept in App Security."
      },
      {
        "question": "Level 9 · What architectural pattern uses session hijacking in App Security?",
        "options": [
          "session hijacking",
          "session security",
          "session ID",
          "secure flag"
        ],
        "answer": "session hijacking",
        "explanation": "session hijacking is a key concept in App Security."
      },
      {
        "question": "Level 9 · How would you design a system with replay attack in App Security?",
        "options": [
          "replay attack",
          "session security",
          "session ID",
          "secure flag"
        ],
        "answer": "replay attack",
        "explanation": "replay attack is a key concept in App Security."
      },
      {
        "question": "Level 9 · What dependency does have secure cookie in App Security?",
        "options": [
          "secure cookie",
          "session security",
          "session ID",
          "secure flag"
        ],
        "answer": "secure cookie",
        "explanation": "secure cookie is a key concept in App Security."
      },
      {
        "question": "Level 9 · How do you migrate from session storage in App Security?",
        "options": [
          "session storage",
          "session security",
          "session ID",
          "secure flag"
        ],
        "answer": "session storage",
        "explanation": "session storage is a key concept in App Security."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of dependency security in App Security?",
        "options": [
          "dependency security",
          "supply chain attack",
          "npm audit",
          "Snyk"
        ],
        "answer": "dependency security",
        "explanation": "dependency security is a key concept in App Security."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of supply chain attack in App Security?",
        "options": [
          "supply chain attack",
          "dependency security",
          "npm audit",
          "Snyk"
        ],
        "answer": "supply chain attack",
        "explanation": "supply chain attack is a key concept in App Security."
      },
      {
        "question": "Level 10 · How does evolve across scales npm audit in App Security?",
        "options": [
          "npm audit",
          "dependency security",
          "supply chain attack",
          "Snyk"
        ],
        "answer": "npm audit",
        "explanation": "npm audit is a key concept in App Security."
      },
      {
        "question": "Level 10 · What is the future direction of Snyk in App Security?",
        "options": [
          "Snyk",
          "dependency security",
          "supply chain attack",
          "npm audit"
        ],
        "answer": "Snyk",
        "explanation": "Snyk is a key concept in App Security."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves Dependabot in App Security?",
        "options": [
          "Dependabot",
          "dependency security",
          "supply chain attack",
          "npm audit"
        ],
        "answer": "Dependabot",
        "explanation": "Dependabot is a key concept in App Security."
      },
      {
        "question": "Level 10 · What is the theoretical basis of CVE in App Security?",
        "options": [
          "CVE",
          "dependency security",
          "supply chain attack",
          "npm audit"
        ],
        "answer": "CVE",
        "explanation": "CVE is a key concept in App Security."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of SBOM in App Security?",
        "options": [
          "SBOM",
          "dependency security",
          "supply chain attack",
          "npm audit"
        ],
        "answer": "SBOM",
        "explanation": "SBOM is a key concept in App Security."
      },
      {
        "question": "Level 10 · How does evolve across scales package verification in App Security?",
        "options": [
          "package verification",
          "dependency security",
          "supply chain attack",
          "npm audit"
        ],
        "answer": "package verification",
        "explanation": "package verification is a key concept in App Security."
      },
      {
        "question": "Level 10 · What is the future direction of lock file in App Security?",
        "options": [
          "lock file",
          "dependency security",
          "supply chain attack",
          "npm audit"
        ],
        "answer": "lock file",
        "explanation": "lock file is a key concept in App Security."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves vendor review in App Security?",
        "options": [
          "vendor review",
          "dependency security",
          "supply chain attack",
          "npm audit"
        ],
        "answer": "vendor review",
        "explanation": "vendor review is a key concept in App Security."
      }
    ]
  },
  "Blockchain": {
    "Level 1": [
      {
        "question": "Level 1 · What is blockchain in Blockchain?",
        "options": [
          "blockchain",
          "distributed ledger",
          "immutable",
          "consensus"
        ],
        "answer": "blockchain",
        "explanation": "blockchain is a key concept in Blockchain."
      },
      {
        "question": "Level 1 · How would you define distributed ledger in Blockchain?",
        "options": [
          "distributed ledger",
          "blockchain",
          "immutable",
          "consensus"
        ],
        "answer": "distributed ledger",
        "explanation": "distributed ledger is a key concept in Blockchain."
      },
      {
        "question": "Level 1 · Which describes immutable in Blockchain?",
        "options": [
          "immutable",
          "blockchain",
          "distributed ledger",
          "consensus"
        ],
        "answer": "immutable",
        "explanation": "immutable is a key concept in Blockchain."
      },
      {
        "question": "Level 1 · What does the term consensus in Blockchain?",
        "options": [
          "consensus",
          "blockchain",
          "distributed ledger",
          "immutable"
        ],
        "answer": "consensus",
        "explanation": "consensus is a key concept in Blockchain."
      },
      {
        "question": "Level 1 · What concept is decentralized in Blockchain?",
        "options": [
          "decentralized",
          "blockchain",
          "distributed ledger",
          "immutable"
        ],
        "answer": "decentralized",
        "explanation": "decentralized is a key concept in Blockchain."
      },
      {
        "question": "Level 1 · What is peer-to-peer in Blockchain?",
        "options": [
          "peer-to-peer",
          "blockchain",
          "distributed ledger",
          "immutable"
        ],
        "answer": "peer-to-peer",
        "explanation": "peer-to-peer is a key concept in Blockchain."
      },
      {
        "question": "Level 1 · How would you define block in Blockchain?",
        "options": [
          "block",
          "blockchain",
          "distributed ledger",
          "immutable"
        ],
        "answer": "block",
        "explanation": "block is a key concept in Blockchain."
      },
      {
        "question": "Level 1 · Which describes hash in Blockchain?",
        "options": [
          "hash",
          "blockchain",
          "distributed ledger",
          "immutable"
        ],
        "answer": "hash",
        "explanation": "hash is a key concept in Blockchain."
      },
      {
        "question": "Level 1 · What does the term chain in Blockchain?",
        "options": [
          "chain",
          "blockchain",
          "distributed ledger",
          "immutable"
        ],
        "answer": "chain",
        "explanation": "chain is a key concept in Blockchain."
      },
      {
        "question": "Level 1 · What concept is timestamp in Blockchain?",
        "options": [
          "timestamp",
          "blockchain",
          "distributed ledger",
          "immutable"
        ],
        "answer": "timestamp",
        "explanation": "timestamp is a key concept in Blockchain."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you Bitcoin in Blockchain?",
        "options": [
          "Bitcoin",
          "mining",
          "proof of work",
          "UTXO"
        ],
        "answer": "Bitcoin",
        "explanation": "Bitcoin is a key concept in Blockchain."
      },
      {
        "question": "Level 2 · What is the purpose of mining in Blockchain?",
        "options": [
          "mining",
          "Bitcoin",
          "proof of work",
          "UTXO"
        ],
        "answer": "mining",
        "explanation": "mining is a key concept in Blockchain."
      },
      {
        "question": "Level 2 · Which tool is used to proof of work in Blockchain?",
        "options": [
          "proof of work",
          "Bitcoin",
          "mining",
          "UTXO"
        ],
        "answer": "proof of work",
        "explanation": "proof of work is a key concept in Blockchain."
      },
      {
        "question": "Level 2 · What does UTXO in Blockchain?",
        "options": [
          "UTXO",
          "Bitcoin",
          "mining",
          "proof of work"
        ],
        "answer": "UTXO",
        "explanation": "UTXO is a key concept in Blockchain."
      },
      {
        "question": "Level 2 · How can you transaction in Blockchain?",
        "options": [
          "transaction",
          "Bitcoin",
          "mining",
          "proof of work"
        ],
        "answer": "transaction",
        "explanation": "transaction is a key concept in Blockchain."
      },
      {
        "question": "Level 2 · How do you block reward in Blockchain?",
        "options": [
          "block reward",
          "Bitcoin",
          "mining",
          "proof of work"
        ],
        "answer": "block reward",
        "explanation": "block reward is a key concept in Blockchain."
      },
      {
        "question": "Level 2 · What is the purpose of halving in Blockchain?",
        "options": [
          "halving",
          "Bitcoin",
          "mining",
          "proof of work"
        ],
        "answer": "halving",
        "explanation": "halving is a key concept in Blockchain."
      },
      {
        "question": "Level 2 · Which tool is used to wallet in Blockchain?",
        "options": [
          "wallet",
          "Bitcoin",
          "mining",
          "proof of work"
        ],
        "answer": "wallet",
        "explanation": "wallet is a key concept in Blockchain."
      },
      {
        "question": "Level 2 · What does private key in Blockchain?",
        "options": [
          "private key",
          "Bitcoin",
          "mining",
          "proof of work"
        ],
        "answer": "private key",
        "explanation": "private key is a key concept in Blockchain."
      },
      {
        "question": "Level 2 · How can you public key in Blockchain?",
        "options": [
          "public key",
          "Bitcoin",
          "mining",
          "proof of work"
        ],
        "answer": "public key",
        "explanation": "public key is a key concept in Blockchain."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between Ethereum in Blockchain?",
        "options": [
          "Ethereum",
          "smart contract",
          "EVM",
          "gas"
        ],
        "answer": "Ethereum",
        "explanation": "Ethereum is a key concept in Blockchain."
      },
      {
        "question": "Level 3 · How does smart contract in Blockchain?",
        "options": [
          "smart contract",
          "Ethereum",
          "EVM",
          "gas"
        ],
        "answer": "smart contract",
        "explanation": "smart contract is a key concept in Blockchain."
      },
      {
        "question": "Level 3 · What problem does EVM in Blockchain?",
        "options": [
          "EVM",
          "Ethereum",
          "smart contract",
          "gas"
        ],
        "answer": "EVM",
        "explanation": "EVM is a key concept in Blockchain."
      },
      {
        "question": "Level 3 · Which approach gas in Blockchain?",
        "options": [
          "gas",
          "Ethereum",
          "smart contract",
          "EVM"
        ],
        "answer": "gas",
        "explanation": "gas is a key concept in Blockchain."
      },
      {
        "question": "Level 3 · What is the role of transaction fee in Blockchain?",
        "options": [
          "transaction fee",
          "Ethereum",
          "smart contract",
          "EVM"
        ],
        "answer": "transaction fee",
        "explanation": "transaction fee is a key concept in Blockchain."
      },
      {
        "question": "Level 3 · What is the difference between account in Blockchain?",
        "options": [
          "account",
          "Ethereum",
          "smart contract",
          "EVM"
        ],
        "answer": "account",
        "explanation": "account is a key concept in Blockchain."
      },
      {
        "question": "Level 3 · How does nonce in Blockchain?",
        "options": [
          "nonce",
          "Ethereum",
          "smart contract",
          "EVM"
        ],
        "answer": "nonce",
        "explanation": "nonce is a key concept in Blockchain."
      },
      {
        "question": "Level 3 · What problem does state in Blockchain?",
        "options": [
          "state",
          "Ethereum",
          "smart contract",
          "EVM"
        ],
        "answer": "state",
        "explanation": "state is a key concept in Blockchain."
      },
      {
        "question": "Level 3 · Which approach ERC-20 in Blockchain?",
        "options": [
          "ERC-20",
          "Ethereum",
          "smart contract",
          "EVM"
        ],
        "answer": "ERC-20",
        "explanation": "ERC-20 is a key concept in Blockchain."
      },
      {
        "question": "Level 3 · What is the role of ERC-721 in Blockchain?",
        "options": [
          "ERC-721",
          "Ethereum",
          "smart contract",
          "EVM"
        ],
        "answer": "ERC-721",
        "explanation": "ERC-721 is a key concept in Blockchain."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use Solidity in Blockchain?",
        "options": [
          "Solidity",
          "contract",
          "function",
          "modifier"
        ],
        "answer": "Solidity",
        "explanation": "Solidity is a key concept in Blockchain."
      },
      {
        "question": "Level 4 · What is a real-world example of contract in Blockchain?",
        "options": [
          "contract",
          "Solidity",
          "function",
          "modifier"
        ],
        "answer": "contract",
        "explanation": "contract is a key concept in Blockchain."
      },
      {
        "question": "Level 4 · How would you implement function in Blockchain?",
        "options": [
          "function",
          "Solidity",
          "contract",
          "modifier"
        ],
        "answer": "function",
        "explanation": "function is a key concept in Blockchain."
      },
      {
        "question": "Level 4 · What pattern applies modifier in Blockchain?",
        "options": [
          "modifier",
          "Solidity",
          "contract",
          "function"
        ],
        "answer": "modifier",
        "explanation": "modifier is a key concept in Blockchain."
      },
      {
        "question": "Level 4 · What strategy handles event in Blockchain?",
        "options": [
          "event",
          "Solidity",
          "contract",
          "function"
        ],
        "answer": "event",
        "explanation": "event is a key concept in Blockchain."
      },
      {
        "question": "Level 4 · When would you use mapping in Blockchain?",
        "options": [
          "mapping",
          "Solidity",
          "contract",
          "function"
        ],
        "answer": "mapping",
        "explanation": "mapping is a key concept in Blockchain."
      },
      {
        "question": "Level 4 · What is a real-world example of struct in Blockchain?",
        "options": [
          "struct",
          "Solidity",
          "contract",
          "function"
        ],
        "answer": "struct",
        "explanation": "struct is a key concept in Blockchain."
      },
      {
        "question": "Level 4 · How would you implement enum in Blockchain?",
        "options": [
          "enum",
          "Solidity",
          "contract",
          "function"
        ],
        "answer": "enum",
        "explanation": "enum is a key concept in Blockchain."
      },
      {
        "question": "Level 4 · What pattern applies require in Blockchain?",
        "options": [
          "require",
          "Solidity",
          "contract",
          "function"
        ],
        "answer": "require",
        "explanation": "require is a key concept in Blockchain."
      },
      {
        "question": "Level 4 · What strategy handles revert in Blockchain?",
        "options": [
          "revert",
          "Solidity",
          "contract",
          "function"
        ],
        "answer": "revert",
        "explanation": "revert is a key concept in Blockchain."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize smart contract security in Blockchain?",
        "options": [
          "smart contract security",
          "reentrancy",
          "integer overflow",
          "access control"
        ],
        "answer": "smart contract security",
        "explanation": "smart contract security is a key concept in Blockchain."
      },
      {
        "question": "Level 5 · What is the best practice for reentrancy in Blockchain?",
        "options": [
          "reentrancy",
          "smart contract security",
          "integer overflow",
          "access control"
        ],
        "answer": "reentrancy",
        "explanation": "reentrancy is a key concept in Blockchain."
      },
      {
        "question": "Level 5 · What performance consideration involves integer overflow in Blockchain?",
        "options": [
          "integer overflow",
          "smart contract security",
          "reentrancy",
          "access control"
        ],
        "answer": "integer overflow",
        "explanation": "integer overflow is a key concept in Blockchain."
      },
      {
        "question": "Level 5 · How do you scale access control in Blockchain?",
        "options": [
          "access control",
          "smart contract security",
          "reentrancy",
          "integer overflow"
        ],
        "answer": "access control",
        "explanation": "access control is a key concept in Blockchain."
      },
      {
        "question": "Level 5 · What tradeoff exists when using front-running in Blockchain?",
        "options": [
          "front-running",
          "smart contract security",
          "reentrancy",
          "integer overflow"
        ],
        "answer": "front-running",
        "explanation": "front-running is a key concept in Blockchain."
      },
      {
        "question": "Level 5 · How do you optimize flash loan in Blockchain?",
        "options": [
          "flash loan",
          "smart contract security",
          "reentrancy",
          "integer overflow"
        ],
        "answer": "flash loan",
        "explanation": "flash loan is a key concept in Blockchain."
      },
      {
        "question": "Level 5 · What is the best practice for oracle manipulation in Blockchain?",
        "options": [
          "oracle manipulation",
          "smart contract security",
          "reentrancy",
          "integer overflow"
        ],
        "answer": "oracle manipulation",
        "explanation": "oracle manipulation is a key concept in Blockchain."
      },
      {
        "question": "Level 5 · What performance consideration involves signature replay in Blockchain?",
        "options": [
          "signature replay",
          "smart contract security",
          "reentrancy",
          "integer overflow"
        ],
        "answer": "signature replay",
        "explanation": "signature replay is a key concept in Blockchain."
      },
      {
        "question": "Level 5 · How do you scale gas limit in Blockchain?",
        "options": [
          "gas limit",
          "smart contract security",
          "reentrancy",
          "integer overflow"
        ],
        "answer": "gas limit",
        "explanation": "gas limit is a key concept in Blockchain."
      },
      {
        "question": "Level 5 · What tradeoff exists when using timestamp dependency in Blockchain?",
        "options": [
          "timestamp dependency",
          "smart contract security",
          "reentrancy",
          "integer overflow"
        ],
        "answer": "timestamp dependency",
        "explanation": "timestamp dependency is a key concept in Blockchain."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare DeFi in Blockchain?",
        "options": [
          "DeFi",
          "decentralized exchange",
          "AMM",
          "Uniswap"
        ],
        "answer": "DeFi",
        "explanation": "DeFi is a key concept in Blockchain."
      },
      {
        "question": "Level 6 · How is it different from decentralized exchange in Blockchain?",
        "options": [
          "decentralized exchange",
          "DeFi",
          "AMM",
          "Uniswap"
        ],
        "answer": "decentralized exchange",
        "explanation": "decentralized exchange is a key concept in Blockchain."
      },
      {
        "question": "Level 6 · What are the pros and cons of AMM in Blockchain?",
        "options": [
          "AMM",
          "DeFi",
          "decentralized exchange",
          "Uniswap"
        ],
        "answer": "AMM",
        "explanation": "AMM is a key concept in Blockchain."
      },
      {
        "question": "Level 6 · What advantage does Uniswap in Blockchain?",
        "options": [
          "Uniswap",
          "DeFi",
          "decentralized exchange",
          "AMM"
        ],
        "answer": "Uniswap",
        "explanation": "Uniswap is a key concept in Blockchain."
      },
      {
        "question": "Level 6 · What limitation does liquidity pool in Blockchain?",
        "options": [
          "liquidity pool",
          "DeFi",
          "decentralized exchange",
          "AMM"
        ],
        "answer": "liquidity pool",
        "explanation": "liquidity pool is a key concept in Blockchain."
      },
      {
        "question": "Level 6 · Compare yield farming in Blockchain?",
        "options": [
          "yield farming",
          "DeFi",
          "decentralized exchange",
          "AMM"
        ],
        "answer": "yield farming",
        "explanation": "yield farming is a key concept in Blockchain."
      },
      {
        "question": "Level 6 · How is it different from staking in Blockchain?",
        "options": [
          "staking",
          "DeFi",
          "decentralized exchange",
          "AMM"
        ],
        "answer": "staking",
        "explanation": "staking is a key concept in Blockchain."
      },
      {
        "question": "Level 6 · What are the pros and cons of lending in Blockchain?",
        "options": [
          "lending",
          "DeFi",
          "decentralized exchange",
          "AMM"
        ],
        "answer": "lending",
        "explanation": "lending is a key concept in Blockchain."
      },
      {
        "question": "Level 6 · What advantage does borrowing in Blockchain?",
        "options": [
          "borrowing",
          "DeFi",
          "decentralized exchange",
          "AMM"
        ],
        "answer": "borrowing",
        "explanation": "borrowing is a key concept in Blockchain."
      },
      {
        "question": "Level 6 · What limitation does impermanent loss in Blockchain?",
        "options": [
          "impermanent loss",
          "DeFi",
          "decentralized exchange",
          "AMM"
        ],
        "answer": "impermanent loss",
        "explanation": "impermanent loss is a key concept in Blockchain."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with Web3 in Blockchain?",
        "options": [
          "Web3",
          "dApp",
          "provider",
          "wallet connection"
        ],
        "answer": "Web3",
        "explanation": "Web3 is a key concept in Blockchain."
      },
      {
        "question": "Level 7 · What goes wrong when dApp in Blockchain?",
        "options": [
          "dApp",
          "Web3",
          "provider",
          "wallet connection"
        ],
        "answer": "dApp",
        "explanation": "dApp is a key concept in Blockchain."
      },
      {
        "question": "Level 7 · What common mistake involves provider in Blockchain?",
        "options": [
          "provider",
          "Web3",
          "dApp",
          "wallet connection"
        ],
        "answer": "provider",
        "explanation": "provider is a key concept in Blockchain."
      },
      {
        "question": "Level 7 · How do you monitor wallet connection in Blockchain?",
        "options": [
          "wallet connection",
          "Web3",
          "dApp",
          "provider"
        ],
        "answer": "wallet connection",
        "explanation": "wallet connection is a key concept in Blockchain."
      },
      {
        "question": "Level 7 · What failure mode occurs with MetaMask in Blockchain?",
        "options": [
          "MetaMask",
          "Web3",
          "dApp",
          "provider"
        ],
        "answer": "MetaMask",
        "explanation": "MetaMask is a key concept in Blockchain."
      },
      {
        "question": "Level 7 · How do you debug issues with ethers.js in Blockchain?",
        "options": [
          "ethers.js",
          "Web3",
          "dApp",
          "provider"
        ],
        "answer": "ethers.js",
        "explanation": "ethers.js is a key concept in Blockchain."
      },
      {
        "question": "Level 7 · What goes wrong when web3.js in Blockchain?",
        "options": [
          "web3.js",
          "Web3",
          "dApp",
          "provider"
        ],
        "answer": "web3.js",
        "explanation": "web3.js is a key concept in Blockchain."
      },
      {
        "question": "Level 7 · What common mistake involves ethers vs web3 in Blockchain?",
        "options": [
          "ethers vs web3",
          "Web3",
          "dApp",
          "provider"
        ],
        "answer": "ethers vs web3",
        "explanation": "ethers vs web3 is a key concept in Blockchain."
      },
      {
        "question": "Level 7 · How do you monitor transaction signing in Blockchain?",
        "options": [
          "transaction signing",
          "Web3",
          "dApp",
          "provider"
        ],
        "answer": "transaction signing",
        "explanation": "transaction signing is a key concept in Blockchain."
      },
      {
        "question": "Level 7 · What failure mode occurs with contract interaction in Blockchain?",
        "options": [
          "contract interaction",
          "Web3",
          "dApp",
          "provider"
        ],
        "answer": "contract interaction",
        "explanation": "contract interaction is a key concept in Blockchain."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves consensus mechanisms in Blockchain?",
        "options": [
          "consensus mechanisms",
          "proof of work",
          "proof of stake",
          "delegated proof of stake"
        ],
        "answer": "consensus mechanisms",
        "explanation": "consensus mechanisms is a key concept in Blockchain."
      },
      {
        "question": "Level 8 · How do you secure proof of work in Blockchain?",
        "options": [
          "proof of work",
          "consensus mechanisms",
          "proof of stake",
          "delegated proof of stake"
        ],
        "answer": "proof of work",
        "explanation": "proof of work is a key concept in Blockchain."
      },
      {
        "question": "Level 8 · What testing strategy covers proof of stake in Blockchain?",
        "options": [
          "proof of stake",
          "consensus mechanisms",
          "proof of work",
          "delegated proof of stake"
        ],
        "answer": "proof of stake",
        "explanation": "proof of stake is a key concept in Blockchain."
      },
      {
        "question": "Level 8 · How do you ensure reliability of delegated proof of stake in Blockchain?",
        "options": [
          "delegated proof of stake",
          "consensus mechanisms",
          "proof of work",
          "proof of stake"
        ],
        "answer": "delegated proof of stake",
        "explanation": "delegated proof of stake is a key concept in Blockchain."
      },
      {
        "question": "Level 8 · What error handling applies to proof of authority in Blockchain?",
        "options": [
          "proof of authority",
          "consensus mechanisms",
          "proof of work",
          "proof of stake"
        ],
        "answer": "proof of authority",
        "explanation": "proof of authority is a key concept in Blockchain."
      },
      {
        "question": "Level 8 · What security concern involves PBFT in Blockchain?",
        "options": [
          "PBFT",
          "consensus mechanisms",
          "proof of work",
          "proof of stake"
        ],
        "answer": "PBFT",
        "explanation": "PBFT is a key concept in Blockchain."
      },
      {
        "question": "Level 8 · How do you secure Nakamoto consensus in Blockchain?",
        "options": [
          "Nakamoto consensus",
          "consensus mechanisms",
          "proof of work",
          "proof of stake"
        ],
        "answer": "Nakamoto consensus",
        "explanation": "Nakamoto consensus is a key concept in Blockchain."
      },
      {
        "question": "Level 8 · What testing strategy covers finality in Blockchain?",
        "options": [
          "finality",
          "consensus mechanisms",
          "proof of work",
          "proof of stake"
        ],
        "answer": "finality",
        "explanation": "finality is a key concept in Blockchain."
      },
      {
        "question": "Level 8 · How do you ensure reliability of fork choice in Blockchain?",
        "options": [
          "fork choice",
          "consensus mechanisms",
          "proof of work",
          "proof of stake"
        ],
        "answer": "fork choice",
        "explanation": "fork choice is a key concept in Blockchain."
      },
      {
        "question": "Level 8 · What error handling applies to Casper in Blockchain?",
        "options": [
          "Casper",
          "consensus mechanisms",
          "proof of work",
          "proof of stake"
        ],
        "answer": "Casper",
        "explanation": "Casper is a key concept in Blockchain."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with NFT in Blockchain?",
        "options": [
          "NFT",
          "ERC-721",
          "metadata",
          "IPFS"
        ],
        "answer": "NFT",
        "explanation": "NFT is a key concept in Blockchain."
      },
      {
        "question": "Level 9 · What architectural pattern uses ERC-721 in Blockchain?",
        "options": [
          "ERC-721",
          "NFT",
          "metadata",
          "IPFS"
        ],
        "answer": "ERC-721",
        "explanation": "ERC-721 is a key concept in Blockchain."
      },
      {
        "question": "Level 9 · How would you design a system with metadata in Blockchain?",
        "options": [
          "metadata",
          "NFT",
          "ERC-721",
          "IPFS"
        ],
        "answer": "metadata",
        "explanation": "metadata is a key concept in Blockchain."
      },
      {
        "question": "Level 9 · What dependency does have IPFS in Blockchain?",
        "options": [
          "IPFS",
          "NFT",
          "ERC-721",
          "metadata"
        ],
        "answer": "IPFS",
        "explanation": "IPFS is a key concept in Blockchain."
      },
      {
        "question": "Level 9 · How do you migrate from royalties in Blockchain?",
        "options": [
          "royalties",
          "NFT",
          "ERC-721",
          "metadata"
        ],
        "answer": "royalties",
        "explanation": "royalties is a key concept in Blockchain."
      },
      {
        "question": "Level 9 · How does integrate with marketplace in Blockchain?",
        "options": [
          "marketplace",
          "NFT",
          "ERC-721",
          "metadata"
        ],
        "answer": "marketplace",
        "explanation": "marketplace is a key concept in Blockchain."
      },
      {
        "question": "Level 9 · What architectural pattern uses minting in Blockchain?",
        "options": [
          "minting",
          "NFT",
          "ERC-721",
          "metadata"
        ],
        "answer": "minting",
        "explanation": "minting is a key concept in Blockchain."
      },
      {
        "question": "Level 9 · How would you design a system with collection in Blockchain?",
        "options": [
          "collection",
          "NFT",
          "ERC-721",
          "metadata"
        ],
        "answer": "collection",
        "explanation": "collection is a key concept in Blockchain."
      },
      {
        "question": "Level 9 · What dependency does have rarity in Blockchain?",
        "options": [
          "rarity",
          "NFT",
          "ERC-721",
          "metadata"
        ],
        "answer": "rarity",
        "explanation": "rarity is a key concept in Blockchain."
      },
      {
        "question": "Level 9 · How do you migrate from provenance in Blockchain?",
        "options": [
          "provenance",
          "NFT",
          "ERC-721",
          "metadata"
        ],
        "answer": "provenance",
        "explanation": "provenance is a key concept in Blockchain."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of Layer 2 in Blockchain?",
        "options": [
          "Layer 2",
          "rollups",
          "optimistic rollup",
          "zero-knowledge rollup"
        ],
        "answer": "Layer 2",
        "explanation": "Layer 2 is a key concept in Blockchain."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of rollups in Blockchain?",
        "options": [
          "rollups",
          "Layer 2",
          "optimistic rollup",
          "zero-knowledge rollup"
        ],
        "answer": "rollups",
        "explanation": "rollups is a key concept in Blockchain."
      },
      {
        "question": "Level 10 · How does evolve across scales optimistic rollup in Blockchain?",
        "options": [
          "optimistic rollup",
          "Layer 2",
          "rollups",
          "zero-knowledge rollup"
        ],
        "answer": "optimistic rollup",
        "explanation": "optimistic rollup is a key concept in Blockchain."
      },
      {
        "question": "Level 10 · What is the future direction of zero-knowledge rollup in Blockchain?",
        "options": [
          "zero-knowledge rollup",
          "Layer 2",
          "rollups",
          "optimistic rollup"
        ],
        "answer": "zero-knowledge rollup",
        "explanation": "zero-knowledge rollup is a key concept in Blockchain."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves state channels in Blockchain?",
        "options": [
          "state channels",
          "Layer 2",
          "rollups",
          "optimistic rollup"
        ],
        "answer": "state channels",
        "explanation": "state channels is a key concept in Blockchain."
      },
      {
        "question": "Level 10 · What is the theoretical basis of plasma in Blockchain?",
        "options": [
          "plasma",
          "Layer 2",
          "rollups",
          "optimistic rollup"
        ],
        "answer": "plasma",
        "explanation": "plasma is a key concept in Blockchain."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of validium in Blockchain?",
        "options": [
          "validium",
          "Layer 2",
          "rollups",
          "optimistic rollup"
        ],
        "answer": "validium",
        "explanation": "validium is a key concept in Blockchain."
      },
      {
        "question": "Level 10 · How does evolve across scales sidechain in Blockchain?",
        "options": [
          "sidechain",
          "Layer 2",
          "rollups",
          "optimistic rollup"
        ],
        "answer": "sidechain",
        "explanation": "sidechain is a key concept in Blockchain."
      },
      {
        "question": "Level 10 · What is the future direction of arbitrum in Blockchain?",
        "options": [
          "arbitrum",
          "Layer 2",
          "rollups",
          "optimistic rollup"
        ],
        "answer": "arbitrum",
        "explanation": "arbitrum is a key concept in Blockchain."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves optimism in Blockchain?",
        "options": [
          "optimism",
          "Layer 2",
          "rollups",
          "optimistic rollup"
        ],
        "answer": "optimism",
        "explanation": "optimism is a key concept in Blockchain."
      }
    ]
  },
  "Backend": {
    "Level 1": [
      {
        "question": "Level 1 · What is server in Backend?",
        "options": [
          "server",
          "computer providing services to others",
          "API",
          "HTTP methods like GET and POST"
        ],
        "answer": "server",
        "explanation": "server is a key concept in Backend."
      },
      {
        "question": "Level 1 · How would you define computer providing services to others in Backend?",
        "options": [
          "computer providing services to others",
          "server",
          "API",
          "HTTP methods like GET and POST"
        ],
        "answer": "computer providing services to others",
        "explanation": "computer providing services to others is a key concept in Backend."
      },
      {
        "question": "Level 1 · Which describes API in Backend?",
        "options": [
          "API",
          "server",
          "computer providing services to others",
          "HTTP methods like GET and POST"
        ],
        "answer": "API",
        "explanation": "API is a key concept in Backend."
      },
      {
        "question": "Level 1 · What does the term HTTP methods like GET and POST in Backend?",
        "options": [
          "HTTP methods like GET and POST",
          "server",
          "computer providing services to others",
          "API"
        ],
        "answer": "HTTP methods like GET and POST",
        "explanation": "HTTP methods like GET and POST is a key concept in Backend."
      },
      {
        "question": "Level 1 · What concept is routing in Backend?",
        "options": [
          "routing",
          "server",
          "computer providing services to others",
          "API"
        ],
        "answer": "routing",
        "explanation": "routing is a key concept in Backend."
      },
      {
        "question": "Level 1 · What is request-response cycle in Backend?",
        "options": [
          "request-response cycle",
          "server",
          "computer providing services to others",
          "API"
        ],
        "answer": "request-response cycle",
        "explanation": "request-response cycle is a key concept in Backend."
      },
      {
        "question": "Level 1 · How would you define client-server model in Backend?",
        "options": [
          "client-server model",
          "server",
          "computer providing services to others",
          "API"
        ],
        "answer": "client-server model",
        "explanation": "client-server model is a key concept in Backend."
      },
      {
        "question": "Level 1 · Which describes port numbers in Backend?",
        "options": [
          "port numbers",
          "server",
          "computer providing services to others",
          "API"
        ],
        "answer": "port numbers",
        "explanation": "port numbers is a key concept in Backend."
      },
      {
        "question": "Level 1 · What does the term localhost in Backend?",
        "options": [
          "localhost",
          "server",
          "computer providing services to others",
          "API"
        ],
        "answer": "localhost",
        "explanation": "localhost is a key concept in Backend."
      },
      {
        "question": "Level 1 · What concept is TCP/IP in Backend?",
        "options": [
          "TCP/IP",
          "server",
          "computer providing services to others",
          "API"
        ],
        "answer": "TCP/IP",
        "explanation": "TCP/IP is a key concept in Backend."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you Express.js in Backend?",
        "options": [
          "Express.js",
          "middleware",
          "RESTful API",
          "CRUD operations"
        ],
        "answer": "Express.js",
        "explanation": "Express.js is a key concept in Backend."
      },
      {
        "question": "Level 2 · What is the purpose of middleware in Backend?",
        "options": [
          "middleware",
          "Express.js",
          "RESTful API",
          "CRUD operations"
        ],
        "answer": "middleware",
        "explanation": "middleware is a key concept in Backend."
      },
      {
        "question": "Level 2 · Which tool is used to RESTful API in Backend?",
        "options": [
          "RESTful API",
          "Express.js",
          "middleware",
          "CRUD operations"
        ],
        "answer": "RESTful API",
        "explanation": "RESTful API is a key concept in Backend."
      },
      {
        "question": "Level 2 · What does CRUD operations in Backend?",
        "options": [
          "CRUD operations",
          "Express.js",
          "middleware",
          "RESTful API"
        ],
        "answer": "CRUD operations",
        "explanation": "CRUD operations is a key concept in Backend."
      },
      {
        "question": "Level 2 · How can you HTTP status codes in Backend?",
        "options": [
          "HTTP status codes",
          "Express.js",
          "middleware",
          "RESTful API"
        ],
        "answer": "HTTP status codes",
        "explanation": "HTTP status codes is a key concept in Backend."
      },
      {
        "question": "Level 2 · How do you request body in Backend?",
        "options": [
          "request body",
          "Express.js",
          "middleware",
          "RESTful API"
        ],
        "answer": "request body",
        "explanation": "request body is a key concept in Backend."
      },
      {
        "question": "Level 2 · What is the purpose of response headers in Backend?",
        "options": [
          "response headers",
          "Express.js",
          "middleware",
          "RESTful API"
        ],
        "answer": "response headers",
        "explanation": "response headers is a key concept in Backend."
      },
      {
        "question": "Level 2 · Which tool is used to route parameters in Backend?",
        "options": [
          "route parameters",
          "Express.js",
          "middleware",
          "RESTful API"
        ],
        "answer": "route parameters",
        "explanation": "route parameters is a key concept in Backend."
      },
      {
        "question": "Level 2 · What does query strings in Backend?",
        "options": [
          "query strings",
          "Express.js",
          "middleware",
          "RESTful API"
        ],
        "answer": "query strings",
        "explanation": "query strings is a key concept in Backend."
      },
      {
        "question": "Level 2 · How can you error handling in Backend?",
        "options": [
          "error handling",
          "Express.js",
          "middleware",
          "RESTful API"
        ],
        "answer": "error handling",
        "explanation": "error handling is a key concept in Backend."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between database in Backend?",
        "options": [
          "database",
          "SQL",
          "primary key",
          "SELECT queries"
        ],
        "answer": "database",
        "explanation": "database is a key concept in Backend."
      },
      {
        "question": "Level 3 · How does SQL in Backend?",
        "options": [
          "SQL",
          "database",
          "primary key",
          "SELECT queries"
        ],
        "answer": "SQL",
        "explanation": "SQL is a key concept in Backend."
      },
      {
        "question": "Level 3 · What problem does primary key in Backend?",
        "options": [
          "primary key",
          "database",
          "SQL",
          "SELECT queries"
        ],
        "answer": "primary key",
        "explanation": "primary key is a key concept in Backend."
      },
      {
        "question": "Level 3 · Which approach SELECT queries in Backend?",
        "options": [
          "SELECT queries",
          "database",
          "SQL",
          "primary key"
        ],
        "answer": "SELECT queries",
        "explanation": "SELECT queries is a key concept in Backend."
      },
      {
        "question": "Level 3 · What is the role of INSERT statements in Backend?",
        "options": [
          "INSERT statements",
          "database",
          "SQL",
          "primary key"
        ],
        "answer": "INSERT statements",
        "explanation": "INSERT statements is a key concept in Backend."
      },
      {
        "question": "Level 3 · What is the difference between WHERE clause in Backend?",
        "options": [
          "WHERE clause",
          "database",
          "SQL",
          "primary key"
        ],
        "answer": "WHERE clause",
        "explanation": "WHERE clause is a key concept in Backend."
      },
      {
        "question": "Level 3 · How does JOIN operations in Backend?",
        "options": [
          "JOIN operations",
          "database",
          "SQL",
          "primary key"
        ],
        "answer": "JOIN operations",
        "explanation": "JOIN operations is a key concept in Backend."
      },
      {
        "question": "Level 3 · What problem does indexing in Backend?",
        "options": [
          "indexing",
          "database",
          "SQL",
          "primary key"
        ],
        "answer": "indexing",
        "explanation": "indexing is a key concept in Backend."
      },
      {
        "question": "Level 3 · Which approach foreign key in Backend?",
        "options": [
          "foreign key",
          "database",
          "SQL",
          "primary key"
        ],
        "answer": "foreign key",
        "explanation": "foreign key is a key concept in Backend."
      },
      {
        "question": "Level 3 · What is the role of normalization in Backend?",
        "options": [
          "normalization",
          "database",
          "SQL",
          "primary key"
        ],
        "answer": "normalization",
        "explanation": "normalization is a key concept in Backend."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use authentication in Backend?",
        "options": [
          "authentication",
          "authorization",
          "JWT tokens",
          "OAuth 2.0"
        ],
        "answer": "authentication",
        "explanation": "authentication is a key concept in Backend."
      },
      {
        "question": "Level 4 · What is a real-world example of authorization in Backend?",
        "options": [
          "authorization",
          "authentication",
          "JWT tokens",
          "OAuth 2.0"
        ],
        "answer": "authorization",
        "explanation": "authorization is a key concept in Backend."
      },
      {
        "question": "Level 4 · How would you implement JWT tokens in Backend?",
        "options": [
          "JWT tokens",
          "authentication",
          "authorization",
          "OAuth 2.0"
        ],
        "answer": "JWT tokens",
        "explanation": "JWT tokens is a key concept in Backend."
      },
      {
        "question": "Level 4 · What pattern applies OAuth 2.0 in Backend?",
        "options": [
          "OAuth 2.0",
          "authentication",
          "authorization",
          "JWT tokens"
        ],
        "answer": "OAuth 2.0",
        "explanation": "OAuth 2.0 is a key concept in Backend."
      },
      {
        "question": "Level 4 · What strategy handles session management in Backend?",
        "options": [
          "session management",
          "authentication",
          "authorization",
          "JWT tokens"
        ],
        "answer": "session management",
        "explanation": "session management is a key concept in Backend."
      },
      {
        "question": "Level 4 · When would you use password hashing in Backend?",
        "options": [
          "password hashing",
          "authentication",
          "authorization",
          "JWT tokens"
        ],
        "answer": "password hashing",
        "explanation": "password hashing is a key concept in Backend."
      },
      {
        "question": "Level 4 · What is a real-world example of bcrypt in Backend?",
        "options": [
          "bcrypt",
          "authentication",
          "authorization",
          "JWT tokens"
        ],
        "answer": "bcrypt",
        "explanation": "bcrypt is a key concept in Backend."
      },
      {
        "question": "Level 4 · How would you implement CORS in Backend?",
        "options": [
          "CORS",
          "authentication",
          "authorization",
          "JWT tokens"
        ],
        "answer": "CORS",
        "explanation": "CORS is a key concept in Backend."
      },
      {
        "question": "Level 4 · What pattern applies environment variables in Backend?",
        "options": [
          "environment variables",
          "authentication",
          "authorization",
          "JWT tokens"
        ],
        "answer": "environment variables",
        "explanation": "environment variables is a key concept in Backend."
      },
      {
        "question": "Level 4 · What strategy handles API keys in Backend?",
        "options": [
          "API keys",
          "authentication",
          "authorization",
          "JWT tokens"
        ],
        "answer": "API keys",
        "explanation": "API keys is a key concept in Backend."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize rate limiting in Backend?",
        "options": [
          "rate limiting",
          "caching",
          "Redis",
          "CDN"
        ],
        "answer": "rate limiting",
        "explanation": "rate limiting is a key concept in Backend."
      },
      {
        "question": "Level 5 · What is the best practice for caching in Backend?",
        "options": [
          "caching",
          "rate limiting",
          "Redis",
          "CDN"
        ],
        "answer": "caching",
        "explanation": "caching is a key concept in Backend."
      },
      {
        "question": "Level 5 · What performance consideration involves Redis in Backend?",
        "options": [
          "Redis",
          "rate limiting",
          "caching",
          "CDN"
        ],
        "answer": "Redis",
        "explanation": "Redis is a key concept in Backend."
      },
      {
        "question": "Level 5 · How do you scale CDN in Backend?",
        "options": [
          "CDN",
          "rate limiting",
          "caching",
          "Redis"
        ],
        "answer": "CDN",
        "explanation": "CDN is a key concept in Backend."
      },
      {
        "question": "Level 5 · What tradeoff exists when using load balancing in Backend?",
        "options": [
          "load balancing",
          "rate limiting",
          "caching",
          "Redis"
        ],
        "answer": "load balancing",
        "explanation": "load balancing is a key concept in Backend."
      },
      {
        "question": "Level 5 · How do you optimize horizontal scaling in Backend?",
        "options": [
          "horizontal scaling",
          "rate limiting",
          "caching",
          "Redis"
        ],
        "answer": "horizontal scaling",
        "explanation": "horizontal scaling is a key concept in Backend."
      },
      {
        "question": "Level 5 · What is the best practice for vertical scaling in Backend?",
        "options": [
          "vertical scaling",
          "rate limiting",
          "caching",
          "Redis"
        ],
        "answer": "vertical scaling",
        "explanation": "vertical scaling is a key concept in Backend."
      },
      {
        "question": "Level 5 · What performance consideration involves connection pooling in Backend?",
        "options": [
          "connection pooling",
          "rate limiting",
          "caching",
          "Redis"
        ],
        "answer": "connection pooling",
        "explanation": "connection pooling is a key concept in Backend."
      },
      {
        "question": "Level 5 · How do you scale ORM in Backend?",
        "options": [
          "ORM",
          "rate limiting",
          "caching",
          "Redis"
        ],
        "answer": "ORM",
        "explanation": "ORM is a key concept in Backend."
      },
      {
        "question": "Level 5 · What tradeoff exists when using query optimization in Backend?",
        "options": [
          "query optimization",
          "rate limiting",
          "caching",
          "Redis"
        ],
        "answer": "query optimization",
        "explanation": "query optimization is a key concept in Backend."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare WebSocket in Backend?",
        "options": [
          "WebSocket",
          "real-time communication",
          "Socket.io",
          "Server-Sent Events"
        ],
        "answer": "WebSocket",
        "explanation": "WebSocket is a key concept in Backend."
      },
      {
        "question": "Level 6 · How is it different from real-time communication in Backend?",
        "options": [
          "real-time communication",
          "WebSocket",
          "Socket.io",
          "Server-Sent Events"
        ],
        "answer": "real-time communication",
        "explanation": "real-time communication is a key concept in Backend."
      },
      {
        "question": "Level 6 · What are the pros and cons of Socket.io in Backend?",
        "options": [
          "Socket.io",
          "WebSocket",
          "real-time communication",
          "Server-Sent Events"
        ],
        "answer": "Socket.io",
        "explanation": "Socket.io is a key concept in Backend."
      },
      {
        "question": "Level 6 · What advantage does Server-Sent Events in Backend?",
        "options": [
          "Server-Sent Events",
          "WebSocket",
          "real-time communication",
          "Socket.io"
        ],
        "answer": "Server-Sent Events",
        "explanation": "Server-Sent Events is a key concept in Backend."
      },
      {
        "question": "Level 6 · What limitation does long polling in Backend?",
        "options": [
          "long polling",
          "WebSocket",
          "real-time communication",
          "Socket.io"
        ],
        "answer": "long polling",
        "explanation": "long polling is a key concept in Backend."
      },
      {
        "question": "Level 6 · Compare event-driven architecture in Backend?",
        "options": [
          "event-driven architecture",
          "WebSocket",
          "real-time communication",
          "Socket.io"
        ],
        "answer": "event-driven architecture",
        "explanation": "event-driven architecture is a key concept in Backend."
      },
      {
        "question": "Level 6 · How is it different from message queue in Backend?",
        "options": [
          "message queue",
          "WebSocket",
          "real-time communication",
          "Socket.io"
        ],
        "answer": "message queue",
        "explanation": "message queue is a key concept in Backend."
      },
      {
        "question": "Level 6 · What are the pros and cons of RabbitMQ in Backend?",
        "options": [
          "RabbitMQ",
          "WebSocket",
          "real-time communication",
          "Socket.io"
        ],
        "answer": "RabbitMQ",
        "explanation": "RabbitMQ is a key concept in Backend."
      },
      {
        "question": "Level 6 · What advantage does Kafka in Backend?",
        "options": [
          "Kafka",
          "WebSocket",
          "real-time communication",
          "Socket.io"
        ],
        "answer": "Kafka",
        "explanation": "Kafka is a key concept in Backend."
      },
      {
        "question": "Level 6 · What limitation does pub-sub pattern in Backend?",
        "options": [
          "pub-sub pattern",
          "WebSocket",
          "real-time communication",
          "Socket.io"
        ],
        "answer": "pub-sub pattern",
        "explanation": "pub-sub pattern is a key concept in Backend."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with GraphQL in Backend?",
        "options": [
          "GraphQL",
          "queries and mutations",
          "schema definition",
          "resolvers"
        ],
        "answer": "GraphQL",
        "explanation": "GraphQL is a key concept in Backend."
      },
      {
        "question": "Level 7 · What goes wrong when queries and mutations in Backend?",
        "options": [
          "queries and mutations",
          "GraphQL",
          "schema definition",
          "resolvers"
        ],
        "answer": "queries and mutations",
        "explanation": "queries and mutations is a key concept in Backend."
      },
      {
        "question": "Level 7 · What common mistake involves schema definition in Backend?",
        "options": [
          "schema definition",
          "GraphQL",
          "queries and mutations",
          "resolvers"
        ],
        "answer": "schema definition",
        "explanation": "schema definition is a key concept in Backend."
      },
      {
        "question": "Level 7 · How do you monitor resolvers in Backend?",
        "options": [
          "resolvers",
          "GraphQL",
          "queries and mutations",
          "schema definition"
        ],
        "answer": "resolvers",
        "explanation": "resolvers is a key concept in Backend."
      },
      {
        "question": "Level 7 · What failure mode occurs with Apollo Server in Backend?",
        "options": [
          "Apollo Server",
          "GraphQL",
          "queries and mutations",
          "schema definition"
        ],
        "answer": "Apollo Server",
        "explanation": "Apollo Server is a key concept in Backend."
      },
      {
        "question": "Level 7 · How do you debug issues with REST vs GraphQL in Backend?",
        "options": [
          "REST vs GraphQL",
          "GraphQL",
          "queries and mutations",
          "schema definition"
        ],
        "answer": "REST vs GraphQL",
        "explanation": "REST vs GraphQL is a key concept in Backend."
      },
      {
        "question": "Level 7 · What goes wrong when subscriptions in Backend?",
        "options": [
          "subscriptions",
          "GraphQL",
          "queries and mutations",
          "schema definition"
        ],
        "answer": "subscriptions",
        "explanation": "subscriptions is a key concept in Backend."
      },
      {
        "question": "Level 7 · What common mistake involves fragments in Backend?",
        "options": [
          "fragments",
          "GraphQL",
          "queries and mutations",
          "schema definition"
        ],
        "answer": "fragments",
        "explanation": "fragments is a key concept in Backend."
      },
      {
        "question": "Level 7 · How do you monitor type system in Backend?",
        "options": [
          "type system",
          "GraphQL",
          "queries and mutations",
          "schema definition"
        ],
        "answer": "type system",
        "explanation": "type system is a key concept in Backend."
      },
      {
        "question": "Level 7 · What failure mode occurs with N+1 problem in Backend?",
        "options": [
          "N+1 problem",
          "GraphQL",
          "queries and mutations",
          "schema definition"
        ],
        "answer": "N+1 problem",
        "explanation": "N+1 problem is a key concept in Backend."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves microservices in Backend?",
        "options": [
          "microservices",
          "monolith vs microservices",
          "service discovery",
          "API gateway"
        ],
        "answer": "microservices",
        "explanation": "microservices is a key concept in Backend."
      },
      {
        "question": "Level 8 · How do you secure monolith vs microservices in Backend?",
        "options": [
          "monolith vs microservices",
          "microservices",
          "service discovery",
          "API gateway"
        ],
        "answer": "monolith vs microservices",
        "explanation": "monolith vs microservices is a key concept in Backend."
      },
      {
        "question": "Level 8 · What testing strategy covers service discovery in Backend?",
        "options": [
          "service discovery",
          "microservices",
          "monolith vs microservices",
          "API gateway"
        ],
        "answer": "service discovery",
        "explanation": "service discovery is a key concept in Backend."
      },
      {
        "question": "Level 8 · How do you ensure reliability of API gateway in Backend?",
        "options": [
          "API gateway",
          "microservices",
          "monolith vs microservices",
          "service discovery"
        ],
        "answer": "API gateway",
        "explanation": "API gateway is a key concept in Backend."
      },
      {
        "question": "Level 8 · What error handling applies to circuit breaker in Backend?",
        "options": [
          "circuit breaker",
          "microservices",
          "monolith vs microservices",
          "service discovery"
        ],
        "answer": "circuit breaker",
        "explanation": "circuit breaker is a key concept in Backend."
      },
      {
        "question": "Level 8 · What security concern involves distributed tracing in Backend?",
        "options": [
          "distributed tracing",
          "microservices",
          "monolith vs microservices",
          "service discovery"
        ],
        "answer": "distributed tracing",
        "explanation": "distributed tracing is a key concept in Backend."
      },
      {
        "question": "Level 8 · How do you secure containerization in Backend?",
        "options": [
          "containerization",
          "microservices",
          "monolith vs microservices",
          "service discovery"
        ],
        "answer": "containerization",
        "explanation": "containerization is a key concept in Backend."
      },
      {
        "question": "Level 8 · What testing strategy covers Docker in Backend?",
        "options": [
          "Docker",
          "microservices",
          "monolith vs microservices",
          "service discovery"
        ],
        "answer": "Docker",
        "explanation": "Docker is a key concept in Backend."
      },
      {
        "question": "Level 8 · How do you ensure reliability of Kubernetes in Backend?",
        "options": [
          "Kubernetes",
          "microservices",
          "monolith vs microservices",
          "service discovery"
        ],
        "answer": "Kubernetes",
        "explanation": "Kubernetes is a key concept in Backend."
      },
      {
        "question": "Level 8 · What error handling applies to service mesh in Backend?",
        "options": [
          "service mesh",
          "microservices",
          "monolith vs microservices",
          "service discovery"
        ],
        "answer": "service mesh",
        "explanation": "service mesh is a key concept in Backend."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with serverless in Backend?",
        "options": [
          "serverless",
          "AWS Lambda",
          "function as a service",
          "cold starts"
        ],
        "answer": "serverless",
        "explanation": "serverless is a key concept in Backend."
      },
      {
        "question": "Level 9 · What architectural pattern uses AWS Lambda in Backend?",
        "options": [
          "AWS Lambda",
          "serverless",
          "function as a service",
          "cold starts"
        ],
        "answer": "AWS Lambda",
        "explanation": "AWS Lambda is a key concept in Backend."
      },
      {
        "question": "Level 9 · How would you design a system with function as a service in Backend?",
        "options": [
          "function as a service",
          "serverless",
          "AWS Lambda",
          "cold starts"
        ],
        "answer": "function as a service",
        "explanation": "function as a service is a key concept in Backend."
      },
      {
        "question": "Level 9 · What dependency does have cold starts in Backend?",
        "options": [
          "cold starts",
          "serverless",
          "AWS Lambda",
          "function as a service"
        ],
        "answer": "cold starts",
        "explanation": "cold starts is a key concept in Backend."
      },
      {
        "question": "Level 9 · How do you migrate from event-driven scaling in Backend?",
        "options": [
          "event-driven scaling",
          "serverless",
          "AWS Lambda",
          "function as a service"
        ],
        "answer": "event-driven scaling",
        "explanation": "event-driven scaling is a key concept in Backend."
      },
      {
        "question": "Level 9 · How does integrate with Fargate in Backend?",
        "options": [
          "Fargate",
          "serverless",
          "AWS Lambda",
          "function as a service"
        ],
        "answer": "Fargate",
        "explanation": "Fargate is a key concept in Backend."
      },
      {
        "question": "Level 9 · What architectural pattern uses Cloud Functions in Backend?",
        "options": [
          "Cloud Functions",
          "serverless",
          "AWS Lambda",
          "function as a service"
        ],
        "answer": "Cloud Functions",
        "explanation": "Cloud Functions is a key concept in Backend."
      },
      {
        "question": "Level 9 · How would you design a system with Azure Functions in Backend?",
        "options": [
          "Azure Functions",
          "serverless",
          "AWS Lambda",
          "function as a service"
        ],
        "answer": "Azure Functions",
        "explanation": "Azure Functions is a key concept in Backend."
      },
      {
        "question": "Level 9 · What dependency does have edge computing in Backend?",
        "options": [
          "edge computing",
          "serverless",
          "AWS Lambda",
          "function as a service"
        ],
        "answer": "edge computing",
        "explanation": "edge computing is a key concept in Backend."
      },
      {
        "question": "Level 9 · How do you migrate from Vercel serverless in Backend?",
        "options": [
          "Vercel serverless",
          "serverless",
          "AWS Lambda",
          "function as a service"
        ],
        "answer": "Vercel serverless",
        "explanation": "Vercel serverless is a key concept in Backend."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of testing backend in Backend?",
        "options": [
          "testing backend",
          "unit tests",
          "integration tests",
          "API testing"
        ],
        "answer": "testing backend",
        "explanation": "testing backend is a key concept in Backend."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of unit tests in Backend?",
        "options": [
          "unit tests",
          "testing backend",
          "integration tests",
          "API testing"
        ],
        "answer": "unit tests",
        "explanation": "unit tests is a key concept in Backend."
      },
      {
        "question": "Level 10 · How does evolve across scales integration tests in Backend?",
        "options": [
          "integration tests",
          "testing backend",
          "unit tests",
          "API testing"
        ],
        "answer": "integration tests",
        "explanation": "integration tests is a key concept in Backend."
      },
      {
        "question": "Level 10 · What is the future direction of API testing in Backend?",
        "options": [
          "API testing",
          "testing backend",
          "unit tests",
          "integration tests"
        ],
        "answer": "API testing",
        "explanation": "API testing is a key concept in Backend."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves Postman in Backend?",
        "options": [
          "Postman",
          "testing backend",
          "unit tests",
          "integration tests"
        ],
        "answer": "Postman",
        "explanation": "Postman is a key concept in Backend."
      },
      {
        "question": "Level 10 · What is the theoretical basis of Jest for Node in Backend?",
        "options": [
          "Jest for Node",
          "testing backend",
          "unit tests",
          "integration tests"
        ],
        "answer": "Jest for Node",
        "explanation": "Jest for Node is a key concept in Backend."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of supertest in Backend?",
        "options": [
          "supertest",
          "testing backend",
          "unit tests",
          "integration tests"
        ],
        "answer": "supertest",
        "explanation": "supertest is a key concept in Backend."
      },
      {
        "question": "Level 10 · How does evolve across scales mocking in Backend?",
        "options": [
          "mocking",
          "testing backend",
          "unit tests",
          "integration tests"
        ],
        "answer": "mocking",
        "explanation": "mocking is a key concept in Backend."
      },
      {
        "question": "Level 10 · What is the future direction of test coverage in Backend?",
        "options": [
          "test coverage",
          "testing backend",
          "unit tests",
          "integration tests"
        ],
        "answer": "test coverage",
        "explanation": "test coverage is a key concept in Backend."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves contract testing in Backend?",
        "options": [
          "contract testing",
          "testing backend",
          "unit tests",
          "integration tests"
        ],
        "answer": "contract testing",
        "explanation": "contract testing is a key concept in Backend."
      }
    ]
  },
  "DSA": {
    "Level 1": [
      {
        "question": "Level 1 · What is array in DSA?",
        "options": [
          "array",
          "linked list",
          "stack",
          "queue"
        ],
        "answer": "array",
        "explanation": "array is a key concept in DSA."
      },
      {
        "question": "Level 1 · How would you define linked list in DSA?",
        "options": [
          "linked list",
          "array",
          "stack",
          "queue"
        ],
        "answer": "linked list",
        "explanation": "linked list is a key concept in DSA."
      },
      {
        "question": "Level 1 · Which describes stack in DSA?",
        "options": [
          "stack",
          "array",
          "linked list",
          "queue"
        ],
        "answer": "stack",
        "explanation": "stack is a key concept in DSA."
      },
      {
        "question": "Level 1 · What does the term queue in DSA?",
        "options": [
          "queue",
          "array",
          "linked list",
          "stack"
        ],
        "answer": "queue",
        "explanation": "queue is a key concept in DSA."
      },
      {
        "question": "Level 1 · What concept is hash table in DSA?",
        "options": [
          "hash table",
          "array",
          "linked list",
          "stack"
        ],
        "answer": "hash table",
        "explanation": "hash table is a key concept in DSA."
      },
      {
        "question": "Level 1 · What is time complexity in DSA?",
        "options": [
          "time complexity",
          "array",
          "linked list",
          "stack"
        ],
        "answer": "time complexity",
        "explanation": "time complexity is a key concept in DSA."
      },
      {
        "question": "Level 1 · How would you define space complexity in DSA?",
        "options": [
          "space complexity",
          "array",
          "linked list",
          "stack"
        ],
        "answer": "space complexity",
        "explanation": "space complexity is a key concept in DSA."
      },
      {
        "question": "Level 1 · Which describes Big O notation in DSA?",
        "options": [
          "Big O notation",
          "array",
          "linked list",
          "stack"
        ],
        "answer": "Big O notation",
        "explanation": "Big O notation is a key concept in DSA."
      },
      {
        "question": "Level 1 · What does the term linear search in DSA?",
        "options": [
          "linear search",
          "array",
          "linked list",
          "stack"
        ],
        "answer": "linear search",
        "explanation": "linear search is a key concept in DSA."
      },
      {
        "question": "Level 1 · What concept is binary search in DSA?",
        "options": [
          "binary search",
          "array",
          "linked list",
          "stack"
        ],
        "answer": "binary search",
        "explanation": "binary search is a key concept in DSA."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you bubble sort in DSA?",
        "options": [
          "bubble sort",
          "selection sort",
          "insertion sort",
          "merge sort"
        ],
        "answer": "bubble sort",
        "explanation": "bubble sort is a key concept in DSA."
      },
      {
        "question": "Level 2 · What is the purpose of selection sort in DSA?",
        "options": [
          "selection sort",
          "bubble sort",
          "insertion sort",
          "merge sort"
        ],
        "answer": "selection sort",
        "explanation": "selection sort is a key concept in DSA."
      },
      {
        "question": "Level 2 · Which tool is used to insertion sort in DSA?",
        "options": [
          "insertion sort",
          "bubble sort",
          "selection sort",
          "merge sort"
        ],
        "answer": "insertion sort",
        "explanation": "insertion sort is a key concept in DSA."
      },
      {
        "question": "Level 2 · What does merge sort in DSA?",
        "options": [
          "merge sort",
          "bubble sort",
          "selection sort",
          "insertion sort"
        ],
        "answer": "merge sort",
        "explanation": "merge sort is a key concept in DSA."
      },
      {
        "question": "Level 2 · How can you quick sort in DSA?",
        "options": [
          "quick sort",
          "bubble sort",
          "selection sort",
          "insertion sort"
        ],
        "answer": "quick sort",
        "explanation": "quick sort is a key concept in DSA."
      },
      {
        "question": "Level 2 · How do you sorting stability in DSA?",
        "options": [
          "sorting stability",
          "bubble sort",
          "selection sort",
          "insertion sort"
        ],
        "answer": "sorting stability",
        "explanation": "sorting stability is a key concept in DSA."
      },
      {
        "question": "Level 2 · What is the purpose of comparison-based sort in DSA?",
        "options": [
          "comparison-based sort",
          "bubble sort",
          "selection sort",
          "insertion sort"
        ],
        "answer": "comparison-based sort",
        "explanation": "comparison-based sort is a key concept in DSA."
      },
      {
        "question": "Level 2 · Which tool is used to radix sort in DSA?",
        "options": [
          "radix sort",
          "bubble sort",
          "selection sort",
          "insertion sort"
        ],
        "answer": "radix sort",
        "explanation": "radix sort is a key concept in DSA."
      },
      {
        "question": "Level 2 · What does heap sort in DSA?",
        "options": [
          "heap sort",
          "bubble sort",
          "selection sort",
          "insertion sort"
        ],
        "answer": "heap sort",
        "explanation": "heap sort is a key concept in DSA."
      },
      {
        "question": "Level 2 · How can you tim sort in DSA?",
        "options": [
          "tim sort",
          "bubble sort",
          "selection sort",
          "insertion sort"
        ],
        "answer": "tim sort",
        "explanation": "tim sort is a key concept in DSA."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between binary tree in DSA?",
        "options": [
          "binary tree",
          "tree traversal",
          "depth-first search",
          "breadth-first search"
        ],
        "answer": "binary tree",
        "explanation": "binary tree is a key concept in DSA."
      },
      {
        "question": "Level 3 · How does tree traversal in DSA?",
        "options": [
          "tree traversal",
          "binary tree",
          "depth-first search",
          "breadth-first search"
        ],
        "answer": "tree traversal",
        "explanation": "tree traversal is a key concept in DSA."
      },
      {
        "question": "Level 3 · What problem does depth-first search in DSA?",
        "options": [
          "depth-first search",
          "binary tree",
          "tree traversal",
          "breadth-first search"
        ],
        "answer": "depth-first search",
        "explanation": "depth-first search is a key concept in DSA."
      },
      {
        "question": "Level 3 · Which approach breadth-first search in DSA?",
        "options": [
          "breadth-first search",
          "binary tree",
          "tree traversal",
          "depth-first search"
        ],
        "answer": "breadth-first search",
        "explanation": "breadth-first search is a key concept in DSA."
      },
      {
        "question": "Level 3 · What is the role of inorder traversal in DSA?",
        "options": [
          "inorder traversal",
          "binary tree",
          "tree traversal",
          "depth-first search"
        ],
        "answer": "inorder traversal",
        "explanation": "inorder traversal is a key concept in DSA."
      },
      {
        "question": "Level 3 · What is the difference between preorder traversal in DSA?",
        "options": [
          "preorder traversal",
          "binary tree",
          "tree traversal",
          "depth-first search"
        ],
        "answer": "preorder traversal",
        "explanation": "preorder traversal is a key concept in DSA."
      },
      {
        "question": "Level 3 · How does postorder traversal in DSA?",
        "options": [
          "postorder traversal",
          "binary tree",
          "tree traversal",
          "depth-first search"
        ],
        "answer": "postorder traversal",
        "explanation": "postorder traversal is a key concept in DSA."
      },
      {
        "question": "Level 3 · What problem does binary search tree in DSA?",
        "options": [
          "binary search tree",
          "binary tree",
          "tree traversal",
          "depth-first search"
        ],
        "answer": "binary search tree",
        "explanation": "binary search tree is a key concept in DSA."
      },
      {
        "question": "Level 3 · Which approach AVL tree in DSA?",
        "options": [
          "AVL tree",
          "binary tree",
          "tree traversal",
          "depth-first search"
        ],
        "answer": "AVL tree",
        "explanation": "AVL tree is a key concept in DSA."
      },
      {
        "question": "Level 3 · What is the role of red-black tree in DSA?",
        "options": [
          "red-black tree",
          "binary tree",
          "tree traversal",
          "depth-first search"
        ],
        "answer": "red-black tree",
        "explanation": "red-black tree is a key concept in DSA."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use graph in DSA?",
        "options": [
          "graph",
          "directed graph",
          "undirected graph",
          "adjacency matrix"
        ],
        "answer": "graph",
        "explanation": "graph is a key concept in DSA."
      },
      {
        "question": "Level 4 · What is a real-world example of directed graph in DSA?",
        "options": [
          "directed graph",
          "graph",
          "undirected graph",
          "adjacency matrix"
        ],
        "answer": "directed graph",
        "explanation": "directed graph is a key concept in DSA."
      },
      {
        "question": "Level 4 · How would you implement undirected graph in DSA?",
        "options": [
          "undirected graph",
          "graph",
          "directed graph",
          "adjacency matrix"
        ],
        "answer": "undirected graph",
        "explanation": "undirected graph is a key concept in DSA."
      },
      {
        "question": "Level 4 · What pattern applies adjacency matrix in DSA?",
        "options": [
          "adjacency matrix",
          "graph",
          "directed graph",
          "undirected graph"
        ],
        "answer": "adjacency matrix",
        "explanation": "adjacency matrix is a key concept in DSA."
      },
      {
        "question": "Level 4 · What strategy handles adjacency list in DSA?",
        "options": [
          "adjacency list",
          "graph",
          "directed graph",
          "undirected graph"
        ],
        "answer": "adjacency list",
        "explanation": "adjacency list is a key concept in DSA."
      },
      {
        "question": "Level 4 · When would you use weighted graph in DSA?",
        "options": [
          "weighted graph",
          "graph",
          "directed graph",
          "undirected graph"
        ],
        "answer": "weighted graph",
        "explanation": "weighted graph is a key concept in DSA."
      },
      {
        "question": "Level 4 · What is a real-world example of Dijkstra's algorithm in DSA?",
        "options": [
          "Dijkstra's algorithm",
          "graph",
          "directed graph",
          "undirected graph"
        ],
        "answer": "Dijkstra's algorithm",
        "explanation": "Dijkstra's algorithm is a key concept in DSA."
      },
      {
        "question": "Level 4 · How would you implement Bellman-Ford in DSA?",
        "options": [
          "Bellman-Ford",
          "graph",
          "directed graph",
          "undirected graph"
        ],
        "answer": "Bellman-Ford",
        "explanation": "Bellman-Ford is a key concept in DSA."
      },
      {
        "question": "Level 4 · What pattern applies Floyd-Warshall in DSA?",
        "options": [
          "Floyd-Warshall",
          "graph",
          "directed graph",
          "undirected graph"
        ],
        "answer": "Floyd-Warshall",
        "explanation": "Floyd-Warshall is a key concept in DSA."
      },
      {
        "question": "Level 4 · What strategy handles topological sort in DSA?",
        "options": [
          "topological sort",
          "graph",
          "directed graph",
          "undirected graph"
        ],
        "answer": "topological sort",
        "explanation": "topological sort is a key concept in DSA."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize dynamic programming in DSA?",
        "options": [
          "dynamic programming",
          "memoization",
          "tabulation",
          "overlapping subproblems"
        ],
        "answer": "dynamic programming",
        "explanation": "dynamic programming is a key concept in DSA."
      },
      {
        "question": "Level 5 · What is the best practice for memoization in DSA?",
        "options": [
          "memoization",
          "dynamic programming",
          "tabulation",
          "overlapping subproblems"
        ],
        "answer": "memoization",
        "explanation": "memoization is a key concept in DSA."
      },
      {
        "question": "Level 5 · What performance consideration involves tabulation in DSA?",
        "options": [
          "tabulation",
          "dynamic programming",
          "memoization",
          "overlapping subproblems"
        ],
        "answer": "tabulation",
        "explanation": "tabulation is a key concept in DSA."
      },
      {
        "question": "Level 5 · How do you scale overlapping subproblems in DSA?",
        "options": [
          "overlapping subproblems",
          "dynamic programming",
          "memoization",
          "tabulation"
        ],
        "answer": "overlapping subproblems",
        "explanation": "overlapping subproblems is a key concept in DSA."
      },
      {
        "question": "Level 5 · What tradeoff exists when using optimal substructure in DSA?",
        "options": [
          "optimal substructure",
          "dynamic programming",
          "memoization",
          "tabulation"
        ],
        "answer": "optimal substructure",
        "explanation": "optimal substructure is a key concept in DSA."
      },
      {
        "question": "Level 5 · How do you optimize knapsack problem in DSA?",
        "options": [
          "knapsack problem",
          "dynamic programming",
          "memoization",
          "tabulation"
        ],
        "answer": "knapsack problem",
        "explanation": "knapsack problem is a key concept in DSA."
      },
      {
        "question": "Level 5 · What is the best practice for longest common subsequence in DSA?",
        "options": [
          "longest common subsequence",
          "dynamic programming",
          "memoization",
          "tabulation"
        ],
        "answer": "longest common subsequence",
        "explanation": "longest common subsequence is a key concept in DSA."
      },
      {
        "question": "Level 5 · What performance consideration involves edit distance in DSA?",
        "options": [
          "edit distance",
          "dynamic programming",
          "memoization",
          "tabulation"
        ],
        "answer": "edit distance",
        "explanation": "edit distance is a key concept in DSA."
      },
      {
        "question": "Level 5 · How do you scale matrix chain in DSA?",
        "options": [
          "matrix chain",
          "dynamic programming",
          "memoization",
          "tabulation"
        ],
        "answer": "matrix chain",
        "explanation": "matrix chain is a key concept in DSA."
      },
      {
        "question": "Level 5 · What tradeoff exists when using Fibonacci optimization in DSA?",
        "options": [
          "Fibonacci optimization",
          "dynamic programming",
          "memoization",
          "tabulation"
        ],
        "answer": "Fibonacci optimization",
        "explanation": "Fibonacci optimization is a key concept in DSA."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare greedy algorithm in DSA?",
        "options": [
          "greedy algorithm",
          "interval scheduling",
          "Huffman coding",
          "minimum spanning tree"
        ],
        "answer": "greedy algorithm",
        "explanation": "greedy algorithm is a key concept in DSA."
      },
      {
        "question": "Level 6 · How is it different from interval scheduling in DSA?",
        "options": [
          "interval scheduling",
          "greedy algorithm",
          "Huffman coding",
          "minimum spanning tree"
        ],
        "answer": "interval scheduling",
        "explanation": "interval scheduling is a key concept in DSA."
      },
      {
        "question": "Level 6 · What are the pros and cons of Huffman coding in DSA?",
        "options": [
          "Huffman coding",
          "greedy algorithm",
          "interval scheduling",
          "minimum spanning tree"
        ],
        "answer": "Huffman coding",
        "explanation": "Huffman coding is a key concept in DSA."
      },
      {
        "question": "Level 6 · What advantage does minimum spanning tree in DSA?",
        "options": [
          "minimum spanning tree",
          "greedy algorithm",
          "interval scheduling",
          "Huffman coding"
        ],
        "answer": "minimum spanning tree",
        "explanation": "minimum spanning tree is a key concept in DSA."
      },
      {
        "question": "Level 6 · What limitation does Kruskal algorithm in DSA?",
        "options": [
          "Kruskal algorithm",
          "greedy algorithm",
          "interval scheduling",
          "Huffman coding"
        ],
        "answer": "Kruskal algorithm",
        "explanation": "Kruskal algorithm is a key concept in DSA."
      },
      {
        "question": "Level 6 · Compare Prim algorithm in DSA?",
        "options": [
          "Prim algorithm",
          "greedy algorithm",
          "interval scheduling",
          "Huffman coding"
        ],
        "answer": "Prim algorithm",
        "explanation": "Prim algorithm is a key concept in DSA."
      },
      {
        "question": "Level 6 · How is it different from activity selection in DSA?",
        "options": [
          "activity selection",
          "greedy algorithm",
          "interval scheduling",
          "Huffman coding"
        ],
        "answer": "activity selection",
        "explanation": "activity selection is a key concept in DSA."
      },
      {
        "question": "Level 6 · What are the pros and cons of coin change in DSA?",
        "options": [
          "coin change",
          "greedy algorithm",
          "interval scheduling",
          "Huffman coding"
        ],
        "answer": "coin change",
        "explanation": "coin change is a key concept in DSA."
      },
      {
        "question": "Level 6 · What advantage does fractional knapsack in DSA?",
        "options": [
          "fractional knapsack",
          "greedy algorithm",
          "interval scheduling",
          "Huffman coding"
        ],
        "answer": "fractional knapsack",
        "explanation": "fractional knapsack is a key concept in DSA."
      },
      {
        "question": "Level 6 · What limitation does scheduling in DSA?",
        "options": [
          "scheduling",
          "greedy algorithm",
          "interval scheduling",
          "Huffman coding"
        ],
        "answer": "scheduling",
        "explanation": "scheduling is a key concept in DSA."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with hash map in DSA?",
        "options": [
          "hash map",
          "collision resolution",
          "chaining",
          "open addressing"
        ],
        "answer": "hash map",
        "explanation": "hash map is a key concept in DSA."
      },
      {
        "question": "Level 7 · What goes wrong when collision resolution in DSA?",
        "options": [
          "collision resolution",
          "hash map",
          "chaining",
          "open addressing"
        ],
        "answer": "collision resolution",
        "explanation": "collision resolution is a key concept in DSA."
      },
      {
        "question": "Level 7 · What common mistake involves chaining in DSA?",
        "options": [
          "chaining",
          "hash map",
          "collision resolution",
          "open addressing"
        ],
        "answer": "chaining",
        "explanation": "chaining is a key concept in DSA."
      },
      {
        "question": "Level 7 · How do you monitor open addressing in DSA?",
        "options": [
          "open addressing",
          "hash map",
          "collision resolution",
          "chaining"
        ],
        "answer": "open addressing",
        "explanation": "open addressing is a key concept in DSA."
      },
      {
        "question": "Level 7 · What failure mode occurs with load factor in DSA?",
        "options": [
          "load factor",
          "hash map",
          "collision resolution",
          "chaining"
        ],
        "answer": "load factor",
        "explanation": "load factor is a key concept in DSA."
      },
      {
        "question": "Level 7 · How do you debug issues with rehashing in DSA?",
        "options": [
          "rehashing",
          "hash map",
          "collision resolution",
          "chaining"
        ],
        "answer": "rehashing",
        "explanation": "rehashing is a key concept in DSA."
      },
      {
        "question": "Level 7 · What goes wrong when consistent hashing in DSA?",
        "options": [
          "consistent hashing",
          "hash map",
          "collision resolution",
          "chaining"
        ],
        "answer": "consistent hashing",
        "explanation": "consistent hashing is a key concept in DSA."
      },
      {
        "question": "Level 7 · What common mistake involves bloom filter in DSA?",
        "options": [
          "bloom filter",
          "hash map",
          "collision resolution",
          "chaining"
        ],
        "answer": "bloom filter",
        "explanation": "bloom filter is a key concept in DSA."
      },
      {
        "question": "Level 7 · How do you monitor LRU cache in DSA?",
        "options": [
          "LRU cache",
          "hash map",
          "collision resolution",
          "chaining"
        ],
        "answer": "LRU cache",
        "explanation": "LRU cache is a key concept in DSA."
      },
      {
        "question": "Level 7 · What failure mode occurs with hash set in DSA?",
        "options": [
          "hash set",
          "hash map",
          "collision resolution",
          "chaining"
        ],
        "answer": "hash set",
        "explanation": "hash set is a key concept in DSA."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves trie in DSA?",
        "options": [
          "trie",
          "prefix tree",
          "suffix tree",
          "segment tree"
        ],
        "answer": "trie",
        "explanation": "trie is a key concept in DSA."
      },
      {
        "question": "Level 8 · How do you secure prefix tree in DSA?",
        "options": [
          "prefix tree",
          "trie",
          "suffix tree",
          "segment tree"
        ],
        "answer": "prefix tree",
        "explanation": "prefix tree is a key concept in DSA."
      },
      {
        "question": "Level 8 · What testing strategy covers suffix tree in DSA?",
        "options": [
          "suffix tree",
          "trie",
          "prefix tree",
          "segment tree"
        ],
        "answer": "suffix tree",
        "explanation": "suffix tree is a key concept in DSA."
      },
      {
        "question": "Level 8 · How do you ensure reliability of segment tree in DSA?",
        "options": [
          "segment tree",
          "trie",
          "prefix tree",
          "suffix tree"
        ],
        "answer": "segment tree",
        "explanation": "segment tree is a key concept in DSA."
      },
      {
        "question": "Level 8 · What error handling applies to Fenwick tree in DSA?",
        "options": [
          "Fenwick tree",
          "trie",
          "prefix tree",
          "suffix tree"
        ],
        "answer": "Fenwick tree",
        "explanation": "Fenwick tree is a key concept in DSA."
      },
      {
        "question": "Level 8 · What security concern involves union-find in DSA?",
        "options": [
          "union-find",
          "trie",
          "prefix tree",
          "suffix tree"
        ],
        "answer": "union-find",
        "explanation": "union-find is a key concept in DSA."
      },
      {
        "question": "Level 8 · How do you secure disjoint set in DSA?",
        "options": [
          "disjoint set",
          "trie",
          "prefix tree",
          "suffix tree"
        ],
        "answer": "disjoint set",
        "explanation": "disjoint set is a key concept in DSA."
      },
      {
        "question": "Level 8 · What testing strategy covers heap operations in DSA?",
        "options": [
          "heap operations",
          "trie",
          "prefix tree",
          "suffix tree"
        ],
        "answer": "heap operations",
        "explanation": "heap operations is a key concept in DSA."
      },
      {
        "question": "Level 8 · How do you ensure reliability of priority queue in DSA?",
        "options": [
          "priority queue",
          "trie",
          "prefix tree",
          "suffix tree"
        ],
        "answer": "priority queue",
        "explanation": "priority queue is a key concept in DSA."
      },
      {
        "question": "Level 8 · What error handling applies to min-heap vs max-heap in DSA?",
        "options": [
          "min-heap vs max-heap",
          "trie",
          "prefix tree",
          "suffix tree"
        ],
        "answer": "min-heap vs max-heap",
        "explanation": "min-heap vs max-heap is a key concept in DSA."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with backtracking in DSA?",
        "options": [
          "backtracking",
          "N-Queens",
          "sudoku solver",
          "subset sum"
        ],
        "answer": "backtracking",
        "explanation": "backtracking is a key concept in DSA."
      },
      {
        "question": "Level 9 · What architectural pattern uses N-Queens in DSA?",
        "options": [
          "N-Queens",
          "backtracking",
          "sudoku solver",
          "subset sum"
        ],
        "answer": "N-Queens",
        "explanation": "N-Queens is a key concept in DSA."
      },
      {
        "question": "Level 9 · How would you design a system with sudoku solver in DSA?",
        "options": [
          "sudoku solver",
          "backtracking",
          "N-Queens",
          "subset sum"
        ],
        "answer": "sudoku solver",
        "explanation": "sudoku solver is a key concept in DSA."
      },
      {
        "question": "Level 9 · What dependency does have subset sum in DSA?",
        "options": [
          "subset sum",
          "backtracking",
          "N-Queens",
          "sudoku solver"
        ],
        "answer": "subset sum",
        "explanation": "subset sum is a key concept in DSA."
      },
      {
        "question": "Level 9 · How do you migrate from permutations in DSA?",
        "options": [
          "permutations",
          "backtracking",
          "N-Queens",
          "sudoku solver"
        ],
        "answer": "permutations",
        "explanation": "permutations is a key concept in DSA."
      },
      {
        "question": "Level 9 · How does integrate with combination sum in DSA?",
        "options": [
          "combination sum",
          "backtracking",
          "N-Queens",
          "sudoku solver"
        ],
        "answer": "combination sum",
        "explanation": "combination sum is a key concept in DSA."
      },
      {
        "question": "Level 9 · What architectural pattern uses graph coloring in DSA?",
        "options": [
          "graph coloring",
          "backtracking",
          "N-Queens",
          "sudoku solver"
        ],
        "answer": "graph coloring",
        "explanation": "graph coloring is a key concept in DSA."
      },
      {
        "question": "Level 9 · How would you design a system with Hamiltonian path in DSA?",
        "options": [
          "Hamiltonian path",
          "backtracking",
          "N-Queens",
          "sudoku solver"
        ],
        "answer": "Hamiltonian path",
        "explanation": "Hamiltonian path is a key concept in DSA."
      },
      {
        "question": "Level 9 · What dependency does have knight's tour in DSA?",
        "options": [
          "knight's tour",
          "backtracking",
          "N-Queens",
          "sudoku solver"
        ],
        "answer": "knight's tour",
        "explanation": "knight's tour is a key concept in DSA."
      },
      {
        "question": "Level 9 · How do you migrate from branch and bound in DSA?",
        "options": [
          "branch and bound",
          "backtracking",
          "N-Queens",
          "sudoku solver"
        ],
        "answer": "branch and bound",
        "explanation": "branch and bound is a key concept in DSA."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of string matching in DSA?",
        "options": [
          "string matching",
          "KMP algorithm",
          "Rabin-Karp",
          "Z algorithm"
        ],
        "answer": "string matching",
        "explanation": "string matching is a key concept in DSA."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of KMP algorithm in DSA?",
        "options": [
          "KMP algorithm",
          "string matching",
          "Rabin-Karp",
          "Z algorithm"
        ],
        "answer": "KMP algorithm",
        "explanation": "KMP algorithm is a key concept in DSA."
      },
      {
        "question": "Level 10 · How does evolve across scales Rabin-Karp in DSA?",
        "options": [
          "Rabin-Karp",
          "string matching",
          "KMP algorithm",
          "Z algorithm"
        ],
        "answer": "Rabin-Karp",
        "explanation": "Rabin-Karp is a key concept in DSA."
      },
      {
        "question": "Level 10 · What is the future direction of Z algorithm in DSA?",
        "options": [
          "Z algorithm",
          "string matching",
          "KMP algorithm",
          "Rabin-Karp"
        ],
        "answer": "Z algorithm",
        "explanation": "Z algorithm is a key concept in DSA."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves Boyer-Moore in DSA?",
        "options": [
          "Boyer-Moore",
          "string matching",
          "KMP algorithm",
          "Rabin-Karp"
        ],
        "answer": "Boyer-Moore",
        "explanation": "Boyer-Moore is a key concept in DSA."
      },
      {
        "question": "Level 10 · What is the theoretical basis of pattern searching in DSA?",
        "options": [
          "pattern searching",
          "string matching",
          "KMP algorithm",
          "Rabin-Karp"
        ],
        "answer": "pattern searching",
        "explanation": "pattern searching is a key concept in DSA."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of rolling hash in DSA?",
        "options": [
          "rolling hash",
          "string matching",
          "KMP algorithm",
          "Rabin-Karp"
        ],
        "answer": "rolling hash",
        "explanation": "rolling hash is a key concept in DSA."
      },
      {
        "question": "Level 10 · How does evolve across scales suffix array in DSA?",
        "options": [
          "suffix array",
          "string matching",
          "KMP algorithm",
          "Rabin-Karp"
        ],
        "answer": "suffix array",
        "explanation": "suffix array is a key concept in DSA."
      },
      {
        "question": "Level 10 · What is the future direction of LCP array in DSA?",
        "options": [
          "LCP array",
          "string matching",
          "KMP algorithm",
          "Rabin-Karp"
        ],
        "answer": "LCP array",
        "explanation": "LCP array is a key concept in DSA."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves regex matching in DSA?",
        "options": [
          "regex matching",
          "string matching",
          "KMP algorithm",
          "Rabin-Karp"
        ],
        "answer": "regex matching",
        "explanation": "regex matching is a key concept in DSA."
      }
    ]
  },
  "DevOps": {
    "Level 1": [
      {
        "question": "Level 1 · What is Docker in DevOps?",
        "options": [
          "Docker",
          "container",
          "image",
          "Dockerfile"
        ],
        "answer": "Docker",
        "explanation": "Docker is a key concept in DevOps."
      },
      {
        "question": "Level 1 · How would you define container in DevOps?",
        "options": [
          "container",
          "Docker",
          "image",
          "Dockerfile"
        ],
        "answer": "container",
        "explanation": "container is a key concept in DevOps."
      },
      {
        "question": "Level 1 · Which describes image in DevOps?",
        "options": [
          "image",
          "Docker",
          "container",
          "Dockerfile"
        ],
        "answer": "image",
        "explanation": "image is a key concept in DevOps."
      },
      {
        "question": "Level 1 · What does the term Dockerfile in DevOps?",
        "options": [
          "Dockerfile",
          "Docker",
          "container",
          "image"
        ],
        "answer": "Dockerfile",
        "explanation": "Dockerfile is a key concept in DevOps."
      },
      {
        "question": "Level 1 · What concept is Docker Compose in DevOps?",
        "options": [
          "Docker Compose",
          "Docker",
          "container",
          "image"
        ],
        "answer": "Docker Compose",
        "explanation": "Docker Compose is a key concept in DevOps."
      },
      {
        "question": "Level 1 · What is container vs VM in DevOps?",
        "options": [
          "container vs VM",
          "Docker",
          "container",
          "image"
        ],
        "answer": "container vs VM",
        "explanation": "container vs VM is a key concept in DevOps."
      },
      {
        "question": "Level 1 · How would you define layered filesystem in DevOps?",
        "options": [
          "layered filesystem",
          "Docker",
          "container",
          "image"
        ],
        "answer": "layered filesystem",
        "explanation": "layered filesystem is a key concept in DevOps."
      },
      {
        "question": "Level 1 · Which describes volume in DevOps?",
        "options": [
          "volume",
          "Docker",
          "container",
          "image"
        ],
        "answer": "volume",
        "explanation": "volume is a key concept in DevOps."
      },
      {
        "question": "Level 1 · What does the term network bridge in DevOps?",
        "options": [
          "network bridge",
          "Docker",
          "container",
          "image"
        ],
        "answer": "network bridge",
        "explanation": "network bridge is a key concept in DevOps."
      },
      {
        "question": "Level 1 · What concept is registry in DevOps?",
        "options": [
          "registry",
          "Docker",
          "container",
          "image"
        ],
        "answer": "registry",
        "explanation": "registry is a key concept in DevOps."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you CI/CD in DevOps?",
        "options": [
          "CI/CD",
          "Jenkins",
          "GitHub Actions",
          "GitLab CI"
        ],
        "answer": "CI/CD",
        "explanation": "CI/CD is a key concept in DevOps."
      },
      {
        "question": "Level 2 · What is the purpose of Jenkins in DevOps?",
        "options": [
          "Jenkins",
          "CI/CD",
          "GitHub Actions",
          "GitLab CI"
        ],
        "answer": "Jenkins",
        "explanation": "Jenkins is a key concept in DevOps."
      },
      {
        "question": "Level 2 · Which tool is used to GitHub Actions in DevOps?",
        "options": [
          "GitHub Actions",
          "CI/CD",
          "Jenkins",
          "GitLab CI"
        ],
        "answer": "GitHub Actions",
        "explanation": "GitHub Actions is a key concept in DevOps."
      },
      {
        "question": "Level 2 · What does GitLab CI in DevOps?",
        "options": [
          "GitLab CI",
          "CI/CD",
          "Jenkins",
          "GitHub Actions"
        ],
        "answer": "GitLab CI",
        "explanation": "GitLab CI is a key concept in DevOps."
      },
      {
        "question": "Level 2 · How can you pipeline in DevOps?",
        "options": [
          "pipeline",
          "CI/CD",
          "Jenkins",
          "GitHub Actions"
        ],
        "answer": "pipeline",
        "explanation": "pipeline is a key concept in DevOps."
      },
      {
        "question": "Level 2 · How do you build stage in DevOps?",
        "options": [
          "build stage",
          "CI/CD",
          "Jenkins",
          "GitHub Actions"
        ],
        "answer": "build stage",
        "explanation": "build stage is a key concept in DevOps."
      },
      {
        "question": "Level 2 · What is the purpose of test stage in DevOps?",
        "options": [
          "test stage",
          "CI/CD",
          "Jenkins",
          "GitHub Actions"
        ],
        "answer": "test stage",
        "explanation": "test stage is a key concept in DevOps."
      },
      {
        "question": "Level 2 · Which tool is used to deploy stage in DevOps?",
        "options": [
          "deploy stage",
          "CI/CD",
          "Jenkins",
          "GitHub Actions"
        ],
        "answer": "deploy stage",
        "explanation": "deploy stage is a key concept in DevOps."
      },
      {
        "question": "Level 2 · What does artifact in DevOps?",
        "options": [
          "artifact",
          "CI/CD",
          "Jenkins",
          "GitHub Actions"
        ],
        "answer": "artifact",
        "explanation": "artifact is a key concept in DevOps."
      },
      {
        "question": "Level 2 · How can you trigger in DevOps?",
        "options": [
          "trigger",
          "CI/CD",
          "Jenkins",
          "GitHub Actions"
        ],
        "answer": "trigger",
        "explanation": "trigger is a key concept in DevOps."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between Kubernetes in DevOps?",
        "options": [
          "Kubernetes",
          "pod",
          "deployment",
          "service"
        ],
        "answer": "Kubernetes",
        "explanation": "Kubernetes is a key concept in DevOps."
      },
      {
        "question": "Level 3 · How does pod in DevOps?",
        "options": [
          "pod",
          "Kubernetes",
          "deployment",
          "service"
        ],
        "answer": "pod",
        "explanation": "pod is a key concept in DevOps."
      },
      {
        "question": "Level 3 · What problem does deployment in DevOps?",
        "options": [
          "deployment",
          "Kubernetes",
          "pod",
          "service"
        ],
        "answer": "deployment",
        "explanation": "deployment is a key concept in DevOps."
      },
      {
        "question": "Level 3 · Which approach service in DevOps?",
        "options": [
          "service",
          "Kubernetes",
          "pod",
          "deployment"
        ],
        "answer": "service",
        "explanation": "service is a key concept in DevOps."
      },
      {
        "question": "Level 3 · What is the role of ingress in DevOps?",
        "options": [
          "ingress",
          "Kubernetes",
          "pod",
          "deployment"
        ],
        "answer": "ingress",
        "explanation": "ingress is a key concept in DevOps."
      },
      {
        "question": "Level 3 · What is the difference between configmap in DevOps?",
        "options": [
          "configmap",
          "Kubernetes",
          "pod",
          "deployment"
        ],
        "answer": "configmap",
        "explanation": "configmap is a key concept in DevOps."
      },
      {
        "question": "Level 3 · How does secret in DevOps?",
        "options": [
          "secret",
          "Kubernetes",
          "pod",
          "deployment"
        ],
        "answer": "secret",
        "explanation": "secret is a key concept in DevOps."
      },
      {
        "question": "Level 3 · What problem does namespace in DevOps?",
        "options": [
          "namespace",
          "Kubernetes",
          "pod",
          "deployment"
        ],
        "answer": "namespace",
        "explanation": "namespace is a key concept in DevOps."
      },
      {
        "question": "Level 3 · Which approach helm in DevOps?",
        "options": [
          "helm",
          "Kubernetes",
          "pod",
          "deployment"
        ],
        "answer": "helm",
        "explanation": "helm is a key concept in DevOps."
      },
      {
        "question": "Level 3 · What is the role of kubectl in DevOps?",
        "options": [
          "kubectl",
          "Kubernetes",
          "pod",
          "deployment"
        ],
        "answer": "kubectl",
        "explanation": "kubectl is a key concept in DevOps."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use Terraform in DevOps?",
        "options": [
          "Terraform",
          "infrastructure as code",
          "provider",
          "resource"
        ],
        "answer": "Terraform",
        "explanation": "Terraform is a key concept in DevOps."
      },
      {
        "question": "Level 4 · What is a real-world example of infrastructure as code in DevOps?",
        "options": [
          "infrastructure as code",
          "Terraform",
          "provider",
          "resource"
        ],
        "answer": "infrastructure as code",
        "explanation": "infrastructure as code is a key concept in DevOps."
      },
      {
        "question": "Level 4 · How would you implement provider in DevOps?",
        "options": [
          "provider",
          "Terraform",
          "infrastructure as code",
          "resource"
        ],
        "answer": "provider",
        "explanation": "provider is a key concept in DevOps."
      },
      {
        "question": "Level 4 · What pattern applies resource in DevOps?",
        "options": [
          "resource",
          "Terraform",
          "infrastructure as code",
          "provider"
        ],
        "answer": "resource",
        "explanation": "resource is a key concept in DevOps."
      },
      {
        "question": "Level 4 · What strategy handles state file in DevOps?",
        "options": [
          "state file",
          "Terraform",
          "infrastructure as code",
          "provider"
        ],
        "answer": "state file",
        "explanation": "state file is a key concept in DevOps."
      },
      {
        "question": "Level 4 · When would you use plan in DevOps?",
        "options": [
          "plan",
          "Terraform",
          "infrastructure as code",
          "provider"
        ],
        "answer": "plan",
        "explanation": "plan is a key concept in DevOps."
      },
      {
        "question": "Level 4 · What is a real-world example of apply in DevOps?",
        "options": [
          "apply",
          "Terraform",
          "infrastructure as code",
          "provider"
        ],
        "answer": "apply",
        "explanation": "apply is a key concept in DevOps."
      },
      {
        "question": "Level 4 · How would you implement module in DevOps?",
        "options": [
          "module",
          "Terraform",
          "infrastructure as code",
          "provider"
        ],
        "answer": "module",
        "explanation": "module is a key concept in DevOps."
      },
      {
        "question": "Level 4 · What pattern applies HCL in DevOps?",
        "options": [
          "HCL",
          "Terraform",
          "infrastructure as code",
          "provider"
        ],
        "answer": "HCL",
        "explanation": "HCL is a key concept in DevOps."
      },
      {
        "question": "Level 4 · What strategy handles provisioner in DevOps?",
        "options": [
          "provisioner",
          "Terraform",
          "infrastructure as code",
          "provider"
        ],
        "answer": "provisioner",
        "explanation": "provisioner is a key concept in DevOps."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize Ansible in DevOps?",
        "options": [
          "Ansible",
          "playbook",
          "inventory",
          "role"
        ],
        "answer": "Ansible",
        "explanation": "Ansible is a key concept in DevOps."
      },
      {
        "question": "Level 5 · What is the best practice for playbook in DevOps?",
        "options": [
          "playbook",
          "Ansible",
          "inventory",
          "role"
        ],
        "answer": "playbook",
        "explanation": "playbook is a key concept in DevOps."
      },
      {
        "question": "Level 5 · What performance consideration involves inventory in DevOps?",
        "options": [
          "inventory",
          "Ansible",
          "playbook",
          "role"
        ],
        "answer": "inventory",
        "explanation": "inventory is a key concept in DevOps."
      },
      {
        "question": "Level 5 · How do you scale role in DevOps?",
        "options": [
          "role",
          "Ansible",
          "playbook",
          "inventory"
        ],
        "answer": "role",
        "explanation": "role is a key concept in DevOps."
      },
      {
        "question": "Level 5 · What tradeoff exists when using task in DevOps?",
        "options": [
          "task",
          "Ansible",
          "playbook",
          "inventory"
        ],
        "answer": "task",
        "explanation": "task is a key concept in DevOps."
      },
      {
        "question": "Level 5 · How do you optimize module in DevOps?",
        "options": [
          "module",
          "Ansible",
          "playbook",
          "inventory"
        ],
        "answer": "module",
        "explanation": "module is a key concept in DevOps."
      },
      {
        "question": "Level 5 · What is the best practice for ansible ad-hoc in DevOps?",
        "options": [
          "ansible ad-hoc",
          "Ansible",
          "playbook",
          "inventory"
        ],
        "answer": "ansible ad-hoc",
        "explanation": "ansible ad-hoc is a key concept in DevOps."
      },
      {
        "question": "Level 5 · What performance consideration involves YAML syntax in DevOps?",
        "options": [
          "YAML syntax",
          "Ansible",
          "playbook",
          "inventory"
        ],
        "answer": "YAML syntax",
        "explanation": "YAML syntax is a key concept in DevOps."
      },
      {
        "question": "Level 5 · How do you scale idempotency in DevOps?",
        "options": [
          "idempotency",
          "Ansible",
          "playbook",
          "inventory"
        ],
        "answer": "idempotency",
        "explanation": "idempotency is a key concept in DevOps."
      },
      {
        "question": "Level 5 · What tradeoff exists when using control node in DevOps?",
        "options": [
          "control node",
          "Ansible",
          "playbook",
          "inventory"
        ],
        "answer": "control node",
        "explanation": "control node is a key concept in DevOps."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare monitoring in DevOps?",
        "options": [
          "monitoring",
          "Prometheus",
          "Grafana",
          "metrics"
        ],
        "answer": "monitoring",
        "explanation": "monitoring is a key concept in DevOps."
      },
      {
        "question": "Level 6 · How is it different from Prometheus in DevOps?",
        "options": [
          "Prometheus",
          "monitoring",
          "Grafana",
          "metrics"
        ],
        "answer": "Prometheus",
        "explanation": "Prometheus is a key concept in DevOps."
      },
      {
        "question": "Level 6 · What are the pros and cons of Grafana in DevOps?",
        "options": [
          "Grafana",
          "monitoring",
          "Prometheus",
          "metrics"
        ],
        "answer": "Grafana",
        "explanation": "Grafana is a key concept in DevOps."
      },
      {
        "question": "Level 6 · What advantage does metrics in DevOps?",
        "options": [
          "metrics",
          "monitoring",
          "Prometheus",
          "Grafana"
        ],
        "answer": "metrics",
        "explanation": "metrics is a key concept in DevOps."
      },
      {
        "question": "Level 6 · What limitation does alerts in DevOps?",
        "options": [
          "alerts",
          "monitoring",
          "Prometheus",
          "Grafana"
        ],
        "answer": "alerts",
        "explanation": "alerts is a key concept in DevOps."
      },
      {
        "question": "Level 6 · Compare SLI in DevOps?",
        "options": [
          "SLI",
          "monitoring",
          "Prometheus",
          "Grafana"
        ],
        "answer": "SLI",
        "explanation": "SLI is a key concept in DevOps."
      },
      {
        "question": "Level 6 · How is it different from SLO in DevOps?",
        "options": [
          "SLO",
          "monitoring",
          "Prometheus",
          "Grafana"
        ],
        "answer": "SLO",
        "explanation": "SLO is a key concept in DevOps."
      },
      {
        "question": "Level 6 · What are the pros and cons of SLAs in DevOps?",
        "options": [
          "SLAs",
          "monitoring",
          "Prometheus",
          "Grafana"
        ],
        "answer": "SLAs",
        "explanation": "SLAs is a key concept in DevOps."
      },
      {
        "question": "Level 6 · What advantage does logs in DevOps?",
        "options": [
          "logs",
          "monitoring",
          "Prometheus",
          "Grafana"
        ],
        "answer": "logs",
        "explanation": "logs is a key concept in DevOps."
      },
      {
        "question": "Level 6 · What limitation does traces in DevOps?",
        "options": [
          "traces",
          "monitoring",
          "Prometheus",
          "Grafana"
        ],
        "answer": "traces",
        "explanation": "traces is a key concept in DevOps."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with cloud in DevOps?",
        "options": [
          "cloud",
          "AWS",
          "EC2",
          "S3"
        ],
        "answer": "cloud",
        "explanation": "cloud is a key concept in DevOps."
      },
      {
        "question": "Level 7 · What goes wrong when AWS in DevOps?",
        "options": [
          "AWS",
          "cloud",
          "EC2",
          "S3"
        ],
        "answer": "AWS",
        "explanation": "AWS is a key concept in DevOps."
      },
      {
        "question": "Level 7 · What common mistake involves EC2 in DevOps?",
        "options": [
          "EC2",
          "cloud",
          "AWS",
          "S3"
        ],
        "answer": "EC2",
        "explanation": "EC2 is a key concept in DevOps."
      },
      {
        "question": "Level 7 · How do you monitor S3 in DevOps?",
        "options": [
          "S3",
          "cloud",
          "AWS",
          "EC2"
        ],
        "answer": "S3",
        "explanation": "S3 is a key concept in DevOps."
      },
      {
        "question": "Level 7 · What failure mode occurs with RDS in DevOps?",
        "options": [
          "RDS",
          "cloud",
          "AWS",
          "EC2"
        ],
        "answer": "RDS",
        "explanation": "RDS is a key concept in DevOps."
      },
      {
        "question": "Level 7 · How do you debug issues with VPC in DevOps?",
        "options": [
          "VPC",
          "cloud",
          "AWS",
          "EC2"
        ],
        "answer": "VPC",
        "explanation": "VPC is a key concept in DevOps."
      },
      {
        "question": "Level 7 · What goes wrong when IAM in DevOps?",
        "options": [
          "IAM",
          "cloud",
          "AWS",
          "EC2"
        ],
        "answer": "IAM",
        "explanation": "IAM is a key concept in DevOps."
      },
      {
        "question": "Level 7 · What common mistake involves auto scaling in DevOps?",
        "options": [
          "auto scaling",
          "cloud",
          "AWS",
          "EC2"
        ],
        "answer": "auto scaling",
        "explanation": "auto scaling is a key concept in DevOps."
      },
      {
        "question": "Level 7 · How do you monitor load balancer in DevOps?",
        "options": [
          "load balancer",
          "cloud",
          "AWS",
          "EC2"
        ],
        "answer": "load balancer",
        "explanation": "load balancer is a key concept in DevOps."
      },
      {
        "question": "Level 7 · What failure mode occurs with CloudFront in DevOps?",
        "options": [
          "CloudFront",
          "cloud",
          "AWS",
          "EC2"
        ],
        "answer": "CloudFront",
        "explanation": "CloudFront is a key concept in DevOps."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves GitOps in DevOps?",
        "options": [
          "GitOps",
          "ArgoCD",
          "declarative deployment",
          "pull vs push"
        ],
        "answer": "GitOps",
        "explanation": "GitOps is a key concept in DevOps."
      },
      {
        "question": "Level 8 · How do you secure ArgoCD in DevOps?",
        "options": [
          "ArgoCD",
          "GitOps",
          "declarative deployment",
          "pull vs push"
        ],
        "answer": "ArgoCD",
        "explanation": "ArgoCD is a key concept in DevOps."
      },
      {
        "question": "Level 8 · What testing strategy covers declarative deployment in DevOps?",
        "options": [
          "declarative deployment",
          "GitOps",
          "ArgoCD",
          "pull vs push"
        ],
        "answer": "declarative deployment",
        "explanation": "declarative deployment is a key concept in DevOps."
      },
      {
        "question": "Level 8 · How do you ensure reliability of pull vs push in DevOps?",
        "options": [
          "pull vs push",
          "GitOps",
          "ArgoCD",
          "declarative deployment"
        ],
        "answer": "pull vs push",
        "explanation": "pull vs push is a key concept in DevOps."
      },
      {
        "question": "Level 8 · What error handling applies to sync policy in DevOps?",
        "options": [
          "sync policy",
          "GitOps",
          "ArgoCD",
          "declarative deployment"
        ],
        "answer": "sync policy",
        "explanation": "sync policy is a key concept in DevOps."
      },
      {
        "question": "Level 8 · What security concern involves rollback in DevOps?",
        "options": [
          "rollback",
          "GitOps",
          "ArgoCD",
          "declarative deployment"
        ],
        "answer": "rollback",
        "explanation": "rollback is a key concept in DevOps."
      },
      {
        "question": "Level 8 · How do you secure application CR in DevOps?",
        "options": [
          "application CR",
          "GitOps",
          "ArgoCD",
          "declarative deployment"
        ],
        "answer": "application CR",
        "explanation": "application CR is a key concept in DevOps."
      },
      {
        "question": "Level 8 · What testing strategy covers cluster in DevOps?",
        "options": [
          "cluster",
          "GitOps",
          "ArgoCD",
          "declarative deployment"
        ],
        "answer": "cluster",
        "explanation": "cluster is a key concept in DevOps."
      },
      {
        "question": "Level 8 · How do you ensure reliability of repositories in DevOps?",
        "options": [
          "repositories",
          "GitOps",
          "ArgoCD",
          "declarative deployment"
        ],
        "answer": "repositories",
        "explanation": "repositories is a key concept in DevOps."
      },
      {
        "question": "Level 8 · What error handling applies to health check in DevOps?",
        "options": [
          "health check",
          "GitOps",
          "ArgoCD",
          "declarative deployment"
        ],
        "answer": "health check",
        "explanation": "health check is a key concept in DevOps."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with security in DevOps?",
        "options": [
          "security",
          "Docker security",
          "Kubernetes RBAC",
          "network policy"
        ],
        "answer": "security",
        "explanation": "security is a key concept in DevOps."
      },
      {
        "question": "Level 9 · What architectural pattern uses Docker security in DevOps?",
        "options": [
          "Docker security",
          "security",
          "Kubernetes RBAC",
          "network policy"
        ],
        "answer": "Docker security",
        "explanation": "Docker security is a key concept in DevOps."
      },
      {
        "question": "Level 9 · How would you design a system with Kubernetes RBAC in DevOps?",
        "options": [
          "Kubernetes RBAC",
          "security",
          "Docker security",
          "network policy"
        ],
        "answer": "Kubernetes RBAC",
        "explanation": "Kubernetes RBAC is a key concept in DevOps."
      },
      {
        "question": "Level 9 · What dependency does have network policy in DevOps?",
        "options": [
          "network policy",
          "security",
          "Docker security",
          "Kubernetes RBAC"
        ],
        "answer": "network policy",
        "explanation": "network policy is a key concept in DevOps."
      },
      {
        "question": "Level 9 · How do you migrate from Pod Security in DevOps?",
        "options": [
          "Pod Security",
          "security",
          "Docker security",
          "Kubernetes RBAC"
        ],
        "answer": "Pod Security",
        "explanation": "Pod Security is a key concept in DevOps."
      },
      {
        "question": "Level 9 · How does integrate with secrets management in DevOps?",
        "options": [
          "secrets management",
          "security",
          "Docker security",
          "Kubernetes RBAC"
        ],
        "answer": "secrets management",
        "explanation": "secrets management is a key concept in DevOps."
      },
      {
        "question": "Level 9 · What architectural pattern uses Vault in DevOps?",
        "options": [
          "Vault",
          "security",
          "Docker security",
          "Kubernetes RBAC"
        ],
        "answer": "Vault",
        "explanation": "Vault is a key concept in DevOps."
      },
      {
        "question": "Level 9 · How would you design a system with image scanning in DevOps?",
        "options": [
          "image scanning",
          "security",
          "Docker security",
          "Kubernetes RBAC"
        ],
        "answer": "image scanning",
        "explanation": "image scanning is a key concept in DevOps."
      },
      {
        "question": "Level 9 · What dependency does have SBOM in DevOps?",
        "options": [
          "SBOM",
          "security",
          "Docker security",
          "Kubernetes RBAC"
        ],
        "answer": "SBOM",
        "explanation": "SBOM is a key concept in DevOps."
      },
      {
        "question": "Level 9 · How do you migrate from zero trust in DevOps?",
        "options": [
          "zero trust",
          "security",
          "Docker security",
          "Kubernetes RBAC"
        ],
        "answer": "zero trust",
        "explanation": "zero trust is a key concept in DevOps."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of SRE in DevOps?",
        "options": [
          "SRE",
          "reliability",
          "incident response",
          "runbook"
        ],
        "answer": "SRE",
        "explanation": "SRE is a key concept in DevOps."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of reliability in DevOps?",
        "options": [
          "reliability",
          "SRE",
          "incident response",
          "runbook"
        ],
        "answer": "reliability",
        "explanation": "reliability is a key concept in DevOps."
      },
      {
        "question": "Level 10 · How does evolve across scales incident response in DevOps?",
        "options": [
          "incident response",
          "SRE",
          "reliability",
          "runbook"
        ],
        "answer": "incident response",
        "explanation": "incident response is a key concept in DevOps."
      },
      {
        "question": "Level 10 · What is the future direction of runbook in DevOps?",
        "options": [
          "runbook",
          "SRE",
          "reliability",
          "incident response"
        ],
        "answer": "runbook",
        "explanation": "runbook is a key concept in DevOps."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves postmortem in DevOps?",
        "options": [
          "postmortem",
          "SRE",
          "reliability",
          "incident response"
        ],
        "answer": "postmortem",
        "explanation": "postmortem is a key concept in DevOps."
      },
      {
        "question": "Level 10 · What is the theoretical basis of chaos engineering in DevOps?",
        "options": [
          "chaos engineering",
          "SRE",
          "reliability",
          "incident response"
        ],
        "answer": "chaos engineering",
        "explanation": "chaos engineering is a key concept in DevOps."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of capacity planning in DevOps?",
        "options": [
          "capacity planning",
          "SRE",
          "reliability",
          "incident response"
        ],
        "answer": "capacity planning",
        "explanation": "capacity planning is a key concept in DevOps."
      },
      {
        "question": "Level 10 · How does evolve across scales error budget in DevOps?",
        "options": [
          "error budget",
          "SRE",
          "reliability",
          "incident response"
        ],
        "answer": "error budget",
        "explanation": "error budget is a key concept in DevOps."
      },
      {
        "question": "Level 10 · What is the future direction of toil in DevOps?",
        "options": [
          "toil",
          "SRE",
          "reliability",
          "incident response"
        ],
        "answer": "toil",
        "explanation": "toil is a key concept in DevOps."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves automation in DevOps?",
        "options": [
          "automation",
          "SRE",
          "reliability",
          "incident response"
        ],
        "answer": "automation",
        "explanation": "automation is a key concept in DevOps."
      }
    ]
  },
  "UI/UX": {
    "Level 1": [
      {
        "question": "Level 1 · What is user research in UI/UX?",
        "options": [
          "user research",
          "usability testing",
          "heuristic evaluation",
          "user interview"
        ],
        "answer": "user research",
        "explanation": "user research is a key concept in UI/UX."
      },
      {
        "question": "Level 1 · How would you define usability testing in UI/UX?",
        "options": [
          "usability testing",
          "user research",
          "heuristic evaluation",
          "user interview"
        ],
        "answer": "usability testing",
        "explanation": "usability testing is a key concept in UI/UX."
      },
      {
        "question": "Level 1 · Which describes heuristic evaluation in UI/UX?",
        "options": [
          "heuristic evaluation",
          "user research",
          "usability testing",
          "user interview"
        ],
        "answer": "heuristic evaluation",
        "explanation": "heuristic evaluation is a key concept in UI/UX."
      },
      {
        "question": "Level 1 · What does the term user interview in UI/UX?",
        "options": [
          "user interview",
          "user research",
          "usability testing",
          "heuristic evaluation"
        ],
        "answer": "user interview",
        "explanation": "user interview is a key concept in UI/UX."
      },
      {
        "question": "Level 1 · What concept is survey in UI/UX?",
        "options": [
          "survey",
          "user research",
          "usability testing",
          "heuristic evaluation"
        ],
        "answer": "survey",
        "explanation": "survey is a key concept in UI/UX."
      },
      {
        "question": "Level 1 · What is A/B testing in UI/UX?",
        "options": [
          "A/B testing",
          "user research",
          "usability testing",
          "heuristic evaluation"
        ],
        "answer": "A/B testing",
        "explanation": "A/B testing is a key concept in UI/UX."
      },
      {
        "question": "Level 1 · How would you define analytics in UI/UX?",
        "options": [
          "analytics",
          "user research",
          "usability testing",
          "heuristic evaluation"
        ],
        "answer": "analytics",
        "explanation": "analytics is a key concept in UI/UX."
      },
      {
        "question": "Level 1 · Which describes session recording in UI/UX?",
        "options": [
          "session recording",
          "user research",
          "usability testing",
          "heuristic evaluation"
        ],
        "answer": "session recording",
        "explanation": "session recording is a key concept in UI/UX."
      },
      {
        "question": "Level 1 · What does the term heatmap in UI/UX?",
        "options": [
          "heatmap",
          "user research",
          "usability testing",
          "heuristic evaluation"
        ],
        "answer": "heatmap",
        "explanation": "heatmap is a key concept in UI/UX."
      },
      {
        "question": "Level 1 · What concept is click tracking in UI/UX?",
        "options": [
          "click tracking",
          "user research",
          "usability testing",
          "heuristic evaluation"
        ],
        "answer": "click tracking",
        "explanation": "click tracking is a key concept in UI/UX."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you wireframe in UI/UX?",
        "options": [
          "wireframe",
          "mockup",
          "prototype",
          "Figma"
        ],
        "answer": "wireframe",
        "explanation": "wireframe is a key concept in UI/UX."
      },
      {
        "question": "Level 2 · What is the purpose of mockup in UI/UX?",
        "options": [
          "mockup",
          "wireframe",
          "prototype",
          "Figma"
        ],
        "answer": "mockup",
        "explanation": "mockup is a key concept in UI/UX."
      },
      {
        "question": "Level 2 · Which tool is used to prototype in UI/UX?",
        "options": [
          "prototype",
          "wireframe",
          "mockup",
          "Figma"
        ],
        "answer": "prototype",
        "explanation": "prototype is a key concept in UI/UX."
      },
      {
        "question": "Level 2 · What does Figma in UI/UX?",
        "options": [
          "Figma",
          "wireframe",
          "mockup",
          "prototype"
        ],
        "answer": "Figma",
        "explanation": "Figma is a key concept in UI/UX."
      },
      {
        "question": "Level 2 · How can you Sketch in UI/UX?",
        "options": [
          "Sketch",
          "wireframe",
          "mockup",
          "prototype"
        ],
        "answer": "Sketch",
        "explanation": "Sketch is a key concept in UI/UX."
      },
      {
        "question": "Level 2 · How do you Adobe XD in UI/UX?",
        "options": [
          "Adobe XD",
          "wireframe",
          "mockup",
          "prototype"
        ],
        "answer": "Adobe XD",
        "explanation": "Adobe XD is a key concept in UI/UX."
      },
      {
        "question": "Level 2 · What is the purpose of low fidelity in UI/UX?",
        "options": [
          "low fidelity",
          "wireframe",
          "mockup",
          "prototype"
        ],
        "answer": "low fidelity",
        "explanation": "low fidelity is a key concept in UI/UX."
      },
      {
        "question": "Level 2 · Which tool is used to high fidelity in UI/UX?",
        "options": [
          "high fidelity",
          "wireframe",
          "mockup",
          "prototype"
        ],
        "answer": "high fidelity",
        "explanation": "high fidelity is a key concept in UI/UX."
      },
      {
        "question": "Level 2 · What does interactive prototype in UI/UX?",
        "options": [
          "interactive prototype",
          "wireframe",
          "mockup",
          "prototype"
        ],
        "answer": "interactive prototype",
        "explanation": "interactive prototype is a key concept in UI/UX."
      },
      {
        "question": "Level 2 · How can you design handoff in UI/UX?",
        "options": [
          "design handoff",
          "wireframe",
          "mockup",
          "prototype"
        ],
        "answer": "design handoff",
        "explanation": "design handoff is a key concept in UI/UX."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between design system in UI/UX?",
        "options": [
          "design system",
          "component library",
          "design tokens",
          "style guide"
        ],
        "answer": "design system",
        "explanation": "design system is a key concept in UI/UX."
      },
      {
        "question": "Level 3 · How does component library in UI/UX?",
        "options": [
          "component library",
          "design system",
          "design tokens",
          "style guide"
        ],
        "answer": "component library",
        "explanation": "component library is a key concept in UI/UX."
      },
      {
        "question": "Level 3 · What problem does design tokens in UI/UX?",
        "options": [
          "design tokens",
          "design system",
          "component library",
          "style guide"
        ],
        "answer": "design tokens",
        "explanation": "design tokens is a key concept in UI/UX."
      },
      {
        "question": "Level 3 · Which approach style guide in UI/UX?",
        "options": [
          "style guide",
          "design system",
          "component library",
          "design tokens"
        ],
        "answer": "style guide",
        "explanation": "style guide is a key concept in UI/UX."
      },
      {
        "question": "Level 3 · What is the role of pattern library in UI/UX?",
        "options": [
          "pattern library",
          "design system",
          "component library",
          "design tokens"
        ],
        "answer": "pattern library",
        "explanation": "pattern library is a key concept in UI/UX."
      },
      {
        "question": "Level 3 · What is the difference between atomic design in UI/UX?",
        "options": [
          "atomic design",
          "design system",
          "component library",
          "design tokens"
        ],
        "answer": "atomic design",
        "explanation": "atomic design is a key concept in UI/UX."
      },
      {
        "question": "Level 3 · How does color system in UI/UX?",
        "options": [
          "color system",
          "design system",
          "component library",
          "design tokens"
        ],
        "answer": "color system",
        "explanation": "color system is a key concept in UI/UX."
      },
      {
        "question": "Level 3 · What problem does typography scale in UI/UX?",
        "options": [
          "typography scale",
          "design system",
          "component library",
          "design tokens"
        ],
        "answer": "typography scale",
        "explanation": "typography scale is a key concept in UI/UX."
      },
      {
        "question": "Level 3 · Which approach spacing grid in UI/UX?",
        "options": [
          "spacing grid",
          "design system",
          "component library",
          "design tokens"
        ],
        "answer": "spacing grid",
        "explanation": "spacing grid is a key concept in UI/UX."
      },
      {
        "question": "Level 3 · What is the role of icons in UI/UX?",
        "options": [
          "icons",
          "design system",
          "component library",
          "design tokens"
        ],
        "answer": "icons",
        "explanation": "icons is a key concept in UI/UX."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use accessibility in UI/UX?",
        "options": [
          "accessibility",
          "WCAG",
          "screen reader",
          "keyboard navigation"
        ],
        "answer": "accessibility",
        "explanation": "accessibility is a key concept in UI/UX."
      },
      {
        "question": "Level 4 · What is a real-world example of WCAG in UI/UX?",
        "options": [
          "WCAG",
          "accessibility",
          "screen reader",
          "keyboard navigation"
        ],
        "answer": "WCAG",
        "explanation": "WCAG is a key concept in UI/UX."
      },
      {
        "question": "Level 4 · How would you implement screen reader in UI/UX?",
        "options": [
          "screen reader",
          "accessibility",
          "WCAG",
          "keyboard navigation"
        ],
        "answer": "screen reader",
        "explanation": "screen reader is a key concept in UI/UX."
      },
      {
        "question": "Level 4 · What pattern applies keyboard navigation in UI/UX?",
        "options": [
          "keyboard navigation",
          "accessibility",
          "WCAG",
          "screen reader"
        ],
        "answer": "keyboard navigation",
        "explanation": "keyboard navigation is a key concept in UI/UX."
      },
      {
        "question": "Level 4 · What strategy handles color contrast in UI/UX?",
        "options": [
          "color contrast",
          "accessibility",
          "WCAG",
          "screen reader"
        ],
        "answer": "color contrast",
        "explanation": "color contrast is a key concept in UI/UX."
      },
      {
        "question": "Level 4 · When would you use alt text in UI/UX?",
        "options": [
          "alt text",
          "accessibility",
          "WCAG",
          "screen reader"
        ],
        "answer": "alt text",
        "explanation": "alt text is a key concept in UI/UX."
      },
      {
        "question": "Level 4 · What is a real-world example of ARIA labels in UI/UX?",
        "options": [
          "ARIA labels",
          "accessibility",
          "WCAG",
          "screen reader"
        ],
        "answer": "ARIA labels",
        "explanation": "ARIA labels is a key concept in UI/UX."
      },
      {
        "question": "Level 4 · How would you implement focus management in UI/UX?",
        "options": [
          "focus management",
          "accessibility",
          "WCAG",
          "screen reader"
        ],
        "answer": "focus management",
        "explanation": "focus management is a key concept in UI/UX."
      },
      {
        "question": "Level 4 · What pattern applies semantic HTML in UI/UX?",
        "options": [
          "semantic HTML",
          "accessibility",
          "WCAG",
          "screen reader"
        ],
        "answer": "semantic HTML",
        "explanation": "semantic HTML is a key concept in UI/UX."
      },
      {
        "question": "Level 4 · What strategy handles skip navigation in UI/UX?",
        "options": [
          "skip navigation",
          "accessibility",
          "WCAG",
          "screen reader"
        ],
        "answer": "skip navigation",
        "explanation": "skip navigation is a key concept in UI/UX."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize information architecture in UI/UX?",
        "options": [
          "information architecture",
          "sitemap",
          "navigation",
          "card sorting"
        ],
        "answer": "information architecture",
        "explanation": "information architecture is a key concept in UI/UX."
      },
      {
        "question": "Level 5 · What is the best practice for sitemap in UI/UX?",
        "options": [
          "sitemap",
          "information architecture",
          "navigation",
          "card sorting"
        ],
        "answer": "sitemap",
        "explanation": "sitemap is a key concept in UI/UX."
      },
      {
        "question": "Level 5 · What performance consideration involves navigation in UI/UX?",
        "options": [
          "navigation",
          "information architecture",
          "sitemap",
          "card sorting"
        ],
        "answer": "navigation",
        "explanation": "navigation is a key concept in UI/UX."
      },
      {
        "question": "Level 5 · How do you scale card sorting in UI/UX?",
        "options": [
          "card sorting",
          "information architecture",
          "sitemap",
          "navigation"
        ],
        "answer": "card sorting",
        "explanation": "card sorting is a key concept in UI/UX."
      },
      {
        "question": "Level 5 · What tradeoff exists when using tree testing in UI/UX?",
        "options": [
          "tree testing",
          "information architecture",
          "sitemap",
          "navigation"
        ],
        "answer": "tree testing",
        "explanation": "tree testing is a key concept in UI/UX."
      },
      {
        "question": "Level 5 · How do you optimize user flow in UI/UX?",
        "options": [
          "user flow",
          "information architecture",
          "sitemap",
          "navigation"
        ],
        "answer": "user flow",
        "explanation": "user flow is a key concept in UI/UX."
      },
      {
        "question": "Level 5 · What is the best practice for task flow in UI/UX?",
        "options": [
          "task flow",
          "information architecture",
          "sitemap",
          "navigation"
        ],
        "answer": "task flow",
        "explanation": "task flow is a key concept in UI/UX."
      },
      {
        "question": "Level 5 · What performance consideration involves content hierarchy in UI/UX?",
        "options": [
          "content hierarchy",
          "information architecture",
          "sitemap",
          "navigation"
        ],
        "answer": "content hierarchy",
        "explanation": "content hierarchy is a key concept in UI/UX."
      },
      {
        "question": "Level 5 · How do you scale search in UI/UX?",
        "options": [
          "search",
          "information architecture",
          "sitemap",
          "navigation"
        ],
        "answer": "search",
        "explanation": "search is a key concept in UI/UX."
      },
      {
        "question": "Level 5 · What tradeoff exists when using breadcrumb in UI/UX?",
        "options": [
          "breadcrumb",
          "information architecture",
          "sitemap",
          "navigation"
        ],
        "answer": "breadcrumb",
        "explanation": "breadcrumb is a key concept in UI/UX."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare visual hierarchy in UI/UX?",
        "options": [
          "visual hierarchy",
          "color theory",
          "typography",
          "layout grid"
        ],
        "answer": "visual hierarchy",
        "explanation": "visual hierarchy is a key concept in UI/UX."
      },
      {
        "question": "Level 6 · How is it different from color theory in UI/UX?",
        "options": [
          "color theory",
          "visual hierarchy",
          "typography",
          "layout grid"
        ],
        "answer": "color theory",
        "explanation": "color theory is a key concept in UI/UX."
      },
      {
        "question": "Level 6 · What are the pros and cons of typography in UI/UX?",
        "options": [
          "typography",
          "visual hierarchy",
          "color theory",
          "layout grid"
        ],
        "answer": "typography",
        "explanation": "typography is a key concept in UI/UX."
      },
      {
        "question": "Level 6 · What advantage does layout grid in UI/UX?",
        "options": [
          "layout grid",
          "visual hierarchy",
          "color theory",
          "typography"
        ],
        "answer": "layout grid",
        "explanation": "layout grid is a key concept in UI/UX."
      },
      {
        "question": "Level 6 · What limitation does white space in UI/UX?",
        "options": [
          "white space",
          "visual hierarchy",
          "color theory",
          "typography"
        ],
        "answer": "white space",
        "explanation": "white space is a key concept in UI/UX."
      },
      {
        "question": "Level 6 · Compare consistency in UI/UX?",
        "options": [
          "consistency",
          "visual hierarchy",
          "color theory",
          "typography"
        ],
        "answer": "consistency",
        "explanation": "consistency is a key concept in UI/UX."
      },
      {
        "question": "Level 6 · How is it different from affordance in UI/UX?",
        "options": [
          "affordance",
          "visual hierarchy",
          "color theory",
          "typography"
        ],
        "answer": "affordance",
        "explanation": "affordance is a key concept in UI/UX."
      },
      {
        "question": "Level 6 · What are the pros and cons of signifiers in UI/UX?",
        "options": [
          "signifiers",
          "visual hierarchy",
          "color theory",
          "typography"
        ],
        "answer": "signifiers",
        "explanation": "signifiers is a key concept in UI/UX."
      },
      {
        "question": "Level 6 · What advantage does mental model in UI/UX?",
        "options": [
          "mental model",
          "visual hierarchy",
          "color theory",
          "typography"
        ],
        "answer": "mental model",
        "explanation": "mental model is a key concept in UI/UX."
      },
      {
        "question": "Level 6 · What limitation does Gestalt principles in UI/UX?",
        "options": [
          "Gestalt principles",
          "visual hierarchy",
          "color theory",
          "typography"
        ],
        "answer": "Gestalt principles",
        "explanation": "Gestalt principles is a key concept in UI/UX."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with responsive design in UI/UX?",
        "options": [
          "responsive design",
          "mobile-first",
          "breakpoints",
          "fluid layout"
        ],
        "answer": "responsive design",
        "explanation": "responsive design is a key concept in UI/UX."
      },
      {
        "question": "Level 7 · What goes wrong when mobile-first in UI/UX?",
        "options": [
          "mobile-first",
          "responsive design",
          "breakpoints",
          "fluid layout"
        ],
        "answer": "mobile-first",
        "explanation": "mobile-first is a key concept in UI/UX."
      },
      {
        "question": "Level 7 · What common mistake involves breakpoints in UI/UX?",
        "options": [
          "breakpoints",
          "responsive design",
          "mobile-first",
          "fluid layout"
        ],
        "answer": "breakpoints",
        "explanation": "breakpoints is a key concept in UI/UX."
      },
      {
        "question": "Level 7 · How do you monitor fluid layout in UI/UX?",
        "options": [
          "fluid layout",
          "responsive design",
          "mobile-first",
          "breakpoints"
        ],
        "answer": "fluid layout",
        "explanation": "fluid layout is a key concept in UI/UX."
      },
      {
        "question": "Level 7 · What failure mode occurs with touch targets in UI/UX?",
        "options": [
          "touch targets",
          "responsive design",
          "mobile-first",
          "breakpoints"
        ],
        "answer": "touch targets",
        "explanation": "touch targets is a key concept in UI/UX."
      },
      {
        "question": "Level 7 · How do you debug issues with thumb zone in UI/UX?",
        "options": [
          "thumb zone",
          "responsive design",
          "mobile-first",
          "breakpoints"
        ],
        "answer": "thumb zone",
        "explanation": "thumb zone is a key concept in UI/UX."
      },
      {
        "question": "Level 7 · What goes wrong when progressive disclosure in UI/UX?",
        "options": [
          "progressive disclosure",
          "responsive design",
          "mobile-first",
          "breakpoints"
        ],
        "answer": "progressive disclosure",
        "explanation": "progressive disclosure is a key concept in UI/UX."
      },
      {
        "question": "Level 7 · What common mistake involves adaptive design in UI/UX?",
        "options": [
          "adaptive design",
          "responsive design",
          "mobile-first",
          "breakpoints"
        ],
        "answer": "adaptive design",
        "explanation": "adaptive design is a key concept in UI/UX."
      },
      {
        "question": "Level 7 · How do you monitor fractal layout in UI/UX?",
        "options": [
          "fractal layout",
          "responsive design",
          "mobile-first",
          "breakpoints"
        ],
        "answer": "fractal layout",
        "explanation": "fractal layout is a key concept in UI/UX."
      },
      {
        "question": "Level 7 · What failure mode occurs with viewport in UI/UX?",
        "options": [
          "viewport",
          "responsive design",
          "mobile-first",
          "breakpoints"
        ],
        "answer": "viewport",
        "explanation": "viewport is a key concept in UI/UX."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves user journey in UI/UX?",
        "options": [
          "user journey",
          "empathy map",
          "persona",
          "scenario"
        ],
        "answer": "user journey",
        "explanation": "user journey is a key concept in UI/UX."
      },
      {
        "question": "Level 8 · How do you secure empathy map in UI/UX?",
        "options": [
          "empathy map",
          "user journey",
          "persona",
          "scenario"
        ],
        "answer": "empathy map",
        "explanation": "empathy map is a key concept in UI/UX."
      },
      {
        "question": "Level 8 · What testing strategy covers persona in UI/UX?",
        "options": [
          "persona",
          "user journey",
          "empathy map",
          "scenario"
        ],
        "answer": "persona",
        "explanation": "persona is a key concept in UI/UX."
      },
      {
        "question": "Level 8 · How do you ensure reliability of scenario in UI/UX?",
        "options": [
          "scenario",
          "user journey",
          "empathy map",
          "persona"
        ],
        "answer": "scenario",
        "explanation": "scenario is a key concept in UI/UX."
      },
      {
        "question": "Level 8 · What error handling applies to storyboard in UI/UX?",
        "options": [
          "storyboard",
          "user journey",
          "empathy map",
          "persona"
        ],
        "answer": "storyboard",
        "explanation": "storyboard is a key concept in UI/UX."
      },
      {
        "question": "Level 8 · What security concern involves touchpoint in UI/UX?",
        "options": [
          "touchpoint",
          "user journey",
          "empathy map",
          "persona"
        ],
        "answer": "touchpoint",
        "explanation": "touchpoint is a key concept in UI/UX."
      },
      {
        "question": "Level 8 · How do you secure pain point in UI/UX?",
        "options": [
          "pain point",
          "user journey",
          "empathy map",
          "persona"
        ],
        "answer": "pain point",
        "explanation": "pain point is a key concept in UI/UX."
      },
      {
        "question": "Level 8 · What testing strategy covers opportunity in UI/UX?",
        "options": [
          "opportunity",
          "user journey",
          "empathy map",
          "persona"
        ],
        "answer": "opportunity",
        "explanation": "opportunity is a key concept in UI/UX."
      },
      {
        "question": "Level 8 · How do you ensure reliability of service blueprint in UI/UX?",
        "options": [
          "service blueprint",
          "user journey",
          "empathy map",
          "persona"
        ],
        "answer": "service blueprint",
        "explanation": "service blueprint is a key concept in UI/UX."
      },
      {
        "question": "Level 8 · What error handling applies to experience map in UI/UX?",
        "options": [
          "experience map",
          "user journey",
          "empathy map",
          "persona"
        ],
        "answer": "experience map",
        "explanation": "experience map is a key concept in UI/UX."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with micro-interaction in UI/UX?",
        "options": [
          "micro-interaction",
          "animation",
          "transition",
          "motion design"
        ],
        "answer": "micro-interaction",
        "explanation": "micro-interaction is a key concept in UI/UX."
      },
      {
        "question": "Level 9 · What architectural pattern uses animation in UI/UX?",
        "options": [
          "animation",
          "micro-interaction",
          "transition",
          "motion design"
        ],
        "answer": "animation",
        "explanation": "animation is a key concept in UI/UX."
      },
      {
        "question": "Level 9 · How would you design a system with transition in UI/UX?",
        "options": [
          "transition",
          "micro-interaction",
          "animation",
          "motion design"
        ],
        "answer": "transition",
        "explanation": "transition is a key concept in UI/UX."
      },
      {
        "question": "Level 9 · What dependency does have motion design in UI/UX?",
        "options": [
          "motion design",
          "micro-interaction",
          "animation",
          "transition"
        ],
        "answer": "motion design",
        "explanation": "motion design is a key concept in UI/UX."
      },
      {
        "question": "Level 9 · How do you migrate from timing in UI/UX?",
        "options": [
          "timing",
          "micro-interaction",
          "animation",
          "transition"
        ],
        "answer": "timing",
        "explanation": "timing is a key concept in UI/UX."
      },
      {
        "question": "Level 9 · How does integrate with easing in UI/UX?",
        "options": [
          "easing",
          "micro-interaction",
          "animation",
          "transition"
        ],
        "answer": "easing",
        "explanation": "easing is a key concept in UI/UX."
      },
      {
        "question": "Level 9 · What architectural pattern uses feedback in UI/UX?",
        "options": [
          "feedback",
          "micro-interaction",
          "animation",
          "transition"
        ],
        "answer": "feedback",
        "explanation": "feedback is a key concept in UI/UX."
      },
      {
        "question": "Level 9 · How would you design a system with loading state in UI/UX?",
        "options": [
          "loading state",
          "micro-interaction",
          "animation",
          "transition"
        ],
        "answer": "loading state",
        "explanation": "loading state is a key concept in UI/UX."
      },
      {
        "question": "Level 9 · What dependency does have skeleton screen in UI/UX?",
        "options": [
          "skeleton screen",
          "micro-interaction",
          "animation",
          "transition"
        ],
        "answer": "skeleton screen",
        "explanation": "skeleton screen is a key concept in UI/UX."
      },
      {
        "question": "Level 9 · How do you migrate from optimistic UI in UI/UX?",
        "options": [
          "optimistic UI",
          "micro-interaction",
          "animation",
          "transition"
        ],
        "answer": "optimistic UI",
        "explanation": "optimistic UI is a key concept in UI/UX."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of design thinking in UI/UX?",
        "options": [
          "design thinking",
          "empathize",
          "define",
          "ideate"
        ],
        "answer": "design thinking",
        "explanation": "design thinking is a key concept in UI/UX."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of empathize in UI/UX?",
        "options": [
          "empathize",
          "design thinking",
          "define",
          "ideate"
        ],
        "answer": "empathize",
        "explanation": "empathize is a key concept in UI/UX."
      },
      {
        "question": "Level 10 · How does evolve across scales define in UI/UX?",
        "options": [
          "define",
          "design thinking",
          "empathize",
          "ideate"
        ],
        "answer": "define",
        "explanation": "define is a key concept in UI/UX."
      },
      {
        "question": "Level 10 · What is the future direction of ideate in UI/UX?",
        "options": [
          "ideate",
          "design thinking",
          "empathize",
          "define"
        ],
        "answer": "ideate",
        "explanation": "ideate is a key concept in UI/UX."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves prototype in UI/UX?",
        "options": [
          "prototype",
          "design thinking",
          "empathize",
          "define"
        ],
        "answer": "prototype",
        "explanation": "prototype is a key concept in UI/UX."
      },
      {
        "question": "Level 10 · What is the theoretical basis of test in UI/UX?",
        "options": [
          "test",
          "design thinking",
          "empathize",
          "define"
        ],
        "answer": "test",
        "explanation": "test is a key concept in UI/UX."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of double diamond in UI/UX?",
        "options": [
          "double diamond",
          "design thinking",
          "empathize",
          "define"
        ],
        "answer": "double diamond",
        "explanation": "double diamond is a key concept in UI/UX."
      },
      {
        "question": "Level 10 · How does evolve across scales lean UX in UI/UX?",
        "options": [
          "lean UX",
          "design thinking",
          "empathize",
          "define"
        ],
        "answer": "lean UX",
        "explanation": "lean UX is a key concept in UI/UX."
      },
      {
        "question": "Level 10 · What is the future direction of agile UX in UI/UX?",
        "options": [
          "agile UX",
          "design thinking",
          "empathize",
          "define"
        ],
        "answer": "agile UX",
        "explanation": "agile UX is a key concept in UI/UX."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves design sprint in UI/UX?",
        "options": [
          "design sprint",
          "design thinking",
          "empathize",
          "define"
        ],
        "answer": "design sprint",
        "explanation": "design sprint is a key concept in UI/UX."
      }
    ]
  },
  "Data": {
    "Level 1": [
      {
        "question": "Level 1 · What is SQL database in Data?",
        "options": [
          "SQL database",
          "table",
          "row",
          "column"
        ],
        "answer": "SQL database",
        "explanation": "SQL database is a key concept in Data."
      },
      {
        "question": "Level 1 · How would you define table in Data?",
        "options": [
          "table",
          "SQL database",
          "row",
          "column"
        ],
        "answer": "table",
        "explanation": "table is a key concept in Data."
      },
      {
        "question": "Level 1 · Which describes row in Data?",
        "options": [
          "row",
          "SQL database",
          "table",
          "column"
        ],
        "answer": "row",
        "explanation": "row is a key concept in Data."
      },
      {
        "question": "Level 1 · What does the term column in Data?",
        "options": [
          "column",
          "SQL database",
          "table",
          "row"
        ],
        "answer": "column",
        "explanation": "column is a key concept in Data."
      },
      {
        "question": "Level 1 · What concept is data type in Data?",
        "options": [
          "data type",
          "SQL database",
          "table",
          "row"
        ],
        "answer": "data type",
        "explanation": "data type is a key concept in Data."
      },
      {
        "question": "Level 1 · What is schema in Data?",
        "options": [
          "schema",
          "SQL database",
          "table",
          "row"
        ],
        "answer": "schema",
        "explanation": "schema is a key concept in Data."
      },
      {
        "question": "Level 1 · How would you define constraint in Data?",
        "options": [
          "constraint",
          "SQL database",
          "table",
          "row"
        ],
        "answer": "constraint",
        "explanation": "constraint is a key concept in Data."
      },
      {
        "question": "Level 1 · Which describes default value in Data?",
        "options": [
          "default value",
          "SQL database",
          "table",
          "row"
        ],
        "answer": "default value",
        "explanation": "default value is a key concept in Data."
      },
      {
        "question": "Level 1 · What does the term null in Data?",
        "options": [
          "null",
          "SQL database",
          "table",
          "row"
        ],
        "answer": "null",
        "explanation": "null is a key concept in Data."
      },
      {
        "question": "Level 1 · What concept is auto increment in Data?",
        "options": [
          "auto increment",
          "SQL database",
          "table",
          "row"
        ],
        "answer": "auto increment",
        "explanation": "auto increment is a key concept in Data."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you SELECT query in Data?",
        "options": [
          "SELECT query",
          "WHERE",
          "ORDER BY",
          "GROUP BY"
        ],
        "answer": "SELECT query",
        "explanation": "SELECT query is a key concept in Data."
      },
      {
        "question": "Level 2 · What is the purpose of WHERE in Data?",
        "options": [
          "WHERE",
          "SELECT query",
          "ORDER BY",
          "GROUP BY"
        ],
        "answer": "WHERE",
        "explanation": "WHERE is a key concept in Data."
      },
      {
        "question": "Level 2 · Which tool is used to ORDER BY in Data?",
        "options": [
          "ORDER BY",
          "SELECT query",
          "WHERE",
          "GROUP BY"
        ],
        "answer": "ORDER BY",
        "explanation": "ORDER BY is a key concept in Data."
      },
      {
        "question": "Level 2 · What does GROUP BY in Data?",
        "options": [
          "GROUP BY",
          "SELECT query",
          "WHERE",
          "ORDER BY"
        ],
        "answer": "GROUP BY",
        "explanation": "GROUP BY is a key concept in Data."
      },
      {
        "question": "Level 2 · How can you HAVING in Data?",
        "options": [
          "HAVING",
          "SELECT query",
          "WHERE",
          "ORDER BY"
        ],
        "answer": "HAVING",
        "explanation": "HAVING is a key concept in Data."
      },
      {
        "question": "Level 2 · How do you LIMIT in Data?",
        "options": [
          "LIMIT",
          "SELECT query",
          "WHERE",
          "ORDER BY"
        ],
        "answer": "LIMIT",
        "explanation": "LIMIT is a key concept in Data."
      },
      {
        "question": "Level 2 · What is the purpose of OFFSET in Data?",
        "options": [
          "OFFSET",
          "SELECT query",
          "WHERE",
          "ORDER BY"
        ],
        "answer": "OFFSET",
        "explanation": "OFFSET is a key concept in Data."
      },
      {
        "question": "Level 2 · Which tool is used to DISTINCT in Data?",
        "options": [
          "DISTINCT",
          "SELECT query",
          "WHERE",
          "ORDER BY"
        ],
        "answer": "DISTINCT",
        "explanation": "DISTINCT is a key concept in Data."
      },
      {
        "question": "Level 2 · What does AS alias in Data?",
        "options": [
          "AS alias",
          "SELECT query",
          "WHERE",
          "ORDER BY"
        ],
        "answer": "AS alias",
        "explanation": "AS alias is a key concept in Data."
      },
      {
        "question": "Level 2 · How can you wildcard in Data?",
        "options": [
          "wildcard",
          "SELECT query",
          "WHERE",
          "ORDER BY"
        ],
        "answer": "wildcard",
        "explanation": "wildcard is a key concept in Data."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between JOIN in Data?",
        "options": [
          "JOIN",
          "INNER JOIN",
          "LEFT JOIN",
          "RIGHT JOIN"
        ],
        "answer": "JOIN",
        "explanation": "JOIN is a key concept in Data."
      },
      {
        "question": "Level 3 · How does INNER JOIN in Data?",
        "options": [
          "INNER JOIN",
          "JOIN",
          "LEFT JOIN",
          "RIGHT JOIN"
        ],
        "answer": "INNER JOIN",
        "explanation": "INNER JOIN is a key concept in Data."
      },
      {
        "question": "Level 3 · What problem does LEFT JOIN in Data?",
        "options": [
          "LEFT JOIN",
          "JOIN",
          "INNER JOIN",
          "RIGHT JOIN"
        ],
        "answer": "LEFT JOIN",
        "explanation": "LEFT JOIN is a key concept in Data."
      },
      {
        "question": "Level 3 · Which approach RIGHT JOIN in Data?",
        "options": [
          "RIGHT JOIN",
          "JOIN",
          "INNER JOIN",
          "LEFT JOIN"
        ],
        "answer": "RIGHT JOIN",
        "explanation": "RIGHT JOIN is a key concept in Data."
      },
      {
        "question": "Level 3 · What is the role of FULL OUTER JOIN in Data?",
        "options": [
          "FULL OUTER JOIN",
          "JOIN",
          "INNER JOIN",
          "LEFT JOIN"
        ],
        "answer": "FULL OUTER JOIN",
        "explanation": "FULL OUTER JOIN is a key concept in Data."
      },
      {
        "question": "Level 3 · What is the difference between CROSS JOIN in Data?",
        "options": [
          "CROSS JOIN",
          "JOIN",
          "INNER JOIN",
          "LEFT JOIN"
        ],
        "answer": "CROSS JOIN",
        "explanation": "CROSS JOIN is a key concept in Data."
      },
      {
        "question": "Level 3 · How does SELF JOIN in Data?",
        "options": [
          "SELF JOIN",
          "JOIN",
          "INNER JOIN",
          "LEFT JOIN"
        ],
        "answer": "SELF JOIN",
        "explanation": "SELF JOIN is a key concept in Data."
      },
      {
        "question": "Level 3 · What problem does natural join in Data?",
        "options": [
          "natural join",
          "JOIN",
          "INNER JOIN",
          "LEFT JOIN"
        ],
        "answer": "natural join",
        "explanation": "natural join is a key concept in Data."
      },
      {
        "question": "Level 3 · Which approach join condition in Data?",
        "options": [
          "join condition",
          "JOIN",
          "INNER JOIN",
          "LEFT JOIN"
        ],
        "answer": "join condition",
        "explanation": "join condition is a key concept in Data."
      },
      {
        "question": "Level 3 · What is the role of multiple joins in Data?",
        "options": [
          "multiple joins",
          "JOIN",
          "INNER JOIN",
          "LEFT JOIN"
        ],
        "answer": "multiple joins",
        "explanation": "multiple joins is a key concept in Data."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use aggregation in Data?",
        "options": [
          "aggregation",
          "COUNT",
          "SUM",
          "AVG"
        ],
        "answer": "aggregation",
        "explanation": "aggregation is a key concept in Data."
      },
      {
        "question": "Level 4 · What is a real-world example of COUNT in Data?",
        "options": [
          "COUNT",
          "aggregation",
          "SUM",
          "AVG"
        ],
        "answer": "COUNT",
        "explanation": "COUNT is a key concept in Data."
      },
      {
        "question": "Level 4 · How would you implement SUM in Data?",
        "options": [
          "SUM",
          "aggregation",
          "COUNT",
          "AVG"
        ],
        "answer": "SUM",
        "explanation": "SUM is a key concept in Data."
      },
      {
        "question": "Level 4 · What pattern applies AVG in Data?",
        "options": [
          "AVG",
          "aggregation",
          "COUNT",
          "SUM"
        ],
        "answer": "AVG",
        "explanation": "AVG is a key concept in Data."
      },
      {
        "question": "Level 4 · What strategy handles MIN in Data?",
        "options": [
          "MIN",
          "aggregation",
          "COUNT",
          "SUM"
        ],
        "answer": "MIN",
        "explanation": "MIN is a key concept in Data."
      },
      {
        "question": "Level 4 · When would you use MAX in Data?",
        "options": [
          "MAX",
          "aggregation",
          "COUNT",
          "SUM"
        ],
        "answer": "MAX",
        "explanation": "MAX is a key concept in Data."
      },
      {
        "question": "Level 4 · What is a real-world example of GROUP BY in Data?",
        "options": [
          "GROUP BY",
          "aggregation",
          "COUNT",
          "SUM"
        ],
        "answer": "GROUP BY",
        "explanation": "GROUP BY is a key concept in Data."
      },
      {
        "question": "Level 4 · How would you implement HAVING clause in Data?",
        "options": [
          "HAVING clause",
          "aggregation",
          "COUNT",
          "SUM"
        ],
        "answer": "HAVING clause",
        "explanation": "HAVING clause is a key concept in Data."
      },
      {
        "question": "Level 4 · What pattern applies ROLLUP in Data?",
        "options": [
          "ROLLUP",
          "aggregation",
          "COUNT",
          "SUM"
        ],
        "answer": "ROLLUP",
        "explanation": "ROLLUP is a key concept in Data."
      },
      {
        "question": "Level 4 · What strategy handles CUBE in Data?",
        "options": [
          "CUBE",
          "aggregation",
          "COUNT",
          "SUM"
        ],
        "answer": "CUBE",
        "explanation": "CUBE is a key concept in Data."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize subquery in Data?",
        "options": [
          "subquery",
          "correlated subquery",
          "EXISTS",
          "IN"
        ],
        "answer": "subquery",
        "explanation": "subquery is a key concept in Data."
      },
      {
        "question": "Level 5 · What is the best practice for correlated subquery in Data?",
        "options": [
          "correlated subquery",
          "subquery",
          "EXISTS",
          "IN"
        ],
        "answer": "correlated subquery",
        "explanation": "correlated subquery is a key concept in Data."
      },
      {
        "question": "Level 5 · What performance consideration involves EXISTS in Data?",
        "options": [
          "EXISTS",
          "subquery",
          "correlated subquery",
          "IN"
        ],
        "answer": "EXISTS",
        "explanation": "EXISTS is a key concept in Data."
      },
      {
        "question": "Level 5 · How do you scale IN in Data?",
        "options": [
          "IN",
          "subquery",
          "correlated subquery",
          "EXISTS"
        ],
        "answer": "IN",
        "explanation": "IN is a key concept in Data."
      },
      {
        "question": "Level 5 · What tradeoff exists when using ANY in Data?",
        "options": [
          "ANY",
          "subquery",
          "correlated subquery",
          "EXISTS"
        ],
        "answer": "ANY",
        "explanation": "ANY is a key concept in Data."
      },
      {
        "question": "Level 5 · How do you optimize ALL in Data?",
        "options": [
          "ALL",
          "subquery",
          "correlated subquery",
          "EXISTS"
        ],
        "answer": "ALL",
        "explanation": "ALL is a key concept in Data."
      },
      {
        "question": "Level 5 · What is the best practice for CTE in Data?",
        "options": [
          "CTE",
          "subquery",
          "correlated subquery",
          "EXISTS"
        ],
        "answer": "CTE",
        "explanation": "CTE is a key concept in Data."
      },
      {
        "question": "Level 5 · What performance consideration involves recursive CTE in Data?",
        "options": [
          "recursive CTE",
          "subquery",
          "correlated subquery",
          "EXISTS"
        ],
        "answer": "recursive CTE",
        "explanation": "recursive CTE is a key concept in Data."
      },
      {
        "question": "Level 5 · How do you scale derived table in Data?",
        "options": [
          "derived table",
          "subquery",
          "correlated subquery",
          "EXISTS"
        ],
        "answer": "derived table",
        "explanation": "derived table is a key concept in Data."
      },
      {
        "question": "Level 5 · What tradeoff exists when using window function in Data?",
        "options": [
          "window function",
          "subquery",
          "correlated subquery",
          "EXISTS"
        ],
        "answer": "window function",
        "explanation": "window function is a key concept in Data."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare index in Data?",
        "options": [
          "index",
          "primary key",
          "foreign key",
          "unique constraint"
        ],
        "answer": "index",
        "explanation": "index is a key concept in Data."
      },
      {
        "question": "Level 6 · How is it different from primary key in Data?",
        "options": [
          "primary key",
          "index",
          "foreign key",
          "unique constraint"
        ],
        "answer": "primary key",
        "explanation": "primary key is a key concept in Data."
      },
      {
        "question": "Level 6 · What are the pros and cons of foreign key in Data?",
        "options": [
          "foreign key",
          "index",
          "primary key",
          "unique constraint"
        ],
        "answer": "foreign key",
        "explanation": "foreign key is a key concept in Data."
      },
      {
        "question": "Level 6 · What advantage does unique constraint in Data?",
        "options": [
          "unique constraint",
          "index",
          "primary key",
          "foreign key"
        ],
        "answer": "unique constraint",
        "explanation": "unique constraint is a key concept in Data."
      },
      {
        "question": "Level 6 · What limitation does composite index in Data?",
        "options": [
          "composite index",
          "index",
          "primary key",
          "foreign key"
        ],
        "answer": "composite index",
        "explanation": "composite index is a key concept in Data."
      },
      {
        "question": "Level 6 · Compare covering index in Data?",
        "options": [
          "covering index",
          "index",
          "primary key",
          "foreign key"
        ],
        "answer": "covering index",
        "explanation": "covering index is a key concept in Data."
      },
      {
        "question": "Level 6 · How is it different from B-tree index in Data?",
        "options": [
          "B-tree index",
          "index",
          "primary key",
          "foreign key"
        ],
        "answer": "B-tree index",
        "explanation": "B-tree index is a key concept in Data."
      },
      {
        "question": "Level 6 · What are the pros and cons of hash index in Data?",
        "options": [
          "hash index",
          "index",
          "primary key",
          "foreign key"
        ],
        "answer": "hash index",
        "explanation": "hash index is a key concept in Data."
      },
      {
        "question": "Level 6 · What advantage does full-text index in Data?",
        "options": [
          "full-text index",
          "index",
          "primary key",
          "foreign key"
        ],
        "answer": "full-text index",
        "explanation": "full-text index is a key concept in Data."
      },
      {
        "question": "Level 6 · What limitation does index performance in Data?",
        "options": [
          "index performance",
          "index",
          "primary key",
          "foreign key"
        ],
        "answer": "index performance",
        "explanation": "index performance is a key concept in Data."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with normalization in Data?",
        "options": [
          "normalization",
          "1NF",
          "2NF",
          "3NF"
        ],
        "answer": "normalization",
        "explanation": "normalization is a key concept in Data."
      },
      {
        "question": "Level 7 · What goes wrong when 1NF in Data?",
        "options": [
          "1NF",
          "normalization",
          "2NF",
          "3NF"
        ],
        "answer": "1NF",
        "explanation": "1NF is a key concept in Data."
      },
      {
        "question": "Level 7 · What common mistake involves 2NF in Data?",
        "options": [
          "2NF",
          "normalization",
          "1NF",
          "3NF"
        ],
        "answer": "2NF",
        "explanation": "2NF is a key concept in Data."
      },
      {
        "question": "Level 7 · How do you monitor 3NF in Data?",
        "options": [
          "3NF",
          "normalization",
          "1NF",
          "2NF"
        ],
        "answer": "3NF",
        "explanation": "3NF is a key concept in Data."
      },
      {
        "question": "Level 7 · What failure mode occurs with BCNF in Data?",
        "options": [
          "BCNF",
          "normalization",
          "1NF",
          "2NF"
        ],
        "answer": "BCNF",
        "explanation": "BCNF is a key concept in Data."
      },
      {
        "question": "Level 7 · How do you debug issues with denormalization in Data?",
        "options": [
          "denormalization",
          "normalization",
          "1NF",
          "2NF"
        ],
        "answer": "denormalization",
        "explanation": "denormalization is a key concept in Data."
      },
      {
        "question": "Level 7 · What goes wrong when functional dependency in Data?",
        "options": [
          "functional dependency",
          "normalization",
          "1NF",
          "2NF"
        ],
        "answer": "functional dependency",
        "explanation": "functional dependency is a key concept in Data."
      },
      {
        "question": "Level 7 · What common mistake involves candidate key in Data?",
        "options": [
          "candidate key",
          "normalization",
          "1NF",
          "2NF"
        ],
        "answer": "candidate key",
        "explanation": "candidate key is a key concept in Data."
      },
      {
        "question": "Level 7 · How do you monitor composite key in Data?",
        "options": [
          "composite key",
          "normalization",
          "1NF",
          "2NF"
        ],
        "answer": "composite key",
        "explanation": "composite key is a key concept in Data."
      },
      {
        "question": "Level 7 · What failure mode occurs with surrogate key in Data?",
        "options": [
          "surrogate key",
          "normalization",
          "1NF",
          "2NF"
        ],
        "answer": "surrogate key",
        "explanation": "surrogate key is a key concept in Data."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves NoSQL in Data?",
        "options": [
          "NoSQL",
          "document store",
          "key-value store",
          "wide-column"
        ],
        "answer": "NoSQL",
        "explanation": "NoSQL is a key concept in Data."
      },
      {
        "question": "Level 8 · How do you secure document store in Data?",
        "options": [
          "document store",
          "NoSQL",
          "key-value store",
          "wide-column"
        ],
        "answer": "document store",
        "explanation": "document store is a key concept in Data."
      },
      {
        "question": "Level 8 · What testing strategy covers key-value store in Data?",
        "options": [
          "key-value store",
          "NoSQL",
          "document store",
          "wide-column"
        ],
        "answer": "key-value store",
        "explanation": "key-value store is a key concept in Data."
      },
      {
        "question": "Level 8 · How do you ensure reliability of wide-column in Data?",
        "options": [
          "wide-column",
          "NoSQL",
          "document store",
          "key-value store"
        ],
        "answer": "wide-column",
        "explanation": "wide-column is a key concept in Data."
      },
      {
        "question": "Level 8 · What error handling applies to graph database in Data?",
        "options": [
          "graph database",
          "NoSQL",
          "document store",
          "key-value store"
        ],
        "answer": "graph database",
        "explanation": "graph database is a key concept in Data."
      },
      {
        "question": "Level 8 · What security concern involves MongoDB in Data?",
        "options": [
          "MongoDB",
          "NoSQL",
          "document store",
          "key-value store"
        ],
        "answer": "MongoDB",
        "explanation": "MongoDB is a key concept in Data."
      },
      {
        "question": "Level 8 · How do you secure Redis in Data?",
        "options": [
          "Redis",
          "NoSQL",
          "document store",
          "key-value store"
        ],
        "answer": "Redis",
        "explanation": "Redis is a key concept in Data."
      },
      {
        "question": "Level 8 · What testing strategy covers Cassandra in Data?",
        "options": [
          "Cassandra",
          "NoSQL",
          "document store",
          "key-value store"
        ],
        "answer": "Cassandra",
        "explanation": "Cassandra is a key concept in Data."
      },
      {
        "question": "Level 8 · How do you ensure reliability of Neo4j in Data?",
        "options": [
          "Neo4j",
          "NoSQL",
          "document store",
          "key-value store"
        ],
        "answer": "Neo4j",
        "explanation": "Neo4j is a key concept in Data."
      },
      {
        "question": "Level 8 · What error handling applies to eventual consistency in Data?",
        "options": [
          "eventual consistency",
          "NoSQL",
          "document store",
          "key-value store"
        ],
        "answer": "eventual consistency",
        "explanation": "eventual consistency is a key concept in Data."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with data pipeline in Data?",
        "options": [
          "data pipeline",
          "ETL",
          "ELT",
          "data warehouse"
        ],
        "answer": "data pipeline",
        "explanation": "data pipeline is a key concept in Data."
      },
      {
        "question": "Level 9 · What architectural pattern uses ETL in Data?",
        "options": [
          "ETL",
          "data pipeline",
          "ELT",
          "data warehouse"
        ],
        "answer": "ETL",
        "explanation": "ETL is a key concept in Data."
      },
      {
        "question": "Level 9 · How would you design a system with ELT in Data?",
        "options": [
          "ELT",
          "data pipeline",
          "ETL",
          "data warehouse"
        ],
        "answer": "ELT",
        "explanation": "ELT is a key concept in Data."
      },
      {
        "question": "Level 9 · What dependency does have data warehouse in Data?",
        "options": [
          "data warehouse",
          "data pipeline",
          "ETL",
          "ELT"
        ],
        "answer": "data warehouse",
        "explanation": "data warehouse is a key concept in Data."
      },
      {
        "question": "Level 9 · How do you migrate from data lake in Data?",
        "options": [
          "data lake",
          "data pipeline",
          "ETL",
          "ELT"
        ],
        "answer": "data lake",
        "explanation": "data lake is a key concept in Data."
      },
      {
        "question": "Level 9 · How does integrate with data mart in Data?",
        "options": [
          "data mart",
          "data pipeline",
          "ETL",
          "ELT"
        ],
        "answer": "data mart",
        "explanation": "data mart is a key concept in Data."
      },
      {
        "question": "Level 9 · What architectural pattern uses stream processing in Data?",
        "options": [
          "stream processing",
          "data pipeline",
          "ETL",
          "ELT"
        ],
        "answer": "stream processing",
        "explanation": "stream processing is a key concept in Data."
      },
      {
        "question": "Level 9 · How would you design a system with batch processing in Data?",
        "options": [
          "batch processing",
          "data pipeline",
          "ETL",
          "ELT"
        ],
        "answer": "batch processing",
        "explanation": "batch processing is a key concept in Data."
      },
      {
        "question": "Level 9 · What dependency does have Apache Spark in Data?",
        "options": [
          "Apache Spark",
          "data pipeline",
          "ETL",
          "ELT"
        ],
        "answer": "Apache Spark",
        "explanation": "Apache Spark is a key concept in Data."
      },
      {
        "question": "Level 9 · How do you migrate from Kafka in Data?",
        "options": [
          "Kafka",
          "data pipeline",
          "ETL",
          "ELT"
        ],
        "answer": "Kafka",
        "explanation": "Kafka is a key concept in Data."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of data analysis in Data?",
        "options": [
          "data analysis",
          "pandas",
          "NumPy",
          "matplotlib"
        ],
        "answer": "data analysis",
        "explanation": "data analysis is a key concept in Data."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of pandas in Data?",
        "options": [
          "pandas",
          "data analysis",
          "NumPy",
          "matplotlib"
        ],
        "answer": "pandas",
        "explanation": "pandas is a key concept in Data."
      },
      {
        "question": "Level 10 · How does evolve across scales NumPy in Data?",
        "options": [
          "NumPy",
          "data analysis",
          "pandas",
          "matplotlib"
        ],
        "answer": "NumPy",
        "explanation": "NumPy is a key concept in Data."
      },
      {
        "question": "Level 10 · What is the future direction of matplotlib in Data?",
        "options": [
          "matplotlib",
          "data analysis",
          "pandas",
          "NumPy"
        ],
        "answer": "matplotlib",
        "explanation": "matplotlib is a key concept in Data."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves statistics in Data?",
        "options": [
          "statistics",
          "data analysis",
          "pandas",
          "NumPy"
        ],
        "answer": "statistics",
        "explanation": "statistics is a key concept in Data."
      },
      {
        "question": "Level 10 · What is the theoretical basis of correlation in Data?",
        "options": [
          "correlation",
          "data analysis",
          "pandas",
          "NumPy"
        ],
        "answer": "correlation",
        "explanation": "correlation is a key concept in Data."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of regression in Data?",
        "options": [
          "regression",
          "data analysis",
          "pandas",
          "NumPy"
        ],
        "answer": "regression",
        "explanation": "regression is a key concept in Data."
      },
      {
        "question": "Level 10 · How does evolve across scales classification in Data?",
        "options": [
          "classification",
          "data analysis",
          "pandas",
          "NumPy"
        ],
        "answer": "classification",
        "explanation": "classification is a key concept in Data."
      },
      {
        "question": "Level 10 · What is the future direction of clustering in Data?",
        "options": [
          "clustering",
          "data analysis",
          "pandas",
          "NumPy"
        ],
        "answer": "clustering",
        "explanation": "clustering is a key concept in Data."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves hypothesis testing in Data?",
        "options": [
          "hypothesis testing",
          "data analysis",
          "pandas",
          "NumPy"
        ],
        "answer": "hypothesis testing",
        "explanation": "hypothesis testing is a key concept in Data."
      }
    ]
  },
  "Mobile": {
    "Level 1": [
      {
        "question": "Level 1 · What is React Native in Mobile?",
        "options": [
          "React Native",
          "native components",
          "bridge",
          "JavaScript thread"
        ],
        "answer": "React Native",
        "explanation": "React Native is a key concept in Mobile."
      },
      {
        "question": "Level 1 · How would you define native components in Mobile?",
        "options": [
          "native components",
          "React Native",
          "bridge",
          "JavaScript thread"
        ],
        "answer": "native components",
        "explanation": "native components is a key concept in Mobile."
      },
      {
        "question": "Level 1 · Which describes bridge in Mobile?",
        "options": [
          "bridge",
          "React Native",
          "native components",
          "JavaScript thread"
        ],
        "answer": "bridge",
        "explanation": "bridge is a key concept in Mobile."
      },
      {
        "question": "Level 1 · What does the term JavaScript thread in Mobile?",
        "options": [
          "JavaScript thread",
          "React Native",
          "native components",
          "bridge"
        ],
        "answer": "JavaScript thread",
        "explanation": "JavaScript thread is a key concept in Mobile."
      },
      {
        "question": "Level 1 · What concept is native thread in Mobile?",
        "options": [
          "native thread",
          "React Native",
          "native components",
          "bridge"
        ],
        "answer": "native thread",
        "explanation": "native thread is a key concept in Mobile."
      },
      {
        "question": "Level 1 · What is components in Mobile?",
        "options": [
          "components",
          "React Native",
          "native components",
          "bridge"
        ],
        "answer": "components",
        "explanation": "components is a key concept in Mobile."
      },
      {
        "question": "Level 1 · How would you define View in Mobile?",
        "options": [
          "View",
          "React Native",
          "native components",
          "bridge"
        ],
        "answer": "View",
        "explanation": "View is a key concept in Mobile."
      },
      {
        "question": "Level 1 · Which describes Text in Mobile?",
        "options": [
          "Text",
          "React Native",
          "native components",
          "bridge"
        ],
        "answer": "Text",
        "explanation": "Text is a key concept in Mobile."
      },
      {
        "question": "Level 1 · What does the term StyleSheet in Mobile?",
        "options": [
          "StyleSheet",
          "React Native",
          "native components",
          "bridge"
        ],
        "answer": "StyleSheet",
        "explanation": "StyleSheet is a key concept in Mobile."
      },
      {
        "question": "Level 1 · What concept is Flexbox in Mobile?",
        "options": [
          "Flexbox",
          "React Native",
          "native components",
          "bridge"
        ],
        "answer": "Flexbox",
        "explanation": "Flexbox is a key concept in Mobile."
      }
    ],
    "Level 2": [
      {
        "question": "Level 2 · How do you Flutter in Mobile?",
        "options": [
          "Flutter",
          "Dart language",
          "widget",
          "StatelessWidget"
        ],
        "answer": "Flutter",
        "explanation": "Flutter is a key concept in Mobile."
      },
      {
        "question": "Level 2 · What is the purpose of Dart language in Mobile?",
        "options": [
          "Dart language",
          "Flutter",
          "widget",
          "StatelessWidget"
        ],
        "answer": "Dart language",
        "explanation": "Dart language is a key concept in Mobile."
      },
      {
        "question": "Level 2 · Which tool is used to widget in Mobile?",
        "options": [
          "widget",
          "Flutter",
          "Dart language",
          "StatelessWidget"
        ],
        "answer": "widget",
        "explanation": "widget is a key concept in Mobile."
      },
      {
        "question": "Level 2 · What does StatelessWidget in Mobile?",
        "options": [
          "StatelessWidget",
          "Flutter",
          "Dart language",
          "widget"
        ],
        "answer": "StatelessWidget",
        "explanation": "StatelessWidget is a key concept in Mobile."
      },
      {
        "question": "Level 2 · How can you StatefulWidget in Mobile?",
        "options": [
          "StatefulWidget",
          "Flutter",
          "Dart language",
          "widget"
        ],
        "answer": "StatefulWidget",
        "explanation": "StatefulWidget is a key concept in Mobile."
      },
      {
        "question": "Level 2 · How do you BuildContext in Mobile?",
        "options": [
          "BuildContext",
          "Flutter",
          "Dart language",
          "widget"
        ],
        "answer": "BuildContext",
        "explanation": "BuildContext is a key concept in Mobile."
      },
      {
        "question": "Level 2 · What is the purpose of material design in Mobile?",
        "options": [
          "material design",
          "Flutter",
          "Dart language",
          "widget"
        ],
        "answer": "material design",
        "explanation": "material design is a key concept in Mobile."
      },
      {
        "question": "Level 2 · Which tool is used to Cupertino in Mobile?",
        "options": [
          "Cupertino",
          "Flutter",
          "Dart language",
          "widget"
        ],
        "answer": "Cupertino",
        "explanation": "Cupertino is a key concept in Mobile."
      },
      {
        "question": "Level 2 · What does Hot Reload in Mobile?",
        "options": [
          "Hot Reload",
          "Flutter",
          "Dart language",
          "widget"
        ],
        "answer": "Hot Reload",
        "explanation": "Hot Reload is a key concept in Mobile."
      },
      {
        "question": "Level 2 · How can you pubspec.yaml in Mobile?",
        "options": [
          "pubspec.yaml",
          "Flutter",
          "Dart language",
          "widget"
        ],
        "answer": "pubspec.yaml",
        "explanation": "pubspec.yaml is a key concept in Mobile."
      }
    ],
    "Level 3": [
      {
        "question": "Level 3 · What is the difference between Kotlin in Mobile?",
        "options": [
          "Kotlin",
          "Android Studio",
          "Jetpack Compose",
          "ViewModel"
        ],
        "answer": "Kotlin",
        "explanation": "Kotlin is a key concept in Mobile."
      },
      {
        "question": "Level 3 · How does Android Studio in Mobile?",
        "options": [
          "Android Studio",
          "Kotlin",
          "Jetpack Compose",
          "ViewModel"
        ],
        "answer": "Android Studio",
        "explanation": "Android Studio is a key concept in Mobile."
      },
      {
        "question": "Level 3 · What problem does Jetpack Compose in Mobile?",
        "options": [
          "Jetpack Compose",
          "Kotlin",
          "Android Studio",
          "ViewModel"
        ],
        "answer": "Jetpack Compose",
        "explanation": "Jetpack Compose is a key concept in Mobile."
      },
      {
        "question": "Level 3 · Which approach ViewModel in Mobile?",
        "options": [
          "ViewModel",
          "Kotlin",
          "Android Studio",
          "Jetpack Compose"
        ],
        "answer": "ViewModel",
        "explanation": "ViewModel is a key concept in Mobile."
      },
      {
        "question": "Level 3 · What is the role of LiveData in Mobile?",
        "options": [
          "LiveData",
          "Kotlin",
          "Android Studio",
          "Jetpack Compose"
        ],
        "answer": "LiveData",
        "explanation": "LiveData is a key concept in Mobile."
      },
      {
        "question": "Level 3 · What is the difference between coroutines in Mobile?",
        "options": [
          "coroutines",
          "Kotlin",
          "Android Studio",
          "Jetpack Compose"
        ],
        "answer": "coroutines",
        "explanation": "coroutines is a key concept in Mobile."
      },
      {
        "question": "Level 3 · How does flows in Mobile?",
        "options": [
          "flows",
          "Kotlin",
          "Android Studio",
          "Jetpack Compose"
        ],
        "answer": "flows",
        "explanation": "flows is a key concept in Mobile."
      },
      {
        "question": "Level 3 · What problem does Room database in Mobile?",
        "options": [
          "Room database",
          "Kotlin",
          "Android Studio",
          "Jetpack Compose"
        ],
        "answer": "Room database",
        "explanation": "Room database is a key concept in Mobile."
      },
      {
        "question": "Level 3 · Which approach navigation component in Mobile?",
        "options": [
          "navigation component",
          "Kotlin",
          "Android Studio",
          "Jetpack Compose"
        ],
        "answer": "navigation component",
        "explanation": "navigation component is a key concept in Mobile."
      },
      {
        "question": "Level 3 · What is the role of Hilt in Mobile?",
        "options": [
          "Hilt",
          "Kotlin",
          "Android Studio",
          "Jetpack Compose"
        ],
        "answer": "Hilt",
        "explanation": "Hilt is a key concept in Mobile."
      }
    ],
    "Level 4": [
      {
        "question": "Level 4 · When would you use Swift in Mobile?",
        "options": [
          "Swift",
          "Xcode",
          "SwiftUI",
          "View protocol"
        ],
        "answer": "Swift",
        "explanation": "Swift is a key concept in Mobile."
      },
      {
        "question": "Level 4 · What is a real-world example of Xcode in Mobile?",
        "options": [
          "Xcode",
          "Swift",
          "SwiftUI",
          "View protocol"
        ],
        "answer": "Xcode",
        "explanation": "Xcode is a key concept in Mobile."
      },
      {
        "question": "Level 4 · How would you implement SwiftUI in Mobile?",
        "options": [
          "SwiftUI",
          "Swift",
          "Xcode",
          "View protocol"
        ],
        "answer": "SwiftUI",
        "explanation": "SwiftUI is a key concept in Mobile."
      },
      {
        "question": "Level 4 · What pattern applies View protocol in Mobile?",
        "options": [
          "View protocol",
          "Swift",
          "Xcode",
          "SwiftUI"
        ],
        "answer": "View protocol",
        "explanation": "View protocol is a key concept in Mobile."
      },
      {
        "question": "Level 4 · What strategy handles @State in Mobile?",
        "options": [
          "@State",
          "Swift",
          "Xcode",
          "SwiftUI"
        ],
        "answer": "@State",
        "explanation": "@State is a key concept in Mobile."
      },
      {
        "question": "Level 4 · When would you use @Binding in Mobile?",
        "options": [
          "@Binding",
          "Swift",
          "Xcode",
          "SwiftUI"
        ],
        "answer": "@Binding",
        "explanation": "@Binding is a key concept in Mobile."
      },
      {
        "question": "Level 4 · What is a real-world example of @ObservedObject in Mobile?",
        "options": [
          "@ObservedObject",
          "Swift",
          "Xcode",
          "SwiftUI"
        ],
        "answer": "@ObservedObject",
        "explanation": "@ObservedObject is a key concept in Mobile."
      },
      {
        "question": "Level 4 · How would you implement @Environment in Mobile?",
        "options": [
          "@Environment",
          "Swift",
          "Xcode",
          "SwiftUI"
        ],
        "answer": "@Environment",
        "explanation": "@Environment is a key concept in Mobile."
      },
      {
        "question": "Level 4 · What pattern applies Combine framework in Mobile?",
        "options": [
          "Combine framework",
          "Swift",
          "Xcode",
          "SwiftUI"
        ],
        "answer": "Combine framework",
        "explanation": "Combine framework is a key concept in Mobile."
      },
      {
        "question": "Level 4 · What strategy handles async await in Mobile?",
        "options": [
          "async await",
          "Swift",
          "Xcode",
          "SwiftUI"
        ],
        "answer": "async await",
        "explanation": "async await is a key concept in Mobile."
      }
    ],
    "Level 5": [
      {
        "question": "Level 5 · How do you optimize iOS development in Mobile?",
        "options": [
          "iOS development",
          "AppDelegate",
          "SceneDelegate",
          "UIKit"
        ],
        "answer": "iOS development",
        "explanation": "iOS development is a key concept in Mobile."
      },
      {
        "question": "Level 5 · What is the best practice for AppDelegate in Mobile?",
        "options": [
          "AppDelegate",
          "iOS development",
          "SceneDelegate",
          "UIKit"
        ],
        "answer": "AppDelegate",
        "explanation": "AppDelegate is a key concept in Mobile."
      },
      {
        "question": "Level 5 · What performance consideration involves SceneDelegate in Mobile?",
        "options": [
          "SceneDelegate",
          "iOS development",
          "AppDelegate",
          "UIKit"
        ],
        "answer": "SceneDelegate",
        "explanation": "SceneDelegate is a key concept in Mobile."
      },
      {
        "question": "Level 5 · How do you scale UIKit in Mobile?",
        "options": [
          "UIKit",
          "iOS development",
          "AppDelegate",
          "SceneDelegate"
        ],
        "answer": "UIKit",
        "explanation": "UIKit is a key concept in Mobile."
      },
      {
        "question": "Level 5 · What tradeoff exists when using Auto Layout in Mobile?",
        "options": [
          "Auto Layout",
          "iOS development",
          "AppDelegate",
          "SceneDelegate"
        ],
        "answer": "Auto Layout",
        "explanation": "Auto Layout is a key concept in Mobile."
      },
      {
        "question": "Level 5 · How do you optimize storyboard in Mobile?",
        "options": [
          "storyboard",
          "iOS development",
          "AppDelegate",
          "SceneDelegate"
        ],
        "answer": "storyboard",
        "explanation": "storyboard is a key concept in Mobile."
      },
      {
        "question": "Level 5 · What is the best practice for XIB in Mobile?",
        "options": [
          "XIB",
          "iOS development",
          "AppDelegate",
          "SceneDelegate"
        ],
        "answer": "XIB",
        "explanation": "XIB is a key concept in Mobile."
      },
      {
        "question": "Level 5 · What performance consideration involves CocoaPods in Mobile?",
        "options": [
          "CocoaPods",
          "iOS development",
          "AppDelegate",
          "SceneDelegate"
        ],
        "answer": "CocoaPods",
        "explanation": "CocoaPods is a key concept in Mobile."
      },
      {
        "question": "Level 5 · How do you scale Swift Package Manager in Mobile?",
        "options": [
          "Swift Package Manager",
          "iOS development",
          "AppDelegate",
          "SceneDelegate"
        ],
        "answer": "Swift Package Manager",
        "explanation": "Swift Package Manager is a key concept in Mobile."
      },
      {
        "question": "Level 5 · What tradeoff exists when using App Store Connect in Mobile?",
        "options": [
          "App Store Connect",
          "iOS development",
          "AppDelegate",
          "SceneDelegate"
        ],
        "answer": "App Store Connect",
        "explanation": "App Store Connect is a key concept in Mobile."
      }
    ],
    "Level 6": [
      {
        "question": "Level 6 · Compare Android development in Mobile?",
        "options": [
          "Android development",
          "Activity",
          "Fragment",
          "Intent"
        ],
        "answer": "Android development",
        "explanation": "Android development is a key concept in Mobile."
      },
      {
        "question": "Level 6 · How is it different from Activity in Mobile?",
        "options": [
          "Activity",
          "Android development",
          "Fragment",
          "Intent"
        ],
        "answer": "Activity",
        "explanation": "Activity is a key concept in Mobile."
      },
      {
        "question": "Level 6 · What are the pros and cons of Fragment in Mobile?",
        "options": [
          "Fragment",
          "Android development",
          "Activity",
          "Intent"
        ],
        "answer": "Fragment",
        "explanation": "Fragment is a key concept in Mobile."
      },
      {
        "question": "Level 6 · What advantage does Intent in Mobile?",
        "options": [
          "Intent",
          "Android development",
          "Activity",
          "Fragment"
        ],
        "answer": "Intent",
        "explanation": "Intent is a key concept in Mobile."
      },
      {
        "question": "Level 6 · What limitation does Service in Mobile?",
        "options": [
          "Service",
          "Android development",
          "Activity",
          "Fragment"
        ],
        "answer": "Service",
        "explanation": "Service is a key concept in Mobile."
      },
      {
        "question": "Level 6 · Compare BroadcastReceiver in Mobile?",
        "options": [
          "BroadcastReceiver",
          "Android development",
          "Activity",
          "Fragment"
        ],
        "answer": "BroadcastReceiver",
        "explanation": "BroadcastReceiver is a key concept in Mobile."
      },
      {
        "question": "Level 6 · How is it different from ContentProvider in Mobile?",
        "options": [
          "ContentProvider",
          "Android development",
          "Activity",
          "Fragment"
        ],
        "answer": "ContentProvider",
        "explanation": "ContentProvider is a key concept in Mobile."
      },
      {
        "question": "Level 6 · What are the pros and cons of manifest file in Mobile?",
        "options": [
          "manifest file",
          "Android development",
          "Activity",
          "Fragment"
        ],
        "answer": "manifest file",
        "explanation": "manifest file is a key concept in Mobile."
      },
      {
        "question": "Level 6 · What advantage does APK in Mobile?",
        "options": [
          "APK",
          "Android development",
          "Activity",
          "Fragment"
        ],
        "answer": "APK",
        "explanation": "APK is a key concept in Mobile."
      },
      {
        "question": "Level 6 · What limitation does Gradle build in Mobile?",
        "options": [
          "Gradle build",
          "Android development",
          "Activity",
          "Fragment"
        ],
        "answer": "Gradle build",
        "explanation": "Gradle build is a key concept in Mobile."
      }
    ],
    "Level 7": [
      {
        "question": "Level 7 · How do you debug issues with mobile architecture in Mobile?",
        "options": [
          "mobile architecture",
          "MVVM",
          "MVI",
          "Clean Architecture"
        ],
        "answer": "mobile architecture",
        "explanation": "mobile architecture is a key concept in Mobile."
      },
      {
        "question": "Level 7 · What goes wrong when MVVM in Mobile?",
        "options": [
          "MVVM",
          "mobile architecture",
          "MVI",
          "Clean Architecture"
        ],
        "answer": "MVVM",
        "explanation": "MVVM is a key concept in Mobile."
      },
      {
        "question": "Level 7 · What common mistake involves MVI in Mobile?",
        "options": [
          "MVI",
          "mobile architecture",
          "MVVM",
          "Clean Architecture"
        ],
        "answer": "MVI",
        "explanation": "MVI is a key concept in Mobile."
      },
      {
        "question": "Level 7 · How do you monitor Clean Architecture in Mobile?",
        "options": [
          "Clean Architecture",
          "mobile architecture",
          "MVVM",
          "MVI"
        ],
        "answer": "Clean Architecture",
        "explanation": "Clean Architecture is a key concept in Mobile."
      },
      {
        "question": "Level 7 · What failure mode occurs with Repository pattern in Mobile?",
        "options": [
          "Repository pattern",
          "mobile architecture",
          "MVVM",
          "MVI"
        ],
        "answer": "Repository pattern",
        "explanation": "Repository pattern is a key concept in Mobile."
      },
      {
        "question": "Level 7 · How do you debug issues with Use Case in Mobile?",
        "options": [
          "Use Case",
          "mobile architecture",
          "MVVM",
          "MVI"
        ],
        "answer": "Use Case",
        "explanation": "Use Case is a key concept in Mobile."
      },
      {
        "question": "Level 7 · What goes wrong when dependency injection in Mobile?",
        "options": [
          "dependency injection",
          "mobile architecture",
          "MVVM",
          "MVI"
        ],
        "answer": "dependency injection",
        "explanation": "dependency injection is a key concept in Mobile."
      },
      {
        "question": "Level 7 · What common mistake involves BLoC pattern in Mobile?",
        "options": [
          "BLoC pattern",
          "mobile architecture",
          "MVVM",
          "MVI"
        ],
        "answer": "BLoC pattern",
        "explanation": "BLoC pattern is a key concept in Mobile."
      },
      {
        "question": "Level 7 · How do you monitor Provider in Mobile?",
        "options": [
          "Provider",
          "mobile architecture",
          "MVVM",
          "MVI"
        ],
        "answer": "Provider",
        "explanation": "Provider is a key concept in Mobile."
      },
      {
        "question": "Level 7 · What failure mode occurs with GetX in Mobile?",
        "options": [
          "GetX",
          "mobile architecture",
          "MVVM",
          "MVI"
        ],
        "answer": "GetX",
        "explanation": "GetX is a key concept in Mobile."
      }
    ],
    "Level 8": [
      {
        "question": "Level 8 · What security concern involves push notifications in Mobile?",
        "options": [
          "push notifications",
          "Firebase Cloud Messaging",
          "APNs",
          "notification payload"
        ],
        "answer": "push notifications",
        "explanation": "push notifications is a key concept in Mobile."
      },
      {
        "question": "Level 8 · How do you secure Firebase Cloud Messaging in Mobile?",
        "options": [
          "Firebase Cloud Messaging",
          "push notifications",
          "APNs",
          "notification payload"
        ],
        "answer": "Firebase Cloud Messaging",
        "explanation": "Firebase Cloud Messaging is a key concept in Mobile."
      },
      {
        "question": "Level 8 · What testing strategy covers APNs in Mobile?",
        "options": [
          "APNs",
          "push notifications",
          "Firebase Cloud Messaging",
          "notification payload"
        ],
        "answer": "APNs",
        "explanation": "APNs is a key concept in Mobile."
      },
      {
        "question": "Level 8 · How do you ensure reliability of notification payload in Mobile?",
        "options": [
          "notification payload",
          "push notifications",
          "Firebase Cloud Messaging",
          "APNs"
        ],
        "answer": "notification payload",
        "explanation": "notification payload is a key concept in Mobile."
      },
      {
        "question": "Level 8 · What error handling applies to foreground vs background in Mobile?",
        "options": [
          "foreground vs background",
          "push notifications",
          "Firebase Cloud Messaging",
          "APNs"
        ],
        "answer": "foreground vs background",
        "explanation": "foreground vs background is a key concept in Mobile."
      },
      {
        "question": "Level 8 · What security concern involves notification channels in Mobile?",
        "options": [
          "notification channels",
          "push notifications",
          "Firebase Cloud Messaging",
          "APNs"
        ],
        "answer": "notification channels",
        "explanation": "notification channels is a key concept in Mobile."
      },
      {
        "question": "Level 8 · How do you secure local notifications in Mobile?",
        "options": [
          "local notifications",
          "push notifications",
          "Firebase Cloud Messaging",
          "APNs"
        ],
        "answer": "local notifications",
        "explanation": "local notifications is a key concept in Mobile."
      },
      {
        "question": "Level 8 · What testing strategy covers deep linking in Mobile?",
        "options": [
          "deep linking",
          "push notifications",
          "Firebase Cloud Messaging",
          "APNs"
        ],
        "answer": "deep linking",
        "explanation": "deep linking is a key concept in Mobile."
      },
      {
        "question": "Level 8 · How do you ensure reliability of universal links in Mobile?",
        "options": [
          "universal links",
          "push notifications",
          "Firebase Cloud Messaging",
          "APNs"
        ],
        "answer": "universal links",
        "explanation": "universal links is a key concept in Mobile."
      },
      {
        "question": "Level 8 · What error handling applies to rich notifications in Mobile?",
        "options": [
          "rich notifications",
          "push notifications",
          "Firebase Cloud Messaging",
          "APNs"
        ],
        "answer": "rich notifications",
        "explanation": "rich notifications is a key concept in Mobile."
      }
    ],
    "Level 9": [
      {
        "question": "Level 9 · How does integrate with mobile testing in Mobile?",
        "options": [
          "mobile testing",
          "UI testing",
          "unit testing",
          "Espresso"
        ],
        "answer": "mobile testing",
        "explanation": "mobile testing is a key concept in Mobile."
      },
      {
        "question": "Level 9 · What architectural pattern uses UI testing in Mobile?",
        "options": [
          "UI testing",
          "mobile testing",
          "unit testing",
          "Espresso"
        ],
        "answer": "UI testing",
        "explanation": "UI testing is a key concept in Mobile."
      },
      {
        "question": "Level 9 · How would you design a system with unit testing in Mobile?",
        "options": [
          "unit testing",
          "mobile testing",
          "UI testing",
          "Espresso"
        ],
        "answer": "unit testing",
        "explanation": "unit testing is a key concept in Mobile."
      },
      {
        "question": "Level 9 · What dependency does have Espresso in Mobile?",
        "options": [
          "Espresso",
          "mobile testing",
          "UI testing",
          "unit testing"
        ],
        "answer": "Espresso",
        "explanation": "Espresso is a key concept in Mobile."
      },
      {
        "question": "Level 9 · How do you migrate from XCTest in Mobile?",
        "options": [
          "XCTest",
          "mobile testing",
          "UI testing",
          "unit testing"
        ],
        "answer": "XCTest",
        "explanation": "XCTest is a key concept in Mobile."
      },
      {
        "question": "Level 9 · How does integrate with Appium in Mobile?",
        "options": [
          "Appium",
          "mobile testing",
          "UI testing",
          "unit testing"
        ],
        "answer": "Appium",
        "explanation": "Appium is a key concept in Mobile."
      },
      {
        "question": "Level 9 · What architectural pattern uses Detox in Mobile?",
        "options": [
          "Detox",
          "mobile testing",
          "UI testing",
          "unit testing"
        ],
        "answer": "Detox",
        "explanation": "Detox is a key concept in Mobile."
      },
      {
        "question": "Level 9 · How would you design a system with test device in Mobile?",
        "options": [
          "test device",
          "mobile testing",
          "UI testing",
          "unit testing"
        ],
        "answer": "test device",
        "explanation": "test device is a key concept in Mobile."
      },
      {
        "question": "Level 9 · What dependency does have emulator in Mobile?",
        "options": [
          "emulator",
          "mobile testing",
          "UI testing",
          "unit testing"
        ],
        "answer": "emulator",
        "explanation": "emulator is a key concept in Mobile."
      },
      {
        "question": "Level 9 · How do you migrate from real device testing in Mobile?",
        "options": [
          "real device testing",
          "mobile testing",
          "UI testing",
          "unit testing"
        ],
        "answer": "real device testing",
        "explanation": "real device testing is a key concept in Mobile."
      }
    ],
    "Level 10": [
      {
        "question": "Level 10 · What is the theoretical basis of app deployment in Mobile?",
        "options": [
          "app deployment",
          "App Store",
          "Google Play",
          "TestFlight"
        ],
        "answer": "app deployment",
        "explanation": "app deployment is a key concept in Mobile."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of App Store in Mobile?",
        "options": [
          "App Store",
          "app deployment",
          "Google Play",
          "TestFlight"
        ],
        "answer": "App Store",
        "explanation": "App Store is a key concept in Mobile."
      },
      {
        "question": "Level 10 · How does evolve across scales Google Play in Mobile?",
        "options": [
          "Google Play",
          "app deployment",
          "App Store",
          "TestFlight"
        ],
        "answer": "Google Play",
        "explanation": "Google Play is a key concept in Mobile."
      },
      {
        "question": "Level 10 · What is the future direction of TestFlight in Mobile?",
        "options": [
          "TestFlight",
          "app deployment",
          "App Store",
          "Google Play"
        ],
        "answer": "TestFlight",
        "explanation": "TestFlight is a key concept in Mobile."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves beta testing in Mobile?",
        "options": [
          "beta testing",
          "app deployment",
          "App Store",
          "Google Play"
        ],
        "answer": "beta testing",
        "explanation": "beta testing is a key concept in Mobile."
      },
      {
        "question": "Level 10 · What is the theoretical basis of code signing in Mobile?",
        "options": [
          "code signing",
          "app deployment",
          "App Store",
          "Google Play"
        ],
        "answer": "code signing",
        "explanation": "code signing is a key concept in Mobile."
      },
      {
        "question": "Level 10 · What are the fundamental tradeoffs of app bundle in Mobile?",
        "options": [
          "app bundle",
          "app deployment",
          "App Store",
          "Google Play"
        ],
        "answer": "app bundle",
        "explanation": "app bundle is a key concept in Mobile."
      },
      {
        "question": "Level 10 · How does evolve across scales app thinning in Mobile?",
        "options": [
          "app thinning",
          "app deployment",
          "App Store",
          "Google Play"
        ],
        "answer": "app thinning",
        "explanation": "app thinning is a key concept in Mobile."
      },
      {
        "question": "Level 10 · What is the future direction of review process in Mobile?",
        "options": [
          "review process",
          "app deployment",
          "App Store",
          "Google Play"
        ],
        "answer": "review process",
        "explanation": "review process is a key concept in Mobile."
      },
      {
        "question": "Level 10 · What cutting-edge technique involves release management in Mobile?",
        "options": [
          "release management",
          "app deployment",
          "App Store",
          "Google Play"
        ],
        "answer": "release management",
        "explanation": "release management is a key concept in Mobile."
      }
    ]
  }
};

export function getQuestions(topic: string, level: number): Question[] {
  const t = questionBank[topic];
  if (!t) return questionBank["Frontend"]["Level 1"];
  return t[`Level ${level}`] || t["Level 1"];
}

export function getLevels(topic: string): string[] {
  return Object.keys(questionBank[topic] || questionBank["Frontend"]);
}
