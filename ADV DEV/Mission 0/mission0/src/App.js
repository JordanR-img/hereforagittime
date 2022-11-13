import "./App.css";
import NavBar from "./components/NavBar.js";
import MainContent from './components/MainContent.js'
function App() {
  return (
    <div className="App">
      <header>
        <div>
          <NavBar />
        </div>
      </header>
      <section><MainContent/></section>

      <footer></footer>
    </div>
  );
}

export default App;
