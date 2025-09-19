import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, AlertTriangle, Bell } from "lucide-react";

interface Alert {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'central' | 'state';
}

interface AlertsCardProps {
  alerts: Alert[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const AlertsCard = ({ alerts, activeTab, onTabChange }: AlertsCardProps) => {
  const filteredAlerts = activeTab === 'all' ? alerts : alerts.filter(alert => alert.type === activeTab);
  
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
            <Bell className="h-3 w-3 text-blue-600" />
          </div>
          Alerts & Notifications
        </CardTitle>
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1 mt-3">
          <Button 
            size="sm" 
            onClick={() => onTabChange('all')}
            className={`text-xs px-3 py-1.5 transition-all duration-200 relative overflow-hidden hover:bg-transparent ${
              activeTab === 'all' 
                ? 'bg-white shadow-md text-gray-900 border border-gray-200' 
                : 'bg-transparent text-gray-600'
            }`}
          >
            All ({alerts.length})
            {activeTab === 'all' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
            )}
          </Button>
          <Button 
            size="sm" 
            onClick={() => onTabChange('central')}
            className={`text-xs px-3 py-1.5 transition-all duration-200 relative overflow-hidden hover:bg-transparent ${
              activeTab === 'central' 
                ? 'bg-blue-50 shadow-md text-blue-700 border border-blue-200' 
                : 'bg-transparent text-gray-600'
            }`}
          >
            Central ({alerts.filter(a => a.type === 'central').length})
            {activeTab === 'central' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
            )}
          </Button>
          <Button 
            size="sm" 
            onClick={() => onTabChange('state')}
            className={`text-xs px-3 py-1.5 transition-all duration-200 relative overflow-hidden hover:bg-transparent ${
              activeTab === 'state' 
                ? 'bg-green-50 shadow-md text-green-700 border border-green-200' 
                : 'bg-transparent text-gray-600'
            }`}
          >
            State ({alerts.filter(a => a.type === 'state').length})
            {activeTab === 'state' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"></div>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {filteredAlerts.length === 0 ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Bell className="h-6 w-6 text-gray-400" />
            </div>
            <p className="text-sm text-gray-500">No notifications found</p>
          </div>
        ) : (
          filteredAlerts.slice(0, 3).map((alert) => (
            <div key={alert.id} className="flex items-start gap-3 p-3 bg-gradient-to-r from-gray-50/50 to-white rounded-lg border border-gray-100 hover:shadow-sm transition-all">
              <div className={`p-1.5 rounded-lg flex-shrink-0 ${
                alert.type === 'central' ? 'bg-blue-100' : 'bg-green-100'
              }`}>
                <Clock className={`h-4 w-4 ${
                  alert.type === 'central' ? 'text-blue-600' : 'text-green-600'
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <p className="text-sm font-medium text-gray-900 break-words">{alert.title}</p>
                  <Badge className={`ml-2 text-xs px-2 py-0.5 flex-shrink-0 ${
                    alert.type === 'central' 
                      ? 'bg-blue-100 text-blue-800 border-blue-200' 
                      : 'bg-green-100 text-green-800 border-green-200'
                  }`}>
                    {alert.type === 'central' ? 'Central' : 'State'}
                  </Badge>
                </div>
                <p className="text-xs text-gray-600 mt-1 break-words line-clamp-2">{alert.description}</p>
                <p className="text-xs text-gray-400 mt-2">{alert.time}</p>
              </div>
            </div>
          ))
        )}
        <Button variant="ghost" size="sm" className="w-full text-blue-600">
          View All Alerts ({filteredAlerts.length > 3 ? filteredAlerts.length - 3 : 0} more)
        </Button>
      </CardContent>
    </Card>
  );
};