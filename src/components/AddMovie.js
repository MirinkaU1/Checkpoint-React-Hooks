import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const AddMovie = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });
  const [showModal, setShowModal] = useState(false);

  const handleAddMovie = () => {
    onAddMovie(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
    setShowModal(false); // Fermer le modal après l'ajout du film
  };

  return (
    <div>
        <div className='addButton mb-2'>
            <Button variant="primary" onClick={() => setShowModal(true)}>
                Ajouter un film
            </Button>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
            <Modal.Title>Ajouter un nouveau film</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form className='form-addMovie'>
                <Form.Group controlId="formNewTitle">
                <Form.Label>Titre</Form.Label>
                <Form.Control type="text" placeholder="Entrer le titre" value={newMovie.title} onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} />
                </Form.Group>

                <Form.Group controlId="formNewDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Entrer la description" value={newMovie.description} onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} />
                </Form.Group>

                <Form.Group controlId="formNewPosterURL">
                <Form.Label>URL du Poster</Form.Label>
                <Form.Control type="text" placeholder="Entrer l'URL du poster" value={newMovie.posterURL} onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })} />
                </Form.Group>

                <Form.Group controlId="formNewRating">
                <Form.Label>Note</Form.Label>
                <Form.Control type="number" placeholder="Entrer la note" value={newMovie.rating} onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })} />
                </Form.Group>

                <Button variant="primary" onClick={handleAddMovie}>
                Ajouter
                </Button>
            </Form>
            </Modal.Body>
        </Modal>
    </div>
  );
};

export default AddMovie;