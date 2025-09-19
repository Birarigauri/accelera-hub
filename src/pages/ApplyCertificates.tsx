import { useNavigate } from "react-router-dom";
import { 
  Plus,
  Clock,
  IndianRupee,
  Building2,
  Award,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AppLayout from "@/components/layout/AppLayout";
import Header from "@/components/layout/Header";

// Available certificates to apply for
const availableCertificates = [
  {
    id: "import-export-code",
    name: "Import Export Code (IEC)",
    description: "Required for international trade",
    authority: "DGFT",
    processingTime: "7-10 days",
    fees: "₹500",
    category: "Trade"
  },
  {
    id: "iso-9001-2015-certification",
    name: "ISO 9001:2015 Certification",
    description: "Quality management system certification",
    authority: "ISO Certification Body",
    processingTime: "30-45 days",
    fees: "₹25,000",
    category: "Quality"
  },
  {
    id: "digital-signature-certificate",
    name: "Digital Signature Certificate",
    description: "For online document signing",
    authority: "Licensed CA",
    processingTime: "1-2 days",
    fees: "₹1,200",
    category: "Digital"
  },
  {
    id: "pollution-control-certificate",
    name: "Pollution Control Certificate",
    description: "Environmental compliance certificate",
    authority: "Pollution Control Board",
    processingTime: "15-20 days",
    fees: "₹2,500",
    category: "Environment"
  },
  {
    id: "fssai-license",
    name: "FSSAI License",
    description: "Food safety and standards license",
    authority: "FSSAI",
    processingTime: "30-60 days",
    fees: "₹7,500",
    category: "Food"
  },
  {
    id: "gst-registration",
    name: "GST Registration",
    description: "Goods and Services Tax registration",
    authority: "GST Department",
    processingTime: "3-7 days",
    fees: "₹0",
    category: "Tax"
  }
];

const ApplyCertificates = () => {
  const navigate = useNavigate();

  const handleApplyCertificate = (certificateId: string) => {
    navigate(`/certificate-application/${certificateId}`);
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="container mx-auto px-6 py-6">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-light text-gray-900">Apply for New Certificates</h1>
                <p className="text-sm text-gray-600">Expand your business capabilities with additional certifications</p>
              </div>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCertificates.map((cert) => (
              <Card key={cert.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
                <CardHeader className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                      {cert.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                    {cert.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mb-4">{cert.description}</p>
                </CardHeader>
                
                <CardContent className="p-4 pt-0">
                  <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-blue-500" />
                      <div>
                        <div className="text-gray-500 text-xs">Authority</div>
                        <div className="font-medium text-gray-900">{cert.authority}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <div>
                        <div className="text-gray-500 text-xs">Processing</div>
                        <div className="font-medium text-gray-900">{cert.processingTime}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <IndianRupee className="h-4 w-4 text-green-500" />
                      <div>
                        <div className="text-gray-500 text-xs">Government Fees</div>
                        <div className="font-medium text-green-600 text-lg">{cert.fees}</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleApplyCertificate(cert.id)}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Help Section */}
          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help Choosing?</h3>
                <p className="text-gray-600 mb-4">
                  Not sure which certificates your business needs? Our experts can help you identify the right certifications for your industry and business goals.
                </p>
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                  Consult with Expert
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default ApplyCertificates;