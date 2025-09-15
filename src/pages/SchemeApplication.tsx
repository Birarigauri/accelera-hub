import { useState } from "react";
import { Save, Edit, Send, ArrowLeft, CheckCircle, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const SchemeApplication = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
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
    annualTurnover: "25000000",
    employeeCount: "45",
    projectCost: "5000000",
    loanAmount: "3500000",
    
    // Scheme Specific
    schemeId: "MSME-TECH-2024",
    schemeName: "MSME Technology Upgradation Scheme",
    projectDescription: "Implementation of AI-based customer service platform to enhance business operations and improve customer satisfaction.",
    
    // Documents
    documents: [
      { name: "Business Registration Certificate", uploaded: true },
      { name: "GST Registration", uploaded: true },
      { name: "Bank Statements (6 months)", uploaded: false },
      { name: "Project Report", uploaded: false },
      { name: "Quotations", uploaded: false }
    ]
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  const handleSubmit = () => {
    // Submit logic here
    alert("Application submitted successfully!");
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Link to="/schemes">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Schemes
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">Scheme Application</h1>
                <p className="text-muted-foreground">Apply for government schemes and funding</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)} variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              ) : (
                <Button onClick={handleSave} variant="outline">
                  <Save className="h-4 w-4 mr-2" />
                  Save Draft
                </Button>
              )}
              <Button onClick={handleSubmit} disabled={isEditing}>
                <Send className="h-4 w-4 mr-2" />
                Submit Application
              </Button>
            </div>
          </div>

          {/* Scheme Info */}
          <Card className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Badge className="mb-2 bg-blue-100 text-blue-700">
                    {formData.schemeId}
                  </Badge>
                  <h2 className="text-xl font-semibold mb-2">{formData.schemeName}</h2>
                  <p className="text-gray-600">Maximum Funding: ₹1 Crore | Subsidy: 25%</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Application Status</div>
                  <Badge className="bg-yellow-100 text-yellow-700">Draft</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Full Name *</Label>
                      <Input 
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label>Email *</Label>
                      <Input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label>Phone Number *</Label>
                      <Input 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label>Aadhar Number *</Label>
                      <Input 
                        value={formData.aadhar}
                        onChange={(e) => handleInputChange('aadhar', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label>PAN Number *</Label>
                      <Input 
                        value={formData.pan}
                        onChange={(e) => handleInputChange('pan', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Business Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Business Name *</Label>
                      <Input 
                        value={formData.businessName}
                        onChange={(e) => handleInputChange('businessName', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label>Business Type *</Label>
                      <select 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        value={formData.businessType}
                        onChange={(e) => handleInputChange('businessType', e.target.value)}
                        disabled={!isEditing}
                      >
                        <option>Private Limited Company</option>
                        <option>Partnership Firm</option>
                        <option>Sole Proprietorship</option>
                        <option>LLP</option>
                      </select>
                    </div>
                    <div>
                      <Label>Industry *</Label>
                      <Input 
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label>Registration Number *</Label>
                      <Input 
                        value={formData.registrationNumber}
                        onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label>GST Number</Label>
                      <Input 
                        value={formData.gstNumber}
                        onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Financial Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Financial Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Annual Turnover (₹) *</Label>
                      <Input 
                        type="number"
                        value={formData.annualTurnover}
                        onChange={(e) => handleInputChange('annualTurnover', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label>Employee Count *</Label>
                      <Input 
                        type="number"
                        value={formData.employeeCount}
                        onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label>Project Cost (₹) *</Label>
                      <Input 
                        type="number"
                        value={formData.projectCost}
                        onChange={(e) => handleInputChange('projectCost', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label>Loan Amount Required (₹) *</Label>
                      <Input 
                        type="number"
                        value={formData.loanAmount}
                        onChange={(e) => handleInputChange('loanAmount', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <Label>Describe your project in detail *</Label>
                  <Textarea 
                    rows={6}
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                    disabled={!isEditing}
                    className="mt-2"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Application Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Application Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Personal Information</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Business Information</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Financial Information</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                      <span className="text-sm text-gray-500">Document Upload</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Required Documents */}
              <Card>
                <CardHeader>
                  <CardTitle>Required Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {formData.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="text-sm font-medium">{doc.name}</div>
                          <div className={`text-xs ${doc.uploaded ? 'text-green-600' : 'text-gray-500'}`}>
                            {doc.uploaded ? 'Uploaded' : 'Required'}
                          </div>
                        </div>
                        {doc.uploaded ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <Button size="sm" variant="outline" disabled={!isEditing}>
                            <Upload className="h-3 w-3 mr-1" />
                            Upload
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Help */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Contact our support team for assistance with your application.
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    Get Support
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

export default SchemeApplication;