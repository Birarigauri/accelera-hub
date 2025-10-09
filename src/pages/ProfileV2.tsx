import { useState } from "react";
import { 
  Camera, 
  MapPin, 
  Calendar, 
  Building, 
  Users, 
  Award, 
  CheckCircle, 
  Edit, 
  Plus, 
  ExternalLink,
  Mail,
  Phone,
  Globe,
  Briefcase,
  GraduationCap,
  Star,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const ProfileV2 = () => {
  const [isEditing, setIsEditing] = useState(false);

  const profile = {
    name: "Rajesh Kumar",
    title: "Founder & CEO at TechSolutions India",
    location: "Mumbai, Maharashtra, India",
    connections: 500,
    followers: 1200,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=300&fit=crop",
    about: "Passionate entrepreneur with 10+ years of experience in technology and business development. Leading digital transformation initiatives for SMEs across India. Committed to fostering innovation and creating sustainable business solutions.",
    eKycVerified: true,
    premiumMember: true,
    trustScore: 98
  };

  const experience = [
    {
      id: 1,
      title: "Founder & CEO",
      company: "TechSolutions India Pvt Ltd",
      duration: "Jan 2020 - Present",
      location: "Mumbai, India",
      description: "Leading a team of 50+ professionals in delivering enterprise software solutions. Scaled company revenue from ₹2Cr to ₹25Cr.",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=50&h=50&fit=crop"
    },
    {
      id: 2,
      title: "Senior Business Manager",
      company: "InfoTech Solutions",
      duration: "Mar 2015 - Dec 2019",
      location: "Pune, India",
      description: "Managed key client relationships and drove business growth initiatives. Led digital transformation projects for 100+ SME clients.",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=50&h=50&fit=crop"
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Business Administration",
      school: "Indian Institute of Management, Mumbai",
      year: "2013 - 2015",
      description: "Specialized in Entrepreneurship and Innovation Management"
    },
    {
      id: 2,
      degree: "Bachelor of Technology",
      school: "Indian Institute of Technology, Delhi",
      year: "2009 - 2013",
      description: "Computer Science and Engineering"
    }
  ];

  const skills = [
    { name: "Business Strategy", endorsements: 45 },
    { name: "Digital Transformation", endorsements: 38 },
    { name: "Team Leadership", endorsements: 52 },
    { name: "Product Management", endorsements: 29 },
    { name: "Startup Consulting", endorsements: 34 },
    { name: "Technology Innovation", endorsements: 41 }
  ];

  const achievements = [
    { title: "Entrepreneur of the Year 2023", organization: "Mumbai Business Awards" },
    { title: "Top 40 Under 40", organization: "Business Today Magazine" },
    { title: "Digital Innovation Leader", organization: "CII Maharashtra" }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8 max-w-4xl">
          {/* Profile Header Card */}
          <Card className="mb-6 overflow-hidden">
            {/* Cover Image */}
            <div className="relative h-48 sm:h-64">
              <img 
                src={profile.coverImage} 
                alt="Cover" 
                className="w-full h-full object-cover"
              />
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute top-4 right-4 bg-white/80 hover:bg-white"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>

            <CardContent className="relative px-6 pb-6">
              {/* Profile Picture */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-16 sm:-mt-20">
                <div className="relative">
                  <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                    <AvatarImage src={profile.avatar} />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute bottom-2 right-2 w-8 h-8 p-0 bg-white shadow-md hover:bg-gray-50"
                  >
                    <Camera className="h-3 w-3" />
                  </Button>
                </div>

                <div className="flex-1 sm:mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-2xl sm:text-3xl font-bold">{profile.name}</h1>
                        {profile.eKycVerified && (
                          <CheckCircle className="h-6 w-6 text-blue-500" />
                        )}
                        {profile.premiumMember && (
                          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                            <Award className="h-3 w-3 mr-1" />
                            Premium
                          </Badge>
                        )}
                      </div>
                      <p className="text-lg text-gray-700 mb-2">{profile.title}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {profile.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {profile.connections}+ connections
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Mail className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                      <Button variant="default" size="sm">
                        <Users className="h-4 w-4 mr-2" />
                        Connect
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Score */}
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-800">Verified Professional</span>
                  </div>
                
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* About Section */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">About</h2>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{profile.about}</p>
                </CardContent>
              </Card>

              {/* Experience Section */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Experience</h2>
                    <Button variant="ghost" size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {experience.map((exp) => (
                      <div key={exp.id} className="flex gap-4">
                        <img 
                          src={exp.logo} 
                          alt={exp.company}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <p className="text-gray-700 font-medium">{exp.company}</p>
                          <p className="text-sm text-gray-600 mb-2">{exp.duration} • {exp.location}</p>
                          <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Education Section */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Education</h2>
                    <Button variant="ghost" size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {education.map((edu) => (
                      <div key={edu.id} className="flex gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
                          <GraduationCap className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{edu.degree}</h3>
                          <p className="text-gray-700 font-medium">{edu.school}</p>
                          <p className="text-sm text-gray-600 mb-2">{edu.year}</p>
                          <p className="text-gray-700 text-sm">{edu.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Skills Section */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Skills</h2>
                    <Button variant="ghost" size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {skills.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">{skill.endorsements}</span>
                          <Button variant="outline" size="sm" className="h-6 px-2 text-xs">
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Achievements</h2>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">{achievement.title}</p>
                          <p className="text-xs text-gray-600">{achievement.organization}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Analytics */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Profile Analytics</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Profile views</span>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="font-semibold">1,234</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Search appearances</span>
                      <span className="font-semibold">567</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Post impressions</span>
                      <span className="font-semibold">8,901</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfileV2;