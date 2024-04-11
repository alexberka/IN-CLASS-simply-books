import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const { firebaseKey } = router.query;

  const displayAuthorDetails = () => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  };

  useEffect(() => {
    displayAuthorDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="text-center my-4">
        <h1>{authorDetails.first_name} {authorDetails.last_name}</h1>
        <p className="card-text bold">{authorDetails.email}</p>
        <div className="d-flex flex-wrap">
          {/* TODO: map over books here using BookCard component */}
          {authorDetails.books?.map((book) => (
            <BookCard key={book.firebaseKey} bookObj={book} onUpdate={displayAuthorDetails} />
          ))}
        </div>
      </div>
    </>
  );
}
