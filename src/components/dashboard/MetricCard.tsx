import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
}

export const MetricCard = ({ title, value, icon, trend, className = "" }: MetricCardProps) => (
  <Card className={`bg-white border-0 shadow-sm hover:shadow-md transition-shadow ${className}`}>
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {trend && (
            <p className={`text-sm mt-1 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.isPositive ? '↗' : '↘'} {trend.value}
            </p>
          )}
        </div>
        <div className="text-blue-600">{icon}</div>
      </div>
    </CardContent>
  </Card>
);