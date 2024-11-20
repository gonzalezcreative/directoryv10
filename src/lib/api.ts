export async function fetchApi(endpoint: string, options: RequestInit = {}) {
  const baseUrl = import.meta.env.DEV 
    ? 'http://localhost:8888/.netlify/functions'
    : '/.netlify/functions';

  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'API request failed');
  }

  return response.json();
}