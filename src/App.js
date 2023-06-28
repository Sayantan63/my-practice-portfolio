import Navbar from "./components/navbar";
import Home from "./components/Home";
import Sociallinks from "./components/sociallinks";
import About from "./components/Aboute";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Skill/>
      <Contact/>
      <Sociallinks/>
    </div>
  );
}

export default App;
