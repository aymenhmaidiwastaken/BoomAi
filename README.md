<h1 align="center">BoomAI</h1>

<p align="center">
  <strong>Full-stack AI-powered content generation platform built with Next.js 14 and Laravel 11.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/next.js-14-000000.svg" alt="Next.js 14">
  <img src="https://img.shields.io/badge/laravel-11-FF2D20.svg" alt="Laravel 11">
  <img src="https://img.shields.io/badge/react-18-61DAFB.svg" alt="React 18">
  <img src="https://img.shields.io/badge/mysql-8-4479A1.svg" alt="MySQL">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="MIT License">
</p>

---

## Features

- **AI Text Generator** — Create articles, emails, and marketing copy
- **AI Image Generator** — Generate images from text prompts
- **AI Code Generator** — Produce code snippets in any language
- User authentication (register, login, JWT tokens via Sanctum)
- User dashboard with profile management
- Pricing plans with feature comparison
- Blog with category filtering
- Contact form with backend storage
- Dark/light mode theming
- Fully responsive design

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 14 (App Router), React 18, Bootstrap 5, SCSS |
| **Backend** | Laravel 11, Sanctum (API auth), Eloquent ORM |
| **Database** | MySQL 8 |
| **State** | React Context API |

## Getting Started

### Prerequisites

- Node.js 18+
- PHP 8.2+
- Composer
- MySQL 8.0+

### Frontend

```bash
git clone https://github.com/aymenhmaidiwastaken/BoomAi.git
cd BoomAi/frontend
npm install
cp .env.local.example .env.local
npm run dev
```

Runs at **http://localhost:3000**.

### Backend

```bash
cd ../backend
composer install
cp .env.example .env
php artisan key:generate
```

Configure your database in `.env`:

```env
DB_DATABASE=boomai
DB_USERNAME=root
DB_PASSWORD=your_password
```

Then:

```bash
php artisan migrate --seed
php artisan serve
```

API runs at **http://localhost:8000**.

## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | No | Register a new user |
| POST | `/api/auth/login` | No | Login and get token |
| POST | `/api/auth/logout` | Yes | Revoke current token |
| GET | `/api/auth/user` | Yes | Get authenticated user |
| GET | `/api/blog` | No | List blog posts |
| GET | `/api/blog/{slug}` | No | Get single blog post |
| POST | `/api/blog` | Yes | Create blog post |
| GET | `/api/plans` | No | List pricing plans |
| POST | `/api/contact` | No | Submit contact form |
| GET | `/api/user/profile` | Yes | Get user profile |
| PUT | `/api/user/profile` | Yes | Update profile |

## Project Structure

```
BoomAi/
├── frontend/          # Next.js 14 application
│   ├── app/           # App Router pages
│   ├── components/    # React components
│   ├── context/       # React Context providers
│   ├── lib/           # API utilities
│   └── public/        # Static assets & SCSS
├── backend/           # Laravel 11 API
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   ├── Requests/
│   │   │   └── Resources/
│   │   └── Models/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   └── routes/
└── README.md
```

## Environment Variables

### Frontend (`frontend/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### Backend (`backend/.env`)

```env
APP_NAME=BoomAI
DB_DATABASE=boomai
SANCTUM_STATEFUL_DOMAINS=localhost:3000
```

## License

MIT
