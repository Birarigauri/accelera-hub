import { ArrowLeft, Edit, Download, CheckCircle, Clock, XCircle, FileText, Calendar, User, Building, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const ViewApplication = () => {
  const application = {
    id: "APP001",
    schemeName: "MSME Technology Upgradation Scheme",
    schemeId: "MSME-TECH-2024",
    status: "under_review",
    appliedDate: "2024-01-15",
    lastUpdated: "2024-01-20",
    amount: "₹35,00,000",
    progress: 85,
    
    // Personal Information
    fullName: "Rajesh Kumar",
    email: "rajesh.kumar@techsolutions.com",
    phone: "+91 98765 43210",
    aadhar: "1234 5678 9012",
    pan: "ABCDE1234F",
    
    // Business Information
    businessName: "TechSolutions India Pvt Ltd",
    businessType: "Private Limited Company",
    industry: "Information Technology",
    registrationNumber: "U72900MH2020PTC123456",
    gstNumber: "27ABCDE1234F1Z5",
    
    // Financial Information
    annualTurnover: "₹2,50,00,000",
    employeeCount: "45",
    projectCost: "₹50,00,000",
    loanAmount: "₹35,00,000",
    
    projectDescription: "Implementation of AI-based customer service platform to enhance business operations and improve customer satisfaction. The project involves developing machine learning algorithms for automated customer query resolution and integration with existing CRM systems.",
    
    documents: [
      { name: "Business Registration Certificate", status: "verified", uploadDate: "2024-01-15" },
      { name: "GST Registration", status: "verified", uploadDate: "2024-01-15" },
      { name: "Bank Statements (6 months)", status: "pending", uploadDate: "2024-01-16" },
      { name: "Project Report", status: "verified", uploadDate: "2024-01-17" },
      { name: "Quotations", status: "rejected", uploadDate: "2024-01-18" }
    ],
    
    timeline: [
      { date: "2024-01-15", event: "Application Submitted", status: "completed" },
      { date: "2024-01-16", event: "Initial Review", status: "completed" },
      { date: "2024-01-18", event: "Document Verification", status: "in_progress" },
      { date: "2024-01-25", event: "Technical Evaluation", status: "pending" },
      { date: "2024-02-01", event: "Final Approval", status: "pending" }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-700 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-700 border-red-200';
      case 'under_review': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'submitted': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'draft': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getDocumentStatusIcon = (status: string) => {
    switch (status) {
      case 'verified': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'rejected': return <XCircle className="h-4 w-4 text-red-500" />;
      default: return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Link to="/scheme-applications">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Applications
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">Application Details</h1>
                <p className="text-muted-foreground">View your scheme application</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              {(application.status === 'draft' || application.status === 'submitted') && (
                <Link to="/scheme-application">
                  <Button>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Application
                  </Button>
                </Link>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Application Overview */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{application.schemeName}</h2>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Application ID: {application.id}</span>
                        <span>Scheme ID: {application.schemeId}</span>
                      </div>
                    </div>
                    <Badge className={getStatusColor(application.status)}>
                      {application.status.replace('_', ' ').toUpperCase()}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <DollarSign className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-blue-600">{application.amount}</div>
                      <div className="text-xs text-gray-600">Requested Amount</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Calendar className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-green-600">{new Date(application.appliedDate).toLocaleDateString()}</div>
                      <div className="text-xs text-gray-600">Applied Date</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <FileText className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-purple-600">{application.progress}%</div>
                      <div className="text-xs text-gray-600">Progress</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <Clock className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                      <div className="text-lg font-bold text-orange-600">{new Date(application.lastUpdated).toLocaleDateString()}</div>
                      <div className="text-xs text-gray-600">Last Updated</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Application Progress</span>
                      <span>{application.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                        style={{ width: `${application.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                    <p className="font-semibold">{application.fullName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="font-semibold">{application.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Phone</label>
                    <p className="font-semibold">{application.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">PAN Number</label>
                    <p className="font-semibold">{application.pan}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Business Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Business Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Business Name</label>
                    <p className="font-semibold">{application.businessName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Business Type</label>
                    <p className="font-semibold">{application.businessType}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Industry</label>
                    <p className="font-semibold">{application.industry}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">GST Number</label>
                    <p className="font-semibold">{application.gstNumber}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Project Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{application.projectDescription}</p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Application Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Application Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {application.timeline.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-3 h-3 rounded-full mt-2 ${
                          item.status === 'completed' ? 'bg-green-500' :
                          item.status === 'in_progress' ? 'bg-blue-500' :
                          'bg-gray-300'
                        }`}></div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{item.event}</div>
                          <div className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Documents */}
              <Card>
                <CardHeader>
                  <CardTitle>Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {application.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="text-sm font-medium">{doc.name}</div>
                          <div className="text-xs text-gray-500">
                            Uploaded: {new Date(doc.uploadDate).toLocaleDateString()}
                          </div>
                        </div>
                        {getDocumentStatusIcon(doc.status)}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Financial Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Financial Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Annual Turnover</span>
                    <span className="font-semibold">{application.annualTurnover}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Project Cost</span>
                    <span className="font-semibold">{application.projectCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Loan Amount</span>
                    <span className="font-semibold">{application.loanAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Employees</span>
                    <span className="font-semibold">{application.employeeCount}</span>
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

export default ViewApplication;