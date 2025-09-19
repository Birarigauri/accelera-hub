import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  onClick: () => void;
}

interface QuickActionCardProps {
  title: string;
  actions: QuickAction[];
}

export const QuickActionCard = ({ title, actions }: QuickActionCardProps) => (
  <Card className="bg-white border-0 shadow-sm">
    <CardContent className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Button
            key={action.id}
            variant="outline"
            onClick={action.onClick}
            className="h-auto p-4 flex flex-col items-center gap-2 hover:shadow-sm"
          >
            <div className={`p-2 rounded-lg ${action.color}`}>
              {action.icon}
            </div>
            <div className="text-center">
              <p className="text-sm font-medium">{action.title}</p>
              <p className="text-xs text-gray-500">{action.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </CardContent>
  </Card>
);