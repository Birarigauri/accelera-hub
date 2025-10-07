import { useState } from "react";
import { Eye, EyeOff, ArrowLeft, UserPlus, Mail, Lock, User, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    captcha: "",
    agreeToTerms: false,
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
    if (formData.password !== formData.confirmPassword) {
      return; // Add proper validation
    }
    
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

  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(formData.password);
  const strengthLabels = ["Weak", "Fair", "Good", "Strong"];
  const strengthColors = ["bg-red-500", "bg-yellow-500", "bg-blue-500", "bg-green-500"];

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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 lg:mb-4">Welcome to ANE Portal</h1>
            <p className="text-sm md:text-base lg:text-xl text-white/90 mb-4 lg:mb-8">Empowering entrepreneurs across India with digital solutions for business success.</p>
          </div>
          <div className="hidden lg:block space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>50,000+ Registered Entrepreneurs</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>₹500Cr+ Funding Facilitated</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>1,200+ Expert Consultants</span>
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
            <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center relative">
              <button
                onClick={() => navigate("/")}
                className="absolute left-3 top-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded flex items-center justify-center transition-colors"
              >
                <Home className="h-3 w-3" />
              </button>
              <h2 className="text-base font-semibold">Create Account</h2>
            </div>

            <div className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="firstName" className="text-xs font-semibold text-gray-700">
                      First Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="pl-10 h-10 border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 rounded-md transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="lastName" className="text-xs font-semibold text-gray-700">
                      Last Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="pl-10 h-10 border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 rounded-md transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>
                
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
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

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

                  <div className="space-y-1">
                    <Label htmlFor="confirmPassword" className="text-xs font-semibold text-gray-700">
                      Confirm Password *
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className={`pl-10 pr-10 h-10 border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 rounded-md transition-all ${
                          formData.confirmPassword && formData.password !== formData.confirmPassword ? 'border-red-300' : ''
                        }`}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1 h-8 px-2 hover:bg-gray-100 rounded"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-3 w-3 text-gray-400" />
                        ) : (
                          <Eye className="h-3 w-3 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-gray-700">
                    I agree to{" "}
                    <a href="#" className="text-blue-600 underline">Terms</a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 underline">Privacy Policy</a>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-md shadow-md transition-all"
                  disabled={isLoading || !formData.agreeToTerms || formData.password !== formData.confirmPassword || formData.captcha !== captchaCode}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Creating Account...
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </Button>

                <div className="text-center text-xs text-gray-600">
                  Already have an account?{" "}
                  <Button
                    variant="link"
                    className="p-0 h-auto text-xs text-blue-600 hover:text-blue-800"
                    onClick={() => navigate("/login")}
                  >
                    Sign in
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

export default Register;