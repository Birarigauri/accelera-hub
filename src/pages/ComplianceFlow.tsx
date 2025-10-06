import { useState, useCallback, useMemo } from "react";
import { 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  FileText, 
  Video, 
  HelpCircle, 
  MessageCircle, 
  ExternalLink,
  Download,
  Upload,
  User,
  MapPin,
  Globe,
  Send,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Play,
  BookOpen,
  Phone,
  Shield,
  Zap,
  Heart,
  Star,
  Users,
  FileCheck,
  Headphones,
  Building
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import AppLayout from "@/components/layout/AppLayout";
import Header from "@/components/layout/Header";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  difficulty: 'green' | 'yellow' | 'red';
  status: 'completed' | 'current' | 'pending';
  requiredDocs: string[];
  estimatedTime: string;
  isOnline: boolean;
}

interface ComplianceMetadata {
  processName: string;
  stateSpecific: boolean;
  stateName?: string;
  onlineStatus: boolean;
  applicationMode: 'API' | 'Manual Link' | 'Physical Submission';
  totalSteps: number;
  estimatedDuration: string;
}

const ComplianceFlow = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [showKnowledgeBase, setShowKnowledgeBase] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [showDocumentPrep, setShowDocumentPrep] = useState(false);

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Document Collection & Verification",
      description: "Gather and verify all required business documents digitally",
      difficulty: 'green',
      status: 'completed',
      requiredDocs: ["PAN Card", "Aadhaar Card", "Business Address Proof", "Bank Statement"],
      estimatedTime: "15-20 mins",
      isOnline: true
    },
    {
      id: 2,
      title: "GST Registration Form Submission",
      description: "Complete and submit your GST registration application online",
      difficulty: 'yellow',
      status: 'current',
      requiredDocs: ["Business Registration Certificate", "Bank Account Details", "Digital Signature Certificate", "Authorized Signatory Details"],
      estimatedTime: "30-45 mins",
      isOnline: true
    },
    {
      id: 3,
      title: "Government Physical Verification",
      description: "GST officer conducts mandatory premises verification visit",
      difficulty: 'red',
      status: 'pending',
      requiredDocs: ["All Original Documents", "Business Premises Access", "Authorized Representative Present"],
      estimatedTime: "2-5 business days",
      isOnline: false
    },
    {
      id: 4,
      title: "Certificate Issuance & Download",
      description: "Receive and download your official GST registration certificate",
      difficulty: 'green',
      status: 'pending',
      requiredDocs: ["Verification Completion Confirmation", "Payment Receipt"],
      estimatedTime: "Instant",
      isOnline: true
    }
  ];

  const metadata: ComplianceMetadata = {
    processName: "GST Registration Process",
    stateSpecific: true,
    stateName: "Maharashtra",
    onlineStatus: true,
    applicationMode: 'API',
    totalSteps: 4,
    estimatedDuration: "5-7 business days"
  };

  const knowledgeBaseItems = [
    { type: 'video', title: 'Complete GST Registration Walkthrough', duration: '12:30', views: '2.1K', rating: 4.8 },
    { type: 'content', title: 'Comprehensive Step-by-Step Guide', pages: '12 pages', downloads: '850', rating: 4.9 },
    { type: 'faq', title: 'Frequently Asked Questions', items: '25 FAQs', helpful: '95%', rating: 4.7 },
    { type: 'manual', title: 'Official GST Registration Manual', size: '3.2 MB', downloads: '1.2K', rating: 4.6 }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'green': return 'bg-green-600';
      case 'yellow': return 'bg-yellow-600';
      case 'red': return 'bg-red-600';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'green': return 'Independent';
      case 'yellow': return 'Guided Support';
      case 'red': return 'Expert Required';
      default: return 'Unknown';
    }
  };

  const getStepIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'current': return <Clock className="h-6 w-6 text-blue-500" />;
      case 'pending': return <div className="w-6 h-6 rounded-full border-2 border-gray-300" />;
      default: return null;
    }
  };

  const currentStepData = useMemo(() => 
    processSteps.find(step => step.id === currentStep), [currentStep, processSteps]
  );
  const completedSteps = useMemo(() => 
    processSteps.filter(step => step.status === 'completed').length, [processSteps]
  );
  const progressPercentage = useMemo(() => 
    (completedSteps / processSteps.length) * 100, [completedSteps, processSteps.length]
  );

  const handleStepClick = useCallback((stepId: number) => {
    setCurrentStep(stepId);
  }, []);

  const handleContinueProcess = useCallback(async () => {
    setIsProcessing(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setNotifications(prev => [...prev, `Step ${currentStep} completed successfully!`]);
      if (currentStep < processSteps.length) {
        setCurrentStep(prev => prev + 1);
      }
    } catch (error) {
      setNotifications(prev => [...prev, "Error processing step. Please try again."]);
    } finally {
      setIsProcessing(false);
    }
  }, [currentStep, processSteps.length]);

  const handleSendMessage = useCallback(() => {
    if (chatMessage.trim()) {
      // Simulate AI response
      setNotifications(prev => [...prev, `AI: Thanks for your question about "${chatMessage}". I'll help you with that!`]);
      setChatMessage("");
    }
  }, [chatMessage]);

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      
        <Header />
        
        <div className="container mx-auto px-6 py-8">
          {/* Header Section */}
          {/* Compact Header */}
          <div className="mb-6">
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Compliance Journey</h1>
            </div>
            
            {/* Progress Bar */}
            <div className="max-w-xl mx-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-bold text-blue-600">{completedSteps}/{metadata.totalSteps} completed</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </div>

          {/* Main Flow - Step by Step - Full Width */}
          <div className="w-full mb-8">
            <Card className="border border-gray-200 shadow-sm bg-white">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-2">
                <CardTitle className="text-center">
                  <h2 className="text-base font-semibold text-gray-900">Your Compliance Roadmap</h2>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                {/* Horizontal Progress Bar */}
                <div className="mb-4 w-full">
                  <div className="flex items-center justify-between mb-2 w-full">
                    {processSteps.map((step, index) => (
                      <div key={step.id} className="flex flex-col items-center relative">
                        {/* Connector Line */}
                        {index < processSteps.length - 1 && (
                          <div className={`absolute top-6 left-12 h-1 rounded-full ${
                            step.status === 'completed' ? 'bg-gradient-to-r from-green-400 to-green-500' : 'bg-gray-300'
                          }`} style={{width: `calc(100vw / ${processSteps.length} - 3rem)`}}></div>
                        )}
                        
                        {/* Step Circle */}
                        <div 
                          className={`relative w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm cursor-pointer transition-all duration-300 transform hover:scale-110 ${
                            step.id === currentStep ? 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white shadow-xl shadow-blue-300/50 ring-4 ring-blue-200/60' :
                            step.status === 'completed' ? 'bg-gradient-to-br from-emerald-400 via-green-500 to-green-600 text-white shadow-lg shadow-green-300/40' :
                            'bg-gradient-to-br from-gray-100 to-gray-200 border-3 border-gray-300 text-gray-600 hover:from-blue-50 hover:to-blue-100 hover:border-blue-400 hover:text-blue-600 hover:shadow-lg'
                          }`}
                          onClick={() => handleStepClick(step.id)}
                        >
                          {/* Inner glow effect */}
                          <div className={`absolute inset-0 rounded-full ${
                            step.id === currentStep ? 'bg-gradient-to-br from-white/20 to-transparent' :
                            step.status === 'completed' ? 'bg-gradient-to-br from-white/30 to-transparent' :
                            'bg-gradient-to-br from-white/40 to-transparent'
                          }`}></div>
                          
                          <div className="relative z-10">
                            {step.status === 'completed' ? (
                              <CheckCircle className="h-5 w-5 drop-shadow-sm" />
                            ) : (
                              <span className="drop-shadow-sm">{step.id}</span>
                            )}
                          </div>
                        </div>
                        
                        {/* Step Label */}
                        <div className="mt-3 text-center max-w-24">
                          <div className={`text-xs font-semibold ${
                            step.id === currentStep ? 'text-blue-600' :
                            step.status === 'completed' ? 'text-green-600' : 'text-gray-600'
                          }`}>
                            Step {step.id}
                          </div>
                          <div className={`text-xs font-medium ${
                            step.id === currentStep ? 'text-blue-500' :
                            step.status === 'completed' ? 'text-green-500' : 'text-gray-500'
                          }`}>
                            {step.estimatedTime}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Current Step Focus - Compact */}
          <div className="w-full mb-4">
            {currentStepData && (
              <Card className="border border-gray-200 shadow-sm bg-white">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {currentStep}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{currentStepData.title}</h3>
                        <p className="text-sm text-gray-600">{currentStepData.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant="outline"
                        className={`font-medium ${
                          currentStepData.difficulty === 'red' ? 'border-red-300 text-red-700 bg-red-50' :
                          currentStepData.difficulty === 'yellow' ? 'border-yellow-300 text-yellow-700 bg-yellow-50' :
                          'border-green-300 text-green-700 bg-green-50'
                        }`}
                      >
                        {getDifficultyText(currentStepData.difficulty)}
                      </Badge>
                      <Button 
                        onClick={() => {
                          if (currentStep < processSteps.length) {
                            setCurrentStep(currentStep + 1);
                          }
                        }}
                        disabled={currentStep >= processSteps.length}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Next Step
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{currentStepData.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {currentStepData.isOnline ? (
                        <>
                          <Globe className="h-4 w-4" />
                          <span>Online Process</span>
                        </>
                      ) : (
                        <>
                          <Building className="h-4 w-4" />
                          <span>Physical Visit Required</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>{currentStepData.requiredDocs.length} Documents Required</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
            {/* Document Requirements */}
            <div className="lg:col-span-12">
              <Card className="border border-gray-200 shadow-sm bg-white">
                <CardHeader className="bg-gray-50 border-b border-gray-200 py-2">
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4 text-gray-600" />
                    Document Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3">
                  {currentStepData && (
                    <div className="space-y-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{currentStepData.title}</h4>
                        <p className="text-sm text-gray-600">{currentStepData.description}</p>
                      </div>
                      
                      {/* Required Documents */}
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <FileText className="h-4 w-4 text-blue-500" />
                          Required Documents
                        </h5>
                        <div className="space-y-3">
                          {currentStepData.requiredDocs.map((doc, index) => (
                            <div 
                              key={index} 
                              className={`p-3 rounded-lg border-2 transition-all cursor-pointer ${
                                selectedDocument === doc 
                                  ? 'border-blue-500 bg-blue-50' 
                                  : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                              }`}
                              onClick={() => setSelectedDocument(selectedDocument === doc ? null : doc)}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <FileText className="h-4 w-4 text-blue-600" />
                                  </div>
                                  <span className="text-sm font-medium text-gray-900">{doc}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button size="sm" variant="outline" className="text-xs">
                                    <Upload className="h-3 w-3 mr-1" />
                                    Upload
                                  </Button>
                                </div>
                              </div>
                              {selectedDocument === doc && (
                                <div className="mt-3 pt-3 border-t border-blue-200">
                                  <p className="text-xs text-gray-600 mb-2">Document requirements:</p>
                                  <ul className="text-xs text-gray-500 space-y-1">
                                    <li>• Clear, high-resolution scan or photo</li>
                                    <li>• All corners visible and text readable</li>
                                    <li>• Accepted formats: PDF, JPG, PNG</li>
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>



                      {/* Action Buttons */}
                      <div className="space-y-2">
                        {currentStepData.difficulty === 'red' ? (
                          <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                            <Phone className="h-4 w-4 mr-2" />
                            Schedule Expert Visit
                          </Button>
                        ) : (
                          <Button 
                            className="w-full bg-green-500 hover:bg-green-600 text-white disabled:opacity-50"
                            onClick={handleContinueProcess}
                            disabled={isProcessing}
                          >
                            {isProcessing ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Processing...
                              </>
                            ) : (
                              <>
                                <Send className="h-4 w-4 mr-2" />
                                Continue Process
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>


            </div>



              {/* Final Submission */}
              {completedSteps === processSteps.length - 1 && (
                <Card className="border-0 shadow-xl mt-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">🎉 Congratulations!</h3>
                    <p className="text-green-100 mb-6">All steps completed successfully! You're ready for final submission.</p>
                    <Button className="w-full bg-white text-green-600 hover:bg-green-50 py-4 text-lg font-bold shadow-lg">
                      <Send className="h-5 w-5 mr-2" />
                      Submit Application Now
                    </Button>
                    <p className="text-xs text-green-100 mt-3">Secure submission • Instant confirmation • Track status</p>
                  </CardContent>
                </Card>
              )}
            </div>
        </div>
       

        {/* Notifications */}
        {notifications.length > 0 && (
          <div className="fixed top-4 right-4 z-40 space-y-2">
            {notifications.slice(-3).map((notification, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm animate-slide-in"
                role="alert"
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{notification}</p>
                  </div>
                  <button 
                    onClick={() => setNotifications(prev => prev.filter((_, i) => i !== notifications.length - 3 + index))}
                    className="text-gray-400 hover:text-gray-600"
                    aria-label="Dismiss notification"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Floating AI ChatBot */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative">
            {/* Pulsing indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-white"></div>
            <Button
              onClick={() => setShowChatBot(!showChatBot)}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
              aria-label={showChatBot ? "Close AI assistant" : "Open AI assistant"}
            >
              <MessageCircle className="h-7 w-7 text-white" />
            </Button>
          </div>
          
          {showChatBot && (
            <Card className="absolute bottom-20 right-0 w-96 border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-bold">AI Compliance Assistant</h3>
                      <p className="text-xs text-purple-100">Instant help • Always available</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-800 font-medium mb-1">Hi! I'm your compliance assistant 👋</p>
                        <p className="text-xs text-gray-600">I can help with document requirements, process steps, timelines, and connect you with experts instantly!</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button size="sm" variant="outline" className="text-xs p-2 h-auto">
                      📋 Document Help
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs p-2 h-auto">
                      ⏰ Timeline Info
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs p-2 h-auto">
                      💰 Cost Estimate
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs p-2 h-auto">
                      👨‍💼 Expert Connect
                    </Button>
                  </div>
                  
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Type your question here..." 
                      className="flex-1 p-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                      aria-label="Chat message input"
                    />
                    <Button 
                      size="sm" 
                      onClick={handleSendMessage}
                      disabled={!chatMessage.trim()}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4"
                      aria-label="Send message"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center">Powered by AI • Response time: &lt;30 seconds</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Expert Section */}
        <div className="mt-8 py-8 bg-gradient-to-br from-gray-50 to-blue-50 border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Need Expert Help?</h2>
                  <p className="text-gray-600">Connect with certified professionals for personalized guidance</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                    <User className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Rajesh Kumar</h3>
                  <p className="text-sm text-gray-600 mb-3">GST Specialist • 5+ years</p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2 font-semibold">4.9</span>
                  </div>
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Connect Now
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 hover:shadow-lg hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                    <User className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Priya Sharma</h3>
                  <p className="text-sm text-gray-600 mb-3">Compliance Expert • 7+ years</p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2 font-semibold">4.8</span>
                  </div>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                    Connect Now
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                    <User className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Amit Patel</h3>
                  <p className="text-sm text-gray-600 mb-3">Legal Advisor • 6+ years</p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                    <span className="text-sm text-gray-600 ml-2 font-semibold">4.7</span>
                  </div>
                  <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                    Connect Now
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 hover:shadow-lg hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                    <User className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Sneha Gupta</h3>
                  <p className="text-sm text-gray-600 mb-3">Tax Consultant • 8+ years</p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2 font-semibold">5.0</span>
                  </div>
                  <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                    Connect Now
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-8 py-3 font-semibold shadow-lg">
                <ExternalLink className="h-5 w-5 mr-2" />
                View All Experts
              </Button>
            </div>
          </div>
        </div>
        
        {/* Document Preparation Service */}
        <div className="py-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-t border-emerald-200">
          <div className="container mx-auto px-6">
            <Card className="max-w-2xl mx-auto border-emerald-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <FileCheck className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-emerald-900">Document Preparation Service</h2>
                    <p className="text-sm text-emerald-700">Professional document drafting & review</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-emerald-700">
                    <CheckCircle className="h-4 w-4" />
                    <span>Expert document review & formatting</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-700">
                    <CheckCircle className="h-4 w-4" />
                    <span>Compliance verification included</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-700">
                    <CheckCircle className="h-4 w-4" />
                    <span>Same-day turnaround available</span>
                  </div>
                </div>
                <div className="text-center">
                  <Button 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3"
                    onClick={() => setShowDocumentPrep(!showDocumentPrep)}
                  >
                    <Zap className="h-5 w-5 mr-2" />
                    Get Professional Help - ₹299
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Trust Footer */}
        <div className="mt-16 py-8 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200">
          <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center items-center gap-8 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-green-500" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-blue-500" />
                <span>Government Approved</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="h-4 w-4 text-purple-500" />
                <span>50K+ Happy Customers</span>
              </div>
            </div>
            <p className="text-xs text-gray-500">Your compliance journey is protected by enterprise-grade security and backed by certified experts.</p>
          </div>
        </div>
       </div>
    </AppLayout>
  );
};

export default ComplianceFlow;