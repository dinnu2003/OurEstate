# OurEstate

A modern, full-stack real estate platform designed to simplify property management and facilitate seamless buying, selling, and renting of properties. OurEstate provides an intuitive interface for users to browse properties, connect with sellers/renters, and manage their real estate transactions efficiently.

## 🌟 Features

- **User Authentication & Authorization**: Secure user registration and login with JWT-based authentication
- **Property Listings**: Browse, search, and filter properties with detailed information
- **Advanced Search & Filtering**: Filter properties by location, price range, amenities, and more
- **Interactive Map View**: Visualize properties on an interactive map using Leaflet
- **User Profiles**: Comprehensive user profiles for sellers, buyers, and renters
- **Property Management**: Manage property listings with create, update, and delete operations
- **Image Upload**: Upload property images with cloud storage integration (Cloudinary)
- **Responsive Design**: Fully responsive UI optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Live property notifications and status updates
- **Secure Transactions**: Encrypted data transmission and secure API endpoints

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern UI library with latest features
- **Vite** - Fast build tool for development and production
- **React Router 7.9.4** - Client-side routing and navigation
- **Material-UI (MUI)** - Professional component library for rich UI
- **Emotion** - CSS-in-JS styling solution
- **Axios** - HTTP client for API communication
- **Leaflet & React-Leaflet** - Interactive mapping capabilities
- **SASS** - Advanced styling with preprocessing
- **Font Awesome & Lucide Icons** - Comprehensive icon libraries

### Backend
- **Node.js & Express 5.1.0** - Robust server framework
- **Prisma 6.17.1** - Next-generation ORM for database management
- **PostgreSQL** - Reliable relational database (via Prisma)
- **JWT (jsonwebtoken)** - Token-based authentication
- **bcrypt** - Password hashing and security
- **Multer 2.0.2** - File upload middleware
- **Cloudinary** - Cloud-based image storage and manipulation
- **CORS** - Cross-origin resource sharing configuration
- **Cookie Parser** - HTTP cookie handling
- **Dotenv** - Environment variable management
- **Nodemon** - Development server auto-reload

## 📁 Project Structure

```
OurEstate/
├── client/                          # Frontend React application
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── components/              # Reusable React components
│   │   ├── pages/                   # Page components for routes
│   │   ├── Layout/                  # Layout wrapper components
│   │   ├── context/                 # React Context for state management
│   │   ├── lib/                     # Utility functions and helpers
│   │   ├── App.jsx                  # Main App component
│   │   ├── main.jsx                 # React entry point
│   │   ├── index.scss               # Global styles
│   │   ├── Responsive.scss          # Responsive design breakpoints
│   │   └── dummyData.js             # Mock data for development
│   ├── index.html                   # HTML template
│   ├── package.json                 # Frontend dependencies
│   ├── vite.config.js               # Vite configuration
│   └── eslint.config.js             # ESLint rules
│
└── server/                          # Backend Node.js/Express application
    ├── controllers/                 # Business logic handlers
    │   ├── authController.js        # Authentication logic
    │   ├── userController.js        # User management
    │   └── propertyController.js    # Property operations
    ├── routes/                      # API route definitions
    │   ├── authRoute.js             # Auth endpoints (/auth)
    │   └── userRoute.js             # User endpoints (/user)
    ├── middlewares/                 # Custom middleware functions
    │   ├── authMiddleware.js        # JWT verification
    │   └── errorHandler.js          # Error handling
    ├── PrismaCl/                    # Prisma client configuration
    ├── prisma/                      # Database schemas
    │   ├── schema.prisma            # Data model definitions
    │   └── migrations/              # Database migrations
    ├── index.js                     # Server entry point
    ├── package.json                 # Backend dependencies
    └── .env.example                 # Environment variables template
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/dinnu2003/OurEstate.git
cd OurEstate
```

2. **Setup Backend**
```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/ourestate
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLIENT_URL=http://localhost:5173
```

3. **Setup Database**
```bash
cd server
npx prisma migrate dev --name init
npx prisma generate
```

4. **Start Backend Server**
```bash
npm start
```
The server runs on `http://localhost:5000`

5. **Setup Frontend**
```bash
cd client
npm install
```

6. **Start Frontend Development Server**
```bash
npm run dev
```
The application runs on `http://localhost:5173`

## 📋 Available Scripts

### Frontend
- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

### Backend
- `npm start` - Start server with Nodemon (auto-reload)

## 🔑 Key Components

### Frontend Components
- **Navbar** - Navigation header with user menu
- **PropertyCard** - Display individual property listings
- **PropertyFilter** - Advanced search and filtering
- **MapView** - Interactive map with property markers
- **UserProfile** - User account and profile management
- **AuthForms** - Login and registration forms

### Backend Endpoints

**Authentication Routes** (`/auth`)
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout

**User Routes** (`/user`)
- `GET /user/profile` - Get user profile
- `PUT /user/profile` - Update profile
- `GET /user/properties` - Get user's properties
- `POST /user/properties` - List new property
- `PUT /user/properties/:id` - Update property
- `DELETE /user/properties/:id` - Delete property

## 🔐 Security Features

- JWT-based authentication for secure API access
- Password hashing with bcrypt
- CORS configuration for controlled cross-origin requests
- Environment variables for sensitive data
- Secure cookie handling
- Input validation and sanitization

## 📱 Responsive Design

The application is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1366px - 1919px)
- Tablet (768px - 1365px)
- Mobile (320px - 767px)

## 🎨 UI/UX Features

- Modern Material Design interface
- Smooth animations and transitions
- Intuitive navigation
- Accessibility-friendly components
- Dark mode support ready
- Custom themed color schemes

## 📦 Dependencies Management

All dependencies are managed through npm with:
- `package.json` - Project configuration
- `package-lock.json` - Dependency lock file
- `node_modules/` - Installed packages (excluded from git)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

**Dinesh** (dinnu2003)
- GitHub: [@dinnu2003](https://github.com/dinnu2003)

## 🙏 Acknowledgments

- Material-UI for excellent component library
- Prisma for powerful database ORM
- React community for amazing tools and libraries
- Cloudinary for reliable image hosting

## 📞 Support

For support, email support@ourestate.com or open an issue on GitHub.

## 🔄 Version History

**v1.0.0** (Current)
- Initial release
- Core features implemented
- Authentication system
- Property management system
- Interactive mapping

---

**Last Updated**: March 10, 2026