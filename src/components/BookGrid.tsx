import useBooks from "../hooks/useBooks";


const BookGrid = () => {
  const { books, error, loading } = useBooks();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.volumeInfo.title}</li>
      ))}
    </ul>

    // <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
    //   {books.map((book) => (
    //     <div key={book.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
    //       {book.volumeInfo.imageLinks?.thumbnail && (
    //         <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} style={{ width: '100%', height: 'auto' }} />
    //       )}
    //       <h3>{book.volumeInfo.title}</h3>
    //       {book.volumeInfo.authors && <p>By {book.volumeInfo.authors.join(', ')}</p>}
    //       {book.volumeInfo.description && <p>{book.volumeInfo.description}</p>}
    //       {book.volumeInfo.infoLink && (
    //         <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
    //           More Info
    //         </a>
    //       )}
    //     </div>
    //   ))}
    // </div>
  );
};

export default BookGrid;
