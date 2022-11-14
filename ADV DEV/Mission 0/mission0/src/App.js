import "./App.css";
import NavBar from "./components/NavBar.js";
import MainContent from './components/MainContent.js'
import Footer from './components/Footer.js';
function App() {
  return (
    <div className="App">
      <header>
        <div>
          <NavBar />
        </div>
      </header>
      <section><MainContent/></section>

      <footer><Footer /></footer>
    </div>
  );
}

export default App;
