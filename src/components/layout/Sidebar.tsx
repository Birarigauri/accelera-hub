import { useState } from "react";
import { 
  Home, 
  Bell, 
  FileText, 
  Target, 
  Newspaper, 
  Grid3X3, 
  User, 
  HelpCircle,
  LogOut,
  ChevronDown,
  Settings,
  Briefcase,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(["main"]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const mainNavItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard", active: true },
    { icon: Bell, label: "Notifications", href: "/notifications", badge: "3" },
    { icon: FileText, label: "Services & Licenses", href: "/services" },
    { icon: Target, label: "Scheme Eligibility", href: "/schemes" },
    { icon: Newspaper, label: "News", href: "/news" },
    { icon: Grid3X3, label: "Other Offerings", href: "/offerings" },
    { icon: User, label: "My Profile", href: "/profile" },
  ];

  const bottomNavItems = [
    { icon: Briefcase, label: "My Offerings", href: "/my-offerings" },
    { icon: HelpCircle, label: "FAQs", href: "/faqs" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-border z-50 transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Main Navigation */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-gradient-card rounded-lg">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">Tech Solutions Pvt Ltd</p>
                  <p className="text-xs text-muted-foreground">Active Business</p>
                </div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Main Section */}
            <div className="px-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Main Menu
                </h3>
              </div>
              
              <nav className="space-y-1">
                {mainNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      item.active 
                        ? "bg-primary text-primary-foreground shadow-sm" 
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="h-5 text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Stats */}
            <div className="px-4 mb-6">
              <div className="bg-gradient-primary text-white p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                    <Target className="h-3 w-3" />
                  </div>
                  <span className="text-sm font-medium">Compliance Score</span>
                </div>
                <div className="text-2xl font-bold mb-1">94%</div>
                <div className="text-xs text-white/80">+5% this month</div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="border-t border-border p-4">
            <nav className="space-y-1 mb-4">
              {bottomNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            {/* User Profile */}
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">RK</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">Rajesh Kumar</p>
                <p className="text-xs text-muted-foreground">Premium Member</p>
              </div>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive">
                <LogOut className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;