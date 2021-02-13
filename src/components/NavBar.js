import { Navbar,Nav,NavDropdown, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function NavBarComponent () {
    return(
 <nav className="navbar">
 <h1>Javier Perez</h1>
 <div className="links">
     <a><Link to='/'>Home</Link></a>
     <a><Link to='/portfolio'>Portfolio
      </Link></a>
      <a href="/Zippedresume.zip" style={{ color:'white'}}className='button' download>Download Resume</a>
 </div>
</nav>
)
}

export default NavBarComponent;