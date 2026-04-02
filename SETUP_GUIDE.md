# Medical Program Application Form - Complete Setup Guide

## ✅ Project Status: Fully Operational

The application is now **live** with full TiDB integration and international support.

---

## 🎯 What's Been Configured

### 1. **Backend (Node.js + Express)**
- ✅ TiDB database connection with SSL certificate
- ✅ Automatic schema initialization
- ✅ Mock data seeding (Thai + International institutions)
- ✅ RESTful API endpoints

### 2. **Database Schema**
Three main tables:
- **applications** - Stores student registrations
- **institutions** - Database of schools/universities (Thai + International)
- **medical_tracks** - Medical program offerings

### 3. **Frontend (React + Vite)**
- ✅ Fully translated to English (supporting English-speaking international students)
- ✅ 3-step registration form with validation
- ✅ API-integrated dropdowns (institutions, medical programs)
- ✅ Form data submission to TiDB via API

---

## 🚀 Running the Application

### Option 1: Development Mode (Both frontend & backend)
```bash
npm run dev
```
This will start:
- **Backend API**: http://localhost:5000
- **Frontend**: http://localhost:5175 (or next available port)

### Option 2: Backend Only
```bash
npm run server
```
Runs API server on http://localhost:5000

### Option 3: Frontend Only  
```bash
npm run build  # Build production
vite          # Dev mode
```

---

## 📋 API Endpoints

### GET /api/institutions
Returns all institutions (grouped by country)
```json
[
  {
    "id": 1,
    "nameEn": "Chulalongkorn University",
    "nameTh": "จุฬาลงกรณ์มหาวิทยาลัย",
    "country": "Thailand"
  }
]
```

### GET /api/medical-tracks
Returns all medical programs available
```json
[
  {
    "id": 1,
    "trackId": "general-medicine",
    "nameEn": "General Medicine",
    "nameTh": "การแพทย์ทั่วไป",
    "descriptionEn": "Core medical curriculum",
    "descriptionTh": "หลักสูตรแพทยศาสตร์ทั่วไป"
  }
]
```

### POST /api/applications
Submit a new application
```json
{
  "idNumber": "1234567890123",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+66812345678",
  "dateOfBirth": "2000-01-15",
  "gender": "male",
  "address": "123 Main Street",
  "emergencyContact": "Jane Doe +66898765432",
  "educationLevel": "bachelor",
  "schoolName": "Chulalongkorn University",
  "gpa": "3.50",
  "graduationYear": "2024",
  "entranceExam": "SAT: 1400",
  "specialization": "Biology",
  "achievements": "National Science Olympiad Gold Medal",
  "studyMode": "full-time",
  "selectedTracks": ["general-medicine", "nursing"],
  "intake": "august-2026",
  "motivation": "Passion for healthcare and helping others",
  "experience": "Hospital volunteer experience"
}
```

Response:
```json
{
  "success": true,
  "id": 1
}
```

### GET /api/applications/:idNumber
Retrieve a previously submitted application

---

## 📊 TiDB Configuration

Connected to:
- **Host**: gateway01.ap-southeast-1.prod.aws.tidbcloud.com
- **Port**: 4000
- **Database**: vector_db
- **SSL**: Enabled (certificate: isrgrootx1.pem)

Environment variables in `.env`:
```env
DB_HOST=gateway01.ap-southeast-1.prod.aws.tidbcloud.com
DB_PORT=4000
DB_NAME=vector_db
DB_USER=LmvdJgfoF7haiWk.root
DB_PASSWORD=eD8iNcb9lffwcvYj
DB_SSL_CA=./isrgrootx1.pem
PORT=5000
```

---

## 🌍 Supported Institutions (Mock Data)

### Thailand
- Chulalongkorn University
- Mahidol University
- Chiang Mai University
- Khon Kaen University
- Songkhla Nakarin University

### International
- Harvard University (USA)
- University of Oxford (UK)
- National University of Singapore
- University of Tokyo (Japan)
- Seoul National University (South Korea)

---

## 🏥 Medical Programs Available

1. **General Medicine** - Core medical curriculum
2. **Dentistry** - Dental and oral health
3. **Nursing** - Patient care and nursing
4. **Pharmacy** - Pharmaceutical sciences
5. **Medical Laboratory Technology** - Clinical diagnostics
6. **Public Health** - Health promotion and prevention

---

## ✨ Form Structure

### Step 1: Personal Information
- ID Number
- First & Last Name
- Email & Phone
- Date of Birth
- Gender
- Current Address
- Emergency Contact

### Step 2: Educational Background
- Education Level
- Institution Name (dropdown with 15+ options)
- GPA (0.00 - 4.00)
- Graduation Year
- Entrance Exam Scores (Optional)
- Field of Study (Optional)
- Academic Achievements

### Step 3: Medical Program Interest
- Preferred Study Mode
- Medical Programs (multi-select from 6 options)
- Preferred Intake Semester
- Motivation for Medical Career
- Clinical/Volunteer Experience (Optional)

---

## 🔒 Validation

- All fields marked with `*` are required
- Email format validation
- GPA range: 0.00 - 4.00
- ID Number uniqueness check
- At least 1 medical program selection required

---

## 📝 Database Tables Schema

### applications
```sql
CREATE TABLE applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  idNumber VARCHAR(20) UNIQUE NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  dateOfBirth DATE NOT NULL,
  gender ENUM('male', 'female', 'other', 'prefer-not-to-say'),
  address TEXT NOT NULL,
  emergencyContact VARCHAR(200),
  educationLevel ENUM(...),
  schoolName VARCHAR(200) NOT NULL,
  gpa DECIMAL(3, 2) NOT NULL,
  graduationYear INT NOT NULL,
  entranceExam VARCHAR(200),
  specialization VARCHAR(100),
  achievements TEXT NOT NULL,
  studyMode ENUM('full-time', 'part-time', 'online', 'hybrid'),
  selectedTracks JSON NOT NULL,
  intake ENUM('may-2026', 'august-2026', 'november-2026', 'january-2027'),
  motivation TEXT NOT NULL,
  experience TEXT,
  submittedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
```

---

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express + tsx
- **Database**: TiDB (MySQL-compatible)
- **Styling**: Tailwind CSS + Radix UI
- **HTTP Client**: Axios
- **Concurrency**: concurrently (dev mode)

---

## 📦 Dependencies Added

- `express` - Web framework
- `mysql2` - TiDB driver
- `cors` - Cross-origin support
- `dotenv` - Environment management
- `axios` - HTTP client (frontend)
- `tsx` - TypeScript execution (dev)
- `concurrently` - Run multiple processes (dev)

---

## 🔧 Troubleshooting

### Port Already in Use
If port 5000 or 5173 is busy:
- Application automatically tries next port
- Frontend will show actual port on startup

### TiDB Connection Error
1. Verify `.env` file has correct credentials
2. Check `isrgrootx1.pem` exists in project root
3. Ensure network access to TiDB cloud

### API Not Responding
1. Verify backend server is running on localhost:5000
2. Check CORS configuration
3. Verify database tables were created

---

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Full responsive design
- Mobile-friendly form layout

---

## 🎓 Language Support

- **UI**: English (for international students)
- **Data**: Thai + English labels in database
- **Easy to extend**: Add more languages to institutions/tracks

---

## 📞 Support

For issues or questions:
1. Check terminal output for specific error messages
2. Verify all environment variables in `.env`
3. Ensure TiDB credentials are correct
4. Check that port 5000 and development port are available

---

**Last Updated**: April 1, 2026  
**Status**: ✅ Production Ready
