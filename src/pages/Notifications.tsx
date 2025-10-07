import { useState, useEffect } from "react";
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
  Shield,
  Settings,
  Archive,
  Eye,
  EyeOff,
  RefreshCw,
  X
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
    },
    {
      id: 9,
      type: "approval",
      title: "Trade License Application Approved",
      description: "Your trade license application has been approved by the state authority. Download your certificate from the portal.",
      time: "2024-03-14T12:15:00Z",
      read: false,
      important: true,
      category: "compliance",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100",
      priority: "medium"
    },
    {
      id: 10,
      type: "renewal",
      title: "Professional Tax Registration Renewal",
      description: "Your professional tax registration expires next month. Renew it to avoid penalties.",
      time: "2024-03-13T09:45:00Z",
      read: false,
      important: false,
      category: "services",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      priority: "medium"
    },
    {
      id: 11,
      type: "scheme",
      title: "PM SVANidhi Scheme Application Update",
      description: "Your application for PM SVANidhi scheme is under review. Expected decision within 15 days.",
      time: "2024-03-12T16:20:00Z",
      read: true,
      important: false,
      category: "schemes",
      icon: Star,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      priority: "low"
    },
    {
      id: 12,
      type: "security",
      title: "Two-Factor Authentication Enabled",
      description: "Two-factor authentication has been successfully enabled for your account for enhanced security.",
      time: "2024-03-11T14:30:00Z",
      read: true,
      important: false,
      category: "security",
      icon: Shield,
      color: "text-green-600",
      bgColor: "bg-green-100",
      priority: "low"
    },
    {
      id: 13,
      type: "compliance",
      title: "GST Return Filing Due",
      description: "Your monthly GST return (GSTR-3B) is due on 20th March. File now to avoid late fees.",
      time: "2024-03-10T11:00:00Z",
      read: false,
      important: true,
      category: "compliance",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-100",
      priority: "high"
    },
    {
      id: 14,
      type: "approval",
      title: "Shop & Establishment License Renewed",
      description: "Your Shop & Establishment license has been successfully renewed for the next year.",
      time: "2024-03-09T15:45:00Z",
      read: true,
      important: false,
      category: "services",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100",
      priority: "medium"
    },
    {
      id: 15,
      type: "deadline",
      title: "Labour License Inspection Scheduled",
      description: "State labour department has scheduled an inspection for your premises on March 25th, 2024.",
      time: "2024-03-08T10:30:00Z",
      read: false,
      important: true,
      category: "compliance",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      priority: "high"
    },
    {
      id: 16,
      type: "scheme",
      title: "Mudra Loan Application Approved",
      description: "Congratulations! Your Mudra loan application for ₹2,00,000 has been approved. Funds will be disbursed within 3 working days.",
      time: "2024-03-07T13:20:00Z",
      read: false,
      important: true,
      category: "schemes",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100",
      priority: "high"
    },
    {
      id: 17,
      type: "update",
      title: "Digital India Initiative Update",
      description: "New digital services are now available under Digital India. Explore paperless solutions for your business.",
      time: "2024-03-06T09:15:00Z",
      read: true,
      important: false,
      category: "schemes",
      icon: Star,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      priority: "low"
    },
    {
      id: 18,
      type: "security",
      title: "Account Login from New Device",
      description: "Your account was accessed from a new device. If this wasn't you, please secure your account immediately.",
      time: "2024-03-05T18:45:00Z",
      read: false,
      important: true,
      category: "security",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-100",
      priority: "high"
    },
    {
      id: 19,
      type: "renewal",
      title: "Factory License Renewal Due",
      description: "Your factory license expires on April 15th, 2024. Submit renewal application within 30 days to avoid penalties.",
      time: "2024-03-04T14:20:00Z",
      read: false,
      important: true,
      category: "compliance",
      icon: AlertTriangle,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      priority: "high"
    },
    {
      id: 20,
      type: "approval",
      title: "Fire Safety Certificate Approved",
      description: "Your fire safety certificate application has been approved by the state fire department. Valid for 3 years.",
      time: "2024-03-03T11:30:00Z",
      read: true,
      important: false,
      category: "services",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-100",
      priority: "medium"
    },
    {
      id: 21,
      type: "deadline",
      title: "Environmental Clearance Submission",
      description: "Submit your annual environmental compliance report to the State Pollution Control Board by March 31st.",
      time: "2024-03-02T09:45:00Z",
      read: false,
      important: true,
      category: "compliance",
      icon: Calendar,
      color: "text-red-600",
      bgColor: "bg-red-100",
      priority: "high"
    },
    {
      id: 22,
      type: "scheme",
      title: "Startup India Registration Completed",
      description: "Your startup has been successfully registered under Startup India initiative. Enjoy tax benefits and funding opportunities.",
      time: "2024-03-01T16:15:00Z",
      read: false,
      important: true,
      category: "schemes",
      icon: Star,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      priority: "high"
    },
    {
      id: 23,
      type: "update",
      title: "Make in India Portal Enhancement",
      description: "New features added to Make in India portal including AI-powered scheme recommendations and faster application processing.",
      time: "2024-02-29T13:00:00Z",
      read: true,
      important: false,
      category: "schemes",
      icon: Info,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      priority: "low"
    },
    {
      id: 24,
      type: "security",
      title: "Password Expiry Warning",
      description: "Your account password will expire in 7 days. Update your password now to maintain account security.",
      time: "2024-02-28T10:30:00Z",
      read: false,
      important: false,
      category: "security",
      icon: Shield,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      priority: "medium"
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

  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAsImportant = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, important: !n.important } : n));
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === "unread" && notification.read) return false;
    if (filter === "important" && !notification.important) return false;
    
    // Handle category filtering for state and central tabs
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
          
          {/* <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="px-3">
                {unreadCount} unread
              </Badge>
              <Badge variant="outline" className="px-3">
                {filteredNotifications.length} total
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={markAllAsRead}>
                <CheckCircle className="h-4 w-4 mr-2" />
                Mark All Read
              </Button>
            </div> */}
          {/* </div> */}
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
                              <Badge variant={notification.priority === 'high' ? 'destructive' : notification.priority === 'medium' ? 'default' : 'secondary'} className="text-xs">
                                {notification.priority}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground whitespace-nowrap">
                                {getTimeAgo(notification.time)}
                              </span>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                                    {notification.read ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                                    {notification.read ? 'Mark as unread' : 'Mark as read'}
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => markAsImportant(notification.id)}>
                                    <Star className={`h-4 w-4 mr-2 ${notification.important ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                                    {notification.important ? 'Remove from important' : 'Mark important'}
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Archive className="h-4 w-4 mr-2" />
                                    Archive
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-destructive" onClick={() => deleteNotification(notification.id)}>
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {notification.description}
                          </p>
                          
                          <div className="flex items-center justify-between flex-wrap gap-3">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs capitalize">
                                {notification.category}
                              </Badge>
                              <Badge variant="outline" className="text-xs capitalize">
                                {notification.type}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              {notification.type === "deadline" && (
                                <Button size="sm" variant="default" className="bg-red-600 hover:bg-red-700">
                                  Take Action
                                </Button>
                              )}
                              
                              {notification.type === "scheme" && (
                                <Button size="sm" variant="secondary">
                                  View Details
                                </Button>
                              )}
                              
                              {notification.type === "security" && (
                                <Button size="sm" variant="outline">
                                  Review Security
                                </Button>
                              )}
                              
                              {!notification.read && (
                                <Button size="sm" variant="ghost" onClick={() => markAsRead(notification.id)}>
                                  <CheckCircle className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {/* Load More Button */}
                {filteredNotifications.length > 0 && (
                  <div className="text-center pt-6">
                    <Button variant="outline" className="px-8">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Load More Notifications
                    </Button>
                  </div>
                )}
              </div>
            )}
          </TabsContent>

          <TabsContent value="state" className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <Card className="text-center p-12 bg-gradient-card border-0">
                <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No state notifications found</h3>
                <p className="text-muted-foreground">
                  {searchQuery ? "Try adjusting your search terms" : "You're all caught up with state notifications!"}
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
                              <Badge variant={notification.priority === 'high' ? 'destructive' : notification.priority === 'medium' ? 'default' : 'secondary'} className="text-xs">
                                {notification.priority}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground whitespace-nowrap">
                                {getTimeAgo(notification.time)}
                              </span>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                                    {notification.read ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                                    {notification.read ? 'Mark as unread' : 'Mark as read'}
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => markAsImportant(notification.id)}>
                                    <Star className={`h-4 w-4 mr-2 ${notification.important ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                                    {notification.important ? 'Remove from important' : 'Mark important'}
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Archive className="h-4 w-4 mr-2" />
                                    Archive
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-destructive" onClick={() => deleteNotification(notification.id)}>
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {notification.description}
                          </p>
                          
                          <div className="flex items-center justify-between flex-wrap gap-3">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs capitalize">
                                {notification.category}
                              </Badge>
                              <Badge variant="outline" className="text-xs capitalize">
                                {notification.type}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              {notification.type === "deadline" && (
                                <Button size="sm" variant="default" className="bg-red-600 hover:bg-red-700">
                                  Take Action
                                </Button>
                              )}
                              
                              {notification.type === "scheme" && (
                                <Button size="sm" variant="secondary">
                                  View Details
                                </Button>
                              )}
                              
                              {notification.type === "security" && (
                                <Button size="sm" variant="outline">
                                  Review Security
                                </Button>
                              )}
                              
                              {!notification.read && (
                                <Button size="sm" variant="ghost" onClick={() => markAsRead(notification.id)}>
                                  <CheckCircle className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="central" className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <Card className="text-center p-12 bg-gradient-card border-0">
                <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No central notifications found</h3>
                <p className="text-muted-foreground">
                  {searchQuery ? "Try adjusting your search terms" : "You're all caught up with central notifications!"}
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
                              <Badge variant={notification.priority === 'high' ? 'destructive' : notification.priority === 'medium' ? 'default' : 'secondary'} className="text-xs">
                                {notification.priority}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground whitespace-nowrap">
                                {getTimeAgo(notification.time)}
                              </span>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                                    {notification.read ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                                    {notification.read ? 'Mark as unread' : 'Mark as read'}
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => markAsImportant(notification.id)}>
                                    <Star className={`h-4 w-4 mr-2 ${notification.important ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                                    {notification.important ? 'Remove from important' : 'Mark important'}
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Archive className="h-4 w-4 mr-2" />
                                    Archive
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-destructive" onClick={() => deleteNotification(notification.id)}>
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {notification.description}
                          </p>
                          
                          <div className="flex items-center justify-between flex-wrap gap-3">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs capitalize">
                                {notification.category}
                              </Badge>
                              <Badge variant="outline" className="text-xs capitalize">
                                {notification.type}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              {notification.type === "deadline" && (
                                <Button size="sm" variant="default" className="bg-red-600 hover:bg-red-700">
                                  Take Action
                                </Button>
                              )}
                              
                              {notification.type === "scheme" && (
                                <Button size="sm" variant="secondary">
                                  View Details
                                </Button>
                              )}
                              
                              {notification.type === "security" && (
                                <Button size="sm" variant="outline">
                                  Review Security
                                </Button>
                              )}
                              
                              {!notification.read && (
                                <Button size="sm" variant="ghost" onClick={() => markAsRead(notification.id)}>
                                  <CheckCircle className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

export default Notifications;
