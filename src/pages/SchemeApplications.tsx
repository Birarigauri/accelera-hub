import { useState } from "react";
import { Eye, Edit, Plus, Filter, Search, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";
import { formatDate } from "@/lib/dateUtils";

const SchemeApplications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const applications = [
    {
      id: "APP001",
      schemeName: "MSME Technology Upgradation Scheme",
      schemeId: "MSME-TECH-2024",
      appliedDate: "2024-01-15",
      lastDate: "2024-02-28",
      status: "under_review",
      amount: "₹35,00,000",
      progress: 85
    },
    {
      id: "APP002", 
      schemeName: "Startup India Seed Fund",
      schemeId: "STARTUP-SEED-2024",
      appliedDate: "2024-01-10",
      lastDate: "2024-03-15",
      status: "approved",
      amount: "₹25,00,000",
      progress: 100
    },
    {
      id: "APP003",
      schemeName: "Credit Guarantee Fund Scheme",
      schemeId: "CGF-2024",
      appliedDate: "2024-01-20",
      lastDate: "2024-02-20",
      status: "draft",
      amount: "₹15,00,000",
      progress: 45
    },
    {
      id: "APP004",
      schemeName: "Women Entrepreneur Scheme",
      schemeId: "WES-2024", 
      appliedDate: "2024-01-08",
      lastDate: "2024-03-31",
      status: "rejected",
      amount: "₹20,00,000",
      progress: 100
    },
    {
      id: "APP005",
      schemeName: "Digital India Initiative",
      schemeId: "DII-2024",
      appliedDate: "2024-01-25",
      lastDate: "2024-04-10",
      status: "submitted",
      amount: "₹40,00,000",
      progress: 90
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-700 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-700 border-red-200';
      case 'under_review': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'submitted': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'draft': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved': return 'Approved';
      case 'rejected': return 'Rejected';
      case 'under_review': return 'In Progress';
      case 'submitted': return 'Submitted';
      case 'draft': return 'Draft';
      default: return status;
    }
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.schemeName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-4 py-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-6 mb-6 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-white">
                <h1 className="text-2xl sm:text-3xl font-bold mb-1">📋 My Applications</h1>
                <p className="text-blue-100 text-sm sm:text-base">Track and manage your scheme applications</p>
              </div>
              {/* <Link to="/scheme-application">
                <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm">
                  <Plus className="h-4 w-4 mr-1" />
                  New Application
                </Button>
              </Link> */}
            </div>
          </div>

          {/* Search Filter */}
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-9"
                />
              </div>
            </CardContent>
          </Card>

          {/* Compact Applications List */}
          <div className="space-y-3">
            {filteredApplications.map((application) => (
              <Card key={application.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    {/* Left: Application Info */}
                    <div className="flex-1">
                      <div className="mb-2">
                        <h3 className="font-semibold text-base">{application.schemeName}</h3>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Application Date: <span className="font-medium text-gray-900">{formatDate(application.appliedDate)}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Last Date: <span className="font-medium text-gray-900">{formatDate(application.lastDate)}</span>
                        </span>
                      </div>
                    </div>

                    {/* Center: Circular Progress */}
                    {/* <div className="flex items-center gap-3 mx-4">
                      <div className="relative w-10 h-10">
                        <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-gray-200"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-blue-500"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeDasharray={`${application.progress}, 100`}
                            strokeLinecap="round"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-semibold text-blue-600">{application.progress}%</span>
                        </div>
                      </div>
                    </div> */}

                    {/* Right: Actions */}
                    <div className="flex gap-2">
                      <Link to={`/view-application/${application.id}`}>
                        <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      {/* {(application.status === 'draft' || application.status === 'submitted') && (
                        <Link to="/scheme-application">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                        </Link>
                      )} */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredApplications.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No applications found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchTerm 
                    ? 'Try adjusting your search criteria'
                    : 'You haven\'t submitted any applications yet'
                  }
                </p>
                <Link to="/scheme-application">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Application
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default SchemeApplications;