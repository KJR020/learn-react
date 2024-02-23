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
      <ColorfulMessage color="skyblue" message="How are you?"/>
      <ColorfulMessage color="green" message="I'm fine."/>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};