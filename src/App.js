import Weather from "./Weather.js";
import 'bootstrap/dist/css/bootstrap.css';
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
      <footer>
        <small>
          This React Weather App is open-source and was coded by{" "}
          <a href="https://github.com/luisakiefer/weather-react">
            Luísa Kiefer
          </a>
          .{" "}
        </small>
      </footer>
    </div>
  );
}

export default App;
