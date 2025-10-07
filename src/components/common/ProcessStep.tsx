import { memo } from "react";
import { CheckCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProcessStepProps {
  id: number;
  title: string;
  description: string;
  difficulty: 'green' | 'yellow' | 'red';
  status: 'completed' | 'current' | 'pending';
  estimatedTime: string;
  isOnline: boolean;
  onClick: (id: number) => void;
  isActive: boolean;
}

const ProcessStep = memo(({ 
  id, 
  title, 
  description, 
  difficulty, 
  status, 
  estimatedTime, 
  isOnline, 
  onClick, 
  isActive 
}: ProcessStepProps) => {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'green': return 'bg-green-500';
      case 'yellow': return 'bg-yellow-500';
      case 'red': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyText = (diff: string) => {
    switch (diff) {
      case 'green': return 'Independent';
      case 'yellow': return 'Partial Support';
      case 'red': return 'Expert Required';
      default: return 'Unknown';
    }
  };

  return (
    <div 
      className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
        isActive 
          ? 'border-blue-500 bg-blue-50' 
          : status === 'completed'
          ? 'border-green-200 bg-green-50'
          : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={() => onClick(id)}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          {status === 'completed' ? (
            <CheckCircle className="h-6 w-6 text-green-500" />
          ) : status === 'current' ? (
            <Clock className="h-6 w-6 text-blue-500" />
          ) : (
            <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getDifficultyColor(difficulty)}`}></div>
              <Badge variant="outline" className="text-xs">
                {getDifficultyText(difficulty)}
              </Badge>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>⏱️ {estimatedTime}</span>
            <span>{isOnline ? '🌐 Online' : '🏢 Offline'}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

ProcessStep.displayName = "ProcessStep";

export default ProcessStep;