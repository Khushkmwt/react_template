
# ⚡ React + Vite + Tailwind + Zustand Template

Lightweight, modern frontend starter built with:

- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🧠 Zustand (global state)
- 📡 Axios (ready for API)
- 🧭 React Router (with Login + Home)
- 🧱 Navbar + Footer components

---

## 🏃‍♂️ Quick Start

```bash
git clone <your-repo-url>
cd client
npm install
npm run dev
```

---

## 📁 File Structure

```
client/
├── public/
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 📦 Package.json

```json
{
  "name": "vite-react-tailwind-zustand-template",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.6.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0",
    "zustand": "^4.5.2"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.21",
    "tailwindcss": "^3.3.2",
    "vite": "^5.0.0"
  }
}
```

---

## ✨ Vite Config (vite.config.js)

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});
```

... (truncated for brevity)
