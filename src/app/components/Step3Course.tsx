import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Textarea } from './ui/textarea';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Step3Props {
  formData: any;
  updateFormData: (data: any) => void;
}

interface MedicalTrack {
  id: number;
  trackId: string;
  nameEn: string;
  nameTh: string;
  descriptionEn: string;
  descriptionTh: string;
}

export function Step3Course({ formData, updateFormData }: Step3Props) {
  const [tracks, setTracks] = useState<MedicalTrack[]>([]);
  const [loading, setLoading] = useState(true);
  const selectedTracks = formData.selectedTracks || [];

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/medical-tracks');
        setTracks(response.data);
      } catch (error) {
        console.error('Failed to fetch medical tracks:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTracks();
  }, []);

  const toggleTrack = (trackId: string) => {
    const updated = selectedTracks.includes(trackId)
      ? selectedTracks.filter((id: string) => id !== trackId)
      : [...selectedTracks, trackId];
    updateFormData({ selectedTracks: updated });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-blue-600 mb-2">Step 3: Medical Program Interest</h2>
        <p className="text-gray-500 text-sm">Select your preferred medical tracks and study preferences</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="studyMode">Preferred Study Mode *</Label>
        <Select
          value={formData.studyMode || ''}
          onValueChange={(value) => updateFormData({ studyMode: value })}
        >
          <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
            <SelectValue placeholder="Select your preferred study mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-time">Full-time (On Campus)</SelectItem>
            <SelectItem value="part-time">Part-time (On Campus)</SelectItem>
            <SelectItem value="online">Online Learning</SelectItem>
            <SelectItem value="hybrid">Hybrid (Online + On Campus)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <Label>Medical Programs of Interest (Select at least 1) *</Label>
        {loading ? (
          <p className="text-gray-500">Loading programs...</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {tracks.map((track) => (
              <div
                key={track.id}
                className={`border rounded-lg p-4 transition-all duration-200 cursor-pointer hover:shadow-md ${
                  selectedTracks.includes(track.trackId)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white'
                }`}
                onClick={() => toggleTrack(track.trackId)}
              >
                <div className="flex items-start gap-3">
                  <Checkbox
                    id={track.trackId}
                    checked={selectedTracks.includes(track.trackId)}
                    onCheckedChange={() => toggleTrack(track.trackId)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label htmlFor={track.trackId} className="font-medium text-gray-900 cursor-pointer">
                      {track.nameEn}
                    </label>
                    <p className="text-sm text-gray-500 mt-1">{track.descriptionEn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="intake">Preferred Intake Semester *</Label>
        <Select
          value={formData.intake || ''}
          onValueChange={(value) => updateFormData({ intake: value })}
        >
          <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
            <SelectValue placeholder="Select preferred intake" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="may-2026">May 2026</SelectItem>
            <SelectItem value="august-2026">August 2026</SelectItem>
            <SelectItem value="november-2026">November 2026</SelectItem>
            <SelectItem value="january-2027">January 2027</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="motivation">Why do you want to pursue a medical career? *</Label>
        <Textarea
          id="motivation"
          value={formData.motivation || ''}
          onChange={(e) => updateFormData({ motivation: e.target.value })}
          placeholder="Tell us 2-3 reasons why you're interested in medicine and why you're a good fit"
          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience">Relevant Clinical or Volunteer Experience (Optional)</Label>
        <Textarea
          id="experience"
          value={formData.experience || ''}
          onChange={(e) => updateFormData({ experience: e.target.value })}
          placeholder="e.g., Hospital volunteer, healthcare internship, medical shadowing"
          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
        />
      </div>
    </div>
  );
}
