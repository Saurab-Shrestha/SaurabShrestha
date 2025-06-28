export const appConfig = {
  // App Information
  title: 'Saurab Shrestha Portfolio',
  description: 'Personal portfolio showcasing skills and projects',
  version: '1.0.0',
  
  // Development Settings
  dev: {
    port: 3000,
    previewPort: 4173,
    host: true,
    open: true,
  },
  
  // Build Settings
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
  },
  
  // Social Media Links
  social: {
    linkedin: 'https://linkedin.com/in/your-profile',
    github: 'https://github.com/your-username',
    twitter: 'https://twitter.com/your-handle',
  },
  
  // Contact Information
  contact: {
    email: 'your-email@example.com',
    phone: '+1-234-567-8900',
  },
  
  // Analytics (for future use)
  analytics: {
    googleAnalytics: '',
    hotjar: '',
  },
  
  // API Configuration (for future use)
  api: {
    baseUrl: 'http://localhost:3000/api',
    timeout: 10000,
  },
} as const;

export type AppConfig = typeof appConfig; 