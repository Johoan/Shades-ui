import "./Footer.css";
import { BsPencil } from 'react-icons/bs';
import { BiLayer } from 'react-icons/bi';

function Footer() {
    return (
        <div className="footer-grid">
            <div>
                <h3><BsPencil />Easy to Use</h3>
                <p>Editing and customizing Essential<br/>
                   Landing is easy and fast. 
                </p>
            </div>

            <div>
                <h3><BiLayer />100% Responsive</h3>
                <p>Editing and customizing Essential<br/>
                   Landing is easy and fast.</p>
            </div>

            <div>
                <h3>50+ New Pages</h3>
                <p>Editing and customizing Essential<br/>
                   Landing is easy and fast.</p>
            </div>
        </div>
    );
}
export default Footer;