import { useState, memo, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { 
  MapPin, 
  Building2, 
  Calendar, 
  FileText, 
  DollarSign, 
  Users, 
  Star, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle,
  AlertCircle,
  Briefcase,
  Factory,
  ShoppingCart,
  Award,
  TrendingUp,
  Shield
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AppLayout from "@/components/layout/AppLayout";
import Header from "@/components/layout/Header";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const indianStates = [
  { value: "andhra-pradesh", label: "Andhra Pradesh" },
  { value: "arunachal-pradesh", label: "Arunachal Pradesh" },
  { value: "assam", label: "Assam" },
  { value: "bihar", label: "Bihar" },
  { value: "chhattisgarh", label: "Chhattisgarh" },
  { value: "goa", label: "Goa" },
  { value: "gujarat", label: "Gujarat" },
  { value: "haryana", label: "Haryana" },
  { value: "himachal-pradesh", label: "Himachal Pradesh" },
  { value: "jharkhand", label: "Jharkhand" },
  { value: "karnataka", label: "Karnataka" },
  { value: "kerala", label: "Kerala" },
  { value: "madhya-pradesh", label: "Madhya Pradesh" },
  { value: "maharashtra", label: "Maharashtra" },
  { value: "manipur", label: "Manipur" },
  { value: "meghalaya", label: "Meghalaya" },
  { value: "mizoram", label: "Mizoram" },
  { value: "nagaland", label: "Nagaland" },
  { value: "odisha", label: "Odisha" },
  { value: "punjab", label: "Punjab" },
  { value: "rajasthan", label: "Rajasthan" },
  { value: "sikkim", label: "Sikkim" },
  { value: "tamil-nadu", label: "Tamil Nadu" },
  { value: "telangana", label: "Telangana" },
  { value: "tripura", label: "Tripura" },
  { value: "uttar-pradesh", label: "Uttar Pradesh" },
  { value: "uttarakhand", label: "Uttarakhand" },
  { value: "west-bengal", label: "West Bengal" },
  { value: "delhi", label: "Delhi" },
  { value: "chandigarh", label: "Chandigarh" },
  { value: "puducherry", label: "Puducherry" }
];

const stateDistricts: { [key: string]: { value: string; label: string }[] } = {
  "maharashtra": [
    { value: "mumbai", label: "Mumbai" },
    { value: "pune", label: "Pune" },
    { value: "nagpur", label: "Nagpur" },
    { value: "nashik", label: "Nashik" },
    { value: "aurangabad", label: "Aurangabad" },
    { value: "solapur", label: "Solapur" },
    { value: "thane", label: "Thane" },
    { value: "kolhapur", label: "Kolhapur" }
  ],
  "karnataka": [
    { value: "bangalore", label: "Bangalore" },
    { value: "mysore", label: "Mysore" },
    { value: "hubli", label: "Hubli" },
    { value: "mangalore", label: "Mangalore" },
    { value: "belgaum", label: "Belgaum" },
    { value: "gulbarga", label: "Gulbarga" },
    { value: "davangere", label: "Davangere" },
    { value: "bellary", label: "Bellary" }
  ],
  "gujarat": [
    { value: "ahmedabad", label: "Ahmedabad" },
    { value: "surat", label: "Surat" },
    { value: "vadodara", label: "Vadodara" },
    { value: "rajkot", label: "Rajkot" },
    { value: "bhavnagar", label: "Bhavnagar" },
    { value: "jamnagar", label: "Jamnagar" },
    { value: "gandhinagar", label: "Gandhinagar" },
    { value: "anand", label: "Anand" }
  ],
  "delhi": [
    { value: "central-delhi", label: "Central Delhi" },
    { value: "north-delhi", label: "North Delhi" },
    { value: "south-delhi", label: "South Delhi" },
    { value: "east-delhi", label: "East Delhi" },
    { value: "west-delhi", label: "West Delhi" },
    { value: "new-delhi", label: "New Delhi" },
    { value: "north-west-delhi", label: "North West Delhi" },
    { value: "south-west-delhi", label: "South West Delhi" }
  ]
};

interface FormData {
  state: string;
  district: string;
  businessAge: string;
  legalStructure: string;
  industrySector: string;
  gstRegistration: string;
  udyamRegistration: string;
  cinRegistration: string;
  annualTurnover: string;
  employeeCount: string;
  capitalInvestment: string;
  foodBusiness: string;
  startupRecognition: string;
  ownershipCategory: string;
  assistanceNeeded: string;
  businessName: string;
  exportBusiness: string;
  digitalPresence: string;
  environmentalCompliance: string;
  qualityCertifications: string;
}

const AddBusiness = memo(() => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    state: '',
    district: '',
    businessAge: '',
    legalStructure: '',
    industrySector: '',
    gstRegistration: '',
    udyamRegistration: '',
    cinRegistration: '',
    annualTurnover: '',
    employeeCount: '',
    capitalInvestment: '',
    foodBusiness: '',
    startupRecognition: '',
    ownershipCategory: '',
    assistanceNeeded: '',
    businessName: '',
    exportBusiness: '',
    digitalPresence: '',
    environmentalCompliance: '',
    qualityCertifications: ''
  });

  const totalSteps = 4;

  const handleInputChange = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ 
      ...prev, 
      [field]: value,
      // Clear district when state changes
      ...(field === 'state' && { district: '' })
    }));
  }, []);

  const nextStep = useCallback(() => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep, totalSteps]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const handleSubmit = useCallback(() => {
    console.log('Form submitted:', formData);
    
    // Show enhanced success toast
    toast({
      title: "🎉 Business Added Successfully!",
      description: `🏢 ${formData.businessName || 'Your business'} has been registered and is now available in your dashboard. You can now access personalized schemes and compliance tracking!`,
      duration: 3000,
      className: "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-900",
    });
    
    // Redirect to DashboardV5
    setTimeout(() => {
      navigate('/dashboard-v5');
    }, 1000);
  }, [formData, navigate, toast]);

  const RadioOption = ({ 
    name, 
    value, 
    label, 
    selectedValue, 
    onChange, 
    critical = false 
  }: {
    name: string;
    value: string;
    label: string;
    selectedValue: string;
    onChange: (value: string) => void;
    critical?: boolean;
  }) => (
    <label className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all hover:bg-blue-50 ${
      selectedValue === value 
        ? 'border-blue-500 bg-blue-50 text-blue-900' 
        : 'border-gray-200 hover:border-blue-300'
    }`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={(e) => onChange(e.target.value)}
        className="sr-only"
      />
      <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
        selectedValue === value ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
      }`}>
        {selectedValue === value && <div className="w-2 h-2 bg-white rounded-full" />}
      </div>
      <span className="text-sm font-medium flex-1">{label}</span>
      {critical && <Badge variant="destructive" className="ml-2 text-xs">CRITICAL</Badge>}
    </label>
  );

  const renderStep1 = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPin className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">📍 Business Identification & Location</h2>
        <p className="text-gray-600">Let's start with your business location and basic details</p>
      </div>

      <Card className="border-0 shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">1. In which State is your business primarily located?</h3>
            <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
              <SelectTrigger className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500">
                <SelectValue placeholder="Select your state" />
              </SelectTrigger>
              <SelectContent>
                {indianStates.map((state) => (
                  <SelectItem key={state.value} value={state.value}>
                    {state.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">2. In which District is your business primarily located?</h3>
            <Select 
              value={formData.district} 
              onValueChange={(value) => handleInputChange('district', value)}
              disabled={!formData.state}
            >
              <SelectTrigger className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500">
                <SelectValue placeholder={formData.state ? "Select your district" : "Please select state first"} />
              </SelectTrigger>
              <SelectContent>
                {formData.state && stateDistricts[formData.state] ? 
                  stateDistricts[formData.state].map((district) => (
                    <SelectItem key={district.value} value={district.value}>
                      {district.label}
                    </SelectItem>
                  )) : 
                  <SelectItem value="no-districts" disabled>
                    {formData.state ? "No districts available for this state" : "Please select a state first"}
                  </SelectItem>
                }
              </SelectContent>
            </Select>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">3. How old is your business?</h3>
            <div className="space-y-3">
              <RadioOption name="businessAge" value="less-than-1" label="Less than 1 year" selectedValue={formData.businessAge} onChange={(value) => handleInputChange('businessAge', value)} />
              <RadioOption name="businessAge" value="1-3" label="1-3 years" selectedValue={formData.businessAge} onChange={(value) => handleInputChange('businessAge', value)} />
              <RadioOption name="businessAge" value="3-5" label="3-5 years" selectedValue={formData.businessAge} onChange={(value) => handleInputChange('businessAge', value)} />
              <RadioOption name="businessAge" value="more-than-5" label="More than 5 years" selectedValue={formData.businessAge} onChange={(value) => handleInputChange('businessAge', value)} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">4. What is your business name?</h3>
            <input
              type="text"
              value={formData.businessName}
              onChange={(e) => handleInputChange('businessName', e.target.value)}
              placeholder="Enter your business name"
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">📜 Legal Structure & Regulatory Status</h2>
        <p className="text-gray-600">Critical information about your business structure and registrations</p>
      </div>

      <Card className="border-0 shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">5. What is the legal structure of your business?</h3>
            <div className="space-y-3">
              <RadioOption name="legalStructure" value="proprietorship" label="Proprietorship" selectedValue={formData.legalStructure} onChange={(value) => handleInputChange('legalStructure', value)} />
              <RadioOption name="legalStructure" value="partnership" label="Partnership (including LLP)" selectedValue={formData.legalStructure} onChange={(value) => handleInputChange('legalStructure', value)} />
              <RadioOption name="legalStructure" value="private-limited" label="Private Limited Company" selectedValue={formData.legalStructure} onChange={(value) => handleInputChange('legalStructure', value)} />
              <RadioOption name="legalStructure" value="other" label="Other" selectedValue={formData.legalStructure} onChange={(value) => handleInputChange('legalStructure', value)} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">6. Which industry sector does your business belong to?</h3>
            <div className="space-y-3">
              <RadioOption name="industrySector" value="manufacturing" label="🏭 Manufacturing" selectedValue={formData.industrySector} onChange={(value) => handleInputChange('industrySector', value)} />
              <RadioOption name="industrySector" value="services" label="💼 Services" selectedValue={formData.industrySector} onChange={(value) => handleInputChange('industrySector', value)} />
              <RadioOption name="industrySector" value="trade" label="🛒 Trade" selectedValue={formData.industrySector} onChange={(value) => handleInputChange('industrySector', value)} />
              <RadioOption name="industrySector" value="other" label="Other" selectedValue={formData.industrySector} onChange={(value) => handleInputChange('industrySector', value)} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              7. Do you currently have a GST Registration number?
              <AlertCircle className="h-5 w-5 text-red-500" />
            </h3>
            <div className="space-y-3">
              <RadioOption name="gstRegistration" value="yes" label="Yes" selectedValue={formData.gstRegistration} onChange={(value) => handleInputChange('gstRegistration', value)} critical />
              <RadioOption name="gstRegistration" value="no" label="No" selectedValue={formData.gstRegistration} onChange={(value) => handleInputChange('gstRegistration', value)} critical />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              8. Do you currently have an UDYAM Registration number?
              <AlertCircle className="h-5 w-5 text-red-500" />
            </h3>
            <div className="space-y-3">
              <RadioOption name="udyamRegistration" value="yes" label="Yes" selectedValue={formData.udyamRegistration} onChange={(value) => handleInputChange('udyamRegistration', value)} critical />
              <RadioOption name="udyamRegistration" value="no" label="No" selectedValue={formData.udyamRegistration} onChange={(value) => handleInputChange('udyamRegistration', value)} critical />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              9. Do you currently have a CIN or LLPIN?
              <AlertCircle className="h-5 w-5 text-red-500" />
            </h3>
            <div className="space-y-3">
              <RadioOption name="cinRegistration" value="yes" label="Yes" selectedValue={formData.cinRegistration} onChange={(value) => handleInputChange('cinRegistration', value)} critical />
              <RadioOption name="cinRegistration" value="no" label="No" selectedValue={formData.cinRegistration} onChange={(value) => handleInputChange('cinRegistration', value)} critical />
              <RadioOption name="cinRegistration" value="na" label="Not Applicable (e.g., Proprietorship)" selectedValue={formData.cinRegistration} onChange={(value) => handleInputChange('cinRegistration', value)} critical />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <DollarSign className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">💰 Financials & Operations</h2>
        <p className="text-gray-600">Tell us about your business size and operations</p>
      </div>

      <Card className="border-0 shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">10. What is your approximate annual turnover?</h3>
            <div className="space-y-3">
              <RadioOption name="annualTurnover" value="up-to-5l" label="Up to ₹5 Lakh" selectedValue={formData.annualTurnover} onChange={(value) => handleInputChange('annualTurnover', value)} />
              <RadioOption name="annualTurnover" value="5l-50l" label="₹5 Lakh to ₹50 Lakh" selectedValue={formData.annualTurnover} onChange={(value) => handleInputChange('annualTurnover', value)} />
              <RadioOption name="annualTurnover" value="50l-5cr" label="₹50 Lakh to ₹5 Crore" selectedValue={formData.annualTurnover} onChange={(value) => handleInputChange('annualTurnover', value)} />
              <RadioOption name="annualTurnover" value="above-5cr" label="Above ₹5 Crore" selectedValue={formData.annualTurnover} onChange={(value) => handleInputChange('annualTurnover', value)} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">11. How many people do you currently employ?</h3>
            <div className="space-y-3">
              <RadioOption name="employeeCount" value="0" label="0 (Self-employed/Proprietor only)" selectedValue={formData.employeeCount} onChange={(value) => handleInputChange('employeeCount', value)} />
              <RadioOption name="employeeCount" value="1-5" label="1 - 5" selectedValue={formData.employeeCount} onChange={(value) => handleInputChange('employeeCount', value)} />
              <RadioOption name="employeeCount" value="6-20" label="6 - 20" selectedValue={formData.employeeCount} onChange={(value) => handleInputChange('employeeCount', value)} />
              <RadioOption name="employeeCount" value="more-than-20" label="More than 20" selectedValue={formData.employeeCount} onChange={(value) => handleInputChange('employeeCount', value)} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">12. What is the approximate amount of capital investment in your business?</h3>
            <div className="space-y-3">
              <RadioOption name="capitalInvestment" value="up-to-1l" label="Up to ₹1 Lakh" selectedValue={formData.capitalInvestment} onChange={(value) => handleInputChange('capitalInvestment', value)} />
              <RadioOption name="capitalInvestment" value="1l-10l" label="₹1 Lakh to ₹10 Lakh" selectedValue={formData.capitalInvestment} onChange={(value) => handleInputChange('capitalInvestment', value)} />
              <RadioOption name="capitalInvestment" value="10l-50l" label="₹10 Lakh to ₹50 Lakh" selectedValue={formData.capitalInvestment} onChange={(value) => handleInputChange('capitalInvestment', value)} />
              <RadioOption name="capitalInvestment" value="above-50l" label="Above ₹50 Lakh" selectedValue={formData.capitalInvestment} onChange={(value) => handleInputChange('capitalInvestment', value)} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">13. Does your business involve export activities?</h3>
            <div className="space-y-3">
              <RadioOption name="exportBusiness" value="yes" label="Yes, we export products/services" selectedValue={formData.exportBusiness} onChange={(value) => handleInputChange('exportBusiness', value)} />
              <RadioOption name="exportBusiness" value="planning" label="Planning to start exports" selectedValue={formData.exportBusiness} onChange={(value) => handleInputChange('exportBusiness', value)} />
              <RadioOption name="exportBusiness" value="no" label="No export activities" selectedValue={formData.exportBusiness} onChange={(value) => handleInputChange('exportBusiness', value)} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Star className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">⭐ Special Compliance & Recognition Status</h2>
      </div>

      <Card className="border-0 shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              14. Does your business involve food products or drinks?
              <AlertCircle className="h-5 w-5 text-red-500" />
            </h3>
            <div className="space-y-3">
              <RadioOption name="foodBusiness" value="yes" label="Yes" selectedValue={formData.foodBusiness} onChange={(value) => handleInputChange('foodBusiness', value)} critical />
              <RadioOption name="foodBusiness" value="no" label="No" selectedValue={formData.foodBusiness} onChange={(value) => handleInputChange('foodBusiness', value)} critical />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">15. Is your business officially recognized as a 'Startup' by DPIIT?</h3>
            <div className="space-y-3">
              <RadioOption name="startupRecognition" value="yes" label="Yes" selectedValue={formData.startupRecognition} onChange={(value) => handleInputChange('startupRecognition', value)} />
              <RadioOption name="startupRecognition" value="no" label="No" selectedValue={formData.startupRecognition} onChange={(value) => handleInputChange('startupRecognition', value)} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">16. Business ownership category?</h3>
            <div className="space-y-3">
              <RadioOption name="ownershipCategory" value="woman" label="Woman Entrepreneur" selectedValue={formData.ownershipCategory} onChange={(value) => handleInputChange('ownershipCategory', value)} />
              <RadioOption name="ownershipCategory" value="sc-st-divyang" label="SC/ST/Divyang Category" selectedValue={formData.ownershipCategory} onChange={(value) => handleInputChange('ownershipCategory', value)} />
              <RadioOption name="ownershipCategory" value="both" label="Both A and B" selectedValue={formData.ownershipCategory} onChange={(value) => handleInputChange('ownershipCategory', value)} />
              <RadioOption name="ownershipCategory" value="none" label="None of the above" selectedValue={formData.ownershipCategory} onChange={(value) => handleInputChange('ownershipCategory', value)} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">17. Are you seeking assistance for?</h3>
            <div className="space-y-3">
              <RadioOption name="assistanceNeeded" value="technology" label="Technology Adoption" selectedValue={formData.assistanceNeeded} onChange={(value) => handleInputChange('assistanceNeeded', value)} />
              <RadioOption name="assistanceNeeded" value="ipr" label="IPR Registration" selectedValue={formData.assistanceNeeded} onChange={(value) => handleInputChange('assistanceNeeded', value)} />
              <RadioOption name="assistanceNeeded" value="quality" label="Quality Certification" selectedValue={formData.assistanceNeeded} onChange={(value) => handleInputChange('assistanceNeeded', value)} />
              <RadioOption name="assistanceNeeded" value="multiple" label="Yes, for multiple areas" selectedValue={formData.assistanceNeeded} onChange={(value) => handleInputChange('assistanceNeeded', value)} />
              <RadioOption name="assistanceNeeded" value="no" label="No" selectedValue={formData.assistanceNeeded} onChange={(value) => handleInputChange('assistanceNeeded', value)} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">18. Does your business have digital presence?</h3>
            <div className="space-y-3">
              <RadioOption name="digitalPresence" value="website-social" label="Website & Social Media" selectedValue={formData.digitalPresence} onChange={(value) => handleInputChange('digitalPresence', value)} />
              <RadioOption name="digitalPresence" value="social-only" label="Social Media Only" selectedValue={formData.digitalPresence} onChange={(value) => handleInputChange('digitalPresence', value)} />
              <RadioOption name="digitalPresence" value="planning" label="Planning to establish" selectedValue={formData.digitalPresence} onChange={(value) => handleInputChange('digitalPresence', value)} />
              <RadioOption name="digitalPresence" value="no" label="No digital presence" selectedValue={formData.digitalPresence} onChange={(value) => handleInputChange('digitalPresence', value)} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">19. Environmental compliance status?</h3>
            <div className="space-y-3">
              <RadioOption name="environmentalCompliance" value="certified" label="Have environmental certifications" selectedValue={formData.environmentalCompliance} onChange={(value) => handleInputChange('environmentalCompliance', value)} />
              <RadioOption name="environmentalCompliance" value="compliant" label="Following environmental norms" selectedValue={formData.environmentalCompliance} onChange={(value) => handleInputChange('environmentalCompliance', value)} />
              <RadioOption name="environmentalCompliance" value="seeking" label="Seeking guidance on compliance" selectedValue={formData.environmentalCompliance} onChange={(value) => handleInputChange('environmentalCompliance', value)} />
              <RadioOption name="environmentalCompliance" value="na" label="Not applicable to my business" selectedValue={formData.environmentalCompliance} onChange={(value) => handleInputChange('environmentalCompliance', value)} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return <MapPin className="h-5 w-5" />;
      case 2: return <FileText className="h-5 w-5" />;
      case 3: return <DollarSign className="h-5 w-5" />;
      case 4: return <Star className="h-5 w-5" />;
      default: return <Building2 className="h-5 w-5" />;
    }
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header />
        
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">🏢 Add New Business</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help us understand your business better to provide personalized recommendations and schemes
            </p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all ${
                    step <= currentStep 
                      ? 'bg-blue-500 text-white shadow-lg' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step < currentStep ? <CheckCircle className="h-6 w-6" /> : getStepIcon(step)}
                  </div>
                  {step < 4 && (
                    <div className={`w-24 h-1 mx-2 transition-all ${
                      step < currentStep ? 'bg-blue-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm font-medium text-gray-600">
              <span>Location</span>
              <span>Legal Status</span>
              <span>Financials</span>
              <span>Recognition</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="max-w-4xl mx-auto">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            {currentStep === 4 && renderStep4()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={prevStep}
                disabled={currentStep === 1}
                variant="outline"
                className="flex items-center gap-2 px-6 py-3"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="h-4 w-4" />
                  Submit & Add Business
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
});



AddBusiness.displayName = "AddBusiness";

export default AddBusiness;