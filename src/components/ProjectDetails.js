import {useParams} from 'react-router-dom';
const ProjectDetails = ({projects}) => {
    const {id} = useParams();
    const project = projects.filter((item)=> item.id == id)
    console.log(project)
    return(
        <div className='description'>
            {
               <div className="none" key={project[0].id}>
               <h2>{project[0].title}</h2>
   <p>{project[0].description}</p>
       <p>Written by :{project[0].author}</p>
   <p>Technologies:{project[0].technologies}</p> 
   </div>
            }
</div>   
)}
export default ProjectDetails;