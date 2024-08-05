import { useState } from "react"
import TextInput from "./components/TextInput"
import TextStage from "./components/TextStage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showTextButton, setShowTextButton] = useState(false);
  const [showTextStage, setShowStageTextButton] = useState(true);

  const [text, setText] = useState("Hi, this is an example of some text you can use.");

  const handleText = (text) => {
    setText(text);
  }

  const showText = () => {
    setShowTextButton(!showTextButton);
    setShowStageTextButton(!showTextStage);
  }
  return (
    <div className="bg-slate-500 w-screen h-screen">
      <div className="flex justify-between items-center h-20 space-x-4 p-2 mb-36">
        <h1 className="text-4xl text-blue-200 border-4 p-2 border-blue-200">Touch Typer</h1>
        <button id="text-input" onClick={showText} className="text-4xl text-blue-200 border-4 p-2 border-blue-200">Text</button>
      </div>
      
      <div className="flex justify-center items-center h-52">
        {showTextButton &&  <TextInput textSetter={handleText} text={text}/>}
        {showTextStage && <TextStage text={text}/>}
      </div>
      
    </div>
  )
}

export default App
