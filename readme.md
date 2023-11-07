# 👷 Redirect Worker

This Cloudflare Worker handles requests by redirecting specified paths to new destinations. It's designed to catch requests to old paths and redirect them to the new paths, while all other requests will result in the normal request being fullfilled.

## Deployment
The worker is deployed using Cloudflare's Wrangler CLI.

### Steps for deployment:

1. Install [Wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update), the command-line tool for managing Cloudflare Workers.
2. Configure Wrangler with your Cloudflare account details.
3. Run `wrangler dev` from the root of your project directory for local testing
3. Run `wrangler deploy` from the root of your project directory to deploy the worker to your Cloudflare account.

## Development

This project is written in JavaScript and is meant to run on Cloudflare Workers.

### Prerequisites:

- Node.js
- Wrangler CLI

## Files

- `src/index.js` - Main entry point
- `src/redirects.js` - JS object with the redirects

## Documentation

For more information and learning resources, refer to the following documentation:

- Cloudflare Workers: [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- Examples: [Cloudflare Workers Examples](https://developers.cloudflare.com/workers/examples)
- Wrangler CLI: [Wrangler on GitHub](https://github.com/cloudflare/wrangler)

## Developed By

Kevin - Creator and Maintainer of this Worker