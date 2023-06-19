import Navbar from './components/Navbar';
import './App.css';
import AboutMe from './sections/AboutMe.jsx';
import SkillSet from './sections/SkillSet.jsx';
import MyWork from './sections/MyWork';
import Contact from './sections/Contact';
import Header from './sections/Header';

function App() {
  return (
    <div className="App">
      <Header/>      
      <AboutMe />
      <SkillSet />
      <MyWork />
      <Contact />
    </div>
  );
}

export default App;
