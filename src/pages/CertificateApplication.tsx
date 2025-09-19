import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft,
  Clock,
  IndianRupee,
  FileText,
  CheckCircle,
  Star,
  MessageCircle,
  Phone,
  Shield,
  Building2,
  Calendar,
  Users,
  Award,
  AlertCircle,
  MapPin,
  Briefcase,
  TrendingUp,
  ThumbsUp,
  Eye,
  Filter,
  X
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/layout/AppLayout";
import Header from "@/components/layout/Header";

// Sample certificate details
const certificateDetails = {
  "import-export-code": {
    id: 1,
    name: "Import Export Code (IEC)",
    description: "Required for international trade operations",
    category: "Trade",
    fees: "₹500",
    processingTime: "7-10 days",
    authority: "DGFT",
    validity: "Lifetime",
    overview: "Import Export Code (IEC) is a 10-digit code required by businesses engaged in import and export activities in India. It's issued by the Directorate General of Foreign Trade (DGFT).",
    benefits: [
      "Mandatory for import/export business",
      "Single window clearance",
      "Access to export promotion schemes",
      "Customs clearance facilitation"
    ],
    eligibility: [
      "Individual, Partnership, Company, or LLP",
      "Valid PAN card required",
      "Bank account in applicant's name",
      "Digital signature certificate"
    ],
    documents: [
      "PAN Card copy",
      "Bank certificate/cancelled cheque",
      "Identity proof (Aadhar/Passport)",
      "Address proof",
      "Partnership deed (if applicable)",
      "MOA & AOA (for companies)"
    ],
    steps: [
      { step: 1, title: "Document Preparation", description: "Gather all required documents", status: "pending" },
      { step: 2, title: "Online Application", description: "Fill application form on DGFT portal", status: "pending" },
      { step: 3, title: "Fee Payment", description: "Pay application fees online", status: "pending" },
      { step: 4, title: "Document Verification", description: "DGFT verifies submitted documents", status: "pending" },
      { step: 5, title: "IEC Issuance", description: "Receive IEC certificate", status: "pending" }
    ]
  }
};

// Sample service providers
const serviceProviders = [
  {
    id: 1,
    name: "Legal Solutions Pro",
    rating: 4.8,
    reviews: 156,
    experience: "8+ years",
    mobile: "+91 98765****",
    email: "contact@legalsolutions.com",
    specialization: "Import/Export Documentation",
    completedApplications: 450,
    successRate: "98%",
    price: "₹1,200",
    location: "Mumbai, Maharashtra",
    responseTime: "2 hours",
    languages: ["English", "Hindi", "Marathi"],
    certifications: ["CA", "CS", "DGFT Certified"],
    isOnline: true,
    isPremium: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    description: "Specialized in international trade documentation with 8+ years of experience helping businesses obtain IEC and other trade licenses.",
    services: ["IEC Application", "Export Documentation", "DGFT Compliance", "Trade License"]
  },
  {
    id: 2,
    name: "Trade Consultants India",
    rating: 4.6,
    reviews: 89,
    experience: "5+ years",
    mobile: "+91 87654****",
    email: "info@tradeconsultants.in",
    specialization: "DGFT Services",
    completedApplications: 280,
    successRate: "95%",
    price: "₹999",
    location: "Delhi, NCR",
    responseTime: "4 hours",
    languages: ["English", "Hindi"],
    certifications: ["DGFT Authorized", "Trade Expert"],
    isOnline: false,
    isPremium: false,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    description: "Expert in DGFT services and trade compliance with proven track record in IEC applications and export-import procedures.",
    services: ["IEC Registration", "DGFT Services", "Export Promotion", "Trade Compliance"]
  },
  {
    id: 3,
    name: "Business Compliance Hub",
    rating: 4.9,
    reviews: 203,
    experience: "10+ years",
    mobile: "+91 76543****",
    email: "support@compliancehub.co.in",
    specialization: "Trade Licenses & IEC",
    completedApplications: 650,
    successRate: "99%",
    price: "₹1,500",
    location: "Bangalore, Karnataka",
    responseTime: "1 hour",
    languages: ["English", "Hindi", "Kannada", "Tamil"],
    certifications: ["CA", "CS", "LLB", "DGFT Expert"],
    isOnline: true,
    isPremium: true,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    description: "Leading compliance consultancy with 10+ years of expertise in business registrations, trade licenses, and regulatory compliance.",
    services: ["IEC Application", "Business Registration", "Compliance Management", "Legal Advisory"]
  },
  {
    id: 4,
    name: "Export Import Experts",
    rating: 4.7,
    reviews: 134,
    experience: "6+ years",
    mobile: "+91 65432****",
    email: "hello@exportimportexperts.com",
    specialization: "International Trade",
    completedApplications: 380,
    successRate: "97%",
    price: "₹1,100",
    location: "Chennai, Tamil Nadu",
    responseTime: "3 hours",
    languages: ["English", "Tamil", "Telugu"],
    certifications: ["Export Specialist", "DGFT Certified"],
    isOnline: true,
    isPremium: false,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    description: "Focused on helping businesses navigate international trade requirements with expertise in IEC and export-import procedures.",
    services: ["IEC Processing", "Export Documentation", "Import Procedures", "Trade Consultation"]
  }
];

const CertificateApplication = () => {
  const { certificateId } = useParams();
  const navigate = useNavigate();
  const [selectedProvider, setSelectedProvider] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'experience'>('rating');
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  
  const certificate = certificateDetails[certificateId as keyof typeof certificateDetails];
  
  if (!certificate) {
    return <div>Certificate not found</div>;
  }

  const handleConnectProvider = (providerId: number) => {
    // Generate lead for service provider
    alert(`Lead generated for provider ${providerId}. They will contact you shortly.`);
  };

  const handleChatProvider = (providerId: number) => {
    // Open chat with service provider
    alert(`Opening chat with provider ${providerId}`);
  };

  const handleViewProvider = (providerId: number) => {
    setSelectedProvider(providerId);
  };

  const selectedProviderData = serviceProviders.find(p => p.id === selectedProvider);

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="container mx-auto px-6 py-6">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Certificates
          </Button>

          {/* Certificate Header */}
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border border-blue-200 mb-8">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{certificate.name}</h1>
                  <p className="text-gray-600 mb-4">{certificate.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span>{certificate.processingTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IndianRupee className="h-4 w-4 text-green-500" />
                      <span>{certificate.fees}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Building2 className="h-4 w-4 text-purple-500" />
                      <span>{certificate.authority}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                {certificate.category}
              </Badge>
            </div>
          </div>

          <div className="space-y-8">
            {/* Application Details */}
            <div className="space-y-6">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-500" />
                    Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{certificate.overview}</p>
                </CardContent>
              </Card>

              {/* Benefits & Eligibility - Side by Side */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Benefits */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {certificate.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Eligibility */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-orange-500" />
                      Eligibility Criteria
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {certificate.eligibility.map((criteria, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                          <span className="text-gray-600">{criteria}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Required Documents & Application Process - Side by Side */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Required Documents */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-purple-500" />
                      Required Documents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {certificate.documents.map((doc, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                          <FileText className="h-4 w-4 text-purple-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Application Steps */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-indigo-500" />
                      Application Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {certificate.steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-medium text-indigo-600">{step.step}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{step.title}</h4>
                            <p className="text-sm text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Service Providers Section */}
            <div className="space-y-6">
              {/* Filters */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Shield className="h-5 w-5 text-green-500" />
                    Verified Service Providers ({serviceProviders.filter(p => !showOnlineOnly || p.isOnline).length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Button 
                      size="sm" 
                      variant={sortBy === 'rating' ? 'default' : 'outline'}
                      onClick={() => setSortBy('rating')}
                    >
                      <Star className="h-4 w-4 mr-1" />
                      Top Rated
                    </Button>
                    <Button 
                      size="sm" 
                      variant={sortBy === 'price' ? 'default' : 'outline'}
                      onClick={() => setSortBy('price')}
                    >
                      <IndianRupee className="h-4 w-4 mr-1" />
                      Best Price
                    </Button>
                    <Button 
                      size="sm" 
                      variant={sortBy === 'experience' ? 'default' : 'outline'}
                      onClick={() => setSortBy('experience')}
                    >
                      <Briefcase className="h-4 w-4 mr-1" />
                      Most Experienced
                    </Button>
                    <Button 
                      size="sm" 
                      variant={showOnlineOnly ? 'default' : 'outline'}
                      onClick={() => setShowOnlineOnly(!showOnlineOnly)}
                      className={showOnlineOnly ? 'bg-green-600 hover:bg-green-700' : ''}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Online Only
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Provider Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceProviders
                  .filter(provider => !showOnlineOnly || provider.isOnline)
                  .sort((a, b) => {
                    if (sortBy === 'rating') return b.rating - a.rating;
                    if (sortBy === 'price') return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
                    if (sortBy === 'experience') return parseInt(b.experience) - parseInt(a.experience);
                    return 0;
                  })
                  .map((provider) => (
                  <Card key={provider.id} className={`hover:shadow-lg transition-all duration-200 cursor-pointer ${
                    provider.isPremium ? 'ring-2 ring-yellow-200 bg-gradient-to-r from-yellow-50/50 to-orange-50/50' : ''
                  }`}>
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center text-center">
                        {/* Avatar */}
                        <div className="relative mb-3">
                          <img 
                            src={provider.avatar} 
                            alt={provider.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                          />
                          {provider.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          )}
                          {provider.isPremium && (
                            <div className="absolute -top-1 -left-1 w-6 h-6 bg-yellow-500 border-2 border-white rounded-full flex items-center justify-center">
                              <Star className="w-3 h-3 text-white fill-current" />
                            </div>
                          )}
                        </div>

                        {/* Provider Info */}
                        <div className="w-full">
                          <h3 className="font-semibold text-gray-900 mb-1">{provider.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{provider.specialization}</p>
                          
                          <div className="text-xl font-bold text-green-600 mb-2">{provider.price}</div>
                          
                          <div className="flex items-center justify-center gap-1 mb-3">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{provider.rating}</span>
                            <span className="text-xs text-gray-500">({provider.reviews})</span>
                          </div>

                          {/* Quick Stats */}
                          <div className="text-xs text-gray-600 mb-3 space-y-1">
                            <div className="flex items-center justify-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{provider.location}</span>
                            </div>
                            <div className="flex items-center justify-center gap-1">
                              <TrendingUp className="h-3 w-3" />
                              <span>{provider.successRate} success</span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="space-y-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProvider(provider.id);
                              }}
                              className="w-full"
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              View Details
                            </Button>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleChatProvider(provider.id);
                                }}
                                className="flex-1"
                              >
                                <MessageCircle className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleConnectProvider(provider.id);
                                }}
                                className="flex-1 bg-green-600 hover:bg-green-700"
                              >
                                <Phone className="h-4 w-4 mr-1" />
                                Connect
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Provider Details Modal */}
        {selectedProvider && selectedProviderData && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <img 
                        src={selectedProviderData.avatar} 
                        alt={selectedProviderData.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                      />
                      {selectedProviderData.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                      {selectedProviderData.isPremium && (
                        <div className="absolute -top-1 -left-1 w-7 h-7 bg-yellow-500 border-2 border-white rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-white fill-current" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedProviderData.name}</h2>
                      <p className="text-gray-600 mb-2">{selectedProviderData.specialization}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{selectedProviderData.rating}</span>
                          <span>({selectedProviderData.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{selectedProviderData.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSelectedProvider(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Price and Response Time */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600">{selectedProviderData.price}</div>
                    <div className="text-sm text-gray-600">Service Fee</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-lg font-semibold text-blue-600">{selectedProviderData.responseTime}</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">About</h3>
                  <p className="text-gray-600">{selectedProviderData.description}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{selectedProviderData.experience}</div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{selectedProviderData.successRate}</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{selectedProviderData.completedApplications}</div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Services Offered</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProviderData.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProviderData.certifications.map((cert, index) => (
                      <Badge key={index} className="bg-blue-100 text-blue-800 border-blue-200">
                        <Award className="h-3 w-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProviderData.languages.map((lang, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{selectedProviderData.mobile}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MessageCircle className="h-4 w-4" />
                      <span>{selectedProviderData.email}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    onClick={() => handleChatProvider(selectedProviderData.id)}
                    className="flex-1"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Start Chat
                  </Button>
                  <Button 
                    onClick={() => handleConnectProvider(selectedProviderData.id)}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Connect Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default CertificateApplication;