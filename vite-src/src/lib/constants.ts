// Social Media & Contact URLs
export const SOCIAL_URLS = {
  LINKEDIN: 'https://www.linkedin.com/in/jonathanclarkin',
  GITHUB: '', // TODO: Add GitHub URL when available
  TWITTER: '', // TODO: Add Twitter URL when available
} as const;

// Profile & Avatar URLs
export const PROFILE_URLS = {
  EMAIL: 'j.r.clarkin@gmail.com',
  // Gravatar URL uses MD5 hash of email address for privacy
  GRAVATAR: 'https://www.gravatar.com/avatar/3a34d2b629afdd07f0a84ad333688d8d?d=identicon&s=64',
  AVATAR: '', // TODO: Add custom avatar URL when available
} as const;

// Site Configuration
export const SITE_CONFIG = {
  NAME: 'Jonathan Clarkin',
  DESCRIPTION: 'Software Engineer & Testing Professional',
  URL: 'https://jrclarkin.com',
} as const;

// Utility function to generate Gravatar URL
export const getGravatarUrl = (email: string, size: number = 64): string => {
  // Note: In a real implementation, you'd want to hash the email on the server side
  // For now, we're using the pre-computed hash for j.r.clarkin@gmail.com
  const emailHash = '3a34d2b629afdd07f0a84ad333688d8d';
  return `https://www.gravatar.com/avatar/${emailHash}?d=identicon&s=${size}`;
}; 