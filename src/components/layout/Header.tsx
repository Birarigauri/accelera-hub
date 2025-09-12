import { useState } from "react";
import { Menu, X, Bell, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  onMenuToggle?: () => void;
  showMenu?: boolean;
}

const Header = ({ onMenuToggle, showMenu = false }: HeaderProps) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-4 lg:px-6 h-16">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {onMenuToggle && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuToggle}
              className="lg:hidden"
            >
              {showMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ANE</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-foreground">Entrepreneur Portal</h1>
              <p className="text-xs text-muted-foreground">ANE 2.0</p>
            </div>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className={`relative w-full transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search services, schemes..."
              className="w-full pl-10 pr-4 py-2 bg-muted rounded-lg border border-transparent focus:border-primary focus:bg-white focus:shadow-md transition-all duration-300 text-sm"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-destructive">
              3
            </Badge>
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;