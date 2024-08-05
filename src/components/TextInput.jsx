import { useEffect, useState } from "react";

const TextInput = ({textSetter, text}) => {

    const [inputText, setInputText] = useState(text);

    useEffect(() => {
        textSetter(inputText);
        
    }, [inputText]);
    
    const handleChange = (e) => {
        if (e.target.value.length != 0) {
            setInputText(e.target.value);
        } else {
            setInputText("Please provide some text you want to use.")
        }
    }
    return (
        <div>
            <textarea id="text-input" value={inputText} onChange={handleChange} placeholder="Please provide your own text."></textarea>
        </div>
    );
}
 
export default TextInput;