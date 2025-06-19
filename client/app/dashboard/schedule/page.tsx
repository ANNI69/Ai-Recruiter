import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, Mail } from "lucide-react"

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">Schedule Interview</h2>
        <p className="text-gray-400 mt-2">Create a new interview session with a candidate.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Interview Details</CardTitle>
              <CardDescription className="text-gray-400">Fill in the information for the new interview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="candidate-name" className="text-gray-300">
                    Candidate Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="candidate-name"
                      placeholder="John Doe"
                      className="pl-10 bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="candidate-email" className="text-gray-300">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="candidate-email"
                      type="email"
                      placeholder="john@example.com"
                      className="pl-10 bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="position" className="text-gray-300">
                  Position
                </Label>
                <Select>
                  <SelectTrigger className="bg-gray-900/50 border-gray-600 text-white">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="frontend" className="text-white hover:bg-gray-700">
                      Frontend Developer
                    </SelectItem>
                    <SelectItem value="backend" className="text-white hover:bg-gray-700">
                      Backend Developer
                    </SelectItem>
                    <SelectItem value="fullstack" className="text-white hover:bg-gray-700">
                      Full Stack Developer
                    </SelectItem>
                    <SelectItem value="designer" className="text-white hover:bg-gray-700">
                      UI/UX Designer
                    </SelectItem>
                    <SelectItem value="devops" className="text-white hover:bg-gray-700">
                      DevOps Engineer
                    </SelectItem>
                    <SelectItem value="pm" className="text-white hover:bg-gray-700">
                      Product Manager
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-gray-300">
                    Interview Date
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input id="date" type="date" className="pl-10 bg-gray-900/50 border-gray-600 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-gray-300">
                    Interview Time
                  </Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input id="time" type="time" className="pl-10 bg-gray-900/50 border-gray-600 text-white" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration" className="text-gray-300">
                  Duration
                </Label>
                <Select>
                  <SelectTrigger className="bg-gray-900/50 border-gray-600 text-white">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="30" className="text-white hover:bg-gray-700">
                      30 minutes
                    </SelectItem>
                    <SelectItem value="45" className="text-white hover:bg-gray-700">
                      45 minutes
                    </SelectItem>
                    <SelectItem value="60" className="text-white hover:bg-gray-700">
                      1 hour
                    </SelectItem>
                    <SelectItem value="90" className="text-white hover:bg-gray-700">
                      1.5 hours
                    </SelectItem>
                    <SelectItem value="120" className="text-white hover:bg-gray-700">
                      2 hours
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-gray-300">
                  Additional Notes
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Any special requirements or notes for this interview..."
                  className="min-h-[100px] bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-500"
                />
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-white text-gray-900 hover:bg-gray-200">Schedule Interview</Button>
                <Button
                  variant="outline"
                  className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:text-white"
                >
                  Save as Draft
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:text-white"
              >
                <Calendar className="w-4 h-4 mr-2" />
                View Calendar
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:text-white"
              >
                <User className="w-4 h-4 mr-2" />
                Candidate Database
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:text-white"
              >
                <Clock className="w-4 h-4 mr-2" />
                Time Slots
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Interview Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Prepare questions in advance</li>
                <li>• Test your video setup</li>
                <li>• Review candidates resume</li>
                <li>• Set clear expectations</li>
                <li>• Allow time for questions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
