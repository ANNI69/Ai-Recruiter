interface AIResultProps {
    questions: string[];
}

export default function AIResult({ questions }: AIResultProps) {
    return (
        <div className="mt-6 space-y-4">
            {questions.map((question, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-white">{question}</p>
                </div>
            ))}
        </div>
    );
} 