import { prisma } from './db';
import { Prisma, Gender, EducationLevel, StudyMode, Intake } from '@prisma/client';

const mockInstitutions = [
  // Thai Institutions
  { nameEn: 'Chulalongkorn University', nameTh: 'จุฬาลงกรณ์มหาวิทยาลัย', country: 'Thailand' },
  { nameEn: 'Mahidol University', nameTh: 'มหาวิทยาลัยมหิดล', country: 'Thailand' },
  { nameEn: 'Chiang Mai University', nameTh: 'มหาวิทยาลัยเชียงใหม่', country: 'Thailand' },
  { nameEn: 'Khon Kaen University', nameTh: 'มหาวิทยาลัยขอนแก่น', country: 'Thailand' },
  { nameEn: 'Songkhla Nakarin University', nameTh: 'มหาวิทยาลัยสงขลานครินทร์', country: 'Thailand' },
  
  // International Institutions
  { nameEn: 'Harvard University', nameTh: 'มหาวิทยาลัยฮาร์วาร์ด', country: 'United States' },
  { nameEn: 'University of Oxford', nameTh: 'มหาวิทยาลัยอ็อกซ์ฟอร์ด', country: 'United Kingdom' },
  { nameEn: 'National University of Singapore', nameTh: 'มหาวิทยาลัยแห่งชาติสิงคโปร์', country: 'Singapore' },
  { nameEn: 'University of Tokyo', nameTh: 'มหาวิทยาลัยโตเกียว', country: 'Japan' },
  { nameEn: 'Seoul National University', nameTh: 'มหาวิทยาลัยแห่งชาติโซล', country: 'South Korea' },
];

const mockMedicalTracks = [
  {
    trackId: 'general-medicine',
    nameEn: 'General Medicine',
    nameTh: 'การแพทย์ทั่วไป',
    descriptionEn: 'Core medical curriculum',
    descriptionTh: 'หลักสูตรแพทยศาสตร์ทั่วไป',
  },
  {
    trackId: 'dentistry',
    nameEn: 'Dentistry',
    nameTh: 'ทันตแพทยศาสตร์',
    descriptionEn: 'Dental and oral health',
    descriptionTh: 'ฟันและช่องปาก',
  },
  {
    trackId: 'nursing',
    nameEn: 'Nursing',
    nameTh: 'พยาบาลศาสตร์',
    descriptionEn: 'Patient care and nursing',
    descriptionTh: 'การดูแลผู้ป่วยและการพยาบาล',
  },
  {
    trackId: 'pharmacy',
    nameEn: 'Pharmacy',
    nameTh: 'เภสัชศาสตร์',
    descriptionEn: 'Pharmaceutical sciences',
    descriptionTh: 'ยาและเภสัชกรรม',
  },
  {
    trackId: 'medical-lab',
    nameEn: 'Medical Laboratory Technology',
    nameTh: 'เทคนิคการแพทย์',
    descriptionEn: 'Clinical laboratory diagnostics',
    descriptionTh: 'ห้องปฏิบัติการคลินิกและวินิจฉัย',
  },
  {
    trackId: 'public-health',
    nameEn: 'Public Health',
    nameTh: 'สาธารณสุขศาสตร์',
    descriptionEn: 'Health promotion and prevention',
    descriptionTh: 'ส่งเสริมสุขภาพและป้องกันโรค',
  },
];

// Sample Application Data - Thai and Foreign Applicants
const mockApplications = [
  // Thai Applicants
  {
    idNumber: '1100123456789',
    firstName: 'สมชาย',
    lastName: 'สมิทธิ์',
    email: 'somchai.smith@example.com',
    phone: '+66812345678',
    dateOfBirth: new Date('1999-03-15'),
    gender: 'male',
    address: '123 ซอยรัตนโกสินทร์ กรุงเทพ 10110',
    emergencyContact: '081-234-5678 สมหญิง สมิทธิ์ (แม่)',
    educationLevel: 'bachelor',
    schoolName: 'Chulalongkorn University',
    gpa: 3.65,
    graduationYear: 2024,
    entranceExam: 'TOEFL 95/120',
    specialization: 'Biology',
    achievements: 'Gold Medal at Thai Science Olympiad 2022, Scholarship recipient',
    studyMode: 'full-time',
    selectedTracks: ['general-medicine'],
    intake: 'august-2026',
    motivation: 'I want to serve rural communities through medical practice',
    experience: '6 months volunteer at Ramathibodi Hospital',
  },
  {
    idNumber: '1100987654321',
    firstName: 'ปิยะ',
    lastName: 'บัณฑิตการ',
    email: 'piya.bandhan@example.com',
    phone: '+66898765432',
    dateOfBirth: new Date('2000-07-22'),
    gender: 'female',
    address: '456 ถนนเพชรบุรี เขตราชเทวี กรุงเทพ 10400',
    emergencyContact: '086-543-2109 ค่ายพยัญ บัณฑิตการ (บิดา)',
    educationLevel: 'bachelor',
    schoolName: 'Mahidol University',
    gpa: 3.82,
    graduationYear: 2023,
    entranceExam: 'IELTS 7.5/9',
    specialization: 'Chemistry',
    achievements: 'Published 2 research papers, Dean\'s List',
    studyMode: 'full-time',
    selectedTracks: ['general-medicine'],
    intake: 'january-2027',
    motivation: 'Research in pharmaceutical development',
    experience: 'Internship at Thai pharmaceutical company',
  },
  {
    idNumber: '1101456789012',
    firstName: 'วิภาพร',
    lastName: 'ทองคำ',
    email: 'wipaporn.thong@example.com',
    phone: '+66842131415',
    dateOfBirth: new Date('1998-11-08'),
    gender: 'female',
    address: '789 หมู่11 ต.ลำลูกกา จ.ปทุมธานี 12130',
    emergencyContact: '087-654-3210 ศรีสุด ทองคำ (แม่)',
    educationLevel: 'master',
    schoolName: 'Chiang Mai University',
    gpa: 3.90,
    graduationYear: 2022,
    entranceExam: 'GRE 320+5',
    specialization: 'Epidemiology',
    achievements: 'Master\'s with Distinction',
    studyMode: 'full-time',
    selectedTracks: ['general-medicine'],
    intake: 'may-2026',
    motivation: 'Contribute to disease prevention programs',
    experience: '3 years in public health ministry',
  },
  {
    idNumber: '1102789123456',
    firstName: 'ธีรภัฒ',
    lastName: 'พรหมวัฒน์',
    email: 'thiraphat.prom@example.com',
    phone: '+66851234567',
    dateOfBirth: new Date('2001-01-20'),
    gender: 'male',
    address: '321 ชั้น 15 อาคารเศรษฐการ กรุงเทพ 10100',
    emergencyContact: '083-456-7890 สมพร พรหมวัฒน์ (พ่อ)',
    educationLevel: 'high-school',
    schoolName: 'Bamrung Muang School',
    gpa: 3.55,
    graduationYear: 2024,
    entranceExam: 'TOEFL 88/120',
    specialization: 'Science',
    achievements: 'Valedictorian, Math competition winner',
    studyMode: 'full-time',
    selectedTracks: ['general-medicine'],
    intake: 'august-2026',
    motivation: 'Become a dentist to help underserved areas',
    experience: 'Volunteer at dental clinic',
  },

  // Foreign Applicants
  {
    idNumber: 'USA001987654',
    firstName: 'Emily',
    lastName: 'Johnson',
    email: 'emily.johnson@example.com',
    phone: '+1-617-555-0123',
    dateOfBirth: new Date('1998-05-10'),
    gender: 'female',
    address: '42 Harvard Square, Boston, MA 02138, USA',
    emergencyContact: '+1-617-555-0124 Robert Johnson (Father)',
    educationLevel: 'bachelor',
    schoolName: 'Harvard University',
    gpa: 3.95,
    graduationYear: 2023,
    entranceExam: 'MCAT 520/528',
    specialization: 'Pre-Med',
    achievements: 'Summa Cum Laude, National Medical Honor Society',
    studyMode: 'full-time',
    selectedTracks: ['general-medicine'],
    intake: 'january-2027',
    motivation: 'Global health advocacy and tropical medicine',
    experience: '2 years medical research, 6 months abroad',
  },
  {
    idNumber: 'GBR002345678',
    firstName: 'James',
    lastName: 'Smith',
    email: 'james.smith@example.co.uk',
    phone: '+44-1865-123456',
    dateOfBirth: new Date('1999-09-15'),
    gender: 'male',
    address: 'Radcliffe Camera, Oxford, UK OX1 2JF',
    emergencyContact: '+44-1865-123457 Sarah Smith (Mother)',
    educationLevel: 'bachelor',
    schoolName: 'University of Oxford',
    gpa: 3.88,
    graduationYear: 2023,
    entranceExam: 'GAMSAT 71',
    specialization: 'Physiology',
    achievements: 'First Class Honors, Research Publication',
    studyMode: 'full-time',
    selectedTracks: ['general-medicine'],
    intake: 'august-2026',
    motivation: 'Practice medicine in Asia',
    experience: '18 months in NHS',
  },
  {
    idNumber: 'SGP003456789',
    firstName: 'Wei Chen',
    lastName: 'Tan',
    email: 'weichen.tan@example.sg',
    phone: '+65-6123-4567',
    dateOfBirth: new Date('2000-02-28'),
    gender: 'male',
    address: '50 Nanyang Avenue, Singapore 639798',
    emergencyContact: '+65-6123-4568 Marie Tan (Mother)',
    educationLevel: 'bachelor',
    schoolName: 'National University of Singapore',
    gpa: 3.78,
    graduationYear: 2024,
    entranceExam: 'TOEFL 105/120',
    specialization: 'Biomedical Science',
    achievements: 'Dean\'s List, Innovation Grant Winner',
    studyMode: 'part-time',
    selectedTracks: ['general-medicine'],
    intake: 'may-2026',
    motivation: 'Advance pharmaceutical research',
    experience: '2 years pharmaceutical industry',
  },
  {
    idNumber: 'JPN004567890',
    firstName: 'Yuki',
    lastName: 'Yamamoto',
    email: 'yuki.yamamoto@example.jp',
    phone: '+81-3-1234-5678',
    dateOfBirth: new Date('1999-11-12'),
    gender: 'female',
    address: '1-chōme-1-1 Hongo, Bunkyo City, Tokyo 113-0033, Japan',
    emergencyContact: '+81-3-1234-5679 Hiroshi Yamamoto (Father)',
    educationLevel: 'bachelor',
    schoolName: 'University of Tokyo',
    gpa: 3.92,
    graduationYear: 2024,
    entranceExam: 'TOEFL 110/120',
    specialization: 'Dental Technology',
    achievements: 'Honors graduate, Patent holder',
    studyMode: 'full-time',
    selectedTracks: ['general-medicine'],
    intake: 'january-2027',
    motivation: 'Collaborate in international dental research',
    experience: '1 year dental clinic experience',
  },
  {
    idNumber: 'KOR005678901',
    firstName: 'Min-jun',
    lastName: 'Kim',
    email: 'minjun.kim@example.kr',
    phone: '+82-2-123-4567',
    dateOfBirth: new Date('1998-08-05'),
    gender: 'male',
    address: '1 Gwanak-ro, Gwanak-gu, Seoul 08826, South Korea',
    emergencyContact: '+82-2-123-4568 Ji-woo Kim (Father)',
    educationLevel: 'master',
    schoolName: 'Seoul National University',
    gpa: 3.85,
    graduationYear: 2023,
    entranceExam: 'TOEFL 108/120',
    specialization: 'Medical Administration',
    achievements: 'Master\'s with High Distinction',
    studyMode: 'hybrid',
    selectedTracks: ['general-medicine'],
    intake: 'may-2026',
    motivation: 'Healthcare system improvement',
    experience: '5 years hospital management',
  },
  {
    idNumber: 'VNM006789012',
    firstName: 'Linh',
    lastName: 'Nguyen',
    email: 'linh.nguyen@example.vn',
    phone: '+84-24-3333-0000',
    dateOfBirth: new Date('2000-06-18'),
    gender: 'female',
    address: 'Đại Cồ Việt, Hai Bà Trưng, Hà Nội 100000, Vietnam',
    emergencyContact: '+84-24-3333-0001 Tuan Nguyen (Father)',
    educationLevel: 'bachelor',
    schoolName: 'Vietnam National University',
    gpa: 3.68,
    graduationYear: 2024,
    entranceExam: 'IELTS 7.0/9',
    specialization: 'Nursing',
    achievements: 'School Nurse of the Year nominee',
    studyMode: 'full-time',
    selectedTracks: ['general-medicine'],
    intake: 'august-2026',
    motivation: 'Improve nursing standards in Southeast Asia',
    experience: '2 years nursing practice',
  },
  {
    idNumber: 'IDN007890123',
    firstName: 'Budi',
    lastName: 'Santoso',
    email: 'budi.santoso@example.id',
    phone: '+62-21-1234-5678',
    dateOfBirth: new Date('1999-04-22'),
    gender: 'male',
    address: 'Jl. Salemba Raya No. 4, Jakarta Pusat 10440, Indonesia',
    emergencyContact: '+62-21-1234-5679 Siti Santoso (Mother)',
    educationLevel: 'bachelor',
    schoolName: 'University of Indonesia',
    gpa: 3.72,
    graduationYear: 2023,
    entranceExam: 'TOEFL 96/120',
    specialization: 'Pharmacology',
    achievements: 'Won national research competition',
    studyMode: 'full-time',
    selectedTracks: ['general-medicine'],
    intake: 'november-2026',
    motivation: 'Pharmaceutical innovation in developing nations',
    experience: '1.5 years pharmaceutical research',
  },
];

// Helper for random data
function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function randomDate(startYear: number, endYear: number): Date {
  const start = new Date(startYear, 0, 1).getTime();
  const end = new Date(endYear, 11, 31).getTime();
  const timestamp = start + Math.random() * (end - start);
  return new Date(timestamp);
}

function zeroPad(num: number, size: number) {
  return num.toString().padStart(size, '0');
}

function generateMockApplications(count: number, existingIdOffset: number = 0) {
  const thaiFirstNames = ['สมชาย', 'ปิยะ', 'วิภาพร', 'ธีรภัฒ', 'ณัฐ', 'มุนินทร์', 'อิฐ', 'ชลธิชา', 'กาญจน์', 'ณิชา'];
  const thaiLastNames = ['สมิทธิ์', 'บัณฑิตการ', 'ทองคำ', 'พรหมวัฒน์', 'จันทร์แก้ว', 'สายทอง', 'อริยะ', 'สุนทร', 'ขจร', 'สุริยา'];
  const foreignFirstNames = ['Emily', 'James', 'Wei', 'Yuki', 'Min-jun', 'Linh', 'Budi', 'Ariel', 'Noah', 'Sofia'];
  const foreignLastNames = ['Johnson', 'Smith', 'Tan', 'Yamamoto', 'Kim', 'Nguyen', 'Santoso', 'Chen', 'Lee', 'Brown'];
  const countries = ['Thailand', 'United States', 'United Kingdom', 'Singapore', 'Japan', 'South Korea', 'Vietnam', 'Indonesia'];
  const schools = ['Chulalongkorn University', 'Mahidol University', 'Chiang Mai University', 'Khon Kaen University', 'Songkhla Nakarin University', 'Harvard University', 'University of Oxford', 'National University of Singapore', 'University of Tokyo', 'Seoul National University'];
  const intakes = ['may_2026', 'august_2026', 'november_2026', 'january_2027'];
  const studyModes = ['full_time', 'part_time', 'online', 'hybrid'];
  const educationLevels = ['high_school', 'bachelor', 'master'];
  const tracksList = ['general-medicine', 'dentistry', 'nursing', 'pharmacy', 'medical-lab', 'public-health'];

  const applications: Prisma.ApplicationCreateManyInput[] = [];

  for (let i = 0; i < count; i++) {
    const isThai = Math.random() < 0.45;
    const firstName = isThai ? getRandomElement(thaiFirstNames) : getRandomElement(foreignFirstNames);
    const lastName = isThai ? getRandomElement(thaiLastNames) : getRandomElement(foreignLastNames);
    const country = isThai ? 'Thailand' : getRandomElement(countries.filter(c => c !== 'Thailand'));
    const schoolName = isThai ? getRandomElement(schools.slice(0, 5)) : getRandomElement(schools.slice(5));
    const educationLevel = getRandomElement(educationLevels);

    const tracks: string[] = [];
    const trackCount = Math.floor(Math.random() * 3) + 1;
    while (tracks.length < trackCount) {
      const track = getRandomElement(tracksList);
      if (!tracks.includes(track)) tracks.push(track);
    }

    const gpa = (Math.random() * 0.75 + 3.2).toFixed(2);
    const year = Math.floor(Math.random() * 6) + 2018;

    const idNumber = isThai
      ? '1' + zeroPad(existingIdOffset + i + 1, 12)
      : `F-${zeroPad(existingIdOffset + i + 1, 10)}`;

    applications.push({
      idNumber,
      firstName,
      lastName,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
      phone: isThai ? `+668${zeroPad(Math.floor(Math.random() * 100000000), 8)}` : `+${zeroPad(Math.floor(Math.random() * 90) + 1, 2)}-${zeroPad(Math.floor(Math.random() * 1000000000), 9)}`,
      dateOfBirth: randomDate(1995, 2003),
      gender: getRandomElement(['male', 'female']) as Gender,
      address: isThai ? `${Math.floor(Math.random() * 500)} ถนนสุขุมวิท กรุงเทพ 10110` : `${Math.floor(Math.random() * 200)} Main St, ${country}`,
      emergencyContact: isThai ? `08${zeroPad(Math.floor(Math.random() * 100000000), 8)} คุณพ่อ` : `+1234567890 Contact`,
      educationLevel: educationLevel as EducationLevel,
      schoolName,
      gpa: parseFloat(gpa),
      graduationYear: year,
      entranceExam: isThai ? 'TOEFL 90+' : 'TOEFL 100+',

      specialization: 'General Science',
      achievements: 'Outstanding student award',
      studyMode: getRandomElement(studyModes) as StudyMode,
      selectedTracks: tracks,
      intake: getRandomElement(intakes) as Intake,
      motivation: 'I want to improve public health and gain clinical experience.',
      experience: 'Volunteer at hospital or clinic',
    });
  }

  return applications;
}


export async function seedMockData() {
  try {
    // Check if data already exists to avoid redundant seeding
    const institutionCount = await prisma.institution.count();
    const trackCount = await prisma.medicalTrack.count();
    const applicationCount = await prisma.application.count();

    if (institutionCount === 0) {
      console.log('🌱 Seeding institutions...');
      await prisma.institution.createMany({
        data: mockInstitutions,
        skipDuplicates: true,
      });
    } else {
      console.log('ℹ Institutions already exist, skip institutions seeding.');
    }

    if (trackCount === 0) {
      console.log('🌱 Seeding medical tracks...');
      await prisma.medicalTrack.createMany({
        data: mockMedicalTracks,
        skipDuplicates: true,
      });
    } else {
      console.log('ℹ Medical tracks already exist, skip tracks seeding.');
    }

    if (applicationCount === 0) {
      console.log('🌱 Seeding sample applications...');
      await prisma.application.createMany({
        data: mockApplications as Prisma.ApplicationCreateManyInput[],
        skipDuplicates: true,
      });
    } else {
      console.log('ℹ Existing applications detected:', applicationCount);
    }

    if (applicationCount < 100) {
      const needed = 100 - applicationCount;
      console.log(`🌱 Generating ${needed} additional mock applications to reach 100...`);
      const generatedApps = generateMockApplications(needed, applicationCount);
      await prisma.application.createMany({
        data: generatedApps as Prisma.ApplicationCreateManyInput[],
        skipDuplicates: true,
      });
      console.log(`✅ Added ${needed} generated applications to reach 100 total.`);
    } else {
      console.log('✅ Application count is already 100 or more, no additional generation needed.');
    }

    console.log('✅ Mock data seeded successfully via Prisma');
    return true;
  } catch (error) {
    console.error('❌ Error seeding mock data:', error);
    throw error;
  }
}
