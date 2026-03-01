import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        about: resolve(process.cwd(), 'about.html'),
        services: resolve(process.cwd(), 'services.html'),
        pricing: resolve(process.cwd(), 'pricing.html'),
        howItWorks: resolve(process.cwd(), 'how-it-works.html'),
        faq: resolve(process.cwd(), 'faq.html'),
        contact: resolve(process.cwd(), 'contact.html')
      }
    }
  }
})
