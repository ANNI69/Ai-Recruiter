/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { Calendar, CreditCard, Home, Settings, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { signOut } from "@/lib/actions"

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Schedule Interview",
    url: "/dashboard/schedule",
    icon: Calendar,
  },
  {
    title: "All Interviews",
    url: "/dashboard/interviews",
    icon: Users,
  },
  {
    title: "Billing",
    url: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
]

interface DashboardSidebarProps {
  user: any
}

export function DashboardSidebar({ user }: DashboardSidebarProps) {
  const pathname = usePathname()

  return (
    <Sidebar className="bg-gray-950 border-r border-gray-900">
      <SidebarHeader className="p-5 bg-gray-950 ">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M140 40H40L140 140H40L140 240H240L140 140H240L140 40Z" fill="#000000" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white">HireFlow</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-gray-950">
        <SidebarGroup>
          <SidebarGroupLabel className=" text-gray-500 text-xs uppercase tracking-wider">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link
                      href={item.url}
                      className="flex items-center space-x-3 text-gray-300 hover:text-black hover:bg-gray-900 focus:bg-gray-900 focus:text-white rounded-md px-4 py-2 md:py-3 transition-colors duration-150"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-900 bg-gray-950">
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-400">Signed in as:</p>
          <p className="text-white font-medium truncate">{user?.email}</p>
        </div>
        <form action={signOut}>
          <Button
            type="submit"
            variant="outline"
            className="w-full bg-gray-900 border-gray-800 text-white hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white"
          >
            Sign Out
          </Button>
        </form>
      </SidebarFooter>
    </Sidebar>
  )
}
