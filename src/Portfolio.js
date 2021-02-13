import {Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {ThemeContext, useTheme} from './ThemeContext';
function Portafolio({projects,showMore}){
    const [darkTheme] = useTheme();
    return(
        <div className={` content`}>
            <h1>projects</h1>
{projects.map((project)=>(
        <div className={`${darkTheme ? 'dark' : 'light'} project-preview`} key={project.id}>
            <h2>{project.title}</h2>
<p>{project.description}</p>
    <p>Written by {project.author}</p>
<p>Technologies:{project.technologies}</p>
<Link to={`/portfolio/${project.id}`}>
    <button className='button'>More Info</button>
    </Link>
        </div>
    ))
}
</div>
    )
}
export default Portafolio;