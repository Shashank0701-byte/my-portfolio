# Shashank Chakraborty - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Features a beautiful design with dark mode support, smooth animations, and a professional layout.

## ✨ Features

- **🎨 Modern Design**: Clean and professional design with smooth animations
- **🌙 Dark Mode**: Toggle between light and dark themes
- **📱 Responsive**: Fully responsive design that works on all devices
- **⚡ Fast Performance**: Built with Vite for optimal performance
- **🎭 Smooth Animations**: Enhanced intro animation with typing effects
- **📝 Contact Form**: Functional contact form with validation
- **🔝 Scroll to Top**: Convenient scroll-to-top button
- **🎯 Interactive Elements**: Hover effects and interactive components

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
Portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and other assets
│   ├── components/        # Reusable components
│   │   ├── ContactForm.jsx
│   │   ├── IntroAnimation.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SkillCard.jsx
│   │   └── ...
│   ├── sections/          # Page sections
│   │   ├── AboutMe.jsx
│   │   ├── ContactMe.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MyProjects.jsx
│   │   └── TechnicalProficiency.jsx
│   ├── utils/             # Utility functions and data
│   │   └── data.js
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors and Theme

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: "#FF6B35",
  secondary: "#F7931E",
}
```

### Content

Update the content in `src/utils/data.js`:

- **Personal Information**: Update name, email, phone, etc.
- **Skills**: Modify skills, progress percentages, and descriptions
- **Projects**: Add your projects with images and descriptions
- **Stats**: Update statistics in the hero section

### Images

Replace images in `src/assets/images/`:
- `profile-pic.jpg` - Your profile picture
- `project_img_*.png` - Project screenshots
- `icon-*.png` - Technology icons

## 🌙 Dark Mode

The website includes a built-in dark mode toggle. The dark mode state is saved in localStorage and persists across sessions.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎭 Animations

- **Intro Animation**: Typing effect with skill showcase
- **Scroll Animations**: Smooth scroll-to-section functionality
- **Hover Effects**: Interactive elements with hover animations
- **Loading States**: Spinner animations for form submissions

## �� Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling
- **Framer Motion** - Animation library

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: alex.doe@timetoprogram.com
- **Website**: https://timetoprogram.com
- **LinkedIn**: [Your LinkedIn]

---

Made with ❤️ by Shashank Chakraborty