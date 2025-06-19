import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Calendar, Clock, User, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const interviews = [
  {
    id: 1,
    candidateName: "John Doe",
    position: "Frontend Developer",
    date: "2024-01-15",
    time: "2:00 PM",
    duration: "45 min",
    status: "Completed",
    score: 8.5,
  },
  {
    id: 2,
    candidateName: "Jane Smith",
    position: "Backend Engineer",
    date: "2024-01-14",
    time: "10:00 AM",
    duration: "60 min",
    status: "Completed",
    score: 9.2,
  },
  {
    id: 3,
    candidateName: "Mike Johnson",
    position: "Full Stack Developer",
    date: "2024-01-16",
    time: "3:30 PM",
    duration: "45 min",
    status: "Scheduled",
    score: null,
  },
  {
    id: 4,
    candidateName: "Sarah Wilson",
    position: "UI/UX Designer",
    date: "2024-01-13",
    time: "11:00 AM",
    duration: "30 min",
    status: "Cancelled",
    score: null,
  },
  {
    id: 5,
    candidateName: "David Brown",
    position: "DevOps Engineer",
    date: "2024-01-17",
    time: "9:00 AM",
    duration: "60 min",
    status: "Scheduled",
    score: null,
  },
]

export default function InterviewsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white">All Interviews</h2>
          <p className="text-gray-400 mt-2">Manage and review all your interview sessions.</p>
        </div>
        <Button className="bg-white text-gray-900 hover:bg-gray-200">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule New
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search interviews..."
                className="pl-10 bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-500"
              />
            </div>
            <Button
              variant="outline"
              className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:text-white"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Interviews List */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Interview Sessions</CardTitle>
          <CardDescription className="text-gray-400">A complete list of all your interviews</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {interviews.map((interview) => (
              <div
                key={interview.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-700 rounded-lg hover:bg-gray-900/50 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white">{interview.candidateName}</h3>
                    <p className="text-sm text-gray-400">{interview.position}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {interview.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {interview.time} ({interview.duration})
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <Badge
                    className={
                      interview.status === "Completed"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : interview.status === "Scheduled"
                          ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          : "bg-red-500/20 text-red-400 border-red-500/30"
                    }
                  >
                    {interview.status}
                  </Badge>

                  {interview.score && (
                    <div className="text-sm">
                      <span className="text-gray-400">Score: </span>
                      <span className="font-medium text-white">{interview.score}/10</span>
                    </div>
                  )}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                      <DropdownMenuItem className="text-white hover:bg-gray-700">View Details</DropdownMenuItem>
                      <DropdownMenuItem className="text-white hover:bg-gray-700">Edit Interview</DropdownMenuItem>
                      <DropdownMenuItem className="text-white hover:bg-gray-700">Send Reminder</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-400 hover:bg-gray-700">Cancel Interview</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
