# Decap CMS Setup Guide

## 🚀 Local Development Setup

### 1. Start the Development Server
```bash
# Terminal 1: Start Astro dev server
npm run dev
```

### 2. Start the CMS Backend
```bash
# Terminal 2: Start Decap CMS backend
npx decap-server
```

### 3. Access the CMS
- **Main Site**: http://localhost:4321
- **CMS Admin**: http://localhost:4321/admin
- **CMS Backend**: http://localhost:8081

## 🔧 How to Use the CMS

### Local Development (No Authentication)
1. Go to http://localhost:4321/admin
2. Click "Login with Netlify Identity"
3. You should see a "Local Backend" option
4. Click "Login" (no password needed for local development)
5. Start creating/editing content!

### Production Setup (Netlify)

#### 1. Deploy to Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

#### 2. Enable Netlify Identity
1. Go to your Netlify dashboard
2. Navigate to Site settings > Identity
3. Click "Enable Identity"
4. Configure registration and access settings

#### 3. Configure Environment Variables
Add these to your Netlify environment:
- `GIT_GATEWAY_ENABLED=true`
- `NETLIFY_USE_YARN=true` (if using yarn)

#### 4. Invite Users
1. Go to Identity tab in Netlify dashboard
2. Click "Invite users"
3. Add email addresses
4. Users will receive invitation emails

## 📁 File Structure

```
astro-wiki/
├── public/
│   ├── config.yml          # CMS configuration
│   └── admin/
│       └── index.html      # CMS interface (legacy)
├── src/
│   ├── pages/
│   │   └── admin.astro     # CMS admin page
│   └── content/docs/       # Your content
└── package.json
```

## 🎛️ CMS Configuration

The CMS is configured in `public/config.yml` with:
- **Collections**: General, Association, Finance, DevOps, Tools
- **Fields**: Title, Description, Body (markdown), Tags, Draft status
- **Media**: Images stored in `src/assets/images/`

## 🔍 Troubleshooting

### Local Development Issues
- **CMS not loading**: Make sure both servers are running
- **Config not found**: Check that `public/config.yml` exists
- **Backend connection failed**: Ensure `decap-server` is running on port 8081

### Production Issues
- **Authentication failed**: Check Netlify Identity settings
- **Git Gateway errors**: Verify environment variables
- **Build failures**: Check for syntax errors in content

## 📝 Content Management

### Creating New Content
1. Go to CMS admin
2. Select a collection (General, Association, etc.)
3. Click "New [Collection]"
4. Fill in the fields:
   - **Title**: Page title
   - **Description**: Brief description
   - **Body**: Main content (markdown)
   - **Tags**: Optional tags for organization
   - **Draft**: Set to true for unpublished content
5. Click "Publish"

### Editing Existing Content
1. Go to CMS admin
2. Select a collection
3. Click on an existing entry
4. Make your changes
5. Click "Publish"

## 🚀 Quick Start Commands

```bash
# Development (run in separate terminals)
npm run dev          # Terminal 1
npx decap-server     # Terminal 2

# Or use the convenience script
./start-dev.sh       # Starts both servers
```

## 📚 Next Steps

1. **Customize the CMS**: Edit `public/config.yml` for your needs
2. **Add custom fields**: Configure additional field types
3. **Set up previews**: Configure content previews
4. **Deploy**: Deploy to your preferred hosting platform 