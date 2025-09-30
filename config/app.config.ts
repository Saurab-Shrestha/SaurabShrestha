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
    linkedin: 'https://www.linkedin.com/in/saurab-shrestha-092090182/',
    github: 'https://github.com/Saurab-Shrestha',
  },
  
  // Contact Information
  contact: {
    email: 'shresthasaurab030@gmail.com',
    phone: '+977-9823590047',
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