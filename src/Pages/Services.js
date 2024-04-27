import React from 'react'
import hero2 from '../image/project-6.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import paint3 from '../image/services-1.jpg';
import paint4 from '../image/portrait-2.jpg';
import paint5 from '../image/portrait-3.jpg';
import paint6 from '../image/portrait-5.jpg';
import paint7 from '../image/portrait-4.jpg';



const Services= () => {
  return (
    <>
    <div>
    <img className='hero2' src={hero2} />
    <h1 className='about'>Services</h1>
    </div>
    <div className='flex2'>
    <Container>
      <Row>
        <Col>
        <img className="my-5 rounded paint3" src={paint3}/>
        
        </Col>
        <Col><h1 className="mt-5">Service Description</h1>
        <p className="para">There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character.
        </p>
        <Button id="button" className="my-2" variant="outline-warning">Learn More</Button>{' '}
        </Col>
        </Row>
    </Container>
    </div>
    <div>
    <Container>
      <Row>
        <Col>
        
        <img className="my-5 rounded paint3" src={paint7}/>
        <h3 className="text1">Oil on Canvas of a Little Girl</h3>
        <p className="text2">This portrait was created in 2015 for my brother's daughter, Emily Morgan.</p>
        </Col>
        <Col>
        <img className="my-5 rounded paint3" src={paint6}/>
        </Col>
        </Row>
    </Container>
    </div>
    </>
  )
}

export default Services