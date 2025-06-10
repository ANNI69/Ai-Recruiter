"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Calendar1, Clock, User, Briefcase } from "lucide-react";
import { useState } from "react";

export default function AllInterviewsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const interviews = [
        {
            id: 1,
            candidateName: "John Doe",
            position: "Senior Developer",
            date: "2024-03-20",
            time: "10:00 AM",
            status: "completed",
            duration: "45m"
        },
        {
            id: 2,
            candidateName: "Jane Smith",
            position: "Product Manager",
            date: "2024-03-22",
            time: "2:30 PM",
            status: "scheduled",
            duration: "60m"
        },
        {
            id: 3,
            candidateName: "Mike Johnson",
            position: "UX Designer",
            date: "2024-03-18",
            time: "11:00 AM",
            status: "completed",
            duration: "45m"
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "completed":
                return "bg-green-500";
            case "scheduled":
                return "bg-blue-500";
            case "cancelled":
                return "bg-red-500";
            default:
                return "bg-gray-500";
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">All Interviews</h1>
                <p className="text-gray-400 mt-1">View and manage all your interviews</p>
            </div>

            <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <CardTitle className="text-white">Interview List</CardTitle>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search interviews..."
                                    className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <select
                                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="all">All Status</option>
                                <option value="scheduled">Scheduled</option>
                                <option value="completed">Completed</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b border-gray-700">
                                    <th className="pb-4 text-gray-400 font-medium">Candidate</th>
                                    <th className="pb-4 text-gray-400 font-medium">Position</th>
                                    <th className="pb-4 text-gray-400 font-medium">Date</th>
                                    <th className="pb-4 text-gray-400 font-medium">Time</th>
                                    <th className="pb-4 text-gray-400 font-medium">Duration</th>
                                    <th className="pb-4 text-gray-400 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {interviews.map((interview) => (
                                    <tr key={interview.id} className="hover:bg-gray-700/50">
                                        <td className="py-4">
                                            <div className="flex items-center space-x-3">
                                                <User className="w-5 h-5 text-gray-400" />
                                                <span className="text-white">{interview.candidateName}</span>
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <div className="flex items-center space-x-3">
                                                <Briefcase className="w-5 h-5 text-gray-400" />
                                                <span className="text-white">{interview.position}</span>
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <div className="flex items-center space-x-3">
                                                <Calendar1 className="w-5 h-5 text-gray-400" />
                                                <span className="text-white">{interview.date}</span>
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <div className="flex items-center space-x-3">
                                                <Clock className="w-5 h-5 text-gray-400" />
                                                <span className="text-white">{interview.time}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 text-white">{interview.duration}</td>
                                        <td className="py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(interview.status)}`}>
                                                {interview.status.charAt(0).toUpperCase() + interview.status.slice(1)}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}