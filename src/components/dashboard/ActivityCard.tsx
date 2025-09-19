import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
  status: 'pending' | 'completed' | 'urgent';
  icon: ReactNode;
}

interface ActivityCardProps {
  title: string;
  items: ActivityItem[];
  onViewAll?: () => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'urgent': return 'text-red-600 bg-red-50';
    case 'completed': return 'text-green-600 bg-green-50';
    default: return 'text-blue-600 bg-blue-50';
  }
};

export const ActivityCard = ({ title, items, onViewAll }: ActivityCardProps) => (
  <Card className="bg-white border-0 shadow-sm">
    <CardHeader className="pb-3">
      <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {items.slice(0, 4).map((item) => (
        <div key={item.id} className="flex items-start gap-3">
          <div className={`p-2 rounded-lg ${getStatusColor(item.status)}`}>
            {item.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">{item.title}</p>
            <p className="text-xs text-gray-500 mt-1">{item.description}</p>
            <p className="text-xs text-gray-400 mt-1">{item.time}</p>
          </div>
        </div>
      ))}
      {onViewAll && (
        <Button variant="ghost" size="sm" onClick={onViewAll} className="w-full mt-4">
          View All Activities
        </Button>
      )}
    </CardContent>
  </Card>
);