import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Curricular } from './components/Curricular';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div style={{marginTop: -70}}>
      <Banner/>
      </div>
      <Skills/>
      <div style={{marginTop: -40}}>
      <Curricular/>
      </div>
      <div style={{marginTop: 60}}>
      <Projects/>
      </div>
      <div>
      <Contact/>
      </div>
      <div style={{marginTop: -170}}>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
