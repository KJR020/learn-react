import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("--App--")
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };
  const contentStyle = {
    color: "blue",
    fontSize: "20px", // font-sizeではなく、fontSizeとする必要がある。JSでは-が使えないらしい
  }

  return (
    <>
      <h1 style={{ color: "red" }}>Hello, World!</h1>
      <ColorfulMessage color="skyblue">How are you?</ColorfulMessage> 
      <ColorfulMessage color="green">I'm fine.</ColorfulMessage>
      <button onClick={onClickCountUp}>Count Up Button</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>:)</p>}
    </>
  );
};