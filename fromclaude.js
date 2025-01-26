[build]
  publish = "dist"  # Ensure this is correctly set
  command = "npm run build"

[build.environment]
  NODE_VERSION = "16"
  NETLIFY_BUILD_DEBUG = "true"  # Enable detailed build logging

[[plugins]]
  package = "netlify-plugin-cache-nextjs"
