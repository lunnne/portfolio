import Navbar from './components/Navbar';
import './App.css';
import AboutMe from './sections/AboutMe.jsx';
import SkillSet from './sections/SkillSet.jsx';
import MyWork from './sections/MyWork';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <SkillSet />
      <MyWork />
      <Contact />
    </div>
  );
}

export default App;
