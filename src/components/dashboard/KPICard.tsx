import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface KPICardProps {
  icon: ReactNode;
  value: string | number;
  label: string;
  status: string;
  statusColor: string;
  gradientColor: string;
}

export const KPICard = ({ icon, value, label, status, statusColor, gradientColor }: KPICardProps) => (
  <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 group">
    <CardContent className="p-4 text-center relative overflow-hidden">
      <div className={`absolute top-0 left-0 w-full h-1 ${gradientColor}`}></div>
      <div className="mb-2">{icon}</div>
      <div className="text-xl font-light text-gray-900 mb-1 group-hover:scale-105 transition-transform">{value}</div>
      <div className="text-xs text-gray-600 font-medium mb-2">{label}</div>
      <div className="flex items-center justify-center space-x-1">
        <div className={`w-1.5 h-1.5 rounded-full ${statusColor} ${status === 'Urgent' ? 'animate-pulse' : ''}`}></div>
        <span className={`text-xs font-medium ${statusColor.replace('bg-', 'text-')}`}>{status}</span>
      </div>
    </CardContent>
  </Card>
);