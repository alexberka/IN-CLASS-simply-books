import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

export default function AuthorCard({ author }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{author.first_name} {author.last_name}</Card.Title>
        <p className="card-text bold">{author.email}</p>
        <Link href={`/author/${author.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/author/edit/${author.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  author: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }),
};

AuthorCard.defaultProps = {
  author: {
    first_name: 'First-Name',
    last_name: 'Last-Name',
    email: 'Email',
    favorite: false,
  },
};
