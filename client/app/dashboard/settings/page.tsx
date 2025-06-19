import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { User, Bell, Shield, Palette } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">Settings</h2>
        <p className="text-gray-400 mt-2">Manage your account settings and preferences.</p>
      </div>

      {/* Profile Settings */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <User className="w-5 h-5 mr-2" />
            Profile Information
          </CardTitle>
          <CardDescription className="text-gray-400">
            Update your personal information and profile details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-gray-300">
                First Name
              </Label>
              <Input id="firstName" defaultValue="John" className="bg-gray-900/50 border-gray-600 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-gray-300">
                Last Name
              </Label>
              <Input id="lastName" defaultValue="Doe" className="bg-gray-900/50 border-gray-600 text-white" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              defaultValue="john@example.com"
              className="bg-gray-900/50 border-gray-600 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-gray-300">
              Company
            </Label>
            <Input id="company" defaultValue="Tech Corp" className="bg-gray-900/50 border-gray-600 text-white" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio" className="text-gray-300">
              Bio
            </Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself..."
              className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-500"
            />
          </div>
          <Button className="bg-white text-gray-900 hover:bg-gray-200">Save Changes</Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Bell className="w-5 h-5 mr-2" />
            Notification Preferences
          </CardTitle>
          <CardDescription className="text-gray-400">Choose how you want to be notified</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-notifications" className="text-gray-300">
                Email Notifications
              </Label>
              <p className="text-sm text-gray-400">Receive notifications via email</p>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <Separator className="bg-gray-700" />
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="interview-reminders" className="text-gray-300">
                Interview Reminders
              </Label>
              <p className="text-sm text-gray-400">Get reminded before interviews</p>
            </div>
            <Switch id="interview-reminders" defaultChecked />
          </div>
          <Separator className="bg-gray-700" />
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="weekly-summary" className="text-gray-300">
                Weekly Summary
              </Label>
              <p className="text-sm text-gray-400">Receive weekly activity summaries</p>
            </div>
            <Switch id="weekly-summary" />
          </div>
          <Separator className="bg-gray-700" />
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="marketing-emails" className="text-gray-300">
                Marketing Emails
              </Label>
              <p className="text-sm text-gray-400">Receive product updates and tips</p>
            </div>
            <Switch id="marketing-emails" />
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Shield className="w-5 h-5 mr-2" />
            Security & Privacy
          </CardTitle>
          <CardDescription className="text-gray-400">Manage your account security settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password" className="text-gray-300">
              Current Password
            </Label>
            <Input id="current-password" type="password" className="bg-gray-900/50 border-gray-600 text-white" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password" className="text-gray-300">
              New Password
            </Label>
            <Input id="new-password" type="password" className="bg-gray-900/50 border-gray-600 text-white" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-gray-300">
              Confirm New Password
            </Label>
            <Input id="confirm-password" type="password" className="bg-gray-900/50 border-gray-600 text-white" />
          </div>
          <Button className="bg-white text-gray-900 hover:bg-gray-200">Update Password</Button>
          <Separator className="bg-gray-700" />
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="two-factor" className="text-gray-300">
                Two-Factor Authentication
              </Label>
              <p className="text-sm text-gray-400">Add an extra layer of security</p>
            </div>
            <Button
              variant="outline"
              className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700 hover:text-white"
            >
              Enable 2FA
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Appearance Settings */}
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Palette className="w-5 h-5 mr-2" />
            Appearance
          </CardTitle>
          <CardDescription className="text-gray-400">Customize how the application looks</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="theme" className="text-gray-300">
              Theme
            </Label>
            <Select defaultValue="dark">
              <SelectTrigger className="bg-gray-900/50 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="light" className="text-white hover:bg-gray-700">
                  Light
                </SelectItem>
                <SelectItem value="dark" className="text-white hover:bg-gray-700">
                  Dark
                </SelectItem>
                <SelectItem value="system" className="text-white hover:bg-gray-700">
                  System
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="language" className="text-gray-300">
              Language
            </Label>
            <Select defaultValue="en">
              <SelectTrigger className="bg-gray-900/50 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="en" className="text-white hover:bg-gray-700">
                  English
                </SelectItem>
                <SelectItem value="es" className="text-white hover:bg-gray-700">
                  Spanish
                </SelectItem>
                <SelectItem value="fr" className="text-white hover:bg-gray-700">
                  French
                </SelectItem>
                <SelectItem value="de" className="text-white hover:bg-gray-700">
                  German
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="timezone" className="text-gray-300">
              Timezone
            </Label>
            <Select defaultValue="utc">
              <SelectTrigger className="bg-gray-900/50 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="utc" className="text-white hover:bg-gray-700">
                  UTC
                </SelectItem>
                <SelectItem value="est" className="text-white hover:bg-gray-700">
                  Eastern Time
                </SelectItem>
                <SelectItem value="pst" className="text-white hover:bg-gray-700">
                  Pacific Time
                </SelectItem>
                <SelectItem value="cet" className="text-white hover:bg-gray-700">
                  Central European Time
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="bg-red-900/20 border-red-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-red-400">Danger Zone</CardTitle>
          <CardDescription className="text-gray-400">Irreversible and destructive actions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-red-800/50 rounded-lg bg-red-900/10">
            <div>
              <h4 className="font-medium text-white">Delete Account</h4>
              <p className="text-sm text-gray-400">Permanently delete your account and all data</p>
            </div>
            <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
