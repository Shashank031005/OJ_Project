# Online Judge Platform

A secure, scalable, and intelligent environment for coding challenges with AI-powered feedback.

## Project Structure

```
.
├── frontend/           # React + TypeScript + Vite frontend
│   ├── src/           # Source code
│   ├── public/        # Static files
│   └── package.json   # Frontend dependencies
│
└── backend/           # Django REST Framework backend
    ├── apps/         # Django applications
    ├── config/       # Project configuration
    └── requirements.txt  # Python dependencies
```

## Prerequisites

- Python 3.8+
- Node.js 18+
- PostgreSQL 13+
- Redis 6+
- Docker

## Setup Instructions

### Backend Setup

1. Create and activate virtual environment:
   ```bash
   cd backend
   python -m venv .venv
   # On Windows
   .venv\Scripts\activate
   # On Unix/MacOS
   source .venv/bin/activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Create .env file from .env.example and configure your environment variables

4. Run migrations:
   ```bash
   python manage.py migrate
   ```

5. Start the development server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Create .env file from .env.example and configure your environment variables

3. Start the development server:
   ```bash
   npm run dev
   ```

## Features

- Secure code execution in Docker containers
- Real-time submission feedback
- Problem management system
- User authentication and authorization
- Contest management
- Leaderboard system
- Code similarity detection
- AI-powered code analysis and feedback

## Tech Stack

### Frontend
- React with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- React Query for data fetching
- React Router for routing
- Axios for API requests

### Backend
- Django & Django REST Framework
- PostgreSQL for database
- Redis for caching
- JWT authentication
- Docker for code execution
- Celery for background tasks

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 