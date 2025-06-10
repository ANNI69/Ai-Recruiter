"use client";

import { SignedIn, UserButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Sidebar, SidebarContent, SidebarGroupContent, SidebarGroup, SidebarMenu, SidebarGroupLabel, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Calendar, Calendar1, DollarSign, List, PlusIcon, Settings } from "lucide-react"
import { Button } from "@/components/ui/button";
import { IconDashboard } from "@tabler/icons-react";

export default function Page() {
    const items = [
        {
            title: "Dashboard",
            url: "#",
            icon: IconDashboard,
        },
        {
            title: "Schedule Interview",
            url: "#",
            icon: Calendar1,
        },
        {
            title: "All interview",
            url: "#",
            icon: List,
        },
        {
            title: "Billing",
            url: "#",
            icon: DollarSign,
        },
        {
            title: "Settings",
            url: "#",
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
            <Sidebar className="w-72 min-h-screen bg-gray-950 border-r border-gray-700 flex flex-col justify-between">
                <SidebarContent className="p-6">
                    <SidebarGroup>
                        <SidebarGroupLabel className="text-base font-semibold text-white text-4xl mb-8">HireFlow</SidebarGroupLabel>
                        <SidebarGroup className="mb-12">
                            <Button 
                                variant='secondary' 
                                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3.5 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span className="text-base tracking-wide mb-1"> New Interview</span>
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
                                            <a href={item.url} className="flex items-center gap-4 px-4 py-3 text-white hover:bg-black rounded-xl transition-colors">
                                                <item.icon className="w-6 h-6" />
                                                <span className="text-base font-medium text-4xl">{item.title}</span>
                                            </a>
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
                        <UserButton/>
                        <span className="font-medium text-white text2xl ml-2">
                            LoggedIn
                        </span>
                        </div>
                    </SignedIn>
                </div>
            </Sidebar>
        </>
    );
}