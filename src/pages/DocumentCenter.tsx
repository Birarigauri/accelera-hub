import { useState } from "react";
import { 
  Upload, 
  FileText, 
  Download, 
  Eye, 
  Trash2, 
  Calendar,
  Shield,
  CheckCircle,
  AlertTriangle,
  Clock,
  Building2,
  User,
  Search,
  Filter,
  Plus,
  X,
  Award,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/layout/AppLayout";
import Header from "@/components/layout/Header";

// Sample business data
const businesses = [
  {
    id: 1,
    name: "TechCorp Solutions Pvt Ltd",
    type: "Private Limited",
    gstNo: "27AABCT1234C1Z5",
    industry: "Technology"
  },
  {
    id: 2,
    name: "Green Energy Enterprises",
    type: "Partnership",
    gstNo: "27AABCE5678D2Y4",
    industry: "Renewable Energy"
  },
  {
    id: 3,
    name: "Digital Marketing Hub",
    type: "LLP",
    gstNo: "27AABCD9012E3X3",
    industry: "Marketing"
  }
];

// Sample uploaded documents data
const uploadedDocuments = [
  { id: 1, name: "Business Plan 2024.pdf", type: "PDF", size: "2.4 MB", uploadDate: "2024-01-15", status: "verified" },
  { id: 2, name: "Financial Statement.xlsx", type: "Excel", size: "1.8 MB", uploadDate: "2024-01-14", status: "pending" },
  { id: 3, name: "Company Profile.docx", type: "Word", size: "856 KB", uploadDate: "2024-01-12", status: "verified" },
  { id: 4, name: "Tax Returns 2023.pdf", type: "PDF", size: "3.2 MB", uploadDate: "2024-01-10", status: "rejected" },
  { id: 5, name: "Bank Statement.pdf", type: "PDF", size: "1.5 MB", uploadDate: "2024-01-08", status: "verified" }
];

// Sample certificates data by business
const certificatesByBusiness = {
  1: [ // TechCorp Solutions
    {
      id: 1,
      name: "GST Registration Certificate",
      issueDate: "2023-03-15",
      expiryDate: "2026-03-14",
      validity: "3 Years",
      authority: "Central Board of Indirect Taxes",
      status: "active",
      certificateNo: "GST123456789"
    },
    {
      id: 2,
      name: "MSME Registration Certificate",
      issueDate: "2023-05-20",
      expiryDate: "2028-05-19",
      validity: "5 Years",
      authority: "Ministry of MSME",
      status: "active",
      certificateNo: "MSME987654321"
    },
    {
      id: 3,
      name: "Professional Tax Certificate",
      issueDate: "2022-04-01",
      expiryDate: "2023-03-31",
      validity: "1 Year",
      authority: "State Government",
      status: "expired",
      certificateNo: "PT987654321"
    }
  ],
  2: [ // Green Energy Enterprises
    {
      id: 4,
      name: "Environmental Clearance",
      issueDate: "2023-06-01",
      expiryDate: "2025-05-31",
      validity: "2 Years",
      authority: "Pollution Control Board",
      status: "active",
      certificateNo: "EC321654987"
    },
    {
      id: 5,
      name: "Trade License",
      issueDate: "2023-01-10",
      expiryDate: "2024-01-09",
      validity: "1 Year",
      authority: "Municipal Corporation",
      status: "expiring",
      certificateNo: "TL456789123"
    }
  ],
  3: [ // Digital Marketing Hub
    {
      id: 6,
      name: "Fire Safety Certificate",
      issueDate: "2022-08-15",
      expiryDate: "2023-08-14",
      validity: "1 Year",
      authority: "Fire Department",
      status: "expired",
      certificateNo: "FSC789123456"
    }
  ]
};

// Legacy certificates array for backward compatibility
const certificates = [
  {
    id: 1,
    name: "GST Registration Certificate",
    issueDate: "2023-03-15",
    expiryDate: "2026-03-14",
    validity: "3 Years",
    authority: "Central Board of Indirect Taxes",
    status: "active",
    certificateNo: "GST123456789"
  },
  {
    id: 2,
    name: "MSME Registration Certificate",
    issueDate: "2023-05-20",
    expiryDate: "2028-05-19",
    validity: "5 Years",
    authority: "Ministry of MSME",
    status: "active",
    certificateNo: "MSME987654321"
  },
  {
    id: 3,
    name: "Trade License",
    issueDate: "2023-01-10",
    expiryDate: "2024-01-09",
    validity: "1 Year",
    authority: "Municipal Corporation",
    status: "expiring",
    certificateNo: "TL456789123"
  },
  {
    id: 4,
    name: "Fire Safety Certificate",
    issueDate: "2022-08-15",
    expiryDate: "2023-08-14",
    validity: "1 Year",
    authority: "Fire Department",
    status: "expired",
    certificateNo: "FSC789123456"
  },
  {
    id: 5,
    name: "Environmental Clearance",
    issueDate: "2023-06-01",
    expiryDate: "2025-05-31",
    validity: "2 Years",
    authority: "Pollution Control Board",
    status: "active",
    certificateNo: "EC321654987"
  },
  {
    id: 6,
    name: "Professional Tax Certificate",
    issueDate: "2022-04-01",
    expiryDate: "2023-03-31",
    validity: "1 Year",
    authority: "State Government",
    status: "expired",
    certificateNo: "PT987654321"
  }
];

// Available certificates to apply for
const availableCertificates = [
  {
    id: 1,
    name: "Import Export Code (IEC)",
    description: "Required for international trade",
    authority: "DGFT",
    processingTime: "7-10 days",
    fees: "₹500",
    category: "Trade"
  },
  {
    id: 2,
    name: "ISO 9001:2015 Certification",
    description: "Quality management system certification",
    authority: "ISO Certification Body",
    processingTime: "30-45 days",
    fees: "₹25,000",
    category: "Quality"
  },
  {
    id: 3,
    name: "Digital Signature Certificate",
    description: "For online document signing",
    authority: "Licensed CA",
    processingTime: "1-2 days",
    fees: "₹1,200",
    category: "Digital"
  },
  {
    id: 4,
    name: "Pollution Control Certificate",
    description: "Environmental compliance certificate",
    authority: "Pollution Control Board",
    processingTime: "15-20 days",
    fees: "₹2,500",
    category: "Environment"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'verified':
    case 'active':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'rejected':
    case 'expired':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'expiring':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'verified':
    case 'active':
      return <CheckCircle className="h-4 w-4" />;
    case 'rejected':
    case 'expired':
      return <AlertTriangle className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

const DocumentCenter = () => {
  const [dragActive, setDragActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [viewDocument, setViewDocument] = useState<any>(null);
  const [selectedBusiness, setSelectedBusiness] = useState(businesses[0]);
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file upload logic here
  };

  const handleViewDocument = (doc: any) => {
    // Simulate document URL - in real app, this would be from server
    const documentUrl = `data:application/pdf;base64,sample-pdf-content`;
    window.open(documentUrl, '_blank');
  };

  const handleDownloadCertificate = (cert: any) => {
    // Simulate certificate download
    const link = document.createElement('a');
    link.href = `data:application/pdf;base64,certificate-content`;
    link.download = `${cert.name.replace(/\s+/g, '_')}.pdf`;
    link.click();
  };

  const handleRenewCertificate = (cert: any) => {
    alert(`Initiating renewal process for ${cert.name}`);
    // In real app, redirect to renewal form or open modal
  };

  const handleUpgradeCertificate = (cert: any) => {
    alert(`Initiating upgrade process for ${cert.name}`);
    // In real app, redirect to upgrade form or open modal
  };

  const handleApplyCertificate = (cert: any) => {
    alert(`Starting application process for ${cert.name}`);
    // In real app, redirect to application form or open modal
  };

  const filteredDocuments = uploadedDocuments.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentBusinessCertificates = certificatesByBusiness[selectedBusiness.id] || [];
  const filteredCertificates = currentBusinessCertificates.filter(cert =>
    cert.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="container mx-auto px-6 py-6">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-light text-gray-900">Document Center</h1>
                  <p className="text-sm text-gray-600">Upload documents and manage certificates</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                {/* Business Selector */}
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Select Business:</span>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setShowBusinessDropdown(!showBusinessDropdown)}
                      className="w-80 flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                          <Building2 className="h-4 w-4 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-gray-900 text-sm">{selectedBusiness.name}</div>
                          <div className="text-xs text-gray-500">{selectedBusiness.type} • {selectedBusiness.gstNo}</div>
                        </div>
                      </div>
                      <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${showBusinessDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {showBusinessDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        {businesses.map((business) => (
                          <button
                            key={business.id}
                            onClick={() => {
                              setSelectedBusiness(business);
                              setShowBusinessDropdown(false);
                            }}
                            className={`w-full flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors ${
                              selectedBusiness.id === business.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                            }`}
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                              <Building2 className="h-4 w-4 text-white" />
                            </div>
                            <div className="text-left flex-1">
                              <div className="font-medium text-gray-900 text-sm">{business.name}</div>
                              <div className="text-xs text-gray-500">{business.type} • {business.gstNo}</div>
                            </div>
                            {selectedBusiness.id === business.id && (
                              <CheckCircle className="h-4 w-4 text-blue-500" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Certificates & Licenses - Highlighted Section */}
            <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Certificates & Licenses</h2>
                    <p className="text-sm text-gray-600">Download your official business certificates and licenses</p>
                  </div>
                </div>
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200 px-3 py-1">
                  {filteredCertificates.length} Available
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCertificates.map((cert) => (
                  <div key={cert.id} className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="font-semibold text-gray-900">{cert.name}</div>
                          <Badge className={`${getStatusColor(cert.status)} text-xs`}>
                            {getStatusIcon(cert.status)}
                            {cert.status}
                          </Badge>
                        </div>
                        <div className="text-xs text-gray-600 mb-3">
                          Certificate No: <span className="font-medium">{cert.certificateNo}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 text-indigo-500" />
                        <div>
                          <div className="text-gray-500">Issue Date</div>
                          <div className="font-medium text-gray-900">{cert.issueDate}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 text-indigo-500" />
                        <div>
                          <div className="text-gray-500">Expiry Date</div>
                          <div className="font-medium text-gray-900">{cert.expiryDate}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-indigo-500" />
                        <div>
                          <div className="text-gray-500">Validity</div>
                          <div className="font-medium text-gray-900">{cert.validity}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-3 w-3 text-indigo-500" />
                        <div>
                          <div className="text-gray-500">Authority</div>
                          <div className="font-medium text-gray-900 text-xs">{cert.authority}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {cert.status === 'expired' ? (
                        <div className="flex gap-2">
                          <Button 
                            onClick={() => handleRenewCertificate(cert)}
                            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-xs"
                          >
                            <Clock className="h-3 w-3 mr-1" />
                            Renew
                          </Button>
                          <Button 
                            onClick={() => handleUpgradeCertificate(cert)}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs"
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Upgrade
                          </Button>
                        </div>
                      ) : cert.status === 'expiring' ? (
                        <div className="flex gap-2">
                          <Button 
                            onClick={() => handleDownloadCertificate(cert)}
                            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs"
                          >
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                          <Button 
                            onClick={() => handleRenewCertificate(cert)}
                            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-xs"
                          >
                            <Clock className="h-3 w-3 mr-1" />
                            Renew
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          onClick={() => handleDownloadCertificate(cert)}
                          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs"
                        >
                          <Download className="h-3 w-3 mr-1" />
                          Download Certificate
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Certificates Section */}
            <Card className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border border-green-200">
              <CardHeader className="p-4 border-b border-green-100">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">Apply for New Certificates</div>
                    <div className="text-sm text-gray-600">Expand your business capabilities with additional certifications</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availableCertificates.map((cert) => (
                    <div key={cert.id} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-200">
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 text-sm">{cert.name}</h3>
                          <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                            {cert.category}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600 mb-3">{cert.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                        <div>
                          <div className="text-gray-500">Authority</div>
                          <div className="font-medium text-gray-900">{cert.authority}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Processing</div>
                          <div className="font-medium text-gray-900">{cert.processingTime}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Fees</div>
                          <div className="font-medium text-green-600">{cert.fees}</div>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => handleApplyCertificate(cert)}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-xs"
                      >
                        <Plus className="h-3 w-3 mr-1" />
                        Apply Now
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* My Documents Section */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader className="p-4 border-b border-gray-100">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-base font-medium text-gray-900">My Documents</div>
                      <div className="text-xs text-gray-600">{filteredDocuments.length} documents uploaded for {selectedBusiness.name}</div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => setShowUploadModal(true)}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Upload Document
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {filteredDocuments.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-gray-500" />
                        <div>
                          <div className="font-medium text-sm text-gray-900">{doc.name}</div>
                          <div className="text-xs text-gray-600">{doc.size} • {doc.uploadDate}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={`${getStatusColor(doc.status)} text-xs`}>
                          {doc.status}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="p-1"
                            onClick={() => handleViewDocument(doc)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="p-1">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="p-1 text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Upload Document</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowUploadModal(false)}
                  className="p-1"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors mb-4 ${
                  dragActive 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <div className="text-sm text-gray-600 mb-2">
                  Drop files here or <span className="text-blue-600 font-medium cursor-pointer">browse</span>
                </div>
                <div className="text-xs text-gray-500">
                  Supports: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG (Max 10MB)
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowUploadModal(false)}
                >
                  Cancel
                </Button>
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default DocumentCenter;