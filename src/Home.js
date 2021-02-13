import {Container,Row,Col,Image} from 'react-bootstrap'
import profileImg from './images/profile.jpg';
function Home (){
    
    return(
        <Container className='main-container'> 
        <div className='container-title'><h1>About</h1></div>
            <Row >
               <Col xs={12} md={4} >
      <Image style={{width:'200px',height:'200px'}}src={profileImg} rounded />
    </Col>
                <Col xs={12} md={8}><p>Former private pilot, with 2 years of studies in mechanical engineer.

Currently enrolled on trilogy's coding bootcamp with the goal of working for a FAANG company</p></Col>
            </Row>
        </Container>
    )
}
export default Home