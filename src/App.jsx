import { ColorfulMessage } from "./components/ColofulMessage";

export const App = () => {
  const onClickButton = () => {
    alert('Clicked')
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
      <button onClick={onClickButton}>Button</button>
    </>
  );
};