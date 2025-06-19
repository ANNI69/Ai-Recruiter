import type React from "react"
import { createClient } from "@/lib/server"
import { redirect } from "next/navigation"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"

const pageNames: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/schedule": "Schedule Interview",
  "/dashboard/interviews": "All Interviews",
  "/dashboard/billing": "Billing",
  "/dashboard/settings": "Settings",
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <SidebarProvider>
      <DashboardSidebar user={user} />
      <SidebarInset>
        <DashboardHeader title="Dashboard" />
        <main className="flex-1 p-6 bg-gray-950">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
