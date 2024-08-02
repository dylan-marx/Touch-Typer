import { useState } from "react"
import TextInput from "./components/TextInput"
import TextStage from "./components/TextStage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showTextButton, setShowTextButton] = useState(false);

  const [text, setText] = useState("Hi, this is an example of some text you can use.");

  const handleText = (text) => {
    setText(text);
  }

  const showText = () => {
    setShowTextButton(!showTextButton);
  }
  return (
    <div className="bg-slate-500 w-screen h-screen flex justify-center items-center">
      <button onClick={showText}>Text</button>
      <TextStage text={text}/>
      {showTextButton &&  <TextInput textSetter={handleText} text={text}/>}
    </div>
  )
}

export default App
