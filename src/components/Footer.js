import {Link} from 'react-router-dom';


function Footer() {
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
 <nav className="footer">
 <h3>Made with Effort by Javier Perez</h3>
 <div className="links">
     <a><Link to='/'>Home</Link></a>
     <a><Link to='/portfolio'>Portfolio
      </Link></a>
 </div>
</nav>
)
}

export default Footer;