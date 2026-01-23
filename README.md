# Mayur Suryawanshi - Portfolio Website

A modern, neobrutalist-inspired portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark/light theme switcher, smooth animations, and a responsive design.

## ✨ Features

- **Neobrutalist Design**: Bold, geometric design with strong borders and shadows
- **Dark/Light Theme**: Toggle between dark and light modes with persistent theme preference
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Floating shapes and subtle animations throughout
- **Modern Stack**: Built with the latest React and TypeScript technologies
- **Component Library**: Uses shadcn/ui components for consistent UI elements

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom neobrutalist design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Theme Management**: next-themes
- **Icons**: Lucide React
- **Routing**: React Router
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state
- **Error Handling**: React Error Boundaries
- **Security**: Content Security Policy, Security Headers

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/mayurs-portfolio.git
cd mayurs-portfolio
```

2. Environment setup:

```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

3. Install dependencies:

```bash
yarn install
```

4. Start the development server:

```bash
yarn dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

### Development
- `yarn dev` - Start the development server
- `yarn type-check` - Run TypeScript type checking
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Run ESLint with auto-fix

### Production
- `yarn build` - Build for production
- `yarn build:dev` - Build for development
- `yarn build:analyze` - Build and analyze bundle size
- `yarn preview` - Preview the production build
- `yarn preview:dist` - Preview production build on all interfaces

### Docker
- `yarn docker:build` - Build Docker image
- `yarn docker:run` - Run Docker container

### Deployment
- `yarn deploy:preview` - Deploy to Vercel preview
- `yarn deploy:production` - Deploy to Vercel production

### Maintenance
- `yarn clean` - Clean build artifacts

## 🏗️ Project Structure

```
mayurs-portfolio/
├── src/
│   ├── assets/           # Static assets (images, icons, fonts)
│   ├── components/
│   │   └── ui/           # shadcn/ui components
│   ├── config/           # Application configuration
│   │   ├── constants.ts  # App constants
│   │   ├── env.ts        # Environment variables
│   │   └── security.ts   # Security configuration
│   ├── features/         # Feature-based architecture
│   │   └── portfolio/
│   │       ├── components/ # Portfolio-specific components
│   │       ├── hooks/     # Portfolio-specific hooks
│   │       └── types/     # Feature types
│   ├── pages/            # Page components
│   ├── types/            # Global TypeScript types
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles and theme
├── public/               # Static assets
├── dist/                 # Production build output
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose setup
├── nginx.conf            # Nginx configuration
├── vercel.json           # Vercel deployment config
├── netlify.toml          # Netlify deployment config
└── .env.example          # Environment variables template
```

## 🎯 Key Components

- **Navigation**: Fixed sidebar navigation with theme switcher
- **HeroSection**: Landing section with introduction
- **AboutSection**: About me section with skills and experience
- **ProjectsSection**: Showcase of projects
- **ContactSection**: Contact form
- **Footer**: Footer with links and information

## 🌙 Theme System

The portfolio includes a comprehensive theme system with:

- Light and dark mode support
- Persistent theme preference (stored in localStorage)
- Smooth theme transitions
- Custom neobrutalist color palette for both themes

## 🛡️ Production Features

### Security
- **Content Security Policy (CSP)**: Prevents XSS attacks
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.
- **Input Validation**: Zod schemas for form validation

### Performance
- **Code Splitting**: Automatic chunk splitting for better caching
- **Asset Optimization**: Image optimization and font loading
- **Bundle Analysis**: Built-in bundle analyzer for monitoring

### Error Handling
- **Error Boundaries**: React error boundaries for graceful error handling
- **Development Error Details**: Detailed error information in development
- **Production Error Logging**: Configurable error reporting

### Developer Experience
- **TypeScript Strict Mode**: Enhanced type checking
- **ESLint Configuration**: Code quality enforcement
- **Environment Variables**: Proper env configuration
- **Docker Support**: Containerized deployment

## 📦 Building for Production

To create a production build:

```bash
yarn build
```

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 🚢 Deployment

This project can be deployed to various platforms:

- **GitHub Pages**: Automatic deployment via GitHub Actions (recommended)
- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **Any static hosting**: Upload the `dist` folder contents

### Deploy to GitHub Pages

The project includes a GitHub Actions workflow that automatically builds and deploys your site to GitHub Pages when you push to the `main` branch.

**Setup Steps:**

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - Save the settings

2. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. **Monitor the deployment:**
   - Go to the **Actions** tab in your GitHub repository
   - You should see a workflow run called "Deploy to GitHub Pages"
   - Once it completes, your site will be live at:
     - `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`

4. **Custom Domain (Optional):**
   - Add a `CNAME` file in the `public/` folder with your domain name
   - Configure your DNS settings as per GitHub Pages documentation

The workflow automatically:
- Builds your project on every push to `main`
- Deploys to GitHub Pages
- Handles client-side routing with a 404.html redirect
- Uses caching for faster builds (node_modules, yarn cache, Vite cache)

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy with Docker

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build and run manually
yarn docker:build
yarn docker:run
```

### Manual Deployment

1. Build the project:
```bash
yarn build
```

2. The `dist/` folder contains all static files ready for deployment

3. Deploy the `dist/` folder to any static hosting service:
   - Netlify (drag & drop)
   - Vercel (via CLI or Git integration)
   - GitHub Pages (via GitHub Actions)
   - AWS S3 + CloudFront
   - Any web server (Apache, Nginx, etc.)

### Environment Variables

For production deployment, configure these environment variables:

```bash
# Required
VITE_BASE_URL=/
VITE_APP_TITLE="Your Portfolio Title"
VITE_APP_DESCRIPTION="Your portfolio description"
VITE_APP_AUTHOR="Your Name"

# Optional
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourprofile
VITE_EMAIL=your@email.com
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mayur Suryawanshi**

- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 📊 Monitoring & Maintenance

### Health Checks
- Health endpoint available at `/health`
- Docker health checks configured
- Build analysis with `yarn build:analyze`

### Performance Monitoring
- Bundle size monitoring
- Lighthouse performance scores
- Core Web Vitals optimization

### Error Tracking
- React Error Boundaries for client-side errors
- Console logging in development
- Configurable error reporting for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Run type checking: `yarn type-check`
4. Run linting: `yarn lint:fix`
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 🙏 Acknowledgments

- Design inspiration from neobrutalism design movement
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Build tooling from [Vite](https://vitejs.dev/)
