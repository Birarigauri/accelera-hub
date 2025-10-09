import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ExternalLink, 
  UserCheck, 
  Star, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Download,
  Globe,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Building2,
  TrendingUp,
  Shield,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/lib/toast";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const OfferingDetail = () => {
  const { id } = useParams();
  const [showExpertDialog, setShowExpertDialog] = useState(false);

  // Mock data - in real app, this would come from API
  const offeringData: Record<string, any> = {
    "startup-seed-fund": {
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
      externalUrl: "https://startupindia.gov.in/content/sih/en/government-schemes.html",
      fullDescription: `The Startup India Seed Fund Scheme (SISFS) is a flagship initiative by the Government of India to provide financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization.

This scheme aims to support startups with funding support to undertake proof of concept activities, prototype development, product trials, market entry and commercialization. The scheme will help these startups graduate to a level where they will be able to raise investments from angel investors or venture capitalists or seek loans from commercial banks or financial institutions.`,
      process: [
        {
          step: 1,
          title: "Application Submission",
          description: "Submit application through eligible incubators with required documents"
        },
        {
          step: 2,
          title: "Initial Screening",
          description: "Incubator evaluates and shortlists applications based on criteria"
        },
        {
          step: 3,
          title: "Expert Committee Review",
          description: "Expert committee reviews and approves funding recommendations"
        },
        {
          step: 4,
          title: "Fund Disbursement",
          description: "Approved funding is disbursed in tranches based on milestones"
        }
      ],
      resources: [
        {
          title: "Application Guidelines",
          type: "PDF",
          url: "#"
        },
        {
          title: "Eligible Incubators List",
          type: "Excel",
          url: "#"
        },
        {
          title: "FAQs Document",
          type: "PDF",
          url: "#"
        }
      ],
      eligibility: [
        "Startup should be incorporated as a private limited company",
        "Should be recognized as a startup by DPIIT",
        "Should not have received more than ₹10 lakhs in government grants",
        "Should have a scalable business model with high growth potential"
      ],
      benefits: [
        "Up to ₹20 lakhs for proof of concept",
        "Up to ₹50 lakhs for prototype development",
        "Mentorship and incubation support",
        "Access to government schemes and programs"
      ]
    },
    "mentor-connect": {
      id: "mentor-connect",
      title: "Mentor Connect Program",
      description: "1-on-1 mentorship with industry experts and successful entrepreneurs",
      category: "mentorship",
      mode: "internal",
      status: "active",
      icon: Users,
      featured: true,
      tagColor: "bg-blue-100 text-blue-700",
      fullDescription: `The Mentor Connect Program is designed to provide personalized guidance and support to entrepreneurs at various stages of their business journey. Our network of experienced mentors includes successful entrepreneurs, industry experts, and business leaders who are committed to sharing their knowledge and expertise.

Through this program, entrepreneurs get access to one-on-one mentoring sessions, group workshops, and networking opportunities. Mentors provide strategic guidance on business planning, market entry, fundraising, operations, and scaling strategies.`,
      process: [
        {
          step: 1,
          title: "Profile Creation",
          description: "Complete your entrepreneur profile with business details and requirements"
        },
        {
          step: 2,
          title: "Mentor Matching",
          description: "Our algorithm matches you with suitable mentors based on industry and expertise"
        },
        {
          step: 3,
          title: "Initial Meeting",
          description: "Schedule and conduct initial meeting to establish mentoring relationship"
        },
        {
          step: 4,
          title: "Ongoing Support",
          description: "Regular mentoring sessions and continuous guidance throughout your journey"
        }
      ],
      resources: [
        {
          title: "Mentor Directory",
          type: "Web Portal",
          url: "#"
        },
        {
          title: "Mentoring Best Practices",
          type: "PDF",
          url: "#"
        }
      ],
      eligibility: [
        "Registered entrepreneur on the platform",
        "Active business or validated business idea",
        "Commitment to regular mentoring sessions",
        "Willingness to implement mentor guidance"
      ],
      benefits: [
        "Access to 500+ experienced mentors",
        "Industry-specific expertise",
        "Flexible scheduling options",
        "Group mentoring sessions and workshops"
      ]
    }
  };

  const offering = offeringData[id as string];

  if (!offering) {
    return (
      <AppLayout>
        <div className="min-h-screen bg-muted/30 flex items-center justify-center">
          <Card className="text-center p-8">
            <h2 className="text-xl font-semibold mb-2">Offering Not Found</h2>
            <p className="text-muted-foreground mb-4">The requested offering could not be found.</p>
            <Link to="/offerings-v2">
              <Button>Back to Offerings</Button>
            </Link>
          </Card>
        </div>
      </AppLayout>
    );
  }

  const handleExpertConnect = () => {
    setShowExpertDialog(false);
    toast.success(`Your inquiry for ${offering.title} has been sent. The partner will connect with you shortly.`);
    
    // Simulate follow-up after 5 seconds (in real app, this would be 5 hours)
    setTimeout(() => {
      toast.info("Has the service provider contacted you?", {
        action: {
          label: "Yes",
          onClick: () => {
            // Show rating dialog
            toast.success("Thank you for your feedback!");
          }
        }
      });
    }, 5000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "closed": return <AlertCircle className="h-5 w-5 text-red-600" />;
      case "coming_soon": return <Clock className="h-5 w-5 text-orange-600" />;
      default: return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active": return <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Active</Badge>;
      case "closed": return <Badge className="bg-red-100 text-red-700 hover:bg-red-200">Closed</Badge>;
      case "coming_soon": return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">Coming Soon</Badge>;
      default: return null;
    }
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
          {/* Back Button */}
          <Link to="/offerings-v2" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Offerings
          </Link>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="bg-white rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${
                        offering.category === 'funding' ? 'from-green-500 to-green-600' :
                        offering.category === 'mentorship' ? 'from-blue-500 to-blue-600' :
                        offering.category === 'infrastructure' ? 'from-orange-500 to-orange-600' :
                        offering.category === 'market' ? 'from-purple-500 to-purple-600' :
                        offering.category === 'ipr' ? 'from-teal-500 to-teal-600' :
                        'from-red-500 to-red-600'
                      } rounded-xl flex items-center justify-center shadow-lg`}>
                        <offering.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h1 className="text-2xl font-bold">{offering.title}</h1>
                          <div className="flex items-center gap-2">
                            {offering.featured && (
                              <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
                                <Star className="h-3 w-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                            {offering.new && (
                              <Badge className="bg-green-100 text-green-700 hover:bg-green-200">New</Badge>
                            )}
                            {getStatusBadge(offering.status)}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{offering.description}</p>
                        
                        <div className="flex items-center gap-4">
                          <Badge className={`${offering.tagColor} ${
                            offering.category === 'funding' ? 'hover:bg-green-200' :
                            offering.category === 'mentorship' ? 'hover:bg-blue-200' :
                            offering.category === 'infrastructure' ? 'hover:bg-orange-200' :
                            offering.category === 'market' ? 'hover:bg-purple-200' :
                            offering.category === 'ipr' ? 'hover:bg-teal-200' :
                            'hover:bg-red-200'
                          }`}>
                            {offering.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(offering.status)}
                            <span className="text-sm text-muted-foreground capitalize">
                              {offering.status.replace("_", " ")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {offering.mode === "external" && offering.externalUrl && (
                        <Button 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                          onClick={() => window.open(offering.externalUrl, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Go to Portal
                        </Button>
                      )}
                      
                      {offering.mode === "expert" && (
                        <Dialog open={showExpertDialog} onOpenChange={setShowExpertDialog}>
                          <DialogTrigger asChild>
                            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                              <UserCheck className="h-4 w-4 mr-2" />
                              Connect with Expert
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Connect with Expert</DialogTitle>
                            </DialogHeader>
                            <div className="py-4">
                              <p className="mb-4">Do you want to send an inquiry to a service partner for "{offering.title}"?</p>
                              <div className="flex gap-3">
                                <Button onClick={handleExpertConnect} className="flex-1">
                                  Yes, Send Inquiry
                                </Button>
                                <Button variant="outline" onClick={() => setShowExpertDialog(false)} className="flex-1">
                                  No, Cancel
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Description */}
            <Card className="bg-white shadow-lg border-0 rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-4 w-4 text-blue-600" />
                  </div>
                  About This Offering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none text-justify">
                  {offering.fullDescription.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card className="bg-white shadow-lg border-0 rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-purple-600" />
                  </div>
                  Process & Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {offering.process.map((step: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{step.title}</h4>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resources & Links */}
            {offering.resources && offering.resources.length > 0 && (
              <Card className="bg-white shadow-lg border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Download className="h-4 w-4 text-green-600" />
                    </div>
                    Resources & Downloads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {offering.resources.map((resource: any, index: number) => (
                      <div key={index} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Download className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium">{resource.title}</h5>
                          <p className="text-sm text-muted-foreground">{resource.type}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Eligibility & Benefits */}
            <div className="grid md:grid-cols-2 gap-6">
              {offering.eligibility && (
                <Card className="bg-white shadow-lg border-0 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-orange-600" />
                      </div>
                      Eligibility Criteria
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {offering.eligibility.map((criteria: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{criteria}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {offering.benefits && (
                <Card className="bg-white shadow-lg border-0 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                        <Star className="h-4 w-4 text-teal-600" />
                      </div>
                      Key Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {offering.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default OfferingDetail;