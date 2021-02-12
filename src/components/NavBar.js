import { Navbar,Nav,NavDropdown, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function NavBarComponent () {
    return(
//     <Navbar bg="light" expand="lg">
//   <Navbar.Brand >React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link >
//       <Link to='/'>Home</Link></Nav.Link>
//       <Nav.Link >
//       <Link to='/portfolio'>Portfolio
//       </Link></Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
 <nav className="navbar">
 <h1>Javier Perez</h1>
 <div className="links">
     <a><Link to='/'>Home</Link></a>
     <a><Link to='/portfolio'>Portfolio
      </Link></a>
      <a href="/Zippedresume.zip" className='button' download>Download Resume</a>
 </div>
</nav>
)
}

export default NavBarComponent;