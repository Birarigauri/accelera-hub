import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Star, 
  Users, 
  DollarSign, 
  MapPin, 
  Award, 
  Phone, 
  Mail,
  MessageCircle,
  Calendar,
  CheckCircle,
  Building,
  Globe,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const OfferingDetails = () => {
  const { type, id } = useParams();
  
  const offeringsData = {
    funding: {
      "1": {
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
        verified: true,
        featured: true,
        icon: DollarSign,
        details: {
          overview: "Our Angel Investment Network connects promising startups with verified angel investors across India. We focus on early-stage companies with innovative solutions and strong growth potential.",
          requirements: [
            "Registered company (Pvt Ltd/LLP)",
            "Minimum viable product (MVP)",
            "Clear business model",
            "Experienced founding team",
            "Market validation proof"
          ],
          process: [
            { step: 1, title: "Application Review", description: "Submit detailed business plan and financials", duration: "3-5 days" },
            { step: 2, title: "Due Diligence", description: "Comprehensive evaluation by our team", duration: "7-10 days" },
            { step: 3, title: "Investor Matching", description: "Connect with relevant angel investors", duration: "5-7 days" },
            { step: 4, title: "Pitch Presentation", description: "Present to shortlisted investors", duration: "2-3 weeks" }
          ],
          benefits: [
            "Access to 500+ verified angel investors",
            "Professional pitch deck preparation",
            "Legal documentation support",
            "Post-investment mentorship",
            "Network access and partnerships"
          ]
        },
        contact: {
          name: "Rajesh Gupta",
          designation: "Investment Manager",
          phone: "+91 98765 43210",
          email: "rajesh@investindia.com",
          experience: "8+ years"
        }
      }
    },
    mentorship: {
      "1": {
        id: 1,
        title: "Business Strategy Mentorship",
        name: "Rajesh Sharma",
        designation: "Former CEO, Tech Mahindra",
        expertise: ["Strategic Planning", "Business Development", "Technology"],
        experience: "25+ years",
        mentees: 120,
        rating: 4.9,
        reviews: 67,
        price: "₹5,000/session",
        availability: "Available",
        languages: ["English", "Hindi"],
        location: "Mumbai",
        verified: true,
        icon: Users,
        details: {
          overview: "Strategic business mentorship from industry veteran with 25+ years of experience in scaling technology companies from startup to enterprise level.",
          specializations: [
            "Business Strategy & Planning",
            "Technology Leadership",
            "Market Expansion",
            "Team Building & Leadership",
            "Digital Transformation"
          ],
          achievements: [
            "Led Tech Mahindra's growth from $500M to $5B revenue",
            "Successfully scaled 15+ startups as advisor",
            "Featured speaker at 50+ industry conferences",
            "Author of 'Digital Leadership in Modern Era'"
          ],
          sessionTypes: [
            { type: "1-on-1 Consultation", duration: "60 minutes", price: "₹5,000" },
            { type: "Group Session", duration: "90 minutes", price: "₹3,000" },
            { type: "Monthly Retainer", duration: "4 sessions", price: "₹18,000" }
          ],
          testimonials: [
            {
              name: "Priya Patel",
              company: "TechStart Solutions",
              feedback: "Rajesh's guidance helped us secure Series A funding and scale our team effectively."
            },
            {
              name: "Amit Kumar",
              company: "Digital Innovations",
              feedback: "His strategic insights transformed our business model and market approach."
            }
          ]
        },
        contact: {
          phone: "+91 98765 43210",
          email: "rajesh.sharma@mentor.com",
          linkedin: "linkedin.com/in/rajesh-sharma-ceo"
        }
      }
    },
    legal: {
      "1": {
        id: 1,
        title: "Corporate Law Solutions",
        firm: "Legal Partners LLP",
        services: ["Company Formation", "Compliance", "Contracts", "IPR"],
        rating: 4.7,
        reviews: 156,
        experience: "12+ years",
        cases: 2500,
        price: "₹2,000/hour",
        location: "Mumbai, Delhi, Bangalore",
        specialization: "Startup Legal Services",
        verified: true,
        icon: Building,
        details: {
          overview: "Comprehensive legal services for startups and growing businesses. We specialize in corporate law, compliance, and intellectual property protection.",
          practiceAreas: [
            "Corporate Law & Governance",
            "Contract Drafting & Review",
            "Intellectual Property Rights",
            "Employment Law",
            "Regulatory Compliance",
            "Mergers & Acquisitions"
          ],
          servicePackages: [
            { name: "Startup Legal Package", price: "₹25,000", includes: ["Company Formation", "Basic Contracts", "Compliance Setup"] },
            { name: "Growth Stage Package", price: "₹50,000", includes: ["Advanced Contracts", "IP Filing", "Employment Policies"] },
            { name: "Enterprise Package", price: "₹1,00,000", includes: ["Full Legal Support", "M&A Assistance", "Ongoing Compliance"] }
          ],
          team: [
            { name: "Adv. Suresh Kumar", specialization: "Corporate Law", experience: "15+ years" },
            { name: "Adv. Meera Patel", specialization: "IP & Contracts", experience: "10+ years" },
            { name: "Adv. Rohit Singh", specialization: "Employment Law", experience: "8+ years" }
          ]
        },
        contact: {
          phone: "+91 98765 43210",
          email: "partners@legalpartners.com",
          address: "Legal Partners LLP, Nariman Point, Mumbai - 400021"
        }
      }
    }
  };

  const offering = offeringsData[type as keyof typeof offeringsData]?.[id as string];

  if (!offering) {
    return (
      <AppLayout>
        <div className="min-h-screen bg-muted/30 flex items-center justify-center">
          <Card className="text-center p-8">
            <h2 className="text-xl font-semibold mb-2">Offering Not Found</h2>
            <p className="text-muted-foreground mb-4">The requested offering could not be found.</p>
            <Link to="/offerings">
              <Button>Back to Offerings</Button>
            </Link>
          </Card>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <Link to="/offerings" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Offerings
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Header */}
              <Card className="bg-gradient-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <offering.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h1 className="text-2xl font-bold">{offering.title}</h1>
                        {offering.verified && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <Award className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-4">{offering.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{offering.rating}</span>
                          <span className="text-muted-foreground">({offering.reviews} reviews)</span>
                        </div>
                        {offering.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{offering.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Key Info */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                    {type === 'funding' && (
                      <>
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary mb-1">{offering.range}</div>
                          <div className="text-sm text-muted-foreground">Funding Range</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold mb-1">{offering.successRate}%</div>
                          <div className="text-sm text-muted-foreground">Success Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold mb-1">{offering.applications}</div>
                          <div className="text-sm text-muted-foreground">Applications</div>
                        </div>
                      </>
                    )}
                    {type === 'mentorship' && (
                      <>
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary mb-1">{offering.price}</div>
                          <div className="text-sm text-muted-foreground">Per Session</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold mb-1">{offering.experience}</div>
                          <div className="text-sm text-muted-foreground">Experience</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold mb-1">{offering.mentees}</div>
                          <div className="text-sm text-muted-foreground">Mentees</div>
                        </div>
                      </>
                    )}
                    {type === 'legal' && (
                      <>
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary mb-1">{offering.price}</div>
                          <div className="text-sm text-muted-foreground">Hourly Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold mb-1">{offering.experience}</div>
                          <div className="text-sm text-muted-foreground">Experience</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold mb-1">{offering.cases}+</div>
                          <div className="text-sm text-muted-foreground">Cases</div>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Details Tabs */}
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3 bg-white">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <Card className="bg-gradient-card border-0">
                    <CardHeader>
                      <CardTitle>About This Offering</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{offering.details.overview}</p>
                      
                      {type === 'funding' && (
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-3">Key Benefits</h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {offering.details.benefits.map((benefit: string, index: number) => (
                                <div key={index} className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                  <span className="text-sm">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Sectors</h4>
                            <div className="flex flex-wrap gap-2">
                              {offering.sectors.map((sector: string) => (
                                <Badge key={sector} variant="outline">{sector}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {type === 'mentorship' && (
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-3">Expertise Areas</h4>
                            <div className="flex flex-wrap gap-2">
                              {offering.expertise.map((skill: string) => (
                                <Badge key={skill} variant="outline">{skill}</Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Languages</h4>
                            <div className="flex gap-2">
                              {offering.languages.map((lang: string) => (
                                <Badge key={lang} variant="secondary">{lang}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {type === 'legal' && (
                        <div>
                          <h4 className="font-semibold mb-3">Services Offered</h4>
                          <div className="flex flex-wrap gap-2">
                            {offering.services.map((service: string) => (
                              <Badge key={service} variant="outline">{service}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="details">
                  <Card className="bg-gradient-card border-0">
                    <CardHeader>
                      <CardTitle>Detailed Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {type === 'funding' && (
                        <>
                          <div>
                            <h4 className="font-semibold mb-3">Requirements</h4>
                            <div className="space-y-2">
                              {offering.details.requirements.map((req: string, index: number) => (
                                <div key={index} className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                                  <span className="text-sm">{req}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Process Timeline</h4>
                            <div className="space-y-4">
                              {offering.details.process.map((step: any) => (
                                <div key={step.step} className="flex gap-4">
                                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                                    {step.step}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                      <h5 className="font-medium">{step.title}</h5>
                                      <Badge variant="outline">{step.duration}</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}

                      {type === 'mentorship' && (
                        <>
                          <div>
                            <h4 className="font-semibold mb-3">Session Types</h4>
                            <div className="space-y-3">
                              {offering.details.sessionTypes.map((session: any, index: number) => (
                                <div key={index} className="p-3 bg-muted/50 rounded-lg">
                                  <div className="flex justify-between items-center mb-1">
                                    <h5 className="font-medium">{session.type}</h5>
                                    <span className="text-primary font-semibold">{session.price}</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">{session.duration}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Key Achievements</h4>
                            <div className="space-y-2">
                              {offering.details.achievements.map((achievement: string, index: number) => (
                                <div key={index} className="flex items-start gap-2">
                                  <Award className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}

                      {type === 'legal' && (
                        <>
                          <div>
                            <h4 className="font-semibold mb-3">Service Packages</h4>
                            <div className="space-y-3">
                              {offering.details.servicePackages.map((pkg: any, index: number) => (
                                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                                  <div className="flex justify-between items-center mb-2">
                                    <h5 className="font-medium">{pkg.name}</h5>
                                    <span className="text-primary font-semibold">{pkg.price}</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">{pkg.includes.join(", ")}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Legal Team</h4>
                            <div className="space-y-3">
                              {offering.details.team.map((member: any, index: number) => (
                                <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Users className="h-5 w-5 text-primary" />
                                  </div>
                                  <div>
                                    <h5 className="font-medium">{member.name}</h5>
                                    <p className="text-sm text-muted-foreground">{member.specialization} • {member.experience}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="contact">
                  <Card className="bg-gradient-card border-0">
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-muted-foreground" />
                          <span>{offering.contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-muted-foreground" />
                          <span>{offering.contact.email}</span>
                        </div>
                        {offering.contact.address && (
                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                            <span>{offering.contact.address}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-gradient-primary text-white border-0">
                <CardContent className="p-6 text-center">
                  <Button variant="glass" className="w-full mb-3">
                    {type === 'funding' ? 'Apply Now' : type === 'mentorship' ? 'Book Session' : 'Consult Now'}
                  </Button>
                  <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {type === 'mentorship' && (
                <Card className="bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Mentor Profile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <Avatar className="w-16 h-16 mx-auto mb-3">
                        <AvatarFallback>{offering.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <h4 className="font-semibold">{offering.name}</h4>
                      <p className="text-sm text-muted-foreground">{offering.designation}</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Availability:</span>
                        <Badge className={offering.availability === "Available" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}>
                          {offering.availability}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Live Chat Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Call: 1800-123-4567
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default OfferingDetails;