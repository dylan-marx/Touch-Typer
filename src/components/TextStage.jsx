import { useEffect, useState } from "react";

const TextStage = () => {
    const [typed, setTyped] = useState("");
    const [wrong, setWrong] = useState("");
    const [replace, setReplace] = useState("");
    const [outstanding, setOutstanding] = useState("Hi, this is an example of text that you can practice with. Please feel free to provide your own should you so desire.");
    useEffect(() => {
        document.getElementById("text-stage").focus();
    }, []);

    useEffect(() => {
        if (outstanding.length === 0) {
            document.getElementById("text-stage").classList.add("hidden");
            document.getElementById("text-done").classList.remove("hidden");
        }
    }, [outstanding])
    /**
     * Handles main logic in regards to typing
     */
    const handleTyping = (e) => {
        e.preventDefault();

        if (e.key === 'Backspace' && replace) {
            setWrong(wrong.slice(0, wrong.length - 1));
            setOutstanding(replace[0] + outstanding);
            setReplace(replace.slice(1));
            /* TODO handle backspace */
        } else if (e.key === "  ") {
            /* TODO handle space */
        }

        // If the keys match up change the color
        if (e.key == outstanding[0] && wrong.length === 0) {
            setTyped(typed + e.key);
            setOutstanding(outstanding.slice(1));
        } else if (e.key !== "Backspace" && e.key !== "Shift") {
            setWrong(wrong + e.key);
            setReplace(outstanding[0] + replace);
            setOutstanding(outstanding.slice(1));
        }

    }

    return (
        <div>
            <div id="text-stage" className="caret-transparent text-4xl text-blue-200 focus:outline-none p-4 lg:px-20" tabIndex="0" contentEditable onKeyDown={handleTyping} suppressContentEditableWarning={true}>
                <span className="text-green-400">{typed}</span>
                <span className="text-red-400">{wrong}</span>
                {outstanding}
                
            </div>
 
            <div id="text-done" className="text-4xl text-blue-200 hidden">
                WOW you did it!!!
            </div>
        
        </div>
    );
}
 
export default TextStage;