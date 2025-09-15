import { useState, useEffect, useRef } from "react";
import { ArrowRight, Shield, Users, TrendingUp, CheckCircle, Star, Building, Lightbulb, ExternalLink, ChevronLeft, ChevronRight, Zap, Rocket, Target, ArrowUp, Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-business.jpg";

const Landing = () => {
  const [activeTab, setActiveTab] = useState("new");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const heroRef = useRef<HTMLElement>(null);


  const sliderImages = [
    {
      id: 1,
      title: "Digital India Initiative",
      subtitle: "Empowering Entrepreneurs Nationwide",
      description: "Join millions of Indian entrepreneurs in the digital revolution",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop&q=80",
      type: "government"
    },
    {
      id: 2,
      title: "Startup India Success",
      subtitle: "From Idea to IPO",
      description: "Discover how Indian startups are changing the world",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop&q=80",
      type: "startup"
    },
    {
      id: 3,
      title: "MSME Growth Schemes",
      subtitle: "₹50,000 Crore Fund Allocation",
      description: "Access government funding for your business expansion",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop&q=80",
      type: "scheme"
    },
    {
      id: 4,
      title: "Women Entrepreneurs",
      subtitle: "Leading India's Economic Growth",
      description: "Special schemes and support for women-led businesses",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&h=600&fit=crop&q=80",
      type: "women"
    },
    {
      id: 5,
      title: "Make in India",
      subtitle: "Manufacturing Excellence",
      description: "Transform your manufacturing business with government support",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&h=600&fit=crop&q=80",
      type: "manufacturing"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

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
      company: "TechVision Solutions",
      content: "ANE Portal streamlined my business registration process. Got my startup registered in just 3 days! The expert guidance was invaluable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      location: "Bangalore"
    },
    {
      name: "Rajesh Kumar",
      role: "Manufacturing Business Owner",
      company: "Kumar Industries",
      content: "The compliance tracker saved me thousands in penalties. Never missed a license renewal since! Highly recommend to all entrepreneurs.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      location: "Mumbai"
    },
    {
      name: "Meera Patel",
      role: "Service Provider",
      company: "Digital Marketing Pro",
      content: "Found the perfect mentor through Expert Connect. My revenue grew 300% in 6 months. The platform is a game-changer!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      location: "Delhi"
    },
    {
      name: "Arjun Singh",
      role: "E-commerce Entrepreneur",
      company: "Singh Retail Hub",
      content: "The scheme eligibility feature helped me secure ₹15 lakhs in government funding. Couldn't have done it without ANE Portal.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      location: "Pune"
    },
    {
      name: "Kavya Reddy",
      role: "Food & Beverage Startup",
      company: "Healthy Bites Co.",
      content: "From FSSAI license to GST registration, everything was seamless. The expert support team is outstanding!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      location: "Chennai"
    }
  ];



  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      {/* Hero Slider Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {sliderImages.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="container mx-auto px-4 lg:px-6">
                  <div className="max-w-2xl text-white">
                    <Badge className={`mb-4 ${
                      slide.type === 'government' ? 'bg-blue-600/80 text-white border-blue-400' :
                      slide.type === 'startup' ? 'bg-green-600/80 text-white border-green-400' :
                      slide.type === 'scheme' ? 'bg-purple-600/80 text-white border-purple-400' :
                      slide.type === 'women' ? 'bg-pink-600/80 text-white border-pink-400' :
                      'bg-orange-600/80 text-white border-orange-400'
                    }`}>
                      <Lightbulb className="h-3 w-3 mr-1" />
                      {slide.type === 'government' ? 'Government Initiative' :
                       slide.type === 'startup' ? 'Startup Success' :
                       slide.type === 'scheme' ? 'Funding Scheme' :
                       slide.type === 'women' ? 'Women Empowerment' :
                       'Manufacturing'}
                    </Badge>
                    
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-yellow-300">
                      {slide.subtitle}
                    </h2>
                    
                    <p className="text-lg lg:text-xl mb-8 text-white/90 leading-relaxed">
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/dashboard">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button size="xl" variant="glass" className="group">
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="mr-2"
                            >
                              <Rocket className="h-5 w-5" />
                            </motion.div>
                            Get Started Now
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </motion.div>
                      </Link>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="mr-2"
                          >
                            <Target className="h-5 w-5" />
                          </motion.div>
                          Learn More
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 opacity-60 hover:opacity-100"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 opacity-60 hover:opacity-100"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-20 left-0 right-0 z-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <motion.div 
                    className="text-2xl lg:text-3xl font-bold mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white/80 text-xs lg:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Navigation Section */}
      <section className="min-h-screen flex items-center py-16 bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-blue-100">
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
      <section id="features" className="relative min-h-screen flex items-center py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/30"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 px-6 py-3 text-sm font-bold">
              🚀 Key Features
            </Badge>
            <h2 className="text-4xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent leading-tight">
              Everything You Need
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">to Succeed</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive tools and services designed specifically for Indian entrepreneurs
            </p>
            <div className="flex items-center justify-center gap-6 mt-10 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>All-in-One Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Government Approved</span>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.4 }
                }}
                className="group perspective-1000"
              >
                <Card className="relative overflow-hidden bg-white/90 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full transform-gpu">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                  
                  <CardContent className="relative p-8">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Button size="xl" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl">
              Explore All Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="min-h-screen flex items-center py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 text-sm font-semibold">
              ⭐ Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              Trusted by Entrepreneurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful entrepreneurs who transformed their businesses with ANE Portal
            </p>
            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>50,000+ Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>98% Success Rate</span>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="relative p-8">
                    <div className="text-center mb-8">
                      <div className="relative inline-block">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 mb-8 italic leading-relaxed text-center text-lg relative">
                      <span className="text-4xl text-blue-200 absolute -top-2 -left-2">“</span>
                      {testimonial.content}
                      <span className="text-4xl text-blue-200 absolute -bottom-4 -right-2">”</span>
                    </blockquote>
                    
                    <div className="text-center border-t border-gray-100 pt-6">
                      <div className="font-bold text-xl text-gray-900 mb-2">{testimonial.name}</div>
                      <div className="text-blue-600 font-semibold mb-2">{testimonial.role}</div>
                      <div className="text-sm text-gray-600 mb-3 font-medium">{testimonial.company}</div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        {testimonial.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center py-20 lg:py-32 bg-gradient-hero text-white">
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

      {/* Contact Us Section */}
      <section className="min-h-screen flex items-center py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-2">
              📞 Get in Touch
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Ready to transform your business? Get in touch with our experts today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-white/80">support@aneportal.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-white/80">+91 1800-123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-white/80">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-blue-400 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-blue-400 focus:outline-none"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-blue-400 focus:outline-none resize-none"
                ></textarea>
                <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
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

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </div>
  );
};

export default Landing;