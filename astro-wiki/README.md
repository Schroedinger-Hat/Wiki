# Schrödinger Hat Wiki - Astro Starlight Documentation Site

A modern documentation site built with Astro Starlight and Decap CMS for the Schrödinger Hat community. This wiki serves as the central knowledge base for our non-profit organization dedicated to making open source truly open.

## Features

- 📚 **Starlight Documentation Theme** - Clean, fast, and accessible documentation site
- 🎛️ **Decap CMS Integration** - Web-based content management system
- 🎨 **Schrödinger Hat Branding** - Custom styling matching our community identity
- 📱 **Responsive Design** - Works on all devices
- 🔍 **Search Functionality** - Built-in search across all content
- 🏷️ **Tagging System** - Organize content with tags
- 📝 **Markdown Support** - Write content in Markdown with frontmatter
- ⚡ **Fast Performance** - Static site generation with Astro

## Tech Stack

- **Node.js 20** - Runtime environment
- **Astro** - Static site generator
- **Starlight** - Documentation theme for Astro
- **Decap CMS** - Content management system
- **Markdown** - Content format

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd astro-wiki
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## Content Management

### Using the CMS

1. Navigate to `/admin/` in your browser
2. Click "Login with Netlify Identity" (for production) or use local backend
3. Select a collection (General, Association, Finance, DevOps, Tools)
4. Create new content or edit existing content
5. Save and publish your changes

### Manual Content Creation

Content is stored in `src/content/docs/` organized by categories:

```
src/content/docs/
├── general/          # General documentation
├── association/      # Association-related content
├── finance/          # Financial documentation
├── devops/           # DevOps and infrastructure
└── tools/            # Tools and utilities
```

Each markdown file should include frontmatter:

```markdown
---
title: "Page Title"
description: "Page description"
order: 1
slug: "custom-slug"
tags: [tag1, tag2]
draft: false
---

# Your Content Here

Your markdown content goes here...
```

## Project Structure

```
astro-wiki/
├── public/
│   ├── config.yml          # CMS configuration
│   └── favicon.ico         # Site favicon
├── src/
│   ├── assets/
│   │   ├── custom.css      # Schrödinger Hat branding styles
│   │   └── logo.svg        # Community logo
│   ├── components/         # Custom components
│   ├── pages/
│   │   └── admin.astro     # CMS admin page
│   └── content/
│       └── docs/           # Documentation content
├── astro.config.mjs        # Astro configuration
└── package.json
```

## Schrödinger Hat Branding

This wiki features custom styling that matches the Schrödinger Hat community identity:

- **Colors**: Primary blue (#0ea5e9) and secondary purple (#6366f1)
- **Typography**: Inter font family for modern, readable text
- **Logo**: Custom SVG logo representing our community
- **Gradients**: Beautiful gradients matching our website design

## Configuration

### Starlight Configuration

Edit `astro.config.mjs` to customize:
- Site title and description
- Sidebar navigation
- Social links (GitHub, YouTube, LinkedIn)
- Theme settings

### CMS Configuration

Edit `public/config.yml` to customize:
- Content collections
- Field types and validation
- Media folder settings
- Backend configuration

## Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure environment variables for CMS authentication

### Other Platforms

The site can be deployed to any static hosting platform:
- Vercel
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

### Adding New Content

1. **Via CMS**: Use the web interface at `/admin/`
2. **Via File System**: Create new `.md` files in appropriate directories
3. **Via Git**: Edit files and submit pull requests

### Customization

- **Styling**: Modify `src/assets/custom.css` for branding changes
- **Components**: Add custom components in `src/components/`
- **Layout**: Customize Starlight theme in `astro.config.mjs`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## Community

Schrödinger Hat is a non-profit organization dedicated to making open source truly open. We believe in:

- **Community First**: Building inclusive, welcoming communities
- **Open Knowledge**: Sharing knowledge freely and openly
- **Innovation**: Pushing the boundaries of what's possible
- **Education**: Empowering people through technology

### Connect With Us

- **Website**: [schroedinger-hat.org](https://schroedinger-hat.org)
- **GitHub**: [github.com/schroedinger-hat](https://github.com/schroedinger-hat)
- **YouTube**: [@schroedingerhat](https://www.youtube.com/@schroedingerhat)
- **LinkedIn**: [Schrödinger Hat](https://www.linkedin.com/company/schroedinger-hat)

## License

This project is licensed under the MIT License.

## Support

For issues and questions:
- Check the [Astro documentation](https://docs.astro.build/)
- Check the [Starlight documentation](https://starlight.astro.build/)
- Check the [Decap CMS documentation](https://decapcms.org/)
- Reach out to our community through our social channels
