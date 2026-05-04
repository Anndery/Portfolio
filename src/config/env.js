// Environment Configuration
// Access environment variables through this config file

export const config = {
  site: {
    title: import.meta.env.VITE_SITE_TITLE || 'Anndery Lopes - ML Engineer Portfolio',
    // url: import.meta.env.VITE_SITE_URL || 'https://Annderyphadkar24.github.io/',
  },

  contact: {
    email: import.meta.env.VITE_EMAIL || 'sensacional157@hotmail.com',
    linkedin: import.meta.env.VITE_LINKEDIN || 'https://www.linkedin.com/in/anndery-lopes-732864214/',
    // github: import.meta.env.VITE_GITHUB || '',
  },

  // Feature flags (can be added later)
  features: {
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  },
}

// Helper to check if we're in development mode
export const isDev = import.meta.env.DEV

// Helper to check if we're in production mode
export const isProd = import.meta.env.PROD
