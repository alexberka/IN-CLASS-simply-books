import React, { useEffect, useState } from 'react';
import AuthorCard from '../components/AuthorCard';
import { getAuthors } from '../api/authorData';
import { useAuth } from '../utils/context/authContext';

export default function Authors() {
  // TODO: Set a state for books
  const [authors, setAuthors] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  // TODO: create a function that makes the API call to get all the books
  const getAllTheAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllTheAuthors();
  });

  return (
    <div>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {authors.map((author) => (
          <AuthorCard key={author.firebaseKey} author={author} onUpdate={getAllTheAuthors} />
        ))}
      </div>
    </div>
  );
}
