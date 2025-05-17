import fs from 'fs';
import path from 'path';
import { eslintRules } from '../utils/eslinitRules.js';

export function createEslintConfig() {
    const cwd = process.cwd();
    console.log('📝 Creating eslint.config.mjs...');
    fs.writeFileSync(path.join(cwd, 'eslint.config.mjs'), eslintRules);
    console.log('✅ ESLint config ready.');
}