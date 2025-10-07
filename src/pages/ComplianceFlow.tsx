import { useState, useCallback, useMemo, memo, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
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
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Play,
  BookOpen,
  Phone,
  Star,
  Eye,
  Shield,
  Zap,
  Heart,
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
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ProcessStep from "@/components/common/ProcessStep";
import ExpertCard from "@/components/common/ExpertCard";

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

const ComplianceFlow = memo(() => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2);
  const [showKnowledgeBase, setShowKnowledgeBase] = useState(true);
  const [showChatBot, setShowChatBot] = useState(false);
  const [currentKnowledgeIndex, setCurrentKnowledgeIndex] = useState(0);
  const [chatMessage, setChatMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [showDocumentPrep, setShowDocumentPrep] = useState(false);
  const [uploadedDocs, setUploadedDocs] = useState<string[]>([]);
  const [currentExpertIndex, setCurrentExpertIndex] = useState(0);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const experts = [
    {
      name: "CA Rajesh Kumar",
      title: "GST Specialist",
      experience: "5+ years",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      expertise: ["GST Registration", "Tax Filing", "Compliance"],
      color: "blue",
      verified: true
    },
    {
      name: "Adv. Priya Sharma",
      title: "Legal Compliance Expert",
      experience: "7+ years",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      expertise: ["Corporate Law", "Contracts", "IPR"],
      color: "green",
      verified: true
    },
    {
      name: "CS Amit Patel",
      title: "Company Secretary",
      experience: "6+ years",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      expertise: ["ROC Filing", "Board Meetings", "Annual Returns"],
      color: "purple",
      verified: true
    },
    {
      name: "CA Sneha Gupta",
      title: "Tax Consultant",
      experience: "8+ years",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      expertise: ["Income Tax", "TDS", "Audit"],
      color: "orange",
      verified: true
    },
    {
      name: "CA Vikram Singh",
      title: "Financial Advisor",
      experience: "9+ years",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      expertise: ["Financial Planning", "Investment", "Loans"],
      color: "blue",
      verified: true
    },
    {
      name: "Adv. Meera Joshi",
      title: "Business Lawyer",
      experience: "6+ years",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      expertise: ["Business Law", "Litigation", "Arbitration"],
      color: "green",
      verified: true
    }
  ];
  
  const getCardsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 768) return 2;  // md
      return 1; // sm
    }
    return 3;
  };
  
  const cardsPerSlide = getCardsPerSlide();
  const totalSlides = Math.ceil(experts.length / cardsPerSlide);

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
      title: "🎉 Certificate Ready & Download",
      description: "Your official GST registration certificate is ready! Download and save your digital certificate instantly.",
      difficulty: 'green',
      status: 'pending',
      requiredDocs: ["Verification Completion Confirmation", "Payment Receipt", "Digital Certificate"],
      estimatedTime: "Instant Download",
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
    { 
      type: 'video', 
      title: 'GST Registration Walkthrough', 
      subtitle: 'Complete video guide',
      duration: '12:30',
      views: '2.4K views',
      rating: 4.8,
      description: 'Step-by-step video tutorial covering the entire GST registration process with real examples'
    },
    { 
      type: 'content', 
      title: 'Step-by-Step Guide', 
      subtitle: 'Detailed documentation',
      pages: '8 pages',
      views: '1.8K reads',
      rating: 4.9,
      description: 'Comprehensive written guide with screenshots and detailed explanations for each step'
    },
    { 
      type: 'faq', 
      title: 'Common Questions', 
      subtitle: 'Frequently asked questions',
      items: '15 FAQs',
      views: '3.2K views',
      rating: 4.7,
      description: 'Most common questions and expert answers about GST registration process'
    },
    { 
      type: 'manual', 
      title: 'User Manual PDF', 
      subtitle: 'Downloadable reference',
      size: '2.4 MB',
      views: '956 downloads',
      rating: 4.6,
      description: 'Complete reference manual for offline reading and printing with all forms'
    },
    {
      type: 'expert',
      title: 'Expert Consultation',
      subtitle: '1-on-1 guidance',
      duration: '30 mins',
      views: '500+ sessions',
      rating: 4.9,
      description: 'Personal consultation with GST registration experts for complex cases'
    },
    {
      type: 'webinar',
      title: 'Live Q&A Session',
      subtitle: 'Interactive session',
      duration: 'Weekly',
      views: 'Live now',
      rating: 4.8,
      description: 'Join live sessions with experts and other entrepreneurs for real-time help'
    }
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

  const handleExpertConnect = useCallback((expertName: string) => {
    console.log(`Connecting to ${expertName}`);
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
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200 py-4">
                  <CardTitle className="flex items-center justify-between text-base">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">📋 Document Checklist</h3>
                        <p className="text-xs text-gray-600">Upload required documents to proceed</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-500"
                            style={{ width: `${(uploadedDocs.length / (currentStepData?.requiredDocs.length || 1)) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-semibold text-gray-700">
                          {uploadedDocs.length}/{currentStepData?.requiredDocs.length}
                        </span>
                      </div>
                      <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700 border-blue-300">
                        {uploadedDocs.length === currentStepData?.requiredDocs.length ? '✅ Complete' : '⏳ In Progress'}
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  {currentStepData && (
                    <div className="space-y-4">
                      {/* Documents Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentStepData.requiredDocs.map((doc, index) => {
                          const isUploaded = uploadedDocs.includes(doc);
                          return (
                            <div 
                              key={index} 
                              className={`group p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                                isUploaded 
                                  ? 'border-green-300 bg-gradient-to-r from-green-50 to-emerald-50 shadow-md' 
                                  : 'border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50/50'
                              }`}
                              onDragOver={(e) => e.preventDefault()}
                              onDrop={(e) => {
                                e.preventDefault();
                                if (!isUploaded) {
                                  setUploadedDocs(prev => [...prev, doc]);
                                }
                              }}
                            >
                              <div className="flex items-start justify-between mb-3">
                                <div className="flex items-start gap-3">
                                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                                    isUploaded ? 'bg-green-100' : 'bg-gray-100 group-hover:bg-blue-100'
                                  }`}>
                                    {isUploaded ? (
                                      <CheckCircle className="h-4 w-4 text-green-600" />
                                    ) : (
                                      <FileText className="h-4 w-4 text-gray-600 group-hover:text-blue-600" />
                                    )}
                                  </div>
                                  <div className="flex-1">
                                    <span className="text-sm font-semibold text-gray-900 block leading-tight">{doc}</span>
                                    <span className="text-xs text-gray-500 mt-1 block">
                                      {isUploaded ? '✅ Uploaded successfully' : '📎 Drag & drop or click to upload'}
                                    </span>
                                  </div>
                                </div>
                                {isUploaded && (
                                  <Badge className="bg-green-100 text-green-700 text-xs px-2 py-1">
                                    ✓ Done
                                  </Badge>
                                )}
                              </div>
                              
                              <div className="flex gap-2">
                                {!isUploaded ? (
                                  <>
                                    <Button 
                                      size="sm" 
                                      className="flex-1 text-xs py-2 h-auto bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                                      onClick={() => setUploadedDocs(prev => [...prev, doc])}
                                    >
                                      <Upload className="h-3 w-3 mr-1" />
                                      Upload File
                                    </Button>
                                    <Button size="sm" variant="ghost" className="text-xs py-2 h-auto text-gray-500 hover:text-blue-600 px-3">
                                      <HelpCircle className="h-3 w-3" />
                                    </Button>
                                  </>
                                ) : (
                                  <>
                                    <Button size="sm" variant="outline" className="flex-1 text-xs py-2 h-auto border-green-300 text-green-700 hover:bg-green-50">
                                      <Eye className="h-3 w-3 mr-1" />
                                      View File
                                    </Button>
                                    <Button 
                                      size="sm" 
                                      variant="ghost" 
                                      className="text-xs py-2 h-auto text-red-500 hover:text-red-700 px-3"
                                      onClick={() => setUploadedDocs(prev => prev.filter(d => d !== doc))}
                                    >
                                      <Download className="h-3 w-3" />
                                    </Button>
                                  </>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Quick Tips */}
                      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-amber-600 text-sm">💡</span>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-amber-900 mb-2">Upload Guidelines</p>
                            <ul className="text-xs text-amber-800 space-y-1">
                              <li>✓ Clear, high-resolution scans</li>
                              <li>✓ PDF, JPG, PNG (Max 5MB each)</li>
                              <li>✓ All text must be readable</li>
                              <li>✓ Original documents preferred</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        {currentStepData.difficulty === 'red' ? (
                          <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl">
                            <Phone className="h-4 w-4 mr-2" />
                            Schedule Expert Visit
                          </Button>
                        ) : (
                          <>
                            <Button variant="outline" className="px-6 py-2.5 rounded-xl border-gray-300">
                              Save Draft
                            </Button>
                            <Button 
                              className="flex-1 bg-green-500 hover:bg-green-600 text-white disabled:opacity-50 py-2.5 rounded-xl"
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
                          </>
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
            
            {/* Expert Carousel */}
            <div className="relative mb-8">
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentExpertIndex * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                        {experts
                          .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                          .map((expert, expertIndex) => {
                            const colors = {
                              blue: { bg: 'from-blue-500 to-blue-600', light: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
                              green: { bg: 'from-green-500 to-green-600', light: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
                              purple: { bg: 'from-purple-500 to-purple-600', light: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
                              orange: { bg: 'from-orange-500 to-orange-600', light: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' }
                            };
                            
                            return (
                              <div key={expertIndex} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group">
                                {/* Header with gradient */}
                                <div className={`h-20 bg-gradient-to-r ${colors[expert.color].bg} relative`}>
                                  <div className="absolute inset-0 bg-black/10"></div>
                                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                                    <div className="relative">
                                      <img 
                                        src={expert.image} 
                                        alt={expert.name}
                                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-xl"
                                      />
                                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                                      {expert.verified && (
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                                          <CheckCircle className="h-3 w-3 text-white" />
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Content */}
                                <div className="pt-10 pb-6 px-6 text-center">
                                  <h3 className="font-bold text-gray-900 text-lg mb-1">{expert.name}</h3>
                                  <p className="text-sm text-gray-600 mb-3">{expert.title}</p>
                                  
                                  {/* Stats Row */}
                                  <div className="flex items-center justify-center gap-4 mb-4">
                                    <div className="flex items-center gap-1">
                                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                      <span className="text-sm font-semibold text-gray-700">{expert.rating}</span>
                                    </div>
                                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                    <div className="text-sm text-gray-500">{expert.experience}</div>
                                  </div>
                                  
                                  {/* Expertise */}
                                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                                    {expert.expertise.slice(0, 2).map((skill, skillIndex) => (
                                      <span key={skillIndex} className={`text-xs px-3 py-1 rounded-full font-medium ${colors[expert.color].light} ${colors[expert.color].text} ${colors[expert.color].border} border`}>
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                  
                                  {/* Connect Actions */}
                                  <div className="space-y-3">
                                    <Button 
                                      className={`w-full bg-gradient-to-r ${colors[expert.color].bg} hover:shadow-lg text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:scale-105`}
                                      onClick={() => {
                                        setSuccessMessage(`Connection request submitted successfully! ${expert.name} will contact you within 2-4 hours to discuss your compliance requirements.`);
                                        setShowSuccessAlert(true);
                                      }}
                                    >
                                      <MessageCircle className="h-4 w-4 mr-2" />
                                      Connect Now
                                    </Button>
                                    <Button 
                                      variant="outline" 
                                      size="sm" 
                                      className="w-full text-xs py-2 rounded-lg border-gray-200 hover:bg-gray-50"
                                      onClick={() => setSelectedExpert(expert)}
                                    >
                                      <Eye className="h-3 w-3 mr-1" />
                                      View Profile
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Modern Navigation */}
              <div className="flex items-center justify-center gap-6 mt-8">
                <Button
                  onClick={() => setCurrentExpertIndex(prev => prev === 0 ? totalSlides - 1 : prev - 1)}
                  variant="outline"
                  size="lg"
                  className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <Button
                  onClick={() => setCurrentExpertIndex(prev => prev === totalSlides - 1 ? 0 : prev + 1)}
                  variant="outline"
                  size="lg"
                  className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Dots Indicator */}
              {totalSlides > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentExpertIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentExpertIndex 
                          ? 'bg-blue-600 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-8 py-3 font-semibold shadow-lg"
                onClick={() => navigate('/experts')}
              >
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
        
        {/* Expert Profile Modal */}
        {selectedExpert && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar">
              {/* Header */}
              <div className={`h-32 bg-gradient-to-r ${selectedExpert.color === 'blue' ? 'from-blue-500 to-blue-600' : selectedExpert.color === 'green' ? 'from-green-500 to-green-600' : selectedExpert.color === 'purple' ? 'from-purple-500 to-purple-600' : 'from-orange-500 to-orange-600'} relative`}>
                <button 
                  onClick={() => setSelectedExpert(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30"
                >
                  ×
                </button>
                <div className="absolute -bottom-12 left-8">
                  <img 
                    src={selectedExpert.image} 
                    alt={selectedExpert.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="pt-16 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{selectedExpert.name}</h2>
                    <p className="text-lg text-gray-600 mb-2">{selectedExpert.title}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-semibold">{selectedExpert.rating}</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-600">{selectedExpert.experience}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">Online</span>
                  </div>
                </div>
                
                {/* About */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Leading compliance consultancy with 10+ years of expertise in business registrations, trade licenses, and regulatory compliance. Specialized in helping businesses navigate complex regulatory requirements with proven track record of success.
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">99%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">650+</div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                </div>
                
                {/* Services */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Services Offered</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['IEC Application', 'Business Registration', 'Compliance Management', 'Legal Advisory'].map((service, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Certifications & Languages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {['CA', 'CS', 'LLB', 'DGFT Expert'].map((cert, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {['English', 'Hindi', 'Kannada', 'Tamil'].map((lang, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Contact */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Phone className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700">+91 76543****</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <MessageCircle className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700">support@compliancehub.co.in</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    className={`flex-1 bg-gradient-to-r ${selectedExpert.color === 'blue' ? 'from-blue-500 to-blue-600' : selectedExpert.color === 'green' ? 'from-green-500 to-green-600' : selectedExpert.color === 'purple' ? 'from-purple-500 to-purple-600' : 'from-orange-500 to-orange-600'} text-white font-semibold py-3 rounded-xl`}
                    onClick={() => {
                      setSuccessMessage(`Connection request submitted successfully! ${selectedExpert.name} will contact you within 2-4 hours to discuss your compliance requirements.`);
                      setSelectedExpert(null);
                      setShowSuccessAlert(true);
                    }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Connect Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Success Alert Modal */}
        {showSuccessAlert && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center shadow-2xl">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Success!</h2>
              
              {/* Message */}
              <p className="text-gray-600 mb-8 leading-relaxed">{successMessage}</p>
              
              {/* OK Button */}
              <Button 
                onClick={() => setShowSuccessAlert(false)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl text-lg"
              >
                OK
              </Button>
            </div>
          </div>
        )}
        
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
     
    </AppLayout>
  );
});



ComplianceFlow.displayName = "ComplianceFlow";

export default ComplianceFlow;