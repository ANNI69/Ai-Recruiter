interface AIResultProps {
    questions: string[];
}

export default function AIResult({ questions }: AIResultProps) {
    if (!questions || questions.length === 0) {
        return (
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <p className="text-white text-center">No questions generated yet.</p>
            </div>
        );
    }

    return (
        <div className="mt-6 space-y-4">
            {questions.map((question, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                    <div className="flex items-start gap-3">
                        <span className="text-indigo-400 font-medium">{index + 1}.</span>
                        <span style={{ color: 'white', fontSize: '16px', opacity: 1 }}>{question}</span>
                    </div>
                </div>
            ))}
        </div>
    );
} 