"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

import {
    ArrowRight,
    CheckCircle,
    Zap,
    Shield,
    Users,
    BarChart3,
    Star,
    Twitter,
    Linkedin,
    Github,
    Mail,
    Phone,
    MapPin,
    Menu,
} from "lucide-react"
import { useEffect } from "react"

export default function HomePage() {
    const router = useRouter()

    // Prevent any potential Web3 conflicts
    useEffect(() => {
        // Clear any potential MetaMask or Web3 related errors
        if (typeof window !== "undefined") {
            // Suppress MetaMask-related console errors
            const originalError = console.error
            console.error = (...args) => {
                if (args[0] && typeof args[0] === "string" && args[0].includes("MetaMask")) {
                    return // Suppress MetaMask errors
                }
                originalError.apply(console, args)
            }

            return () => {
                console.error = originalError
            }
        }
    }, [])

    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
                <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                    <div className="flex items-center space-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg">
                            <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M140 40H40L140 140H40L140 240H240L140 140H240L140 40Z" fill="#FFF9F9" />
                            </svg>

                        </div>
                        <span className="text-xl font-bold text-white">HireFlow</span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-6">
                        <button
                            onClick={() => handleScrollToSection("features")}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => handleScrollToSection("testimonials")}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Testimonials
                        </button>
                        <button
                            onClick={() => handleScrollToSection("pricing")}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Pricing
                        </button>
                        <button
                            onClick={() => handleScrollToSection("contact")}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Contact
                        </button>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Button onClick={() => {
                            router.push("/auth/sign-in")
                        }} variant="ghost" className="hidden md:inline-flex text-gray-300 hover:text-white hover:bg-gray-800">
                            Sign In
                        </Button>
                        <Button onClick={() => {
                            router.push("/auth/sign-in")
                        }} className="bg-gray-700 hover:bg-gray-600 text-white">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-black">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Badge variant="secondary" className="w-fit bg-gray-800 text-gray-200 hover:bg-gray-700">
                                    🎯 New: AI-Powered Interview Prep
                                </Badge>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
                                    Ace Your Next
                                    <span className="text-gray-400"> Interview</span>
                                </h1>
                                <p className="text-xl text-gray-300 max-w-[600px]">
                                    Get personalized interview preparation with our AI-powered platform. Practice with real-time feedback,
                                    improve your responses, and land your dream job with confidence.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="text-lg px-8 bg-gray-700 hover:bg-gray-600 text-white">
                                    Start Free Trial
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-lg px-8 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                                >
                                    Watch Demo
                                </Button>
                            </div>

                            <div className="flex items-center space-x-8 text-sm text-gray-400">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                    <span>14-day free trial</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-green-400" />
                                    <span>No credit card required</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 rounded-3xl blur-3xl opacity-30"></div>
                            <div className="relative bg-tranparent rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                                <div className="text-center space-y-4">
                                    <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto">
                                        <svg width="680" height="680" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M140 40H40L140 140H40L140 240H240L140 140H240L140 40Z" fill="#FFF9F9" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Interview Prep Hub</h3>
                                    <p className="text-gray-400">Your personal interview preparation assistant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 md:py-32 bg-gray-950">
                <div className="container px-4 md:px-6">
                    <div className="text-center space-y-4 mb-16">
                        <Badge variant="secondary" className="w-fit mx-auto bg-gray-800 text-gray-200 hover:bg-gray-700">
                            Features
                        </Badge>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                            Everything you need to succeed
                        </h2>
                        <p className="text-xl text-gray-400 max-w-[800px] mx-auto">
                            Powerful features designed to help you prepare for interviews and showcase your best self.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <Card className="text-center bg-gray-900 border-gray-800">
                            <CardHeader>
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800">
                                    <Zap className="h-6 w-6 text-gray-400" />
                                </div>
                                <CardTitle className="text-white">Smart Practice</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400">
                                    Practice interviews with our AI that adapts to your responses and provides real-time feedback.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center bg-gray-900 border-gray-800">
                            <CardHeader>
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800">
                                    <Shield className="h-6 w-6 text-green-400" />
                                </div>
                                <CardTitle className="text-white">Industry Insights</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400">
                                    Access up-to-date interview questions and trends from top companies in your industry.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center bg-gray-900 border-gray-800">
                            <CardHeader>
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800">
                                    <Users className="h-6 w-6 text-purple-400" />
                                </div>
                                <CardTitle className="text-white">Personalized Coaching</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400">
                                    Get tailored feedback and improvement suggestions based on your unique interview style.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center bg-gray-900 border-gray-800">
                            <CardHeader>
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800">
                                    <BarChart3 className="h-6 w-6 text-orange-400" />
                                </div>
                                <CardTitle className="text-white">Progress Tracking</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400">Track your improvement over time with detailed analytics and insights.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 md:py-32 bg-black">
                <div className="container px-4 md:px-6">
                    <div className="text-center space-y-4 mb-16">
                        <Badge variant="secondary" className="w-fit mx-auto bg-gray-800 text-gray-200 hover:bg-gray-700">
                            Testimonials
                        </Badge>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                            Trusted by job seekers worldwide
                        </h2>
                        <p className="text-xl text-gray-400 max-w-[800px] mx-auto">
                            See what our users have to say about their interview preparation journey.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "Software Engineer",
                                content:
                                    "HireFlow helped me prepare for my dream job at Google. The AI feedback was incredibly detailed and helped me improve my responses significantly.",
                            },
                            {
                                name: "Michael Chen",
                                role: "Product Manager",
                                content:
                                    "The practice sessions were so realistic! I felt confident going into my interviews and landed multiple offers.",
                            },
                            {
                                name: "Emily Rodriguez",
                                role: "Data Scientist",
                                content:
                                    "The personalized coaching feature is amazing. It identified my weak areas and helped me improve them systematically.",
                            },
                        ].map((testimonial, index) => (
                            <Card key={index} className="bg-gray-900 border-gray-800">
                                <CardHeader>
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                                            <Users className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">{testimonial.name}</p>
                                            <p className="text-sm text-gray-400">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 md:py-32 bg-gray-950">
                <div className="container px-4 md:px-6">
                    <div className="text-center space-y-4 mb-16">
                        <Badge variant="secondary" className="w-fit mx-auto bg-gray-800 text-gray-200 hover:bg-gray-700">
                            Pricing
                        </Badge>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                            Simple, transparent pricing
                        </h2>
                        <p className="text-xl text-gray-400 max-w-[800px] mx-auto">
                            Choose the plan that's right for your team. All plans include a 14-day free trial.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Starter</CardTitle>
                                <CardDescription className="text-gray-400">Perfect for small teams getting started</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold text-white">$9</span>
                                    <span className="text-gray-400">/user/month</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    {["Up to 5 team members", "Basic automation workflows", "Email support", "1GB storage"].map(
                                        (feature, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <CheckCircle className="h-4 w-4 text-green-400" />
                                                <span className="text-sm text-gray-300">{feature}</span>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white border-gray-700">
                                    Start Free Trial
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="border-gray-600 relative bg-gray-900">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <Badge className="bg-gray-700 text-white">Most Popular</Badge>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-white">Professional</CardTitle>
                                <CardDescription className="text-gray-400">Best for growing teams and businesses</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold text-white">$29</span>
                                    <span className="text-gray-400">/user/month</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    {[
                                        "Up to 25 team members",
                                        "Advanced automation workflows",
                                        "Priority support",
                                        "10GB storage",
                                        "Advanced analytics",
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <CheckCircle className="h-4 w-4 text-green-400" />
                                            <span className="text-sm text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white">Start Free Trial</Button>
                            </CardFooter>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Enterprise</CardTitle>
                                <CardDescription className="text-gray-400">For large organizations with custom needs</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold text-white">Custom</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    {[
                                        "Unlimited team members",
                                        "Custom workflows & integrations",
                                        "24/7 dedicated support",
                                        "Unlimited storage",
                                        "Advanced security & compliance",
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <CheckCircle className="h-4 w-4 text-green-400" />
                                            <span className="text-sm text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white border-gray-700">
                                    Contact Sales
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 md:py-32 bg-gray-800">
                <div className="container px-4 md:px-6 text-center">
                    <div className="space-y-8 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                            Ready to ace your next interview?
                        </h2>
                        <p className="text-xl text-gray-300">
                            Join thousands of job seekers who have already transformed their interview performance with HireFlow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 bg-gray-700 hover:bg-gray-600 text-white">
                                Start Your Free Trial
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                Schedule a Demo
                            </Button>
                        </div>
                        <p className="text-sm text-gray-400">No credit card required • 14-day free trial • Cancel anytime</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-black py-16 border-t border-gray-800">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg">
                                <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M140 40H40L140 140H40L140 240H240L140 140H240L140 40Z" fill="#FFF9F9" />
                            </svg>
                                </div>
                                <span className="text-xl font-bold text-white">HireFlow</span>
                            </div>
                            <p className="text-gray-400">
                                Your personal AI-powered interview preparation assistant. Practice, improve, and succeed in your job search.
                            </p>
                            <div className="flex space-x-4">
                                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                                    <Twitter className="h-5 w-5" />
                                </Button>
                                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                                    <Linkedin className="h-5 w-5" />
                                </Button>
                                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                                    <Github className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Product</h3>
                            <div className="space-y-2">
                                {["Features", "Pricing", "Integrations", "API"].map((item, index) => (
                                    <button key={index} className="block text-gray-400 hover:text-white transition-colors text-left">
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Company</h3>
                            <div className="space-y-2">
                                {["About", "Blog", "Careers", "Press"].map((item, index) => (
                                    <button key={index} className="block text-gray-400 hover:text-white transition-colors text-left">
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">Contact</h3>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <Mail className="h-4 w-4" />
                                    <span>hello@streamline.com</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <Phone className="h-4 w-4" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <MapPin className="h-4 w-4" />
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} StreamLine. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                                <button key={index} className="text-gray-400 hover:text-white text-sm transition-colors">
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
