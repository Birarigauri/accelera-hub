import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard";
import Notifications from "./pages/Notifications";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Schemes from "./pages/Schemes";
import SchemeDetails from "./pages/SchemeDetails";
import News from "./pages/News";
import Offerings from "./pages/Offerings";
import OfferingDetails from "./pages/OfferingDetails";
import Profile from "./pages/Profile";
import ProfileV2 from "./pages/ProfileV2";
import EligibilityCalculator from "./pages/EligibilityCalculator";
import SchemeApplication from "./pages/SchemeApplication";
import SchemeApplications from "./pages/SchemeApplications";
import ViewApplication from "./pages/ViewApplication";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/schemes/:id" element={<SchemeDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/offerings/:type/:id" element={<OfferingDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-v2" element={<ProfileV2 />} />
          <Route path="/eligibility-calculator" element={<EligibilityCalculator />} />
          <Route path="/scheme-application" element={<SchemeApplication />} />
          <Route path="/scheme-applications" element={<SchemeApplications />} />
          <Route path="/view-application/:id" element={<ViewApplication />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
