/**
 * Sample Dashboard Data
 * This file contains formatted application data for dashboard visualization
 * Includes 4 Thai applicants and 5 foreign applicants for testing
 */

export const dashboardSampleData = {
  // Summary Statistics
  summary: {
    totalApplications: 9,
    thaiApplicants: 4,
    foreignApplicants: 5,
    genderDistribution: {
      male: 5,
      female: 4,
    },
    educationLevelDistribution: {
      'high-school': 1,
      diploma: 0,
      bachelor: 6,
      master: 2,
      doctorate: 0,
    },
    studyModeDistribution: {
      'full-time': 7,
      'part-time': 1,
      online: 0,
      hybrid: 1,
    },
    intakeDistribution: {
      'may-2026': 2,
      'august-2026': 3,
      'november-2026': 1,
      'january-2027': 3,
    },
  },

  // Track Selection Frequency
  trackSelectionFrequency: {
    'general-medicine': 3,
    dentistry: 2,
    nursing: 2,
    pharmacy: 3,
    'medical-lab': 3,
    'public-health': 4,
  },

  // Applicants by Country
  applicantsByCountry: {
    Thailand: 4,
    'United States': 1,
    'United Kingdom': 1,
    Singapore: 1,
    Japan: 1,
    'South Korea': 1,
    Vietnam: 1,
    Indonesia: 1,
  },

  // GPA Distribution
  gpaDistribution: {
    'Below 3.5': 0,
    '3.5 - 3.6': 2,
    '3.6 - 3.7': 1,
    '3.7 - 3.8': 2,
    '3.8 - 3.9': 2,
    'Above 3.9': 2,
  },

  // By School/Institution
  topInstitutions: [
    { name: 'Chulalongkorn University', count: 1, country: 'Thailand' },
    { name: 'Mahidol University', count: 1, country: 'Thailand' },
    { name: 'Chiang Mai University', count: 1, country: 'Thailand' },
    { name: 'Harvard University', count: 1, country: 'United States' },
    { name: 'University of Oxford', count: 1, country: 'United Kingdom' },
    { name: 'National University of Singapore', count: 1, country: 'Singapore' },
    { name: 'University of Tokyo', count: 1, country: 'Japan' },
    { name: 'Seoul National University', count: 1, country: 'South Korea' },
  ],

  // Detailed Application Records (simplified for tables)
  applications: [
    {
      id: 1,
      name: 'สมชาย สมิทธิ์',
      status: 'new',
      country: 'Thailand',
      educationLevel: 'bachelor',
      gpa: 3.65,
      gender: 'male',
      intake: 'august-2026',
      tracks: ['general-medicine', 'public-health'],
      submittedDate: '2024-01-15',
    },
    {
      id: 2,
      name: 'ปิยะ บัณฑิตการ',
      status: 'processing',
      country: 'Thailand',
      educationLevel: 'bachelor',
      gpa: 3.82,
      gender: 'female',
      intake: 'january-2027',
      tracks: ['pharmacy', 'medical-lab'],
      submittedDate: '2024-01-16',
    },
    {
      id: 3,
      name: 'วิภาพร ทองคำ',
      status: 'processing',
      country: 'Thailand',
      educationLevel: 'master',
      gpa: 3.90,
      gender: 'female',
      intake: 'may-2026',
      tracks: ['public-health'],
      submittedDate: '2024-01-17',
    },
    {
      id: 4,
      name: 'ธีรภัฒ พรหมวัฒน์',
      status: 'new',
      country: 'Thailand',
      educationLevel: 'high-school',
      gpa: 3.55,
      gender: 'male',
      intake: 'august-2026',
      tracks: ['general-medicine', 'dentistry'],
      submittedDate: '2024-01-18',
    },
    {
      id: 5,
      name: 'Emily Johnson',
      status: 'new',
      country: 'United States',
      educationLevel: 'bachelor',
      gpa: 3.95,
      gender: 'female',
      intake: 'january-2027',
      tracks: ['general-medicine', 'public-health'],
      submittedDate: '2024-01-19',
    },
    {
      id: 6,
      name: 'James Smith',
      status: 'processing',
      country: 'United Kingdom',
      educationLevel: 'bachelor',
      gpa: 3.88,
      gender: 'male',
      intake: 'august-2026',
      tracks: ['nursing', 'medical-lab'],
      submittedDate: '2024-01-20',
    },
    {
      id: 7,
      name: 'Wei Chen Tan',
      status: 'new',
      country: 'Singapore',
      educationLevel: 'bachelor',
      gpa: 3.78,
      gender: 'male',
      intake: 'may-2026',
      tracks: ['pharmacy', 'medical-lab', 'public-health'],
      submittedDate: '2024-01-21',
    },
    {
      id: 8,
      name: 'Yuki Yamamoto',
      status: 'new',
      country: 'Japan',
      educationLevel: 'bachelor',
      gpa: 3.92,
      gender: 'female',
      intake: 'january-2027',
      tracks: ['dentistry', 'general-medicine'],
      submittedDate: '2024-01-22',
    },
    {
      id: 9,
      name: 'Min-jun Kim',
      status: 'processing',
      country: 'South Korea',
      educationLevel: 'master',
      gpa: 3.85,
      gender: 'male',
      intake: 'may-2026',
      tracks: ['public-health'],
      submittedDate: '2024-01-23',
    },
  ],

  // Charts Data
  charts: {
    intakeTimeline: [
      { month: 'May 2026', count: 2 },
      { month: 'Aug 2026', count: 3 },
      { month: 'Nov 2026', count: 1 },
      { month: 'Jan 2027', count: 3 },
    ],
    genderByCountry: [
      { country: 'Thailand', male: 2, female: 2 },
      { country: 'USA', male: 0, female: 1 },
      { country: 'UK', male: 1, female: 0 },
      { country: 'Singapore', male: 1, female: 0 },
      { country: 'Japan', male: 0, female: 1 },
      { country: 'Korea', male: 1, female: 0 },
      { country: 'Vietnam', male: 0, female: 1 },
      { country: 'Indonesia', male: 1, female: 0 },
    ],
    educationLevelByIntake: [
      { intake: 'May 2026', 'high-school': 0, bachelor: 1, master: 1 },
      { intake: 'Aug 2026', 'high-school': 1, bachelor: 2, master: 0 },
      { intake: 'Nov 2026', 'high-school': 0, bachelor: 1, master: 0 },
      { intake: 'Jan 2027', 'high-school': 0, bachelor: 2, master: 1 },
    ],
  },
};

/**
 * SQL Query Examples for Dashboard
 * These can be used with Prisma or direct database queries
 */
export const dashboardQueries = {
  // Get applications with summary stats
  applicationStats: `
    SELECT 
      COUNT(*) as totalApplications,
      AVG(gpa) as avgGPA,
      MAX(gpa) as maxGPA,
      MIN(gpa) as minGPA,
      educationLevel,
      gender,
      studyMode,
      intake,
      COUNT(CASE WHEN gender = 'male' THEN 1 END) as maleCount,
      COUNT(CASE WHEN gender = 'female' THEN 1 END) as femaleCount
    FROM applications
    GROUP BY educationLevel, gender, studyMode, intake;
  `,

  // Get track selection frequency
  trackFrequency: `
    SELECT 
      track,
      COUNT(*) as selectionCount
    FROM (
      SELECT JSON_UNQUOTE(JSON_EXTRACT(selectedTracks, '$[*]')) as track
      FROM applications
    ) as tracks
    GROUP BY track
    ORDER BY selectionCount DESC;
  `,

  // Get top schools
  topSchools: `
    SELECT 
      schoolName,
      COUNT(*) as applicationCount,
      AVG(gpa) as avgGPA
    FROM applications
    GROUP BY schoolName
    ORDER BY applicationCount DESC
    LIMIT 10;
  `,
};
