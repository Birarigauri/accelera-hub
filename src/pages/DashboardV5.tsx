import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
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
  DollarSign,
  BarChart3,
  Settings,
  Target,
  Star,
  ChevronDown,
  Calendar,
  RefreshCw,
  Building2,
  Plus
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/layout/AppLayout";
import Header from "@/components/layout/Header";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { ComplianceTab } from "@/components/dashboard/ComplianceTab";
import { ComplianceItem } from "@/components/dashboard/ComplianceItem";
import { KPICard } from "@/components/dashboard/KPICard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const businessData = {
  "tech-solutions": {
    name: "Tech Solutions Pvt Ltd",
    totalCertification: 15,
    totalConnect: 12,
    totalDownloads: 45,
    activeBusinesses: 1,
    complianceScore: "95%",
    criticalItems: 2,
    bgColor: "bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300"
  },
  "retail-mart": {
    name: "Retail Mart Enterprise",
    totalCertification: 8,
    totalConnect: 6,
    totalDownloads: 23,
    activeBusinesses: 2,
    complianceScore: "87%",
    criticalItems: 4,
    bgColor: "bg-gradient-to-br from-green-100 via-green-200 to-emerald-300"
  },
  "food-services": {
    name: "Food Services Co",
    totalCertification: 12,
    totalConnect: 9,
    totalDownloads: 31,
    activeBusinesses: 1,
    complianceScore: "92%",
    criticalItems: 1,
    bgColor: "bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300"
  }
};

const DashboardV5 = () => {
  const [selectedBusiness, setSelectedBusiness] = useState('tech-solutions');
  const [activeComplianceTab, setActiveComplianceTab] = useState('all');
  const [complianceFilter, setComplianceFilter] = useState('');
  const [showComplianceFilters, setShowComplianceFilters] = useState(false);
  const [activeAlertsTab, setActiveAlertsTab] = useState('all');
  
  const alerts = [
    {
      id: "1",
      title: "GST Return Filing Deadline Approaching",
      description: "The deadline for GSTR-3B filing for the month of August is September 20, 2024. Please ensure timely submission to avoid penalties.",
      time: "1 day ago",
      type: "central" as const,
      icon: AlertTriangle,
      color: "red"
    },
    {
      id: "2",
      title: "MSME Registration Benefits Expanded",
      description: "The government has announced new incentives for MSMEs. Check the Udyam portal for details and how to avail them.",
      time: "1 day ago",
      type: "state" as const,
      icon: CheckCircle,
      color: "blue"
    },
    {
      id: "3",
      title: "Document Verification Complete",
      description: "Your PAN card verification has been completed successfully. You can now proceed with other applications.",
      time: "2 days ago",
      type: "central" as const,
      icon: FileText,
      color: "green"
    }
  ];
  
  const filteredAlerts = alerts.filter(alert => {
    if (activeAlertsTab === 'all') return true;
    return alert.type === activeAlertsTab;
  });
  
  const currentBusiness = businessData[selectedBusiness as keyof typeof businessData];
  
  const filteredComplianceData = complianceData.filter(item => {
    const matchesTab = activeComplianceTab === 'all' || 
      (activeComplianceTab === 'overdue' && item.status === 'overdue') ||
      (activeComplianceTab === 'thisweek' && ['pending', 'upcoming'].includes(item.status)) ||
      (activeComplianceTab === 'completed' && item.status === 'completed');
    
    const matchesFilter = !complianceFilter || 
      item.name.toLowerCase().includes(complianceFilter.toLowerCase()) ||
      item.type.toLowerCase().includes(complianceFilter.toLowerCase());
    
    return matchesTab && matchesFilter;
  });
  
  const getTabCount = (tab: string) => {
    switch (tab) {
      case 'overdue': return complianceData.filter(item => item.status === 'overdue').length;
      case 'thisweek': return complianceData.filter(item => ['pending', 'upcoming'].includes(item.status)).length;
      case 'completed': return complianceData.filter(item => item.status === 'completed').length;
      default: return complianceData.length;
    }
  };
  
  return (
    <AppLayout>
      <div className={`min-h-screen ${currentBusiness.bgColor} relative transition-all duration-500`}>
        <div className="absolute inset-0 bg-white/40"></div>
        <Header />
        
        <div className="container mx-auto px-6 py-6 relative z-10">
          {/* Newly Added Business Notification */}
          {selectedBusiness === 'retail-mart' && (
            <div className="mb-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-xl shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✨</span>
                </div>
                <div>
                  <h3 className="text-green-800 font-semibold text-base">🎉 Newly Added Business</h3>
                  <p className="text-green-700 text-sm">Welcome to your new business dashboard! Complete your setup to unlock all features.</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="mb-8">
            {/* Enhanced Executive Header */}
            <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-2xl p-8 mb-8 overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-indigo-600/90 to-purple-700/90"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
              
              <div className="relative z-10">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                      <BarChart3 className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-white mb-1">Executive Dashboard V5</h1>
                      <p className="text-blue-100 text-lg">Business intelligence and compliance monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="min-w-[320px]">
                      <div className="text-base text-white mb-3 font-semibold text-center tracking-wide">🏢 Choose Your Business</div>
                      <Select value={selectedBusiness} onValueChange={setSelectedBusiness}>
                        <SelectTrigger className="bg-white/25 border-2 border-white/40 text-white backdrop-blur-md hover:bg-white/35 transition-all duration-300 h-14 text-lg shadow-xl rounded-xl">
                          <SelectValue className="text-white font-semibold" placeholder="Select a business..." />
                        </SelectTrigger>
                        <SelectContent className="bg-white/95 backdrop-blur-md border-2 border-gray-200 shadow-2xl rounded-xl p-2">
                          {Object.entries(businessData).map(([key, business]) => (
                            <SelectItem key={key} value={key} className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 cursor-pointer py-4 px-4 rounded-lg mb-1 transition-all duration-200 pl-4 [&>span:first-child]:hidden">
                              <span className="font-semibold text-gray-900 text-base">{business.name}</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                {/* User Info Section */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl border-3 border-white/50 overflow-hidden shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                        alt="Rajesh Kumar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white mb-1">Rajesh Kumar</div>
                      <div className="text-blue-100 text-sm font-medium">Entrepreneur & Business Owner</div>
                    </div>
                  </div>
                  
                  {/* Add New Business Button */}
                  <Link to="/add-business">
                    <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 border-2 border-emerald-400 text-white backdrop-blur-sm px-8 py-3 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <Plus className="h-5 w-5 mr-3" />
                      Add New Business
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Executive KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <KPICard 
              icon={<Award className="h-6 w-6 text-red-500 mx-auto" />}
              value={currentBusiness.totalCertification}
              label="Total Certification"
              status="Active"
              statusColor="bg-red-500"
              gradientColor="bg-gradient-to-r from-red-400 to-red-600"
            />
            <KPICard 
              icon={<Shield className="h-6 w-6 text-blue-500 mx-auto" />}
              value={currentBusiness.totalConnect}
              label="Total Connect"
              status="Connected"
              statusColor="bg-blue-500"
              gradientColor="bg-gradient-to-r from-blue-400 to-blue-600"
            />
            <KPICard 
              icon={<FileText className="h-6 w-6 text-green-500 mx-auto" />}
              value={currentBusiness.totalDownloads}
              label="Total Downloads"
              status="Completed"
              statusColor="bg-green-500"
              gradientColor="bg-gradient-to-r from-green-400 to-green-600"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {/* Enhanced Compliance Dashboard */}
            <Card className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <CardHeader className="p-4 border-b border-red-100">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-base font-semibold text-gray-900">📋 Compliance Dashboard</div>
                      <div className="text-xs text-gray-600">Regulatory obligations and deadlines</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">{currentBusiness.criticalItems}</div>
                    <div className="text-xs text-red-500 font-medium">Critical Items</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 flex-1 flex flex-col">
                {/* Enhanced Summary */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-3 bg-white/80 rounded-lg border border-red-100 hover:bg-white transition-all">
                    <div className="text-xl font-bold text-red-600">1</div>
                    <div className="text-xs text-red-700 font-medium">⚠️ Overdue</div>
                  </div>
                  <div className="text-center p-3 bg-white/80 rounded-lg border border-yellow-100 hover:bg-white transition-all">
                    <div className="text-xl font-bold text-yellow-600">2</div>
                    <div className="text-xs text-yellow-700 font-medium">⏰ Due Soon</div>
                  </div>
                  <div className="text-center p-3 bg-white/80 rounded-lg border border-green-100 hover:bg-white transition-all">
                    <div className="text-xl font-bold text-green-600">2</div>
                    <div className="text-xs text-green-700 font-medium">✅ Completed</div>
                  </div>
                </div>
                
                {/* Enhanced Items */}
                <div className="space-y-3 flex-1">
                  {filteredComplianceData.slice(0, 2).map((item) => (
                    <Link key={item.id} to={item.name.includes('GSTR') ? '/compliance-flow' : '#'}>
                      <div className="flex items-center justify-between p-3 bg-white/80 rounded-lg hover:bg-white hover:shadow-md transition-all border border-gray-100 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full shadow-sm ${
                            item.status === 'overdue' ? 'bg-red-500 animate-pulse' : 
                            item.status === 'pending' ? 'bg-yellow-500' : 'bg-green-500'
                          }`}></div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{item.name}</div>
                            <div className="text-xs text-gray-600">Due: {item.dueDate}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={`${getStatusColor(item.status)} px-2 py-1 text-xs font-medium`}>
                            {item.status === 'overdue' ? '⚠️ Overdue' : 
                             item.status === 'pending' ? '⏳ Pending' : 
                             item.status === 'completed' ? '✅ Done' : item.status.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <Link to="/compliance-flow">
                  <Button className="w-full mt-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-medium">
                    📊 View All Compliance Items
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* My Documents */}
            <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <CardHeader className="p-4 border-b border-blue-100">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center shadow-md">
                      <FileText className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-base font-semibold text-gray-900">📁 My Documents</div>
                      <div className="text-xs text-gray-600">Business licenses and certificates</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">5</div>
                    <div className="text-xs text-blue-500 font-medium">Active Files</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  {certificatesData.slice(0, 3).map((cert) => (
                    <div key={cert.id} className="flex items-center justify-between p-3 bg-white/80 rounded-lg hover:bg-white hover:shadow-md transition-all border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 truncate">{cert.name}</div>
                          <div className="text-xs text-gray-600">{cert.category}</div>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(cert.status)} px-2 py-1 text-xs font-medium`}>
                        {cert.status === 'active' ? '✅ Active' : 
                         cert.status === 'pending' ? '⏳ Pending' : 
                         cert.status === 'expiring' ? '⚠️ Expiring' : 
                         cert.status === 'missing' ? '❌ Missing' : cert.status.toUpperCase()}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium">
                  📂 View All My Documents
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {/* Suggested Eligible Schemes */}
            <Card className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <CardHeader className="p-4 border-b border-green-100">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-md">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-base font-semibold text-gray-900">💡 Suggested Eligible Schemes</div>
                      <div className="text-xs text-gray-600">Government schemes matching your business profile</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">4</div>
                    <div className="text-xs text-green-500 font-medium">Available</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between p-3 bg-white/90 rounded-lg hover:bg-white hover:shadow-md transition-all border border-gray-100 hover:border-green-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-sm">
                        <Award className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">MSME Technology Upgradation</div>
                        <div className="text-xs text-gray-600 mt-1">💰 Up to ₹10 Lakh • 🎯 95% Match</div>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1.5 text-xs font-semibold rounded-full shadow-sm">95%</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white/90 rounded-lg hover:bg-white hover:shadow-md transition-all border border-gray-100 hover:border-blue-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shadow-sm">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">Startup India Seed Fund</div>
                        <div className="text-xs text-gray-600 mt-1">💰 Up to ₹50 Lakh • 🎯 87% Match</div>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-3 py-1.5 text-xs font-semibold rounded-full shadow-sm">87%</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white/90 rounded-lg hover:bg-white hover:shadow-md transition-all border border-gray-100 hover:border-purple-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center shadow-sm">
                        <Star className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">Women Entrepreneur Scheme</div>
                        <div className="text-xs text-gray-600 mt-1">💰 Up to ₹25 Lakh • 🎯 92% Match</div>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1.5 text-xs font-semibold rounded-full shadow-sm">92%</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white/90 rounded-lg hover:bg-white hover:shadow-md transition-all border border-gray-100 hover:border-orange-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center shadow-sm">
                        <TrendingUp className="h-5 w-5 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">Export Promotion Scheme</div>
                        <div className="text-xs text-gray-600 mt-1">💰 Up to ₹15 Lakh • 🎯 78% Match</div>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 px-3 py-1.5 text-xs font-semibold rounded-full shadow-sm">78%</Badge>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium">
                  🚀 Explore All Schemes
                </Button>
              </CardContent>
            </Card>

            {/* Alerts & Notifications */}
            <Card className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <CardHeader className="p-4 border-b border-orange-100">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-md">
                    <Bell className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-gray-900">🔔 Alerts & Notifications</div>
                    <div className="text-xs text-gray-600">Important updates and reminders</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-orange-600">3</div>
                  <div className="text-xs text-orange-500 font-medium">New Alerts</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex-1 flex flex-col">
              {/* Filter Tabs */}
              <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1 mb-4">
                <Button 
                  size="sm" 
                  onClick={() => setActiveAlertsTab('all')}
                  className={`text-xs px-3 py-1.5 transition-all duration-200 ${
                    activeAlertsTab === 'all' 
                      ? 'bg-white shadow-sm text-gray-900' 
                      : 'bg-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  All ({alerts.length})
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => setActiveAlertsTab('central')}
                  className={`text-xs px-3 py-1.5 transition-all duration-200 ${
                    activeAlertsTab === 'central' 
                      ? 'bg-white shadow-sm text-gray-900' 
                      : 'bg-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Central ({alerts.filter(a => a.type === 'central').length})
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => setActiveAlertsTab('state')}
                  className={`text-xs px-3 py-1.5 transition-all duration-200 ${
                    activeAlertsTab === 'state' 
                      ? 'bg-white shadow-sm text-gray-900' 
                      : 'bg-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  State ({alerts.filter(a => a.type === 'state').length})
                </Button>
              </div>
              
              <div className="space-y-3 flex-1">
                {filteredAlerts.map((alert) => {
                  const IconComponent = alert.icon;
                  const colorClasses = {
                    red: { bg: 'bg-white/90', border: 'border-red-200', text: 'text-red-900', desc: 'text-red-700', time: 'text-red-600', icon: 'text-red-600', btn: 'bg-red-50 border-red-200 text-red-700 hover:bg-red-100', iconBg: 'bg-gradient-to-br from-red-100 to-red-200' },
                    blue: { bg: 'bg-white/90', border: 'border-blue-200', text: 'text-blue-900', desc: 'text-blue-700', time: 'text-blue-600', icon: 'text-blue-600', btn: 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100', iconBg: 'bg-gradient-to-br from-blue-100 to-blue-200' },
                    green: { bg: 'bg-white/90', border: 'border-green-200', text: 'text-green-900', desc: 'text-green-700', time: 'text-green-600', icon: 'text-green-600', btn: 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100', iconBg: 'bg-gradient-to-br from-green-100 to-green-200' }
                  }[alert.color];
                  
                  return (
                    <div key={alert.id} className={`flex items-start gap-3 p-3 ${colorClasses.bg} rounded-lg border ${colorClasses.border} hover:shadow-md transition-all hover:bg-white`}>
                      <div className={`w-10 h-10 ${colorClasses.iconBg} rounded-xl flex items-center justify-center shadow-sm flex-shrink-0`}>
                        <IconComponent className={`h-5 w-5 ${colorClasses.icon}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold text-sm ${colorClasses.text} mb-1`}>{alert.title}</h4>
                        <p className={`text-xs ${colorClasses.desc} mb-2 line-clamp-2`}>{alert.description}</p>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs ${colorClasses.time} font-medium`}>{alert.time}</span>
                          <Button size="sm" variant="outline" className={`text-xs px-3 py-1.5 ${colorClasses.btn} font-medium rounded-full`}>
                            {alert.color === 'red' ? '⚡ Action' : alert.color === 'blue' ? '📖 Learn' : '👁️ View'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {filteredAlerts.length > 0 && (
                <Button variant="ghost" className="w-full mt-4 text-sm text-gray-600 hover:bg-gray-50">
                  View All Notifications
                </Button>
              )}
            </CardContent>
          </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {/* Entrepreneur's Journey */}
            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <CardHeader className="p-4 border-b border-purple-100">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-gray-900">🚀 Entrepreneur's Journey</div>
                    <div className="text-xs text-gray-600">Your business growth milestones</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">67%</div>
                  <div className="text-xs text-purple-500 font-medium">Complete</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex-1 flex flex-col">
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                  <span className="text-sm font-bold text-purple-600">2 of 3 completed</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full" style={{width: '67%'}}></div>
                </div>
              </div>
              
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3 p-3 bg-white/90 rounded-lg hover:bg-white transition-all hover:shadow-md border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900">✅ Business Registration</div>
                    <div className="text-xs text-gray-600 mt-1">Completed on Jan 15, 2023</div>
                  </div>
                  <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs px-3 py-1.5 font-semibold rounded-full shadow-sm">✓ Done</Badge>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/90 rounded-lg hover:bg-white transition-all hover:shadow-md border border-gray-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center shadow-sm">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900">🏆 First Certification</div>
                    <div className="text-xs text-gray-600 mt-1">Completed on Mar 10, 2023</div>
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs px-3 py-1.5 font-semibold rounded-full shadow-sm">✓ Done</Badge>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/90 rounded-lg hover:bg-white transition-all hover:shadow-md border border-gray-100 border-l-4 border-l-yellow-400">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center shadow-sm animate-pulse">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900">🔄 Business Expansion</div>
                    <div className="text-xs text-gray-600 mt-1">Currently in progress</div>
                  </div>
                  <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 text-xs px-3 py-1.5 font-semibold rounded-full shadow-sm animate-pulse">⏳ 60%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

            {/* Business News Slider */}
            <Card className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <CardHeader className="p-4 border-b border-indigo-100">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-md">
                      <Newspaper className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-base font-semibold text-gray-900">📰 Business & Entrepreneur News</div>
                      <div className="text-xs text-gray-600">Latest updates and market insights</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-indigo-600">{newsData.length}</div>
                    <div className="text-xs text-indigo-500 font-medium">Updates</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <NewsSlider newsData={newsData} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardV5;