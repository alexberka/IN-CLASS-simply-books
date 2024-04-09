import {
  getAuthorBooks, getSingleAuthor, deleteSingleAuthor, getAuthors,
} from './authorData';
import { getSingleBook, deleteBook, getBooks } from './bookData';

const viewBookDetails = (bookFirebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(bookFirebaseKey)
    .then((bookObject) => {
      getSingleAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObject });
        });
    }).catch((error) => reject(error));
});

const viewAuthorDetails = (authorFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleAuthor(authorFirebaseKey), getAuthorBooks(authorFirebaseKey)])
    .then(([authorObject, authorBooksArray]) => {
      resolve({ ...authorObject, books: authorBooksArray });
    }).catch((error) => reject(error));
});

const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  getAuthorBooks(authorId).then((booksArray) => {
    console.warn(booksArray, 'Author Books');
    const deleteBookPromises = booksArray.map((book) => deleteBook(book.firebaseKey));

    Promise.all(deleteBookPromises).then(() => {
      deleteSingleAuthor(authorId).then(resolve);
    });
  }).catch((error) => reject(error));
});

const searchStore = async (uid, query) => {
  const matchedBooks = await getBooks(uid).then((data) => (
    data.filter((book) => book.title.toLowerCase().includes(query)
    || book.description.toLowerCase().includes(query)
    || book.price.toLowerCase().includes(query))
  ));
  const matchedAuthors = await getAuthors(uid).then((data) => (
    data.filter((author) => author.first_name.toLowerCase().includes(query)
    || author.last_name.toLowerCase().includes(query)
    || author.email.toLowerCase().includes(query))
  ));
  return { books: matchedBooks, authors: matchedAuthors };
};

export {
  viewBookDetails, viewAuthorDetails, deleteAuthorBooks, searchStore,
};
