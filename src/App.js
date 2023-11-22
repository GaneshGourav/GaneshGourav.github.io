import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { Skills } from './Pages/Skills';
import { Projects } from './Pages/Projects';
import { Footer } from './Pages/Footer';
import { Tools } from './Pages/Tools';
import { Github } from './Pages/Github';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
      {/* <AllRoutes/> */}
      <Home/>
      <About/>
      <Skills/>
      <Tools/>
      <Projects/>
      <Github/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
