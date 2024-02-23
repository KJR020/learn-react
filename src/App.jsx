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
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>How are you?</p>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};