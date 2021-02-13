import {Link} from 'react-router-dom';
import { useTheme } from '../ThemeContext'

function Footer() {
    const [darkTheme] = useTheme();
    return(
 <nav className={`${darkTheme ? 'dark': ''} footer`}>
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