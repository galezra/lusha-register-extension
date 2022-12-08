import { defineManifest } from '@crxjs/vite-plugin';
import packageJson from './package.json';
const { version } = packageJson;

// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch, label = '0'] = version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, '')
  // split into version parts
  .split(/[.-]/);

export default defineManifest(async () => ({
  manifest_version: 3,
  name: 'Simple tool to register lusha.com',
  version: `${major}.${minor}.${patch}.${label}`,
  version_name: version,
  icons: {
    '16': 'logo16.png',
    '48': 'logo48.png',
    '128': 'logo128.png',
  },
  action: {
    default_popup: 'index.html',
    default_icon: {
      '16': 'logo16.png',
      '48': 'logo48.png',
      '128': 'logo128.png',
    },
  },
  background: {
    service_worker: 'src/utils/background.ts',
    type: 'module',
  },
  permissions: ['runtime', 'tabs', 'activeTab', 'storage'],
  content_scripts: [
    {
      matches: ['http://*.lusha.com/signup*', 'https://*.lusha.com/signup*'],
      js: ['src/utils/content.ts'],
      run_at: 'document_start',
    },
  ],
}));
