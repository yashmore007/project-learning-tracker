import { SidebarProvider } from "@/components/ui/sidebar";
import SidePanel from "@/components/SidePanel";
import Topbar from "@/components/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex flex-1">
        <SidePanel />
        <div>
          <Topbar />
          {children}
        </div>
      </div>
    </section>
  );
}
