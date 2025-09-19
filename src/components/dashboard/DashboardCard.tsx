import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface DashboardCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  count?: string | number;
  countLabel?: string;
  gradient: string;
  children: ReactNode;
  onRefresh?: () => void;
}

export const DashboardCard = ({ 
  title, 
  subtitle, 
  icon, 
  count, 
  countLabel, 
  gradient, 
  children, 
  onRefresh 
}: DashboardCardProps) => (
  <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg transition-all duration-300">
    <CardHeader className={`border-b border-gray-100/50 p-4 ${gradient}`}>
      <CardTitle className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
            {icon}
          </div>
          <div className="flex-1">
            <div className="text-base font-medium text-gray-900">{title}</div>
            <div className="text-xs text-gray-600">{subtitle}</div>
          </div>
        </div>
        {(count || onRefresh) && (
          <div className="flex items-center gap-3">
            {count && (
              <div className="text-right">
                <div className="text-lg font-light text-gray-600">{count}</div>
                {countLabel && <div className="text-xs text-gray-500">{countLabel}</div>}
              </div>
            )}
            {onRefresh && (
              <Button size="sm" variant="outline" className="p-2" onClick={onRefresh}>
                <RefreshCw className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </CardTitle>
    </CardHeader>
    <CardContent className="p-4">
      {children}
    </CardContent>
  </Card>
);