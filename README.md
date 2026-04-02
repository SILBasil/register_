# Medical Program Registration Form

A comprehensive web application for medical program applications with multi-step form validation, built with React, Express, Prisma, and TiDB.

## 🚀 Features

- **Multi-step Registration Form**: 3-step process with validation
- **Real-time Validation**: Client-side and server-side validation with error messages
- **Database Integration**: TiDB Cloud with Prisma ORM
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Sample Data**: Pre-seeded with 100+ sample applications for testing
- **Modern Stack**: React 18, TypeScript, Express.js, Prisma

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** for components
- **React Hook Form** for form management

### Backend
- **Express.js** with TypeScript
- **Prisma ORM** for database operations
- **TiDB Cloud** as database
- **CORS** for cross-origin requests

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- TiDB Cloud account (for database)
- GitHub account (for deployment)

## 🚀 Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd register_
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env`
   - Configure your TiDB Cloud credentials:
     ```env
     DATABASE_URL="mysql://username:password@host:port/database?ssl-mode=REQUIRED&sslcert=path/to/cert.pem"
     ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run database migrations
   npx prisma db push

   # Seed sample data
   npm run seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

   This will start both frontend (port 5173) and backend (port 5000).

## 📦 Build for Production

```bash
npm run build
```

## 🌐 Deployment to Vercel

### Option 1: Deploy Frontend Only (Recommended for Vercel)

1. **Create a new repository on GitHub**
   ```bash
   # If not already done
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure build settings:
     - **Framework Preset**: Vite
     - **Root Directory**: `./` (leave as default)
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`

3. **Environment Variables**
   Add these environment variables in Vercel dashboard:
   ```
   VITE_API_URL=https://your-backend-url.vercel.app/api
   ```

### Option 2: Deploy Backend Separately

If you want to deploy the backend API separately (recommended for production):

1. **Choose a backend hosting platform:**
   - **Railway** (recommended for Node.js)
   - **Render**
   - **Vercel Serverless Functions**
   - **Heroku**

2. **Backend Environment Variables:**
   For Railway/Render/Vercel backend deployment, set these environment variables:
   ```
   DATABASE_URL=mysql://username:password@host:port/database?ssl-mode=REQUIRED
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   NEXTAUTH_SECRET=your-nextauth-secret
   NEXTAUTH_URL=https://your-backend-domain.com
   NODE_ENV=production
   PORT=5000
   ```

3. **SSL Certificate for TiDB:**
   - **For Railway/Render:** Upload `isrgrootx1.pem` as a file or use TiDB's built-in SSL
   - **For Vercel:** Use TiDB's SSL without custom certificate (Vercel handles SSL automatically)
   - **Alternative:** Use TiDB's connection without SSL certificate for cloud deployments

4. **Update Frontend:**
   After backend deployment, update `VITE_API_URL` in Vercel to point to your backend URL.

### Option 3: Full-Stack Deployment

## 🔧 API Endpoints

### Institutions
- `GET /api/institutions` - Get all institutions

### Medical Tracks
- `GET /api/medical-tracks` - Get all medical tracks

### Applications
- `POST /api/applications` - Submit new application
- `GET /api/applications/:idNumber` - Get application by ID
- `GET /api/all-applications` - Get all applications (admin)

## 📊 Database Schema

### Application Model
- Personal Information (ID, name, contact)
- Education Details (school, GPA, achievements)
- Medical Preferences (tracks, study mode, intake)
- Additional Info (motivation, experience)

### Institution Model
- University/College information
- Country classification

### Medical Track Model
- Program details and descriptions

## 🧪 Testing

### Sample Data
The application includes 100+ sample applications for testing:
- 45% Thai applicants
- 55% International applicants
- Various education levels and GPAs
- Different study modes and intakes

### Running Tests
```bash
# Seed sample data
npm run seed

# Reset and reseed
node --import tsx ./backend/resetSeed.ts
```

## 📁 Project Structure

```
register_/
├── backend/
│   ├── db.ts                 # Database connection
│   ├── mockData.ts          # Sample data seeding
│   ├── resetSeed.ts         # Reset seed script
│   ├── runSeed.ts           # Seed script
│   ├── schema.ts            # Database schema
│   ├── server.ts            # Express server
│   └── routes/
│       └── api.ts           # API routes
├── src/
│   ├── app/
│   │   ├── App.tsx          # Main application
│   │   └── components/      # React components
│   │       ├── ProgressBar.tsx
│   │       ├── Step1BasicInfo.tsx
│   │       ├── Step2Education.tsx
│   │       └── Step3Course.tsx
│   └── styles/              # CSS files
├── prisma/
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
└── package.json
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or issues, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ for medical education applications**