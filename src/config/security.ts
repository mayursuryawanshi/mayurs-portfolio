/**
 * Security configuration for production
 */

// Content Security Policy
export const CSP_HEADERS = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.unsplash.com https://*.githubusercontent.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://*.unsplash.com https://api.github.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join('; '),
};

// Security headers
export const SECURITY_HEADERS = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': [
    'camera=()',
    'microphone=()',
    'geolocation=()',
    'payment=()',
  ].join(', '),
};

// Development vs Production headers
export const getSecurityHeaders = () => {
  const headers: Record<string, string> = {
    ...SECURITY_HEADERS,
  };

  // Add CSP only in production
  if (import.meta.env.PROD) {
    headers['Content-Security-Policy'] = CSP_HEADERS['Content-Security-Policy'];
  }

  return headers;
};

// Trusted domains for external resources
export const TRUSTED_DOMAINS = {
  images: [
    'images.unsplash.com',
    'avatars.githubusercontent.com',
    'githubusercontent.com',
  ],
  fonts: [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
  ],
  analytics: [
    // Add analytics domains here when implemented
  ],
} as const;