import Book from "../../Components/Book/Book";
import Nav from "../../Components/Nav/Nav";

// const collection = [
//   { id: 1, title: "Kubuś Puchatek", author: "A. Milne" },
//   { id: 2, title: "Tytuł 2", author: "Autor 2" }
// ];

// console.log(collection)

const BookView = ({ type }) => {
  const collection = JSON.parse(localStorage.getItem("collection")) || [];
  return (
    <>
      <Nav />
      {collection
        .filter((element) => element.type === type)
        .map((item, index) => (
          <div key={item.id}>
            <Book
              id={index + 1}
              type={item.type}
              title={item.title}
              author={item.author}
            />
            <hr />
          </div>
        ))}
    </>
  );
};
export default BookView;
