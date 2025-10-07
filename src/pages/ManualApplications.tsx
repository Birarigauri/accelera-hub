import { useState } from "react";
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
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Connected": return "bg-green-100 text-green-700";
      case "Awaiting Response": return "bg-yellow-100 text-yellow-700";
      case "Completed": return "bg-blue-100 text-blue-700";
      case "In Progress": return "bg-blue-100 text-blue-700";
      case "Submitted": return "bg-purple-100 text-purple-700";
      case "Not Applied": return "bg-gray-100 text-gray-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getApplicationStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-blue-100 text-blue-700";
      case "Submitted": return "bg-purple-100 text-purple-700";
      case "Not Applied": return "bg-gray-100 text-gray-700";
      default: return "bg-gray-100 text-gray-700";
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

  const StarRating = ({ rating, onRatingChange, readonly = false }: { rating: number, onRatingChange?: (rating: number) => void, readonly?: boolean }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-6 w-6 cursor-pointer transition-colors ${
              star <= rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-700 mb-1">12</div>
                <p className="text-sm text-blue-600">Total Applications</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-700 mb-1">5</div>
                <p className="text-sm text-green-600">Active/Ongoing</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-purple-700 mb-1">3</div>
                <p className="text-sm text-purple-600">Connected with Experts</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-orange-700 mb-1">4</div>
                <p className="text-sm text-orange-600">Completed Services</p>
              </CardContent>
            </Card>
          </div>

          {/* Tab Navigation */}
          <Tabs defaultValue="manual-applications" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 p-1">
              <TabsTrigger value="manual-applications" className="data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200">
                <FileText className="h-4 w-4 mr-2" />
                Manual Applications
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
                      
                      <div className="flex items-center justify-between">
                        <Badge className={getApplicationStatusColor(app.status)}>
                          {app.status}
                        </Badge>
                        <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                          {app.status === "Not Applied" ? "Apply Now" : "Resume Application"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Tab 2: My Inquiries */}
            <TabsContent value="my-inquiries" className="space-y-6">
              <div className="space-y-4">
                {inquiries.map((inquiry) => (
                  <Card key={inquiry.id} className="bg-white shadow-lg border-0 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                        <div className="flex items-center gap-4 flex-1">
                          <img 
                            src={inquiry.avatar} 
                            alt={inquiry.expertName}
                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                            onError={(e) => {
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(inquiry.expertName)}&background=6366f1&color=fff&size=48`;
                            }}
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-gray-900">{inquiry.expertName}</h3>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="text-sm text-gray-600">{inquiry.rating}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">{inquiry.expertProfile}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <span>Inquiry ID: {inquiry.id}</span>
                              <span>•</span>
                              <span>{new Date(inquiry.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                          <div className="text-center lg:text-right">
                            <p className="font-medium text-gray-900">{inquiry.serviceName}</p>
                            <p className="text-sm text-gray-600">{inquiry.serviceType}</p>
                          </div>
                          
                          <Badge className={getStatusColor(inquiry.status)}>
                            {inquiry.status}
                          </Badge>
                          
                          <div className="flex items-center gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleViewDetails(inquiry)}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              View Details
                            </Button>
                            <Button size="sm" variant="outline">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              Chat
                            </Button>
                            {inquiry.status === "Completed" && (
                              <Button 
                                size="sm" 
                                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                                onClick={() => handleRateExpert(inquiry)}
                              >
                                <Star className="h-4 w-4 mr-1" />
                                Rate Expert
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

            {/* Tab 3: Completed Services */}
            <TabsContent value="completed-services" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedServices.map((service) => (
                  <Card key={service.id} className="bg-white shadow-lg border-0 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Completed: {new Date(service.completionDate).toLocaleDateString()}
                          </p>
                          <p className="text-xs text-gray-500 mb-3">
                            Certificate No: {service.certificateNumber}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                          <Download className="h-4 w-4 mr-2" />
                          Download Certificate
                        </Button>
                        {!service.hasReview && (
                          <Button size="sm" variant="outline" className="w-full">
                            <Star className="h-4 w-4 mr-2" />
                            Add Review / Rating
                          </Button>
                        )}
                        <Button size="sm" variant="outline" className="w-full">
                          <BarChart3 className="h-4 w-4 mr-2" />
                          Add to Compliance Tracker
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Footer Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <Bot className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Need help?</h3>
                <p className="text-sm text-gray-600 mb-4">Chat with our AI Expert Assistant 🤖</p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Compliance Dashboard</h3>
                <p className="text-sm text-gray-600 mb-4">View all your completed applications</p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Eye className="h-4 w-4 mr-2" />
                  View Dashboard
                </Button>
              </CardContent>
            </Card>
          </div>

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
                        <Badge className={getStatusColor(selectedInquiry.status)}>
                          {selectedInquiry.status}
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
                    onClick={() => setShowDetailsModal(false)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat with Expert
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