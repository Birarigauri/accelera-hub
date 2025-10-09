import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/layout/Header";
import AppLayout from "@/components/layout/AppLayout";
import { toast } from "@/lib/toast";

const ChangeEmail = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    currentEmail: "rajesh.kumar@techsolutions.com",
    newEmail: "",
    password: ""
  });

  const handleSubmit = () => {
    toast.success("Email updated successfully!");
    navigate("/profile");
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-8">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-6 mb-6 shadow-xl">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={() => navigate("/profile")}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">📧 Change Email</h1>
            </div>
          </div>

          <Card className="bg-white shadow-lg border-0 rounded-2xl max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Update Email Address
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Current Email</Label>
                <Input 
                  value={formData.currentEmail} 
                  readOnly 
                  className="bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <Label>New Email Address</Label>
                <Input 
                  type="email" 
                  placeholder="Enter new email address"
                  value={formData.newEmail}
                  onChange={(e) => setFormData({...formData, newEmail: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label>Password Confirmation</Label>
                <Input 
                  type="password" 
                  placeholder="Enter password to confirm"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white" onClick={handleSubmit}>
                  <Mail className="h-4 w-4 mr-2" />
                  Update Email Address
                </Button>
                <Button variant="outline" onClick={() => navigate("/profile")}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default ChangeEmail;
