import React, { useState } from "react";
import hero from '../image/bg.jpg';
import hero1 from '../image/hero.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import paint from '../image/Morgan_files/home.3efb0b99fc9039916688.jpg';
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
  const [selectedPainting, setSelectedPainting] = useState(null);

  // Add your painting cards data here
  const paintings = [
    {
      id: 1,
      image: card1,
      title: "Sea Storm",
      description: "This painting is one of my latest works on sea storms, capturing the wild energy and movement of the ocean."
    },
    {
      id: 2,
      image: card2,
      title: "Sunset Glory",
      description: "A beautiful sunset captured with vivid colors, showcasing nature's magnificent palette."
    },
    {
      id: 3,
      image: card3,
      title: "Urban Graph",
      description: "Graphical urban art with a mix of colors inspired by city life."
    },
    {
      id: 4,
      image: card4,
      title: "Night Whisper",
      description: "A calm and serene night scene emphasizing subtle light and shadows."
    },
    {
      id: 5,
      image: card5,
      title: "Flower Power",
      description: "Vibrant floral artwork filled with life and color."
    },
    {
      id: 6,
      image: card6,
      title: "Abstract Mystery",
      description: "An abstract piece that invites the viewer to find their own meaning."
    }
  ];

  return (
    <>
      {/* Example of keeping your hero section and intro unchanged */}
      <img className="hero" src={hero} alt="hero" />
      <img className="hero1" src={hero1} alt="hero1" />
      <div className="shadow">
        <Container>
          <Row>
            <Col>
              <h1 className="my-5">A Few Words About Me</h1>
              <p className="para">
                My name is Samantha. I am a passionate artist and web developer. Explore my paintings below!
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col>
            <h1 className="my-4 heading">My Paintings</h1>
          </Col>
        </Row>
        <Row>
          {paintings.map((painting) => (
            <Col key={painting.id} md={4} className="mb-4">
              <Card className="shadow painting1">
                <Card.Img variant="top" src={painting.image} style={{ height: '330px' }} />
                <Card.Body>
                  <Card.Title>{painting.title}</Card.Title>
                  <Card.Text>{painting.description.substring(0, 100)}...</Card.Text>
                  <Button
                    id="button"
                    className="my-2"
                    variant="outline-warning"
                    onClick={() => setSelectedPainting(painting)}
                  >
                    Visit details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Detail popup/modal */}
      {selectedPainting && (
        <div
          style={{
            position: 'fixed',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
            zIndex: 1000,
            maxWidth: '90%',
            maxHeight: '80%',
            overflowY: 'auto',
          }}
        >
          <h2>{selectedPainting.title}</h2>
          <img
            src={selectedPainting.image}
            alt={selectedPainting.title}
            style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
          />
          <p style={{ marginTop: '10px' }}>{selectedPainting.description}</p>
          <Button variant="outline-danger" onClick={() => setSelectedPainting(null)}>
            Close
          </Button>
        </div>
      )}
    </>
  );
}

export default Home;
