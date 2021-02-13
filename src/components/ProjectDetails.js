import {useParams} from 'react-router-dom';
import {Image} from 'react-bootstrap';
import {useTheme} from '../ThemeContext';
const ProjectDetails = ({projects}) => {
    const {id} = useParams();
    const project = projects.filter((item)=> item.id == id)
    console.log(project);
    const [darkTheme,toggleTheme] = useTheme();
console.log(darkTheme , toggleTheme)
    return(
      
        <div className={`${darkTheme ? 'dark' : 'light'} description`}>
            {
  <div className="none" key={project[0].id}>
 <h2>{project[0].title}<span><a href={project[0].link} className='button projectRedirect' target='_blank'> More</a></span></h2>
   <p>{project[0].description}</p>
<p>Written by :{project[0].author}</p>
   <p>Technologies:{project[0].technologies}</p>
<div id='descriptionImage'>
   <img src="https://via.placeholder.com/150
C/O https://placeholder.com/" />
</div>



   </div>
            }
</div>   
)}
export default ProjectDetails;