import Button from "./components/UI/Button/Button";
import React, { useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={() => setShowParagraph((prevState) => !prevState)}>
        Toggle Paragraph
      </Button>
    </div>
  );
}

export default App;
