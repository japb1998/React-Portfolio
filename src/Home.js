import {Container,Row,Col,Image} from 'react-bootstrap'
function Home (){
    return(
        <Container className='main-container'> 
        <div className='container-title'><h1>Javier Perez</h1></div>
            <Row >
               <Col xs={6} md={4}>
      <Image src="https://via.placeholder.com/150
C/O https://placeholder.com/" rounded />
    </Col>
                <Col><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam officia incidunt sint atque harum. Odio accusamus repellendus exercitationem ducimus fugiat veniam, debitis ad. Adipisci culpa laborum distinctio provident unde! Perspiciatis.</p></Col>
            </Row>
        </Container>
    )
}
export default Home