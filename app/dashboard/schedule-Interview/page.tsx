"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar1, Clock, User, Mail, Phone, Briefcase } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";


export default function ScheduleInterviewPage() {
    const { user } = useUser();

    const [formData, setFormData] = useState({
        candidateName: "",
        email: "",
        phone: "",
        position: "",
        date: "",
        time: "",
        duration: "45"
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <>
            <header className="">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div>
                        <h1 className="text-xl font-semibold text-white">Welcome back,
                            <span>
                                {" " + user?.fullName}
                            </span>
                            !</h1>
                        <p className="text-sm text-gray-200">AI-Driven Interviews, Hassle-Free Hiring</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <UserButton />
                        </div>
                    </div>
                </div>
            </header>
            <div className="mt-6 space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-white">Schedule Interview</h1>
                    <p className="text-gray-400 mt-1">Set up a new interview with a candidate</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-white">Interview Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <User className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Candidate Name"
                                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            value={formData.candidateName}
                                            onChange={(e) => setFormData({ ...formData, candidateName: e.target.value })}
                                        />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Mail className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Phone className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Briefcase className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Position"
                                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            value={formData.position}
                                            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                        />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Calendar1 className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="date"
                                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Clock className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="time"
                                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            value={formData.time}
                                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                        />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Clock className="w-5 h-5 text-gray-400" />
                                        <select
                                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            value={formData.duration}
                                            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                        >
                                            <option value="30">30 minutes</option>
                                            <option value="45">45 minutes</option>
                                            <option value="60">1 hour</option>
                                            <option value="90">1.5 hours</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    Schedule Interview
                                </button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-white">Upcoming Interviews</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-700 rounded-lg">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-medium text-white">John Doe</h3>
                                            <p className="text-sm text-gray-400">Senior Developer</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-white">Tomorrow</p>
                                            <p className="text-sm text-gray-400">10:00 AM</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-gray-700 rounded-lg">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-medium text-white">Jane Smith</h3>
                                            <p className="text-sm text-gray-400">Product Manager</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-white">Next Week</p>
                                            <p className="text-sm text-gray-400">2:30 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}