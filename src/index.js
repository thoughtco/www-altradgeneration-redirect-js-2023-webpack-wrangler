/**
 * Cloudflare Worker that uses a JS object
 * to complete the redirects
 * 2023-11-07
**/

import redirectObj from './redirects';

// Status code as a global constant; we want to use 308 Permanent
const STATUS_CODE = 308;

// new website for /en-int
const NEW_EN_INT = `https://www.scaffolding-sales.com/`;

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

  // /en-int has been decommissioned; so any request requires to redirect to the new domain.
  if (pathname.startsWith(`/en-int`)) {
    return Response.redirect(new URL(NEW_EN_INT, request.url), STATUS_CODE); 
  }

  // Check of the pathname is within the mapping
  if (pathname in redirectObj) {
    // If it is, redirect to the new path
    return Response.redirect(new URL(redirectObj[pathname], request.url), STATUS_CODE); 
  }

  // Redirect has not happened, fetch and return original request.
  return fetch(request);
}