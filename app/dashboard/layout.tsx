"use client";

import { SignedIn, UserButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { Sidebar, SidebarContent, SidebarGroupContent, SidebarGroup, SidebarMenu, SidebarGroupLabel, SidebarMenuItem, SidebarMenuButton, SidebarProvider } from "@/components/ui/sidebar";
import { Calendar1, DollarSign, List, PlusIcon, Settings } from "lucide-react"
import { Button } from "@/components/ui/button";
import { IconDashboard } from "@tabler/icons-react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { user } = useUser();

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
                                <SidebarGroupLabel className="font-bold mb-8 text-5xl text-blue-500"
                                >HireFlow</SidebarGroupLabel>
                                <SidebarGroup className="mb-12">
                                    <Link href={'/dashboard/create-interview'}>
                                        <Button
                                            variant='secondary'
                                            className="w-full text-black bg-white hover:bg-blue-400 transition-colors duration-200 py-6"
                                        >
                                            <span className="text-lg font-medium tracking-wide">New Interview</span>
                                            <span className="text-2xl ml-3">
                                                <PlusIcon/>
                                            </span>
                                        </Button>
                                    </Link>
                                </SidebarGroup>
                                <SidebarGroupContent>
                                    <SidebarMenu className="space-y-2 text-2xl">
                                        {items.map((item) => (
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton asChild>
                                                    <Link href={item.url} className="h-4flex items-center gap-2 px-4 py-3 text-white hover:bg-black rounded-xl transition-colors">
                                                        <item.icon className="w-6 h-6" />
                                                        <span className="">{item.title}</span>
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
                                        {user?.firstName}
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