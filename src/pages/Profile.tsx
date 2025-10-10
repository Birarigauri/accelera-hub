import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};
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
      case "completed": return "text-green-600 bg-green-100 hover:bg-green-200";
      case "in-progress": return "text-blue-600 bg-blue-100 hover:bg-blue-200";
      case "rejected": return "text-red-600 bg-red-100 hover:bg-red-200";
      case "pending": return "text-yellow-600 bg-yellow-100 hover:bg-yellow-200";
      default: return "text-gray-600 bg-gray-100 hover:bg-gray-200";
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
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-6 mb-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-white">
                <h1 className="text-2xl sm:text-3xl font-bold mb-1">👤 Profile</h1>
              </div>
            </div>
          </div>

          {/* Profile Header */}
          <Card className="mb-6 bg-white shadow-lg border-0 rounded-xl">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-14 h-14">
                  <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                  <AvatarFallback className="text-lg">{userProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-lg font-bold">{userProfile.name}</h1>
                    {userProfile.eKycStatus === 'completed' && (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-200 text-xs px-1.5 py-0.5">
                        <CheckCircle className="h-3 w-3" />
                      </Badge>
                    )}
                    {userProfile.verificationLevel === 'premium' && (
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 text-xs px-1.5 py-0.5">
                        <Award className="h-3 w-3" />
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{userProfile.email}</span>
                    <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{userProfile.phone}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{userProfile.location}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:text-blue-600" onClick={() => document.getElementById('photo-upload')?.click()}>
                    <Upload className="h-4 w-4" />
                  </Button>
                  <input id="photo-upload" type="file" accept="image/*" className="hidden" />
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => window.location.href = '/ane-portal/edit-profile'}>
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3">

                <div className="text-center p-2 bg-purple-50 rounded-lg">
                  <div className="text-base font-bold text-purple-600">2</div>
                  <p className="text-xs text-muted-foreground">Business</p>
                </div>
                <div className="text-center p-2 bg-orange-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  <p className="text-xs text-muted-foreground">Verified</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 bg-slate-100 h-auto p-2 gap-1 rounded-xl border border-slate-200">
              <TabsTrigger value="overview" className="text-xs sm:text-sm px-3 py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-blue-600/40 data-[state=active]:font-bold data-[state=active]:transform data-[state=active]:scale-105 transition-all duration-200">Overview</TabsTrigger>
              <TabsTrigger value="businesses" className="text-xs sm:text-sm px-3 py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-blue-600/40 data-[state=active]:font-bold data-[state=active]:transform data-[state=active]:scale-105 transition-all duration-200">Business</TabsTrigger>
              <TabsTrigger value="applications" className="text-xs sm:text-sm px-3 py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-blue-600/40 data-[state=active]:font-bold data-[state=active]:transform data-[state=active]:scale-105 transition-all duration-200">Applications</TabsTrigger>
              <TabsTrigger value="settings" className="text-xs sm:text-sm px-3 py-3 rounded-xl col-span-2 sm:col-span-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-blue-600/40 data-[state=active]:font-bold data-[state=active]:transform data-[state=active]:scale-105 transition-all duration-200">Settings</TabsTrigger>
            </TabsList>

            {/* Overview */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                <div className="lg:col-span-2 order-2 lg:order-1">
                  <Card className="bg-white shadow-lg border-0 rounded-2xl">
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
                          <div className="flex gap-2">
                            <Input value={userProfile.email} readOnly={!isEditingProfile} className="flex-1" />
                            <NavLink to="/change-email">  <Button variant="outline" size="sm" >
                              <Mail className="h-4 w-4 mr-1" />
                              Update
                            </Button></NavLink>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Phone Number</Label>
                          <Input value={userProfile.phone} readOnly={!isEditingProfile} />
                        </div>
                        <div className="space-y-2">
                          <Label>Password</Label>
                          <div className="flex gap-2">
                            <Input type="password" value="••••••••" readOnly className="flex-1" />
                            <NavLink to="/reset-password"> <Button variant="outline" size="sm" >
                              <Key className="h-4 w-4 mr-1" />
                              Reset
                            </Button></NavLink>
                          </div>
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
                            Verified on {formatDate(userProfile.kycCompletedDate)}
                          </p>

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

                  <Card className="bg-white shadow-lg border-0 rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-lg">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors" onClick={handleAddBusiness}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add New Business
                      </Button>
                      <Link to="/services">
                        <Button variant="outline" className="w-full justify-start hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors">
                          <FileText className="h-4 w-4 mr-2" />
                          Request New Service
                        </Button>
                      </Link>

                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Businesses */}
            <TabsContent value="businesses" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">My Businesses</h2>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleAddBusiness}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Business
                </Button>
              </div>

              {/* Add Business Form */}
              {showAddBusinessForm && (
                <Card className="mb-6 bg-white shadow-lg border-0 rounded-2xl">
                  <CardHeader>
                    <CardTitle>Add New Business</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div className="space-y-2">
                        <Label>Business Name *</Label>
                        <Input
                          value={businessFormData.name}
                          onChange={(e) => setBusinessFormData({ ...businessFormData, name: e.target.value })}
                          placeholder="Enter business name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Business Type *</Label>
                        <select
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          value={businessFormData.type}
                          onChange={(e) => setBusinessFormData({ ...businessFormData, type: e.target.value })}
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
                          onChange={(e) => setBusinessFormData({ ...businessFormData, cin: e.target.value })}
                          placeholder="Enter CIN number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>PAN Number</Label>
                        <Input
                          value={businessFormData.pan}
                          onChange={(e) => setBusinessFormData({ ...businessFormData, pan: e.target.value })}
                          placeholder="Enter PAN number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>GSTIN</Label>
                        <Input
                          value={businessFormData.gstin}
                          onChange={(e) => setBusinessFormData({ ...businessFormData, gstin: e.target.value })}
                          placeholder="Enter GSTIN"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Address *</Label>
                        <Input
                          value={businessFormData.address}
                          onChange={(e) => setBusinessFormData({ ...businessFormData, address: e.target.value })}
                          placeholder="Enter business address"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleSaveBusiness} disabled={!businessFormData.name || !businessFormData.type || !businessFormData.address}>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Save Business
                      </Button>
                      <Button variant="outline" className="hover:bg-gray-50 hover:text-gray-900" onClick={handleCancelBusiness}>
                        <XCircle className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {businesses.map((business) => (
                  <Card key={business.id} className="bg-white shadow-lg border-2 border-blue-300 rounded-2xl hover:shadow-xl transition-all duration-300">
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
                                onChange={(e) => setBusinessFormData({ ...businessFormData, name: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Business Type *</Label>
                              <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                value={businessFormData.type}
                                onChange={(e) => setBusinessFormData({ ...businessFormData, type: e.target.value })}
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
                                  onChange={(e) => setBusinessFormData({ ...businessFormData, cin: e.target.value })}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>PAN</Label>
                                <Input
                                  value={businessFormData.pan}
                                  onChange={(e) => setBusinessFormData({ ...businessFormData, pan: e.target.value })}
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label>GSTIN</Label>
                              <Input
                                value={businessFormData.gstin}
                                onChange={(e) => setBusinessFormData({ ...businessFormData, gstin: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Address *</Label>
                              <Input
                                value={businessFormData.address}
                                onChange={(e) => setBusinessFormData({ ...businessFormData, address: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-3 mt-6">
                            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleSaveBusiness}>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Save Changes
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto hover:bg-gray-50 hover:text-gray-900" onClick={handleCancelBusiness}>
                              <XCircle className="h-4 w-4 mr-2" />
                              Cancel
                            </Button>
                          </div>
                        </CardContent>
                      </>
                    ) : (
                      // View Mode
                      <>
                        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100 rounded-t-2xl">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                <Building className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <CardTitle className="text-lg font-bold text-gray-900">{business.name}</CardTitle>
                                <CardDescription className="text-sm text-gray-600">{business.type}</CardDescription>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              {business.primary && (
                                <Badge className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">Primary</Badge>
                              )}
                              <Badge className={business.status === "Active" ? "bg-green-100 text-green-700 border-green-200 hover:bg-green-200" : "bg-red-100 text-red-700 border-red-200 hover:bg-red-200"}>
                                {business.status}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              {business.cin && (
                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                  <p className="text-xs font-medium text-gray-600 mb-1">CIN</p>
                                  <p className="text-sm font-semibold text-gray-900">{business.cin}</p>
                                </div>
                              )}
                              {business.pan && (
                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                  <p className="text-xs font-medium text-gray-600 mb-1">PAN</p>
                                  <p className="text-sm font-semibold text-gray-900">{business.pan}</p>
                                </div>
                              )}
                              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                <p className="text-xs font-medium text-gray-600 mb-1">GSTIN</p>
                                <p className="text-sm font-semibold text-gray-900">{business.gstin}</p>
                              </div>
                              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                                <p className="text-xs font-medium text-gray-600 mb-1">Registered</p>
                                <p className="text-sm font-semibold text-gray-900">{formatDate(business.registrationDate)}</p>
                              </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                              <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <p className="text-xs font-medium text-blue-600 mb-1">Business Address</p>
                                  <p className="text-sm text-gray-900">{business.address}</p>
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                              <Button variant="outline" size="sm" className="flex-1 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300" onClick={() => alert(`Viewing details for ${business.name}`)}>
                                <Eye className="h-4 w-4 mr-2" />
                                View
                              </Button>
                              <Button variant="outline" size="sm" className="flex-1 hover:bg-green-50 hover:text-green-600 hover:border-green-300" onClick={() => handleEditBusiness(business)}>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm" className="hover:bg-red-50 hover:text-red-600 hover:border-red-300" onClick={() => alert(`Delete ${business.name}?`)}>
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

              <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
                          <th className="text-left p-4 font-semibold text-gray-900">Application</th>
                          <th className="text-center p-4 font-semibold text-gray-900">Status</th>
                          <th className="text-center p-4 font-semibold text-gray-900">Amount</th>
                          <th className="text-center p-4 font-semibold text-gray-900">Date</th>
                          <th className="text-center p-4 font-semibold text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applicationHistory.map((application) => (
                          <tr key={application.id} className="border-b hover:bg-blue-50/30 transition-colors">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                  <FileText className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-900">{application.type}</h3>
                                  <p className="text-xs text-gray-600">ID: {application.id}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 text-center">
                              <Badge className={getStatusColor(application.status)}>
                                {application.status.replace('-', ' ')}
                              </Badge>


                            </td>
                            <td className="p-4 text-center">
                              <p className="font-semibold text-gray-900">{application.amount}</p>
                            </td>
                            <td className="p-4 text-center">
                              <p className="text-sm text-gray-700">{formatDate(application.submittedDate)}</p>
                            </td>
                            <td className="p-4 text-center">
                              <div className="flex items-center justify-center gap-2">
                                <Button variant="outline" size="sm" className="px-2 py-1.5">
                                  <Eye className="h-3 w-3" />
                                </Button>
                                {application.documents && (
                                  <Button variant="outline" size="sm" className="px-2 py-1.5">
                                    <Download className="h-3 w-3" />
                                  </Button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Journey Timeline */}
            <TabsContent value="journey" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">My Entrepreneurial Journey</h2>
              </div>

              <Card className="bg-white shadow-lg border-0 rounded-2xl">
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
                                {formatDate(milestone.date)}
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
                <Card className="bg-white shadow-lg border-0 rounded-2xl">
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

                <div className="space-y-6">
                  <Card className="bg-white shadow-lg border-0 rounded-2xl">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        Security Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button variant="outline" className="w-full justify-start hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors" onClick={() => alert('Password change functionality would be implemented here')}>
                        <Key className="h-4 w-4 mr-2" />
                        Change Password
                      </Button>
                      <Button variant="outline" className="w-full justify-start hover:bg-green-50 hover:text-green-600 hover:border-green-300 transition-colors" onClick={() => alert('Two-factor authentication setup would be implemented here')}>
                        <Shield className="h-4 w-4 mr-2" />
                        Enable Two-Factor Authentication
                      </Button>
                      <Button variant="outline" className="w-full justify-start hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300 transition-colors" onClick={() => alert('Login activity log would be displayed here')}>
                        <Eye className="h-4 w-4 mr-2" />
                        Login Activity
                      </Button>
                      <Button variant="outline" className="w-full justify-start hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 transition-colors" onClick={() => alert('Data export functionality would be implemented here')}>
                        <Download className="h-4 w-4 mr-2" />
                        Download My Data
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-lg border-0 rounded-2xl">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Key className="h-5 w-5" />
                        Reset Password
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">Change your account password securely</p>
                      <NavLink to="/reset-password">
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white" onClick={() => window.location.href = '/ane-portal/reset-password'}>
                          <Key className="h-4 w-4 mr-2" />
                          Reset Password
                        </Button>
                      </NavLink>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-lg border-0 rounded-2xl">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        Update Email Address
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">Change your registered email address</p>
                      <NavLink to="/change-email">
                        <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white" onClick={() => window.location.href = '/ane-portal/change-email'}>
                          <Mail className="h-4 w-4 mr-2" />
                          Update Email Address
                        </Button>
                      </NavLink>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;