import WebCam from "react-webcam";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  const videoConstraints = {
    facingMode: "user"
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>Kenneth Haroldo López López</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>201906570</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-2 pt-3 pb-3 card">
        <Row className="justify-content-center pt-3 pb-3">
          <Col className="text-center">
            <WebCam
              audio={false}
              videoConstraints={videoConstraints}
            />
          </Col>
        </Row>
        
      </Container>
    </>
  )
}

export default App
