# Pixware Studios Website

Pixware Studios' static Turkish-language website, published at [pixwarestudios.com](https://pixwarestudios.com) with Cloudflare Pages. For a local preview, run `node preview.mjs` and open `http://127.0.0.1:8765/`. The Cloudflare Pages project builds from the `main` branch; no build command is required and the output directory is the repository root.

## Content

The games page features six published Pixware games and links each one to its official itch.io page. Cover images were downloaded from the Pixware itch.io profile for this site. The launcher is still presented as a work in progress.

Site content is managed through repository changes. No browser-side admin panel is included.

## Error handling

`404.html` returns a useful not-found page for unknown URLs instead of the Pages single-page-app fallback. Its asset and navigation URLs are absolute so it also works for nested paths. `_redirects` sends legacy `/favicon.ico` requests to the existing PNG logo.

Cloudflare Email Address Obfuscation is disabled for this zone: its generated `/cdn-cgi/l/email-protection` links were returning 404. Email links use the `mailto:` addresses in the source HTML. Both custom domains use active Pages certificates with Full (strict) SSL.
