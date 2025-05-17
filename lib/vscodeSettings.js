import fs from 'fs';
import path from 'path';

const eslintSettings = {
    'eslint.useFlatConfig': true,
    'editor.codeActionsOnSave': {
        'source.fixAll.eslint': 'explicit'
    }
};

function deepMerge(target, source) {
    for (const key in source) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
            target[key] = deepMerge(target[key] || {}, source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

export function updateVscodeSettings() {
    const cwd = process.cwd();
    const vscodeDir = path.join(cwd, '.vscode');
    const settingsPath = path.join(vscodeDir, 'settings.json');

    if (!fs.existsSync(vscodeDir)) {
        fs.mkdirSync(vscodeDir);
    }

    let currentSettings = {};
    if (fs.existsSync(settingsPath)) {
        try {
            const raw = fs.readFileSync(settingsPath, 'utf8');
            currentSettings = JSON.parse(raw);
        } catch {
            console.error('❌ Failed to parse .vscode/settings.json');
            process.exit(1);
        }
    }

    const mergedSettings = deepMerge(currentSettings, eslintSettings);
    fs.writeFileSync(settingsPath, JSON.stringify(mergedSettings, null, 2));
    console.log('✅ VSCode settings updated.');
}