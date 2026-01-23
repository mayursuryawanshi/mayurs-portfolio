/**
 * Global type definitions
 */

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Component props base types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Environment types
export interface EnvironmentConfig {
  VITE_BASE_URL: string;
  VITE_API_URL?: string;
  VITE_ENVIRONMENT: 'development' | 'production' | 'staging';
}