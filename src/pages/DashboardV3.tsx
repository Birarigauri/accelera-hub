import { useState } from "react";
import { 
  Building2, 
  FileText, 
  TrendingUp, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Bell,
  Settings,
  Plus,
  Download,
  Upload,
  Search,
  Calendar,
  Award,
  Newspaper
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppLayout from "@/components/layout/AppLayout";
import Header from "@/components/layout/Header";
import { ComplianceStatusCard } from "@/components/dashboard/ComplianceStatusCard";
import { AlertsCard } from "@/components/dashboard/AlertsCard";
import { SchemesCard } from "@/components/dashboard/SchemesCard";


const DashboardV3 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAlertsTab, setActiveAlertsTab] = useState('all');

  const alerts = [
    {
      id: "1",
      title: "New GST Return Filing Deadline Approaching",
      description: "The deadline for GSTR-3B filing for the month of August is September 20, 2024. Please ensure timely submission to avoid penalties.",
      time: "1 day ago",
      type: "central" as const
    },
    {
      id: "2",
      title: "Update: MSME Registration Benefits Expanded",
      description: "The government has announced new incentives for MSMEs. Check the Udyam portal for details and how to avail them.",
      time: "1 day ago",
      type: "state" as const
    }
  ];

  const schemes = [
    {
      id: "1",
      title: "Startup India Seed Fund Scheme",
      description: "Provides financial assistance to startups for proof of concept, prototype development, product trials, market entry and commercialization.",
      category: "Funding",
      icon: "📋"
    },
    {
      id: "2",
      title: "Pradhan Mantri Mudra Yojana",
      description: "Offers collateral-free loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises. Aimed at promoting entrepreneurship.",
      category: "Loan",
      icon: "😊"
    },
    {
      id: "3",
      title: "Credit Guarantee Fund Trust for Micro and Small Enterprises",
      description: "Provides credit guarantee cover to banks and financial institutions for collateral-free credit to MSMEs. Reduces risk for lenders.",
      category: "Guarantee",
      icon: "🏢"
    },
    {
      id: "4",
      title: "National Manufacturing Competitiveness Programme",
      description: "Aims to develop global competitiveness among Indian MSMEs through various initiatives like quality management, design and technology.",
      category: "Manufacturing",
      icon: "🏭"
    },
    {
      id: "5",
      title: "Interest Subvention Scheme for Exporters",
      description: "Provides interest subvention on pre and post-shipment rupee export credit to exporters to boost competitiveness.",
      category: "Export",
      icon: "🚢"
    },
    {
      id: "6",
      title: "Prime Minister's Employment Generation Programme (PMEGP)",
      description: "A credit-linked subsidy scheme aimed at generating self-employment opportunities through establishment of micro enterprises in non-farm sector.",
      category: "Employment",
      icon: "👨‍💼"
    }
  ];

  const certificates = [
    { title: "GST Registration", description: "Mandatory for businesses with turnover above the threshold. Required for input tax credit and legal compliance.", action: "Learn More" },
    { title: "MSME Udyam Registration", description: "Voluntary registration for micro, small, and medium enterprises to avail government schemes and benefits.", action: "Learn More" },
    { title: "Trade License", description: "Issued by the municipal corporation, essential for conducting specific businesses within a city's limits.", action: "Learn More" },
    { title: "Shop & Establishment Act Registration", description: "Governs working conditions, hours, holidays, and other aspects of employees in shops and commercial establishments.", action: "Learn More" },
    { title: "Professional Tax Registration", description: "A tax levied on professions, trades, callings, and employments, collected by state governments.", action: "Learn More" },
    { title: "Import Export Code (IEC)", description: "A 10-digit code required by businesses for importing or exporting goods and services from India.", action: "Learn More" }
  ];

  const industryNews = [
    {
      id: "1",
      title: "Digital Transformation: SMEs Embrace AI for Efficiency",
      source: "Economic Times",
      date: "Sep 15, 2024",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=200&fit=crop"
    },
    {
      id: "2",
      title: "New Government Policies to Boost Manufacturing Sector",
      source: "Business Standard",
      date: "Sep 14, 2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop"
    },
    {
      id: "3",
      title: "Export Growth Surges: Opportunities for Small Businesses",
      source: "Livemint",
      date: "Sep 13, 2024",
      image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=300&h=200&fit=crop"
    },
    {
      id: "4",
      title: "Funding Landscape: What to Expect in Q4",
      source: "Inc42",
      date: "Sep 12, 2024",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=200&fit=crop"
    }
  ];

  const metrics = [
    {
      title: "Active Businesses",
      value: "3",
      icon: <Building2 className="h-6 w-6" />,
      trend: { value: "+1 this month", isPositive: true }
    },
    {
      title: "Compliance Score",
      value: "92%",
      icon: <CheckCircle className="h-6 w-6" />,
      trend: { value: "+5% this week", isPositive: true }
    },
    {
      title: "Pending Tasks",
      value: "7",
      icon: <Clock className="h-6 w-6" />,
      trend: { value: "-2 from yesterday", isPositive: true }
    },
    {
      title: "Revenue Growth",
      value: "₹2.4L",
      icon: <TrendingUp className="h-6 w-6" />,
      trend: { value: "+12% this quarter", isPositive: true }
    }
  ];

  const recentActivities = [
    {
      id: "1",
      title: "GST Return Filed",
      description: "GSTR-1 for October 2024 submitted successfully",
      time: "2 hours ago",
      status: "completed" as const,
      icon: <FileText className="h-4 w-4" />
    },
    {
      id: "2",
      title: "License Renewal Due",
      description: "Trade license expires in 15 days",
      time: "1 day ago",
      status: "urgent" as const,
      icon: <AlertTriangle className="h-4 w-4" />
    },
    {
      id: "3",
      title: "New Employee Added",
      description: "John Doe joined as Marketing Manager",
      time: "3 days ago",
      status: "completed" as const,
      icon: <Users className="h-4 w-4" />
    },
    {
      id: "4",
      title: "Payment Received",
      description: "Invoice #INV-2024-001 paid by client",
      time: "5 days ago",
      status: "completed" as const,
      icon: <DollarSign className="h-4 w-4" />
    }
  ];

  const quickActions = [
    {
      id: "1",
      title: "File Return",
      description: "GST, ITR, PF",
      icon: <Upload className="h-4 w-4" />,
      color: "bg-blue-50 text-blue-600",
      onClick: () => console.log("File return")
    },
    {
      id: "2",
      title: "Apply License",
      description: "New permits",
      icon: <FileText className="h-4 w-4" />,
      color: "bg-green-50 text-green-600",
      onClick: () => console.log("Apply license")
    },
    {
      id: "3",
      title: "Download Docs",
      description: "Certificates",
      icon: <Download className="h-4 w-4" />,
      color: "bg-purple-50 text-purple-600",
      onClick: () => console.log("Download docs")
    },
    {
      id: "4",
      title: "Book Consultation",
      description: "Expert advice",
      icon: <Calendar className="h-4 w-4" />,
      color: "bg-orange-50 text-orange-600",
      onClick: () => console.log("Book consultation")
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
        <Header />
        
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 mb-8 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">Welcome, John Doe!</h1>
                <p className="text-blue-100">Your New Entrepreneur Dashboard</p>
              </div>
              <div className="text-right text-white/90">
                <div className="text-sm text-blue-100">Last Updated</div>
                <div className="text-lg font-semibold">Today, 2:30 PM</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Compliance Status */}
            <ComplianceStatusCard
              totalCertificates={12}
              activeCount={6}
              expiringCount={3}
              expiredCount={3}
            />

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">3</div>
                  <div className="text-xs sm:text-sm text-gray-600">Active Businesses</div>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600">92%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Compliance Score</div>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-orange-600">7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Pending Tasks</div>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-purple-600">₹2.4L</div>
                  <div className="text-xs sm:text-sm text-gray-600">Monthly Revenue</div>
                </CardContent>
              </Card>
            </div>

            {/* Alerts & Notifications */}
            <AlertsCard 
              alerts={alerts} 
              activeTab={activeAlertsTab}
              onTabChange={setActiveAlertsTab}
            />

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Eligible Schemes */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                      <Award className="h-3 w-3 text-green-600" />
                    </div>
                    Eligible Schemes for You
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {schemes.slice(0, 3).map((scheme) => (
                      <div key={scheme.id} className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all hover:border-blue-300">
                        <div className="flex items-start gap-3">
                          <div className="text-2xl flex-shrink-0">{scheme.icon}</div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm mb-1 break-words">{scheme.title}</h4>
                            <p className="text-xs text-gray-600 mb-3 break-words line-clamp-2">{scheme.description}</p>
                            <div className="flex flex-wrap gap-2">
                              <Button size="sm" variant="outline" className="text-xs px-2 py-1">
                                Know More
                              </Button>
                              <Button size="sm" className="text-xs px-2 py-1 bg-blue-600 hover:bg-blue-700">
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="ghost" size="sm" className="text-blue-600 text-xs">
                      View All Schemes ({schemes.length - 3} more)
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent Activities */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-gray-900">Recent Activities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">GST Return Filed</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <Clock className="h-4 w-4 text-yellow-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">License Renewal Due</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Users className="h-4 w-4 text-blue-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">New Employee Added</p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full text-blue-600">
                    View All Activities
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Industry News */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Newspaper className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  Industry News
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
                  {industryNews.map((news) => (
                    <div key={news.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all cursor-pointer">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-20 sm:h-24 object-cover"
                      />
                      <div className="p-3">
                        <h4 className="font-medium text-xs sm:text-sm mb-2 break-words line-clamp-2">{news.title}</h4>
                        <p className="text-xs text-gray-600">{news.source} | {news.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certificates You May Require */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  Certificates You May Require
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
                  {certificates.slice(0, 6).map((cert, index) => (
                    <div key={index} className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all hover:border-blue-300">
                      <h4 className="font-medium text-sm mb-2 break-words">{cert.title}</h4>
                      <p className="text-xs text-gray-600 mb-3 break-words line-clamp-3">{cert.description}</p>
                      <Button size="sm" variant="outline" className="text-xs w-full">
                        {cert.action}
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 w-full sm:w-auto">
                    Request New Government Service
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardV3;