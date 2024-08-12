import { useEffect, useState } from "react";

const TextInput = ({textSetter, text}) => {

    const [inputText, setInputText] = useState(text);

    useEffect(() => {
        textSetter(inputText);
        
    }, [inputText]);
    
    const handleChange = (e) => {
        setInputText(e.target.value);
    }
    return (
        <div className="m-6 mx-40 p-5">
            <textarea id="text-input" value={inputText} onChange={handleChange} placeholder="Please provide your own text." className="text-4xl bg-slate-500 border-4 border-blue-200 rounded w-full p-4 h-96 overflow-hidden resize-y shadow shadow-slate-800"></textarea>
        </div>
    );
}
 
export default TextInput;