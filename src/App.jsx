import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
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
    </>
  );
};