import { useState } from "react";
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

const Profile = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

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
    annualTurnover: "₹2-5 Crores"
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

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Profile Header */}
        <Card className="mb-8 bg-gradient-card border-0">
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                <AvatarFallback className="text-2xl">{userProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold mb-1">{userProfile.name}</h1>
                    <p className="text-muted-foreground mb-2">{userProfile.businessType}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {userProfile.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        {userProfile.phone}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {userProfile.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Photo
                    </Button>
                    <Button variant="default" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">94%</div>
                    <p className="text-xs text-muted-foreground">Compliance Score</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">8</div>
                    <p className="text-xs text-muted-foreground">Services Used</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">2</div>
                    <p className="text-xs text-muted-foreground">Businesses</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 mb-1">15m</div>
                    <p className="text-xs text-muted-foreground">Member Since</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full md:w-auto md:grid-cols-5 bg-white">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="businesses">Businesses</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="journey">My Journey</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
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
                        <Input value={userProfile.name} readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>Email Address</Label>
                        <Input value={userProfile.email} readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone Number</Label>
                        <Input value={userProfile.phone} readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>Location</Label>
                        <Input value={userProfile.location} readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>Industry</Label>
                        <Input value={userProfile.industry} readOnly />
                      </div>
                      <div className="space-y-2">
                        <Label>Annual Turnover</Label>
                        <Input value={userProfile.annualTurnover} readOnly />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-primary text-white border-0">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Award className="h-8 w-8 mx-auto mb-3 opacity-90" />
                      <h3 className="font-semibold mb-2">Premium Member</h3>
                      <p className="text-sm text-white/90 mb-4">
                        Enjoy enhanced benefits and priority support
                      </p>
                      <Button variant="glass" size="sm" className="w-full">
                        View Benefits
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Business
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Request New Service
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
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
              <Button variant="default">
                <Plus className="h-4 w-4 mr-2" />
                Add Business
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {businesses.map((business) => (
                <Card key={business.id} className={`bg-gradient-card border-0 ${business.primary ? 'ring-2 ring-primary/20' : ''}`}>
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
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Applications */}
          <TabsContent value="applications" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Application History</h2>
              <Button variant="outline">
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
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          {application.documents && (
                            <Button variant="outline" size="sm">
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
            <div className="grid lg:grid-cols-2 gap-6">
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
                  <Button variant="outline" className="w-full justify-start">
                    <Key className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    Enable Two-Factor Authentication
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="h-4 w-4 mr-2" />
                    Login Activity
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
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
  );
};

export default Profile;