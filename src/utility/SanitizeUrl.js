export const sanitizeUrl = (url) => {
  // Remove any unwanted characters or perform any necessary sanitization logic
  // For example, you can use regular expressions to remove any invalid characters or check if the URL is valid
  // You can also use built-in JavaScript functions like `encodeURIComponent` to encode the URL

  // Here's a simple example that removes any leading or trailing whitespace from the URL
  const sanitizedUrl = url.trim();

  return sanitizedUrl;
};
