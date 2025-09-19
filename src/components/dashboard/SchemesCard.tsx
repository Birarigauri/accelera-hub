import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Scheme {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
}

interface SchemesCardProps {
  schemes: Scheme[];
}

export const SchemesCard = ({ schemes }: SchemesCardProps) => (
  <Card className="bg-white border-0 shadow-sm">
    <CardHeader className="pb-3">
      <CardTitle className="text-lg font-semibold text-gray-900">Eligible Schemes for You</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {schemes.slice(0, 6).map((scheme) => (
          <div key={scheme.id} className="p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl mb-2">{scheme.icon}</div>
            <h4 className="font-medium text-sm mb-2 break-words">{scheme.title}</h4>
            <p className="text-xs text-gray-600 mb-3 break-words">{scheme.description}</p>
            <div className="flex flex-col sm:flex-row gap-2 mb-3">
              <Button size="sm" variant="outline" className="text-xs">Know More</Button>
              <Button size="sm" variant="outline" className="text-xs">Details</Button>
              <Button size="sm" className="text-xs bg-blue-600">Apply Now</Button>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);