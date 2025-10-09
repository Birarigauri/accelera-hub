import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Plus,
  FileText,
  Users,
  CheckCircle,
  Clock,
  Star,
  Download,
  MessageCircle,
  Eye,
  Building,
  Shield,
  Award,
  Calculator,
  Globe,
  Briefcase,
  AlertCircle,
  Bot,
  BarChart3,
  Calendar,
  Phone,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const ManualApplications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState<any>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<any>(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [showConnectionDialog, setShowConnectionDialog] = useState(false);
  const [connectionInquiry, setConnectionInquiry] = useState<any>(null);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  // Sample data for manual applications
  const manualApplications = [
    {
      id: 1,
      name: "Company Registration",
      category: "Certifications",
      type: "Manual",
      status: "Not Applied",
      icon: Building,
      recommended: true,
      description: "Register your private limited company"
    },
    {
      id: 2,
      name: "GST Registration",
      category: "Services",
      type: "Assisted",
      status: "In Progress",
      icon: Calculator,
      recommended: false,
      description: "Get GST registration for your business"
    },
    {
      id: 3,
      name: "FSSAI License",
      category: "Certifications",
      type: "Manual",
      status: "Submitted",
      icon: Shield,
      recommended: true,
      description: "Food safety license for food businesses"
    },
    {
      id: 4,
      name: "Import Export Code",
      category: "Services",
      type: "Manual",
      status: "Not Applied",
      icon: Globe,
      recommended: false,
      description: "IEC for international trade"
    },
    {
      id: 5,
      name: "Startup India Scheme",
      category: "Schemes",
      type: "Expert-led",
      status: "In Progress",
      icon: Award,
      recommended: true,
      description: "Government startup funding scheme"
    },
    {
      id: 6,
      name: "Trade License",
      category: "Certifications",
      type: "Assisted",
      status: "Not Applied",
      icon: Briefcase,
      recommended: false,
      description: "Municipal trade license for business"
    }
  ];

  // Sample data for inquiries
  const inquiries = [
    {
      id: "INQ001",
      date: "2024-03-20",
      expertName: "CA Rajesh Sharma",
      expertProfile: "Corporate Law Specialist",
      serviceName: "Company Registration",
      serviceType: "Certification",
      status: "Connected",
      rating: 4.9,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "INQ002",
      date: "2024-03-18",
      expertName: "CA Priya Patel",
      expertProfile: "GST & Tax Expert",
      serviceName: "GST Registration",
      serviceType: "Service",
      status: "Awaiting Response",
      rating: 4.8,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "INQ003",
      date: "2024-03-15",
      expertName: "Adv. Suresh Kumar",
      expertProfile: "Licensing Specialist",
      serviceName: "Trade License",
      serviceType: "Certification",
      status: "Completed",
      rating: 4.7,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  // Sample data for completed services
  const completedServices = [
    {
      id: 1,
      name: "Company Registration",
      completionDate: "2024-03-10",
      certificateNumber: "U74999DL2024PTC123456",
      type: "Certificate",
      hasReview: false
    },
    {
      id: 2,
      name: "GST Registration",
      completionDate: "2024-02-28",
      certificateNumber: "27AABCU9603R1ZM",
      type: "License",
      hasReview: true
    },
    {
      id: 3,
      name: "Digital Signature Certificate",
      completionDate: "2024-02-15",
      certificateNumber: "DSC-2024-001234",
      type: "Certificate",
      hasReview: false
    },
    {
      id: 4,
      name: "FSSAI License",
      completionDate: "2024-01-20",
      certificateNumber: "FSSAI-10023456789012",
      type: "License",
      hasReview: true
    },
    {
      id: 5,
      name: "Trade License",
      completionDate: "2024-01-05",
      certificateNumber: "TL-2024-MUM-5678",
      type: "License",
      hasReview: false
    },
    {
      id: 6,
      name: "Import Export Code",
      completionDate: "2023-12-18",
      certificateNumber: "IEC-0123456789",
      type: "Certificate",
      hasReview: true
    },
    {
      id: 7,
      name: "Startup India Registration",
      completionDate: "2023-11-25",
      certificateNumber: "DPIIT-12345",
      type: "Certificate",
      hasReview: false
    },
    {
      id: 8,
      name: "ISO 9001 Certification",
      completionDate: "2023-10-12",
      certificateNumber: "ISO-9001-2023-7890",
      type: "Certificate",
      hasReview: true
    },
    {
      id: 9,
      name: "MSME Registration",
      completionDate: "2023-09-08",
      certificateNumber: "UDYAM-DL-12-3456789",
      type: "Certificate",
      hasReview: false
    },
    {
      id: 10,
      name: "Professional Tax Registration",
      completionDate: "2023-08-22",
      certificateNumber: "PT-MH-2023-98765",
      type: "License",
      hasReview: true
    },
    {
      id: 11,
      name: "Shop and Establishment License",
      completionDate: "2023-07-15",
      certificateNumber: "SE-DL-2023-4567",
      type: "License",
      hasReview: false
    },
    {
      id: 12,
      name: "Trademark Registration",
      completionDate: "2023-06-30",
      certificateNumber: "TM-2023-123456",
      type: "Certificate",
      hasReview: true
    }
  ];

  // State for dynamic data
  const [completedServicesList, setCompletedServicesList] = useState(completedServices);
  const [inquiriesList, setInquiriesList] = useState(inquiries);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Connected": return "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200 shadow-sm";
      case "Awaiting Response": return "bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border border-amber-200 shadow-sm";
      case "Completed": return "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200 shadow-sm";
      case "In Progress": return "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200 shadow-sm";
      case "Submitted": return "bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 border border-purple-200 shadow-sm";
      default: return "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 border border-gray-200 shadow-sm";
    }
  };

  const getApplicationStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200 shadow-sm";
      case "Submitted": return "bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 border border-purple-200 shadow-sm";
      default: return "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 border border-gray-200 shadow-sm";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Connected": return <CheckCircle className="h-3 w-3 mr-1" />;
      case "Awaiting Response": return <Clock className="h-3 w-3 mr-1" />;
      case "Completed": return <CheckCircle className="h-3 w-3 mr-1" />;
      case "In Progress": return <Clock className="h-3 w-3 mr-1" />;
      case "Submitted": return <FileText className="h-3 w-3 mr-1" />;
      default: return <AlertCircle className="h-3 w-3 mr-1" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "Connected": return "Connected";
      case "Awaiting Response": return "Awaiting";
      case "Completed": return "Completed";
      case "In Progress": return "In Progress";
      case "Submitted": return "Submitted";
      default: return status;
    }
  };

  const handleRateExpert = (expert: any) => {
    setSelectedExpert(expert);
    setShowRatingModal(true);
    setRating(0);
    setReview("");
  };

  const handleViewDetails = (inquiry: any) => {
    setSelectedInquiry(inquiry);
    setShowDetailsModal(true);
  };

  const handleSubmitRating = () => {
    // Handle rating submission logic here
    console.log('Rating submitted:', { expert: selectedExpert, rating, review });
    setShowRatingModal(false);
    setSelectedExpert(null);
    setRating(0);
    setReview("");
  };

  const handleConnectionCheck = (inquiry: any) => {
    setConnectionInquiry(inquiry);
    setShowConnectionDialog(true);
  };

  const handleConnectionConfirm = (connected: boolean) => {
    if (connected && connectionInquiry) {
      // Move to completed services
      const newCompletedService = {
        id: completedServicesList.length + 1,
        name: connectionInquiry.serviceName,
        completionDate: new Date().toISOString().split('T')[0],
        certificateNumber: `CERT-${Date.now()}`,
        type: "Service",
        hasReview: false
      };

      setCompletedServicesList(prev => [...prev, newCompletedService]);

      // Update inquiry status to completed
      setInquiriesList(prev =>
        prev.map(inq =>
          inq.id === connectionInquiry.id
            ? { ...inq, status: "Completed" }
            : inq
        )
      );

      toast({
        title: "Service Moved to Completed",
        description: `${connectionInquiry.serviceName} has been moved to completed services.`,
        duration: 5000,
        className: "fixed top-4 right-4 bg-green-600 text-white border-green-500 shadow-2xl z-50 max-w-sm p-3 rounded-lg transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-right-2",
      });
    }

    setShowConnectionDialog(false);
    setConnectionInquiry(null);
  };

  const StarRating = ({ rating, onRatingChange, readonly = false }: { rating: number, onRatingChange?: (rating: number) => void, readonly?: boolean }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-6 w-6 cursor-pointer transition-colors ${star <= rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
              } ${readonly ? 'cursor-default' : 'hover:text-yellow-400'}`}
            onClick={() => !readonly && onRatingChange && onRatingChange(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />

        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-6 mb-6 shadow-xl">
            <div className="text-white text-center">
              <h1 className="text-2xl sm:text-3xl font-bold mb-1">📋 Manual Applications | My Inquiries</h1>
              <p className="text-blue-100 text-sm sm:text-base">
                Manage all your certifications, services, and scheme applications — in one place
              </p>
            </div>
          </div>

          {/* Summary Metrics */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-xl font-bold text-blue-700 mb-1">12</div>
                  <p className="text-xs text-blue-600">Total Applications</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-xl font-bold text-purple-700 mb-1">3</div>
                  <p className="text-xs text-purple-600">Connected with Experts</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-xl font-bold text-orange-700 mb-1">4</div>
                  <p className="text-xs text-orange-600">Completed Services</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tab Navigation */}
          <Tabs defaultValue="manual-applications" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 p-1">
              <TabsTrigger value="manual-applications" className="data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200">
                <FileText className="h-4 w-4 mr-2" />
                All Certificates / Licenses
              </TabsTrigger>
              <TabsTrigger value="my-inquiries" className="data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200">
                <Users className="h-4 w-4 mr-2" />
                My Inquiries
              </TabsTrigger>
              <TabsTrigger value="completed-services" className="data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200">
                <CheckCircle className="h-4 w-4 mr-2" />
                Completed Services
              </TabsTrigger>
            </TabsList>

            {/* Tab 1: Manual Applications */}
            <TabsContent value="manual-applications" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {manualApplications.map((app) => (
                  <Card key={app.id} className="bg-white shadow-lg border-0 rounded-2xl hover:shadow-xl transition-all duration-300 relative">
                    {app.recommended && (
                      <div className="absolute -top-2 -right-2 z-10">
                        <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white">⭐ Recommended</Badge>
                      </div>
                    )}

                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <app.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{app.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{app.description}</p>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline" className="text-xs">{app.category}</Badge>
                            <Badge variant="outline" className="text-xs">{app.type}</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="text-center w-full">
                        <Link to="/services/1">
                          <Button size="sm" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                            Apply Now
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Tab 2: My Inquiries */}
            <TabsContent value="my-inquiries" className="space-y-6">
              <div className="space-y-4">
                {inquiriesList.map((inquiry) => (
                  <Card key={inquiry.id} className="bg-white shadow-lg border-0 rounded-2xl hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Service Header */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                              <FileText className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 text-lg">{inquiry.serviceName}</h3>
                              <p className="text-sm text-blue-600">{inquiry.serviceType}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge className={`${getStatusColor(inquiry.status)} font-medium px-3 py-1 rounded-full inline-flex items-center whitespace-nowrap`}>
                              {getStatusIcon(inquiry.status)}
                              {getStatusText(inquiry.status)}
                            </Badge>
                            <span className="text-xs text-gray-500">ID: {inquiry.id}</span>
                          </div>
                        </div>
                      </div>

                      {/* Expert Info & Actions */}
                      <div className="flex flex-col lg:flex-row items-start gap-4">
                        <div className="flex items-center gap-4 flex-1">
                          <img
                            src={inquiry.avatar}
                            alt={inquiry.expertName}
                            className="w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg"
                            onError={(e) => {
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(inquiry.expertName)}&background=6366f1&color=fff&size=56`;
                            }}
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-gray-900 text-lg">{inquiry.expertName}</h4>
                              <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="text-sm font-medium text-yellow-700">{inquiry.rating}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{inquiry.expertProfile}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Calendar className="h-3 w-3" />
                              <span>{new Date(inquiry.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-2 lg:w-auto w-full">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleViewDetails(inquiry)}
                            className="w-full lg:w-auto"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </Button>

                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-full lg:w-auto"
                            onClick={() => handleConnectionCheck(inquiry)}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Have you connected?
                          </Button>


                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Tab 3: Completed Services */}
            <TabsContent value="completed-services" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedServicesList.map((service) => (
                  <Card key={service.id} className="bg-white shadow-lg border-0 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => {
                    setSelectedService(service);
                    setShowServiceModal(true);
                  }}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 ">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Completed: {new Date(service.completionDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </p>

                        </div>
                      </div>


                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>


          {/* Rating Modal */}
          <Dialog open={showRatingModal} onOpenChange={setShowRatingModal}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  {selectedExpert && (
                    <>
                      <img
                        src={selectedExpert.avatar}
                        alt={selectedExpert.expertName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">{selectedExpert.expertName}</h3>
                        <p className="text-sm text-gray-600">{selectedExpert.expertProfile}</p>
                      </div>
                    </>
                  )}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 py-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">How would you rate your experience?</p>
                  <StarRating rating={rating} onRatingChange={setRating} />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Share your experience (optional)
                  </label>
                  <Textarea
                    placeholder="Tell us about your experience with this expert..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setShowRatingModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                    onClick={handleSubmitRating}
                    disabled={rating === 0}
                  >
                    Submit Rating
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Connection Confirmation Dialog */}
          <Dialog open={showConnectionDialog} onOpenChange={setShowConnectionDialog}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold text-gray-900">
                  Connection Status
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 py-4">
                <p className="text-center text-gray-600">
                  Have you connected with the expert for <strong>{connectionInquiry?.serviceName}</strong>?
                </p>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleConnectionConfirm(false)}
                  >
                    No
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                    onClick={() => handleConnectionConfirm(true)}
                  >
                    Yes
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Service Details Modal */}
          <Dialog open={showServiceModal} onOpenChange={setShowServiceModal}>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold text-gray-900">
                  Service Completion Details
                </DialogTitle>
              </DialogHeader>

              {selectedService && (
                <div className="space-y-4 py-2">
                  {/* Service Info */}
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{selectedService.name}</h3>
                        <p className="text-green-600 text-sm">Successfully Completed</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Completion Date</p>
                        <p className="font-medium">{new Date(selectedService.completionDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Certificate Number</p>
                        <p className="font-medium">{selectedService.certificateNumber}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Service Type</p>
                        <p className="font-medium">{selectedService.type}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Processing Time</p>
                        <p className="font-medium">7-10 days</p>
                      </div>
                    </div>
                  </div>

                  {/* Expert Rating Section */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Rate Your Experience</h4>
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                        alt="Expert"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900">CA Rajesh Sharma</p>
                        <p className="text-sm text-gray-600">Service Expert</p>
                      </div>
                    </div>

                    <div className="text-center mb-4">
                      <StarRating rating={rating} onRatingChange={setRating} />
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                      onClick={() => {
                        setShowServiceModal(false);
                        setShowRatingModal(true);
                        setSelectedExpert({
                          expertName: "CA Rajesh Sharma",
                          expertProfile: "Service Expert",
                          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                        });
                      }}
                      disabled={rating === 0}
                    >
                      <Star className="h-4 w-4 mr-2" />
                      Submit Rating
                    </Button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => alert('Download certificate')}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Certificate
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setShowServiceModal(false)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* View Details Modal */}
          <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold text-gray-900">
                  Inquiry Details
                </DialogTitle>
              </DialogHeader>

              {selectedInquiry && (
                <div className="space-y-4 py-2">
                  {/* Connection Info */}
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-600">ID: {selectedInquiry.id}</p>
                        <Badge className={`${getStatusColor(selectedInquiry.status)} font-medium px-3 py-1 rounded-full inline-flex items-center whitespace-nowrap`}>
                          {getStatusIcon(selectedInquiry.status)}
                          {getStatusText(selectedInquiry.status)}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-gray-600">Date: {new Date(selectedInquiry.connectionDate).toLocaleDateString()}</p>
                        <p className="font-medium">{selectedInquiry.serviceType}</p>
                      </div>
                    </div>
                  </div>

                  {/* Service & Expert Combined */}
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={selectedInquiry.avatar}
                        alt={selectedInquiry.expertName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{selectedInquiry.expertName}</h4>
                        <p className="text-purple-600 text-sm">{selectedInquiry.expertProfile}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <StarRating rating={selectedInquiry.rating} readonly={true} />
                          <span className="text-xs text-gray-600">({selectedInquiry.rating})</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm space-y-1">
                      <p><span className="font-medium">Service:</span> {selectedInquiry.serviceName}</p>
                      <p><span className="font-medium">Experience:</span> {selectedInquiry.experience}</p>
                      <p><span className="font-medium">Cases:</span> {selectedInquiry.completedCases?.toLocaleString() || 'N/A'}</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    onClick={() => {
                      setShowDetailsModal(false);
                      toast({
                        title: "Expert Connection Initiated",
                        description: "Our expert will connect in few time",
                        duration: 5000,
                        className: "fixed top-4 right-4 bg-green-600 text-white border-green-500 shadow-2xl z-50 max-w-sm p-3 rounded-lg transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-right-2",
                      });
                    }}
                  >
                    Connect with Expert
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </AppLayout>
  );
};

export default ManualApplications;