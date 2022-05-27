import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <div className="weather-app-wrapper">
          <h1>React Weather App</h1>
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default App;
