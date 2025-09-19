import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Zap, Shield, Users, TrendingUp, ArrowRight, Star, Sparkles, Globe, Brain, Eye, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const HomeFuturistic = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { 
      icon: Shield, 
      title: "Compliance Tracking", 
      description: "Never miss a deadline with automated license renewals and compliance alerts",
      color: "from-cyan-500 to-blue-600" 
    },
    { 
      icon: Users, 
      title: "Expert Connect", 
      description: "Get matched with verified consultants and mentors for your business needs",
      color: "from-emerald-500 to-teal-600" 
    },
    { 
      icon: TrendingUp, 
      title: "Scheme Eligibility", 
      description: "Discover government schemes and funding opportunities tailored for you",
      color: "from-indigo-500 to-purple-600" 
    },
    { 
      icon: Brain, 
      title: "Business Services", 
      description: "Access comprehensive services from registration to growth support",
      color: "from-orange-500 to-amber-600" 
    }
  ];

  const stats = [
    { value: "1M+", label: "Entrepreneurs", delay: 0.2 },
    { value: "₹10K Cr", label: "Funding", delay: 0.4 },
    { value: "50K+", label: "Success Stories", delay: 0.6 },
    { value: "99.9%", label: "Uptime", delay: 0.8 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-blue-900/15 to-indigo-900/10"></div>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Enhanced Mouse Follower */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(59,130,246,0.08) 40%, rgba(147,51,234,0.05) 70%, transparent 90%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.3, 1.1, 1],
          rotate: [0, 180, 360],
          opacity: [0.6, 1, 0.8, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary Mouse Effect */}
      <motion.div
        className="fixed w-64 h-64 rounded-full pointer-events-none z-10"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 60%)",
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
        animate={{
          scale: [1.2, 0.8, 1.2],
          rotate: [360, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />



      {/* Enhanced Header */}
      <motion.header
        className="relative z-50 p-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto flex items-center justify-between relative">
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="h-7 w-7 text-white" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-30"></div>
            </div>
            <div>
              <motion.h1 
                className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                style={{ backgroundSize: "200% 100%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                ANE Portal
              </motion.h1>
              <motion.p 
                className="text-sm text-cyan-300/90 font-medium"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Future of Business
              </motion.p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8 mr-8">
            <motion.a 
              href="#features" 
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group"
              whileHover={{ y: -2 }}
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </motion.a>
            <motion.a 
              href="#testimonials" 
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group"
              whileHover={{ y: -2 }}
            >
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group"
              whileHover={{ y: -2 }}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </motion.a>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-cyan-500/10 border border-cyan-500/20 hover:border-cyan-400/40 transition-all">
                  Classic View
                </Button>
              </motion.div>
            </Link>
            <Link to="/login">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all">
                  <Zap className="mr-2 h-4 w-4" />
                  Enter Portal
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1.2 }}
          >
            <motion.div
              className="mb-8 inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-full backdrop-blur-md shadow-lg shadow-cyan-500/25"
              animate={{
                boxShadow: [
                  "0 10px 25px -5px rgba(6, 182, 212, 0.25)",
                  "0 15px 35px -5px rgba(59, 130, 246, 0.4)",
                  "0 10px 25px -5px rgba(6, 182, 212, 0.25)"
                ],
                borderColor: [
                  "rgba(6, 182, 212, 0.4)",
                  "rgba(59, 130, 246, 0.6)",
                  "rgba(6, 182, 212, 0.4)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="h-5 w-5 text-cyan-400" />
              </motion.div>
              <span className="text-cyan-200 font-semibold text-lg bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Next-Gen Business Platform
              </span>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8"
              animate={{
                scale: [1, 1.02, 1],
                rotateX: [0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.span
                className="bg-gradient-to-r from-white via-slate-200 via-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent inline-block"
                style={{
                  backgroundSize: "400% 100%",
                  filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "200% 50%", "300% 50%", "0% 50%"],
                  y: [0, -5, 0],
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{
                  backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                Future of
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-cyan-400 via-teal-400 via-blue-500 via-indigo-500 to-slate-300 bg-clip-text text-transparent inline-block"
                style={{
                  backgroundSize: "500% 100%",
                  filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.4))",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "25% 50%", "50% 50%", "75% 50%", "100% 50%", "0% 50%"],
                  scale: [1, 1.05, 1],
                  rotateZ: [0, 1, 0, -1, 0],
                  textShadow: [
                    "0 0 20px rgba(6, 182, 212, 0.5)",
                    "0 0 40px rgba(59, 130, 246, 0.8)",
                    "0 0 20px rgba(6, 182, 212, 0.5)",
                  ],
                }}
                transition={{
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                Entrepreneurship
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Harness the power of AI, quantum computing, and blockchain to transform your business into a digital empire.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <Link to="/register">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 text-lg shadow-lg shadow-cyan-500/25">
                    <Rocket className="mr-2 h-5 w-5" />
                    Launch Your Empire
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <motion.div 
                whileTap={{ scale: 0.95 }}
                className="relative group cursor-pointer"
              >
                {/* Static Glow Ring */}
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-sm"></div>
                
                {/* Main Button Container */}
                <div className="relative bg-gradient-to-r from-slate-800/90 to-slate-900/90 rounded-xl border border-cyan-400/30 backdrop-blur-xl overflow-hidden">
                  {/* Animated Background Particles */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: [0, Math.random() * 40 - 20],
                          y: [0, Math.random() * 40 - 20]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Holographic Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20"
                    animate={{ 
                      background: [
                        "linear-gradient(45deg, rgba(6,182,212,0.2), transparent, rgba(139,92,246,0.2))",
                        "linear-gradient(225deg, rgba(139,92,246,0.2), transparent, rgba(6,182,212,0.2))",
                        "linear-gradient(45deg, rgba(6,182,212,0.2), transparent, rgba(139,92,246,0.2))"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="relative bg-transparent text-white border-cyan-400/50 hover:border-cyan-400 px-8 py-4 text-lg font-bold transition-all duration-300"
                  >
                    {/* Scanning Line Effect */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Content */}
                    <div className="flex items-center justify-center gap-4 relative z-10">
                      <motion.div
                        className="relative"
                        animate={{ 
                          rotateY: [0, 180, 360],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Eye className="h-7 w-7 text-cyan-400" />
                        <motion.div
                          className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-50"
                          animate={{ scale: [0.8, 1.5, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                      
                      <motion.span 
                        className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent font-black tracking-wide"
                        animate={{ 
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        style={{ backgroundSize: "200% 100%" }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        EXPERIENCE DEMO
                      </motion.span>
                      
                      <motion.div
                        animate={{ 
                          x: [0, 8, 0],
                          rotateZ: [0, 15, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="h-7 w-7 text-purple-400" />
                      </motion.div>
                    </div>
                    
                    {/* Bottom Glow */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                      animate={{ 
                        opacity: [0.3, 1, 0.3],
                        scaleX: [0.5, 1, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Floating Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay, duration: 1 }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -15, 
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-cyan-500/20 backdrop-blur-md shadow-xl shadow-black/50">
                  <CardContent className="p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
                    <motion.div
                      className="relative text-4xl font-bold text-white mb-2 drop-shadow-lg"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="relative text-cyan-300 text-sm font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </motion.div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="relative z-20 py-32 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-400/30 rounded-full"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Rocket className="h-5 w-5 text-cyan-400" />
              <span className="text-cyan-300 font-semibold">Key Features</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              style={{
                background: "linear-gradient(90deg, #ffffff, #e2e8f0, #06b6d4, #3b82f6, #6366f1, #e2e8f0, #ffffff)",
                backgroundSize: "400% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Everything You Need
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                to Succeed
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Experience the next generation of business tools powered by cutting-edge technology
            </motion.p>
            
            <motion.div 
              className="flex items-center justify-center gap-8 mt-10 text-sm text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>AI-Powered Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Quantum Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                <span>Future-Ready</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 1 }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -12, 
                  rotateX: 5,
                  boxShadow: "0 20px 40px -10px rgba(6, 182, 212, 0.3)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-cyan-500/20 backdrop-blur-md h-full overflow-hidden shadow-xl shadow-black/30">
                  <CardContent className="p-8 text-center relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 to-blue-500/3"></div>
                    <motion.div
                      className={`relative w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                      animate={{ rotate: currentFeature === index ? 360 : 0 }}
                      transition={{ duration: 1 }}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="relative text-xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="relative text-slate-300 mb-6 leading-relaxed">{feature.description}</p>
                    <div className="relative flex items-center text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-20 py-32 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Future Leaders Speak
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hear from visionaries who transformed their businesses with our platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Arjun Patel", role: "AI Startup Founder", content: "This platform accelerated our growth by 500%. The quantum insights are revolutionary!", rating: 5 },
              { name: "Priya Singh", role: "Tech Entrepreneur", content: "From idea to IPO in 18 months. The AI-powered tools are game-changing.", rating: 5 },
              { name: "Vikram Shah", role: "Digital Innovator", content: "The future of business is here. This platform is light-years ahead of competition.", rating: 5 }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -15, 
                  rotateZ: 2,
                  boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.4)",
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-cyan-500/20 backdrop-blur-md h-full shadow-xl shadow-black/30">
                  <CardContent className="p-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 to-blue-500/3 rounded-lg"></div>
                    <div className="relative flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                        >
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="relative text-slate-200 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                    <div className="relative border-t border-slate-600/50 pt-4">
                      <div className="font-bold text-white text-lg">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm font-medium">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-20 py-32 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Connect to the Future
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to transform your business? Our quantum-powered team is here to help
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {[
                { icon: "📧", title: "Quantum Mail", info: "future@aneportal.com" },
                { icon: "🚀", title: "Hyper Connect", info: "+91 2050-FUTURE" },
                { icon: "🌐", title: "Digital HQ", info: "Mumbai, Metaverse District" }
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  className="flex items-center gap-4 p-6 bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-cyan-500/20 rounded-2xl backdrop-blur-md shadow-lg shadow-black/30"
                  whileHover={{ 
                    scale: 1.05, 
                    x: 15, 
                    rotateY: 3,
                    boxShadow: "0 15px 30px -8px rgba(6, 182, 212, 0.2)",
                    transition: { duration: 0.3 }
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                  <div className="text-3xl">{contact.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{contact.title}</h3>
                    <p className="text-gray-400">{contact.info}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-cyan-400/40 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 to-blue-500/12 rounded-lg"></div>
                  
                  <div className="relative flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                        Launch Your Message
                      </h3>
                      <p className="text-slate-400 text-xs">Connect with the future</p>
                    </div>
                  </div>
                  
                  <form className="relative space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Name"
                        className="px-4 py-3 bg-slate-800/60 border border-slate-600/60 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-all text-sm"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="px-4 py-3 bg-slate-800/60 border border-slate-600/60 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-all text-sm"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/60 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-all text-sm"
                    />
                    <textarea
                      rows={3}
                      placeholder="Your message..."
                      className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/60 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 resize-none transition-all text-sm"
                    ></textarea>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25 transition-all font-semibold">
                        <Rocket className="mr-2 h-4 w-4" />
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative z-20 py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-3xl"></div>
            <Card className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-cyan-500/30 backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/8"></div>
              
              <CardContent className="relative p-12 text-center">
                <div className="flex justify-center mb-8">
                  <motion.div
                    className="relative"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30">
                      <Rocket className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                  </motion.div>
                </div>
                
                <motion.h2 
                  className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  style={{
                    background: "linear-gradient(90deg, #ffffff, #06b6d4, #3b82f6, #6366f1, #ffffff)",
                    backgroundSize: "300% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Ready to Enter the Future?
                </motion.h2>
                
                <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of entrepreneurs transforming their businesses with cutting-edge AI and quantum technology
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link to="/register">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -3 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-10 py-4 text-lg font-semibold shadow-xl shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all">
                        <Rocket className="mr-3 h-6 w-6" />
                        Begin Your Journey
                        <ArrowRight className="ml-3 h-6 w-6" />
                      </Button>
                    </motion.div>
                  </Link>
                  
                  <Link to="/login">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -3 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" size="lg" className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 px-10 py-4 text-lg font-semibold transition-all">
                        <Zap className="mr-3 h-5 w-5" />
                        Access Portal
                      </Button>
                    </motion.div>
                  </Link>
                </div>
                
                <div className="flex items-center justify-center gap-8 mt-12 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span>1M+ Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span>99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="h-5 w-5 text-white" />
                  </motion.div>
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    ANE Portal
                  </span>
                  <div className="text-xs text-gray-400">Future of Business</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming businesses with quantum-powered AI and next-generation technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Quantum Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">AI Business Intelligence</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Quantum Analytics</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Neural Networks</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blockchain Integration</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Future Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Quantum Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">AI Assistant</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Neural FAQs</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Digital Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal Matrix</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Protocol</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Future</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Quantum Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500"> 
              © 2025 ANE Portal. Powered by ANE. All rights reserved in this dimension. Develop by Famrut Team ESDS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeFuturistic;