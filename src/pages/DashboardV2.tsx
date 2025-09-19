import { useState, useEffect } from "react";
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
  RefreshCw
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
  const [activeComplianceTab, setActiveComplianceTab] = useState('all');
  const [complianceFilter, setComplianceFilter] = useState('');
  const [showComplianceFilters, setShowComplianceFilters] = useState(false);
  
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-white/40"></div>
        <Header />
        
        <div className="container mx-auto px-6 py-6 relative z-10">
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
                      <h1 className="text-3xl font-bold text-white mb-1">Executive Dashboard</h1>
                      <p className="text-blue-100 text-lg">Business intelligence and compliance monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right text-white/90">
                      <div className="text-sm text-blue-100">Last Updated</div>
                      <div className="text-lg font-semibold">Today, 2:30 PM</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button size="sm" className="bg-white/20 hover:bg-white/30 border-white/30 text-white backdrop-blur-sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-white/20 hover:bg-white/30 border-white/30 text-white backdrop-blur-sm relative">
                        <Bell className="h-4 w-4" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full border-2 border-white animate-pulse"></div>
                      </Button>
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
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">3</div>
                      <div className="text-blue-100 text-sm font-medium">Active Businesses</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="text-2xl font-bold text-green-300">Online</div>
                      </div>
                      <div className="text-blue-100 text-sm font-medium">Account Status</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Executive KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <KPICard 
              icon={<AlertTriangle className="h-6 w-6 text-red-500 mx-auto" />}
              value={3}
              label="Critical Items"
              status="Urgent"
              statusColor="bg-red-500"
              gradientColor="bg-gradient-to-r from-red-400 to-red-600"
            />
            <KPICard 
              icon={<Clock className="h-6 w-6 text-blue-500 mx-auto" />}
              value={5}
              label="In Progress"
              status="On Track"
              statusColor="bg-blue-500"
              gradientColor="bg-gradient-to-r from-blue-400 to-blue-600"
            />
            <KPICard 
              icon={<DollarSign className="h-6 w-6 text-green-500 mx-auto" />}
              value={4}
              label="Opportunities"
              status="Available"
              statusColor="bg-green-500"
              gradientColor="bg-gradient-to-r from-green-400 to-green-600"
            />
            <KPICard 
              icon={<BarChart3 className="h-6 w-6 text-indigo-500 mx-auto" />}
              value="92%"
              label="Health Score"
              status="Excellent"
              statusColor="bg-indigo-500"
              gradientColor="bg-gradient-to-r from-indigo-400 to-indigo-600"
            />
          </div>

          {/* Entrepreneur's Journey Timeline */}
          <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 mb-6">
            <CardHeader className="border-b border-gray-100/50 p-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
              <CardTitle className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                  <Target className="h-4 w-4 text-purple-700" />
                </div>
                <div className="flex-1">
                  <div className="text-base font-medium text-gray-900">Entrepreneur's Journey</div>
                  <div className="text-xs text-gray-600">Your business milestones and achievements</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-light text-purple-600">75%</div>
                  <div className="text-xs text-gray-500">Complete</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-400 to-gray-300"></div>
                
                {/* Timeline Items */}
                <div className="space-y-6">
                  {/* Completed Milestone */}
                  <div className="flex items-start gap-4">
                    <div className="relative z-10 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">Business Registration</h4>
                        <span className="text-xs text-gray-500">Jan 2023</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Successfully registered first business entity</p>
                      <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                        Completed
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Completed Milestone */}
                  <div className="flex items-start gap-4">
                    <div className="relative z-10 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">First Certification</h4>
                        <span className="text-xs text-gray-500">Mar 2023</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Obtained GST registration and trade license</p>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs">
                        Achieved
                      </Badge>
                    </div>
                  </div>
                  
                  {/* In Progress Milestone */}
                  <div className="flex items-start gap-4">
                    <div className="relative z-10 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">Business Expansion</h4>
                        <span className="text-xs text-gray-500">In Progress</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Setting up second business venture</p>
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">
                        60% Complete
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Upcoming Milestone */}
                  <div className="flex items-start gap-4">
                    <div className="relative z-10 w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">Scale & Growth</h4>
                        <span className="text-xs text-gray-500">Upcoming</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Expand to multiple locations and markets</p>
                      <Badge className="bg-gray-100 text-gray-800 border-gray-200 text-xs">
                        Planned
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Future Milestone */}
                  <div className="flex items-start gap-4">
                    <div className="relative z-10 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-lg">
                      <TrendingUp className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">Market Leadership</h4>
                        <span className="text-xs text-gray-500">Future Goal</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Become industry leader in chosen sectors</p>
                      <Badge className="bg-gray-100 text-gray-600 border-gray-200 text-xs">
                        Vision
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Enhanced Compliance Dashboard */}
            <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader className="border-b border-gray-100/50 p-4 bg-gradient-to-r from-red-50/50 to-orange-50/50">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center">
                      <Shield className="h-4 w-4 text-red-700" />
                    </div>
                    <div className="flex-1">
                      <div className="text-base font-medium text-gray-900">Compliance Dashboard</div>
                      <div className="text-xs text-gray-600">Regulatory obligations and deadlines</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-lg font-light text-red-600">3</div>
                      <div className="text-xs text-gray-500">Critical</div>
                    </div>
                    <Button size="sm" variant="outline" className="p-2">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              
              {/* Enhanced Compliance Navigation Tabs */}
              <div className="px-4 pt-3 pb-0">
                <div className="mb-3">
                  <div className="flex flex-wrap items-center gap-1 bg-gray-100 rounded-lg p-1">
                    <Button 
                      size="sm" 
                      onClick={() => setActiveComplianceTab('all')}
                      className={`text-xs px-2 sm:px-3 py-1.5 transition-all duration-200 ${
                        activeComplianceTab === 'all' 
                          ? 'bg-white shadow-sm text-gray-900' 
                          : 'bg-transparent text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <span className="hidden sm:inline">All Items</span>
                      <span className="sm:hidden">All</span>
                      <span className="ml-1">({getTabCount('all')})</span>
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => setActiveComplianceTab('overdue')}
                      className={`text-xs px-2 sm:px-3 py-1.5 transition-all duration-200 ${
                        activeComplianceTab === 'overdue' 
                          ? 'bg-white shadow-sm text-red-700' 
                          : 'bg-transparent text-gray-600 hover:text-red-600'
                      }`}
                    >
                      Overdue ({getTabCount('overdue')})
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => setActiveComplianceTab('thisweek')}
                      className={`text-xs px-2 sm:px-3 py-1.5 transition-all duration-200 ${
                        activeComplianceTab === 'thisweek' 
                          ? 'bg-white shadow-sm text-yellow-700' 
                          : 'bg-transparent text-gray-600 hover:text-yellow-600'
                      }`}
                    >
                      <span className="hidden sm:inline">This Week</span>
                      <span className="sm:hidden">Week</span>
                      <span className="ml-1">({getTabCount('thisweek')})</span>
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => setActiveComplianceTab('completed')}
                      className={`text-xs px-2 sm:px-3 py-1.5 transition-all duration-200 ${
                        activeComplianceTab === 'completed' 
                          ? 'bg-white shadow-sm text-green-700' 
                          : 'bg-transparent text-gray-600 hover:text-green-600'
                      }`}
                    >
                      <span className="hidden sm:inline">Completed</span>
                      <span className="sm:hidden">Done</span>
                      <span className="ml-1">({getTabCount('completed')})</span>
                    </Button>
                  </div>
                </div>
                
                {/* Advanced Filters */}
                {showComplianceFilters && (
                  <div className="mb-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Search compliance items..."
                          value={complianceFilter}
                          onChange={(e) => setComplianceFilter(e.target.value)}
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <Button size="sm" variant="outline" className="px-3 py-2 text-xs">
                        <ChevronDown className="h-3 w-3 mr-1" />
                        Type
                      </Button>
                      <Button size="sm" variant="outline" className="px-3 py-2 text-xs">
                        <ChevronDown className="h-3 w-3 mr-1" />
                        Date
                      </Button>
                      {(complianceFilter || activeComplianceTab !== 'all') && (
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          onClick={() => {
                            setComplianceFilter('');
                            setActiveComplianceTab('all');
                          }}
                          className="px-2 py-2 text-xs text-gray-500 hover:text-gray-700"
                        >
                          Clear
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <CardContent className="p-4">
                {/* Compliance Summary */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-3 bg-red-50 rounded-lg border border-red-100">
                    <div className="text-lg font-bold text-red-600">1</div>
                    <div className="text-xs text-red-700">Overdue</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                    <div className="text-lg font-bold text-yellow-600">2</div>
                    <div className="text-xs text-yellow-700">Due Soon</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
                    <div className="text-lg font-bold text-green-600">2</div>
                    <div className="text-xs text-green-700">Completed</div>
                  </div>
                </div>
                
                {/* Compliance Items */}
                <div className="space-y-3">
                  {filteredComplianceData.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FileText className="h-8 w-8 text-gray-400" />
                      </div>
                      <div className="text-sm text-gray-500 mb-1">No compliance items found</div>
                      <div className="text-xs text-gray-400">
                        {activeComplianceTab !== 'all' ? `No items in "${activeComplianceTab}" category` : 'Try adjusting your filters'}
                      </div>
                    </div>
                  ) : (
                    filteredComplianceData.slice(0, 4).map((item, index) => (
                      <div key={item.id} className="group p-3 bg-gradient-to-r from-gray-50/50 to-white rounded-lg border border-gray-100/50 hover:shadow-md transition-all duration-200 cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${
                              item.status === 'overdue' ? 'bg-red-500 animate-pulse' : 
                              item.status === 'pending' ? 'bg-yellow-500' : 
                              'bg-green-500'
                            }`}></div>
                            <div>
                              <div className="font-medium text-sm text-gray-900">{item.name}</div>
                              <div className="text-xs text-gray-600">{item.type}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={`${getStatusColor(item.status)} px-2 py-1 text-xs`}>
                              {item.status.toUpperCase()}
                            </Badge>
                            <Button size="sm" variant="ghost" className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-gray-500">
                              <Calendar className="h-3 w-3" />
                              <span>Due: {item.dueDate}</span>
                            </div>
                            {item.status === 'overdue' && (
                              <div className="flex items-center gap-1 text-red-600">
                                <AlertTriangle className="h-3 w-3" />
                                <span>3 days overdue</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            <Button size="sm" variant="outline" className="px-2 py-1 text-xs h-6">
                              {item.status === 'completed' ? 'View' : 'Action'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                
                {/* Enhanced Navigation */}
                {filteredComplianceData.length > 0 && (
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-gray-500">
                        Showing {Math.min(4, filteredComplianceData.length)} of {filteredComplianceData.length} items
                      </div>
                      {activeComplianceTab !== 'all' && (
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs px-2 py-0.5">
                          Filtered
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => setShowComplianceFilters(!showComplianceFilters)}
                        className="text-xs px-2 sm:px-3 py-1.5 border-gray-200 hover:bg-gray-50"
                      >
                        {showComplianceFilters ? 'Hide' : 'Show'} Filters
                      </Button>
                      
                      {filteredComplianceData.length > 4 && (
                        <Button variant="outline" className="text-xs px-2 sm:px-3 py-1.5 border-gray-200 hover:bg-gray-50">
                          <span className="hidden sm:inline">View All ({filteredComplianceData.length - 4} more)</span>
                          <span className="sm:hidden">+{filteredComplianceData.length - 4}</span>
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      )}
                    </div>
                  </div>
                )}
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