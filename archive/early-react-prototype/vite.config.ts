import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const cdnBase = env.VITE_CDN_BASE
  if (command === 'build' && !cdnBase && env.ALLOW_LOCAL_BUILD !== 'true') {
    throw new Error('Production builds require VITE_CDN_BASE; set ALLOW_LOCAL_BUILD=true only for local preview.')
  }
  const appName = env.VITE_APP_NAME || 'ai-intelligence-ledger-prototype'
  return {
    plugins: [react(), qiankun(appName, { useDevMode: command === 'serve' })],
    base: command === 'build' && cdnBase ? cdnBase : '/',
    build: { outDir: 'dist', assetsDir: 'assets', target: 'es2020' },
    server: { port: 5173 },
  }
})
