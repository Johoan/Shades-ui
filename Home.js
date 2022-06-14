import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Content from "../components/Content";
import "./Home.css";
import { BsStack } from 'react-icons/bs';


function Home() {
    return (
    <div>
        
        <div className="header">
        <span><BsStack />Shades</span>
            <Link to="FreeLandingPages" className='navLink' >Free Landing Pages</Link>
            <Link to="Features" className='navLink'>Features</Link>
            <Link to="Services" className='navLink'>Services</Link>
            <Link to="Pricing" className='navLink'>Pricing</Link>
            <Link to="Contact" className='navLink'>Contact</Link>
            <Link to="GetStarted" className='button'><button>Get started</button></Link>
        </div>
            
        
            
        

        <div className='center'>
            <Content />
        </div>

        <Footer />


    </div>
    
);
}

export default Home;