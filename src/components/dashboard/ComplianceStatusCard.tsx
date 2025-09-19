import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, Clock } from "lucide-react";

interface ComplianceStatusCardProps {
  totalCertificates: number;
  activeCount: number;
  expiringCount: number;
  expiredCount: number;
}

export const ComplianceStatusCard = ({ 
  totalCertificates, 
  activeCount, 
  expiringCount, 
  expiredCount 
}: ComplianceStatusCardProps) => {
  const complianceScore = Math.round((activeCount / totalCertificates) * 100);
  
  return (
    <Card className="bg-gradient-to-br from-white to-blue-50/30 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-blue-600" />
            </div>
            Compliance Status
          </CardTitle>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">{complianceScore}%</div>
            <div className="text-xs text-gray-500">Health Score</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Certificates:</p>
            <p className="text-2xl font-bold text-gray-900">{totalCertificates}</p>
          </div>
          <div className="w-24">
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-blue-600 h-1.5 rounded-full transition-all duration-500" 
                style={{ width: `${complianceScore}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between gap-2">
          <div className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg flex-1">
            <CheckCircle className="h-3 w-3 text-green-600" />
            <div className="text-sm font-semibold text-green-700">{activeCount}</div>
            <div className="text-xs text-green-600">Active</div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-yellow-50 rounded-lg flex-1">
            <Clock className="h-3 w-3 text-yellow-600" />
            <div className="text-sm font-semibold text-yellow-700">{expiringCount}</div>
            <div className="text-xs text-yellow-600">Expiring</div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-red-50 rounded-lg flex-1">
            <AlertTriangle className="h-3 w-3 text-red-600" />
            <div className="text-sm font-semibold text-red-700">{expiredCount}</div>
            <div className="text-xs text-red-600">Expired</div>
          </div>
        </div>
        
        <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};