import { useState, useEffect } from "react";
import { ArrowRight, Shield, Users, TrendingUp, CheckCircle, Star, Building, Lightbulb, ExternalLink, ChevronLeft, ChevronRight, Zap, Rocket, Target, ArrowUp, Mail, Phone, MapPin, Send, FileText, CreditCard, UserCheck, Briefcase, Calculator, Award, BookOpen, HeadphonesIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const sliderImages = [
    {
      id: 1,
      title: "Digital India Initiative",
      subtitle: "Empowering Entrepreneurs Nationwide",
      description: "Join millions of Indian entrepreneurs in the digital revolution with cutting-edge technology solutions.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&h=1080&fit=crop&q=90",
      type: "government"
    },
    {
      id: 2,
      title: "Startup India Success",
      subtitle: "From Idea to IPO Journey",
      description: "Transform your innovative ideas into successful businesses with comprehensive startup support.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&q=90",
      type: "startup"
    },
    {
      id: 3,
      title: "MSME Growth Schemes",
      subtitle: "₹50,000 Crore Fund Allocation",
      description: "Access government funding and schemes designed specifically for micro, small & medium enterprises.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop&q=90",
      type: "scheme"
    },
    {
      id: 4,
      title: "Women Entrepreneurs",
      subtitle: "Leading India's Economic Growth",
      description: "Empowering women entrepreneurs with dedicated schemes, mentorship, and financial support.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&h=1080&fit=crop&q=90",
      type: "women"
    },
    {
      id: 5,
      title: "Make in India",
      subtitle: "Manufacturing Excellence",
      description: "Transform your manufacturing business with government support and world-class infrastructure.",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&h=1080&fit=crop&q=90",
      type: "manufacturing"
    },
    {
      id: 6,
      title: "Rural Entrepreneurship",
      subtitle: "Connecting Villages to Markets",
      description: "Bridge the rural-urban gap with innovative solutions for rural entrepreneurs and farmers.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1920&h=1080&fit=crop&q=90",
      type: "rural"
    }
  ];

const badgeStyles: { [key: string]: string } = {
    government: 'bg-blue-600/90 text-white border-blue-400/50 backdrop-blur-sm',
    startup: 'bg-green-600/90 text-white border-green-400/50 backdrop-blur-sm',
    scheme: 'bg-purple-600/90 text-white border-purple-400/50 backdrop-blur-sm',
    women: 'bg-pink-600/90 text-white border-pink-400/50 backdrop-blur-sm',
    manufacturing: 'bg-orange-600/90 text-white border-orange-400/50 backdrop-blur-sm',
    rural: 'bg-emerald-600/90 text-white border-emerald-400/50 backdrop-blur-sm',
};

const badgeLabels: { [key: string]: string } = {
    government: 'Government Initiative',
    startup: 'Startup Success',
    scheme: 'Funding Scheme',
    women: 'Women Empowerment',
    manufacturing: 'Manufacturing',
    rural: 'Rural Development',
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
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      location: "Bangalore"
    },
    {
      name: "Rajesh Kumar",
      role: "Manufacturing Business Owner",
      company: "Kumar Industries",
      content: "The compliance tracker saved me thousands in penalties. Never missed a license renewal since! Highly recommend to all entrepreneurs.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
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
    }
  ];

  const stats = [
    { number: "50,000+", label: "Registered Entrepreneurs" },
    { number: "₹500Cr+", label: "Funding Facilitated" },
    { number: "1,200+", label: "Expert Consultants" },
    { number: "98%", label: "Success Rate" },
  ];

const Header = () => (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 lg:px-6 h-18 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">ANE</span>
                </div>
                <div>
                    <span className="text-xl font-bold text-gray-900">Entrepreneur Portal</span>
                    <div className="text-xs text-blue-600 font-medium">Empowering Business Growth</div>
                </div>
            </div>
          
            <nav className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium relative group">
                    Features
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
            
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium relative group">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
            </nav>

            <div className="flex items-center gap-3">
                <Link to="/login">
                    <Button variant="ghost" className="hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        Login
                    </Button>
                </Link>
                <Link to="/register">
                    <Button variant="hero" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all">
                        Get Started
                    </Button>
                </Link>
            </div>
        </div>
    </header>
);

const HeroSlider = ({ currentSlide, setCurrentSlide, nextSlide, prevSlide }: any) => {
    const slide = sliderImages[currentSlide];
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleSlideChange = (newSlide: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(newSlide);
        setTimeout(() => setIsTransitioning(false), 800);
    };

    return (
        <section className="relative h-screen overflow-hidden bg-black">
            {/* Futuristic Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Sliding Images Container */}
            <div className="absolute inset-0 flex transition-transform duration-700 ease-out" 
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {sliderImages.map((slideItem, index) => (
                    <div key={slideItem.id} className="min-w-full h-full relative">
                        <div 
                            className="w-full h-full bg-cover bg-center transition-all duration-1000"
                            style={{ 
                                backgroundImage: `url(${slideItem.image})`,
                                filter: 'brightness(0.7) contrast(1.2) saturate(1.1)'
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                        
                        {/* Futuristic Overlay Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-60"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-60"></div>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-20 flex items-center h-full">
                <div className="container mx-auto px-4 lg:px-6">
                    <motion.div
                        key={currentSlide}
                        className="max-w-4xl text-white"
                        initial={{ opacity: 0, x: -100, rotateY: -15 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Badge className={`mb-6 px-6 py-3 text-sm font-bold border-2 ${badgeStyles[slide.type]} shadow-lg shadow-cyan-500/20`}>
                                <Zap className="h-4 w-4 mr-2 animate-pulse" />
                                {badgeLabels[slide.type]}
                            </Badge>
                        </motion.div>
                        
                        <motion.h1 
                            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight"
                            style={{
                                background: 'linear-gradient(135deg, #ffffff 0%, #00ffff 50%, #ff00ff 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0 0 30px rgba(0,255,255,0.5)'
                            }}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            {slide.title}
                        </motion.h1>
                        
                        <motion.h2 
                            className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400"
                            style={{ textShadow: '0 0 20px rgba(255,255,0,0.3)' }}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            {slide.subtitle}
                        </motion.h2>
                        
                        <motion.p 
                            className="text-xl lg:text-2xl mb-12 text-gray-100 leading-relaxed max-w-3xl font-light"
                            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            {slide.description}
                        </motion.p>

                        <motion.div 
                            className="flex flex-col sm:flex-row gap-6"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            <Link to={`/dashboard-v5`}>
                                <motion.div 
                                    whileHover={{ scale: 1.05, rotateX: 5 }} 
                                    whileTap={{ scale: 0.95 }}
                                    className="group"
                                >
                                    <Button size="xl" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-2xl shadow-cyan-500/30 border border-cyan-400/50 backdrop-blur-sm">
                                        <Rocket className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform" />
                                        Launch Now
                                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                                    </Button>
                                </motion.div>
                            </Link>
                            <motion.div 
                                whileHover={{ scale: 1.05, rotateX: 5 }} 
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button size="xl" variant="outline" className="bg-white/10 border-2 border-purple-400/60 text-white hover:bg-purple-500/20 font-bold px-8 py-4 rounded-xl backdrop-blur-md shadow-xl shadow-purple-500/20">
                                    <Target className="h-6 w-6 mr-3" />
                                    Explore
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Transparent Navigation */}
            <motion.button 
                onClick={() => handleSlideChange((currentSlide - 1 + sliderImages.length) % sliderImages.length)}
                className="absolute left-6 top-6 z-30 w-12 h-12 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={isTransitioning}
            >
                <ChevronLeft className="h-6 w-6" />
            </motion.button>
            
            <motion.button 
                onClick={() => handleSlideChange((currentSlide + 1) % sliderImages.length)}
                className="absolute right-6 top-6 z-30 w-12 h-12 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={isTransitioning}
            >
                <ChevronRight className="h-6 w-6" />
            </motion.button>

            {/* Futuristic Progress Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-4 bg-black/40 backdrop-blur-xl rounded-full px-6 py-3 border border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
                {sliderImages.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        className={`relative w-4 h-4 rounded-full transition-all duration-500 ${
                            index === currentSlide 
                                ? 'bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg shadow-cyan-400/50' 
                                : 'bg-white/30 hover:bg-white/50 border border-white/20'
                        }`}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                        disabled={isTransitioning}
                    >
                        {index === currentSlide && (
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>


        </section>
    );
};

const QuickLinksSection = () => {
    const baseUrl = `${window.location.protocol}//${window.location.hostname}:8080`;
    
    const quickLinks = [
        { icon: Building, title: "Dashboard", description: "Access your business dashboard", link: `/dashboard-v5`, color: "from-blue-500 to-cyan-500" },
        // { icon: Shield, title: "Services", description: "Explore all business services", link: `/services`, color: "from-green-500 to-emerald-500" },
        // { icon: Award, title: "Schemes", description: "Government schemes & benefits", link: `/schemes`, color: "from-purple-500 to-violet-500" },
        // { icon: FileText, title: "Scheme Applications", description: "Apply for government schemes", link: `/scheme-applications`, color: "from-orange-500 to-red-500" },
        // { icon: Calculator, title: "Eligibility Calculator", description: "Check scheme eligibility", link: `/eligibility-calculator`, color: "from-indigo-500 to-blue-500" },
        // { icon: Briefcase, title: "Offerings", description: "Our service offerings", link: `/offerings`, color: "from-pink-500 to-rose-500" },
        // { icon: BookOpen, title: "News", description: "Latest business news & updates", link: `/news`, color: "from-teal-500 to-cyan-500" },
        // { icon: UserCheck, title: "Profile", description: "Manage your profile", link: `/profile`, color: "from-yellow-500 to-orange-500" }
    ];

    return (
        <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 lg:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to={quickLinks[0].link}>
                        <Button size="xl" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
                            <Building className="h-6 w-6 mr-3" />
                            Launch Dashboard
                            <ArrowRight className="ml-3 h-6 w-6" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

const FeaturesSection = () => (
    <section id="features" className="relative py-20 lg:py-32 overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
            <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 px-6 py-3 text-sm font-bold">
                    🚀 Key Features
                </Badge>
                <h2 className="text-4xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent leading-tight">
                    Everything You Need to Succeed
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Comprehensive tools and services designed specifically for Indian entrepreneurs.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.15 }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="group"
                    >
                        <Card className="bg-white border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                            <CardContent className="p-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 lg:px-6">
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 text-sm font-semibold">
                    ⭐ Success Stories
                </Badge>
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                    Trusted by Entrepreneurs
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Join thousands of successful entrepreneurs who transformed their businesses with ANE Portal.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.name}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full group">
                            <CardContent className="p-8">
                                <div className="flex items-center mb-6">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg mr-4"/>
                                    <div>
                                        <div className="font-bold text-lg text-gray-900">{testimonial.name}</div>
                                        <div className="text-blue-600 font-semibold text-sm">{testimonial.role}</div>
                                    </div>
                                </div>
                                <blockquote className="text-gray-700 italic leading-relaxed relative">
                                    <span className="text-3xl text-blue-200 absolute -top-2 -left-4">“</span>
                                    {testimonial.content}
                                </blockquote>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const CtaSection = () => (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                    Join thousands of successful entrepreneurs who trust ANE Portal for their business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="xl" variant="glass">
                        Start Free Trial <CheckCircle className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                        Schedule Demo
                    </Button>
                </div>
            </motion.div>
        </div>
    </section>
);

const ContactSection = () => (
    <section id="contact" className="py-20 lg:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
                <Badge className="mb-6 bg-white/10 text-white border-white/20 px-4 py-2">📞 Get in Touch</Badge>
                <h2 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                    Ready to transform your business? Get in touch with our experts today.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="space-y-8">
                    <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <Mail className="h-6 w-6 text-blue-400" />
                        <div>
                            <h3 className="font-semibold mb-1">Email Us</h3>
                            <p className="text-white/80">support@aneportal.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <Phone className="h-6 w-6 text-green-400" />
                        <div>
                            <h3 className="font-semibold mb-1">Call Us</h3>
                            <p className="text-white/80">+91 1800-123-4567</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <MapPin className="h-6 w-6 text-purple-400" />
                        <div>
                            <h3 className="font-semibold mb-1">Visit Us</h3>
                            <p className="text-white/80">Mumbai, Maharashtra, India</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-blue-400 focus:outline-none"/>
                            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-blue-400 focus:outline-none"/>
                        </div>
                        <input type="text" placeholder="Subject" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-blue-400 focus:outline-none"/>
                        <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-blue-400 focus:outline-none resize-none"></textarea>
                        <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            Send Message <Send className="ml-2 h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
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
                <p>© 2025 ANE Portal. Powered by ANE. All rights reserved. Developed by Famrut Team ESDS.</p>
            </div>
        </div>
    </footer>
);


const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider 
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      <QuickLinksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
      <Footer />

      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-xl flex items-center justify-center"
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
