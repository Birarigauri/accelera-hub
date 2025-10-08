import { useState, useEffect } from "react";
import { 
  Bell, 
  Search, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Clock,
  Star,
  FileText,
  Calendar,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const NotificationsV2 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "unread" | "important">("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "deadline",
      title: "GST Return Filing Due",
      description: "Your GST return for March 2024 is due in 3 days. File now to avoid penalties.",
      time: "2024-03-20T10:30:00Z",
      read: false,
      important: true,
      category: "compliance",
      icon: AlertTriangle,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      priority: "high"
    },
    {
      id: 2,
      type: "success",
      title: "License Renewed Successfully",
      description: "Your Trade License has been renewed and is valid until March 2025.",
      time: "2024-03-19T15:45:00Z",
      read: false,
      important: false,
      category: "services",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100",
      priority: "medium"
    },
    {
      id: 3,
      type: "scheme",
      title: "New Scheme Match Found",
      description: "You're eligible for the MSME Technology Upgradation Scheme with 80% subsidy.",
      time: "2024-03-19T09:15:00Z",
      read: true,
      important: true,
      category: "schemes",
      icon: Star,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      priority: "high"
    },
    {
      id: 4,
      type: "document",
      title: "Document Verification Complete",
      description: "Your PAN card verification has been completed successfully.",
      time: "2024-03-18T14:20:00Z",
      read: true,
      important: false,
      category: "services",
      icon: FileText,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      priority: "low"
    },
    {
      id: 5,
      type: "reminder",
      title: "Expert Consultation Scheduled",
      description: "Your consultation with CA Sharma is scheduled for tomorrow at 2:00 PM.",
      time: "2024-03-18T11:00:00Z",
      read: false,
      important: false,
      category: "services",
      icon: Calendar,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      priority: "medium"
    },
    {
      id: 6,
      type: "security",
      title: "Security Alert",
      description: "New login detected from Mumbai. If this wasn't you, please secure your account.",
      time: "2024-03-17T22:30:00Z",
      read: true,
      important: true,
      category: "security",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-100",
      priority: "high"
    },
    {
      id: 7,
      type: "update",
      title: "New Feature: AI-Powered Compliance Assistant",
      description: "Discover our new AI assistant that helps you stay compliant with automated reminders and suggestions.",
      time: "2024-03-16T08:00:00Z",
      read: false,
      important: false,
      category: "services",
      icon: Info,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      priority: "low"
    },
    {
      id: 8,
      type: "deadline",
      title: "Income Tax Return Filing Reminder",
      description: "ITR filing deadline is approaching. Complete your filing by July 31st to avoid late fees.",
      time: "2024-03-15T16:30:00Z",
      read: true,
      important: true,
      category: "compliance",
      icon: AlertTriangle,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      priority: "high"
    }
  ]);

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === "unread" && notification.read) return false;
    if (filter === "important" && !notification.important) return false;
    
    if (selectedCategory === "state" && !(notification.category === 'compliance' || notification.category === 'services')) return false;
    if (selectedCategory === "central" && !(notification.category === 'schemes' || notification.category === 'security')) return false;
    if (selectedCategory !== "all" && selectedCategory !== "state" && selectedCategory !== "central" && notification.category !== selectedCategory) return false;
    
    if (searchQuery && !notification.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !notification.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-300';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
          <div>
            <h1 className="text-3xl font-bold mb-2">Alerts & Notifications</h1>
            <p className="text-muted-foreground">
              Stay updated with your business activities and deadlines
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6 bg-gradient-card border-0">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search notifications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("all")}
                >
                  All
                </Button>
                <Button
                  variant={filter === "unread" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("unread")}
                >
                  Unread ({unreadCount})
                </Button>
                <Button
                  variant={filter === "important" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("important")}
                >
                  <Star className="h-3 w-3 mr-1" />
                  Important
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Priority Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Urgent Section */}
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="h-5 w-5" />
                🚨 Urgent Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notifications.filter(n => n.priority === 'high').slice(0, 3).map((notification) => (
                  <div key={notification.id} className="flex items-start gap-3 p-3 bg-white/70 rounded-lg border border-red-100">
                    <div className={`w-8 h-8 rounded-lg ${notification.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <notification.icon className={`h-4 w-4 ${notification.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm text-red-900 line-clamp-1">{notification.title}</h4>
                      <p className="text-xs text-red-700 line-clamp-2 mt-1">{notification.description}</p>
                      <span className="text-xs text-red-600 mt-1 block">{getTimeAgo(notification.time)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Moderate Section */}
          <Card className="bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-yellow-700">
                <Clock className="h-5 w-5" />
                ⚠️ Moderate Priority
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notifications.filter(n => n.priority === 'medium').slice(0, 3).map((notification) => (
                  <div key={notification.id} className="flex items-start gap-3 p-3 bg-white/70 rounded-lg border border-yellow-100">
                    <div className={`w-8 h-8 rounded-lg ${notification.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <notification.icon className={`h-4 w-4 ${notification.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm text-yellow-900 line-clamp-1">{notification.title}</h4>
                      <p className="text-xs text-yellow-700 line-clamp-2 mt-1">{notification.description}</p>
                      <span className="text-xs text-yellow-600 mt-1 block">{getTimeAgo(notification.time)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-6">
          <TabsList className="grid w-full md:w-auto md:grid-cols-3 bg-white">
            <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
            <TabsTrigger value="state">State ({notifications.filter(n => n.category === 'compliance' || n.category === 'services').length})</TabsTrigger>
            <TabsTrigger value="central">Central ({notifications.filter(n => n.category === 'schemes' || n.category === 'security').length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <Card className="text-center p-12 bg-gradient-card border-0">
                <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No notifications found</h3>
                <p className="text-muted-foreground">
                  {searchQuery ? "Try adjusting your search terms" : "You're all caught up!"}
                </p>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredNotifications.map((notification) => (
                  <Card key={notification.id} className={`transition-all duration-300 hover:shadow-lg bg-gradient-card border-0 border-l-4 ${getPriorityColor(notification.priority)} ${!notification.read ? 'ring-2 ring-primary/20 bg-blue-50/30' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg ${notification.bgColor} flex items-center justify-center flex-shrink-0`}>
                          <notification.icon className={`h-5 w-5 ${notification.color}`} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className={`font-semibold ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {notification.title}
                              </h3>
                              {notification.important && (
                                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                              )}
                              {!notification.read && (
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground whitespace-nowrap">
                                {getTimeAgo(notification.time)}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {notification.description}
                          </p>
                          
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs capitalize">
                              {notification.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs capitalize">
                              {notification.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="state" className="space-y-4">
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <Card key={notification.id} className={`transition-all duration-300 hover:shadow-lg bg-gradient-card border-0 border-l-4 ${getPriorityColor(notification.priority)} ${!notification.read ? 'ring-2 ring-primary/20 bg-blue-50/30' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg ${notification.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <notification.icon className={`h-5 w-5 ${notification.color}`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className={`font-semibold ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {notification.title}
                            </h3>
                            {notification.important && (
                              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            )}
                            {!notification.read && (
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground whitespace-nowrap">
                              {getTimeAgo(notification.time)}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {notification.description}
                        </p>
                        
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs capitalize">
                            {notification.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs capitalize">
                            {notification.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="central" className="space-y-4">
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <Card key={notification.id} className={`transition-all duration-300 hover:shadow-lg bg-gradient-card border-0 border-l-4 ${getPriorityColor(notification.priority)} ${!notification.read ? 'ring-2 ring-primary/20 bg-blue-50/30' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg ${notification.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <notification.icon className={`h-5 w-5 ${notification.color}`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className={`font-semibold ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {notification.title}
                            </h3>
                            {notification.important && (
                              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            )}
                            {!notification.read && (
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground whitespace-nowrap">
                              {getTimeAgo(notification.time)}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {notification.description}
                        </p>
                        
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs capitalize">
                            {notification.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs capitalize">
                            {notification.type}
                          </Badge>
                        </div>
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

export default NotificationsV2;