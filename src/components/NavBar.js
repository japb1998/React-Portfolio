import { Navbar,Nav,NavDropdown, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useTheme } from '../ThemeContext';

function NavBarComponent () {
    const [darkTheme,toggleTheme] = useTheme();
console.log(darkTheme , toggleTheme)
    return(
 <nav className={`${darkTheme ? 'dark' : 'main' } navbar`}>
 <h1>Javier Perez</h1>
 <div className="links">
     <a><Link to='/'>Home</Link></a>
     <a><Link to='/portfolio'>Portfolio
      </Link></a>
      <a href="/Zippedresume.zip" style={{ color:'white'}}className='button' download>Download Resume</a>
    <button className='button' onClick={()=>(toggleTheme())}>{darkTheme?'Dark' : 'Light'}</button>
 </div>
</nav>
)
}

export default NavBarComponent;