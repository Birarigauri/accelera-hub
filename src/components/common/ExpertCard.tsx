import { memo } from "react";
import { User, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ExpertCardProps {
  name: string;
  title: string;
  experience: string;
  rating: number;
  color: string;
  onConnect: () => void;
}

const ExpertCard = memo(({ name, title, experience, rating, color, onConnect }: ExpertCardProps) => (
  <Card className={`border border-gray-200 hover:shadow-lg hover:border-${color}-300 transition-all duration-300 transform hover:-translate-y-1`}>
    <CardContent className="p-6 text-center">
      <div className={`w-16 h-16 bg-gradient-to-br from-${color}-100 to-${color}-200 rounded-full mx-auto mb-4 flex items-center justify-center shadow-md`}>
        <User className={`h-8 w-8 text-${color}-600`} />
      </div>
      <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-3">{title} • {experience}</p>
      <div className="flex items-center justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
        <span className="text-sm text-gray-600 ml-2 font-semibold">{rating}</span>
      </div>
      <Button 
        size="sm" 
        className={`w-full bg-${color}-600 hover:bg-${color}-700 text-white font-semibold`}
        onClick={onConnect}
      >
        Connect Now
      </Button>
    </CardContent>
  </Card>
));

ExpertCard.displayName = "ExpertCard";

export default ExpertCard;