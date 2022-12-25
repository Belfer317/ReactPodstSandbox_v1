const Book = ({ id, type, title, author }) => (
  <>
    <p>{type}</p>
    <h2>
      {id}. "{title}""
    </h2>
    <h3>{author}</h3>
  </>
);
export default Book;
