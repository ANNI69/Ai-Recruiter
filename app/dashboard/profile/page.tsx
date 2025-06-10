"use client";

import { useUser } from "@clerk/nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar1, Users, CheckCircle, Clock } from "lucide-react";

export default function ProfilePage() {
    const { user } = useUser();

    const stats = [
        {
            title: "Total Interviews",
            value: "24",
            icon: Users,
            description: "Conducted interviews"
        },
        {
            title: "Upcoming",
            value: "3",
            icon: Calendar1,
            description: "Scheduled interviews"
        },
        {
            title: "Completed",
            value: "18",
            icon: CheckCircle,
            description: "Finished interviews"
        },
        {
            title: "Average Duration",
            value: "45m",
            icon: Clock,
            description: "Per interview"
        }
    ];

    return (
        <div className="space-y-8 mt-0 max-w-screen">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Welcome back, {user?.firstName}!</h1>
                    <p className="text-gray-400 mt-1">Here's what's happening with your interviews today.</p>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title} className="bg-gray-800 border-gray-700">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-400">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-gray-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <p className="text-xs text-gray-400">{stat.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-white">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                                <div className="text-sm text-gray-300">Completed interview with John Doe</div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                                <div className="text-sm text-gray-300">Scheduled new interview for tomorrow</div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                                <div className="text-sm text-gray-300">Updated interview feedback</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-white">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                                Schedule New Interview
                            </button>
                            <button className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                                View All Interviews
                            </button>
                            <button className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                                Generate Reports
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}