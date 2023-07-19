import './App.css';
import AboutMe from './sections/AboutMe.jsx';
import SkillSet from './sections/SkillSet.jsx';
import MyWork from './sections/MyWork';
import Contact from './sections/Contact';
import Header from './sections/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <AboutMe />
      <SkillSet />
      <MyWork />
      <Contact />
      <footer className="footer text-center bg-bg-green text-sm sm:text-lg font-bold pb-2">JinMun's portfolio © 2023 | All rights reserved.</footer>
    </div>
  );
}

export default App;
