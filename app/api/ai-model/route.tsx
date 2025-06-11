import { NextResponse } from "next/server";
import OpenAI from "openai";
import { PROMPT, OpenRouterApiKey } from "@/constants";

export async function POST(req: Request) {
    const { jobPosition, jobDescription, interviewDuration, interviewTypes, user } = await req.json();

    const Final_prompt = PROMPT
        .replace('{{jobTitle}}', jobPosition)
        .replace('{{jobDescription}}', jobDescription)
        .replace('{{duration}}', interviewDuration)
        .replace('{{type}}', JSON.stringify(interviewTypes));

    console.log('Final Prompt:', Final_prompt);
    
    try {
        const openai = new OpenAI({
            baseURL: "https://openrouter.ai/api/v1",
            apiKey: OpenRouterApiKey,
        });
    
        const completion = await openai.chat.completions.create({
            model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
            messages: [
                {
                    "role": "user",
                    "content": Final_prompt
                }
            ],
        });
        
        console.log('API Response:', completion.choices[0].message);
        return NextResponse.json(completion);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Failed to generate questions' }, { status: 500 });
    }
}