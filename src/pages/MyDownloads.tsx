import { useState } from "react";
import { 
  Search, 
  Download, 
  FileText, 
  Eye, 
  Calendar, 
  Filter,
  ExternalLink,
  File,
  FileImage,
  FileSpreadsheet,
  Folder,
  Clock,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const MyDownloads = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [showPreview, setShowPreview] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<'name' | 'downloadDate'>('downloadDate');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const itemsPerPage = 5;

  // Sample downloaded templates data
  const downloadedTemplates = [
    {
      id: 1,
      name: "Company Registration Certificate",
      type: "Certificate Template",
      category: "certificate",
      downloadDate: "2024-03-20T10:30:00Z",

      fileType: "PDF",
      thumbnail: "/api/placeholder/200/150",
      description: "Official company registration certificate template with your business details pre-filled."
    },
    {
      id: 2,
      name: "GST Registration Form",
      type: "Business Document",
      category: "document",
      downloadDate: "2024-03-18T14:15:00Z",

      fileType: "PDF",
      thumbnail: "/api/placeholder/200/150",
      description: "GST registration application form with all required fields completed."
    },
    {
      id: 3,
      name: "Trade License Application",
      type: "Scheme Form",
      category: "form",
      downloadDate: "2024-03-15T09:45:00Z",

      fileType: "DOCX",
      thumbnail: "/api/placeholder/200/150",
      description: "Municipal trade license application form ready for submission."
    },
    {
      id: 4,
      name: "FSSAI License Certificate",
      type: "Certificate Template",
      category: "certificate",
      downloadDate: "2024-03-10T16:20:00Z",

      fileType: "PDF",
      thumbnail: "/api/placeholder/200/150",
      description: "Food safety license certificate template with business information."
    },
    {
      id: 5,
      name: "Business Plan Template",
      type: "Business Document",
      category: "document",
      downloadDate: "2024-03-05T11:10:00Z",

      fileType: "DOCX",
      thumbnail: "/api/placeholder/200/150",
      description: "Comprehensive business plan template with financial projections."
    }
  ];

  const handleSort = (field: 'name' | 'downloadDate') => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const filteredTemplates = downloadedTemplates
    .filter(t => (filterType === "all" || t.category === filterType) && 
      (!searchQuery || t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.type.toLowerCase().includes(searchQuery.toLowerCase())))
    .sort((a, b) => {
      const order = sortOrder === 'asc' ? 1 : -1;
      if (sortField === 'name') return order * a.name.localeCompare(b.name);
      return order * (new Date(a.downloadDate).getTime() - new Date(b.downloadDate).getTime());
    });

  const totalPages = Math.ceil(filteredTemplates.length / itemsPerPage);
  const paginatedTemplates = filteredTemplates.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case "pdf": return FileText;
      case "docx": case "doc": return File;
      case "xlsx": case "xls": return FileSpreadsheet;
      case "jpg": case "png": case "jpeg": return FileImage;
      default: return File;
    }
  };

  const getFileTypeColor = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case "pdf": return "bg-red-100 text-red-700";
      case "docx": case "doc": return "bg-blue-100 text-blue-700";
      case "xlsx": case "xls": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const handlePreview = (template: any) => {
    setSelectedTemplate(template);
    setShowPreview(true);
  };

  const handleDownload = (template: any) => {
    // Simulate download
    console.log(`Downloading ${template.name}`);
    // In real implementation, trigger actual download
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-6 mb-6 shadow-xl">
            <div className="text-white text-center mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold mb-1">📥 My Downloads</h1>
              <p className="text-blue-100 text-sm sm:text-base">
                Access all the templates you have downloaded previously. Revisit, preview, or download them anytime.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/70" />
                <Input
                  placeholder="Search templates by name or type"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                />
              </div>
              
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="bg-white/20 border-white/30 text-white backdrop-blur-sm">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="certificate">Certificates</SelectItem>
                  <SelectItem value="document">Documents</SelectItem>
                  <SelectItem value="form">Forms</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Empty State */}
          {filteredTemplates.length === 0 && (
            <Card className="text-center p-12 bg-gradient-card border-0 shadow-lg">
              <Folder className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {searchQuery || filterType !== "all" ? "No templates found" : "No templates downloaded yet"}
              </h3>
              <p className="text-gray-600 mb-6">
                {searchQuery || filterType !== "all" 
                  ? "Try adjusting your search or filter criteria"
                  : "Start by downloading templates from our catalog"
                }
              </p>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <ExternalLink className="h-4 w-4 mr-2" />
                Explore Templates
              </Button>
            </Card>
          )}

          {/* Downloaded Templates DataTable */}
          {filteredTemplates.length > 0 && (
            <Card className="bg-white shadow-lg border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200 pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Download className="h-5 w-5 text-blue-600" />
                  </div>
                  Downloaded Templates ({filteredTemplates.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50/50 border-b">
                        <th className="font-semibold text-gray-700 py-4 px-4 text-left">
                          <Button variant="ghost" onClick={() => handleSort('name')} className="hover:bg-transparent font-semibold">
                            Template Details {sortField === 'name' && (sortOrder === 'asc' ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />)}
                          </Button>
                        </th>
                        <th className="font-semibold text-gray-700 py-4 px-4 text-center">Category</th>
                        <th className="font-semibold text-gray-700 py-4 px-4 text-center">
                          <Button variant="ghost" onClick={() => handleSort('downloadDate')} className="hover:bg-transparent font-semibold">
                            Downloaded {sortField === 'downloadDate' && (sortOrder === 'asc' ? <ArrowUp className="ml-2 h-4 w-4" /> : <ArrowDown className="ml-2 h-4 w-4" />)}
                          </Button>
                        </th>
                        <th className="font-semibold text-gray-700 py-4 px-4 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedTemplates.map(template => {
                        const FileIcon = getFileIcon(template.fileType);
                        return (
                          <tr key={template.id} className="hover:bg-blue-50/30 transition-colors border-b border-gray-100">
                            <td className="py-4 px-4">
                              <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <FileIcon className="h-5 w-5 text-white" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1">{template.name}</h3>
                                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{template.description}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-center">
                              <Badge variant="outline" className="text-xs font-medium px-2 py-1 capitalize">{template.category}</Badge>
                            </td>
                            <td className="py-4 px-4 text-center">
                              <div className="text-sm font-medium text-gray-700">{formatDate(template.downloadDate)}</div>
                            </td>
                            <td className="py-4 px-4 text-center">
                              <div className="flex items-center justify-center gap-2">
                                <Button size="sm" variant="outline" className="px-2 py-1.5" onClick={() => handlePreview(template)}>
                                  <Eye className="h-3 w-3" />
                                </Button>
                                <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-3 py-1.5 text-xs transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95" onClick={() => handleDownload(template)}>
                                  <Download className="h-3 w-3 mr-1 animate-bounce" />Download
                                </Button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50/30">
                    <div className="text-sm text-gray-600">
                      Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredTemplates.length)} of {filteredTemplates.length} templates
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1} className="px-3 py-1.5">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      {Array.from({ length: totalPages }, (_, i) => (
                        <Button key={i} variant={currentPage === i + 1 ? "default" : "outline"} size="sm" onClick={() => setCurrentPage(i + 1)} className="px-3 py-1.5 min-w-[32px]">
                          {i + 1}
                        </Button>
                      ))}
                      <Button variant="outline" size="sm" onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === totalPages} className="px-3 py-1.5">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}



          {/* Preview Modal */}
          <Dialog open={showPreview} onOpenChange={setShowPreview}>
            <DialogContent className="sm:max-w-5xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-gray-900">
                  Template Preview
                </DialogTitle>
              </DialogHeader>
              
              {selectedTemplate && (
                <div className="space-y-4 py-4">
                  {/* Template Header */}
                 

                  {/* Template Preview Area */}
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <iframe 
                      src={selectedTemplate.fileType === 'PDF' ? '/ane-portal/Sample file.pdf' : undefined}
                      className="w-full h-[500px] border-0"
                      title="Template Preview"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setShowPreview(false)}
                    >
                      Close
                    </Button>
                    <Button 
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                      onClick={() => {
                        handleDownload(selectedTemplate);
                        setShowPreview(false);
                      }}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Re-download Template
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </AppLayout>
  );
};

export default MyDownloads;