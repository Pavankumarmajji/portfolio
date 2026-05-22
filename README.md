# Developer Portfolio

A modern, responsive, and high-performance developer portfolio website built using React, TypeScript, Vite, Tailwind CSS, and integrated with Supabase.

🌐 **Live Demo:** [Pavankumarmajjivercel.app](https://vercel.app)

---

## 🚀 Tech Stack

- **Frontend Framework:** React (Vite)
- **Language:** TypeScript (96.5%)
- **Styling:** Tailwind CSS & PostCSS
- **Backend / Database:** Supabase
- **Package Manager:** Bun / npm
- **Linter & Code Quality:** ESLint

---

## 📦 Features

- **Dynamic Content:** Showcases projects, skills, and experience seamlessly.
- **Supabase Integration:** Backend functionality for contact forms, analytics, or dynamic project fetching.
- **Modern UI:** Styled using Tailwind CSS for clean, responsive, and mobile-friendly layouts.
- **Fast Build Times:** Powered by Vite and bundled optimized assets.

---

## 🛠️ Installation & Setup

Ensure you have [Bun](https://bun.sh) or [Node.js](https://nodejs.org) installed before proceeding.

### 1. Clone the Repository
```bash
git clone https://github.com/Pavankumarmajji/portfolio.git
cd portfolio
```

### 2. Install Dependencies
Using **Bun** (recommended based on `bun.lockb`):
```bash
bun install
```
*Alternatively, using npm:*
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the Development Server
```bash
bun run dev
# or
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

### 5. Build for Production
```bash
bun run build
# or
npm run build
```

---

## 📁 Project Structure

```text
├── public/          # Static assets (images, icons)
├── src/             # Application source code
│   ├── components/  # Reusable UI components
│   ├── supabase/    # Supabase configuration & client setup
│   ├── App.tsx      # Main application entry component
│   └── main.tsx     # Application mounting configuration
├── .env             # Environment variables (gitignored)
├── tailwind.config.ts # Tailwind CSS configuration
└── vite.config.ts   # Vite bundler configuration
```

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

