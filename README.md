# MERN Starter CLI

The **MERN Starter CLI** is a command-line tool designed to quickly set up a full-stack MERN (MongoDB, Express, React, Node.js) application with **TypeScript** support. This CLI tool automates the setup process, allowing you to quickly clone the starter template, install dependencies, and start working on your MERN project.

## Features

- **Automatic Project Setup**: Clone a pre-configured MERN stack project from a Git repository.
- **TypeScript Support**: Pre-configured TypeScript support for both frontend (React) and backend (Express).
- **Package Manager Detection**: Automatically detects and uses your preferred package manager (`npm`, `yarn`, or `pnpm`).
- **File Cleanup**: Automatically removes default files like `LICENSE`, `README.md`, and `.github` to customize the project.
- **Cross-platform**: Works seamlessly on Windows, Mac, and Linux-based systems.

## Template

The MERN Starter template is hosted on GitHub. You can check out the repository here:

🔗 **[MERN Starter GitHub Repository](https://github.com/krisnachaitanya/mern-starter)**

## Installation

### Global Installation (Optional)

To install the CLI globally on your system, use the following command:

```bash
npm install -g @kcdev/mern
```

This will allow you to use the `kcmern` command anywhere in your terminal.

### Usage with `npx` (No Installation Required)

If you prefer not to install the CLI globally, you can run it directly using `npx`. This will execute the latest version of the CLI from the npm registry without installation:

```bash
npx @kcdev/mern
```

## Command Usage

### Running the CLI

To create a new project using the **MERN Starter** template, run:

```bash
kcmern <project-name>
```

#### Example:

```bash
kcmern my-new-mern-project
```

### Folder Breakdown

- **client/**: Contains the frontend application, built with React, Tailwind CSS, and TypeScript.
- **server/**: Contains the backend application, built with Express, Node.js, and TypeScript.
- **docker/**: Contains Docker-related files if applicable for containerization.

### Package Manager Detection

The CLI will automatically detect which package manager is installed on your system. It will attempt to use the following:

1. **npm**: The default package manager for Node.js.
2. **yarn**: A faster alternative to npm.
3. **pnpm**: A performant package manager.

Once the CLI detects your package manager, it will use it to install the necessary dependencies for both the frontend and backend.

## License

This project is licensed under the MIT License.

---

### How it works:

1. **Clone Project**: The CLI clones the **MERN Starter** template repository into a directory named after the project.
2. **Package Manager Detection**: It detects which package manager is available (`npm`, `yarn`, or `pnpm`) and uses it for installing dependencies.
3. **Install Dependencies**: The CLI installs the dependencies for both the client and server.
4. **Cleanup**: Removes default files like `LICENSE`, `README.md`, and `.github` that are not needed.
5. **Project Setup**: Displays a success message and tells you how to run the project.

---

By following the steps, you should be able to quickly get up and running with the **MERN Starter CLI** and start building your full-stack applications with MERN.