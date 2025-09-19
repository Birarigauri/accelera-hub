import { Button } from "@/components/ui/button";

interface ComplianceTabProps {
  activeTab: string;
  tabKey: string;
  count: number;
  label: string;
  shortLabel?: string;
  colorClass: string;
  onClick: (tab: string) => void;
}

export const ComplianceTab = ({ 
  activeTab, 
  tabKey, 
  count, 
  label, 
  shortLabel, 
  colorClass, 
  onClick 
}: ComplianceTabProps) => (
  <Button 
    size="sm" 
    onClick={() => onClick(tabKey)}
    className={`text-xs px-2 sm:px-3 py-1.5 transition-all duration-200 ${
      activeTab === tabKey 
        ? `bg-white shadow-sm ${colorClass}` 
        : 'bg-transparent text-gray-600 hover:text-gray-900'
    }`}
  >
    <span className="hidden sm:inline">{label}</span>
    {shortLabel && <span className="sm:hidden">{shortLabel}</span>}
    <span className="ml-1">({count})</span>
  </Button>
);