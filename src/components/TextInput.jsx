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
        <div>
            <textarea id="text-input" value={inputText} onChange={handleChange} placeholder="Please provide your own text."></textarea>
        </div>
    );
}
 
export default TextInput;