import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, AlertTriangle, ExternalLink } from "lucide-react";

interface ComplianceItemProps {
  item: {
    id: number;
    name: string;
    type: string;
    status: string;
    dueDate: string;
  };
  getStatusColor: (status: string) => string;
}

export const ComplianceItem = ({ item, getStatusColor }: ComplianceItemProps) => (
  <div className="group p-3 bg-gradient-to-r from-gray-50/50 to-white rounded-lg border border-gray-100/50 hover:shadow-md transition-all duration-200 cursor-pointer">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-3">
        <div className={`w-3 h-3 rounded-full ${
          item.status === 'overdue' ? 'bg-red-500 animate-pulse' : 
          item.status === 'pending' ? 'bg-yellow-500' : 
          'bg-green-500'
        }`}></div>
        <div>
          <div className="font-medium text-sm text-gray-900">{item.name}</div>
          <div className="text-xs text-gray-600">{item.type}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge className={`${getStatusColor(item.status)} px-2 py-1 text-xs`}>
          {item.status.toUpperCase()}
        </Badge>
        <Button size="sm" variant="ghost" className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="h-3 w-3" />
        </Button>
      </div>
    </div>
    <div className="flex items-center justify-between text-xs">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-gray-500">
          <Calendar className="h-3 w-3" />
          <span>Due: {item.dueDate}</span>
        </div>
        {item.status === 'overdue' && (
          <div className="flex items-center gap-1 text-red-600">
            <AlertTriangle className="h-3 w-3" />
            <span>3 days overdue</span>
          </div>
        )}
      </div>
      <Button size="sm" variant="outline" className="px-2 py-1 text-xs h-6">
        {item.status === 'completed' ? 'View' : 'Action'}
      </Button>
    </div>
  </div>
);