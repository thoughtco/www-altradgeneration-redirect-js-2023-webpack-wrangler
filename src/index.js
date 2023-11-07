/**
 * Cloudflare Worker that uses a JS object
 * to complete the redirects
 * 2023-11-07
**/

import redirectObj from './redirects';

// Status code as a global constant; we want to use 308 Permanent
const STATUS_CODE = 308;

// Initial eventlistener
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
});

/**
 * Processes a request and performs a redirect if the request's pathname is found in the redirect mapping object.
 * If no redirect is necessary, it fetches and returns the original request.
 *
 * @param {Request} request - The incoming request object to be handled.
 * @returns {Promise<Response>} A promise that resolves to the Response object, which is either a redirect response
 * if the pathname matches a key in the redirect mapping, or the original response fetched from the server.
 */
const handleRequest = async (request) => {
  const url = new URL(request.url);
  const pathname = url.pathname; // Get the pathname of the request

  // Check of the pathname is within the mapping
  if (pathname in redirectObj) {
    // If it is, redirect to the new path
    return Response.redirect(new URL(redirectObj[pathname], request.url), STATUS_CODE); // You can use 301 for permanent redirects
  }

  // Redirect has not happened, fetch and return original request.
  return fetch(request);
}