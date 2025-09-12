import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Grid3X3, 
  Search, 
  Star, 
  Users, 
  DollarSign, 
  Briefcase, 
  GraduationCap,
  Building,
  TrendingUp,
  MessageCircle,
  ArrowRight,
  Filter,
  MapPin,
  Clock,
  Award,
  Phone,
  Mail,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const Offerings = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Offerings", count: 42 },
    { id: "funding", label: "Funding", count: 15 },
    { id: "mentorship", label: "Mentorship", count: 18 },
    { id: "legal", label: "Legal Services", count: 9 },
  ];

  const fundingOffers = [
    {
      id: 1,
      title: "Angel Investment Network",
      description: "Connect with angel investors looking for promising startups in tech and innovation sectors",
      provider: "InvestIndia Partners",
      type: "Angel Investment",
      range: "₹10L - ₹5Cr",
      sectors: ["Technology", "Healthcare", "Fintech"],
      location: "Pan India",
      applications: 450,
      successRate: 23,
      rating: 4.6,
      reviews: 89,
      image: "/api/placeholder/300/200",
      verified: true,
      featured: true
    },
    {
      id: 2,
      title: "MSME Growth Fund",
      description: "Government-backed funding program for manufacturing and service MSMEs",
      provider: "SIDBI",
      type: "Term Loan",
      range: "₹25L - ₹10Cr",
      sectors: ["Manufacturing", "Services", "Export"],
      location: "All States",
      applications: 1200,
      successRate: 67,
      rating: 4.8,
      reviews: 234,
      image: "/api/placeholder/300/200",
      verified: true,
      featured: false
    },
    {
      id: 3,
      title: "Venture Capital Consortium",
      description: "Early to growth stage venture capital funding for scalable businesses",
      provider: "VC Partners Collective",
      type: "Venture Capital",
      range: "₹2Cr - ₹50Cr",
      sectors: ["SaaS", "E-commerce", "B2B Services"],
      location: "Metro Cities",
      applications: 680,
      successRate: 15,
      rating: 4.4,
      reviews: 156,
      image: "/api/placeholder/300/200",
      verified: true,
      featured: true
    }
  ];

  const mentors = [
    {
      id: 1,
      name: "Rajesh Sharma",
      title: "Former CEO, Tech Mahindra",
      expertise: ["Strategic Planning", "Business Development", "Technology"],
      experience: "25+ years",
      mentees: 120,
      rating: 4.9,
      reviews: 67,
      price: "₹5,000/session",
      availability: "Available",
      image: "/api/placeholder/100/100",
      verified: true,
      languages: ["English", "Hindi"],
      location: "Mumbai"
    },
    {
      id: 2,
      name: "Priya Patel",
      title: "Startup Founder & Angel Investor",
      expertise: ["Fundraising", "Product Strategy", "Market Entry"],
      experience: "15+ years",
      mentees: 85,
      rating: 4.8,
      reviews: 92,
      price: "₹3,500/session",
      availability: "Available",
      image: "/api/placeholder/100/100",
      verified: true,
      languages: ["English", "Gujarati"],
      location: "Bangalore"
    },
    {
      id: 3,
      name: "Amit Kumar",
      title: "Marketing Director, Fortune 500",
      expertise: ["Digital Marketing", "Brand Building", "Customer Acquisition"],
      experience: "18+ years",
      mentees: 200,
      rating: 4.7,
      reviews: 143,
      price: "₹4,000/session",
      availability: "Busy",
      image: "/api/placeholder/100/100",
      verified: true,
      languages: ["English", "Hindi"],
      location: "Delhi"
    }
  ];

  const legalServices = [
    {
      id: 1,
      title: "Corporate Law Solutions",
      firm: "Legal Partners LLP",
      services: ["Company Formation", "Compliance", "Contracts", "IPR"],
      rating: 4.7,
      reviews: 156,
      experience: "12+ years",
      cases: 2500,
      price: "₹2,000/hour",
      contact: "+91 98765 43210",
      email: "partners@legalpartners.com",
      location: "Mumbai, Delhi, Bangalore",
      specialization: "Startup Legal Services"
    },
    {
      id: 2,
      title: "Tax Advisory Services",
      firm: "TaxPro Consultants",
      services: ["GST", "Income Tax", "International Tax", "Tax Planning"],
      rating: 4.8,
      reviews: 203,
      experience: "20+ years",
      cases: 3200,
      price: "₹1,500/hour",
      contact: "+91 87654 32109",
      email: "consult@taxpro.in",
      location: "Pan India",
      specialization: "Business Taxation"
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Other Offerings</h1>
            <p className="text-muted-foreground">
              Explore funding opportunities, mentorship programs, and professional services
            </p>
          </div>
          
          <Button variant="hero" className="hidden md:flex">
            <MessageCircle className="h-4 w-4 mr-2" />
            Submit Inquiry
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 bg-gradient-card border-0">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search offerings..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
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

        {/* Offerings Tabs */}
        <Tabs defaultValue="funding" className="space-y-6">
          <TabsList className="grid w-full md:w-auto md:grid-cols-3 bg-white">
            <TabsTrigger value="funding">Funding Connect</TabsTrigger>
            <TabsTrigger value="mentorship">Mentor Connect</TabsTrigger>
            <TabsTrigger value="legal">Legal Services</TabsTrigger>
          </TabsList>

          {/* Funding Connect */}
          <TabsContent value="funding" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fundingOffers.map((offer) => (
                <Card key={offer.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 relative">
                  {offer.featured && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <Badge className="bg-gradient-primary text-white">Featured</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <DollarSign className="h-6 w-6 text-white" />
                      </div>
                      {offer.verified && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          <Award className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <CardTitle className="text-lg mb-2">{offer.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {offer.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-primary mb-1">{offer.range}</p>
                          <p className="text-xs text-muted-foreground">Funding Range</p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">{offer.successRate}%</p>
                          <p className="text-xs text-muted-foreground">Success Rate</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Building className="h-4 w-4 text-muted-foreground" />
                          <span>{offer.provider}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{offer.location}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span>{offer.rating}</span>
                            <span className="text-muted-foreground">({offer.reviews})</span>
                          </div>
                          <span className="text-muted-foreground">{offer.applications} applications</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium">Sectors:</p>
                        <div className="flex flex-wrap gap-1">
                          {offer.sectors.map((sector) => (
                            <Badge key={sector} variant="outline" className="text-xs">
                              {sector}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Link to={`/offerings/funding/${offer.id}`} className="flex-1">
                          <Button className="w-full" variant="default">
                            Apply Now
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                        <Button variant="outline" size="icon">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Mentor Connect */}
          <TabsContent value="mentorship" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors.map((mentor) => (
                <Card key={mentor.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={mentor.image} alt={mentor.name} />
                        <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold truncate">{mentor.name}</h3>
                          {mentor.verified && (
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                              <Award className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{mentor.title}</p>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{mentor.rating}</span>
                          <span className="text-muted-foreground">({mentor.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-primary mb-1">{mentor.price}</p>
                          <p className="text-xs text-muted-foreground">Per Session</p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">{mentor.mentees}</p>
                          <p className="text-xs text-muted-foreground">Mentees</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <GraduationCap className="h-4 w-4 text-muted-foreground" />
                          <span>{mentor.experience} experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{mentor.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <Badge 
                            variant="outline" 
                            className={mentor.availability === "Available" ? "text-green-700 bg-green-50" : "text-yellow-700 bg-yellow-50"}
                          >
                            {mentor.availability}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium">Expertise:</p>
                        <div className="flex flex-wrap gap-1">
                          {mentor.expertise.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Link to={`/offerings/mentorship/${mentor.id}`} className="flex-1">
                          <Button className="w-full" variant="default" disabled={mentor.availability !== "Available"}>
                            Book Session
                          </Button>
                        </Link>
                        <Button variant="outline" size="icon">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Legal Services */}
          <TabsContent value="legal" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {legalServices.map((service) => (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-0">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{service.rating}</span>
                          <span className="text-xs text-muted-foreground">({service.reviews})</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardTitle className="text-lg mb-1">{service.title}</CardTitle>
                    <CardDescription className="text-sm">{service.firm}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-primary mb-1">{service.price}</p>
                          <p className="text-xs text-muted-foreground">Consultation Fee</p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">{service.cases}+</p>
                          <p className="text-xs text-muted-foreground">Cases Handled</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Award className="h-4 w-4 text-muted-foreground" />
                          <span>{service.experience} experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{service.location}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium">Services:</p>
                        <div className="flex flex-wrap gap-1">
                          {service.services.map((svc) => (
                            <Badge key={svc} variant="outline" className="text-xs">
                              {svc}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-sm font-medium mb-2">Specialization</p>
                        <p className="text-sm text-muted-foreground">{service.specialization}</p>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>{service.contact}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span>{service.email}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Link to={`/offerings/legal/${service.id}`} className="flex-1">
                          <Button className="w-full" variant="default">
                            Consult Now
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                        <Button variant="outline" size="icon">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

export default Offerings;