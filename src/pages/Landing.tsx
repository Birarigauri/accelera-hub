import { useState } from "react";
import { ArrowRight, Shield, Users, TrendingUp, CheckCircle, Star, Building, Lightbulb, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-business.jpg";

const Landing = () => {
  const [activeTab, setActiveTab] = useState("new");

  const features = [
    {
      icon: Shield,
      title: "Compliance Tracking",
      description: "Never miss a deadline with automated license renewals and compliance alerts",
    },
    {
      icon: Users,
      title: "Expert Connect",
      description: "Get matched with verified consultants and mentors for your business needs",
    },
    {
      icon: TrendingUp,
      title: "Scheme Eligibility",
      description: "Discover government schemes and funding opportunities tailored for you",
    },
    {
      icon: Building,
      title: "Business Services",
      description: "Access comprehensive services from registration to growth support",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Tech Startup Founder",
      content: "ANE Portal streamlined my business registration process. Got my startup registered in just 3 days!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Manufacturing Business",
      content: "The compliance tracker saved me thousands in penalties. Never missed a license renewal since!",
      rating: 5,
    },
    {
      name: "Meera Patel",
      role: "Service Provider",
      content: "Found the perfect mentor through Expert Connect. My revenue grew 300% in 6 months.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "50,000+", label: "Registered Entrepreneurs" },
    { number: "₹500Cr+", label: "Funding Facilitated" },
    { number: "1,200+", label: "Expert Consultants" },
    { number: "98%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ANE</span>
            </div>
            <span className="text-lg font-semibold">Entrepreneur Portal</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost">Login</Button>
            <Button variant="hero">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}></div>
        <div className="relative container mx-auto px-4 lg:px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Lightbulb className="h-3 w-3 mr-1" />
              ANE 2.0 - Now Live
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Gateway to
              <span className="block bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                Entrepreneurial Success
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Streamline your business journey with India's most comprehensive entrepreneur portal. 
              From registration to growth, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="xl" variant="glass" className="group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm lg:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Navigation Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-blue-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">Demo Navigation</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Explore All Pages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick access to all available pages for demonstration and testing purposes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <Link to="/dashboard" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-blue-200 hover:border-blue-300">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Dashboard</h3>
                  <ExternalLink className="h-3 w-3 text-gray-400 mx-auto" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/services" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-blue-200 hover:border-blue-300">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                    <Building className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Services</h3>
                  <ExternalLink className="h-3 w-3 text-gray-400 mx-auto" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/schemes" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-blue-200 hover:border-blue-300">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-colors">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Schemes</h3>
                  <ExternalLink className="h-3 w-3 text-gray-400 mx-auto" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/offerings" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-blue-200 hover:border-blue-300">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 transition-colors">
                    <Star className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Offerings</h3>
                  <ExternalLink className="h-3 w-3 text-gray-400 mx-auto" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/news" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-blue-200 hover:border-blue-300">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-red-200 transition-colors">
                    <Lightbulb className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">News</h3>
                  <ExternalLink className="h-3 w-3 text-gray-400 mx-auto" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/notifications" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-blue-200 hover:border-blue-300">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-200 transition-colors">
                    <CheckCircle className="h-5 w-5 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Notifications</h3>
                  <ExternalLink className="h-3 w-3 text-gray-400 mx-auto" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/profile" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-blue-200 hover:border-blue-300">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-200 transition-colors">
                    <Users className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Profile</h3>
                  <ExternalLink className="h-3 w-3 text-gray-400 mx-auto" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/login" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-blue-200 hover:border-blue-300">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-200 transition-colors">
                    <ArrowRight className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Login</h3>
                  <ExternalLink className="h-3 w-3 text-gray-400 mx-auto" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary-light text-primary">Key Features</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools and services designed specifically for Indian entrepreneurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary-light text-secondary">Success Stories</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Trusted by Entrepreneurs</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="hover:shadow-lg transition-all duration-300 bg-gradient-card border-0">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs who trust ANE Portal for their business needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="glass">
              Start Free Trial
              <CheckCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ANE</span>
                </div>
                <span className="text-lg font-semibold">Entrepreneur Portal</span>
              </div>
              <p className="text-white/80 text-sm">Empowering entrepreneurs across India with digital solutions for business success.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Business Registration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance Tracking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Expert Connect</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Funding Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 ANE Entrepreneur Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;