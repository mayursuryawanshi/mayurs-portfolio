/**
 * Application constants and configuration
 */

import { env } from './env';

// App metadata
export const APP_CONFIG = {
  name: env.APP_TITLE,
  description: env.APP_DESCRIPTION,
  version: '1.0.0',
  author: env.APP_AUTHOR,
} as const;

// Theme configuration
export const THEME_CONFIG = {
  default: env.DEFAULT_THEME,
  storageKey: env.THEME_STORAGE_KEY,
} as const;

// Animation configuration
export const ANIMATION_CONFIG = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;