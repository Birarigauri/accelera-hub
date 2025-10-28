import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Star, 
  Users, 
  FileText, 
  Phone, 
  MessageCircle,
  Download,
  Shield,
  Award,
  Building,
  Bot,
  UserCheck,

  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showExpertsModal, setShowExpertsModal] = useState(false);

  const downloadTemplate = () => {
    // Create a dummy PDF content
    const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 44
>>
stream
BT
/F1 12 Tf
72 720 Td
(Certificate Template) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000274 00000 n 
0000000369 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
466
%%EOF`;
    
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${service.title.replace(/\s+/g, '_')}_Template.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  const [formData, setFormData] = useState({
    businessLocation: '',
    operationStates: '',
    existingCertificates: '',
    pendingRenewals: '',
    certificationType: '',
    documentsReady: '',
    documentAssistance: false,
    expertGuidance: false,
    governmentSchemes: false,
    complianceTracking: false,
    registrationType: '',
    yearsInOperation: '',
    industrySector: ''
  });
  
  const serviceData = {
    "1": {
      id: 1,
      title: "Company Registration",
      description: "Register your private limited company with complete documentation and legal compliance",
      category: "registration",
      price: "₹6,999",
      originalPrice: "₹9,999",
      duration: "7-10 days",
      rating: 4.8,
      reviews: 1245,
      completedApplications: 5600,
      successRate: 98,
      icon: Building,
      features: [
        "Name Approval & Reservation",
        "DIN & DSC for Directors", 
        "MOA & AOA Drafting",
        "Certificate of Incorporation",
        "PAN & TAN Registration",
        "Bank Account Opening Support"
      ],
      process: [
        { step: 1, title: "Document Collection", description: "Gather required documents and information", duration: "1 day" },
        { step: 2, title: "Name Approval", description: "Apply for company name approval with MCA", duration: "2-3 days" },
        { step: 3, title: "Filing & Registration", description: "File incorporation documents with ROC", duration: "3-5 days" },
        { step: 4, title: "Certificate Issuance", description: "Receive Certificate of Incorporation", duration: "1-2 days" }
      ],
      documents: [
        "PAN Card of Directors",
        "Aadhaar Card of Directors", 
        "Passport Size Photos",
        "Address Proof of Registered Office",
        "NOC from Property Owner",
        "Utility Bill (Electricity/Water)"
      ],
      faqs: [
        {
          question: "What is the minimum capital required?",
          answer: "There is no minimum capital requirement for private limited companies in India."
        },
        {
          question: "How many directors are required?",
          answer: "Minimum 2 directors are required for a private limited company."
        },
        {
          question: "Can foreigners be directors?",
          answer: "Yes, foreigners can be directors but at least one director must be an Indian resident."
        },
        {
          question: "What documents are required for company registration?",
          answer: "You need PAN cards, Aadhaar cards, passport photos of directors, registered office address proof, and NOC from property owner."
        },
        {
          question: "How long does the registration process take?",
          answer: "The complete company registration process typically takes 7-10 working days from document submission."
        },
        {
          question: "Can I register a company online?",
          answer: "Yes, the entire company registration process can be completed online through the MCA portal with proper documentation."
        },
        {
          question: "What are the ongoing compliance requirements?",
          answer: "Companies must file annual returns, conduct board meetings, maintain statutory registers, and comply with ROC filings."
        }
      ],
      expert: {
        name: "CA Rajesh Sharma",
        experience: "12+ years",
        specialization: "Corporate Law & Compliance",
        rating: 4.9,
        completedCases: 2500,
        phone: "+91 98765 43210",
        image: "/api/placeholder/100/100"
      }
    },
    "2": {
      id: 2,
      title: "GST Registration",
      description: "Get your GST registration done hassle-free with expert guidance and complete documentation",
      category: "taxation",
      price: "₹2,499",
      originalPrice: "₹3,999", 
      duration: "3-5 days",
      rating: 4.9,
      reviews: 2156,
      completedApplications: 8900,
      successRate: 99,
      icon: Shield,
      features: [
        "GST Application Filing",
        "Document Verification",
        "GST Certificate",
        "Login Credentials",
        "Return Filing Guidance",
        "Compliance Calendar"
      ],
      process: [
        { step: 1, title: "Document Verification", description: "Verify business documents and details", duration: "1 day" },
        { step: 2, title: "Application Filing", description: "File GST registration application online", duration: "1 day" },
        { step: 3, title: "Processing", description: "Government processing and verification", duration: "1-2 days" },
        { step: 4, title: "Certificate Generation", description: "GST certificate and login details", duration: "1 day" }
      ],
      documents: [
        "PAN Card of Business",
        "Aadhaar Card of Proprietor/Directors",
        "Business Registration Certificate", 
        "Address Proof of Business Place",
        "Bank Account Statement",
        "Digital Signature Certificate"
      ],
      faqs: [
        {
          question: "What is the GST registration threshold?",
          answer: "Businesses with annual turnover above ₹40 lakhs (₹20 lakhs for special states) must register for GST."
        },
        {
          question: "Is GST registration mandatory for all businesses?",
          answer: "No, only businesses exceeding the threshold limit or engaged in inter-state supply need GST registration."
        },
        {
          question: "How long is GST registration valid?",
          answer: "GST registration is valid until cancelled. Annual returns must be filed to maintain active status."
        },
        {
          question: "What documents are needed for GST registration?",
          answer: "You need business PAN, Aadhaar of proprietor/directors, business registration certificate, address proof, and bank statements."
        },
        {
          question: "Can I get GST registration for multiple states?",
          answer: "Yes, you need separate GST registration for each state where you have business operations or warehouses."
        },
        {
          question: "What happens if I don't file GST returns on time?",
          answer: "Late filing attracts penalties and interest. Continuous non-filing can lead to GST registration cancellation."
        },
        {
          question: "Is there any fee for GST registration?",
          answer: "GST registration is free of cost. However, professional service charges may apply for assistance."
        }
      ],
      expert: {
        name: "CA Priya Patel",
        experience: "8+ years",
        specialization: "GST & Indirect Taxation",
        rating: 4.8,
        completedCases: 3200,
        phone: "+91 87654 32109",
        image: "/api/placeholder/100/100"
      }
    }
  };

  const service = serviceData[id as keyof typeof serviceData];

  if (!service) {
    return (
      <AppLayout>
        <div className="min-h-screen bg-muted/30 flex items-center justify-center">
          <Card className="text-center p-8">
            <h2 className="text-xl font-semibold mb-2">Service Not Found</h2>
            <p className="text-muted-foreground mb-4">The requested service could not be found.</p>
            <Link to="/services">
              <Button>Back to Services</Button>
            </Link>
          </Card>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
          {/* Back Button */}
          <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>

          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="space-y-6">
              {/* Service Header */}
              <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 ">
                  <div className="bg-white rounded-xl">
                    <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h1 className="text-2xl font-bold mb-2">{service.title}</h1>
                      <p className="text-muted-foreground mb-1">{service.description}</p>
                    </div>
                  </div>


                    
                 
                     </CardContent>
                  </div>
                </div>
               
              </Card>

              {/* Service Classification Table */}
              <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Building className="h-5 w-5 text-blue-600" />
                    </div>
                     Service Classification Matrix
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-full">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="text-left p-4 font-semibold text-gray-900 border-r">Category</th>
                          <th className="text-left p-4 font-semibold text-gray-900 border-r">Options</th>
                          <th className="text-left p-4 font-semibold text-gray-900 border-r">Processing Time</th>
                          <th className="text-left p-4 font-semibold text-gray-900">Complexity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-blue-50/50 transition-colors">
                          <td className="p-4 border-r">
                            <div className="flex items-center gap-2 font-medium text-blue-700">
                              <FileText className="h-4 w-4" />
                              By Type
                            </div>
                          </td>
                          <td className="p-4 border-r">
                            <div className="flex flex-wrap gap-2">
                              <Badge className="bg-blue-100 text-blue-700 border-blue-300">Trade License</Badge>
                              <Badge className="bg-green-100 text-green-700 border-green-300">Food License</Badge>
                              <Badge className="bg-orange-100 text-orange-700 border-orange-300">Pollution Certificate</Badge>
                            </div>
                          </td>
                          <td className="p-4 border-r text-sm text-gray-600">3-15 days</td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span className="text-sm">Medium</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-purple-50/50 transition-colors">
                          <td className="p-4 border-r">
                            <div className="flex items-center gap-2 font-medium text-purple-700">
                              <Shield className="h-4 w-4" />
                              By Authority
                            </div>
                          </td>
                          <td className="p-4 border-r">
                            <div className="flex flex-wrap gap-2">
                              <Badge className="bg-purple-100 text-purple-700 border-purple-300">Central Govt</Badge>
                              <Badge className="bg-indigo-100 text-indigo-700 border-indigo-300">State Govt</Badge>
                              <Badge className="bg-gray-100 text-gray-700 border-gray-300">Local Body</Badge>
                            </div>
                          </td>
                          <td className="p-4 border-r text-sm text-gray-600">5-30 days</td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              <span className="text-sm">High</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="hover:bg-green-50/50 transition-colors">
                          <td className="p-4 border-r">
                            <div className="flex items-center gap-2 font-medium text-green-700">
                              <Award className="h-4 w-4" />
                              By Level
                            </div>
                          </td>
                          <td className="p-4 border-r">
                            <div className="flex flex-wrap gap-2">
                              <Badge className="bg-green-100 text-green-700 border-green-300">Basic</Badge>
                              <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">Intermediate</Badge>
                              <Badge className="bg-red-100 text-red-700 border-red-300">Advanced</Badge>
                            </div>
                          </td>
                          <td className="p-4 border-r text-sm text-gray-600">1-21 days</td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-sm">Variable</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Service Details Tabs */}
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-white">
                  <TabsTrigger value="overview">Description</TabsTrigger>
                  <TabsTrigger value="process">Process</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="faqs">FAQs</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <Card className="bg-white shadow-lg border-0 rounded-2xl">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-4 w-4 text-blue-600" />
                        </div>
                         Service Description
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {service.id === 1 
                            ? 'Company registration is the legal process of incorporating a business entity under the Companies Act. This comprehensive service helps entrepreneurs establish their business as a separate legal entity, providing limited liability protection and credibility in the market. Our expert team handles all documentation, compliance requirements, and government filings to ensure a smooth registration process.'
                            : 'GST (Goods and Services Tax) registration is mandatory for businesses with annual turnover exceeding the prescribed threshold. This service ensures your business complies with GST regulations and can legally collect and remit taxes. Our specialists guide you through the entire registration process, helping you understand tax implications and maintain proper compliance from day one.'}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {service.id === 1
                            ? 'With our streamlined approach, you can focus on building your business while we handle the complex legal formalities. We provide end-to-end support including name approval, document preparation, filing with ROC, and post-incorporation compliance guidance.'
                            : 'Our GST registration service includes thorough documentation review, application filing, follow-up with tax authorities, and guidance on GST compliance requirements. We ensure your business is properly registered and equipped to handle GST obligations efficiently.'}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="process">
                  <Card className="bg-gradient-card border-0">
                    <CardHeader>
                      <CardTitle>Step-by-Step Process</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {service.process.map((step, index) => (
                          <div key={step.step} className="flex gap-4">
                            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold">{step.title}</h4>
                                <Badge variant="outline">{step.duration}</Badge>
                              </div>
                              <p className="text-muted-foreground">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="documents">
                  <Card className="bg-gradient-card border-0">
                    <CardHeader>
                      <CardTitle>Required Documents</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.documents.map((doc, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                            <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="faqs">
                  <Card className="bg-white shadow-lg border-0 rounded-2xl">
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-200">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <MessageCircle className="h-4 w-4 text-purple-600" />
                        </div>
                        ❓ Frequently Asked Questions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {service.faqs.map((faq, index) => (
                          <div key={index} className="group border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-purple-300 transition-all duration-300">
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-purple-600 font-bold text-sm">Q</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">{faq.question}</h4>
                                <div className="flex items-start gap-3">
                                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-green-600 font-bold text-sm">A</span>
                                  </div>
                                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Contact for More Questions */}
                      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                        <div className="text-center">
                          <h4 className="font-semibold text-gray-900 mb-2">Still have questions?</h4>
                          <p className="text-gray-600 text-sm mb-3">Our experts are here to help you with personalized guidance</p>
                          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Ask an Expert
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              {/* Proceed Button */}
              <div className="text-center py-8">
                <Button 
                  onClick={() => setShowApplicationForm(!showApplicationForm)}
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-12 py-4 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  {showApplicationForm ? '📋 Hide Application Form' : '🚀 Proceed'}
                </Button>
                <p className="text-gray-600 mt-3 text-sm">{showApplicationForm ? 'Click to hide the application form' : 'Start your service application process'}</p>
              </div>

              {/* Application Form */}
              {showApplicationForm && !formSubmitted && (
                <div className="mt-8">
                  <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 p-1 rounded-3xl shadow-2xl">
                    <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0 rounded-3xl overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 animate-pulse"></div>
                        <CardTitle className="flex items-center gap-3 text-2xl font-bold relative z-10">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                            <FileText className="h-5 w-5 text-white" />
                          </div>
                          📝 Service Application Form
                        </CardTitle>
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                      </CardHeader>
                      <CardContent className="p-8 bg-gradient-to-br from-gray-50/50 to-blue-50/30">
                      <p className="text-gray-600 mb-6">Please fill out the form below to proceed with your {service.title} application.</p>
                      
                      <form className="space-y-6">
                        {/* Business Location */}
                        <div className="space-y-2">
                          <Label htmlFor="businessLocation" className="text-sm font-medium">Is your business located in an industrial area / SEZ / home office / rural area?</Label>
                          <Select value={formData.businessLocation} onValueChange={(value) => setFormData({...formData, businessLocation: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select business location type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="industrial">Industrial Area</SelectItem>
                              <SelectItem value="sez">SEZ (Special Economic Zone)</SelectItem>
                              <SelectItem value="home">Home Office</SelectItem>
                              <SelectItem value="rural">Rural Area</SelectItem>
                              <SelectItem value="commercial">Commercial Area</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Operation States */}
                        <div className="space-y-2">
                          <Label htmlFor="operationStates" className="text-sm font-medium">Do you operate in multiple states or single-state only?</Label>
                          <Select value={formData.operationStates} onValueChange={(value) => setFormData({...formData, operationStates: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select operation scope" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="single">Single State Only</SelectItem>
                              <SelectItem value="multiple">Multiple States</SelectItem>
                              <SelectItem value="pan-india">Pan India</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Existing Certificates */}
                        <div className="space-y-2">
                          <Label htmlFor="existingCertificates" className="text-sm font-medium">Do you already possess any existing certificates or licenses?</Label>
                          <Textarea 
                            id="existingCertificates"
                            placeholder="List your existing certificates (e.g., FSSAI, GST, Pollution NOC, ISO, etc.)"
                            value={formData.existingCertificates}
                            onChange={(e) => setFormData({...formData, existingCertificates: e.target.value})}
                            className="min-h-[80px]"
                          />
                        </div>

                        {/* Pending Renewals */}
                        <div className="space-y-2">
                          <Label htmlFor="pendingRenewals" className="text-sm font-medium">Are there any pending renewals or expired certificates you want to update?</Label>
                          <Select value={formData.pendingRenewals} onValueChange={(value) => setFormData({...formData, pendingRenewals: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select renewal status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">No Pending Renewals</SelectItem>
                              <SelectItem value="some">Some Renewals Pending</SelectItem>
                              <SelectItem value="many">Multiple Renewals Pending</SelectItem>
                              <SelectItem value="expired">Have Expired Certificates</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Certification Type */}
                        <div className="space-y-2">
                          <Label htmlFor="certificationType" className="text-sm font-medium">Do you require mandatory or optional certifications for your business category?</Label>
                          <Select value={formData.certificationType} onValueChange={(value) => setFormData({...formData, certificationType: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select certification requirement" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mandatory">Mandatory Certifications</SelectItem>
                              <SelectItem value="optional">Optional Certifications</SelectItem>
                              <SelectItem value="both">Both Mandatory & Optional</SelectItem>
                              <SelectItem value="unsure">Not Sure</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Documents Ready */}
                        <div className="space-y-2">
                          <Label htmlFor="documentsReady" className="text-sm font-medium">Do you have basic business documents ready?</Label>
                          <p className="text-xs text-gray-500 mb-2">PAN, Aadhaar, Udyam, Bank Statement, Address Proof, etc.</p>
                          <Select value={formData.documentsReady} onValueChange={(value) => setFormData({...formData, documentsReady: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select document readiness" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Documents Ready</SelectItem>
                              <SelectItem value="most">Most Documents Ready</SelectItem>
                              <SelectItem value="some">Some Documents Ready</SelectItem>
                              <SelectItem value="none">No Documents Ready</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Toggle Questions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="space-y-1">
                              <Label className="text-sm font-medium">Document Assistance</Label>
                              <p className="text-xs text-gray-500">Need help with document templates?</p>
                            </div>
                            <Switch 
                              checked={formData.documentAssistance}
                              onCheckedChange={(checked) => setFormData({...formData, documentAssistance: checked})}
                            />
                          </div>

                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="space-y-1">
                              <Label className="text-sm font-medium">Expert Guidance</Label>
                              <p className="text-xs text-gray-500">Connect with compliance expert?</p>
                            </div>
                            <Switch 
                              checked={formData.expertGuidance}
                              onCheckedChange={(checked) => setFormData({...formData, expertGuidance: checked})}
                            />
                          </div>

                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="space-y-1">
                              <Label className="text-sm font-medium">Government Schemes</Label>
                              <p className="text-xs text-gray-500">Apply for MSME benefits?</p>
                            </div>
                            <Switch 
                              checked={formData.governmentSchemes}
                              onCheckedChange={(checked) => setFormData({...formData, governmentSchemes: checked})}
                            />
                          </div>

                          <div className="flex items-center justify-between p-4 border rounded-lg md:col-span-2">
                            <div className="space-y-1">
                              <Label className="text-sm font-medium">Compliance Dashboard Tracking</Label>
                              <p className="text-xs text-gray-500">Track this certification in your dashboard automatically?</p>
                            </div>
                            <Switch 
                              checked={formData.complianceTracking}
                              onCheckedChange={(checked) => setFormData({...formData, complianceTracking: checked})}
                            />
                          </div>
                        </div>

                        {/* Registration Type */}
                        <div className="space-y-2">
                          <Label htmlFor="registrationType" className="text-sm font-medium">What is your business registration type?</Label>
                          <Select value={formData.registrationType} onValueChange={(value) => setFormData({...formData, registrationType: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select registration type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="udyam">Udyam Registration</SelectItem>
                              <SelectItem value="gst">GST Registration</SelectItem>
                              <SelectItem value="shop-act">Shop Act License</SelectItem>
                              <SelectItem value="company">Company Registration</SelectItem>
                              <SelectItem value="partnership">Partnership Firm</SelectItem>
                              <SelectItem value="proprietorship">Sole Proprietorship</SelectItem>
                              <SelectItem value="not-registered">Not Registered</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Years in Operation */}
                        <div className="space-y-2">
                          <Label htmlFor="yearsInOperation" className="text-sm font-medium">How many years have you been in operation?</Label>
                          <Select value={formData.yearsInOperation} onValueChange={(value) => setFormData({...formData, yearsInOperation: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select years of operation" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="startup">Startup (Less than 1 year)</SelectItem>
                              <SelectItem value="1-2">1-2 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="6-10">6-10 years</SelectItem>
                              <SelectItem value="10+">More than 10 years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Industry Sector */}
                        <div className="space-y-2">
                          <Label htmlFor="industrySector" className="text-sm font-medium">What is your industry sector?</Label>
                          <Select value={formData.industrySector} onValueChange={(value) => setFormData({...formData, industrySector: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry sector" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="trading">Trading</SelectItem>
                              <SelectItem value="services">Services</SelectItem>
                              <SelectItem value="food">Food & Beverages</SelectItem>
                              <SelectItem value="it">Information Technology</SelectItem>
                              <SelectItem value="construction">Construction</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Submit Button */}
                        {!formSubmitted && (
                          <div className="pt-6 border-t">
                            <Button 
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                setFormSubmitted(true);
                              }}
                              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-3 text-lg font-semibold rounded-xl"
                            >
                              🚀 Submit Application
                            </Button>
                          </div>
                        )}
                      </form>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Success Cards after Form Submission */}
              {formSubmitted && (
                <div className="mt-8 space-y-6">
                  {/* Success Message */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2"> Application Proceed Successfully!</h3>
                    <p className="text-gray-600">Choose your next step to proceed with your {service.title}</p>
                  </div>

                  {/* Three Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Template Options Card */}
                    <Card className="bg-white shadow-lg border-0 rounded-2xl hover:shadow-xl transition-all duration-300">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-blue-200">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <FileText className="h-5 w-5 text-blue-600" />
                           Template Options
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <Button 
                          variant="outline"
                          className="w-full h-auto p-4 flex flex-col items-start gap-2 border-2 hover:border-purple-500 hover:bg-purple-50 transition-all"
                        >
                          <div className="flex items-center gap-2 w-full">
                            <Sparkles className="h-5 w-5 text-purple-600" />
                            <span className="font-semibold">Download Tamplate</span>
                          </div>
                          <p className="text-sm text-gray-600 text-left">Design a new certificate format</p>
                        </Button>
                        
                        <Button 
                          variant="outline"
                          onClick={downloadTemplate}
                          className="w-full h-auto p-4 flex flex-col items-start gap-2 border-2 hover:border-green-500 hover:bg-green-50 transition-all"
                        >
                          <div className="flex items-center gap-2 w-full">
                            <Download className="h-5 w-5 text-green-600" />
                            <span className="font-semibold">Customize Tamplate</span>
                          </div>
                          <p className="text-sm text-gray-600 text-left">Prefilled with your data</p>
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Expert Assistance Card */}
                    <Card className="bg-white shadow-lg border-0 rounded-2xl hover:shadow-xl transition-all duration-300">
                      <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 border-b border-orange-200">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <UserCheck className="h-5 w-5 text-orange-600" />
                           Expert Assistance
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <Button 
                          onClick={() => setShowExpertsModal(true)}
                          className="w-full h-auto p-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl"
                        >
                          <div className="flex flex-col items-center text-center">
                            <UserCheck className="h-8 w-8 mb-2" />
                            <span className="font-semibold text-lg">Connect with Expert</span>
                            <p className="text-sm text-orange-100 mt-1">View profiles, ratings & experience</p>
                          </div>
                        </Button>
                      </CardContent>
                    </Card>

                    
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Experts Modal */}
        <Dialog open={showExpertsModal} onOpenChange={setShowExpertsModal}>
          <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">🧑‍💼 Available Experts</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead>Expert</TableHead>
                    <TableHead>Specialization</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "CA Rajesh Kumar",
                      title: "GST Specialist",
                      experience: "5+ years",
                      rating: 4.9,
                      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                      expertise: ["GST Registration", "Tax Filing"],
                      location: "Mumbai"
                    },
                    {
                      name: "Adv. Priya Sharma",
                      title: "Legal Compliance Expert",
                      experience: "7+ years",
                      rating: 4.8,
                      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
                      expertise: ["Corporate Law", "Contracts"],
                      location: "Delhi"
                    },
                    {
                      name: "CS Amit Patel",
                      title: "Company Secretary",
                      experience: "6+ years",
                      rating: 4.7,
                      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                      expertise: ["ROC Filing", "Board Meetings"],
                      location: "Bangalore"
                    }
                  ].map((expert, index) => (
                    <TableRow key={index} className="hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img 
                            src={expert.image} 
                            alt={expert.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold">{expert.name}</div>
                            <div className="text-sm text-gray-600">{expert.title}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {expert.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{expert.experience}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-semibold">{expert.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>{expert.location}</TableCell>
                      <TableCell className="text-center">
                        <Button 
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => {
                            setShowExpertsModal(false);
                            toast.success(`Connected with ${expert.name}! They will contact you soon.`, {
                              duration: 4000
                            });
                          }}
                        >
                          Connect
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AppLayout>
  );
};

export default ServiceDetails;