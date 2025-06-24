# Portfolio Single-Page React + Tailwind

## Setup
1. Place your personal photo in `src/assets/photo.jpg`.
2. Ensure `public/resume.pdf` is your resume.
3. Install dependencies:
   ```
   npm install
   ```
   (This includes react, react-dom, react-scroll, vite, tailwindcss, autoprefixer, postcss, @vitejs/plugin-react)
4. Install AOS for scroll animations:
   ```
   npm install aos
   ```
5. In `src/main.jsx`, import AOS CSS if desired:
   ```js
   import 'aos/dist/aos.css';
   import AOS from 'aos';
   useEffect(() => { AOS.init({ duration: 1000 }); }, []);
   ```
   Or initialize in `App.jsx`.
6. Run dev server:
   ```
   npm run dev
   ```
7. Customize colors in `tailwind.config.js` to match desired palette.

## Features
- Single-page smooth scroll using `react-scroll`.
- Dark/light mode toggle persisted in localStorage.
- Sections: Home, About, Skills, Education, Experience, Projects, Achievements, Contact.
- Responsive design via Tailwind utility classes.
- Downloadable resume button.
- Placeholder for contact form integration.

## Reference
Modeled after layout and structure similar to https://nishumital3103.github.io/nishu_portfolio.github.io/ citeturn0view0 and uses details from Tarun Juneja's resume fileciteturn2file0.
"# myportfoliosite" 
