import logo from "./logo.svg";
import "./App.css";

function App() {
  const diziler = ["uğur", "betül", "nuray"];
  return (
    <div>
      {diziler.map((dizi, index) => (
        <div
          style={{
            backgroundColor: "orange",
            border: "1px solid black",
          }}
          key={index}
        >
          {dizi}
        </div>
      ))}
    </div>
  );
}

export default App;
