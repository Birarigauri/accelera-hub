import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard";
import DashboardV2 from "./pages/DashboardV2";
import DashboardV3 from "./pages/DashboardV3";
import DashboardV5 from "./pages/DashboardV5";
import Notifications from "./pages/Notifications";
import NotificationsV2 from "./pages/NotificationsV2";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Schemes from "./pages/Schemes";
import SchemeDetails from "./pages/SchemeDetails";
import News from "./pages/News";
import Offerings from "./pages/Offerings";
import OfferingDetails from "./pages/OfferingDetails";
import OfferingsV2 from "./pages/OfferingsV2";
import OfferingDetail from "./pages/OfferingDetail";
import Profile from "./pages/Profile";
import ProfileV2 from "./pages/ProfileV2";
import EditProfile from "./pages/EditProfile";
import ResetPassword from "./pages/ResetPassword";
import ChangeEmail from "./pages/ChangeEmail";
import DetailApplication from "./pages/DetailApplication";
import DetailApplication2 from "./pages/DetailApplication2";
import Applications from "./pages/Applications";
import MyCertificatesLicenses from "./pages/MyCertificatesLicenses";
import CertificateApplication from "./pages/CertificateApplication";
import ApplyCertificates from "./pages/ApplyCertificates";
import EligibilityCalculator from "./pages/EligibilityCalculator";
import SchemeApplication from "./pages/SchemeApplication";
import SchemeApplications from "./pages/SchemeApplications";
import ViewApplication from "./pages/ViewApplication";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import HomeFuturistic from "./pages/HomeFuturistic";
import AddBusiness from "./pages/AddBusiness";
import ComplianceFlow from "./pages/ComplianceFlow";
import ExpertsListing from "./pages/ExpertsListing";
import ManualApplications from "./pages/ManualApplications";
import MyDownloads from "./pages/MyDownloads";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter  basename="/ane-portal">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard-v2" element={<DashboardV2 />} />
          <Route path="/dashboard-v3" element={<DashboardV3 />} />
          <Route path="/dashboard-v5" element={<DashboardV5 />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/notifications-v2" element={<NotificationsV2 />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/schemes/:id" element={<SchemeDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/offerings/:type/:id" element={<OfferingDetails />} />
          <Route path="/offerings-v2" element={<OfferingsV2 />} />
          <Route path="/offerings/:id" element={<OfferingDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-v2" element={<ProfileV2 />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/change-email" element={<ChangeEmail />} />
          <Route path="/eligibility-calculator" element={<EligibilityCalculator />} />
          <Route path="/scheme-application" element={<SchemeApplication />} />
          <Route path="/scheme-applications" element={<SchemeApplications />} />
          <Route path="/view-application/:id" element={<ViewApplication />} />
          <Route path="/detail-application" element={<DetailApplication />} />
          <Route path="/detail-application-2" element={<DetailApplication2 />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/my-certificates-licenses" element={<MyCertificatesLicenses />} />
          <Route path="/apply-certificates" element={<ApplyCertificates />} />
          <Route path="/certificate-application/:certificateId" element={<CertificateApplication />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home-futuristic" element={<HomeFuturistic />} />
          <Route path="/add-business" element={<AddBusiness />} />
          <Route path="/compliance-flow" element={<ComplianceFlow />} />
          <Route path="/experts" element={<ExpertsListing />} />
          <Route path="/manual-applications" element={<ManualApplications />} />
          <Route path="/my-downloads" element={<MyDownloads />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
