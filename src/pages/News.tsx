import { useState } from "react";
import { 
  Newspaper, 
  Search, 
  Filter, 
  Bookmark, 
  Share2, 
  Clock, 
  Eye, 
  TrendingUp,
  Building,
  Gavel,
  Zap,
  Globe,
  Calendar,
  ChevronRight,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All News", count: 156 },
    { id: "policy", label: "Policy Updates", count: 45 },
    { id: "startup", label: "Startup News", count: 38 },
    { id: "regulations", label: "Regulations", count: 28 },
    { id: "funding", label: "Funding", count: 25 },
    { id: "technology", label: "Technology", count: 20 },
  ];

  const featuredNews = [
    {
      id: 1,
      title: "New GST Return Filing Process Announced by Government",
      excerpt: "Simplified procedures and reduced compliance burden for small businesses",
      content: "The government has announced a new simplified GST return filing process that will reduce the compliance burden on small and medium businesses...",
      category: "policy",
      author: "Ministry of Finance",
      publishedDate: "2024-03-22T09:00:00Z",
      readTime: "5 min read",
      views: 12500,
      featured: true,
      trending: true,
      image: "/api/placeholder/600/300",
      tags: ["GST", "Policy", "Small Business"],
      icon: Gavel
    },
    {
      id: 2,
      title: "Startup India Seed Fund Scheme Extended Until December 2024",
      excerpt: "Additional funding allocated to support early-stage startups across India",
      content: "The popular Startup India Seed Fund Scheme has been extended with additional budget allocation...",
      category: "startup",
      author: "DPIIT",
      publishedDate: "2024-03-21T14:30:00Z",
      readTime: "3 min read",
      views: 8750,
      featured: true,
      trending: false,
      image: "/api/placeholder/600/300",
      tags: ["Startup", "Funding", "Government Scheme"],
      icon: Zap
    },
    {
      id: 3,
      title: "New MSME Definition and Benefits Announced",
      excerpt: "Updated criteria and enhanced benefits for micro, small and medium enterprises",
      content: "The government has updated the definition of MSMEs and announced enhanced benefits...",
      category: "policy",
      author: "MSME Ministry",
      publishedDate: "2024-03-20T11:15:00Z",
      readTime: "7 min read",
      views: 15200,
      featured: false,
      trending: true,
      image: "/api/placeholder/600/300",
      tags: ["MSME", "Policy", "Benefits"],
      icon: Building
    }
  ];

  const regularNews = [
    {
      id: 4,
      title: "Digital Payment Adoption Reaches 85% Among Small Businesses",
      excerpt: "Study shows significant increase in digital payment adoption post-pandemic",
      category: "technology",
      author: "Tech Research Firm",
      publishedDate: "2024-03-19T16:45:00Z",
      readTime: "4 min read",
      views: 5600,
      bookmarked: false,
      tags: ["Digital Payments", "Technology", "Small Business"],
      icon: Globe
    },
    {
      id: 5,
      title: "Export Promotion Scheme: New Benefits for Manufacturing Units",
      excerpt: "Enhanced incentives announced for manufacturing exporters",
      category: "policy",
      author: "Export Promotion Council",
      publishedDate: "2024-03-18T10:20:00Z",
      readTime: "6 min read",
      views: 4200,
      bookmarked: true,
      tags: ["Export", "Manufacturing", "Incentives"],
      icon: TrendingUp
    },
    {
      id: 6,
      title: "Fintech Startups Raise $2.3B in Q1 2024",
      excerpt: "Record funding quarter for fintech sector in India",
      category: "funding",
      author: "Startup Weekly",
      publishedDate: "2024-03-17T13:00:00Z",
      readTime: "5 min read",
      views: 7800,
      bookmarked: false,
      tags: ["Fintech", "Funding", "Quarterly Report"],
      icon: Zap
    },
    {
      id: 7,
      title: "Labor Law Reforms: What Businesses Need to Know",
      excerpt: "Comprehensive guide to recent labor law changes and compliance requirements",
      category: "regulations",
      author: "Legal Affairs Desk",
      publishedDate: "2024-03-16T09:30:00Z",
      readTime: "8 min read",
      views: 9100,
      bookmarked: true,
      tags: ["Labor Laws", "Compliance", "Legal"],
      icon: Gavel
    }
  ];

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "policy": return "bg-blue-100 text-blue-700";
      case "startup": return "bg-green-100 text-green-700";
      case "regulations": return "bg-red-100 text-red-700";
      case "funding": return "bg-purple-100 text-purple-700";
      case "technology": return "bg-orange-100 text-orange-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
           
            <div>
              <h1 className="text-4xl font-bold text-gray-900">News Hub</h1>
              <p className="text-gray-600">Latest updates, policies & business insights</p>
            </div>
          </div>
          
          
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 bg-white shadow-lg border-0 rounded-2xl">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="🔍 Search news, policies, announcements..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 text-base"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 transition-all ${
                      selectedCategory === category.id 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' 
                        : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                    }`}
                  >
                    {category.label} <span className="ml-1 text-xs opacity-75">({category.count})</span>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured News */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">🔥 Trending Stories</h2>
              </div>
              
              <div className="space-y-6">
                {featuredNews.map((article, index) => (
                  <Card key={article.id} className={`group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white border-0 rounded-2xl overflow-hidden ${index === 0 ? 'lg:col-span-2 border-l-4 border-l-blue-500' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-r ${article.category === 'policy' ? 'from-blue-500 to-blue-600' : article.category === 'startup' ? 'from-green-500 to-green-600' : 'from-purple-500 to-purple-600'} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <article.icon className="h-7 w-7 text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge className={getCategoryColor(article.category)}>
                                {article.category}
                              </Badge>
                              {article.trending && (
                                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                                  <TrendingUp className="h-3 w-3 mr-1" />
                                  Trending
                                </Badge>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Bookmark className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors cursor-pointer">
                            {article.title}
                          </h3>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {article.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <span>{article.author}</span>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {getTimeAgo(article.publishedDate)}
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {article.views.toLocaleString()} views
                              </div>
                            </div>
                            
                            <Button variant="ghost" size="sm" className="group-hover:text-primary">
                              Read More
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Regular News */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Newspaper className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">📈 Latest Updates</h2>
              </div>
              
              <div className="space-y-4">
                {regularNews.map((article) => (
                  <Card key={article.id} className="group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-white border border-gray-100 rounded-xl">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                          <article.icon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <Badge className={getCategoryColor(article.category)}>
                              {article.category}
                            </Badge>
                            
                            <div className="flex items-center gap-1">
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className={`h-7 w-7 p-0 ${article.bookmarked ? 'text-primary' : ''}`}
                              >
                                <Bookmark className={`h-3 w-3 ${article.bookmarked ? 'fill-current' : ''}`} />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                <Share2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          
                          <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors cursor-pointer">
                            {article.title}
                          </h4>
                          
                          <p className="text-sm text-muted-foreground mb-2">
                            {article.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-3">
                              <span>{article.author}</span>
                              <span>{getTimeAgo(article.publishedDate)}</span>
                              <span>{article.readTime}</span>
                            </div>
                            
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {article.views.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline">
                  Load More Articles
                </Button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  🔗 Quick Access
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">Policy Calendar</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <Gavel className="h-4 w-4 text-primary" />
                  <span className="text-sm">Regulatory Updates</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm">Market Insights</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm">Startup News</span>
                </a>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 rounded-2xl shadow-xl">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Newspaper className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">📧 Newsletter</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Get daily updates on policies, schemes & business opportunities
                  </p>
                  <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                    Subscribe Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  🏷️ Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["GST", "Startup", "MSME", "Policy", "Funding", "Digital", "Export", "Labor Laws", "Technology", "Compliance"].map((tag) => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default News;