import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ marginTop: -70 }}>
        <Banner />
      </div>
      <Skills />
      <Projects />
      <Contact />
      <div style={{ marginTop: -110 }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
