# Saurab Shrestha - Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. Features smooth animations, interactive components, and a professional design showcasing my skills, projects, and experience.

## 🚀 Features

- **Modern Design**: Clean, professional interface with gradient accents
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Interactive Components**: 
  - Floating particles background
  - Project modals with detailed views
  - PDF resume viewer
  - Contact form
- **TypeScript**: Full type safety and better development experience
- **Performance Optimized**: Fast loading with Vite build system

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router (if implemented)
- **Linting**: ESLint with TypeScript support

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── FloatingParticles.tsx
│   ├── Footer.tsx
│   ├── NavBar.tsx
│   └── StickyTag.tsx
├── features/           # Feature-based organization
│   ├── about/         # About section components
│   ├── contact/       # Contact form components
│   ├── home/          # Home page components
│   ├── resume/        # Resume viewer components
│   └── work/          # Portfolio work components
├── layouts/           # Layout components
├── lib/              # Utility functions
├── pages/            # Page components
└── assets/           # Static assets (images, PDFs)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- Yarn or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Start the development server:
```bash
yarn dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
yarn build
# or
npm run build
```

## 📝 Customization

### Personal Information
Update the following files with your information:
- `src/features/home/HeroSection.tsx` - Main hero content
- `src/features/about/AboutSection.tsx` - About section
- `src/features/work/WorkSection.tsx` - Portfolio projects
- `src/assets/Saurab-Shrestha-CV.pdf` - Your resume/CV

### Styling
The project uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles in individual component files

### Animations
Animations are powered by Framer Motion. You can modify:
- Animation variants in component files
- Transition durations and easing
- Hover and tap animations

## 🎨 Design System

### Colors
- Primary: Orange to Red gradient (`from-orange-500 to-red-500`)
- Text: Gray scale (`gray-900`, `gray-600`)
- Background: White and light grays

### Typography
- Headings: Large, bold fonts with tight letter spacing
- Body: Clean, readable fonts with good line height
- Accent text: Gradient text effects

### Components
- Buttons: Rounded with hover effects and animations
- Cards: Clean white backgrounds with subtle shadows
- Modals: Smooth transitions with backdrop blur

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Development

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Component-based architecture

### Performance
- Lazy loading for images and components
- Optimized bundle size with Vite
- Efficient re-renders with React best practices

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Please feel free to open issues or submit pull requests.

## 📞 Contact

For questions or collaboration opportunities, please reach out through the contact form on the website or connect with me on LinkedIn.

---

Built with ❤️ using React, TypeScript, and Vite
