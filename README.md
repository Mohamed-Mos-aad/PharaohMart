## PharaohMart 🏺

**PharaohMart** is a modern e‑commerce experience inspired by Egyptian marketplaces.  
It combines a **React + TypeScript + Vite** frontend with a **Strapi 5** backend to deliver authenticated shopping flows, a dashboard for sellers, and a structured API layer that’s easy to extend.

Live demo: [`pharaoh-mart` GitHub Pages](https://mohamed-mos-aad.github.io/PharaohMart/)

---

## Tech Stack

### Frontend

- **React 19**  
  ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=for-the-badge)

- **TypeScript 5**  
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white&style=for-the-badge)

- **Vite 7**  
  ![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white&style=for-the-badge)

- **Redux Toolkit + React Redux**  
  ![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.x-764ABC?logo=redux&logoColor=white&style=for-the-badge)

- **React Router 7**  
  ![React Router](https://img.shields.io/badge/React%20Router-7.x-CA4245?logo=reactrouter&logoColor=white&style=for-the-badge)

- **Axios** for HTTP client with typed API layer  
  ![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?logo=axios&logoColor=white&style=for-the-badge)

- **CSS Modules** for scoped, component‑level styling

- **Firebase** (for real‑time features / messaging)  
  ![Firebase](https://img.shields.io/badge/Firebase-12.x-FFCA28?logo=firebase&logoColor=black&style=for-the-badge)

- **EmailJS** for contact / transactional emails  
  ![EmailJS](https://img.shields.io/badge/EmailJS-4.x-0081CB?style=for-the-badge)

### Backend

- **Strapi 5** (headless CMS & API)  
  ![Strapi](https://img.shields.io/badge/Strapi-5.x-2F2E8B?logo=strapi&logoColor=white&style=for-the-badge)

- **Better‑SQLite3** as the primary database

- **Cloudinary** via `@strapi/provider-upload-cloudinary` for media storage

The frontend authenticates against the Strapi backend, consumes its REST APIs (via `/api`), and handles JWT‑based authorization on the client.

---

## Key Features

- **Authentication & Authorization**
  - Full **email/password login** against Strapi’s `/auth/local` endpoint.
  - JWT token and user profile persisted in a structured `localStorage` envelope (`pharaohmart` key).
  - Centralized **Axios instance with request/response interceptors** that:
    - Injects the `Authorization: Bearer <token>` header for authenticated requests.
    - Automatically clears invalid tokens and redirects to `/login` on `401` responses.
  - `ProtectedRoute` utilities to guard:
    - **Auth routes** (e.g. prevent logged‑in users from seeing the login/register pages).
    - **Dashboard routes** by role (`roleType`) and presence of a valid token.

- **E‑commerce Flows**
  - Product listing, product details, categories, tags, and search pages.
  - Cart and favourites management backed by Redux slices.
  - Checkout flow in `pages/main/Checkout.tsx`.

- **Seller Dashboard**
  - Seller‑oriented **dashboard** with inventory, payments, analytics, and settings pages.
  - Dedicated layout and navigation for dashboard routes.

- **Reviews & Ratings**
  - Reviews and over‑all rating UI components with like/unlike interactions.

- **UI & UX**
  - Reusable UI components: inputs, text areas, toggles, dropdowns, upload controls, sliders, etc.
  - Responsive layouts using CSS Modules and a clean component structure.

- **Robust Client Data Management**
  - Small utility layer (`utils/localStorage.ts` and `hooks/usePharaohMartData`) that:
    - Abstracts reading/writing structured app state to `localStorage`.
    - Avoids parse errors and missing‑key edge cases.
  - Centralized store configuration in `app/store.ts` with feature slices for:
    - `auth/login`, `auth/signup`
    - `cart`, `favourite`
    - `messagePop`

- **Integrated Backend**
  - Strapi 5 project in `/backend` for managing:
    - Products, categories, tags, photos, and sellers.
    - Authentication and user permissions via `@strapi/plugin-users-permissions`.
  - Example seed & deployment scripts for bootstrapping data and deploying Strapi.

---

## Project Structure

### Frontend (`/src`)

```text
src
├─ api/                 # Typed API layer and Strapi integration
│  ├─ auth/             # Login / signup flows (JWT + Strapi /auth/local)
│  ├─ config/           # Axios instance + interceptors (VITE_API_URL based)
│  └─ data/             # Domain-specific data actions (products, categories, reviews, sellers, photos, tags)
├─ app/                 # Redux Toolkit store and feature slices
│  ├─ features/
│  │  ├─ auth/          # Auth state (login/signup)
│  │  ├─ cart/          # Cart state management
│  │  ├─ favourite/     # Favourites (wishlist) slice
│  │  └─ messagePop/    # Global message / toast state
│  └─ store.ts          # Store configuration
├─ assets/              # SVG icons and static media (UI, product, footer, dashboard, etc.)
├─ components/          # Reusable, presentation and container components
│  ├─ auth/             # Auth forms and switches
│  ├─ cart/             # Cart item display
│  ├─ dashboard/        # Dashboard header and widgets
│  ├─ navbar/           # Main and dashboard navigation bars
│  ├─ product/          # Product cards, product data display
│  ├─ reviews/          # Reviews UI and rating components
│  ├─ search/           # Search bar component(s)
│  ├─ ui/               # Low-level UI primitives (inputs, text areas, dropdowns, toggles, uploads, sliders, message pop)
│  └─ cardSlider/       # Home page card slider
├─ constant/            # Shared constants (routes, config, etc.)
├─ data/                # Fake / static data used for prototyping
├─ hooks/               # Custom hooks (e.g., usePharaohMartData)
├─ interfaces/          # Shared TypeScript interfaces
├─ layouts/             # Layout components (e.g., chat layout)
├─ pages/               # Route-level pages
│  ├─ auth/             # Login, signup, OTP, welcome, success screens
│  ├─ dashboard/        # Dashboard, analytics, inventory, payments, settings, help, add product
│  ├─ main/             # Cart, checkout, favourite
│  ├─ CategoryProducts.tsx
│  ├─ Home.tsx
│  ├─ Product.tsx
│  └─ SearchProducts.tsx
├─ routers/             # Route configuration and protected route helpers
├─ services/            # Cross-cutting services (e.g., cookies)
├─ style/               # CSS Modules organized by pages/components/layouts
├─ utils/               # Utility helpers (localStorage, date utils, etc.)
├─ validation/          # Form validation logic
├─ App.tsx              # App entry and route composition
└─ main.tsx / index.tsx # Vite entry point (depending on setup)
```

### Backend (`/backend`)

```text
backend
├─ src/                 # Strapi 5 application (APIs, content types, plugins)
├─ scripts/             # Seed and utility scripts
├─ package.json         # Strapi dependencies and scripts
└─ types/               # Generated Strapi TypeScript types
```

The separation keeps the **frontend** focused on UX and state management, while **Strapi** owns content, authentication, and permissions.

---

## Installation & Setup

### Prerequisites

- **Node.js**:  
  - Frontend: Node 18+ recommended  
  - Backend (Strapi): Node `>=18.0.0 <=22.x.x` (as specified in `backend/package.json`)
- **npm** or **yarn** (examples below use npm)

You will also need:

- A **Strapi API URL** (local or hosted) for the frontend to talk to.
- Optional: **Cloudinary** credentials if you want to use the existing upload provider setup.

---

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/PharaohMart.git
cd PharaohMart
```

---

### 2. Configure Environment Variables

#### Frontend (`.env` at project root)

Create a `.env` file in the project root (or `.env.local` depending on your workflow) and set:

```bash
VITE_API_URL=http://localhost:1337
```

Adjust `VITE_API_URL` to point to your Strapi instance.  
The Axios config uses `VITE_API_URL` and automatically prefixes `/api`.

If you use Firebase or EmailJS, also configure their respective keys here as needed.

#### Backend (`/backend/.env`)

Inside the `backend` folder, configure your Strapi environment variables (database, Cloudinary, auth secrets, etc.) according to the Strapi documentation.

---

### 3. Install Dependencies

#### Frontend

From the project root:

```bash
npm install
```

#### Backend (Strapi)

```bash
cd backend
npm install
cd ..
```

---

### 4. Run the App Locally

#### Start the Backend (Strapi)

```bash
cd backend
npm run develop
```

By default, Strapi runs on `http://localhost:1337`.

#### Start the Frontend

In a separate terminal from the project root:

```bash
npm run dev
```

Vite will start the frontend (usually on `http://localhost:5173` or the next available port).

Ensure that `VITE_API_URL` in your `.env` matches your Strapi URL.

---

## Available Scripts

### Frontend (root `package.json`)

- **`npm run dev`**  
  Starts the Vite development server.

- **`npm run build`**  
  Type‑checks the code (`tsc -b`) and builds the production bundle via Vite.

- **`npm run preview`**  
  Serves the built frontend locally for a production‑like preview.

- **`npm run lint`**  
  Runs ESLint on the project.

- **`npm run predeploy`**  
  Helper script to build before deployment (used by `deploy`).

- **`npm run deploy`**  
  Deploys the built frontend to GitHub Pages using `gh-pages` (targets the `dist` folder).

### Backend (`/backend/package.json`)

- **`npm run develop`** / **`npm run dev`**  
  Starts Strapi in development mode with hot reload.

- **`npm run build`**  
  Builds the Strapi admin and server for production.

- **`npm run start`**  
  Starts Strapi in production mode.

- **`npm run deploy`**  
  Strapi deployment helper (depending on your hosting setup).

- **`npm run seed:example`**  
  Runs an example seed script (`scripts/seed.js`) to pre‑populate data.

- **`npm run upgrade`** / **`npm run upgrade:dry`**  
  Assists with upgrading Strapi to the latest version.

---

## Authentication & API Flow (Highlight)

- **Login Flow**
  - `LogInAction` (`src/api/auth/LogIn.ts`) sends credentials to Strapi’s `/auth/local` endpoint.
  - On success:
    - Extracts `jwt` and `user` from the Strapi response.
    - Persists them in `localStorage` via `setPharaohMartData("token", token)` and `setPharaohMartData("userData", userResponse.data)`.
    - Returns a strongly typed success shape for consumers.
  - On failure:
    - Normalizes Axios errors to a consistent `{ success: false, error: { message, details } }` contract.

- **Axios Interceptors**
  - **Request interceptor** looks up the latest token from `getPharaohMartData` and, if present, injects the `Authorization` header for every API call.
  - **Response interceptor**:
    - On `401`, removes the token via `deletePharaohMartKey("token")` and forces a redirect to `/login`, keeping the frontend in sync with Strapi’s auth state.
    - Logs server errors (`500`) with contextual messages.

- **Protected Routes**
  - `ProtectedAuthRoutes` redirects authenticated users away from auth screens.
  - `ProtectedDashboardRoutes` checks both `token` and `userData.roleType` to ensure:
    - Only non‑`customer` roles with a valid token can access seller/dashboard views.
  - All checks leverage the unified `usePharaohMartData` hook, which wraps `localStorage` access behind TypeScript interfaces.

This combination creates a **clear, testable boundary** between the frontend and Strapi, making it straightforward to extend roles, permissions, or additional secure areas later.

---

## Contribution

Contributions, suggestions, and feedback are very welcome.

1. **Fork** the repository.
2. **Create a feature branch**: `git checkout -b feature/my-improvement`.
3. **Commit** your changes: `git commit -m "Add my improvement"`.
4. **Push** the branch: `git push origin feature/my-improvement`.
5. **Open a Pull Request** describing what you changed and why.

If you’re a recruiter reviewing this project and would like to discuss the architecture, trade‑offs, or potential extensions (e.g., multi‑tenant stores, advanced analytics, or role‑based dashboards), feel free to reach out—this codebase is intentionally structured to grow.

---

## License

This project is currently closed‑source for learning and portfolio purposes.  
If you’d like to use part of it commercially, please contact the author.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
