# Dashboard Sample Data Guide

## 📊 Overview

This guide explains the sample data structure created for your registration dashboard. The data includes **4 Thai applicants** and **5 foreign applicants** across different education levels, tracks, and intakes.

## 📁 Sample Data Files

### 1. **mockData.ts** (Backend)
Updated with 9 sample application records integrated with your Prisma schema.

**Location:** `backend/mockData.ts`

**Features:**
- Thai applicants with real Thai names and IDs
- International applicants from USA, UK, Singapore, Japan, South Korea, Vietnam, Indonesia
- Varied education levels (high-school, bachelor, master)
- Multiple study modes (full-time, part-time, hybrid)
- Different intakes (May, Aug, Nov, Jan)
- Realistic GPA, experience, and motivation data

### 2. **sampleDashboardData.ts** (Reference)
Pre-calculated dashboard statistics and formatted data for quick reference.

**Location:** `backend/sampleDashboardData.ts`

**Includes:**
- Summary statistics
- Track selection frequency
- Applicants by country breakdown
- GPA distribution
- Top institutions list
- Simplified application records for tables
- Pre-calculated chart data

## 📈 Sample Data Statistics

| Metric | Value |
|--------|-------|
| Total Applications | 9 |
| Thai Applicants | 4 |
| Foreign Applicants | 5 |
| Male | 5 |
| Female | 4 |
| Average GPA | 3.80 |
| Most Popular Track | Public Health (4 selections) |

## 🌍 Applicants by Country

```
Thailand          ████ 4
United States     █ 1
United Kingdom    █ 1
Singapore         █ 1
Japan             █ 1
South Korea       █ 1
Vietnam           █ 1
Indonesia         █ 1
```

## 📋 Track Preferences

```
Public Health      ████ 4
General Medicine   ███ 3
Pharmacy           ███ 3
Medical Lab        ███ 3
Nursing            ██ 2
Dentistry          ██ 2
```

## 📅 Intake Distribution

| Intake | Count |
|--------|-------|
| May 2026 | 2 |
| August 2026 | 3 |
| November 2026 | 1 |
| January 2027 | 3 |

## 📊 Education Level

| Level | Count |
|-------|-------|
| High School | 1 |
| Bachelor | 6 |
| Master | 2 |

## 🧑‍💼 Sample Applicants

### Thai Applicants

1. **สมชาย สมิทธิ์** (Somchai Smith)
   - ID: 1100123456789
   - Education: Bachelor from Chulalongkorn University
   - GPA: 3.65
   - Tracks: General Medicine, Public Health
   - Intake: August 2026
   - Note: Gold Medal in Thai Science Olympiad

2. **ปิยะ บัณฑิตการ** (Piya Bandhan)
   - ID: 1100987654321
   - Education: Bachelor from Mahidol University
   - GPA: 3.82
   - Tracks: Pharmacy, Medical Lab
   - Intake: January 2027
   - Note: Published 2 research papers

3. **วิภาพร ทองคำ** (Wipaporn Thong)
   - ID: 1101456789012
   - Education: Master from Chiang Mai University
   - GPA: 3.90
   - Tracks: Public Health
   - Intake: May 2026
   - Experience: 3 years in public health ministry

4. **ธีรภัฒ พรหมวัฒน์** (Thiraphat Prom)
   - ID: 1102789123456
   - Education: High School (Bamrung Muang)
   - GPA: 3.55
   - Tracks: General Medicine, Dentistry
   - Intake: August 2026
   - Note: Valedictorian

### International Applicants

1. **Emily Johnson** (USA)
   - Education: Bachelor from Harvard University
   - GPA: 3.95 | MCAT: 520/528
   - Tracks: General Medicine, Public Health
   - Awards: Summa Cum Laude

2. **James Smith** (UK)
   - Education: Bachelor from University of Oxford
   - GPA: 3.88 | GAMSAT: 71
   - Tracks: Nursing, Medical Lab
   - Awards: First Class Honors

3. **Wei Chen Tan** (Singapore)
   - Education: Bachelor from National University of Singapore
   - GPA: 3.78
   - Tracks: Pharmacy, Medical Lab, Public Health
   - Study Mode: Part-time
   - Experience: 2 years pharmaceutical industry

4. **Yuki Yamamoto** (Japan)
   - Education: Bachelor from University of Tokyo
   - GPA: 3.92
   - Tracks: Dentistry, General Medicine
   - Awards: Patent holder

5. **Min-jun Kim** (South Korea)
   - Education: Master from Seoul National University
   - GPA: 3.85
   - Tracks: Public Health
   - Study Mode: Hybrid
   - Experience: 5 years hospital management

Plus applicants from Vietnam and Indonesia!

## 🔄 How to Use This Data

### For Development

1. **Seed the database:**
   ```typescript
   import { seedMockData } from './mockData';
   await seedMockData();
   ```

2. **Reference dashboard statistics:**
   ```typescript
   import { dashboardSampleData } from './sampleDashboardData';
   
   const summary = dashboardSampleData.summary;
   const trackFrequency = dashboardSampleData.trackSelectionFrequency;
   ```

### For Dashboard Components

#### Show Summary Cards
```typescript
const { totalApplications, thaiApplicants, foreignApplicants } = dashboardSampleData.summary;
```

#### Create Charts
```typescript
// Intake timeline
const intakeData = dashboardSampleData.charts.intakeTimeline;

// Track distribution
const trackData = Object.entries(dashboardSampleData.trackSelectionFrequency)
  .map(([track, count]) => ({ track, count }));
```

#### Display Application Table
```typescript
const applications = dashboardSampleData.applications.map(app => ({
  name: app.name,
  country: app.country,
  gpa: app.gpa,
  tracks: app.tracks.join(', '),
  intake: app.intake,
}));
```

## 📊 Dashboard Widgets Suggestions

### 1. KPI Cards
- Total Applications: **9**
- Thai Applicants: **4 (44%)**
- Foreign Applicants: **5 (56%)**
- Average GPA: **3.80**

### 2. Charts

**Intake Timeline** - Line/Bar chart
```
May 2026:       ██ (2)
Aug 2026:       ███ (3)
Nov 2026:       █ (1)
Jan 2027:       ███ (3)
```

**Track Distribution** - Pie/Doughnut chart
```
Public Health:  44%
Gen Medicine:   33%
Pharmacy:       33%
Medical Lab:    33%
Nursing:        22%
Dentistry:      22%
```

**Geographic Distribution** - Map/Bar chart
- Thailand: 4 (44%)
- International: 5 (56%)

**Education Level** - Bar chart
- High School: 1 (11%)
- Bachelor: 6 (67%)
- Master: 2 (22%)

### 3. Data Tables

**Recent Applications** - Show latest submissions
**Top Schools** - Show institutions by applicant count
**Gender Distribution** - By intake or country
**GPA Analysis** - Average by education level or intake

## 🎯 Next Steps

1. ✅ Data is ready! Run seedMockData() to load into database
2. 📊 Create dashboard components using the provided statistics
3. 🎨 Build visualizations for different metrics
4. 📱 Add filtering and sorting functionality
5. 🔍 Implement search and detail views

## 📝 Notes

- All phone numbers and emails are sample data (not functional)
- ID numbers follow realistic formats for different countries
- GPA and exam scores are realistic for the institutions
- You can modify and expand this data as needed
- The data covers diverse educational backgrounds and geographic regions

---

**Last Updated:** April 2, 2026
**Data Version:** 1.0
