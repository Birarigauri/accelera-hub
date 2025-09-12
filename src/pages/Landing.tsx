import { useState, useEffect } from "react";
import { ArrowRight, Shield, Users, TrendingUp, CheckCircle, Star, Building, Lightbulb, ExternalLink, ChevronLeft, ChevronRight, Zap, Rocket, Target } from "lucide-react";
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


  const sliderImages = [
    {
      id: 1,
      title: "Digital India Initiative",
      subtitle: "Empowering Entrepreneurs Nationwide",
      description: "Join millions of Indian entrepreneurs in the digital revolution",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop",
      type: "government"
    },
    {
      id: 2,
      title: "Startup India Success",
      subtitle: "From Idea to IPO",
      description: "Discover how Indian startups are changing the world",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop",
      type: "startup"
    },
    {
      id: 3,
      title: "MSME Growth Schemes",
      subtitle: "₹50,000 Crore Fund Allocation",
      description: "Access government funding for your business expansion",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
      type: "scheme"
    },
    {
      id: 4,
      title: "Women Entrepreneurs",
      subtitle: "Leading India's Economic Growth",
      description: "Special schemes and support for women-led businesses",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=600&fit=crop",
      type: "women"
    },
    {
      id: 5,
      title: "Make in India",
      subtitle: "Manufacturing Excellence",
      description: "Transform your manufacturing business with government support",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop",
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
  }, []);

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
      <section className="relative h-screen overflow-hidden">
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
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="h-6 w-6" />
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
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-card border-0 h-full">
                  <CardContent className="p-6">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary-light text-secondary">Success Stories</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Trusted by Entrepreneurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from successful entrepreneurs who transformed their businesses with ANE Portal
            </p>
          </div>

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
                <Card className="hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 h-full">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                      />
                      <div className="flex justify-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 mb-6 italic leading-relaxed text-center">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="text-center">
                      <div className="font-bold text-lg text-gray-900 mb-1">{testimonial.name}</div>
                      <div className="text-primary font-semibold mb-1">{testimonial.role}</div>
                      <div className="text-sm text-gray-600 mb-2">{testimonial.company}</div>
                      <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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