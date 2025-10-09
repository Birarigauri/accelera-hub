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
  ExternalLink,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const Schemes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const schemeFilters = [
    { id: "all", label: "All Schemes", count: 18 },
    { id: "applied", label: "Applied Schemes", count: 3 },
    { id: "applicable", label: "Eligible Schemes", count: 12 },
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
    if (selectedCategory === "applied") {
      // Show only schemes that user has applied for
      const appliedSchemeNames = myApplications.map(app => app.schemeName.toLowerCase());
      const isApplied = appliedSchemeNames.some(name => scheme.title.toLowerCase().includes(name.split(' ')[0]));
      if (!isApplied) return false;
    }
    if (selectedCategory === "applicable") {
      // Show schemes with eligibility > 70%
      if (scheme.eligibility <= 70) return false;
    }
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
      case "startup": return "bg-blue-100 text-blue-700 hover:bg-blue-200";
      case "msme": return "bg-green-100 text-green-700 hover:bg-green-200";
      case "manufacturing": return "bg-purple-100 text-purple-700 hover:bg-purple-200";
      case "technology": return "bg-orange-100 text-orange-700 hover:bg-orange-200";
      default: return "bg-gray-100 text-gray-700 hover:bg-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "text-green-600 bg-green-100 hover:bg-green-200";
      case "under-review": return "text-blue-600 bg-blue-100 hover:bg-blue-200";
      case "pending": return "text-yellow-600 bg-yellow-100 hover:bg-yellow-200";
      case "rejected": return "text-red-600 bg-red-100 hover:bg-red-200";
      default: return "text-gray-600 bg-gray-100 hover:bg-gray-200";
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
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-6 mb-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-white">
                <h1 className="text-2xl sm:text-3xl font-bold mb-1">🎯 Government Schemes</h1>
              </div>
            </div>
          </div>



          {/* Schemes Tabs */}
          <Tabs defaultValue="eligible" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 p-1">
              <TabsTrigger value="eligible" className="data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200">
                <Target className="h-4 w-4 mr-2" />
                Eligible Schemes
              </TabsTrigger>
              <TabsTrigger value="more-info" className="data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200">
                <Info className="h-4 w-4 mr-2" />
                More Info
              </TabsTrigger>
            </TabsList>

            <TabsContent value="eligible" className="space-y-6">
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
                          {/* <TableHead className="font-semibold text-gray-700 text-center">Category</TableHead> */}
                          {/* <TableHead className="font-semibold text-gray-700 text-center">Funding</TableHead> */}
                          {/* <TableHead className="font-semibold text-gray-700 text-center">Eligibility</TableHead> */}
                          <TableHead className="font-semibold text-gray-700 text-center">Deadline</TableHead>
                          <TableHead className="font-semibold text-gray-700 text-center">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {paginatedSchemes.map((scheme) => {
                          const IconComponent = getCategoryIcon(scheme.category);
                          return (
                            <TableRow key={scheme.id} className="hover:bg-blue-50/50 transition-all duration-200 border-b-2 border-gray-200 group">
                              <TableCell className="py-6 px-6">
                                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-blue-200 transition-all duration-200">
                                  <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                      <IconComponent className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center gap-2 mb-2">
                                        <h3 className="font-bold text-gray-900 text-base leading-tight">{scheme.title}</h3>
                                        {scheme.trending && (
                                          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 text-xs px-2 py-1">
                                            🔥 Trending
                                          </Badge>
                                        )}
                                      </div>
                                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{scheme.description}</p>
                                      <div className="flex items-center gap-6 text-xs text-gray-500">
                                        <span className="flex items-center gap-1">
                                          <Users className="h-3 w-3" />
                                          {scheme.applications} applications
                                        </span>
                                        <span className="flex items-center gap-1">
                                          <CheckCircle className="h-3 w-3 text-green-500" />
                                          {scheme.approved} approved
                                        </span>

                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </TableCell>

                              <TableCell className="text-center py-6 px-4">
                                <div className="">
                                  <div className="text-sm font-bold text-gray-800 whitespace-nowrap">
                                    {new Date(scheme.deadline).toLocaleDateString('en-IN', {
                                      day: '2-digit',
                                      month: 'short',
                                      year: 'numeric'
                                    })}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="text-center py-6 px-4">
                                <div className="rounded-lg p-3 ">
                                  <a href="https://seedfund.startupindia.gov.in/" target="_blank" className="flex items-center justify-center gap-2">
                                    <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 text-xs font-medium">
                                      Visit Website
                                    </Button>
                                  </a>
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

            <TabsContent value="more-info" className="space-y-6">
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

                  </div>
                </CardContent>
              </Card>

              {/* Schemes Table */}
              <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200 pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Info className="h-5 w-5 text-blue-600" />
                    </div>
                    All Schemes ({filteredSchemes.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50/50">
                          <TableHead className="font-semibold text-gray-700 py-4">Scheme Details</TableHead>
                          <TableHead className="font-semibold text-gray-700 text-center">Deadline</TableHead>
                          <TableHead className="font-semibold text-gray-700 text-center">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {paginatedSchemes.map((scheme) => {
                          const IconComponent = getCategoryIcon(scheme.category);
                          return (
                            <TableRow key={scheme.id} className="hover:bg-blue-50/50 transition-all duration-200 border-b-2 border-gray-200 group">
                              <TableCell className="py-6 px-6">
                                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-blue-200 transition-all duration-200">
                                  <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                      <IconComponent className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center gap-2 mb-2">
                                        <h3 className="font-bold text-gray-900 text-base leading-tight">{scheme.title}</h3>
                                        {scheme.trending && (
                                          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 text-xs px-2 py-1">
                                            🔥 Trending
                                          </Badge>
                                        )}
                                      </div>
                                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{scheme.description}</p>
                                      <div className="flex items-center gap-6 text-xs text-gray-500">
                                        <span className="flex items-center gap-1">
                                          <Users className="h-3 w-3" />
                                          {scheme.applications} applications
                                        </span>
                                        <span className="flex items-center gap-1">
                                          <CheckCircle className="h-3 w-3 text-green-500" />
                                          {scheme.approved} approved
                                        </span>
                                      
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </TableCell>

                              <TableCell className="text-center py-6 px-4">
                                <div className="">
                                  <div className="text-sm font-bold text-gray-800 whitespace-nowrap">
                                    {new Date(scheme.deadline).toLocaleDateString('en-IN', {
                                      day: '2-digit',
                                      month: 'short',
                                      year: 'numeric'
                                    })}
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="text-center py-6 px-4">
                                <div className="">
                                  <Button
                                    size="sm"
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 text-xs font-medium"
                                    onClick={() => {
                                      setSelectedScheme(scheme);
                                      setIsModalOpen(true);
                                    }}
                                  >
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Details
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
          </Tabs>

          {/* Scheme Details Modal */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              {selectedScheme && (
                <>
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        {(() => {
                          const IconComponent = getCategoryIcon(selectedScheme.category);
                          return <IconComponent className="h-6 w-6 text-white" />;
                        })()}
                      </div>
                      <div>
                        <DialogTitle className="text-xl font-bold text-gray-900">
                          {selectedScheme.title}
                        </DialogTitle>
                        <Badge className={`${getCategoryColor(selectedScheme.category)} text-xs px-2 py-1 mt-1`}>
                          {selectedScheme.category.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                      <p className="text-gray-700 leading-relaxed">{selectedScheme.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <IndianRupee className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600">Funding Amount</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{selectedScheme.fundingAmount}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-gray-600">Deadline</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900">
                          {new Date(selectedScheme.deadline).toLocaleDateString('en-IN', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4 text-purple-600" />
                          <span className="text-sm text-gray-600">Location</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{selectedScheme.location}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="h-4 w-4 text-orange-600" />
                          <span className="text-sm text-gray-600">Subsidy</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{selectedScheme.subsidy}</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Star className="h-4 w-4 text-green-600" />
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {selectedScheme.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <Users className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-gray-600">Applications</span>
                        </div>
                        <p className="text-2xl font-bold text-blue-600">{selectedScheme.applications}</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600">Approved</span>
                        </div>
                        <p className="text-2xl font-bold text-green-600">{selectedScheme.approved}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t">
                      <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white flex-1">
                        Visit Website
                      </Button>

                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </AppLayout>
  );
};

export default Schemes;