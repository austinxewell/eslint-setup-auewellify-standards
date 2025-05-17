import { execSync } from 'child_process';

export function installPackages() {
    const packages = ['@nuxt/eslint', 'eslint'];

    console.log('📦 Installing ESLint + Nuxt rules...');
    execSync(`npm install -D ${packages.join(' ')}`, { stdio: 'inherit' });
}