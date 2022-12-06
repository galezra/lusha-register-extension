import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.config';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), crx({ manifest }), VitePWA({ registerType: 'autoUpdate' })],
});
