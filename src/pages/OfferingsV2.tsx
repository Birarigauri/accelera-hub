import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  Filter, 
  DollarSign, 
  Users, 
  Building2, 
  TrendingUp, 
  Shield, 
  Lightbulb,
  ExternalLink,
  UserCheck,
  Star,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

interface Offering {
  id: string;
  title: string;
  description: string;
  category: string;
  mode: "internal" | "external" | "expert";
  status: "active" | "closed" | "coming_soon";
  icon: any;
  featured?: boolean;
  new?: boolean;
  tagColor: string;
  externalUrl?: string;
}

const OfferingsV2 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMode, setSelectedMode] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const categories = [
    { id: "all", label: "All Categories", count: 18 },
    { id: "funding", label: "Funding Support", count: 4, color: "green" },
    { id: "mentorship", label: "Mentorship", count: 3, color: "blue" },
    { id: "infrastructure", label: "Infrastructure", count: 3, color: "orange" },
    { id: "market", label: "Market Linkages", count: 3, color: "purple" },
    { id: "ipr", label: "IPR Assistance", count: 3, color: "teal" },
    { id: "incubation", label: "Incubators", count: 2, color: "red" }
  ];

  const offerings: Offering[] = [
    // Funding Support
    {
      id: "startup-seed-fund",
      title: "Startup India Seed Fund",
      description: "Government seed funding for early-stage startups up to ₹50 lakhs",
      category: "funding",
      mode: "external",
      status: "active",
      icon: DollarSign,
      featured: true,
      new: true,
      tagColor: "bg-green-100 text-green-700",
      externalUrl: "https://startupindia.gov.in/content/sih/en/government-schemes.html"
    },
    {
      id: "mudra-loan",
      title: "MUDRA Loan Scheme",
      description: "Micro-finance loans up to ₹10 lakhs for small businesses",
      category: "funding",
      mode: "expert",
      status: "active",
      icon: DollarSign,
      tagColor: "bg-green-100 text-green-700"
    },
    {
      id: "stand-up-india",
      title: "Stand-Up India",
      description: "Bank loans between ₹10 lakhs to ₹1 crore for SC/ST/Women entrepreneurs",
      category: "funding",
      mode: "external",
      status: "active",
      icon: DollarSign,
      tagColor: "bg-green-100 text-green-700"
    },
    {
      id: "venture-capital",
      title: "Venture Capital Connect",
      description: "Connect with VCs and angel investors for growth funding",
      category: "funding",
      mode: "expert",
      status: "coming_soon",
      icon: DollarSign,
      tagColor: "bg-green-100 text-green-700"
    },

    // Mentorship
    {
      id: "mentor-connect",
      title: "Mentor Connect Program",
      description: "1-on-1 mentorship with industry experts and successful entrepreneurs",
      category: "mentorship",
      mode: "internal",
      status: "active",
      icon: Users,
      featured: true,
      tagColor: "bg-blue-100 text-blue-700"
    },
    {
      id: "industry-advisory",
      title: "Industry Advisory Board",
      description: "Strategic guidance from industry leaders and domain experts",
      category: "mentorship",
      mode: "expert",
      status: "active",
      icon: Users,
      tagColor: "bg-blue-100 text-blue-700"
    },
    {
      id: "peer-network",
      title: "Entrepreneur Peer Network",
      description: "Connect with fellow entrepreneurs for knowledge sharing",
      category: "mentorship",
      mode: "internal",
      status: "active",
      icon: Users,
      tagColor: "bg-blue-100 text-blue-700"
    },

    // Infrastructure
    {
      id: "infrastructure-connect",
      title: "Infrastructure Connect",
      description: "Access to co-working spaces, labs, and manufacturing facilities",
      category: "infrastructure",
      mode: "expert",
      status: "active",
      icon: Building2,
      tagColor: "bg-orange-100 text-orange-700"
    },
    {
      id: "tech-parks",
      title: "Technology Parks Network",
      description: "Premium office spaces in IT parks with modern amenities",
      category: "infrastructure",
      mode: "external",
      status: "active",
      icon: Building2,
      tagColor: "bg-orange-100 text-orange-700"
    },
    {
      id: "manufacturing-hubs",
      title: "Manufacturing Hubs",
      description: "Access to manufacturing facilities and industrial infrastructure",
      category: "infrastructure",
      mode: "expert",
      status: "closed",
      icon: Building2,
      tagColor: "bg-orange-100 text-orange-700"
    },

    // Market Linkages
    {
      id: "market-linkage",
      title: "Market Linkage Portal",
      description: "B2B marketplace connecting buyers and sellers across industries",
      category: "market",
      mode: "external",
      status: "active",
      icon: TrendingUp,
      featured: true,
      tagColor: "bg-purple-100 text-purple-700",
      externalUrl: "https://gem.gov.in"
    },
    {
      id: "export-promotion",
      title: "Export Promotion Council",
      description: "Support for international market entry and export facilitation",
      category: "market",
      mode: "expert",
      status: "active",
      icon: TrendingUp,
      tagColor: "bg-purple-100 text-purple-700"
    },
    {
      id: "procurement-opportunities",
      title: "Government Procurement",
      description: "Access to government tenders and procurement opportunities",
      category: "market",
      mode: "external",
      status: "active",
      icon: TrendingUp,
      tagColor: "bg-purple-100 text-purple-700"
    },

    // IPR Assistance
    {
      id: "ipr-helpdesk",
      title: "IPR Helpdesk",
      description: "Patent, trademark, and copyright registration assistance",
      category: "ipr",
      mode: "expert",
      status: "active",
      icon: Shield,
      tagColor: "bg-teal-100 text-teal-700"
    },
    {
      id: "patent-filing",
      title: "Patent Filing Support",
      description: "End-to-end patent application and prosecution services",
      category: "ipr",
      mode: "expert",
      status: "active",
      icon: Shield,
      tagColor: "bg-teal-100 text-teal-700"
    },
    {
      id: "trademark-registration",
      title: "Trademark Registration",
      description: "Brand protection through trademark registration and monitoring",
      category: "ipr",
      mode: "internal",
      status: "active",
      icon: Shield,
      tagColor: "bg-teal-100 text-teal-700"
    },

    // Incubation
    {
      id: "incubator-network",
      title: "Incubator/Accelerator Network",
      description: "Access to top incubators and accelerator programs nationwide",
      category: "incubation",
      mode: "external",
      status: "active",
      icon: Lightbulb,
      featured: true,
      tagColor: "bg-red-100 text-red-700"
    },
    {
      id: "startup-bootcamp",
      title: "Startup Bootcamp",
      description: "Intensive 3-month program for early-stage startups",
      category: "incubation",
      mode: "internal",
      status: "coming_soon",
      icon: Lightbulb,
      new: true,
      tagColor: "bg-red-100 text-red-700"
    }
  ];

  const filteredOfferings = offerings.filter(offering => {
    const matchesSearch = offering.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         offering.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || offering.category === selectedCategory;
    const matchesMode = selectedMode === "all" || offering.mode === selectedMode;
    const matchesStatus = selectedStatus === "all" || offering.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesMode && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "closed": return <AlertCircle className="h-4 w-4 text-red-600" />;
      case "coming_soon": return <Clock className="h-4 w-4 text-orange-600" />;
      default: return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active": return <Badge className="bg-green-100 text-green-700">Active</Badge>;
      case "closed": return <Badge className="bg-red-100 text-red-700">Closed</Badge>;
      case "coming_soon": return <Badge className="bg-orange-100 text-orange-700">Coming Soon</Badge>;
      default: return null;
    }
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Other Offerings
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore additional entrepreneurial support programs including funding, mentorship, 
              infrastructure support, market linkages, IPR assistance, and incubation programs
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8 bg-white shadow-lg border-0 rounded-2xl">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="🔍 Search offerings, programs, services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 text-base"
                  />
                </div>

                {/* Filters */}
                <Tabs value="filters" className="w-full">
                 
                  
                  <TabsContent value="filters" className="space-y-4 mt-4">
                    {/* Category Filter */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">Category</label>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <Button
                            key={category.id}
                            variant={selectedCategory === category.id ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(category.id)}
                            className="rounded-full"
                          >
                            {category.label} ({category.count})
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Mode and Status Filters */}
                    <div className="grid md:grid-cols-2 gap-4">
                    

                      <div>
                        <label className="text-sm font-medium mb-2 block">Status</label>
                        <div className="flex flex-wrap gap-2">
                          {["all", "active", "closed", "coming_soon"].map((status) => (
                            <Button
                              key={status}
                              variant={selectedStatus === status ? "default" : "outline"}
                              size="sm"
                              onClick={() => setSelectedStatus(status)}
                              className="rounded-full capitalize"
                            >
                              {status === "all" ? "All Status" : status.replace("_", " ")}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredOfferings.length} of {offerings.length} offerings
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOfferings.map((offering) => (
              <Card 
                key={offering.id} 
                className={`group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white border-0 rounded-2xl overflow-hidden ${
                  offering.featured ? 'ring-2 ring-blue-200' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${
                      offering.category === 'funding' ? 'from-green-500 to-green-600' :
                      offering.category === 'mentorship' ? 'from-blue-500 to-blue-600' :
                      offering.category === 'infrastructure' ? 'from-orange-500 to-orange-600' :
                      offering.category === 'market' ? 'from-purple-500 to-purple-600' :
                      offering.category === 'ipr' ? 'from-teal-500 to-teal-600' :
                      'from-red-500 to-red-600'
                    } rounded-xl flex items-center justify-center shadow-lg`}>
                      <offering.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                          {offering.title}
                        </h3>
                        <div className="flex items-center gap-1">
                          {offering.featured && (
                            <Badge className="bg-yellow-100 text-yellow-700 text-xs">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                          {offering.new && (
                            <Badge className="bg-green-100 text-green-700 text-xs">New</Badge>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {offering.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge className={offering.tagColor}>
                            {offering.category}
                          </Badge>
                          {getStatusIcon(offering.status)}
                          {getStatusBadge(offering.status)}
                        </div>
                        
                        <Link to={`/offerings/${offering.id}`}>
                          <Button 
                            size="sm" 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                          >
                            Know More
                            {offering.mode === "external" && <ExternalLink className="h-3 w-3 ml-1" />}
                            {offering.mode === "expert" && <UserCheck className="h-3 w-3 ml-1" />}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredOfferings.length === 0 && (
            <Card className="text-center p-12 bg-white shadow-lg border-0 rounded-2xl">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No offerings found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedMode("all");
                  setSelectedStatus("all");
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </Card>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default OfferingsV2;