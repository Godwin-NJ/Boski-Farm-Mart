import {Link} from 'react-router-dom';
import {useState} from 'react';
import M from 'materialize-css'
const Navbar = () => {
    const[open, setOpen] = useState(false);

    //  const toggleMenu = () => {
    //        setOpen(!open);
    //     }; 
        
    document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});
        

    return ( 
        <div>
             <nav className="nav-braket">
            <div className="nav-wrapper navbar">
            <p className="brand-logo">BOSKI FARM MART</p>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger" >
                <i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down ">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
            </ul>
            </div>
            </nav>
            {/* onClick={() => toggleMenu()} */}
           <ul className="sidenav" id="mobile-demo"  >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
            </ul>

        </div>
        
     );
}
 
export default Navbar;