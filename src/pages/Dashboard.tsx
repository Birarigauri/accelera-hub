import { useState } from "react";
import { 
  BarChart3, 
  Users, 
  FileText, 
  TrendingUp, 
  Bell, 
  Calendar,
  CheckCircle,
  AlertTriangle,
  Plus,
  ArrowUpRight,
  Activity,
  Briefcase,
  Target
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";

const Dashboard = () => {
  const [userType] = useState<"new" | "existing">("existing"); // This would come from auth context

  const stats = [
    {
      title: "Active Services",
      value: "12",
      change: "+2 this month",
      icon: Briefcase,
      color: "text-primary",
      bgColor: "bg-primary-light",
    },
    {
      title: "Compliance Score",
      value: "94%",
      change: "+5% improvement",
      icon: CheckCircle,
      color: "text-secondary",
      bgColor: "bg-secondary-light",
    },
    {
      title: "Pending Actions",
      value: "3",
      change: "2 due this week",
      icon: AlertTriangle,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Total Savings",
      value: "₹2.4L",
      change: "+₹45K this quarter",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ];

  const recentActivities = [
    {
      title: "GST Return Filed Successfully",
      description: "March 2024 return submitted",
      time: "2 hours ago",
      status: "completed",
      icon: CheckCircle,
    },
    {
      title: "License Renewal Due",
      description: "Trade License expires in 15 days",
      time: "1 day ago",
      status: "pending",
      icon: Calendar,
    },
    {
      title: "New Scheme Match Found",
      description: "MSME Subsidy - 80% eligibility",
      time: "3 days ago",
      status: "new",
      icon: Target,
    },
    {
      title: "Expert Consultation Completed",
      description: "Tax advisory session with CA Sharma",
      time: "5 days ago",
      status: "completed",
      icon: Users,
    },
  ];

  const upcomingDeadlines = [
    {
      title: "PF Return Filing",
      date: "March 25, 2024",
      daysLeft: 5,
      priority: "high",
    },
    {
      title: "Annual ROC Filing",
      date: "March 30, 2024",  
      daysLeft: 10,
      priority: "medium",
    },
    {
      title: "Professional Tax",
      date: "April 5, 2024",
      daysLeft: 16,
      priority: "low",
    },
  ];

  const quickActions = [
    { title: "File GST Return", icon: FileText, color: "bg-blue-500" },
    { title: "Find Expert", icon: Users, color: "bg-green-500" },
    { title: "Check Schemes", icon: Target, color: "bg-purple-500" },
    { title: "Renew License", icon: CheckCircle, color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Rajesh! 👋</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your business today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-lg transition-all duration-300 bg-gradient-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold mb-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.change}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card className="bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
                <CardDescription>
                  Common tasks you can complete right now
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickActions.map((action) => (
                    <Button
                      key={action.title}
                      variant="outline"
                      className="h-20 flex flex-col items-center gap-2 hover:shadow-md transition-all duration-300 hover:scale-105"
                    >
                      <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center`}>
                        <action.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-xs font-medium">{action.title}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Recent Activities
                </CardTitle>
                <CardDescription>
                  Latest updates and actions on your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activity.status === 'completed' ? 'bg-green-100 text-green-600' :
                        activity.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        <activity.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium mb-1">{activity.title}</p>
                        <p className="text-sm text-muted-foreground mb-1">{activity.description}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                      <Badge variant={
                        activity.status === 'completed' ? 'default' :
                        activity.status === 'pending' ? 'destructive' : 'secondary'
                      }>
                        {activity.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Deadlines */}
            <Card className="bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="p-3 rounded-lg bg-white/50">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-sm">{deadline.title}</p>
                        <Badge variant={
                          deadline.priority === 'high' ? 'destructive' :
                          deadline.priority === 'medium' ? 'default' : 'secondary'
                        } className="text-xs">
                          {deadline.daysLeft} days
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{deadline.date}</p>
                      <Progress 
                        value={Math.max(0, 100 - (deadline.daysLeft * 3))} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  View All Deadlines
                </Button>
              </CardContent>
            </Card>

            {/* Performance Card */}
            <Card className="bg-gradient-primary text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Performance Score</p>
                    <p className="text-2xl font-bold">8.7/10</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  Great job! You're ahead of 85% of businesses in compliance.
                </p>
                <Button variant="glass" size="sm" className="w-full">
                  View Detailed Report
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Add Business Card */}
            <Card className="bg-gradient-card border-0 border-dashed border-2 border-muted hover:bg-muted/20 transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Plus className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="font-medium mb-2">Add Another Business</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Manage multiple businesses from one dashboard
                </p>
                <Button variant="outline" size="sm">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;