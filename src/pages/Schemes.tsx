import { useState } from "react";
import { 
  Target, 
  Search, 
  Filter, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  Star, 
  FileText, 
  Calculator,
  Users,
  Building,
  Zap,
  Award,
  TrendingUp,
  MapPin,
  Calendar,
  IndianRupee
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const Schemes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const schemeCategories = [
    { id: "all", label: "All Schemes", count: 18 },
    { id: "startup", label: "Startup", count: 6 },
    { id: "msme", label: "MSME", count: 5 },
    { id: "manufacturing", label: "Manufacturing", count: 4 },
    { id: "technology", label: "Technology", count: 3 },
  ];

  const schemes = [
    {
      id: 1,
      title: "Startup India Seed Fund Scheme",
      description: "Financial assistance to startups for proof of concept, prototype development, product trials",
      category: "startup",
      fundingAmount: "₹20 lakhs",
      eligibility: 95,
      deadline: "2024-06-30",
      location: "Pan India",
      subsidy: "Up to 100%",
      type: "Grant",
      features: ["No equity dilution", "Mentor support", "Networking opportunities"],
      icon: Zap,
      trending: true,
      applications: 1250,
      approved: 342
    },
    {
      id: 2,
      title: "MSME Technology Upgradation Scheme",
      description: "Credit linked capital subsidy for technology upgradation in MSME sector",
      category: "msme",
      fundingAmount: "₹1 crore",
      eligibility: 88,
      deadline: "2024-05-15",
      location: "All States",
      subsidy: "15-20%",
      type: "Subsidy",
      features: ["Capital subsidy", "Technology support", "Quality certification"],
      icon: Building,
      trending: false,
      applications: 850,
      approved: 195
    },
    {
      id: 3,
      title: "Stand Up India Scheme",
      description: "Bank loans between 10 lakh to 1 crore for SC/ST/Women entrepreneurs",
      category: "startup",
      fundingAmount: "₹1 crore",
      eligibility: 92,
      deadline: "2024-08-31",
      location: "Pan India",
      subsidy: "Interest subsidy",
      type: "Loan",
      features: ["Low interest rates", "No collateral up to 50L", "Handholding support"],
      icon: Users,
      trending: true,
      applications: 2100,
      approved: 567
    },
    {
      id: 4,
      title: "Production Linked Incentive Scheme",
      description: "Incentive on incremental sales for manufacturing companies",
      category: "manufacturing",
      fundingAmount: "₹5 crore",
      eligibility: 72,
      deadline: "2024-07-20",
      location: "Manufacturing hubs",
      subsidy: "4-6%",
      type: "Incentive",
      features: ["Sales based incentive", "Export promotion", "Employment generation"],
      icon: TrendingUp,
      trending: false,
      applications: 450,
      approved: 89
    },
    {
      id: 5,
      title: "Digital India Innovation Fund",
      description: "Funding for digital innovation and technology startups",
      category: "technology",
      fundingAmount: "₹50 lakhs",
      eligibility: 85,
      deadline: "2024-04-30",
      location: "Tier 1 & 2 cities",
      subsidy: "Up to 80%",
      type: "Grant",
      features: ["R&D support", "IP assistance", "Market access"],
      icon: Award,
      trending: true,
      applications: 680,
      approved: 156
    }
  ];

  const myApplications = [
    {
      id: 1,
      schemeName: "Startup India Seed Fund",
      appliedDate: "2024-03-01",
      status: "under-review",
      progress: 60,
      amount: "₹15 lakhs",
      nextStep: "Technical evaluation pending",
      documents: ["Business Plan", "Financial Projections", "Team Details"]
    },
    {
      id: 2,
      schemeName: "MSME Technology Upgradation",
      appliedDate: "2024-02-15",
      status: "approved",
      progress: 100,
      amount: "₹8 lakhs",
      approvedDate: "2024-03-20",
      documents: ["Approval Letter", "Subsidy Certificate", "Bank Details"]
    },
    {
      id: 3,
      schemeName: "Stand Up India Scheme",
      appliedDate: "2024-03-10",
      status: "pending",
      progress: 25,
      amount: "₹25 lakhs",
      nextStep: "Initial documentation review",
      documents: ["Application Form", "Identity Proof", "Business Proposal"]
    }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    if (selectedCategory !== "all" && scheme.category !== selectedCategory) return false;
    if (searchQuery && !scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !scheme.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "text-green-600 bg-green-100";
      case "under-review": return "text-blue-600 bg-blue-100";
      case "pending": return "text-yellow-600 bg-yellow-100";
      case "rejected": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getEligibilityColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-blue-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Scheme Eligibility</h1>
            <p className="text-muted-foreground">
              Discover funding opportunities and government schemes tailored for your business
            </p>
          </div>
          
          <Button variant="hero" className="hidden md:flex">
            <Calculator className="h-4 w-4 mr-2" />
            Eligibility Calculator
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-1">18</div>
              <p className="text-sm text-muted-foreground">Available Schemes</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-1">3</div>
              <p className="text-sm text-muted-foreground">Applications Submitted</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <IndianRupee className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-1">₹48L</div>
              <p className="text-sm text-muted-foreground">Total Applied Amount</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-orange-600 mb-1">87%</div>
              <p className="text-sm text-muted-foreground">Avg Eligibility Score</p>
            </CardContent>
          </Card>
        </div>

        {/* Schemes Tabs */}
        <Tabs defaultValue="discover" className="space-y-6">
          <TabsList className="grid w-full md:w-auto md:grid-cols-3 bg-white">
            <TabsTrigger value="discover">Discover Schemes</TabsTrigger>
            <TabsTrigger value="my-applications">My Applications</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
          </TabsList>

          {/* Discover Schemes */}
          <TabsContent value="discover" className="space-y-6">
            {/* Search and Filters */}
            <Card className="bg-gradient-card border-0">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search schemes..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {schemeCategories.map((category) => (
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

            {/* Schemes Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchemes.map((scheme) => (
                <Card key={scheme.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 relative">
                  {scheme.trending && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <Badge className="bg-gradient-primary text-white">Trending</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <scheme.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${getEligibilityColor(scheme.eligibility)} mb-1`}>
                          {scheme.eligibility}%
                        </div>
                        <div className="text-xs text-muted-foreground">Eligibility</div>
                      </div>
                    </div>
                    
                    <CardTitle className="text-lg mb-2">{scheme.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {scheme.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-primary mb-1">{scheme.fundingAmount}</p>
                          <p className="text-xs text-muted-foreground">Max Funding</p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">{scheme.subsidy}</p>
                          <p className="text-xs text-muted-foreground">Subsidy</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>Deadline: {new Date(scheme.deadline).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{scheme.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{scheme.applications} applications</span>
                        <span>{scheme.approved} approved</span>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button className="flex-1" variant="default">
                          Apply Now
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Applications */}
          <TabsContent value="my-applications" className="space-y-6">
            <div className="grid gap-6">
              {myApplications.map((application) => (
                <Card key={application.id} className="bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold mb-1">{application.schemeName}</h3>
                            <p className="text-sm text-muted-foreground">
                              Applied on {new Date(application.appliedDate).toLocaleDateString()}
                            </p>
                          </div>
                          
                          <div className="text-right">
                            <Badge className={getStatusColor(application.status)}>
                              {application.status.replace('-', ' ')}
                            </Badge>
                            <p className="text-sm font-medium mt-1">{application.amount}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Application Progress</span>
                              <span className="text-sm text-muted-foreground">{application.progress}%</span>
                            </div>
                            <Progress value={application.progress} className="h-2" />
                          </div>

                          {application.nextStep && (
                            <div>
                              <p className="font-medium mb-1 text-sm">Next Step</p>
                              <p className="text-sm text-muted-foreground">{application.nextStep}</p>
                            </div>
                          )}

                          {application.approvedDate && (
                            <div>
                              <p className="font-medium mb-1 text-sm">Approved Date</p>
                              <p className="text-sm text-muted-foreground">
                                {new Date(application.approvedDate).toLocaleDateString()}
                              </p>
                            </div>
                          )}

                          <div>
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

                          <div className="flex gap-3 pt-4">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              Track Status
                            </Button>
                            {application.status === "approved" && (
                              <Button variant="default" size="sm">
                                Download Certificate
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Recommended */}
          <TabsContent value="recommended">
            <Card className="text-center p-12 bg-gradient-card border-0">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Personalized Recommendations</h3>
              <p className="text-muted-foreground mb-6">
                Get AI-powered scheme recommendations based on your business profile and needs
              </p>
              <Button variant="hero">
                Generate Recommendations
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

export default Schemes;