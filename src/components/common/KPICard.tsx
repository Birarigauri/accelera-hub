import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface KPICardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  status?: string;
  statusColor?: string;
  gradientColor?: string;
}

const KPICard = memo(({ icon, value, label, status, statusColor, gradientColor }: KPICardProps) => (
  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
    <CardContent className="p-6 text-center">
      <div className="mb-4">{icon}</div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-sm text-gray-600 mb-3">{label}</div>
      {status && (
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusColor || 'bg-gray-100 text-gray-800'}`}>
          {status}
        </div>
      )}
    </CardContent>
  </Card>
));

KPICard.displayName = "KPICard";

export default KPICard;