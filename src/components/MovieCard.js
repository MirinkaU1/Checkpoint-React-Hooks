// MovieCard.js
import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: '15rem', borderRadius: '10px', margin: '10px' }}>
        <Card.Img variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.description.length > 100 ? movie.description.substring(0, 100) + '...' : movie.description}
          </Card.Text>
          <Card.Text>Note: {movie.rating}</Card.Text>
          <Button variant="primary" onClick={handleShow}>Voir plus</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={movie.posterURL} alt={movie.title} style={{ width: '100%' }} />
          <h5 className='mt-3'>Description:</h5>
          <p className='mt-2'>{movie.description}</p>
          <p>Note: {movie.rating}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieCard;