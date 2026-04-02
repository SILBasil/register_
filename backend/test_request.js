const http = require('http');
const data = JSON.stringify({
  idNumber: '1234567890124',
  firstName: 'Test',
  lastName: 'Tester',
  email: 'test@example.com',
  phone: '+66812345679',
  dateOfBirth: '2000-01-01',
  gender: 'male',
  address: '123 Test St',
  emergencyContact: 'Jane Doe +66898765433',
  educationLevel: 'bachelor',
  schoolName: 'Chulalongkorn University',
  gpa: '3.70',
  graduationYear: '2024',
  entranceExam: 'GAT 280',
  specialization: 'Biology',
  achievements: 'Gold medal',
  studyMode: 'full-time',
  selectedTracks: ['general-medicine', 'nursing'],
  intake: 'august-2026',
  motivation: 'I want to help people',
  experience: 'Hospital volunteering'
});
const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/applications',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = http.request(options, (res) => {
  console.log('Status', res.statusCode);
  let body = '';
  res.on('data', (chunk) => (body += chunk));
  res.on('end', () => {
    console.log('Body', body);
  });
});

req.on('error', (e) => console.error('Request error', e));
req.write(data);
req.end();
