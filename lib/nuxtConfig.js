import fs from 'fs';
import path from 'path';

export function updateNuxtConfig() {
    const cwd = process.cwd();
    const configPath = path.join(cwd, 'nuxt.config.ts');
    const ESLINT_MODULE = `'@nuxt/eslint'`;

    if (!fs.existsSync(configPath)) {
        console.error('❌ Could not find nuxt.config.ts');
        process.exit(1);
    }

    let configText = fs.readFileSync(configPath, 'utf-8');

    if (configText.includes(ESLINT_MODULE)) {
        console.log('✅ @nuxt/eslint already included in modules.');
    } else if (configText.includes('modules:')) {
        configText = configText.replace(
        /modules\s*:\s*\[([^\]]*)\]/,
        (match, modulesInner) => {
            const cleaned = modulesInner.trim();
            const needsComma = cleaned && !cleaned.endsWith(',') ? ',' : '';
            return `modules: [${cleaned}${needsComma} ${ESLINT_MODULE}]`;
        }
    );
    console.log('🔧 Added @nuxt/eslint to existing modules array.');
    } else {
        configText = configText.replace(
            /export\s+default\s+defineNuxtConfig\s*\(\s*\{/,
            match => `${match}\n  modules: [${ESLINT_MODULE}],`
        );
        console.log('🆕 Created modules array with @nuxt/eslint.');
    }

    fs.writeFileSync(configPath, configText, 'utf-8');
    console.log('✅ nuxt.config.ts updated.');
}