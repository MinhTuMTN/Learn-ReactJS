// import logo from './logo.svg';
import "./App.css";
import ColorBox from "./components/ColorBox";

function App() {
  const colors = ["red", "green", "blue", "yellow", "pink"];
  return (
    <div className="App">
      {colors.map((value, index) => (
        <ColorBox key={index} color={value} />
      ))}
    </div>
  );
}

export default App;
