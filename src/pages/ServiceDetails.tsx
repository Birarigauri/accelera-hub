import { useState } from "react";
import { useParams, Link } from "react-router-dom";
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
  Building
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const ServiceDetails = () => {
  const { id } = useParams();
  
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-4 lg:space-y-6 order-2 lg:order-1">
              {/* Service Header */}
              <Card className="bg-gradient-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h1 className="text-2xl font-bold mb-2">{service.title}</h1>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{service.rating}</span>
                          <span className="text-muted-foreground">({service.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{service.completedApplications}+ completed</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{service.successRate}% success rate</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{service.price}</div>
                      <div className="text-sm text-muted-foreground line-through">{service.originalPrice}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{service.duration}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">Processing Time</div>
                    </div>
                    <div className="text-center">
                      <Badge className="bg-green-100 text-green-700">Available</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Details Tabs */}
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4 bg-white">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="process">Process</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="faqs">FAQs</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <Card className="bg-gradient-card border-0">
                    <CardHeader>
                      <CardTitle>What's Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
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
                      <div className="grid md:grid-cols-2 gap-3">
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
                  <Card className="bg-gradient-card border-0">
                    <CardHeader>
                      <CardTitle>Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {service.faqs.map((faq, index) => (
                          <div key={index} className="p-4 bg-muted/50 rounded-lg">
                            <h4 className="font-semibold mb-2">{faq.question}</h4>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Action Card */}
              <Card className="bg-gradient-primary text-white border-0">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold mb-2">{service.price}</div>
                    <div className="text-white/80 line-through">{service.originalPrice}</div>
                  </div>
                  <Button variant="glass" className="w-full mb-3">
                    Get Started Now
                  </Button>
                  <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat with Expert
                  </Button>
                </CardContent>
              </Card>

              {/* Expert Card */}
              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Assigned Expert
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-3"></div>
                    <h4 className="font-semibold">{service.expert.name}</h4>
                    <p className="text-sm text-muted-foreground">{service.expert.specialization}</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Experience:</span>
                      <span className="font-medium">{service.expert.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{service.expert.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Cases:</span>
                      <span className="font-medium">{service.expert.completedCases}+</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Expert
                  </Button>
                </CardContent>
              </Card>

              {/* Support Card */}
              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Download Checklist
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Live Chat Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Call: 1800-123-4567
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ServiceDetails;