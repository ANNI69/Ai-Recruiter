"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckIcon, Code2, Users, Briefcase, Lightbulb, Trophy } from "lucide-react"
import { UserButton } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils"
import axios from 'axios';
import AIResult from "./results/questionList";



export default function Component() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [questions, setQuestions] = useState<string[]>([])
  const [showQuestions, setShowQuestions] = useState(false)
  const { user } = useUser();
  const [jobPosition, setJobPosition] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [interviewDuration, setInterviewDuration] = useState("15")

  
  const [interviewTypes, setInterviewTypes] = useState({
    technical: false,
    behavioral: true,
    experience: false,
    problemSolving: false,
    leadership: true,
  })

  const handleInterviewTypeChange = (type: string) => {
    setInterviewTypes((prev) => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev],
    }))
  }

  const handleGenerateQuestions = async () => {
    console.log('User object:', user);
    console.log('User email addresses:', user?.emailAddresses);
    console.log('Primary email:', user?.primaryEmailAddress);

    if (!user) {
      console.error('User not loaded');
      return;
    }

    const interviewDetails = {
      jobPosition,
      jobDescription,
      interviewDuration,
      interviewTypes,
      user: {
        name: user.firstName || '',
        email: user.primaryEmailAddress?.emailAddress || ''
      }
    }
    
    console.log('Interview details being sent:', interviewDetails);
    
    setIsGenerating(true)
    try {
      const response = await axios.post('/api/ai-model', interviewDetails);
      console.log('API Response:', response.data);
      
      // Get the content and clean it up
      const content = response.data.choices[0].message.content;
      console.log('Raw content:', content);
      
      // Remove markdown code block formatting if present
      const cleanedContent = content.replace(/```json\n?|\n?```/g, '').trim();
      console.log('Cleaned content:', cleanedContent);
      
      // Parse the cleaned content as JSON
      const parsedContent = JSON.parse(cleanedContent);
      console.log('Parsed content:', parsedContent);
      
      // Extract questions from the parsed content
      const generatedQuestions = parsedContent.questions.map((q: any) => q.question);
      console.log('Generated questions:', generatedQuestions);
      
      setQuestions(generatedQuestions);
      setShowQuestions(true);
    } catch (error) {
      console.error('Error generating questions:', error);
      if (axios.isAxiosError(error)) {
        console.error('API Error details:', error.response?.data);
      }
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div>
      {/* Header */}
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

      {/* Main Content */}
      <main className="max-w-screen mt-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Create A Interview</h1>
          <p className="text-gray-400 mt-1">View and manage all your interviews</p>
        </div>

        {showQuestions ? (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white">Generated Questions</h2>
              <Button 
                variant="outline" 
                onClick={() => setShowQuestions(false)}
                className="text-white"
              >
                Create New Interview
              </Button>
            </div>
            <AIResult questions={questions} />
          </div>
        ) : (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-white">Create New Interview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Job Position */}
              <div className="space-y-2">
                <Label htmlFor="jobPosition" className="text-sm font-medium text-white">
                  Job Position
                </Label>
                <Input 
                  id="jobPosition" 
                  placeholder="e.g. Senior Frontend Developer" 
                  className="w-full"
                  value={jobPosition}
                  onChange={(e) => setJobPosition(e.target.value)}
                />
              </div>

              {/* Job Description */}
              <div className="space-y-2">
                <Label htmlFor="jobDescription" className="text-sm font-medium text-white">
                  Job Description
                </Label>
                <Textarea
                  id="jobDescription"
                  placeholder="Enter detailed job description..."
                  className="min-h-[120px] resize-none"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </div>

              {/* Interview Duration */}
              <div className="space-y-2">
                <Label htmlFor="duration" className="text-sm font-medium text-white">
                  Interview Duration
                </Label>
                <Select 
                  defaultValue="15"
                  value={interviewDuration}
                  onValueChange={setInterviewDuration}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="45">45 minutes</SelectItem>
                    <SelectItem value="60">60 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Interview Types */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-white">Interview Types</Label>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={interviewTypes.technical ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleInterviewTypeChange("technical")}
                    className={cn(
                      "rounded-full",
                      interviewTypes.technical ? "bg-indigo-600 hover:bg-indigo-700" : "hover:bg-gray-100"
                    )}
                  >
                    <Code2 className="w-4 h-4 mr-1" />
                    Technical
                    {interviewTypes.technical && <CheckIcon className="w-4 h-4 ml-1" />}
                  </Button>
                  <Button
                    variant={interviewTypes.behavioral ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleInterviewTypeChange("behavioral")}
                    className={cn(
                      "rounded-full",
                      interviewTypes.behavioral ? "bg-indigo-600 hover:bg-indigo-700" : "hover:bg-gray-100"
                    )}
                  >
                    <Users className="w-4 h-4 mr-1" />
                    Behavioral
                    {interviewTypes.behavioral && <CheckIcon className="w-4 h-4 ml-1" />}
                  </Button>
                  <Button
                    variant={interviewTypes.experience ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleInterviewTypeChange("experience")}
                    className={cn(
                      "rounded-full",
                      interviewTypes.experience ? "bg-indigo-600 hover:bg-indigo-700" : "hover:bg-gray-100"
                    )}
                  >
                    <Briefcase className="w-4 h-4 mr-1" />
                    Experience
                    {interviewTypes.experience && <CheckIcon className="w-4 h-4 ml-1" />}
                  </Button>
                  <Button
                    variant={interviewTypes.problemSolving ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleInterviewTypeChange("problemSolving")}
                    className={cn(
                      "rounded-full",
                      interviewTypes.problemSolving ? "bg-indigo-600 hover:bg-indigo-700" : "hover:bg-gray-100"
                    )}
                  >
                    <Lightbulb className="w-4 h-4 mr-1" />
                    Problem Solving
                    {interviewTypes.problemSolving && <CheckIcon className="w-4 h-4 ml-1" />}
                  </Button>
                  <Button
                    variant={interviewTypes.leadership ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleInterviewTypeChange("leadership")}
                    className={cn(
                      "rounded-full",
                      interviewTypes.leadership ? "bg-indigo-600 hover:bg-indigo-700" : "hover:bg-gray-100"
                    )}
                  >
                    <Trophy className="w-4 h-4 mr-1" />
                    Leadership
                    {interviewTypes.leadership && <CheckIcon className="w-4 h-4 ml-1" />}
                  </Button>
                </div>
              </div>

              {/* Generating Questions Section */}
              {isGenerating && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />
                    <div>
                      <h3 className="text-sm font-medium text-blue-900">Generating Interview Questions</h3>
                      <p className="text-sm text-blue-700">
                        Our AI is crafting personalized questions based on your requirements...
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-between pt-4">
                <Button variant="outline" className="px-6">
                  Cancel
                </Button>
                <Button
                  onClick={handleGenerateQuestions}
                  disabled={isGenerating}
                  className="text-white rounded-lg px-6 bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate Questions"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}

async function AiAgent({ interviewDetails }: { interviewDetails: any }) {
  try {
    const response = await axios.post('/api/ai-model', interviewDetails);
    const { data } = response;
    
    return (
      <div>
        {data.choices[0].message.content}
      </div>
    );
  } catch (error) {
    console.error('Error generating interview questions:', error);
    return (
      <div className="text-red-500">
        Error generating questions. Please try again.
      </div>
    );
  }
}