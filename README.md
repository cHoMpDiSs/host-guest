# 🏠 Host Guest - Your Home Away from Home

A modern web application connecting guests with welcoming host families, offering an affordable and enriching alternative to traditional housing. Built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- 🔐 **Secure Authentication**
  - Email/Password login
  - Google & Facebook OAuth integration
  - JWT-based session management

- 👥 **User Profiles**
  - Separate host and guest interfaces
  - Profile customization
  - Verification system

- 🏡 **Property Management**
  - Detailed listing creation
  - Photo uploads
  - Availability calendar
  - Pricing management

- 🔍 **Advanced Search**
  - Location-based search
  - Filter by amenities
  - Price range selection
  - Distance calculation

- 📱 **Responsive Design**
  - Mobile-first approach
  - Modern UI/UX
  - Cross-browser compatibility

## 🛠️ Tech Stack

- **Frontend**
  - Next.js 14 (React)
  - TypeScript
  - Tailwind CSS
  - Lucide Icons

- **Authentication**
  - NextAuth.js
  - OAuth providers

- **Database**
  - Prisma ORM
  - PostgreSQL

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/host-guest.git
cd host-guest
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Create a .env file with the following variables
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/hostguest"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# OAuth credentials
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
FACEBOOK_CLIENT_ID=""
FACEBOOK_CLIENT_SECRET=""
```

4. Initialize the database
```bash
npx prisma migrate dev
```

5. Start the development server
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 📁 Project Structure

```
host-guest/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # Reusable React components
│   ├── lib/             # Utility functions and helpers
│   └── types/           # TypeScript type definitions
├── prisma/              # Database schema and migrations
├── public/             # Static assets
└── package.json        # Project dependencies
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
