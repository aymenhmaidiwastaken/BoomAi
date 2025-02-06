# BoomAI

A full-stack AI-powered content generation platform built with Next.js 14 and Laravel 11. Generate text, images, and code with an intuitive interface and robust API backend.

## Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- React 18
- Bootstrap 5
- SCSS with CSS custom properties
- React Context API for state management

**Backend:**
- Laravel 11
- Laravel Sanctum (API authentication)
- MySQL
- Eloquent ORM with API Resources

## Features

- AI Text Generator — create articles, emails, and marketing copy
- AI Image Generator — generate images from text prompts
- AI Code Generator — produce code snippets in any language
- User authentication (register, login, JWT tokens)
- User dashboard with profile management
- Pricing plans with feature comparison
- Blog with category filtering
- Contact form with backend storage
- Dark/light mode theming
- Fully responsive design

## Project Structure

```
boomai/
├── frontend/          # Next.js 14 application
│   ├── app/           # App Router pages
│   ├── components/    # React components
│   ├── context/       # React Context providers
│   ├── data/          # Static JSON data
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

## Getting Started

### Prerequisites

- Node.js 18+
- PHP 8.2+
- Composer
- MySQL 8.0+

### Frontend Setup

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

The frontend runs at `http://localhost:3000`.

### Backend Setup

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
```

Configure your database in `.env`:

```
DB_DATABASE=boomai
DB_USERNAME=root
DB_PASSWORD=your_password
```

Then run migrations and seeders:

```bash
php artisan migrate --seed
php artisan serve
```

The API runs at `http://localhost:8000`.

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
| PUT | `/api/blog/{post}` | Yes | Update blog post |
| DELETE | `/api/blog/{post}` | Yes | Delete blog post |
| GET | `/api/plans` | No | List pricing plans |
| POST | `/api/contact` | No | Submit contact form |
| GET | `/api/user/profile` | Yes | Get user profile |
| PUT | `/api/user/profile` | Yes | Update profile |
| PUT | `/api/user/password` | Yes | Change password |
| PUT | `/api/user/appearance` | Yes | Update theme settings |

## Environment Variables

### Frontend (`frontend/.env.local`)

```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### Backend (`backend/.env`)

```
APP_NAME=BoomAI
DB_DATABASE=boomai
SANCTUM_STATEFUL_DOMAINS=localhost:3000
```

## License

MIT
