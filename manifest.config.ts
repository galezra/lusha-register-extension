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
  name: 'The easiest way to register lusha.com',
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
    },
  },
  background: {
    service_worker: 'src/utils/background.ts',
    type: 'module',
  },
  permissions: ['tabs', 'activeTab', 'storage'],
  content_scripts: [
    {
      matches: ['https://auth-local.lusha.com/*', 'https://auth-staging.lusha.com/*', 'https://auth.lusha.com/*'],
      js: ['src/utils/content-script.ts'],
      run_at: 'document_start',
    },
  ],
}));
