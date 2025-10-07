import { useState } from "react";
import { Link } from "react-router-dom";
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
  IndianRupee,
  ChevronLeft,
  ChevronRight,
  Eye,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const Schemes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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

  const totalPages = Math.ceil(filteredSchemes.length / itemsPerPage);
  const paginatedSchemes = filteredSchemes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "startup": return Zap;
      case "msme": return Building;
      case "manufacturing": return TrendingUp;
      case "technology": return Award;
      default: return Target;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "startup": return "bg-blue-100 text-blue-700";
      case "msme": return "bg-green-100 text-green-700";
      case "manufacturing": return "bg-purple-100 text-purple-700";
      case "technology": return "bg-orange-100 text-orange-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

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
            <h1 className="text-3xl font-bold mb-2">Government Schemes</h1>
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
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            <Card className="bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-700 mb-2">18</div>
                <p className="text-sm font-medium text-blue-600">Available Schemes</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-700 mb-2">3</div>
                <p className="text-sm font-medium text-green-600">Applications Submitted</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-50 via-orange-100 to-amber-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-700 mb-2">87%</div>
                <p className="text-sm font-medium text-orange-600">Avg Eligibility Score</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Schemes Tabs */}
        <Tabs defaultValue="discover" className="space-y-6">
          <TabsList className="w-full bg-gray-50 p-1 rounded-xl border grid grid-cols-3 gap-1 h-auto">
            <TabsTrigger 
              value="discover" 
              className="flex-1 text-center py-3 px-2 text-sm font-medium rounded-lg transition-all duration-200 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md text-gray-600"
            >
              All Schemes
            </TabsTrigger>
            <TabsTrigger 
              value="my-applications" 
              className="flex-1 text-center py-3 px-2 text-sm font-medium rounded-lg transition-all duration-200 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md text-gray-600"
            >
              My Applied Schemes
            </TabsTrigger>
            <TabsTrigger 
              value="recommended" 
              className="flex-1 text-center py-3 px-2 text-sm font-medium rounded-lg transition-all duration-200 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md text-gray-600"
            >
              Suggested
            </TabsTrigger>
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

            {/* Schemes Table */}
            <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200 pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  Available Schemes ({filteredSchemes.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50/50">
                        <TableHead className="font-semibold text-gray-700 py-4">Scheme Details</TableHead>
                        <TableHead className="font-semibold text-gray-700 text-center">Category</TableHead>
                        {/* <TableHead className="font-semibold text-gray-700 text-center">Funding</TableHead> */}
                        <TableHead className="font-semibold text-gray-700 text-center">Eligibility</TableHead>
                        <TableHead className="font-semibold text-gray-700 text-center">Deadline</TableHead>
                        <TableHead className="font-semibold text-gray-700 text-center">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedSchemes.map((scheme) => {
                        const IconComponent = getCategoryIcon(scheme.category);
                        return (
                          <TableRow key={scheme.id} className="hover:bg-blue-50/30 transition-colors border-b border-gray-100">
                            <TableCell className="py-4">
                              <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <IconComponent className="h-5 w-5 text-white" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">{scheme.title}</h3>

                                  </div>
                                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{scheme.description}</p>
                                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                    <span className="flex items-center gap-1">
                                      <Users className="h-3 w-3" />
                                      {scheme.applications} apps
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <CheckCircle className="h-3 w-3" />
                                      {scheme.approved} approved
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <Badge className={`${getCategoryColor(scheme.category)} text-xs font-medium px-2 py-1`}>
                                {scheme.category.toUpperCase()}
                              </Badge>
                            </TableCell>

                            <TableCell className="text-center">
                              <div className={`text-lg font-bold ${getEligibilityColor(scheme.eligibility)}`}>
                                {scheme.eligibility}%
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <div className="text-sm font-medium text-gray-700">
                                {new Date(scheme.deadline).toLocaleDateString('en-IN', { 
                                  day: '2-digit', 
                                  month: 'short',
                                  year: 'numeric'
                                })}
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <div className="flex items-center justify-center gap-2">
                                <Link to={`/schemes/${scheme.id}`}>
                                  <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-3 py-1.5 text-xs">
                                    Apply
                                  </Button>
                                </Link>
                                <Button variant="outline" size="sm" className="px-2 py-1.5">
                                  <Eye className="h-3 w-3" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50/30">
                    <div className="text-sm text-gray-600">
                      Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredSchemes.length)} of {filteredSchemes.length} schemes
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1.5"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => handlePageChange(page)}
                          className="px-3 py-1.5 min-w-[32px]"
                        >
                          {page}
                        </Button>
                      ))}
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1.5"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Applications */}
          <TabsContent value="my-applications" className="space-y-6">
            <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200 pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  My Applications ({myApplications.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50/50">
                        <TableHead className="font-semibold text-gray-700 py-4">Scheme Details</TableHead>
                        <TableHead className="font-semibold text-gray-700 text-center">Status</TableHead>
                        <TableHead className="font-semibold text-gray-700 text-center">Amount</TableHead>
                        <TableHead className="font-semibold text-gray-700 text-center">Progress</TableHead>
                        <TableHead className="font-semibold text-gray-700 text-center">Applied Date</TableHead>
                        <TableHead className="font-semibold text-gray-700 text-center">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {myApplications.map((application) => (
                        <TableRow key={application.id} className="hover:bg-green-50/30 transition-colors border-b border-gray-100">
                          <TableCell className="py-4">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Target className="h-5 w-5 text-white" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1">{application.schemeName}</h3>
                                {application.nextStep && (
                                  <p className="text-xs text-gray-600 leading-relaxed">{application.nextStep}</p>
                                )}
                                {application.approvedDate && (
                                  <p className="text-xs text-green-600 font-medium">Approved: {new Date(application.approvedDate).toLocaleDateString()}</p>
                                )}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge className={getStatusColor(application.status)}>
                              {application.status.replace('-', ' ').toUpperCase()}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="font-semibold text-green-600 text-sm">{application.amount}</div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="space-y-2">
                              <div className="text-sm font-medium">{application.progress}%</div>
                              <Progress value={application.progress} className="h-2 w-16 mx-auto" />
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="text-sm font-medium text-gray-700">
                              {new Date(application.appliedDate).toLocaleDateString('en-IN', { 
                                day: '2-digit', 
                                month: 'short',
                                year: 'numeric'
                              })}
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center gap-2">
                              <Button variant="outline" size="sm" className="px-2 py-1.5">
                                <Eye className="h-3 w-3" />
                              </Button>
                              <Button variant="outline" size="sm" className="px-2 py-1.5">
                                <Clock className="h-3 w-3" />
                              </Button>
                              {application.status === "approved" && (
                                <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-3 py-1.5 text-xs">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Download
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recommended */}
          <TabsContent value="recommended" className="space-y-6">
            <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-yellow-200 pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Star className="h-5 w-5 text-yellow-600" />
                  </div>
                  Suggested Schemes (2)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-6">
                  {/* Scheme 1 */}
                  <Card className="border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">MSME Technology Upgradation Scheme</h3>
                            <Badge className="bg-green-100 text-green-700 text-xs px-2 py-1">95% Match</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">Credit linked capital subsidy for technology upgradation in MSME sector. Perfect for your manufacturing business profile.</p>
                          <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-1">
                              <IndianRupee className="h-4 w-4" />
                              Up to ₹1 crore
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              Deadline: May 15, 2024
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              All States
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                              Apply Now
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Scheme 2 */}
                  <Card className="border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-gray-900">Digital India Innovation Fund</h3>
                            <Badge className="bg-blue-100 text-blue-700 text-xs px-2 py-1">88% Match</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">Funding for digital innovation and technology startups. Ideal for businesses looking to adopt digital technologies.</p>
                          <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-1">
                              <IndianRupee className="h-4 w-4" />
                              Up to ₹50 lakhs
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              Deadline: Apr 30, 2024
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              Tier 1 & 2 cities
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white">
                              Apply Now
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

export default Schemes;