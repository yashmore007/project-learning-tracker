import Link from "next/link";
import { House } from "lucide-react";
import { ChartNoAxesColumn } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export default function SidePanel() {
  return (
    <Sidebar className="hidden sm:block">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Learning Tracker</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="hover:bg-gray-200 rounded-lg">
                <SidebarMenuButton className="flex items-center" asChild>
                  <Link href="#">
                    <House />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="hover:bg-gray-200 rounded-lg">
                <SidebarMenuButton className="flex items-center" asChild>
                  <Link href="#">
                    <ChartNoAxesColumn />
                    <span>Stats</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
