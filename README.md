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

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## 🎨 Project Structure

```
mayurs-portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   └── ProjectsSection.tsx
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles and theme
├── public/               # Static assets
└── dist/                 # Production build output
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

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 🚢 Deployment

This project can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Any static hosting**: Upload the `dist` folder contents

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

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mayur Suryawanshi**

- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Design inspiration from neobrutalism design movement
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
