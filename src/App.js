import './App.css';
import TextSpan from './TextSpan';
function App() {
  const sen = "Hello Shyam".split("");
  return (
    <div className="App">
      {sen.map((letter, index) => {
        return (
          <TextSpan key={index}>
            {letter}
          </TextSpan>
        );
      })}
    </div>
  );
}

export default App;
