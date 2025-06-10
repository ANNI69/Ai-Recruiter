"use client";

import { SignedIn, UserButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Sidebar, SidebarContent, SidebarGroupContent, SidebarGroup, SidebarMenu, SidebarGroupLabel, SidebarMenuItem, SidebarMenuButton, SidebarProvider } from "@/components/ui/sidebar";
import { Calendar1, DollarSign, List, PlusIcon, Settings } from "lucide-react"
import { Button } from "@/components/ui/button";
import { IconDashboard } from "@tabler/icons-react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const items = [
        {
            title: "Dashboard",
            url: "/dashboard/profile",
            icon: IconDashboard,
        },
        {
            title: "Schedule Interview",
            url: "/dashboard/schedule-Interview",
            icon: Calendar1,
        },
        {
            title: "All interview",
            url: "/dashboard/all-interview",
            icon: List,
        },
        {
            title: "Billing",
            url: "/dashboard/billing",
            icon: DollarSign,
        },
        {
            title: "Settings",
            url: "/dashboard/setting",
            icon: Settings,
        },
    ]

    const { isLoaded, userId } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isLoaded && !userId) {
            router.replace("/auth/sign-in");
        }
    }, [isLoaded, userId, router]);

    if (!isLoaded || !userId) {
        return null;
    }

    return (
        <>
            <div className="flex min-h-screen bg-gray-950">
                <SidebarProvider>
                    <Sidebar className="w-72 border-r border-gray-700 flex flex-col justify-between fixed h-screen">
                        <SidebarContent className="p-6">
                            <SidebarGroup>
                                <SidebarGroupLabel className="text-base font-semibold text-white text-4xl mb-8">HireFlow</SidebarGroupLabel>
                                <SidebarGroup className="mb-12">
                                    <Button
                                        variant='secondary'
                                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <span className="text-base tracking-wide"> New Interview</span>
                                        <span className="text-xl font-light">
                                            <PlusIcon />
                                        </span>
                                    </Button>
                                </SidebarGroup>
                                <SidebarGroupContent>
                                    <SidebarMenu className="space-y-2 text-4xl">
                                        {items.map((item) => (
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton asChild>
                                                    <Link href={item.url} className="flex items-center gap-4 px-4 py-3 text-white hover:bg-black rounded-xl transition-colors">
                                                        <item.icon className="w-6 h-6" />
                                                        <span className="text-base font-medium text-4xl">{item.title}</span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </SidebarContent>
                        <div className="p-6 border-t border-gray-700">
                            <SignedIn>
                                <div className="flex flex-row gap-2 justify-start">
                                    <UserButton />
                                    <span className="font-medium text-white text2xl ml-2">
                                        LoggedIn
                                    </span>
                                </div>
                            </SignedIn>
                        </div>
                    </Sidebar>
                    <main className="flex-1 ml-16 p-6">
                        {children}
                    </main>
                </SidebarProvider>
            </div>
        </>
    );
}