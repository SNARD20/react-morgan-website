import React from 'react';
import hero2 from '../image/project-6.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import paint1 from '../image/still-life-1.jpg'



const About = () => {
  return (
    <>
    <div>
    <img className='hero2' src={hero2} />
    <h1 className='about'>ABOUT</h1>
    </div>
    <Container>
      <Row>
        <Col><h1 className="my-5">A Few Words About Us</h1>
        <p className="para">There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character. I am always ready to meet all your wishes and preferences in your portrait, whether it's created as a personal painting or a piece of art for an official person. Contact me today to discuss your future portrait.
        </p>
        <Button id="button" className="my-2" variant="outline-warning">Learn More</Button>{' '}
        </Col>
        <Col><img className="my-5 rounded" src={paint1}/></Col>
      </Row>
    </Container>
    </>
  )
}

export default About


