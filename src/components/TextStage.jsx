import { useEffect, useState } from "react";

const TextStage = () => {
    const [typed, setTyped] = useState("");
    const [outstanding, setOutstanding] = useState("Hi, this is an example of text that you can practice with. Please feel free to provide your own should you so desire.");
    useEffect(() => {
        document.getElementById("text-stage").focus();
    }, [])
    /**
     * Handles main logic in regards to typing
     */
    const handleTyping = (e) => {
        e.preventDefault();
        console.log(e.key)
        if (e.key === 'Backspace') {
            /* TODO handle backspace */
        } else if (e.key === "  ") {
            /* TODO handle space */
        }

        // If the keys match up change the color
        if (e.key == outstanding[0]) {
            
            /* Add it in a span that changes the colors*/
            setTyped(typed + e.key);
            setOutstanding(outstanding.slice(1));
        }

        // If the outstanding text is exhausted display victory screen
        if (outstanding.length === 1 || !outstanding) {
            document.getElementById("text-stage").classList.add("hidden");
            document.getElementById("text-done").classList.remove("hidden");
        }

        console.log(outstanding.length);
    }

    return (
        <div>
            <div id="text-stage" className="caret-transparent text-4xl text-blue-200 focus:outline-none p-4 lg:px-20" tabIndex="0" contentEditable onKeyDown={handleTyping}>
                <span className="text-green-400">{typed}</span>
                {outstanding}
                
            </div>
 
            <div id="text-done" className="text-4xl text-blue-200 hidden">
                WOW you did it!!!
            </div>
        
        </div>
    );
}
 
export default TextStage;