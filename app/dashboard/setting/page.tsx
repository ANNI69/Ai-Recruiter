"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Globe, Lock, Moon, Sun, User, Mail, Shield } from "lucide-react";

export default function SettingsPage() {
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        reminders: true
    });

    const [appearance, setAppearance] = useState({
        theme: "dark",
        language: "en"
    });

    const handleNotificationChange = (key: keyof typeof notifications) => {
        setNotifications(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleAppearanceChange = (key: keyof typeof appearance, value: string) => {
        setAppearance(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Settings</h1>
                <p className="text-gray-400 mt-1">Manage your account settings and preferences</p>
            </div>

            <div className="grid gap-8">
                <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-white">Account Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
                                <User className="w-6 h-6 text-gray-400" />
                                <div className="flex-1">
                                    <p className="text-white font-medium">Profile Information</p>
                                    <p className="text-gray-400 text-sm">Update your personal information</p>
                                </div>
                                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">
                                    Edit
                                </button>
                            </div>

                            <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
                                <Mail className="w-6 h-6 text-gray-400" />
                                <div className="flex-1">
                                    <p className="text-white font-medium">Email Address</p>
                                    <p className="text-gray-400 text-sm">Change your email address</p>
                                </div>
                                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">
                                    Change
                                </button>
                            </div>

                            <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
                                <Lock className="w-6 h-6 text-gray-400" />
                                <div className="flex-1">
                                    <p className="text-white font-medium">Password</p>
                                    <p className="text-gray-400 text-sm">Update your password</p>
                                </div>
                                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">
                                    Change
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-white">Notifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                                <div className="flex items-center space-x-4">
                                    <Bell className="w-6 h-6 text-gray-400" />
                                    <div>
                                        <p className="text-white font-medium">Email Notifications</p>
                                        <p className="text-gray-400 text-sm">Receive email updates</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={notifications.email}
                                        onChange={() => handleNotificationChange("email")}
                                    />
                                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                                <div className="flex items-center space-x-4">
                                    <Bell className="w-6 h-6 text-gray-400" />
                                    <div>
                                        <p className="text-white font-medium">Push Notifications</p>
                                        <p className="text-gray-400 text-sm">Receive push notifications</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={notifications.push}
                                        onChange={() => handleNotificationChange("push")}
                                    />
                                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                                <div className="flex items-center space-x-4">
                                    <Bell className="w-6 h-6 text-gray-400" />
                                    <div>
                                        <p className="text-white font-medium">Interview Reminders</p>
                                        <p className="text-gray-400 text-sm">Get reminded before interviews</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={notifications.reminders}
                                        onChange={() => handleNotificationChange("reminders")}
                                    />
                                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                </label>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-white">Appearance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <Moon className="w-6 h-6 text-gray-400" />
                                    <div className="flex-1">
                                        <p className="text-white font-medium">Theme</p>
                                        <p className="text-gray-400 text-sm">Choose your preferred theme</p>
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <button
                                        className={`flex-1 px-4 py-2 rounded-lg border ${
                                            appearance.theme === "dark"
                                                ? "bg-indigo-600 border-indigo-600 text-white"
                                                : "bg-gray-700 border-gray-600 text-gray-300"
                                        }`}
                                        onClick={() => handleAppearanceChange("theme", "dark")}
                                    >
                                        Dark
                                    </button>
                                    <button
                                        className={`flex-1 px-4 py-2 rounded-lg border ${
                                            appearance.theme === "light"
                                                ? "bg-indigo-600 border-indigo-600 text-white"
                                                : "bg-gray-700 border-gray-600 text-gray-300"
                                        }`}
                                        onClick={() => handleAppearanceChange("theme", "light")}
                                    >
                                        Light
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <Globe className="w-6 h-6 text-gray-400" />
                                    <div className="flex-1">
                                        <p className="text-white font-medium">Language</p>
                                        <p className="text-gray-400 text-sm">Select your preferred language</p>
                                    </div>
                                </div>
                                <select
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    value={appearance.language}
                                    onChange={(e) => handleAppearanceChange("language", e.target.value)}
                                >
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                    <option value="de">German</option>
                                </select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-white">Privacy & Security</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                                <div className="flex items-center space-x-4">
                                    <Shield className="w-6 h-6 text-gray-400" />
                                    <div>
                                        <p className="text-white font-medium">Two-Factor Authentication</p>
                                        <p className="text-gray-400 text-sm">Add an extra layer of security</p>
                                    </div>
                                </div>
                                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">
                                    Enable
                                </button>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                                <div className="flex items-center space-x-4">
                                    <Shield className="w-6 h-6 text-gray-400" />
                                    <div>
                                        <p className="text-white font-medium">Data Export</p>
                                        <p className="text-gray-400 text-sm">Download your data</p>
                                    </div>
                                </div>
                                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">
                                    Export
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}