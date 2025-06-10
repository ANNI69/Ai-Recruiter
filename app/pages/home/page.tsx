import { FlipWords } from "@/components/ui/flip-words";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function HomePage() {
    const words = ["Ready", "Confident", "Trained", "Smart"];

    return (
        <div className="mx-auto max-w-screen px-4 sm:px-8 md:px-20 lg:px-40 py-10 md:py-20 text-xl md:text-2xl lg:text-8xl font-bold tracking-tight mt-8 md:mt-16">
            The best way to Practice For Interview
            <PointerHighlight>
                <span
                    style={{
                        fontFamily: "Times Now Roman",
                        color: "#0404CAFF"
                    }}
                >HireFlow </span>
            </PointerHighlight>
            <div className="mx-auto max-w-screen px-4 sm:px-8 md:px-20 lg:px-40 py-10 md:py-20">
                <div className="h-[20rem] md:h-[40rem] flex justify-center items-center px-4">
                    <div className="text-2xl md:text-6xl max-w-screen mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                        Be
                        <FlipWords words={words} /> <br />
                        With <span style={{
                            fontFamily: "Times Now Roman",
                            color: "#0404CAFF"
                        }}>HireFlow</span>
                    </div>
                </div>
            </div>
        </div>
    );
}