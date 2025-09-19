import { useState, useEffect } from "react";
import { 
  Calendar, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  FileText, 
  ExternalLink, 
  TrendingUp, 
  Bell,
  Shield,
  Award,
  Newspaper,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Building2,
  Users,
  DollarSign,
  BarChart3,
  Settings,
  Download,
  RefreshCw,
  User,
  MapPin,
  Phone,
  Activity,
  Target,
  Zap,
  Star,
  ChevronDown,
  Search,
  Filter
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/layout/AppLayout";
import Header from "@/components/layout/Header";

const complianceData = [
  { id: 1, name: "GSTR-1", dueDate: "2024-01-11", status: "overdue", type: "GST Return" },
  { id: 2, name: "GSTR-3B", dueDate: "2024-01-20", status: "pending", type: "GST Return" },
  { id: 3, name: "TDS Payment", dueDate: "2024-01-07", status: "completed", type: "Tax Payment" },
  { id: 4, name: "PF Return", dueDate: "2024-01-15", status: "pending", type: "Compliance" },
  { id: 5, name: "ESI Return", dueDate: "2024-01-21", status: "upcoming", type: "Compliance" }
];

const certificatesData = [
  { id: 1, name: "ISO 9001 Certification", status: "missing", category: "Quality Management" },
  { id: 2, name: "FSSAI License", status: "pending", category: "Food Safety" },
  { id: 3, name: "Pollution Control Certificate", status: "expiring", expiryDate: "2024-02-15", category: "Environmental" },
  { id: 4, name: "Fire Safety Certificate", status: "missing", category: "Safety" },
  { id: 5, name: "Trade License", status: "active", expiryDate: "2024-12-31", category: "Business" }
];

const schemesData = [
  { id: 1, name: "MSME Technology Upgradation Scheme", eligibility: "95%", amount: "₹10 Lakh", category: "Technology", description: "Modernize manufacturing processes with latest technology" },
  { id: 2, name: "Startup India Seed Fund", eligibility: "87%", amount: "₹50 Lakh", category: "Funding", description: "Early-stage funding for innovative startups" },
  { id: 3, name: "Women Entrepreneur Scheme", eligibility: "92%", amount: "₹25 Lakh", category: "Women Empowerment", description: "Special support for women-led businesses" },
  { id: 4, name: "Export Promotion Scheme", eligibility: "78%", amount: "₹15 Lakh", category: "Export", description: "Boost international trade and exports" },
  { id: 5, name: "Digital India Initiative", eligibility: "89%", amount: "₹20 Lakh", category: "Technology", description: "Digital transformation support for businesses" },
  { id: 6, name: "Green Energy Subsidy", eligibility: "85%", amount: "₹30 Lakh", category: "Environment", description: "Renewable energy adoption incentives" }
];

const newsData = [
  { id: 1, title: "New GST Rules for E-commerce Businesses", date: "2024-01-10", category: "Policy Update", summary: "Latest compliance requirements for online sellers" },
  { id: 2, title: "MSME Sector Shows 12% Growth in Q3", date: "2024-01-09", category: "Growth Report", summary: "Small businesses driving economic recovery" },
  { id: 3, title: "Digital Payment Incentives Extended", date: "2024-01-08", category: "Policy Update", summary: "Government extends cashback schemes till March" },
  { id: 4, title: "Manufacturing PMI Hits 18-Month High", date: "2024-01-07", category: "Industry Trend", summary: "Production activity reaches new peaks" },
  { id: 5, title: "Startup Funding Reaches $2.8B in December", date: "2024-01-06", category: "Funding News", summary: "Record investment in Indian startups" },
  { id: 6, title: "Export Incentive Scheme Launched", date: "2024-01-05", category: "Policy Update", summary: "New benefits for exporters announced" }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'overdue': return 'bg-red-100 text-red-800 border-red-200';
    case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'completed': return 'bg-green-100 text-green-800 border-green-200';
    case 'upcoming': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'missing': return 'bg-gray-100 text-gray-800 border-gray-200';
    case 'expiring': return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'active': return 'bg-green-100 text-green-800 border-green-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'overdue': return <AlertTriangle className="h-4 w-4" />;
    case 'completed': return <CheckCircle className="h-4 w-4" />;
    case 'active': return <CheckCircle className="h-4 w-4" />;
    default: return <Clock className="h-4 w-4" />;
  }
};

const FundingSlider = ({ schemesData }: { schemesData: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % schemesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [schemesData.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % schemesData.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + schemesData.length) % schemesData.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {schemesData.map((scheme, index) => (
            <div key={scheme.id} className="w-full flex-shrink-0">
              <div className="p-4 bg-gradient-to-r from-green-50/50 to-white rounded-lg border border-green-100/50 hover:shadow-sm transition-all duration-200 mx-1">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 pr-3">
                    <div className="font-medium text-sm text-gray-900 leading-relaxed mb-1">{scheme.name}</div>
                    <div className="text-xs text-gray-600 mb-2">{scheme.description}</div>
                  </div>
                  <Badge variant="secondary" className="px-2 py-1 text-xs bg-green-100 text-green-800 flex-shrink-0">
                    {scheme.eligibility} Match
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-3 w-3 text-green-600" />
                    <div className="text-xs text-gray-600">
                      <span className="font-semibold text-green-700">{scheme.amount}</span> • {scheme.category}
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" className="p-2 hover:bg-green-50">
                    <ArrowRight className="h-3 w-3 text-green-600" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={prevSlide}
            className="p-2 h-8 w-8"
          >
            <ChevronLeft className="h-3 w-3" />
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={nextSlide}
            className="p-2 h-8 w-8"
          >
            <ChevronRight className="h-3 w-3" />
          </Button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex items-center gap-1">
          {schemesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-green-600 w-4' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        
        {/* Auto-play Toggle */}
        <Button 
          size="sm" 
          variant="ghost" 
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="p-2 text-xs"
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </Button>
      </div>
    </div>
  );
};

const NewsSlider = ({ newsData }: { newsData: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [newsData.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsData.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsData.length) % newsData.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {newsData.map((news, index) => (
            <div key={news.id} className="w-full flex-shrink-0">
              <div className="p-4 bg-gradient-to-r from-gray-50/50 to-white rounded-lg border border-gray-100/50 hover:shadow-sm transition-all duration-200 mx-1">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 pr-3">
                    <div className="font-medium text-sm text-gray-900 leading-relaxed mb-1">{news.title}</div>
                    <div className="text-xs text-gray-600 mb-2">{news.summary}</div>
                  </div>
                  <Badge variant="outline" className="px-2 py-1 text-xs font-medium flex-shrink-0">
                    {news.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 text-gray-400" />
                    <div className="text-xs text-gray-600">{news.date}</div>
                  </div>
                  <Button size="sm" variant="ghost" className="p-2 hover:bg-indigo-50">
                    <ExternalLink className="h-3 w-3 text-indigo-600" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={prevSlide}
            className="p-2 h-8 w-8"
          >
            <ChevronLeft className="h-3 w-3" />
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={nextSlide}
            className="p-2 h-8 w-8"
          >
            <ChevronRight className="h-3 w-3" />
          </Button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex items-center gap-1">
          {newsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-indigo-600 w-4' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        
        {/* Auto-play Toggle */}
        <Button 
          size="sm" 
          variant="ghost" 
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="p-2 text-xs"
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </Button>
      </div>
    </div>
  );
};

const DashboardV2 = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-white/40"></div>
        <Header />
        
        <div className="container mx-auto px-6 py-6 relative z-10">
          <div className="mb-8">
            {/* Clean Executive Header */}
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md rounded-xl p-6 mb-6">
              {/* Header Section */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-light text-gray-900">Executive Dashboard</h1>
                    <p className="text-sm text-gray-600">Business intelligence and compliance monitoring</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Last Updated</div>
                    <div className="text-sm font-medium text-gray-900">Today, 2:30 PM</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="p-2">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2 relative">
                      <Bell className="h-4 w-4" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* User & Business Info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Rajesh Kumar</div>
                      <div className="text-xs text-gray-500">Managing Director</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Building2 className="h-3 w-3" />
                    <span>Kumar Industries Pvt Ltd</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="h-3 w-3" />
                    <span>Mumbai, Maharashtra</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-lg font-light text-gray-900">₹2.4Cr</div>
                    <div className="text-xs text-gray-500">Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-light text-gray-900">156</div>
                    <div className="text-xs text-gray-500">Employees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-light text-green-600">Active</div>
                    <div className="text-xs text-gray-500">Status</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Executive KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
                <AlertTriangle className="h-6 w-6 text-red-500 mx-auto mb-2" />
                <div className="text-xl font-light text-gray-900 mb-1 group-hover:scale-105 transition-transform">3</div>
                <div className="text-xs text-gray-600 font-medium mb-2">Critical Items</div>
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-xs text-red-600 font-medium">Urgent</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <Clock className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                <div className="text-xl font-light text-gray-900 mb-1 group-hover:scale-105 transition-transform">5</div>
                <div className="text-xs text-gray-600 font-medium mb-2">In Progress</div>
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span className="text-xs text-blue-600 font-medium">On Track</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
                <DollarSign className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <div className="text-xl font-light text-gray-900 mb-1 group-hover:scale-105 transition-transform">4</div>
                <div className="text-xs text-gray-600 font-medium mb-2">Opportunities</div>
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-xs text-green-600 font-medium">Available</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-indigo-600"></div>
                <BarChart3 className="h-6 w-6 text-indigo-500 mx-auto mb-2" />
                <div className="text-xl font-light text-gray-900 mb-1 group-hover:scale-105 transition-transform">92%</div>
                <div className="text-xs text-gray-600 font-medium mb-2">Health Score</div>
                <div className="flex items-center justify-center space-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  <span className="text-xs text-indigo-600 font-medium">Excellent</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Compliance Tracker Section */}
            <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="border-b border-gray-100/50 p-4 bg-gradient-to-r from-red-50/50 to-orange-50/50">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center">
                    <Shield className="h-4 w-4 text-red-700" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-medium text-gray-900">Compliance Management</div>
                    <div className="text-xs text-gray-600">Regulatory obligations and deadlines</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-light text-red-600">3</div>
                    <div className="text-xs text-gray-500">Critical</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {complianceData.slice(0, 3).map((item, index) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50/50 to-white rounded-lg border border-gray-100/50 hover:shadow-sm transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-red-500 animate-pulse' : index === 1 ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                        <div>
                          <div className="font-medium text-sm text-gray-900">{item.name}</div>
                          <div className="text-xs text-gray-600">{item.type} • Due: {item.dueDate}</div>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(item.status)} px-2 py-1 text-xs`}>
                        {item.status.toUpperCase()}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 py-2 text-sm font-medium text-gray-700 border-gray-200 hover:bg-gray-50">
                  View All ({complianceData.length - 3} more)
                </Button>
              </CardContent>
            </Card>

            {/* Certificates & Applications Section */}
            <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="border-b border-gray-100/50 p-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <FileText className="h-4 w-4 text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-medium text-gray-900">Document Portfolio</div>
                    <div className="text-xs text-gray-600">Business licenses and certificates</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-light text-blue-600">5</div>
                    <div className="text-xs text-gray-500">Active</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {certificatesData.slice(0, 3).map((cert, index) => (
                    <div key={cert.id} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50/50 to-white rounded-lg border border-gray-100/50 hover:shadow-sm transition-all duration-200">
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm text-gray-900 truncate">{cert.name}</div>
                        <div className="text-xs text-gray-600">
                          {cert.category}
                          {cert.expiryDate && ` • Expires: ${cert.expiryDate}`}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Badge className={`${getStatusColor(cert.status)} px-2 py-1 text-xs`}>
                          {cert.status.toUpperCase()}
                        </Badge>
                        <Button size="sm" variant="ghost" className="p-2 hover:bg-blue-50">
                          <ExternalLink className="h-3 w-3 text-blue-600" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 py-2 text-sm font-medium text-gray-700 border-gray-200 hover:bg-gray-50">
                  View All ({certificatesData.length - 3} more)
                </Button>
              </CardContent>
            </Card>

            {/* Funding Opportunities Slider */}
            <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="border-b border-gray-100/50 p-4 bg-gradient-to-r from-green-50/50 to-emerald-50/50">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <Award className="h-4 w-4 text-green-700" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-medium text-gray-900">Funding Opportunities</div>
                    <div className="text-xs text-gray-600">Government schemes and support</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-light text-green-600">{schemesData.length}</div>
                    <div className="text-xs text-gray-500">Available</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <FundingSlider schemesData={schemesData} />
              </CardContent>
            </Card>

            {/* Business News Slider */}
            <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="border-b border-gray-100/50 p-4 bg-gradient-to-r from-indigo-50/50 to-purple-50/50">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center">
                    <Newspaper className="h-4 w-4 text-indigo-700" />
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-medium text-gray-900">Business & Entrepreneur News</div>
                    <div className="text-xs text-gray-600">Latest updates and market insights</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-light text-indigo-600">{newsData.length}</div>
                    <div className="text-xs text-gray-500">Updates</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <NewsSlider newsData={newsData} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardV2;