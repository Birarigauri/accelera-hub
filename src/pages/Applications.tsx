import { useState } from "react";
import { Eye, Filter, Search, Calendar, User, Building, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import AppLayout from "@/components/layout/AppLayout";
import Header from "@/components/layout/Header";

const applicationsData = [
  {
    id: "APP001",
    title: "Startup India Registration",
    applicantName: "Rajesh Kumar",
    businessName: "TechVision Solutions",
    submittedDate: "2024-01-15",
    status: "approved",
    category: "Startup Registration",
    amount: "₹0",
    description: "Application for startup registration under Startup India scheme"
  },
  {
    id: "APP002", 
    title: "MSME Loan Application",
    applicantName: "Priya Sharma",
    businessName: "Sharma Industries",
    submittedDate: "2024-01-12",
    status: "pending",
    category: "Financial Assistance",
    amount: "₹5,00,000",
    description: "Loan application for business expansion under MSME scheme"
  },
  {
    id: "APP003",
    title: "Women Entrepreneur Scheme",
    applicantName: "Meera Patel",
    businessName: "Digital Marketing Pro",
    submittedDate: "2024-01-10",
    status: "under_review",
    category: "Women Empowerment",
    amount: "₹2,50,000",
    description: "Grant application under women entrepreneur development scheme"
  },
  {
    id: "APP004",
    title: "Export Promotion Scheme",
    applicantName: "Vikram Singh",
    businessName: "Global Exports Ltd",
    submittedDate: "2024-01-08",
    status: "rejected",
    category: "Export Promotion",
    amount: "₹10,00,000",
    description: "Application for export promotion incentives"
  },
  {
    id: "APP005",
    title: "Technology Upgrade Scheme",
    applicantName: "Anita Desai",
    businessName: "Manufacturing Hub",
    submittedDate: "2024-01-05",
    status: "approved",
    category: "Technology",
    amount: "₹7,50,000",
    description: "Subsidy for technology upgradation in manufacturing"
  }
];

const statusConfig = {
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  under_review: { label: "Under Review", color: "bg-blue-100 text-blue-800" },
  approved: { label: "Approved", color: "bg-green-100 text-green-800" },
  rejected: { label: "Rejected", color: "bg-red-100 text-red-800" }
};

const Applications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredApplications = applicationsData.filter(app => {
    const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.businessName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Applications</h1>
            <p className="text-muted-foreground">Manage and track all your scheme applications</p>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search applications..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-2 border rounded-md bg-background"
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="under_review">Under Review</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Applications List */}
          <div className="grid gap-6">
            {filteredApplications.map((application) => (
              <Card key={application.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{application.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {application.applicantName}
                        </div>
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          {application.businessName}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(application.submittedDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <Badge className={statusConfig[application.status as keyof typeof statusConfig].color}>
                      {statusConfig[application.status as keyof typeof statusConfig].label}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Category</p>
                      <p className="font-medium">{application.category}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Amount</p>
                      <p className="font-medium">{application.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Application ID</p>
                      <p className="font-medium">{application.id}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{application.description}</p>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredApplications.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No applications found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Applications;