import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Naving() {
  return (
    <div>
      
     <Navbar bg="primary" variant="dark">
        <Container>
        <img
              src="https://www.carlogos.org/car-logos/scuderia-ferrari-logo-800x1050.png"
              width="30"
              height="30"
            
              className="d-inline-block align-top"
              alt=""
            />

          <Navbar.Brand href="#home">Ferrarihub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.ferrari.com/en-EN/auto/car-range">Home</Nav.Link>
            <Nav.Link href="https://www.topgear.com/car-reviews/find/make/ferrari">Reviews</Nav.Link>
            <Nav.Link href="https://www.carwale.com/ferrari-cars/">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
      <div >
      <img style={{width:'500px',height:'500px'}} src='https://di-uploads-pod15.dealerinspire.com/lakeforestsportscars/uploads/2022/08/JmvnOd8dyd5mhnVLTqbKiQxm9HgZciN1lqx8shFa.jpg' alt=''/>
    
    </div>
    </div>
  )
}

export default Naving