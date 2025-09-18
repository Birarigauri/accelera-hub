import { useState } from "react";
import { Eye, EyeOff, Shield, Mail, Lock, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    captcha: "",
    rememberMe: false,
  });
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());

  function generateCaptcha() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
    handleInputChange('captcha', '');
  };
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col lg:flex-row">
      {/* Left Side - Branding */}
      <div className="hidden md:flex md:w-full lg:w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden md:min-h-[150px] lg:min-h-screen">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-12 text-white py-8 lg:py-0">
          <div className="mb-4 lg:mb-8">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-6">
              <span className="text-lg lg:text-2xl font-bold">ANE</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 lg:mb-4">Welcome Back</h1>
            <p className="text-sm md:text-base lg:text-xl text-white/90 mb-4 lg:mb-8">Sign in to access your entrepreneur dashboard and continue your business journey.</p>
          </div>
          <div className="hidden lg:block space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Secure Access</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Real-time Dashboard</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Expert Support</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mb-32"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full"></div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md sm:max-w-lg">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center relative">
              <button
                onClick={() => navigate("/")}
                className="absolute left-4 top-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
              >
                <Home className="h-4 w-4" />
              </button>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Shield className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold mb-1">Welcome Back</h2>
              <p className="text-blue-100 text-sm">Sign in to your account</p>
            </div>

            <div className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-xs font-semibold text-gray-700">
                    Email Address *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10 h-10 border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 rounded-md transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="password" className="text-xs font-semibold text-gray-700">
                    Password *
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="pl-10 pr-10 h-10 border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 rounded-md transition-all"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1 h-8 px-2 hover:bg-gray-100 rounded"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-3 w-3 text-gray-400" />
                      ) : (
                        <Eye className="h-3 w-3 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* CAPTCHA */}
                <div className="space-y-1">
                  <Label className="text-xs font-semibold text-gray-700">Security Verification *</Label>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-gray-100 border border-gray-300 rounded-md p-2 text-center">
                      <div className="font-mono text-lg font-bold tracking-wider text-gray-700 select-none">
                        {captchaCode}
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={refreshCaptcha}
                      className="px-3 h-10 border-gray-200"
                    >
                      <RefreshCw className="h-3 w-3" />
                    </Button>
                  </div>
                  <Input
                    type="text"
                    placeholder="Enter code"
                    value={formData.captcha}
                    onChange={(e) => handleInputChange("captcha", e.target.value.toUpperCase())}
                    className="h-10 border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 rounded-md transition-all text-center font-mono"
                    maxLength={6}
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-gray-700">
                      Remember me
                    </Label>
                  </div>
                  
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-xs text-blue-600"
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forgot password?
                  </Button>
                </div>

                <Button
                  type="submit"
                  className="w-full h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-md shadow-md transition-all"
                  disabled={isLoading || formData.captcha !== captchaCode}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Signing in...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </Button>

                <div className="text-center text-xs text-gray-600">
                  Don't have an account?{" "}
                  <Button
                    variant="link"
                    className="p-0 h-auto text-xs text-blue-600 hover:text-blue-800"
                    onClick={() => navigate("/register")}
                  >
                    Create account
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;