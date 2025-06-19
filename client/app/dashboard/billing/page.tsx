import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Download, Calendar, Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    features: ["Up to 10 interviews/month", "Basic scheduling", "Email support", "Standard templates"],
    current: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "per month",
    features: [
      "Up to 50 interviews/month",
      "Advanced scheduling",
      "Priority support",
      "Custom templates",
      "Analytics dashboard",
    ],
    current: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "per month",
    features: [
      "Unlimited interviews",
      "Team collaboration",
      "24/7 support",
      "Custom integrations",
      "Advanced analytics",
      "White-label option",
    ],
    current: false,
  },
]

const invoices = [
  { id: "INV-001", date: "2024-01-01", amount: "$79.00", status: "Paid" },
  { id: "INV-002", date: "2023-12-01", amount: "$79.00", status: "Paid" },
  { id: "INV-003", date: "2023-11-01", amount: "$79.00", status: "Paid" },
  { id: "INV-004", date: "2023-10-01", amount: "$79.00", status: "Paid" },
]

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">Billing & Subscription</h2>
        <p className="text-gray-400 mt-2">Manage your subscription and billing information.</p>
      </div>

      {/* Current Plan */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Current Plan</CardTitle>
          <CardDescription className="text-gray-400">You are currently on the Professional plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">Professional Plan</h3>
              <p className="text-gray-400">$79.00 per month</p>
              <p className="text-sm text-gray-500 mt-1">Next billing date: February 15, 2024</p>
            </div>
            <div className="flex gap-2 mt-4 sm:mt-0">
              <Button
                variant="outline"
                className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:text-white"
              >
                Change Plan
              </Button>
              <Button
                variant="outline"
                className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:text-white"
              >
                Cancel Subscription
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Usage This Month</CardTitle>
          <CardDescription className="text-gray-400">Your current usage for January 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">24</div>
              <p className="text-sm text-gray-400">Interviews Conducted</p>
              <p className="text-xs text-gray-500">26 remaining</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">18h</div>
              <p className="text-sm text-gray-400">Total Interview Time</p>
              <p className="text-xs text-gray-500">45m average</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">12</div>
              <p className="text-sm text-gray-400">Candidates Scheduled</p>
              <p className="text-xs text-gray-500">This week</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Available Plans</CardTitle>
          <CardDescription className="text-gray-400">Choose the plan that best fits your needs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-6 border rounded-lg ${
                  plan.current ? "border-blue-500 bg-blue-500/10" : "border-gray-700 bg-gray-900/50"
                }`}
              >
                {plan.current && <Badge className="absolute -top-2 left-4 bg-blue-500 text-white">Current Plan</Badge>}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period.split(" ")[1]}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-400">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.current ? "bg-gray-700 text-gray-400" : "bg-white text-gray-900 hover:bg-gray-200"}`}
                  disabled={plan.current}
                >
                  {plan.current ? "Current Plan" : "Upgrade"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Payment Method</CardTitle>
          <CardDescription className="text-gray-400">Manage your payment information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="flex items-center space-x-3">
              <CreditCard className="w-8 h-8 text-gray-400" />
              <div>
                <p className="font-medium text-white">•••• •••• •••• 4242</p>
                <p className="text-sm text-gray-400">Expires 12/25</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:text-white"
            >
              Update
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Invoice History */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Invoice History</CardTitle>
          <CardDescription className="text-gray-400">Download your past invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between p-3 border border-gray-700 rounded-lg bg-gray-900/50"
              >
                <div className="flex items-center space-x-4">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-white">{invoice.id}</p>
                    <p className="text-sm text-gray-400">{invoice.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-medium text-white">{invoice.amount}</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{invoice.status}</Badge>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
