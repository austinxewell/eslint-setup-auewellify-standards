# eslint-setup-auewellify-standards

Automated CLI tool to scaffold a Nuxt 3 ESLint setup using Austin Ewell’s custom standards.

## 🔧 What it does

This CLI tool:

- Installs ESLint and `@nuxt/eslint`
- Adds a custom `.eslint.config.mjs` file with predefined rules
- Updates `.vscode/settings.json` for proper IDE integration (VS Code only)
- Adds `@nuxt/eslint` to your `nuxt.config.ts` modules array

All in a single command.

---

## ⚙️ Requirements

- Node.js v18+
- npm
- Git
- Works best on macOS/Linux  
  ⚠️ On **Windows**, use **WSL** or **Git Bash** (not PowerShell or cmd.exe)

---

## 🚀 Installation & Usage

### 1. Clone this repo

    git clone git@github.com:austinxewell/eslint-setup-auewellify-standards.git
    cd eslint-setup-auewellify-standards

### 2. Make the CLI executable

    chmod +x bin/index.js

### 3. Link the package globally

    npm link

This makes the CLI available globally as:

    eslint-setup-auewellify-standards

---

## 🛠️ Usage in a Nuxt 3 project

From the root of your Nuxt 3 project, run:

    eslint-setup-auewellify-standards

It will:

- Install necessary ESLint packages
- Create `.eslint.config.mjs` with your rules
- Patch `.vscode/settings.json` with ESLint config
- Modify `nuxt.config.ts` to include `@nuxt/eslint`

---

## 📁 Project Structure

    eslint-setup-auewellify-standards/
    ├── bin/
    │   └── index.js           # Entry CLI file
    ├── lib/                   # Modular logic
    │   ├── install.js
    │   ├── configFile.js
    │   ├── vscodeSettings.js
    │   └── updateNuxtConfig.js
    ├── utils/
    │   └── eslintRules.js     # ESLint rules export
    ├── package.json
    └── README.md

---

## 🧪 Test Locally (Without Linking)

Inside a Nuxt 3 project:

    node path/to/eslint-setup-auewellify-standards/bin/index.js

---

## 📝 Notes

- If `.vscode/settings.json` doesn’t exist, it gets created.
- If `nuxt.config.ts` doesn’t exist, the CLI throws an error and exits.
- If `.eslint.config.mjs` already exists, it will be overwritten.

---

## 🐛 Troubleshooting

### chmod not recognized

You're probably on Windows using PowerShell. Do either of the following:

1.  Use **Git Bash** or **WSL**
2.  Skip `chmod` and just make sure `bin/index.js` starts with:

        #!/usr/bin/env node

Then continue with:

    npm link

---

## 🤝 Contributing

Fork it. Improve it. PR it. Especially if you're expanding support or want to tweak the rule set.

---

## 📜 License

MIT
