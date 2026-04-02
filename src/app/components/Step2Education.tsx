import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Step2Props {
  formData: any;
  updateFormData: (data: any) => void;
}

interface Institution {
  id: number;
  nameEn: string;
  nameTh: string;
  country: string;
}

export function Step2Education({ formData, updateFormData }: Step2Props) {
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/institutions');
        setInstitutions(response.data);
      } catch (error) {
        console.error('Failed to fetch institutions:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchInstitutions();
  }, []);

  const groupedInstitutions = institutions.reduce((acc, inst) => {
    if (!acc[inst.country]) acc[inst.country] = [];
    acc[inst.country].push(inst);
    return acc;
  }, {} as Record<string, Institution[]>);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-blue-600 mb-2">Step 2: Educational Background</h2>
        <p className="text-gray-500 text-sm">Tell us about your education history</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="educationLevel">Highest Level of Education *</Label>
        <Select
          value={formData.educationLevel || ''}
          onValueChange={(value) => updateFormData({ educationLevel: value })}
        >
          <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
            <SelectValue placeholder="Select your education level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high-school">High School</SelectItem>
            <SelectItem value="diploma">Diploma</SelectItem>
            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
            <SelectItem value="master">Master's Degree</SelectItem>
            <SelectItem value="doctorate">Doctorate</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="schoolName">Institution Name *</Label>
        <Select
          value={formData.schoolName || ''}
          onValueChange={(value) => updateFormData({ schoolName: value })}
        >
          <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
            <SelectValue placeholder={loading ? 'Loading institutions...' : 'Select your school/university'} />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(groupedInstitutions).map(([country, insts]) => (
              <div key={country}>
                <div className="px-2 py-1.5 text-sm font-semibold text-gray-700">{country}</div>
                {insts.map((inst) => (
                  <SelectItem key={inst.id} value={inst.nameEn}>
                    {inst.nameEn}
                  </SelectItem>
                ))}
              </div>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="gpa">GPA (0.00 - 4.00) *</Label>
          <Input
            id="gpa"
            type="number"
            step="0.01"
            min={0}
            max={4}
            value={formData.gpa || ''}
            onChange={(e) => updateFormData({ gpa: e.target.value })}
            placeholder="e.g., 3.50"
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="graduationYear">Graduation Year *</Label>
          <Input
            id="graduationYear"
            type="number"
            value={formData.graduationYear || ''}
            onChange={(e) => updateFormData({ graduationYear: e.target.value })}
            placeholder="e.g., 2024"
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="entranceExam">Entrance Exam Scores / Test Results (Optional)</Label>
        <Input
          id="entranceExam"
          type="text"
          value={formData.entranceExam || ''}
          onChange={(e) => updateFormData({ entranceExam: e.target.value })}
          placeholder="e.g., SAT: 1400, MCAT: 510"
          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="specialization">Field of Study / Major (Optional)</Label>
        <Input
          id="specialization"
          value={formData.specialization || ''}
          onChange={(e) => updateFormData({ specialization: e.target.value })}
          placeholder="e.g., Biology, Life Sciences"
          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="achievements">Academic Achievements & Extracurricular Activities *</Label>
        <Textarea
          id="achievements"
          value={formData.achievements || ''}
          onChange={(e) => updateFormData({ achievements: e.target.value })}
          placeholder="List awards, honors, volunteer work, or notable achievements"
          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
        />
      </div>
    </div>
  );
}
