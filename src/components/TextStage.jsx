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
        if (outstanding.length === 0 && wrong.length === 0) {
            document.getElementById("text-stage").classList.add("hidden");
            document.getElementById("text-done").classList.remove("hidden");
        }
    }, [outstanding])
    /**
     * Handles main logic in regards to typing
     */
    const handleTyping = (e) => {
        e.preventDefault();

        document.getElementById("begin-button").classList.add("hidden");

        if (e.key === 'Backspace' && replace) {
            setWrong(wrong.slice(0, wrong.length - 1));
            setOutstanding(replace[0] + outstanding);
            setReplace(replace.slice(1));
        }

        console.log(e.code);
        if ((e.which >= 48 && e.which <= 90) || (e.which >=186 && e.which <= 222) || e.which === 32) {
            if (e.key == outstanding[0] && wrong.length === 0) {
                setTyped(typed + e.key);
                setOutstanding(outstanding.slice(1));
            } else if (e.key !== "Backspace" && e.key !== "Shift") {
                setWrong(wrong + e.key);
                setReplace(outstanding[0] + replace);
                setOutstanding(outstanding.slice(1));
            }
        }
    }

    const begin = () => {
        document.getElementById("text-stage").focus();
        document.getElementById("begin-button").classList.add("hidden");
    }

    return (
        <div className="flex flex-col justify-center items-center" spellCheck="false">
            <div id="text-stage" className="caret-transparent text-4xl text-blue-200 focus:outline-none p-4 lg:px-20 py-10 no-underline" tabIndex="0" contentEditable onKeyDown={handleTyping} suppressContentEditableWarning={true}>
                <span className="text-green-400">{typed}</span>
                <span className="text-red-400 underline">{wrong}</span>
                {<span className="underline underline-offset-2">{outstanding[0]}</span>}
                {outstanding.slice(1)}
                
            </div>
 
            <div id="text-done" className="text-4xl text-blue-200 hidden">
                <p>WOW you did it!!!</p>
                <button onClick={() => location.reload()} className="text-4xl text-blue-200 border-4 p-2 border-blue-200">Reset</button>
            </div>

            <button id="begin-button" onClick={begin} className="text-4xl text-blue-200 border-4 p-2 border-blue-200">Begin</button>
        
        </div>
    );
}
 
export default TextStage;