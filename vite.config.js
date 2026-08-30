import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import pkg from "./package.json"

export default defineConfig(({ mode }) => {
  // Load all env variables from .env, .env.local, .env.[mode], and importantly .env.version
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    server: {
      port: 3000,
      host: true,
      open: true,
    },
    define: {
      // Make VITE_APP_VERSION available in your client-side code as import.meta.env.VITE_APP_VERSION
      "process.env": env,
      __APP_VERSION__: JSON.stringify(pkg.version),
    },
    base: "/iSeeU-InstagramTracker/", // <-- set this if deploying on GitHub Pages
  }
})
