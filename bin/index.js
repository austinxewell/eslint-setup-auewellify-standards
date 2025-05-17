#!/usr/bin/env node

import { installPackages } from '../lib/install.js';
import { createEslintConfig } from '../lib/eslintConfig.js';
import { updateVscodeSettings } from '../lib/vscodeSettings.js';
import { updateNuxtConfig } from '../lib/nuxtConfig.js';

installPackages();
createEslintConfig();
updateVscodeSettings();
updateNuxtConfig();