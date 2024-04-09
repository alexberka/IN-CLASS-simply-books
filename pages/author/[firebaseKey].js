import React from 'react';
import { useRouter } from 'next/router';

export default function ViewAuthor() {
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const { firebaseKey } = router.query;

  return (
    <div>
      Display Author Details
    </div>
  );
}
