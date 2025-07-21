# Quick Setup Guide

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 20.x or higher
- npm or yarn

### 2. Setup
```bash
# Navigate to the project directory
cd astro-wiki

# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Access Your Wiki
- **Main Site**: http://localhost:4321
- **CMS Admin**: http://localhost:4321/admin/

## 📁 Content Structure

Your existing wiki content has been migrated to:
- `src/content/docs/general/` - General documentation
- `src/content/docs/association/` - Association content
- `src/content/docs/finance/` - Financial documentation
- `src/content/docs/devops/` - DevOps content
- `src/content/docs/tools/` - Tools documentation

## 🎛️ Using the CMS

1. Go to http://localhost:4321/admin/
2. Click "Login with Netlify Identity" (for production)
3. Select a collection (General, Association, etc.)
4. Create or edit content
5. Save and publish

## 🔧 Configuration

- **Site Settings**: Edit `astro.config.mjs`
- **CMS Settings**: Edit `public/admin/config.yml`
- **Content**: Add `.md` files to appropriate directories

## 📦 Deployment

### Netlify (Recommended)
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Configure environment variables for CMS

### Other Platforms
- Vercel, GitHub Pages, Cloudflare Pages, etc.

## 🆘 Troubleshooting

- **Port already in use**: Change port in `astro.config.mjs`
- **CMS not loading**: Check `public/admin/` files exist
- **Content not showing**: Verify frontmatter format in `.md` files

## 📚 Next Steps

1. Customize the site title and description
2. Add your organization's branding
3. Configure authentication for the CMS
4. Deploy to your preferred hosting platform 