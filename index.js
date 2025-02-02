#!/usr/bin/env node

const { execSync } = require("child_process");
const simpleGit = require("simple-git");
const path = require("path");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const runCommand = (command, cwd = process.cwd()) => {
    try {
        execSync(command, { stdio: "inherit", shell: true, cwd });
    } catch (error) {
        console.error(`❌ Error executing command: ${command}`, error);
        process.exit(1);
    }
};

// Auto-detect package manager
const detectPackageManager = () => {
    try {
        execSync("yarn --version", { stdio: "ignore" });
        return "yarn";
    } catch {
        try {
            execSync("pnpm --version", { stdio: "ignore" });
            return "pnpm";
        } catch {
            return "npm";
        }
    }
};

const setupProject = async (projectName) => {
    const git = simpleGit();
    const projectPath = path.join(process.cwd(), projectName);
    const repoUrl = "https://github.com/krisnachaitanya/mern-starter.git";

    // Check if the directory already exists and is not empty
    if (fs.existsSync(projectPath) && fs.readdirSync(projectPath).length > 0) {
        console.error(`❌ Error: The directory "${projectName}" already exists and is not empty.`);
        process.exit(1);
    }

    console.log(`📥 Initializing...`);
    await git.clone(repoUrl, projectName);

    if (!fs.existsSync(projectPath)) {
        console.error("❌ Clone failed. Exiting...");
        process.exit(1);
    }

    process.chdir(projectPath);

    // Detect package manager
    const packageManager = detectPackageManager();
    console.log(`📦 Detected package manager: ${packageManager}`);

    try {
        fs.unlinkSync("./LICENSE");
        fs.unlinkSync("./README.md");
        fs.rmSync("./.github", { recursive: true, force: true });
    } catch (error) {
        console.warn("⚠️ Warning: Could not delete some files:", error.message);
    }

    console.log(`📦 Installing dependencies...`);
    runCommand(`${packageManager} install`, path.join(projectPath, "client"));
    runCommand(`${packageManager} install`, path.join(projectPath, "server"));

    console.log(`🚀 Setup complete! Run the project using: cd ${projectName}`);
};

const getProjectName = () => {
    return new Promise((resolve) => {
        rl.question("📌 Enter project name: ", (name) => {
            rl.close();
            resolve(name.trim());
        });
    });
};

const main = async () => {
    const args = process.argv.slice(2);
    let projectName = args[0];

    if (!projectName) {
        projectName = await getProjectName();
    }

    if (!projectName) {
        console.log("❌ Error: Project name cannot be empty.");
        process.exit(1);
    }

    setupProject(projectName);
};

main();
