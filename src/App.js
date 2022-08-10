import Achievements from "./components/Achievements";
import Community from "./components/Community";
import Group55 from "./components/Group55";
import Howto from "./components/Howto";
import Navhome from "./components/Navhome";
import Sponsors from "./components/Sponsors";
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();



function App() {
  return (
    <div className="App">
     <Navhome />
     <Achievements />
     <Sponsors />
     <Group55 />
     <Howto />
     <Community />
    </div>
  );
}

export default App;
