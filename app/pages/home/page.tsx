import { FlipWords } from "@/components/ui/flip-words";
import Footer from "@/components/ui/footer";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import React, { useRef } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function HomePage() {
    const words = ["Ready", "Confident", "Trained", "Smart"];


    return (
        <>
            <div className=" text-shadow-white mx-auto max-w-screen h-[20vh] px-4 sm:px-16 lg:px-40 py-10 md:py-20 text-xl sm:text-8xl font-bold mt-8 justify-center items-center">
                <div className="mt-16 md:mt-32">
                    The best way to Practice For Interview
                    <PointerHighlight>
                        <span
                            className="text-blue-500 text-5xl mt-16 sm:text-6xl md:text-9xl justify-center items-center"
                            style={{
                                fontFamily: "Times New Roman", // corrected typo
                            }}
                        >
                            HireFlow
                        </span>
                    </PointerHighlight>
                </div>
            </div>

            <div className="mx-auto max-h-screen max-w-screen px-4 sm:px-8 md:px-20 lg:px-40 py-10 md:py-20">
                <div className="flex flex-col md:flex-row min-h-screen md:h-[50rem] justify-center md:justify-between items-center px-4">
                    <div className="text-4xl md:text-7xl max-w-screen mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                        Be
                        <FlipWords words={words} /> <br />
                        With <span
                            className="text-blue-500 font-stretch-50%"
                            style={{
                                fontFamily: "Times Now Roman",
                            }}> HireFlow</span>
                    </div>
                    <div className="items-center justify-center m-6">
                        <DotLottieReact
                            src="https://lottie.host/ebb5d094-8b48-4372-9f6c-973fe5c32536/l93TKZzHE6.lottie"
                            loop
                            autoplay
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}