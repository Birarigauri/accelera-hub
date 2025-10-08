import { Link } from "react-router-dom";
import { 
  DollarSign, 
  Users, 
  Building2, 
  TrendingUp, 
  Shield, 
  Lightbulb,
  ArrowRight,
  Star,
  ExternalLink,
  UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const OfferingsSection = () => {
  const featuredOfferings = [
    {
      id: "startup-seed-fund",
      title: "Startup India Seed Fund",
      description: "Government seed funding for early-stage startups up to ₹50 lakhs",
      category: "Funding Support",
      icon: DollarSign,
      mode: "external",
      featured: true,
      new: true,
      gradient: "from-green-500 to-green-600"
    },
    {
      id: "mentor-connect",
      title: "Mentor Connect Program",
      description: "1-on-1 mentorship with industry experts and successful entrepreneurs",
      category: "Mentorship",
      icon: Users,
      mode: "internal",
      featured: true,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: "infrastructure-connect",
      title: "Infrastructure Connect",
      description: "Access to co-working spaces, labs, and manufacturing facilities",
      category: "Infrastructure Support",
      icon: Building2,
      mode: "expert",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      id: "market-linkage",
      title: "Market Linkage Portal",
      description: "B2B marketplace connecting buyers and sellers across industries",
      category: "Market Linkages",
      icon: TrendingUp,
      mode: "external",
      featured: true,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: "ipr-helpdesk",
      title: "IPR Helpdesk",
      description: "Patent, trademark, and copyright registration assistance",
      category: "IPR Assistance",
      icon: Shield,
      mode: "expert",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      id: "incubator-network",
      title: "Incubator Network",
      description: "Access to top incubators and accelerator programs nationwide",
      category: "Incubators",
      icon: Lightbulb,
      mode: "external",
      featured: true,
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Other Offerings</h2>
          <p className="text-muted-foreground">
            Explore additional entrepreneurial support programs
          </p>
        </div>
        <div className="hidden sm:block">
          <Badge variant="secondary" className="px-3 py-1">
            18 Programs Available
          </Badge>
        </div>
      </div>

      {/* Offerings Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredOfferings.map((offering) => (
          <Card 
            key={offering.id} 
            className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white border-0 rounded-2xl overflow-hidden"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${offering.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <offering.icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors line-clamp-1">
                      {offering.title}
                    </h3>
                    <div className="flex items-center gap-1 ml-2">
                      {offering.featured && (
                        <Badge className="bg-yellow-100 text-yellow-700 text-xs">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      {offering.new && (
                        <Badge className="bg-green-100 text-green-700 text-xs">New</Badge>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {offering.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {offering.category}
                    </Badge>
                    
                    <Link to={`/offerings/${offering.id}`}>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-xs px-3"
                      >
                        Know More
                        {offering.mode === "external" && <ExternalLink className="h-3 w-3 ml-1" />}
                        {offering.mode === "expert" && <UserCheck className="h-3 w-3 ml-1" />}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Explore All Button */}
      <div className="text-center pt-4">
        <Link to="/offerings-v2">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8"
          >
            Explore All Offerings
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OfferingsSection;