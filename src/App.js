import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <br />
        <br />
        <br />
        <footer className="App-footer">
          <small>
            Coded by Sara Jörheim via SheCodes and
            <a href="https://github.com/sarajorheim/dictionary-project.git">
              {" "}
              Open-Sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
