import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import ChatBot from "@/components/ui/ChatBot";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 pb-16 md:pb-0">
        {children}
      </div>
      <BottomNav />
      <ChatBot />
    </div>
  );
};

export default AppLayout;