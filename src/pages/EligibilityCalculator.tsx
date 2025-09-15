import { useState } from "react";
import { Calculator, CheckCircle, XCircle, Info, ArrowRight, Building, Users, DollarSign, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";

const EligibilityCalculator = () => {
  const [formData, setFormData] = useState({
    businessType: "",
    annualTurnover: "",
    employeeCount: "",
    location: "",
    industry: "",
    yearOfEstablishment: ""
  });
  const [results, setResults] = useState<any[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const businessTypes = [
    "Micro Enterprise",
    "Small Enterprise", 
    "Medium Enterprise",
    "Startup",
    "Partnership Firm",
    "Private Limited Company",
    "LLP"
  ];

  const industries = [
    "Manufacturing",
    "Services", 
    "Trading",
    "Technology",
    "Healthcare",
    "Education",
    "Agriculture",
    "Textile"
  ];

  const schemes = [
    {
      id: 1,
      name: "MSME Technology Upgradation Scheme",
      eligibility: { turnover: 50000000, employees: 50, type: ["Micro Enterprise", "Small Enterprise"] },
      benefits: "Up to ₹1 Crore subsidy",
      match: 0
    },
    {
      id: 2, 
      name: "Startup India Seed Fund",
      eligibility: { turnover: 25000000, employees: 25, type: ["Startup"] },
      benefits: "₹20 Lakh to ₹5 Crore funding",
      match: 0
    },
    {
      id: 3,
      name: "Credit Guarantee Fund Scheme",
      eligibility: { turnover: 100000000, employees: 100, type: ["Micro Enterprise", "Small Enterprise", "Medium Enterprise"] },
      benefits: "Collateral-free loans up to ₹2 Crore",
      match: 0
    }
  ];

  const calculateEligibility = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const eligibleSchemes = schemes.map(scheme => {
        let matchScore = 0;
        
        // Business type match
        if (scheme.eligibility.type.includes(formData.businessType)) {
          matchScore += 40;
        }
        
        // Turnover match
        const turnover = parseInt(formData.annualTurnover);
        if (turnover <= scheme.eligibility.turnover) {
          matchScore += 30;
        }
        
        // Employee count match
        const employees = parseInt(formData.employeeCount);
        if (employees <= scheme.eligibility.employees) {
          matchScore += 30;
        }
        
        return { ...scheme, match: matchScore };
      }).sort((a, b) => b.match - a.match);
      
      setResults(eligibleSchemes);
      setIsCalculating(false);
    }, 2000);
  };

  const getMatchColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-100";
    if (score >= 60) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">Eligibility Calculator</h1>
                <p className="text-muted-foreground">Check your eligibility for government schemes and funding</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle>Business Information</CardTitle>
                  <CardDescription>
                    Provide your business details to calculate scheme eligibility
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Business Type *</Label>
                      <select 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        value={formData.businessType}
                        onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      >
                        <option value="">Select business type</option>
                        {businessTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Industry *</Label>
                      <select 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        value={formData.industry}
                        onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      >
                        <option value="">Select industry</option>
                        {industries.map(industry => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Annual Turnover (₹) *</Label>
                      <Input 
                        type="number"
                        placeholder="Enter annual turnover"
                        value={formData.annualTurnover}
                        onChange={(e) => setFormData({...formData, annualTurnover: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Number of Employees *</Label>
                      <Input 
                        type="number"
                        placeholder="Enter employee count"
                        value={formData.employeeCount}
                        onChange={(e) => setFormData({...formData, employeeCount: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Location *</Label>
                      <Input 
                        placeholder="Enter city/state"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Year of Establishment</Label>
                      <Input 
                        type="number"
                        placeholder="Enter year"
                        value={formData.yearOfEstablishment}
                        onChange={(e) => setFormData({...formData, yearOfEstablishment: e.target.value})}
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={calculateEligibility}
                    disabled={!formData.businessType || !formData.annualTurnover || !formData.employeeCount || isCalculating}
                    className="w-full"
                  >
                    {isCalculating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Calculating...
                      </>
                    ) : (
                      <>
                        <Calculator className="h-4 w-4 mr-2" />
                        Calculate Eligibility
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {results.length > 0 && (
                <Card className="bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle>Eligibility Results</CardTitle>
                    <CardDescription>
                      Schemes ranked by your eligibility match
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {results.map((scheme) => (
                      <div key={scheme.id} className="p-4 bg-white rounded-lg border">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-sm">{scheme.name}</h3>
                          <Badge className={`text-xs ${getMatchColor(scheme.match)}`}>
                            {scheme.match}% Match
                          </Badge>
                        </div>
                        
                        <Progress value={scheme.match} className="h-2 mb-3" />
                        
                        <p className="text-sm text-muted-foreground mb-3">{scheme.benefits}</p>
                        
                        <div className="flex items-center justify-between">
                          {scheme.match >= 60 ? (
                            <div className="flex items-center gap-1 text-green-600">
                              <CheckCircle className="h-4 w-4" />
                              <span className="text-xs">Eligible</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 text-red-600">
                              <XCircle className="h-4 w-4" />
                              <span className="text-xs">Not Eligible</span>
                            </div>
                          )}
                          
                          <Button variant="outline" size="sm">
                            <ArrowRight className="h-3 w-3 mr-1" />
                            Apply
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Info Card */}
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">How it works</h3>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Fill in your business details</li>
                        <li>• Get matched with eligible schemes</li>
                        <li>• View eligibility percentage</li>
                        <li>• Apply directly for schemes</li>
                      </ul>
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

export default EligibilityCalculator;