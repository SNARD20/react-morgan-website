import React from 'react'
import hero2 from '../image/project-6.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import card7 from '../image/project-3.jpg';
import card8 from '../image/project-6.jpg';
import card9 from '../image/project-5.jpg';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
  return (
    <>
    <div>
    <img className='hero2' src={hero2} />
    <h1 className='about'>Blogs</h1>
    </div>

    <div className='my-5'>
      <Container>
      <Row>
        <Col>
        <Card className="shadow painting1">
      <Card.Img variant="top" src={card7} style={{height:'330px'}} />
      <Card.Body>
        <Card.Title>Richard Diebenkorn</Card.Title>
        <Card.Text>
        Richard Diebenkorn, Cityscape #1, 1963, Oil on canvas, <br/> In the early NUM0s, a post-war Ameri...
        </Card.Text>
        <Button id="button" className="my-2" variant="outline-warning">Visit details</Button>{' '}
      </Card.Body>
    </Card>
        </Col>
        <Col><Card className="shadow painting1">
      <Card.Img variant="top" src={card8} style={{height:'330px'}} />
      <Card.Body>
        <Card.Title>David Hockney</Card.Title>
        <Card.Text>
        David Hockney, Going Up Garrowby Hill, 2000, Oil on canvas,<br/>In the late NUM0s and early NUM...
        </Card.Text>
        <Button id="button" className="my-2" variant="outline-warning">Visit details</Button>{' '}
      </Card.Body>
    </Card></Col>
        <Col><Card className="shadow painting1">
      <Card.Img variant="top" src={card9} style={{height:'330px'}} />
      <Card.Body>
        <Card.Title>Peter Doig</Card.Title>
        <Card.Text>
        Peter Doig, Orange Sunshine, 1995 <br/> He is a Scottish born artist, who as a child moved first ...
        </Card.Text>
        <Button id="button" className="my-2" variant="outline-warning">Visit details</Button>{' '}
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
    
</div>
    </>
  )
}

export default Blogs  