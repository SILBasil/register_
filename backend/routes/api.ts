import express from 'express';
import { prisma } from '../db';
import { Intake, Gender, EducationLevel, StudyMode, Prisma } from '@prisma/client';

const router = express.Router();

// Get all institutions
router.get('/institutions', async (req, res) => {
  try {
    const results = await prisma.institution.findMany({
      orderBy: [
        { country: 'asc' },
        { nameEn: 'asc' },
      ],
    });
    res.json(results);
  } catch (error) {
    console.error('Fetch institutions error:', error);
    res.status(500).json({ error: 'Failed to fetch institutions' });
  }
});

// Get all medical tracks
router.get('/medical-tracks', async (req, res) => {
  try {
    const results = await prisma.medicalTrack.findMany({
      orderBy: { nameEn: 'asc' },
    });
    res.json(results);
  } catch (error) {
    console.error('Fetch medical tracks error:', error);
    res.status(500).json({ error: 'Failed to fetch medical tracks' });
  }
});

// Submit application
router.post('/applications', async (req, res) => {
  try {
    console.log('Submit application payload:', JSON.stringify(req.body));
    const {
      idNumber,
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      gender,
      address,
      emergencyContact,
      educationLevel,
      schoolName,
      gpa,
      graduationYear,
      entranceExam,
      specialization,
      achievements,
      studyMode,
      selectedTracks,
      intake,
      motivation,
      experience,
    } = req.body;

    // Convert date string to Date object
    const birthDate = new Date(dateOfBirth);

    const payload = {
      idNumber,
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth: birthDate,
      gender: gender as Gender,
      address,
      emergencyContact,
      educationLevel: (educationLevel === 'high-school' ? 'high_school' : educationLevel) as EducationLevel,
      schoolName,
      gpa: new Prisma.Decimal(gpa),
      graduationYear: parseInt(graduationYear),
      entranceExam,
      specialization,
      achievements,
      studyMode: (studyMode === 'full-time' ? 'full_time' : studyMode === 'part-time' ? 'part_time' : studyMode) as StudyMode,
      selectedTracks: selectedTracks as Prisma.InputJsonValue,
      intake: (intake === 'august-2026' ? 'august_2026' : intake === 'november-2026' ? 'november_2026' : intake === 'may-2026' ? 'may_2026' : intake === 'january-2027' ? 'january_2027' : intake) as Intake,
      motivation,
      experience,
    };

    const result = await prisma.application.upsert({
      where: { idNumber },
      update: payload,
      create: payload,
    });

    res.json({ success: true, id: result.id, updated: true });
  } catch (error: any) {
    console.error('Application submission error:', error);
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      res.status(400).json({ error: 'ID Number already registered' });
    } else {
      res.status(500).json({
        error: 'Failed to submit application',
        details: error.message || String(error),
      });
    }
  }
});

// Get application by ID (for review/edit)
router.get('/applications/:idNumber', async (req, res) => {
  try {
    const { idNumber } = req.params;
    const result = await prisma.application.findUnique({
      where: { idNumber },
    });
    
    if (!result) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.json(result);
  } catch (error) {
    console.error('Fetch application error:', error);
    res.status(500).json({ error: 'Failed to fetch application' });
  }
});

// Get all applications (for dashboard)
router.get('/all-applications', async (req, res) => {
  try {
    const results = await prisma.application.findMany({
      orderBy: { submittedAt: 'desc' },
    });
    res.json(results);
  } catch (error) {
    console.error('Fetch all applications error:', error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

export default router;
