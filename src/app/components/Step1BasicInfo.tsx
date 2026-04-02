import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface Step1Props {
  formData: any;
  updateFormData: (data: any) => void;
}

export function Step1BasicInfo({ formData, updateFormData }: Step1Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-blue-600 mb-2">Step 1: Personal Information</h2>
        <p className="text-gray-500 text-sm">Please provide your personal details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="idNumber">ID Number *</Label>
          <Input
            id="idNumber"
            type="text"
            inputMode="numeric"
            value={formData.idNumber || ''}
            onChange={(e) => updateFormData({ idNumber: e.target.value })}
            placeholder="Enter your ID number"
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth || ''}
            onChange={(e) => updateFormData({ dateOfBirth: e.target.value })}
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={formData.firstName || ''}
            onChange={(e) => updateFormData({ firstName: e.target.value })}
            placeholder="Enter your first name"
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={formData.lastName || ''}
            onChange={(e) => updateFormData({ lastName: e.target.value })}
            placeholder="Enter your last name"
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email || ''}
          onChange={(e) => updateFormData({ email: e.target.value })}
          placeholder="your.email@example.com"
          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone || ''}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            placeholder="+66 XX XXX XXXX"
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">Gender *</Label>
          <Select
            value={formData.gender || ''}
            onValueChange={(value) => updateFormData({ gender: value })}
          >
            <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
              <SelectValue placeholder="Select your gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
              <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Current Address *</Label>
        <Input
          id="address"
          value={formData.address || ''}
          onChange={(e) => updateFormData({ address: e.target.value })}
          placeholder="Enter your residential address"
          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="emergencyContact">Emergency Contact (Name / Phone)</Label>
        <Input
          id="emergencyContact"
          value={formData.emergencyContact || ''}
          onChange={(e) => updateFormData({ emergencyContact: e.target.value })}
          placeholder="Full name and phone number"
          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
