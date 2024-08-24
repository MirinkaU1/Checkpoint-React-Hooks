// Filter.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [filterType, setFilterType] = useState('title');

  const handleFilter = () => {
    onFilter(title, rating, filterType);
  };

  return (
    <Form inline className="justify-content-center form-navbar">
      <Form.Group controlId="formFilterType" className="mr-2">
        <Form.Control className="form-select" as="select" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="title">Titre</option>
          <option value="rating">Note</option>
        </Form.Control>
      </Form.Group>

      {filterType === 'title' && (
        <Form.Group controlId="formTitle" className="mr-2">
          <Form.Control type="text" placeholder="Entrer le titre" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
      )}

      {filterType === 'rating' && (
        <Form.Group controlId="formRating" className="mr-2">
          <Form.Control type="number" placeholder="Entrer la note" value={rating} onChange={(e) => setRating(e.target.value)} />
        </Form.Group>
      )}

      <Button variant="outline-info" onClick={handleFilter}>Filtrer</Button>
    </Form>
  );
};

export default Filter;