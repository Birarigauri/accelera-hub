import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  User, 
  Settings, 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Edit, 
  Plus,
  Trash2,
  Eye,
  Shield,
  Key,
  Bell,
  Download,
  Upload,
  CheckCircle,
  Clock,
  XCircle,
  FileText,
  Award,
  TrendingUp,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const Profile = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [showAddBusinessForm, setShowAddBusinessForm] = useState(false);
  const [editingBusiness, setEditingBusiness] = useState<number | null>(null);
  const [businessFormData, setBusinessFormData] = useState({
    name: '',
    type: '',
    cin: '',
    pan: '',
    gstin: '',
    address: ''
  });

  const userProfile = {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@techsolutions.com",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
    joinDate: "2023-01-15",
    avatar: "/api/placeholder/100/100",
    businessType: "Private Limited Company",
    industry: "Information Technology",
    employeeCount: "25-50",
    annualTurnover: "₹2-5 Crores",
    eKycStatus: "completed",
    verificationLevel: "premium",
    kycCompletedDate: "2023-02-10",
    trustScore: 98
  };

  const businesses = [
    {
      id: 1,
      name: "Tech Solutions Pvt Ltd",
      type: "Private Limited Company",
      cin: "U72200MH2023PTC401234",
      gstin: "27AADCT1234F1ZR",
      status: "Active",
      registrationDate: "2023-01-20",
      address: "Andheri East, Mumbai - 400069",
      primary: true
    },
    {
      id: 2,
      name: "Kumar Consultancy Services",
      type: "Partnership Firm",
      pan: "AADPK1234L",
      gstin: "27AADPK1234L1ZS",
      status: "Active",
      registrationDate: "2022-06-15",
      address: "Bandra West, Mumbai - 400050",
      primary: false
    }
  ];

  const applicationHistory = [
    {
      id: 1,
      type: "GST Registration",
      submittedDate: "2024-03-01",
      status: "completed",
      completedDate: "2024-03-05",
      amount: "₹2,499",
      documents: ["GST Certificate", "Login Credentials"]
    },
    {
      id: 2,
      type: "Company Registration",
      submittedDate: "2023-01-15",
      status: "completed",
      completedDate: "2023-01-25",
      amount: "₹6,999",
      documents: ["Certificate of Incorporation", "PAN Card", "TAN Certificate"]
    },
    {
      id: 3,
      type: "Trade License",
      submittedDate: "2024-03-10",
      status: "in-progress",
      expectedDate: "2024-03-25",
      amount: "₹3,999",
      progress: 65
    },
    {
      id: 4,
      type: "FSSAI License",
      submittedDate: "2024-02-20",
      status: "rejected",
      rejectedDate: "2024-03-01",
      amount: "₹2,999",
      reason: "Incomplete documentation"
    }
  ];

  const journeyMilestones = [
    {
      date: "2023-01-15",
      title: "Joined ANE Portal",
      description: "Started entrepreneurial journey with platform registration",
      type: "registration"
    },
    {
      date: "2023-01-25",
      title: "Company Incorporated",
      description: "Successfully registered Tech Solutions Pvt Ltd",
      type: "milestone"
    },
    {
      date: "2023-02-10",
      title: "First Service Completed",
      description: "GST registration completed successfully",
      type: "service"
    },
    {
      date: "2023-06-15",
      title: "Second Business Added",
      description: "Registered partnership firm for consultancy services",
      type: "expansion"
    },
    {
      date: "2024-01-20",
      title: "Premium Member",
      description: "Upgraded to premium membership for enhanced benefits",
      type: "upgrade"
    },
    {
      date: "2024-03-01",
      title: "Compliance Score 94%",
      description: "Achieved excellent compliance rating",
      type: "achievement"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600 bg-green-100";
      case "in-progress": return "text-blue-600 bg-blue-100";
      case "rejected": return "text-red-600 bg-red-100";
      case "pending": return "text-yellow-600 bg-yellow-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getMilestoneIcon = (type: string) => {
    switch (type) {
      case "registration": return User;
      case "milestone": return Award;
      case "service": return CheckCircle;
      case "expansion": return Building;
      case "upgrade": return TrendingUp;
      case "achievement": return Target;
      default: return CheckCircle;
    }
  };

  const handleAddBusiness = () => {
    setBusinessFormData({ name: '', type: '', cin: '', pan: '', gstin: '', address: '' });
    setShowAddBusinessForm(true);
  };

  const handleEditBusiness = (business: any) => {
    setBusinessFormData({
      name: business.name,
      type: business.type,
      cin: business.cin || '',
      pan: business.pan || '',
      gstin: business.gstin,
      address: business.address
    });
    setEditingBusiness(business.id);
  };

  const handleSaveBusiness = () => {
    console.log('Saving business:', businessFormData);
    setShowAddBusinessForm(false);
    setEditingBusiness(null);
  };

  const handleCancelBusiness = () => {
    setShowAddBusinessForm(false);
    setEditingBusiness(null);
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
        {/* Profile Header */}
        <Card className="mb-8 bg-gradient-card border-0">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <Avatar className="w-20 h-20 sm:w-24 sm:h-24 mx-auto sm:mx-0">
                <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                <AvatarFallback className="text-2xl">{userProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3 sm:gap-0">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-2xl font-bold">{userProfile.name}</h1>
                      {userProfile.eKycStatus === 'completed' && (
                        <div className="flex items-center gap-1">
                          <Badge className="bg-green-100 text-green-700 border-green-200 text-xs px-2 py-1">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            eKYC Verified
                          </Badge>
                          {userProfile.verificationLevel === 'premium' && (
                            <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs px-2 py-1">
                              <Award className="h-3 w-3 mr-1" />
                              Premium
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-2">{userProfile.businessType} • Trust Score: {userProfile.trustScore}%</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4">
                      <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Mail className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-blue-600 font-medium mb-1">Email</p>
                          <p className="text-sm font-semibold text-gray-900 truncate">{userProfile.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Phone className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-green-600 font-medium mb-1">Mobile</p>
                          <p className="text-sm font-semibold text-gray-900">{userProfile.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <MapPin className="h-4 w-4 text-purple-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-purple-600 font-medium mb-1">Location</p>
                          <p className="text-sm font-semibold text-gray-900">{userProfile.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto" onClick={() => document.getElementById('photo-upload')?.click()}>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Photo
                    </Button>
                    <input id="photo-upload" type="file" accept="image/*" className="hidden" />
                    <Button variant="default" size="sm" className="w-full sm:w-auto" onClick={() => setIsEditingProfile(!isEditingProfile)}>
                      <Edit className="h-4 w-4 mr-2" />
                      {isEditingProfile ? 'Save Profile' : 'Edit Profile'}
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600 mb-1">94%</div>
                    <p className="text-xs text-muted-foreground">Compliance Score</p>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600 mb-1">{userProfile.trustScore}%</div>
                    <p className="text-xs text-muted-foreground">Trust Score</p>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600 mb-1">2</div>
                    <p className="text-xs text-muted-foreground">Businesses</p>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-bold text-green-600">Verified</span>
                    </div>
                    <p className="text-xs text-muted-foreground">eKYC Status</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 bg-white overflow-x-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="businesses">Businesses</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="journey">My Journey</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="lg:col-span-2 order-2 lg:order-1">
                <Card className="bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Profile Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Full Name</Label>
                        <Input value={userProfile.name} readOnly={!isEditingProfile} />
                      </div>
                      <div className="space-y-2">
                        <Label>Email Address</Label>
                        <Input value={userProfile.email} readOnly={!isEditingProfile} />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone Number</Label>
                        <Input value={userProfile.phone} readOnly={!isEditingProfile} />
                      </div>
                      <div className="space-y-2">
                        <Label>Location</Label>
                        <Input value={userProfile.location} readOnly={!isEditingProfile} />
                      </div>
                      <div className="space-y-2">
                        <Label>Industry</Label>
                        <Input value={userProfile.industry} readOnly={!isEditingProfile} />
                      </div>
                      <div className="space-y-2">
                        <Label>Annual Turnover</Label>
                        <Input value={userProfile.annualTurnover} readOnly={!isEditingProfile} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {userProfile.eKycStatus === 'completed' ? (
                  <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <CheckCircle className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-semibold mb-2">eKYC Verified</h3>
                        <p className="text-sm text-white/90 mb-2">
                          Verified on {new Date(userProfile.kycCompletedDate).toLocaleDateString()}
                        </p>
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <Shield className="h-4 w-4" />
                          <span className="text-sm font-medium">Trust Score: {userProfile.trustScore}%</span>
                        </div>
                        <Link to="/schemes">
                          <Button variant="glass" size="sm" className="w-full">
                            View Benefits
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <AlertTriangle className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-semibold mb-2">Complete eKYC</h3>
                        <p className="text-sm text-white/90 mb-4">
                          Verify your identity to unlock premium features
                        </p>
                        <Button variant="glass" size="sm" className="w-full">
                          Start Verification
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" onClick={handleAddBusiness}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Business
                    </Button>
                    <Link to="/services">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Request New Service
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full justify-start" onClick={() => window.print()}>
                      <Download className="h-4 w-4 mr-2" />
                      Download Reports
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Businesses */}
          <TabsContent value="businesses" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">My Businesses</h2>
              <Button variant="default" onClick={handleAddBusiness}>
                <Plus className="h-4 w-4 mr-2" />
                Add Business
              </Button>
            </div>

            {/* Add Business Form */}
            {showAddBusinessForm && (
              <Card className="mb-6 bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle>Add New Business</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-2">
                      <Label>Business Name *</Label>
                      <Input 
                        value={businessFormData.name}
                        onChange={(e) => setBusinessFormData({...businessFormData, name: e.target.value})}
                        placeholder="Enter business name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Business Type *</Label>
                      <select 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        value={businessFormData.type}
                        onChange={(e) => setBusinessFormData({...businessFormData, type: e.target.value})}
                      >
                        <option value="">Select business type</option>
                        <option value="Private Limited Company">Private Limited Company</option>
                        <option value="Partnership Firm">Partnership Firm</option>
                        <option value="LLP">Limited Liability Partnership</option>
                        <option value="Sole Proprietorship">Sole Proprietorship</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label>CIN (if applicable)</Label>
                      <Input 
                        value={businessFormData.cin}
                        onChange={(e) => setBusinessFormData({...businessFormData, cin: e.target.value})}
                        placeholder="Enter CIN number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>PAN Number</Label>
                      <Input 
                        value={businessFormData.pan}
                        onChange={(e) => setBusinessFormData({...businessFormData, pan: e.target.value})}
                        placeholder="Enter PAN number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>GSTIN</Label>
                      <Input 
                        value={businessFormData.gstin}
                        onChange={(e) => setBusinessFormData({...businessFormData, gstin: e.target.value})}
                        placeholder="Enter GSTIN"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Address *</Label>
                      <Input 
                        value={businessFormData.address}
                        onChange={(e) => setBusinessFormData({...businessFormData, address: e.target.value})}
                        placeholder="Enter business address"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button onClick={handleSaveBusiness} disabled={!businessFormData.name || !businessFormData.type || !businessFormData.address}>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Save Business
                    </Button>
                    <Button variant="outline" onClick={handleCancelBusiness}>
                      <XCircle className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              {businesses.map((business) => (
                <Card key={business.id} className={`bg-gradient-card border-0 ${business.primary ? 'ring-2 ring-primary/20' : ''}`}>
                  {editingBusiness === business.id ? (
                    // Edit Form
                    <>
                      <CardHeader>
                        <CardTitle>Edit Business</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <Label>Business Name *</Label>
                            <Input 
                              value={businessFormData.name}
                              onChange={(e) => setBusinessFormData({...businessFormData, name: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Business Type *</Label>
                            <select 
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                              value={businessFormData.type}
                              onChange={(e) => setBusinessFormData({...businessFormData, type: e.target.value})}
                            >
                              <option value="Private Limited Company">Private Limited Company</option>
                              <option value="Partnership Firm">Partnership Firm</option>
                              <option value="LLP">Limited Liability Partnership</option>
                              <option value="Sole Proprietorship">Sole Proprietorship</option>
                            </select>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>CIN</Label>
                              <Input 
                                value={businessFormData.cin}
                                onChange={(e) => setBusinessFormData({...businessFormData, cin: e.target.value})}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>PAN</Label>
                              <Input 
                                value={businessFormData.pan}
                                onChange={(e) => setBusinessFormData({...businessFormData, pan: e.target.value})}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>GSTIN</Label>
                            <Input 
                              value={businessFormData.gstin}
                              onChange={(e) => setBusinessFormData({...businessFormData, gstin: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Address *</Label>
                            <Input 
                              value={businessFormData.address}
                              onChange={(e) => setBusinessFormData({...businessFormData, address: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 mt-6">
                          <Button onClick={handleSaveBusiness} className="w-full sm:w-auto">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Save Changes
                          </Button>
                          <Button variant="outline" onClick={handleCancelBusiness} className="w-full sm:w-auto">
                            <XCircle className="h-4 w-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      </CardContent>
                    </>
                  ) : (
                    // View Mode
                    <>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{business.name}</CardTitle>
                            <CardDescription>{business.type}</CardDescription>
                          </div>
                          <div className="flex gap-2">
                            {business.primary && (
                              <Badge className="bg-primary-light text-primary">Primary</Badge>
                            )}
                            <Badge className={business.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>
                              {business.status}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            {business.cin && (
                              <div>
                                <p className="font-medium">CIN</p>
                                <p className="text-muted-foreground">{business.cin}</p>
                              </div>
                            )}
                            {business.pan && (
                              <div>
                                <p className="font-medium">PAN</p>
                                <p className="text-muted-foreground">{business.pan}</p>
                              </div>
                            )}
                            <div>
                              <p className="font-medium">GSTIN</p>
                              <p className="text-muted-foreground">{business.gstin}</p>
                            </div>
                            <div>
                              <p className="font-medium">Registered</p>
                              <p className="text-muted-foreground">{new Date(business.registrationDate).toLocaleDateString()}</p>
                            </div>
                          </div>
                          
                          <div>
                            <p className="font-medium text-sm mb-1">Address</p>
                            <p className="text-sm text-muted-foreground">{business.address}</p>
                          </div>

                          <div className="flex gap-2 pt-4">
                            <Button variant="outline" size="sm" className="flex-1" onClick={() => alert(`Viewing details for ${business.name}`)}>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1" onClick={() => handleEditBusiness(business)}>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => alert(`Delete ${business.name}?`)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Applications */}
          <TabsContent value="applications" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Application History</h2>
              <Button variant="outline" onClick={() => window.print()}>
                <Download className="h-4 w-4 mr-2" />
                Export History
              </Button>
            </div>

            <div className="space-y-4">
              {applicationHistory.map((application) => (
                <Card key={application.id} className="bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold mb-1">{application.type}</h3>
                            <p className="text-sm text-muted-foreground">
                              Submitted on {new Date(application.submittedDate).toLocaleDateString()}
                            </p>
                          </div>
                          
                          <div className="text-right">
                            <Badge className={getStatusColor(application.status)}>
                              {application.status.replace('-', ' ')}
                            </Badge>
                            <p className="text-sm font-medium mt-1">{application.amount}</p>
                          </div>
                        </div>

                        {application.status === "in-progress" && (
                          <div className="mb-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Progress</span>
                              <span className="text-sm text-muted-foreground">{application.progress}%</span>
                            </div>
                            <Progress value={application.progress} className="h-2" />
                          </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                          {application.completedDate && (
                            <div>
                              <p className="font-medium">Completed Date</p>
                              <p className="text-muted-foreground">{new Date(application.completedDate).toLocaleDateString()}</p>
                            </div>
                          )}
                          {application.expectedDate && (
                            <div>
                              <p className="font-medium">Expected Date</p>
                              <p className="text-muted-foreground">{new Date(application.expectedDate).toLocaleDateString()}</p>
                            </div>
                          )}
                          {application.rejectedDate && (
                            <div>
                              <p className="font-medium">Rejected Date</p>
                              <p className="text-muted-foreground">{new Date(application.rejectedDate).toLocaleDateString()}</p>
                            </div>
                          )}
                          {application.reason && (
                            <div>
                              <p className="font-medium">Reason</p>
                              <p className="text-muted-foreground">{application.reason}</p>
                            </div>
                          )}
                        </div>

                        {application.documents && (
                          <div className="mb-4">
                            <p className="font-medium mb-2 text-sm">Documents</p>
                            <div className="flex flex-wrap gap-2">
                              {application.documents.map((doc, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  <FileText className="h-3 w-3 mr-1" />
                                  {doc}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex gap-3">
                          <Link to={`/services/${application.type === 'GST Registration' ? '2' : application.type === 'Company Registration' ? '1' : ''}`}>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </Link>
                          {application.documents && (
                            <Button variant="outline" size="sm" onClick={() => alert(`Downloading documents for ${application.type}`)}>
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Journey Timeline */}
          <TabsContent value="journey" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">My Entrepreneurial Journey</h2>
            </div>

            <Card className="bg-gradient-card border-0">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {journeyMilestones.map((milestone, index) => {
                    const IconComponent = getMilestoneIcon(milestone.type);
                    return (
                      <div key={index} className="flex items-start gap-4 relative">
                        {index < journeyMilestones.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-16 bg-border"></div>
                        )}
                        
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold">{milestone.title}</h3>
                              <p className="text-sm text-muted-foreground">{milestone.description}</p>
                            </div>
                            <div className="text-sm text-muted-foreground whitespace-nowrap">
                              {new Date(milestone.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive updates via email</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS Alerts</p>
                      <p className="text-sm text-muted-foreground">Critical alerts via SMS</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Deadline Reminders</p>
                      <p className="text-sm text-muted-foreground">Compliance deadline alerts</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Updates</p>
                      <p className="text-sm text-muted-foreground">Product updates and offers</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" onClick={() => alert('Password change functionality would be implemented here')}>
                    <Key className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => alert('Two-factor authentication setup would be implemented here')}>
                    <Shield className="h-4 w-4 mr-2" />
                    Enable Two-Factor Authentication
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => alert('Login activity log would be displayed here')}>
                    <Eye className="h-4 w-4 mr-2" />
                    Login Activity
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => alert('Data export functionality would be implemented here')}>
                    <Download className="h-4 w-4 mr-2" />
                    Download My Data
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      </div>
    </AppLayout>
  );
};

export default Profile;