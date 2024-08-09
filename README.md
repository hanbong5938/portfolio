## hanbong Bae | Portfolio

### 🔗 Check out my [website](https://hanbong5938.github.io/portfolio/)

📚 **Project Stack**

The following items are core frontend technologies used in this project (2024):

- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Three.js**: A JavaScript 3D library that makes WebGL simpler.
- **React-Three-Fiber**: A React renderer for Three.js.
- **React-Spring/Three**: A spring-physics-based animation library.
- **React-Router-Dom**: A collection of navigational components for React.
- **i18next**: An internationalization framework.
- **eslint/prettier**: Linting and code formatting tools to maintain code quality.
- **Husky**: A tool for managing Git hooks, enabling pre-commit checks to enforce code quality.


---

🏗 **Project Architecture**

```
 +- Build  -+        +--  CI  --+             +----  CD  ----+
|           |        |          |             |              |
|   Vite    |  push  |  Github  |  deploy     | Github Pages |
|  React    |  --->  |  Action  |   ---->     |              |
| TypeScript|        |          |             |              |
+-----------+        +----------+             +--------------+
```
