import React from 'react';
import hero2 from '../image/project-6.jpg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const ContactUs = () => {
  return (
    <>

    <div>
    <img className='hero2' src={hero2} />
    <h1 className='about'>Contact</h1>
    </div>
    
    
    <Container fluid>
      <Row>
        <Col>
    
    <p class="my-5 mx-5 h2">Get In Touch</p>
     <form class="form" type="submit" method="post" action="thankyou.html"/>
    <form class="form" action="home.html" method="post" onsubmit="return validate()"/>
    <label for="username"></label> <br/> 
    <input className='input rounded' type="text" name="username" id="user" placeholder="Enter username"></input><br/>
    <span id="uname" class="text-danger font-weight-bold"></span>
    <label for="email"></label> <br/> 
    <input className='input rounded' type="email" name="email" id="email" placeholder="Enter email address" /><br/>
    <span id="emailid" class="text-danger font-weight-bold"></span>
    <label for="mobilenumber" ></label> <br/> 
    <input className='input rounded' type="number" name="mobilenumber" id="mobilenumber" placeholder="Enter Mobile number" /><br/>
    <span id="mobileno" class="text-danger font-weight-bold"/>
    
   
    <label/><br/>
    <textarea type="Enter message"  placeholder="Enter a message...."cols="70" rows="4"/><br/><br/>
    <Button id="button" className="my-2" variant="outline-warning">Send Message</Button>{' '}
    </Col>
    <Col>
    <p class="my-5 mx-5 h2">Our Address</p>
    <div className='flex'>
    <FontAwesomeIcon icon={faBuilding} />
    <p className='mx-2'>building 2130 Fulton Street, San Diego, CA 94117-1080 USA
    </p></div>
    <div className='flex'>
    <FontAwesomeIcon icon={faPhone} />
    <p className='mx-2'>1-800-1234-567
    </p></div>
    <div className='flex'>
    <FontAwesomeIcon icon={faEnvelope} />
    <p className='mx-2'>info@demolink.org
    </p></div>
    <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2247877367786!2d72.82848047373326!3d18.965677455429546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdf5cadca43%3A0x2f248f63460fcd4f!2sHeuristic%20Academy!5e0!3m2!1sen!2sin!4v1713076461930!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
    </div>
    </Col>
    </Row>
    </Container>


    </>
  )
}

export default ContactUs