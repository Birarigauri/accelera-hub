import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  Filter, 
  FileText, 
  Clock, 
  CheckCircle, 
  Star, 
  Users, 
  ArrowRight,
  Plus,
  Building,
  Shield,
  Calculator,
  Briefcase,
  Globe,
  Award,
  Phone,
  Upload,
  Calendar,
  TrendingUp,
  Eye,
  Download,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [myServicesPage, setMyServicesPage] = useState(1);
  const [myServicesPerPage] = useState(5);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const serviceCategories = [
    { id: "all", label: "All Services", count: 24 },
    { id: "registration", label: "Registration", count: 8 },
    { id: "compliance", label: "Compliance", count: 6 },
    { id: "taxation", label: "Taxation", count: 5 },
    { id: "licensing", label: "Licensing", count: 5 },
  ];

  const services = [
    {
      id: 1,
      title: "Company Registration",
      description: "Register your private limited company with complete documentation",
      category: "registration",
      price: "₹6,999",
      originalPrice: "₹9,999",
      duration: "7-10 days",
      rating: 4.8,
      reviews: 1245,
      features: ["Name Approval", "DIN & DSC", "MOA & AOA", "Certificate of Incorporation"],
      icon: Building,
      popular: true,
      status: "available"
    },
    {
      id: 2,
      title: "GST Registration",
      description: "Get your GST registration done hassle-free with expert guidance",
      category: "taxation",
      price: "₹2,499",
      originalPrice: "₹3,999",
      duration: "3-5 days",
      rating: 4.9,
      reviews: 2156,
      features: ["Application Filing", "Document Verification", "GST Certificate", "Login Credentials"],
      icon: Calculator,
      popular: false,
      status: "available"
    },
    {
      id: 3,
      title: "Trade License",
      description: "Obtain trade license for your business operations",
      category: "licensing",
      price: "₹3,999",
      originalPrice: "₹5,499",
      duration: "10-15 days",
      rating: 4.7,
      reviews: 892,
      features: ["Application Preparation", "Document Support", "Follow-up", "License Certificate"],
      icon: Shield,
      popular: false,
      status: "available"
    },
    {
      id: 4,
      title: "Annual ROC Filing",
      description: "Complete annual compliance filing with ROC",
      category: "compliance",
      price: "₹4,999",
      originalPrice: "₹7,499",
      duration: "5-7 days",
      rating: 4.6,
      reviews: 567,
      features: ["AOC-4 Filing", "MGT-7 Filing", "Expert Review", "Compliance Calendar"],
      icon: FileText,
      popular: false,
      status: "available"
    },
    {
      id: 5,
      title: "FSSAI License",
      description: "Food safety license for food business operators",
      category: "licensing",
      price: "₹2,999",
      originalPrice: "₹4,499",
      duration: "15-20 days",
      rating: 4.5,
      reviews: 324,
      features: ["Category Selection", "Application Filing", "Inspection Support", "License Certificate"],
      icon: Award,
      popular: false,
      status: "available"
    },
    {
      id: 6,
      title: "Import Export Code",
      description: "IEC registration for international trade",
      category: "registration",
      price: "₹1,999",
      originalPrice: "₹2,999",
      duration: "3-5 days",
      rating: 4.8,
      reviews: 445,
      features: ["IEC Application", "Digital Signature", "Bank Certificate", "IEC Certificate"],
      icon: Globe,
      popular: false,
      status: "available"
    }
  ];

  const myServices = [
    {
      id: 1,
      title: "Company Registration",
      status: "completed",
      progress: 100,
      submittedDate: "2024-03-15",
      completedDate: "2024-03-22",
      expert: "CA Rajesh Sharma",
      documents: ["Certificate of Incorporation", "PAN Card", "TAN Certificate"]
    },
    {
      id: 2,
      title: "GST Registration",
      status: "in-progress",
      progress: 65,
      submittedDate: "2024-03-20",
      expert: "CA Priya Patel",
      nextStep: "Document verification pending"
    },
    {
      id: 3,
      title: "Trade License",
      status: "pending",
      progress: 25,
      submittedDate: "2024-03-23",
      expert: "Advocate Suresh Kumar",
      nextStep: "Waiting for municipal approval"
    }
  ];

  const filteredServices = services.filter(service => {
    if (searchQuery && !service.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !service.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedServices = filteredServices.slice(startIndex, startIndex + itemsPerPage);

  const myServicesTotalPages = Math.ceil(myServices.length / myServicesPerPage);
  const myServicesStartIndex = (myServicesPage - 1) * myServicesPerPage;
  const paginatedMyServices = myServices.slice(myServicesStartIndex, myServicesStartIndex + myServicesPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600 bg-green-100";
      case "in-progress": return "text-blue-600 bg-blue-100";
      case "pending": return "text-yellow-600 bg-yellow-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return CheckCircle;
      case "in-progress": return Clock;
      case "pending": return FileText;
      default: return FileText;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('en-GB', options);
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
              <h1 className="text-2xl sm:text-3xl font-bold mb-1">🏢 Business Services</h1>
             
            </div>
            
            {/* <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Request Custom Service
            </Button> */}
          </div>
        </div>

        {/* Services Tabs */}
        <Tabs defaultValue="catalog" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 p-1">
            <TabsTrigger value="catalog" className="data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200">
              <Building className="h-4 w-4 mr-2" />
              All Service
            </TabsTrigger>
            <TabsTrigger value="my-services" className="data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200">
              <Users className="h-4 w-4 mr-2" />
              My Services
            </TabsTrigger>
          </TabsList>

          {/* Service Catalog */}
          <TabsContent value="catalog" className="space-y-6">
            {/* Search */}
            <Card className="bg-gradient-card border-0">
              <CardContent className="p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Services Table */}
            <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left p-4 font-semibold text-gray-900">Service</th>
                        <th className="text-left p-4 font-semibold text-gray-900">Category</th>
                        {/* <th className="text-left p-4 font-semibold text-gray-900">Actions</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedServices.map((service) => (
                        <tr key={service.id} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                                <service.icon className="h-5 w-5 " />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-semibold text-gray-900">{service.title}</h3>
                                  {service.popular && (
                                    <Badge className="bg-gradient-primary text-white text-xs">Popular</Badge>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge variant="secondary" className="capitalize">
                              {service.category}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              {/* <Link to={`/services/${service.id}`}>
                                <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                                  <Eye className="h-4 w-4 mr-1" />
                                  View Details
                                </Button>
                              </Link> */}
                              {/* <Button size="sm" variant="outline">
                                <Users className="h-4 w-4 mr-1" />
                                Expert
                              </Button> */}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Pagination */}
                <div className="flex items-center justify-between p-4 border-t bg-gray-50">
                  <div className="text-sm text-gray-600">
                    Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredServices.length)} of {filteredServices.length} services
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          size="sm"
                          variant={currentPage === page ? "default" : "outline"}
                          onClick={() => setCurrentPage(page)}
                          className="w-8 h-8 p-0"
                        >
                          {page}
                        </Button>
                      ))}
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Services */}
          <TabsContent value="my-services" className="space-y-6">
            {/* My Services Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl border border-blue-100">
              <div>
                <h2 className="text-xl font-semibold mb-2">My Service Applications</h2>
                <p className="text-muted-foreground">Track and manage your service requests</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="bg-white/80">
                  {myServices.length} Total Applications
                </Badge>
                {/* <Button variant="outline" className="bg-white/80 hover:bg-white">
                  <Plus className="h-4 w-4 mr-2" />
                  New Application
                </Button> */}
              </div>
            </div>

            {/* My Services Table */}
            <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left p-4 font-semibold text-gray-900">Service</th>
                        <th className="text-left p-4 font-semibold text-gray-900">Status</th>
                        {/* <th className="text-left p-4 font-semibold text-gray-900">Progress</th> */}
                        <th className="text-left p-4 font-semibold text-gray-900">Expert</th>
                        <th className="text-left p-4 font-semibold text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedMyServices.map((service) => {
                        const StatusIcon = getStatusIcon(service.status);
                        return (
                          <tr key={service.id} className="border-b hover:bg-gray-50 transition-colors">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer ${
                                  service.status === 'completed' ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600' :
                                  service.status === 'in-progress' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600' :
                                  'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600'
                                }`}>
                                  <StatusIcon className="h-5 w-5 text-white transition-transform duration-300 hover:scale-110" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                                  <p className="text-sm text-gray-600">
                                    Submitted {formatDate(service.submittedDate)}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <Badge className={`${getStatusColor(service.status)} font-medium px-3 py-1 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer ${
                                service.status === 'completed' ? 'hover:bg-green-200 hover:text-green-700' :
                                service.status === 'in-progress' ? 'hover:bg-blue-200 hover:text-blue-700' :
                                'hover:bg-yellow-200 hover:text-yellow-700'
                              }`}>
                                {service.status.replace('-', ' ').toUpperCase()}
                              </Badge>
                            </td>
                            {/* <td className="p-4">
                              <div className="w-24">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-xs text-gray-600">Progress</span>
                                  <span className="text-xs font-semibold text-primary">{service.progress}%</span>
                                </div>
                                <Progress value={service.progress} className="h-2" />
                              </div>
                            </td> */}
                            <td className="p-4">
                              <div className="text-sm">
                                <p className="font-medium text-gray-900">{service.expert}</p>
                                {service.nextStep && (
                                  <p className="text-xs text-gray-500 mt-1">{service.nextStep}</p>
                                )}
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-2">
                                <Button 
                                  size="sm" 
                                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                                  onClick={() => {
                                    setSelectedService(service);
                                    setIsModalOpen(true);
                                  }}
                                >
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Details
                                </Button>
                                {/* {service.status === "completed" && service.documents && (
                                  <Button size="sm" variant="secondary">
                                    <Download className="h-4 w-4 mr-1" />
                                    Download
                                  </Button>
                                )} */}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                
                {/* My Services Pagination */}
                <div className="flex items-center justify-between p-4 border-t bg-gray-50">
                  <div className="text-sm text-gray-600">
                    Showing {myServicesStartIndex + 1} to {Math.min(myServicesStartIndex + myServicesPerPage, myServices.length)} of {myServices.length} applications
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => setMyServicesPage(prev => Math.max(prev - 1, 1))}
                      disabled={myServicesPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: myServicesTotalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          size="sm"
                          variant={myServicesPage === page ? "default" : "outline"}
                          onClick={() => setMyServicesPage(page)}
                          className="w-8 h-8 p-0"
                        >
                          {page}
                        </Button>
                      ))}
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => setMyServicesPage(prev => Math.min(prev + 1, myServicesTotalPages))}
                      disabled={myServicesPage === myServicesTotalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        </div>
      </div>

      {/* Service Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    selectedService.status === 'completed' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                    selectedService.status === 'in-progress' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                    'bg-gradient-to-r from-yellow-500 to-orange-500'
                  }`}>
                    {(() => {
                      const StatusIcon = getStatusIcon(selectedService.status);
                      return <StatusIcon className="h-6 w-6 text-white" />;
                    })()}
                  </div>
                  <div>
                    <DialogTitle className="text-xl font-bold text-gray-900">
                      {selectedService.title}
                    </DialogTitle>
                    <Badge className={`${getStatusColor(selectedService.status)} font-medium px-3 py-1 mt-1`}>
                      {selectedService.status.replace('-', ' ').toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Service Timeline */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Service Timeline
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Submitted Date:</span>
                      <span className="font-medium">{formatDate(selectedService.submittedDate)}</span>
                    </div>
                    {selectedService.completedDate && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Completed Date:</span>
                        <span className="font-medium text-green-600">{formatDate(selectedService.completedDate)}</span>
                      </div>
                    )}
                    
                  </div>
                </div>

                {/* Expert Information */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Assigned Expert
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{selectedService.expert}</p>
                      {selectedService.nextStep && (
                        <p className="text-sm text-gray-600 mt-1">
                          <span className="font-medium">Next Step:</span> {selectedService.nextStep}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Documents */}
                {selectedService.documents && selectedService.documents.length > 0 && (
                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Documents
                    </h3>
                    <div className="space-y-2">
                      {selectedService.documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-white rounded-lg border">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-gray-500" />
                            <span className="text-sm font-medium">{doc}</span>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t">
                  {selectedService.status === 'completed' && (
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download All Documents
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 hover:from-blue-600 hover:to-purple-700 flex-1"
                  >
                    Contact Expert
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
};

export default Services;