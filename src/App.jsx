import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Title />
      <UploadForm />
      <ImageGrid />
    </>
  );
}

export default App;
