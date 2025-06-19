import { createClient, isSupabaseConfigured } from "@/lib/server"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { signOut } from "@/lib/actions"
import Homepage from "@/components/homepage"

export default async function Home() {
  // If Supabase is not configured, show setup message directly
  if (!isSupabaseConfigured) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#161616]">
        <h1 className="text-2xl font-bold mb-4 text-white">Connect Supabase to get started</h1>
      </div>
    )
  }

  // Get the user from the server
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If no user, show the homepage
  if (!user) {
    return <Homepage />
  }

  // If user is authenticated, show the dashboard
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 max-w-md w-full mx-4">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-8 h-8 bg-green-500 rounded-full"></div>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-white">Welcome back!</h1>
        <p className="text-gray-400 mb-6">You are successfully signed in as:</p>
        <div className="bg-gray-900/50 rounded-lg p-4 mb-6">
          <p className="text-white font-medium">{user.email}</p>
        </div>
        <form action={signOut}>
          <Button type="submit" className="bg-white text-gray-900 hover:bg-gray-200 w-full">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </form>
      </div>
    </div>
  )
}
