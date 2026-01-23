/**
 * Environment configuration validation and access
 */

interface EnvironmentVariables {
  VITE_BASE_URL: string;
  VITE_APP_TITLE: string;
  VITE_APP_DESCRIPTION: string;
  VITE_APP_AUTHOR: string;
  VITE_DEFAULT_THEME: string;
  VITE_THEME_STORAGE_KEY: string;
  VITE_DEV_PORT?: string;
  VITE_GITHUB_URL?: string;
  VITE_LINKEDIN_URL?: string;
  VITE_TWITTER_URL?: string;
  VITE_EMAIL?: string;
  VITE_GA_TRACKING_ID?: string;
  VITE_HOTJAR_ID?: string;
  VITE_CONTACT_FORM_ENDPOINT?: string;
  VITE_EMAILJS_SERVICE_ID?: string;
  VITE_EMAILJS_TEMPLATE_ID?: string;
  VITE_EMAILJS_PUBLIC_KEY?: string;
}

/**
 * Get environment variable with type safety
 */
function getEnvVar<T extends keyof EnvironmentVariables>(
  key: T,
  defaultValue?: EnvironmentVariables[T]
): EnvironmentVariables[T] {
  const value = import.meta.env[key];
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is required but not defined`);
  }
  return value as EnvironmentVariables[T];
}

/**
 * Environment configuration object
 */
export const env = {
  // Required variables
  BASE_URL: getEnvVar('VITE_BASE_URL', '/'),
  APP_TITLE: getEnvVar('VITE_APP_TITLE', 'Mayur Suryawanshi - Portfolio'),
  APP_DESCRIPTION: getEnvVar('VITE_APP_DESCRIPTION', 'Modern portfolio website built with React and TypeScript'),
  APP_AUTHOR: getEnvVar('VITE_APP_AUTHOR', 'Mayur Suryawanshi'),
  DEFAULT_THEME: getEnvVar('VITE_DEFAULT_THEME', 'light'),
  THEME_STORAGE_KEY: getEnvVar('VITE_THEME_STORAGE_KEY', 'portfolio-theme'),

  // Optional variables
  DEV_PORT: import.meta.env.VITE_DEV_PORT,
  GITHUB_URL: import.meta.env.VITE_GITHUB_URL,
  LINKEDIN_URL: import.meta.env.VITE_LINKEDIN_URL,
  TWITTER_URL: import.meta.env.VITE_TWITTER_URL,
  EMAIL: import.meta.env.VITE_EMAIL,
  GA_TRACKING_ID: import.meta.env.VITE_GA_TRACKING_ID,
  HOTJAR_ID: import.meta.env.VITE_HOTJAR_ID,
  CONTACT_FORM_ENDPOINT: import.meta.env.VITE_CONTACT_FORM_ENDPOINT,
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
} as const;

/**
 * Check if running in development mode
 */
export const isDevelopment = import.meta.env.DEV;

/**
 * Check if running in production mode
 */
export const isProduction = import.meta.env.PROD;

/**
 * Current environment name
 */
export const environment = isProduction ? 'production' : 'development';