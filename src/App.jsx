import { useEffect, useState } from "react"
import TextInput from "./components/TextInput"
import TextStage from "./components/TextStage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showTextButton, setShowTextButton] = useState(false);
  const [showTextStage, setShowStageTextButton] = useState(true);

  const [text, setText] = useState("In the quiet of the morning, the sun began its slow ascent, casting a golden glow over the landscape. The air was crisp, carrying the scent of dew-covered grass and blooming flowers. Birds chirped softly, welcoming the new day with their melodic songs. It was a moment of peace and stillness, where time seemed to pause, allowing the beauty of nature to unfold in its own gentle rhythm.");

  const handleText = (text) => {
    setText(text);
  }

  const showText = () => {
    setShowTextButton(!showTextButton);
    setShowStageTextButton(!showTextStage);
  }

  return (
    <div className="app flex flex-col  w-screen h-full">
      <div className="flex justify-between items-center h-20 space-x-6 p-4 py-6">
        <h1 className="title text-4xl text-blue-200 border-4 p-2 border-blue-200">Touch Typer</h1>
        <button id="text-input" onClick={showText} className="text-4xl text-blue-200 border-4 p-2 border-blue-200">Text</button>
      </div>
      {showTextStage &&
      <div className="flex justify-center items-center">
        
         <TextStage text={text || "Please provide some text."}/>
      </div>
      }

      {showTextButton &&  <TextInput textSetter={handleText} text={text}/>}
    </div>
  )
}

export default App
