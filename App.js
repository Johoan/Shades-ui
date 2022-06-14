import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FreeLandingPages from './pages/FreeLandingPages'; 
import Features from './pages/Features'; 
import Services from './pages/Services'; 
import Pricing from './pages/Pricing'; 
import Contact from './pages/Contact'; 
import GetStarted from './GetStarted';

function App() {
  return (
  
    <div className="App">

        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="FreeLandingPages" element={ <FreeLandingPages/> } />
            <Route path="Features" element={ <Features/> } />
            <Route path="Services" element={ <Services/> } />
            <Route path="Pricing" element={ <Pricing/> } />
            <Route path="Contact" element={ <Contact/> } />
            <Route path="GetStarted" element={ <GetStarted/> } />
            
        </Routes>

    
    
    
    
    </div>);
}

export default App;
