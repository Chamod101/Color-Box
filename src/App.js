import Square from "./Square";
import Input from "./Input";
import { useState } from "react";

function App() {

  const [colorValue, setColorValue] = useState('')
  const [hexCode, setHexCode] = useState('')

  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexCode={hexCode}
      />

      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexCode={setHexCode}
      />
    </div>
  );
}

export default App;
