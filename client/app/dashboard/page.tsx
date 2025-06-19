import { createClient } from "@/lib/server"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Clock, TrendingUp } from "lucide-react"

export default async function DashboardPage() {
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <div className="space-y-6">
    <div>
      <h2 className="text-3xl font-bold text-white">Dashboard Overview</h2>
      <p className="text-gray-400 mt-2">Welcome back! Heres whats happening with your interviews.</p>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-400">Total Interviews</CardTitle>
          <Users className="h-4 w-4 text-blue-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">24</div>
          <p className="text-xs text-green-400 mt-1">+12% from last month</p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-400">Scheduled Today</CardTitle>
          <Calendar className="h-4 w-4 text-green-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">3</div>
          <p className="text-xs text-blue-400 mt-1">2 upcoming</p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-400">Avg Duration</CardTitle>
          <Clock className="h-4 w-4 text-purple-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">45m</div>
          <p className="text-xs text-gray-400 mt-1">Per interview</p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-gray-400">Success Rate</CardTitle>
          <TrendingUp className="h-4 w-4 text-orange-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">87%</div>
          <p className="text-xs text-green-400 mt-1">+5% improvement</p>
        </CardContent>
      </Card>
    </div>

    {/* Recent Activity */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Recent Interviews</CardTitle>
          <CardDescription className="text-gray-400">Your latest interview sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "John Doe", position: "Frontend Developer", time: "2 hours ago", status: "Completed" },
              { name: "Jane Smith", position: "Backend Engineer", time: "1 day ago", status: "Completed" },
              { name: "Mike Johnson", position: "Full Stack Developer", time: "2 days ago", status: "Scheduled" },
            ].map((interview, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg border border-gray-700"
              >
                <div>
                  <p className="font-medium text-white">{interview.name}</p>
                  <p className="text-sm text-gray-400">{interview.position}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">{interview.time}</p>
                  <span
                    className={`inline-flex px-2 py-1 text-xs rounded-full ${
                      interview.status === "Completed"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}
                  >
                    {interview.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Upcoming Schedule</CardTitle>
          <CardDescription className="text-gray-400">Your next interviews</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Sarah Wilson", position: "UI/UX Designer", time: "Today, 2:00 PM", duration: "45 min" },
              { name: "David Brown", position: "DevOps Engineer", time: "Tomorrow, 10:00 AM", duration: "60 min" },
              { name: "Lisa Chen", position: "Product Manager", time: "Friday, 3:30 PM", duration: "30 min" },
            ].map((interview, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border border-gray-700 rounded-lg bg-gray-900/30"
              >
                <div>
                  <p className="font-medium text-white">{interview.name}</p>
                  <p className="text-sm text-gray-400">{interview.position}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">{interview.time}</p>
                  <p className="text-xs text-gray-400">{interview.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
  )
}
