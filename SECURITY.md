# Security Configuration

## Overview
This document outlines the security measures implemented in this application.

## Security Headers

Since this application uses static export (`output: 'export'`), HTTP headers cannot be configured in `next.config.ts`. Instead, security headers are implemented via:

1. **Meta tags in `layout.tsx`** - CSP and security headers for client-side protection
2. **Server-level configuration** - Should be configured on your hosting platform (GitHub Pages, Vercel, Netlify, etc.)

### Recommended Server Headers

Configure these headers on your hosting platform:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.githubstatus.com; frame-ancestors 'none';
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### GitHub Pages Configuration

For GitHub Pages, create a `_headers` file in the `public/` directory:

```
/*
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.githubstatus.com; frame-ancestors 'none';
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

Note: GitHub Pages has limited header support. For production, consider using Vercel or Netlify with full header control.

## Security Measures

### 1. Content Security Policy (CSP)
- **Inline scripts**: Only the theme initialization script uses inline JavaScript
- **External resources**: Limited to necessary domains only
- **Frame protection**: `frame-ancestors 'none'` prevents clickjacking

### 2. XSS Prevention
- All user-facing content uses React's built-in XSS protection
- No `dangerouslySetInnerHTML` except for the controlled theme script
- External API responses are not rendered as HTML

### 3. Data Handling
- **localStorage**: Only stores theme preference (light/dark)
- **No sensitive data**: No authentication tokens or personal data stored client-side
- **API calls**: Only fetches public status data from GitHub

### 4. Third-Party Dependencies
- Minimal dependencies to reduce attack surface
- All dependencies regularly updated
- No CDN-loaded scripts (all bundled)

### 5. GitHub Actions Security
- Manual approval required before deployment (see `.github/workflows/deploy.yml`)
- No secrets in workflow files
- Limited permissions (`contents: read`, `pages: write`, `id-token: write`)

## Security Best Practices

### Development
- ✅ No console.log statements in production code
- ✅ Error messages don't expose internal details
- ✅ No hardcoded secrets or API keys
- ✅ Environment-specific configurations

### Deployment
- ✅ Static export (no server-side vulnerabilities)
- ✅ HTTPS enforced (GitHub Pages default)
- ✅ Approval process for changes
- ✅ Automated security scanning via GitHub

## Vulnerability Reporting

If you discover a security vulnerability:
1. **Do NOT** create a public GitHub issue
2. Email security concerns to: [Add your email]
3. Include detailed reproduction steps
4. Allow reasonable time for response

## Regular Security Audits

- Dependency updates: Weekly
- Security review: Before each major release
- Third-party audit: Annually (recommended)

## CSP Inline Script Justification

The theme initialization script in `layout.tsx` uses `dangerouslySetInnerHTML` for the following reasons:

1. **Purpose**: Prevents flash of wrong theme on page load
2. **Security**: Contains no user input, only reads from localStorage
3. **Necessity**: Must run before React hydration
4. **Safety**: Wrapped in try-catch, limited scope
5. **Alternatives**: Would require flash of unstyled content or complex SSR

This is a standard pattern for theme management in React/Next.js applications.

## Status Page API Security

The status page fetches from `https://www.githubstatus.com/api/v2/status.json`:
- ✅ Public API, no authentication required
- ✅ Read-only operations
- ✅ No user data sent
- ✅ Error handling prevents false positives
- ✅ Whitelisted in CSP `connect-src`
- ✅ 5-second timeout implemented
- ✅ API response validation
- ✅ 5-minute caching to prevent rate limiting

## Dependency Security

### Production Dependencies
All production runtime dependencies are **secure with 0 vulnerabilities**.

```bash
npm audit --production
# found 0 vulnerabilities ✅
```

### Development Dependencies
Current status: **32 vulnerabilities (1 moderate, 31 high)** in development-only dependencies.

**Risk Assessment**: **LOW** - These vulnerabilities:
- Only affect development/build tools (ESLint, Jest)
- Do NOT impact production runtime code
- Require access to development environment to exploit
- Will be resolved when Next.js ecosystem updates

**Affected Packages**:
- `ajv` <8.18.0 - ReDoS vulnerability (used by ESLint)
- `minimatch` <10.2.1 - ReDoS vulnerability (used by ESLint, Jest)

**Mitigation Strategy**:
1. Production code remains secure (static export, no server-side attacks)
2. Development environments are trusted (not public-facing)
3. CI/CD pipeline is isolated and time-limited
4. Monitor for ecosystem updates monthly
5. Will update when eslint-config-next releases compatible versions

**For Immediate Production Deployment**: Safe to proceed, zero runtime risk.

---

**Last Updated**: 2026-02-20
**Version**: 1.1.0
