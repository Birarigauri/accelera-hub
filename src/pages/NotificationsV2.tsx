import { useState } from "react";
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
  const [filter, setFilter] = useState<"all" | "moderate" | "urgent">("all");
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

  const [selectedNotification, setSelectedNotification] = useState<any>(null);

  const filteredNotifications = notifications.filter(notification => {
    if (filter === "moderate" && notification.priority !== "medium") return false;
    if (filter === "urgent" && notification.priority !== "high") return false;
    
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

  const moderateCount = notifications.filter(n => n.priority === "medium").length;
  const urgentCount = notifications.filter(n => n.priority === "high").length;

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-6 mb-6 shadow-xl">
          <div className="text-white">
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">🔔 Alerts & Notifications</h1>
            <p className="text-blue-100 text-sm sm:text-base">
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
                  className={filter === "all" ? "hover:bg-primary hover:text-primary-foreground" : ""}
                >
                  All
                </Button>
                <Button
                  variant={filter === "moderate" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("moderate")}
                  className={filter === "moderate" ? "hover:bg-primary hover:text-primary-foreground" : ""}
                >
                  <Clock className="h-3 w-3 mr-1" />
                  Moderate ({moderateCount})
                </Button>
                <Button
                  variant={filter === "urgent" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("urgent")}
                  className={filter === "urgent" ? "hover:bg-primary hover:text-primary-foreground" : ""}
                >
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Urgent ({urgentCount})
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        

        {/* Notifications Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-6">
          <TabsList className="grid w-full md:w-auto md:grid-cols-3 bg-white">
            <TabsTrigger value="all" className="data-[state=active]:hover:bg-primary data-[state=active]:hover:text-primary-foreground">All ({notifications.length})</TabsTrigger>
            <TabsTrigger value="state" className="data-[state=active]:hover:bg-primary data-[state=active]:hover:text-primary-foreground">State ({notifications.filter(n => n.category === 'compliance' || n.category === 'services').length})</TabsTrigger>
            <TabsTrigger value="central" className="data-[state=active]:hover:bg-primary data-[state=active]:hover:text-primary-foreground">Central ({notifications.filter(n => n.category === 'schemes' || n.category === 'security').length})</TabsTrigger>
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
                  <Card key={notification.id} onClick={() => setSelectedNotification(notification)} className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-l-4 ${getPriorityColor(notification.priority)} ${!notification.read ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white border border-gray-200'}`}>
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
                            <Badge variant={notification.read ? "outline" : "default"} className="text-xs">
                              {notification.read ? "Read" : "Unread"}
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
                <Card key={notification.id} onClick={() => setSelectedNotification(notification)} className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-l-4 ${getPriorityColor(notification.priority)} ${!notification.read ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white border border-gray-200'}`}>
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
                <Card key={notification.id} onClick={() => setSelectedNotification(notification)} className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-l-4 ${getPriorityColor(notification.priority)} ${!notification.read ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white border border-gray-200'}`}>
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

      {selectedNotification && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedNotification(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg ${selectedNotification.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <selectedNotification.icon className={`h-6 w-6 ${selectedNotification.color}`} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{selectedNotification.title}</h2>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs capitalize">{selectedNotification.category}</Badge>
                    <Badge variant="outline" className="text-xs capitalize">{selectedNotification.type}</Badge>
                    {selectedNotification.important && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                  </div>
                </div>
                <button onClick={() => setSelectedNotification(null)} className="text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-sm p-1 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">{selectedNotification.description}</p>
             
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default NotificationsV2;