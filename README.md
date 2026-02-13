# Vyomak Web

A personal website featuring a technology blog and portfolio, built with Next.js and hosted on GitHub Pages.

## Features

- **Technology Blog**: Share insights on cloud computing, web development, and tech solutions
- **Personal Portfolio**: Showcase your work and experience
- **Static Site**: Optimized for fast loading and SEO
- **Responsive Design**: Works on all devices

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Steps:

1. **Push to GitHub**: Commit and push your changes to the `main` branch.

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

3. **Configure Custom Domain** (vyomak.com):
   - In repository settings > Pages, enter `vyomak.com` as custom domain
   - The CNAME file is already configured

4. **Update GoDaddy DNS**:
   - Add these A records for vyomak.com:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Optionally, add CNAME for www.vyomak.com pointing to `venkigms3.github.io`

5. **Automatic Deployment**: Any push to `main` will trigger a build and deploy via GitHub Actions.

## Adding Blog Posts

1. Create a new folder in `src/app/blog/` with your post slug
2. Add a `page.tsx` file with your content
3. Update the blog index in `src/app/blog/page.tsx` to include the new post

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD

## Customization

- Update the content in `src/app/page.tsx` for the home page
- Modify `src/components/Header.tsx` for navigation
- Change colors and styles using Tailwind classes
- Add more sections or pages as needed
