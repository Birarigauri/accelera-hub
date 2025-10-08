import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Building, 
  Shield, 
  Star, 
  Newspaper, 
  Bell, 
  User, 
  LogIn,
  Home,
  FileText,
  ChevronLeft,
  ChevronRight,
  Calculator,
  UserCircle,
  Award,
  ClipboardList,
  CheckCircle,
  Users,
  Briefcase,
  Download
} from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    // { name: "Home", href: "/", icon: Home },
    // { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    // { name: "Dashboard V2", href: "/dashboard-v2", icon: LayoutDashboard },
    // { name: "Dashboard V3", href: "/dashboard-v3", icon: LayoutDashboard },
    { name: "Dashboard", href: "/dashboard-v5", icon: LayoutDashboard },
    { name: "Services", href: "/services", icon: Building },
    { name: "Schemes", href: "/schemes", icon: Shield },
    { name: "Application Desk", href: "/manual-applications", icon: Briefcase },
    { name: "My Applications", href: "/scheme-applications", icon: FileText },
    { name: "My Downloads", href: "/my-downloads", icon: Download },
    { name: "Notifications", href: "/notifications-v2", icon: Bell },
    { name: "Offerings", href: "/offerings", icon: Star },
    // { name: "News", href: "/news", icon: Newspaper },
    // { name: "My Certificates & Licenses", href: "/my-certificates-licenses", icon: Award },
    // { name: "Apply for Certificates", href: "/apply-certificates", icon: ClipboardList },
    // { name: "Compliance Process", href: "/compliance-flow", icon: CheckCircle },
    // { name: "Experts", href: "/experts", icon: Users },
    // { name: "Eligibility Calculator", href: "/eligibility-calculator", icon: Calculator },
    // { name: "Profile", href: "/profile", icon: User },
    // { name: "Application", href: "/detail-application", icon: FileText },
    // { name: "Dynamic Form", href: "/detail-application-2", icon: Building },
    // { name: "Login", href: "/login", icon: LogIn },
  ];

  return (
    <div className={cn(
      "bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto hidden md:block transition-all duration-300 shadow-lg custom-scrollbar",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className={cn("p-4", isCollapsed ? "p-2" : "p-6")}>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className={cn("flex items-center gap-2", isCollapsed && "justify-center")}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">ANE</span>
            </div>
            {!isCollapsed && <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portal</span>}
          </div>
          
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group relative",
                  isActive
                    ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm border border-blue-100"
                    : "text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-900 hover:shadow-sm",
                  isCollapsed && "justify-center px-2"
                )}
                title={isCollapsed ? item.name : undefined}
              >
                <item.icon className={cn(
                  "h-5 w-5 transition-transform group-hover:scale-110",
                  isActive ? "text-blue-600" : "text-gray-500"
                )} />
                {!isCollapsed && (
                  <span className="truncate">{item.name}</span>
                )}
                {isActive && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-l-full"></div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-xs text-gray-500 text-center">
              <p className="font-medium mb-1">ANE Portal v2.0</p>
              <p>Entrepreneur Gateway</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;