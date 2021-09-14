
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Skill from './Skill'
import Gallery from './Gallery'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Footer from './Footer'


function App() {
  return (
    <div style={{position: "relative", background: 'black'}} className="App" >
      <Navbar />
      <Home />
      <Skill />
      <Gallery />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
