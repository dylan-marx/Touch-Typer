import { useState } from "react";

const TextStage = () => {
    const [input, setInput] = useState("");
    const [outstanding, setOutstanding] = useState("Hi");
    const handleTyping = (e) => {
        e.preventDefault();
        console.log(e.key)
        if (e.key === 'Backspace') {
            /* TODO handle backspace */
        } else if (e.key === "  ") {
            /* TODO handle space */
        }

        if (e.key == outstanding[0].toLowerCase()) {
            /* Add it in a span that changes the colors*/
            setOutstanding(outstanding.slice(1));
        }

        if (outstanding.length === 1 || !outstanding) {
            document.getElementById("text-stage").classList.add("hidden");
            document.getElementById("text-done").classList.remove("hidden");
        }

        console.log(outstanding.length);
    }

    return (
        <div>
            <div id="text-stage" className="caret-transparent text-4xl text-blue-200 focus:outline-none" tabIndex="0" contentEditable onKeyDown={handleTyping}>
                {outstanding}
            </div>
 
            <div id="text-done" className="text-4xl text-blue-200 hidden">
                WOW you did it!!!
            </div>
        
        </div>
    );
}
 
export default TextStage;