import { useState } from "react";
import { Homepage } from "./components/homepage/Homepage";
import { AboutMe } from "./components/aboutMe/AboutMe";
document.body.style.backgroundColor = "#121217";

function App() {
  const [count, setCount] = useState(0);

  const [about, setAbout] = useState(false);

  return (
    <>
      <Homepage about={about} setAbout={setAbout} />
      <AboutMe about={about} setAbout={setAbout} />
    </>
  );
}

export default App;
