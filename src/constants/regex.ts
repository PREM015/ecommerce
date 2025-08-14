// regex.ts
// src/constants/regex.ts

/**
 * Commonly used Regular Expressions for validation
 */

export const REGEX = {
  // Matches most standard email formats
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  // Password: Minimum 8 chars, at least 1 letter, 1 number, and 1 special character
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,

  // Phone: Matches 10-15 digit numbers (can start with +)
  PHONE: /^\+?[1-9]\d{9,14}$/,

  // Username: Letters, numbers, underscores, and dots. 3-20 characters
  USERNAME: /^[a-zA-Z0-9._]{3,20}$/,

  // Price: Positive decimal with up to 2 decimal places
  PRICE: /^\d+(\.\d{1,2})?$/,

  // Slug: Lowercase letters, numbers, and hyphens
  SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
};

export default REGEX;
