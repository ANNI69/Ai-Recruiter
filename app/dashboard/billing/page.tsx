"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Receipt, CheckCircle } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";

export default function BillingPage() {
    const { user } = useUser();

    const subscription = {
        plan: "Professional",
        price: "$49",
        interval: "month",
        features: [
            "Unlimited Interviews",
            "AI-Powered Analysis",
            "Custom Question Sets",
            "Priority Support"
        ]
    };

    const paymentHistory = [
        {
            id: 1,
            date: "2024-03-01",
            amount: "$49.00",
            status: "paid",
            description: "Professional Plan - March 2024"
        },
        {
            id: 2,
            date: "2024-02-01",
            amount: "$49.00",
            status: "paid",
            description: "Professional Plan - February 2024"
        },
        {
            id: 3,
            date: "2024-01-01",
            amount: "$49.00",
            status: "paid",
            description: "Professional Plan - January 2024"
        }
    ];

    return (
        <>
            <header className="">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div>
                        <h1 className="text-xl font-semibold text-white">Welcome back,
                            <span>
                                {" " + user?.firstName}
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
            <div className="space-y-8">

                <div>
                    <h1 className="mt-16 text-3xl font-bold text-white">Billing & Subscription</h1>
                    <p className="text-gray-400 mt-1">Manage your subscription and billing details</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-white">Current Plan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{subscription.plan} Plan</h3>
                                        <p className="text-gray-400">Current subscription</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-white">{subscription.price}</p>
                                        <p className="text-gray-400">per {subscription.interval}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-white font-medium">Plan Features</h4>
                                    <ul className="space-y-3">
                                        {subscription.features.map((feature, index) => (
                                            <li key={index} className="flex items-center space-x-3">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                                <span className="text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                                    Upgrade Plan
                                </button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-white">Payment Method</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
                                    <CreditCard className="w-8 h-8 text-gray-400" />
                                    <div>
                                        <p className="text-white font-medium">•••• •••• •••• 4242</p>
                                        <p className="text-gray-400 text-sm">Expires 12/2024</p>
                                    </div>
                                </div>

                                <button className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                                    Update Payment Method
                                </button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700 md:col-span-2">
                        <CardHeader>
                            <CardTitle className="text-white">Payment History</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {paymentHistory.map((payment) => (
                                    <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                                        <div className="flex items-center space-x-4">
                                            <Receipt className="w-6 h-6 text-gray-400" />
                                            <div>
                                                <p className="text-white font-medium">{payment.description}</p>
                                                <p className="text-gray-400 text-sm">{payment.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-white font-medium">{payment.amount}</p>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500">
                                                {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}