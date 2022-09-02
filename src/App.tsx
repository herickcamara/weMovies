import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { MoviProvider } from "./contexts/index";
import { RouterList } from "./router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MoviProvider>
      <BrowserRouter>
        <RouterList />
      </BrowserRouter>
    </MoviProvider>
  );
}

export default App;
