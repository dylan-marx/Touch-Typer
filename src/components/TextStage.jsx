import { useEffect, useRef, useState } from "react";

const TextStage = ({text}) => {
    const [typed, setTyped] = useState("");
    const [wrong, setWrong] = useState("");
    const [replace, setReplace] = useState("");
    const [outstanding, setOutstanding] = useState(text);
    const startOfText = useRef("");
    useEffect(() => {
        setOutstanding(text);
        setTyped("");
        setWrong("");
        setReplace("");
      }, [text]);

    useEffect(() => {
        if (outstanding.length === 0 && wrong.length === 0) {
            document.getElementById("text-stage").classList.add("hidden");
            document.getElementById("text-done").classList.remove("hidden");
        }

        if (startOfText.current) {
            startOfText.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
          }
    }, [outstanding])

    /**
     * Handles main logic in regards to typing
     */
    const handleTyping = (e) => {
        e.preventDefault();

        document.getElementById("begin-button").classList.add("hidden");
        console.log(e.which);
        // If backspace is pressed replace the character
        if (e.key === 'Backspace' && replace.length >= 1 && replace.length == wrong.length) {
            setWrong(wrong.slice(0, wrong.length - 1));
            setOutstanding(replace[0] + outstanding);
            setReplace(replace.slice(1));
        } else if (wrong.length > 0) {
            setWrong(wrong.slice(0, wrong.length - 1));
        }

        // Handles the logic of an enter key press
        if (e.which === 13 && outstanding[0] == "\n") {
            setTyped(typed + "\n");
            setOutstanding(outstanding.slice(1));
        } else if (e.which === 13) {
            setWrong(wrong + "*");
            if (outstanding.length > 0) {
                setReplace(outstanding[0] + replace);
            }
            setOutstanding(outstanding.slice(1));
        }

        // If the key pressed is an accepted value process it
        if ((e.which >= 48 && e.which <= 90) || (e.which >=186 && e.which <= 222) || e.which === 32 || e.which ===  173) {
            
            if (e.key === outstanding[0] && wrong.length === 0) {
                setTyped(typed + e.key);
                setOutstanding(outstanding.slice(1));
            } else {
                setWrong(wrong + e.key);
                if (outstanding.length > 0) {
                    setReplace(outstanding[0] + replace);
                }
                setOutstanding(outstanding.slice(1));
                }
            }
        }
    
    /**
     * Removes elements not needed and sets focus so the user can start typing
     */
    const begin = () => {
        document.getElementById("text-stage").focus();
        document.getElementById("begin-button").classList.add("hidden");

        if (document.getElementById("text-input")) {
            document.getElementById("text-input").classList.add("hidden");
        }

        if (startOfText.current) {
            startOfText.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
        }
    }

    /**
     * Resets the text and stage
     */
    const reset = () => {
        setOutstanding(text);
        setTyped("");
        setWrong("");
        setReplace("");
        document.getElementById("text-stage").classList.remove("hidden");
        document.getElementById("text-stage").focus();
        document.getElementById("begin-button").classList.remove("hidden");
        document.getElementById("text-done").classList.add("hidden");
        document.getElementById("text-input").classList.remove("hidden");
    }

    return (
        <div>
            <div className="flex flex-col items-center bg-slate-500 border-4 border-blue-200 rounded-lg mb-5" spellCheck="false">
                <div id="text-stage" className="caret-transparent text-4xl focus:outline-none p-4 lg:cpx-20 py-10 no-underline whitespace-pre-wrap" tabIndex="0" contentEditable onKeyDown={handleTyping} suppressContentEditableWarning={true}>
                    <span className="text-green-400">{typed}</span>
                    <span className="bg-red-400">{wrong}</span>
                    {<span className="underline underline-offset-2 font-semibold" ref={startOfText}>{outstanding[0]}</span>}
                    {outstanding.slice(1)}
                    
                </div>
    
                <div id="text-done" className="flex flex-col justify-center items-center gap-4 text-4xl text-slate-600 hidden">
                    <p>WOW you did it!!!</p>
                    <button onClick={reset} className="text-4xl text-slate-600 border-4 p-2 border-blue-200">Reset</button>
                </div>
            
            </div>

            <button id="begin-button" onClick={begin} className="text-4xl border-4 p-2 border-blue-200 w-full bg-slate-500 mb-10">Begin</button>
        </div>
        
    );
}
 
export default TextStage;