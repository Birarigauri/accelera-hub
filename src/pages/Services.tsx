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
  Upload
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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
    if (selectedCategory !== "all" && service.category !== selectedCategory) return false;
    if (searchQuery && !service.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !service.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

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

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
          <div>
            <h1 className="text-3xl font-bold mb-2">Services & Licenses</h1>
            <p className="text-muted-foreground">
              Complete business services with expert guidance and support
            </p>
          </div>
          
          <Button variant="hero" className="w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Request Custom Service
          </Button>
        </div>

        {/* Services Tabs */}
        <Tabs defaultValue="catalog" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-white">
            <TabsTrigger value="catalog">Service Catalog</TabsTrigger>
            <TabsTrigger value="my-services">My Services</TabsTrigger>
          </TabsList>

          {/* Service Catalog */}
          <TabsContent value="catalog" className="space-y-6">
            {/* Search and Filters */}
            <Card className="bg-gradient-card border-0">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {serviceCategories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                        className="whitespace-nowrap"
                      >
                        {category.label} ({category.count})
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 relative">
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <Badge className="bg-gradient-primary text-white">Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{service.rating}</span>
                          <span className="text-xs text-muted-foreground">({service.reviews})</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-primary">{service.price}</span>
                            <span className="text-sm text-muted-foreground line-through">{service.originalPrice}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {service.duration}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium">What's included:</p>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-xs text-primary">+{service.features.length - 3} more</li>
                          )}
                        </ul>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Link to={`/services/${service.id}`} className="flex-1">
                          <Button className="w-full" variant="default">
                            Get Started
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                        <Button variant="outline" size="icon">
                          <Users className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Services */}
          <TabsContent value="my-services" className="space-y-6">
            <div className="grid gap-6">
              {myServices.map((service) => {
                const StatusIcon = getStatusIcon(service.status);
                return (
                  <Card key={service.id} className="bg-gradient-card border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <StatusIcon className="h-6 w-6 text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                Submitted on {new Date(service.submittedDate).toLocaleDateString()}
                              </p>
                            </div>
                            
                            <Badge className={getStatusColor(service.status)}>
                              {service.status.replace('-', ' ')}
                            </Badge>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">Progress</span>
                                <span className="text-sm text-muted-foreground">{service.progress}%</span>
                              </div>
                              <Progress value={service.progress} className="h-2" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="font-medium mb-1">Assigned Expert</p>
                                <p className="text-muted-foreground">{service.expert}</p>
                              </div>
                              
                              {service.status === "completed" && service.completedDate && (
                                <div>
                                  <p className="font-medium mb-1">Completed Date</p>
                                  <p className="text-muted-foreground">
                                    {new Date(service.completedDate).toLocaleDateString()}
                                  </p>
                                </div>
                              )}
                              
                              {service.nextStep && (
                                <div>
                                  <p className="font-medium mb-1">Next Step</p>
                                  <p className="text-muted-foreground">{service.nextStep}</p>
                                </div>
                              )}
                            </div>

                            {service.documents && (
                              <div>
                                <p className="font-medium mb-2">Documents Available</p>
                                <div className="flex flex-wrap gap-2">
                                  {service.documents.map((doc, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      <FileText className="h-3 w-3 mr-1" />
                                      {doc}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div className="flex gap-3 pt-4">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button variant="outline" size="sm">
                                <Phone className="h-4 w-4 mr-2" />
                                Contact Expert
                              </Button>
                              {service.status === "in-progress" && (
                                <Button variant="outline" size="sm">
                                  <Upload className="h-4 w-4 mr-2" />
                                  Upload Documents
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

export default Services;