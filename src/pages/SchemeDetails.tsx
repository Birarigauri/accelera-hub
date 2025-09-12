import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Target, 
  Calendar, 
  MapPin, 
  IndianRupee, 
  CheckCircle, 
  Clock, 
  Users, 
  FileText, 
  Award,
  AlertTriangle,
  Building,
  Zap,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const SchemeDetails = () => {
  const { id } = useParams();
  
  const schemesData = {
    "1": {
      id: 1,
      title: "Startup India Seed Fund Scheme",
      description: "Financial assistance to startups for proof of concept, prototype development, product trials, market entry and commercialization",
      category: "startup",
      fundingAmount: "₹20 lakhs",
      maxFunding: "₹20,00,000",
      eligibility: 95,
      deadline: "2024-06-30",
      location: "Pan India",
      subsidy: "Up to 100%",
      type: "Grant",
      trending: true,
      applications: 1250,
      approved: 342,
      successRate: 27,
      icon: Zap,
      details: {
        overview: "The Startup India Seed Fund Scheme provides financial assistance to startups for proof of concept, prototype development, product trials, market entry and commercialization. This scheme aims to support startups with innovative ideas and help them validate their business models.",
        objectives: [
          "Support startups with innovative ideas",
          "Provide financial assistance for proof of concept",
          "Help in prototype development and testing",
          "Support market entry and commercialization",
          "Create a robust startup ecosystem in India"
        ],
        eligibilityRequirements: [
          "Company incorporated as Private Limited Company or LLP",
          "Incorporated not more than 2 years ago",
          "Annual turnover not exceeding ₹25 crores",
          "Working on innovation/development of new products",
          "Not formed by splitting up existing business"
        ],
        applicationProcess: [
          { step: 1, title: "Online Application", description: "Submit application on Startup India portal", duration: "1 day" },
          { step: 2, title: "Initial Screening", description: "Application reviewed by expert committee", duration: "15 days" },
          { step: 3, title: "Pitch Presentation", description: "Present business idea to evaluation panel", duration: "7 days" },
          { step: 4, title: "Due Diligence", description: "Detailed evaluation and verification", duration: "30 days" },
          { step: 5, title: "Fund Disbursement", description: "Approval and fund release", duration: "15 days" }
        ],
        documents: [
          "Certificate of Incorporation",
          "Memorandum and Articles of Association",
          "PAN Card of Company and Directors",
          "Aadhaar Card of Directors",
          "Business Plan and Financial Projections",
          "Proof of Concept/Prototype Details",
          "Bank Account Details and Statements"
        ],
        benefits: [
          "No equity dilution required",
          "Mentorship and guidance support",
          "Access to incubators and accelerators",
          "Networking opportunities with investors",
          "Government backing and credibility",
          "Tax benefits under Startup India initiative"
        ]
      },
      contact: {
        department: "Department for Promotion of Industry and Internal Trade (DPIIT)",
        email: "startupindia-dpiit@gov.in",
        phone: "1800-115-565",
        website: "www.startupindia.gov.in"
      }
    },
    "2": {
      id: 2,
      title: "MSME Technology Upgradation Scheme",
      description: "Credit linked capital subsidy for technology upgradation in MSME sector to enhance productivity and competitiveness",
      category: "msme",
      fundingAmount: "₹1 crore",
      maxFunding: "₹1,00,00,000",
      eligibility: 88,
      deadline: "2024-05-15",
      location: "All States",
      subsidy: "15-20%",
      type: "Subsidy",
      trending: false,
      applications: 850,
      approved: 195,
      successRate: 23,
      icon: Building,
      details: {
        overview: "The MSME Technology Upgradation Scheme provides credit linked capital subsidy to MSMEs for technology upgradation. The scheme aims to facilitate technology upgradation by providing upfront capital subsidy to reduce the effective rate of interest on institutional finance.",
        objectives: [
          "Facilitate technology upgradation in MSME sector",
          "Enhance productivity and competitiveness",
          "Promote adoption of modern technology",
          "Reduce cost of technology upgradation",
          "Support sustainable growth of MSMEs"
        ],
        eligibilityRequirements: [
          "Registered MSME unit",
          "Valid Udyam Registration Certificate",
          "Existing unit for at least 3 years",
          "Technology upgradation investment minimum ₹25 lakhs",
          "No default in loan repayment"
        ],
        applicationProcess: [
          { step: 1, title: "Bank Application", description: "Apply for term loan with participating bank", duration: "3 days" },
          { step: 2, title: "Project Appraisal", description: "Bank evaluates project and technology", duration: "15 days" },
          { step: 3, title: "Loan Sanction", description: "Bank sanctions term loan for project", duration: "7 days" },
          { step: 4, title: "Subsidy Application", description: "Submit subsidy claim to implementing agency", duration: "5 days" },
          { step: 5, title: "Subsidy Release", description: "Verification and subsidy disbursement", duration: "30 days" }
        ],
        documents: [
          "Udyam Registration Certificate",
          "Project Report with Technology Details",
          "Quotations from Technology Suppliers",
          "Bank Loan Sanction Letter",
          "Audited Financial Statements (3 years)",
          "GST Registration Certificate",
          "Environmental Clearance (if applicable)"
        ],
        benefits: [
          "15% capital subsidy for general category",
          "20% capital subsidy for SC/ST/Women entrepreneurs",
          "Reduced effective interest rate on loans",
          "Enhanced productivity and efficiency",
          "Improved product quality and competitiveness",
          "Access to modern technology and equipment"
        ]
      },
      contact: {
        department: "Ministry of Micro, Small and Medium Enterprises",
        email: "msme-schemes@gov.in",
        phone: "1800-180-6763",
        website: "www.msme.gov.in"
      }
    },
    "3": {
      id: 3,
      title: "Stand Up India Scheme",
      description: "Bank loans between ₹10 lakh to ₹1 crore for SC/ST/Women entrepreneurs to promote entrepreneurship among underrepresented communities",
      category: "startup",
      fundingAmount: "₹1 crore",
      maxFunding: "₹1,00,00,000",
      eligibility: 92,
      deadline: "2024-08-31",
      location: "Pan India",
      subsidy: "Interest subsidy",
      type: "Loan",
      trending: true,
      applications: 2100,
      approved: 567,
      successRate: 27,
      icon: Users,
      details: {
        overview: "Stand Up India Scheme facilitates bank loans between ₹10 lakh to ₹1 crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower per bank branch for setting up a greenfield enterprise.",
        objectives: [
          "Promote entrepreneurship among SC/ST and Women",
          "Facilitate easy access to credit",
          "Support greenfield enterprises",
          "Create employment opportunities",
          "Foster inclusive growth and development"
        ],
        eligibilityRequirements: [
          "SC/ST and/or Women entrepreneur above 18 years",
          "Loan for greenfield project only",
          "Borrower should not be in default to any bank/financial institution",
          "Project cost between ₹10 lakh to ₹1 crore",
          "At least 51% shareholding and controlling stake"
        ],
        applicationProcess: [
          { step: 1, title: "Online Application", description: "Apply through Stand Up India portal", duration: "1 day" },
          { step: 2, title: "Document Verification", description: "Bank verifies submitted documents", duration: "7 days" },
          { step: 3, title: "Project Evaluation", description: "Technical and financial evaluation", duration: "15 days" },
          { step: 4, title: "Loan Approval", description: "Credit committee approval", duration: "10 days" },
          { step: 5, title: "Loan Disbursement", description: "Fund release and monitoring", duration: "7 days" }
        ],
        documents: [
          "Identity and Address Proof",
          "Caste Certificate (for SC/ST)",
          "Project Report and Business Plan",
          "Quotations for Plant & Machinery",
          "Land/Building Documents",
          "Experience Certificate (if any)",
          "Partnership Deed/MOA & AOA"
        ],
        benefits: [
          "Collateral-free loans up to ₹50 lakhs",
          "Composite loan covering term loan and working capital",
          "Handholding support for 2 years",
          "Credit guarantee coverage",
          "Skill development and training support",
          "Market linkage assistance"
        ]
      },
      contact: {
        department: "Department of Financial Services, Ministry of Finance",
        email: "standupindia@gov.in",
        phone: "1800-180-1111",
        website: "www.standupmitra.in"
      }
    }
  };

  const scheme = schemesData[id as keyof typeof schemesData];

  if (!scheme) {
    return (
      <AppLayout>
        <div className="min-h-screen bg-muted/30 flex items-center justify-center">
          <Card className="text-center p-8">
            <h2 className="text-xl font-semibold mb-2">Scheme Not Found</h2>
            <p className="text-muted-foreground mb-4">The requested scheme could not be found.</p>
            <Link to="/schemes">
              <Button>Back to Schemes</Button>
            </Link>
          </Card>
        </div>
      </AppLayout>
    );
  }

  const getEligibilityColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-blue-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const daysLeft = Math.ceil((new Date(scheme.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <Link to="/schemes" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Schemes
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Scheme Header */}
              <Card className="bg-gradient-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <scheme.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h1 className="text-2xl font-bold">{scheme.title}</h1>
                        {scheme.trending && (
                          <Badge className="bg-orange-100 text-orange-700">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-4">{scheme.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className={`font-bold ${getEligibilityColor(scheme.eligibility)}`}>
                          {scheme.eligibility}% Eligibility Match
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{scheme.applications} applications</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{scheme.approved} approved</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary mb-1">{scheme.fundingAmount}</div>
                      <div className="text-sm text-muted-foreground">Max Funding</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold mb-1">{scheme.subsidy}</div>
                      <div className="text-sm text-muted-foreground">Subsidy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold mb-1">{daysLeft} days</div>
                      <div className="text-sm text-muted-foreground">Time Left</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold mb-1">{scheme.successRate}%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                  </div>

                  {daysLeft <= 30 && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <span className="text-sm text-yellow-800">
                        Application deadline is approaching! Only {daysLeft} days left to apply.
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Scheme Details Tabs */}
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4 bg-white">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                  <TabsTrigger value="process">Process</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <Card className="bg-gradient-card border-0">
                    <CardHeader>
                      <CardTitle>Scheme Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <p className="text-muted-foreground mb-4">{scheme.details.overview}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Key Objectives</h4>
                        <div className="space-y-2">
                          {scheme.details.objectives.map((objective, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Target className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{objective}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Key Benefits</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {scheme.details.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <div>
                            <div className="font-medium text-blue-900">Application Deadline</div>
                            <div className="text-sm text-blue-700">{new Date(scheme.deadline).toLocaleDateString()}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          <div>
                            <div className="font-medium text-blue-900">Coverage Area</div>
                            <div className="text-sm text-blue-700">{scheme.location}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="eligibility">
                  <Card className="bg-gradient-card border-0">
                    <CardHeader>
                      <CardTitle>Eligibility Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {scheme.details.eligibilityRequirements.map((requirement, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{requirement}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="h-5 w-5 text-green-600" />
                          <span className="font-semibold text-green-900">Your Eligibility Score</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <Progress value={scheme.eligibility} className="flex-1 h-3" />
                          <span className={`font-bold text-lg ${getEligibilityColor(scheme.eligibility)}`}>
                            {scheme.eligibility}%
                          </span>
                        </div>
                        <p className="text-sm text-green-700 mt-2">
                          {scheme.eligibility >= 90 ? "Excellent match! You meet most requirements." :
                           scheme.eligibility >= 70 ? "Good match! You meet most requirements." :
                           "Moderate match. Review requirements carefully."}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="process">
                  <Card className="bg-gradient-card border-0">
                    <CardHeader>
                      <CardTitle>Application Process</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {scheme.details.applicationProcess.map((step, index) => (
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
                              {index < scheme.details.applicationProcess.length - 1 && (
                                <div className="w-0.5 h-6 bg-border ml-4 mt-4"></div>
                              )}
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
                        {scheme.details.documents.map((doc, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                            <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{doc}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Document Preparation Tips</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Ensure all documents are self-attested</li>
                          <li>• Keep both original and photocopies ready</li>
                          <li>• Verify all information is current and accurate</li>
                          <li>• Get documents notarized where required</li>
                        </ul>
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
                    <div className="text-2xl font-bold mb-1">{scheme.fundingAmount}</div>
                    <div className="text-white/80 text-sm">Maximum Funding</div>
                  </div>
                  <Button variant="glass" className="w-full mb-3">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Guidelines
                  </Button>
                </CardContent>
              </Card>

              {/* Eligibility Card */}
              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Eligibility Check
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className={`text-3xl font-bold mb-2 ${getEligibilityColor(scheme.eligibility)}`}>
                      {scheme.eligibility}%
                    </div>
                    <p className="text-sm text-muted-foreground">Match Score</p>
                  </div>
                  <Progress value={scheme.eligibility} className="mb-4" />
                  <Button variant="outline" className="w-full">
                    Detailed Eligibility Check
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-sm mb-1">Department</p>
                    <p className="text-sm text-muted-foreground">{scheme.contact.department}</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>{scheme.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>{scheme.contact.phone}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Visit Official Website
                  </Button>
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle>Scheme Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Total Applications:</span>
                    <span className="font-medium">{scheme.applications}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Approved:</span>
                    <span className="font-medium text-green-600">{scheme.approved}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Success Rate:</span>
                    <span className="font-medium">{scheme.successRate}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Days Remaining:</span>
                    <span className={`font-medium ${daysLeft <= 30 ? 'text-red-600' : 'text-green-600'}`}>
                      {daysLeft}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SchemeDetails;