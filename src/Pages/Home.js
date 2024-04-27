import React from "react";
import hero from '../image/bg.jpg';
import hero1 from '../image/hero.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import paint from '../image/Morgan_files/home.3efb0b99fc9039916688.jpg'
import Card from 'react-bootstrap/Card';
import card1 from '../image/Morgan_files/18_32_59_project-1.jpg';
import card2 from '../image/Morgan_files/20_0_12_project-4.jpg';
import card3 from '../image/Morgan_files/20_1_25_project-3.jpg';
import card4 from '../image/Morgan_files/20_2_27_project-2.jpg';
import card5 from '../image/Morgan_files/20_3_29_project-5.jpg';
import card6 from '../image/Morgan_files/20_4_21_project-6.jpg';
import square1 from '../image/user.png';
import square2 from '../image/leaf.png';
import square3 from '../image/apple-logo.png';
import square4 from '../image/house.png';


function Home() {
  return(
    <>
         <img className="hero" src={hero} />
         <img className="hero1" src={hero1}/>
         <div className="shadow">
         <Container>
      <Row>
        <Col><h1 className="my-5">A Few Words About Me</h1>
        <p className="para">My name is Samantha Morgan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you.
        </p>
        <Button id="button" className="my-2" variant="outline-warning">Learn More</Button>{' '}
        </Col>
        <Col><img className="my-5 rounded" src={paint}/></Col>
      </Row>
    </Container>
      </div>
      
        <h1 className="my-4 heading">My Paintings</h1>
      
      <div>
      <Container>
      <Row>
        <Col>
        <Card className="shadow painting1">
      <Card.Img variant="top" src={card1} style={{height:'330px'}} />
      <Card.Body>
        <Card.Title>Sea Storm</Card.Title>
        <Card.Text>
        This painting is one of my latest works on sea ...
        </Card.Text>
        <Button id="button" className="my-2" variant="outline-warning">Visit details</Button>{' '}
      </Card.Body>
    </Card>
        </Col>
        <Col><Card className="shadow painting1">
      <Card.Img variant="top" src={card2} style={{height:'330px'}} />
      <Card.Body>
        <Card.Title>Sea Storm</Card.Title>
        <Card.Text>
        This painting is one of my latest works on sea ...
        </Card.Text>
        <Button id="button" className="my-2" variant="outline-warning">Visit details</Button>{' '}
      </Card.Body>
    </Card></Col>
        <Col><Card className="shadow painting1">
      <Card.Img variant="top" src={card3}  />
      <Card.Body>
        <Card.Title>Sea Storm</Card.Title>
        <Card.Text>
        This painting is one of my latest works on sea ...
        </Card.Text>
        <Button id="button" className="my-2" variant="outline-warning">Visit details</Button>{' '}
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
    
</div>

<div>
      <Container>
      <Row className="my-4">
        <Col>
        <Card className="shadow painting1">
      <Card.Img variant="top" src={card4} style={{height:'330px'}} />
      <Card.Body>
        <Card.Title>Sea Storm</Card.Title>
        <Card.Text>
        This painting is one of my latest works on sea ...
        </Card.Text>
        <Button id="button" className="my-2" variant="outline-warning">Visit details</Button>{' '}
      </Card.Body>
    </Card>
        </Col>
        <Col><Card className="shadow painting1">
      <Card.Img variant="top" src={card5} style={{height:'330px'}} />
      <Card.Body>
        <Card.Title>Sea Storm</Card.Title>
        <Card.Text>
        This painting is one of my latest works on sea ...
        </Card.Text>
        <Button id="button" className="my-2" variant="outline-warning">Visit details</Button>{' '}
      </Card.Body>
    </Card></Col>
        <Col><Card className="shadow painting1">
      <Card.Img variant="top" src={card6} style={{height:'330px'}} />
      <Card.Body>
        <Card.Title>Sea Storm</Card.Title>
        <Card.Text>
        This painting is one of my latest works on sea ...
        </Card.Text>
        <Button id="button" className="my-2" variant="outline-warning">Visit details</Button>{' '}
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
    
</div>
    <h1 className="my-4 heading">Services</h1>
    <p className="para1">If you are looking for custom paintings, which will decorate your home or office, consider booking one or several of
my services listed below. They will add more colors and emotions to your daily life.
    </p>
    <div className="flex">
    <Card id="square1">
      <Card.Img variant="top" src={square1} id="img" />
      <Card.Body>
        <Card.Title id="para2">portrait</Card.Title>
      </Card.Body>
    </Card>
  
    <Card id="square2">
      <Card.Img variant="top" src={square2} id="img" />
      <Card.Body>
        <Card.Title id="para2">Landscape</Card.Title>
      </Card.Body>
    </Card>

    <Card id="square2">
      <Card.Img variant="top" src={square3} id="img" />
      <Card.Body>
        <Card.Title id="para2">Still Life</Card.Title>
      </Card.Body>
    </Card>

    <Card id="square2">
      <Card.Img variant="top" src={square4} id="img" />
      <Card.Body>
        <Card.Title id="para2">Urban</Card.Title>
      </Card.Body>
    </Card>
    </div>
    <Button id="button" className="my-5" variant="outline-warning">View All</Button>{' '}
    </>
  )
  
  }

export default Home

