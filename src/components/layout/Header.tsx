import { useState } from "react";
import { Link } from "react-router-dom";
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
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <Link to="/notifications">
            <div className="relative group">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative w-12 h-12 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-110 hover:shadow-lg group-hover:shadow-blue-200/50"
              >
                <Bell className="h-5 w-5 text-blue-600 group-hover:animate-bounce" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
              </Button>
            </div>
          </Link>
          
          {/* Profile */}
          <Link to="/profile">
            <div className="relative group">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative w-12 h-12 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border border-green-100 hover:border-green-200 transition-all duration-300 hover:scale-110 hover:shadow-lg group-hover:shadow-green-200/50"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <User className="h-4 w-4 text-white" />
                </div>
              </Button>
              {/* Online status indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;