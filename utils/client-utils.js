// Utility function to check if code is running in browser
export const isBrowser = () => typeof window !== 'undefined';

// Safe way to access document
export const getDocument = () => {
  if (isBrowser()) {
    return document;
  }
  return null;
};

// Safe way to access window
export const getWindow = () => {
  if (isBrowser()) {
    return window;
  }
  return null;
};
