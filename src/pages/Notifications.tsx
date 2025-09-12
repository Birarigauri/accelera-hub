import { useState } from "react";
import { 
  Bell, 
  Filter, 
  Search, 
  MoreVertical, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Trash2,
  Clock,
  Star,
  FileText,
  Calendar,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const Notifications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "unread" | "important">("all");

  const notifications = [
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
    },
    {
      id: 2,
      type: "success",
      title: "License Renewed Successfully",
      description: "Your Trade License has been renewed and is valid until March 2025.",
      time: "2024-03-19T15:45:00Z",
      read: false,
      important: false,
      category: "license",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: 3,
      type: "scheme",
      title: "New Scheme Match Found",
      description: "You're eligible for the MSME Technology Upgradation Scheme with 80% subsidy.",
      time: "2024-03-19T09:15:00Z",
      read: true,
      important: true,
      category: "scheme",
      icon: Star,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: 4,
      type: "document",
      title: "Document Verification Complete",
      description: "Your PAN card verification has been completed successfully.",
      time: "2024-03-18T14:20:00Z",
      read: true,
      important: false,
      category: "document",
      icon: FileText,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      id: 5,
      type: "reminder",
      title: "Expert Consultation Scheduled",
      description: "Your consultation with CA Sharma is scheduled for tomorrow at 2:00 PM.",
      time: "2024-03-18T11:00:00Z",
      read: false,
      important: false,
      category: "consultation",
      icon: Calendar,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
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
    },
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

  const filteredNotifications = notifications.filter(notification => {
    if (filter === "unread" && notification.read) return false;
    if (filter === "important" && !notification.important) return false;
    if (searchQuery && !notification.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !notification.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
          <div>
            <h1 className="text-3xl font-bold mb-2">Notifications</h1>
            <p className="text-muted-foreground">
              Stay updated with your business activities and deadlines
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="px-3">
              {unreadCount} unread
            </Badge>
            <Button variant="outline" size="sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark All Read
            </Button>
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

        {/* Notifications Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full md:w-auto md:grid-cols-5 bg-white">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="schemes">Schemes</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
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
              filteredNotifications.map((notification) => (
                <Card key={notification.id} className={`transition-all duration-300 hover:shadow-lg bg-gradient-card border-0 ${!notification.read ? 'ring-2 ring-primary/20' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg ${notification.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <notification.icon className={`h-5 w-5 ${notification.color}`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <h3 className={`font-semibold ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {notification.title}
                            </h3>
                            {notification.important && (
                              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            )}
                            {!notification.read && (
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                              {getTimeAgo(notification.time)}
                            </span>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Mark as read
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Star className="h-4 w-4 mr-2" />
                                  Mark important
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-3 leading-relaxed">
                          {notification.description}
                        </p>
                        
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="text-xs">
                            {notification.category}
                          </Badge>
                          
                          {notification.type === "deadline" && (
                            <Button size="sm" variant="default">
                              Take Action
                            </Button>
                          )}
                          
                          {notification.type === "scheme" && (
                            <Button size="sm" variant="secondary">
                              View Details
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Other tab contents would follow similar pattern */}
          <TabsContent value="compliance">
            <Card className="text-center p-12 bg-gradient-card border-0">
              <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Compliance Notifications</h3>
              <p className="text-muted-foreground">
                Stay on top of your regulatory requirements and deadlines
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="schemes">
            <Card className="text-center p-12 bg-gradient-card border-0">
              <Star className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Scheme Notifications</h3>
              <p className="text-muted-foreground">
                Discover new funding opportunities and scheme matches
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card className="text-center p-12 bg-gradient-card border-0">
              <FileText className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Service Notifications</h3>
              <p className="text-muted-foreground">
                Updates on your service requests and applications
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card className="text-center p-12 bg-gradient-card border-0">
              <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Security Notifications</h3>
              <p className="text-muted-foreground">
                Important security alerts and account activities
              </p>
            </Card>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

export default Notifications;
