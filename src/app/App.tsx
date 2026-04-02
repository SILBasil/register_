import { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { Step1BasicInfo } from './components/Step1BasicInfo';
import { Step2Education } from './components/Step2Education';
import { Step3Course } from './components/Step3Course';
import { Button } from './components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const totalSteps = 3;

  const updateFormData = (newData: any) => {
    setFormData({ ...formData, ...newData });
  };

  const validateStep = () => {
    setFormError(null);

    if (currentStep === 1) {
      if (!formData.idNumber || String(formData.idNumber).trim().length !== 13) {
        setFormError('ID Number ต้องเป็นตัวเลข 13 หลัก');
        return false;
      }
      if (!/^\d+$/.test(String(formData.idNumber))) {
        setFormError('ID Number ต้องเป็นเลขเท่านั้น');
        return false;
      }
      if (!formData.firstName || !formData.lastName) {
        setFormError('กรุณากรอกชื่อและนามสกุล');
        return false;
      }
      if (!formData.email || !/[\w.+-]+@[\w-]+\.[\w.-]+/.test(formData.email)) {
        setFormError('กรุณากรอก Email ให้ถูกต้อง');
        return false;
      }
      if (!formData.phone || !/^\+?\d{9,15}$/.test(formData.phone)) {
        setFormError('กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง');
        return false;
      }
      if (!formData.dateOfBirth || !formData.gender || !formData.address) {
        setFormError('กรุณากรอกทุกช่องที่มีเครื่องหมาย *');
        return false;
      }
      return true;
    }
    if (currentStep === 2) {
      return (
        formData.educationLevel &&
        formData.schoolName &&
        formData.gpa &&
        formData.graduationYear &&
        formData.achievements
      );
    }
    if (currentStep === 3) {
      return (
        formData.studyMode &&
        formData.selectedTracks?.length > 0 &&
        formData.intake &&
        formData.motivation
      );
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) {
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form
      submitApplication();
    }
  };

  const submitApplication = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Application submitted successfully');
        setIsSubmitted(true);
      } else {
        const errorData = await response.text();
        let message = 'Failed to submit application';
        try {
          const parsed = JSON.parse(errorData);
          message = parsed.error || parsed.details || message;
        } catch {
          message = errorData;
        }

        if (response.status === 400 && message.includes('ID Number already registered')) {
          setFormError('ID Number นี้ถูกใช้แล้ว ระบบจะอัปเดตข้อมูลให้โดยอัตโนมัติ');
        } else {
          setFormError(`Error ${response.status}: ${message}`);
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-12 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-20 h-20 text-green-500" />
          </div>
          <h1 className="text-blue-600 mb-4">Application Submitted Successfully!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your application. We will review your information and get back to you within 3-5 business days.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
              setFormData({});
            }}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Submit Another Application
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8">
          <h1 className="text-white mb-2">Medical Program Application Form</h1>
          <p className="text-blue-100 text-sm">
            Comprehensive Application for International Medical Programs
          </p>
        </div>

        {/* Progress Bar */}
        <div className="px-8 pt-8 pb-4 bg-gray-50">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>

        {/* Form Content */}
        <div className="p-8">
          {formError && (
            <div className="mb-4 rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700">
              {formError}
            </div>
          )}
          {currentStep === 1 && (
            <Step1BasicInfo formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 2 && (
            <Step2Education formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 3 && (
            <Step3Course formData={formData} updateFormData={updateFormData} />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="px-8 pb-8 flex justify-between items-center border-t pt-6 mt-6">
          <Button
            onClick={handleBack}
            variant="outline"
            disabled={currentStep === 1}
            className="border-gray-300 hover:bg-gray-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="text-sm text-gray-500">
            Step {currentStep} of {totalSteps}
          </div>

          <Button
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-600"
          >
            {currentStep === totalSteps ? (
              <>
                Submit Application
                <CheckCircle2 className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
