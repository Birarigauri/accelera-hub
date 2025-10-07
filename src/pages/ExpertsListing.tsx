import { useState, memo } from "react";
import { 
  CheckCircle, 
  MessageCircle, 
  Eye, 
  Star, 
  Phone, 
  Filter,
  Search,
  MapPin,
  Clock
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AppLayout from "@/components/layout/AppLayout";
import Header from "@/components/layout/Header";

const ExpertsListing = memo(() => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');

  const experts = [
    {
      name: "CA Rajesh Kumar",
      title: "GST Specialist",
      experience: "5+ years",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      expertise: ["GST Registration", "Tax Filing", "Compliance"],
      color: "blue",
      verified: true,
      location: "Mumbai",
      category: "Tax"
    },
    {
      name: "Adv. Priya Sharma",
      title: "Legal Compliance Expert",
      experience: "7+ years",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      expertise: ["Corporate Law", "Contracts", "IPR"],
      color: "green",
      verified: true,
      location: "Delhi",
      category: "Legal"
    },
    {
      name: "CS Amit Patel",
      title: "Company Secretary",
      experience: "6+ years",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      expertise: ["ROC Filing", "Board Meetings", "Annual Returns"],
      color: "purple",
      verified: true,
      location: "Bangalore",
      category: "Corporate"
    },
    {
      name: "CA Sneha Gupta",
      title: "Tax Consultant",
      experience: "8+ years",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      expertise: ["Income Tax", "TDS", "Audit"],
      color: "orange",
      verified: true,
      location: "Chennai",
      category: "Tax"
    },
    {
      name: "CA Vikram Singh",
      title: "Financial Advisor",
      experience: "9+ years",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      expertise: ["Financial Planning", "Investment", "Loans"],
      color: "blue",
      verified: true,
      location: "Mumbai",
      category: "Finance"
    },
    {
      name: "Adv. Meera Joshi",
      title: "Business Lawyer",
      experience: "6+ years",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      expertise: ["Business Law", "Litigation", "Arbitration"],
      color: "green",
      verified: true,
      location: "Pune",
      category: "Legal"
    }
  ];

  const categories = ['All', 'Tax', 'Legal', 'Corporate', 'Finance'];
  const locations = ['All', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune'];
  const ratings = ['All', '4.5+', '4.7+', '4.9+'];

  const filteredExperts = experts.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         expert.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || expert.category === selectedCategory;
    const matchesLocation = selectedLocation === 'All' || expert.location === selectedLocation;
    const matchesRating = selectedRating === 'All' || 
                         (selectedRating === '4.5+' && expert.rating >= 4.5) ||
                         (selectedRating === '4.7+' && expert.rating >= 4.7) ||
                         (selectedRating === '4.9+' && expert.rating >= 4.9);
    
    return matchesSearch && matchesCategory && matchesLocation && matchesRating;
  });

  const colors = {
    blue: { bg: 'from-blue-500 to-blue-600', light: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    green: { bg: 'from-green-500 to-green-600', light: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
    purple: { bg: 'from-purple-500 to-purple-600', light: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    orange: { bg: 'from-orange-500 to-orange-600', light: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' }
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header />
        
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">🧑‍💼 Expert Directory</h1>

          </div>

          {/* Search & Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search experts..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Category Filter */}
              <select
                className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              {/* Location Filter */}
              <select
                className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              
              {/* Rating Filter */}
              <select
                className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
              >
                {ratings.map(rating => (
                  <option key={rating} value={rating}>{rating}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredExperts.length}</span> experts
            </p>
          </div>

          {/* Experts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperts.map((expert, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group">
                {/* Header with gradient */}
                <div className={`h-20 bg-gradient-to-r ${colors[expert.color].bg} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <img 
                        src={expert.image} 
                        alt={expert.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-xl"
                      />
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                      {expert.verified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="pt-10 pb-6 px-6 text-center">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{expert.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{expert.title}</p>
                  
                  {/* Location & Experience */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-gray-500" />
                      <span className="text-xs text-gray-500">{expert.location}</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-gray-500" />
                      <span className="text-xs text-gray-500">{expert.experience}</span>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">{expert.rating}</span>
                    </div>
                    <Badge variant="outline" className={`text-xs ${colors[expert.color].text} ${colors[expert.color].border}`}>
                      {expert.category}
                    </Badge>
                  </div>
                  
                  {/* Expertise */}
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {expert.expertise.slice(0, 2).map((skill, skillIndex) => (
                      <span key={skillIndex} className={`text-xs px-3 py-1 rounded-full font-medium ${colors[expert.color].light} ${colors[expert.color].text} ${colors[expert.color].border} border`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Connect Actions */}
                  <div className="space-y-3">
                    <Button 
                      className={`w-full bg-gradient-to-r ${colors[expert.color].bg} hover:shadow-lg text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:scale-105`}
                      onClick={() => {
                        setSuccessMessage(`Connection request submitted successfully! ${expert.name} will contact you within 2-4 hours to discuss your compliance requirements.`);
                        setShowSuccessAlert(true);
                      }}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Connect Now
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full text-xs py-2 rounded-lg border-gray-200 hover:bg-gray-50"
                      onClick={() => setSelectedExpert(expert)}
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredExperts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No experts found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>

        {/* Expert Profile Modal */}
        {selectedExpert && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar">
              {/* Header */}
              <div className={`h-32 bg-gradient-to-r ${colors[selectedExpert.color].bg} relative`}>
                <button 
                  onClick={() => setSelectedExpert(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30"
                >
                  ×
                </button>
                <div className="absolute -bottom-12 left-8">
                  <img 
                    src={selectedExpert.image} 
                    alt={selectedExpert.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="pt-16 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{selectedExpert.name}</h2>
                    <p className="text-lg text-gray-600 mb-2">{selectedExpert.title}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-semibold">{selectedExpert.rating}</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-600">{selectedExpert.experience}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">Online</span>
                  </div>
                </div>
                
                {/* About */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Leading compliance consultancy with 10+ years of expertise in business registrations, trade licenses, and regulatory compliance. Specialized in helping businesses navigate complex regulatory requirements with proven track record of success.
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">99%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">650+</div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                </div>
                
                {/* Services */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Services Offered</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['IEC Application', 'Business Registration', 'Compliance Management', 'Legal Advisory'].map((service, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Certifications & Languages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {['CA', 'CS', 'LLB', 'DGFT Expert'].map((cert, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {['English', 'Hindi', 'Kannada', 'Tamil'].map((lang, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Contact */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Phone className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700">+91 76543****</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <MessageCircle className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700">support@compliancehub.co.in</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    className={`flex-1 bg-gradient-to-r ${colors[selectedExpert.color].bg} text-white font-semibold py-3 rounded-xl`}
                    onClick={() => {
                      setSuccessMessage(`Connection request submitted successfully! ${selectedExpert.name} will contact you within 2-4 hours to discuss your compliance requirements.`);
                      setSelectedExpert(null);
                      setShowSuccessAlert(true);
                    }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Connect Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success Alert Modal */}
        {showSuccessAlert && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center shadow-2xl">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Success!</h2>
              
              {/* Message */}
              <p className="text-gray-600 mb-8 leading-relaxed">{successMessage}</p>
              
              {/* OK Button */}
              <Button 
                onClick={() => setShowSuccessAlert(false)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl text-lg"
              >
                OK
              </Button>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
});

ExpertsListing.displayName = "ExpertsListing";

export default ExpertsListing;