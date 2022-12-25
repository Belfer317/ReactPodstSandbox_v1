import { useState } from "react";
import Button from "../Button/Button";
import "./AddElement.css";

const AddElement = () => {
  const element = {
    id: "",
    type: "",
    title: "",
    author: ""
  };

  const [newTitle, setNewTitle] = useState();
  const [newAuthor, setNewAuthor] = useState();
  const [newType, setNewType] = useState();

  const handleAddElem = (evt) => {
    evt.preventDefault();

    element.id = crypto.randomUUID();
    element.type = newType;
    element.title = newTitle;
    element.author = newAuthor;
    console.log(element);

    let collection = JSON.parse(localStorage.getItem("collection")) || [];

    collection = [...collection, element];

    localStorage.setItem("collection", JSON.stringify(collection));
    setNewTitle("");
    setNewAuthor("");
  };

  return (
    <>
      <form method="get" action="#" onSubmit={handleAddElem}>
        <label htmlFor="">
          Co chcesz dodać?:
          <select
            id="typeItemInCollection"
            name="typeItemInCollection"
            onChange={(evt) => setNewType(evt.target.value)}
          >
            <option value="">-- wybierz opcję --</option>
            <option value="book">książka</option>
            <option value="ebook">e-book</option>
            <option value="cd">CD</option>
          </select>
        </label>
        <label htmlFor="elementTitle">
          Tytuł:
          <input
            type="text"
            id="elementTitle"
            value={newTitle}
            onChange={(evt) => setNewTitle(evt.target.value)}
          />
        </label>
        <label htmlFor="elementAuthor">
          Autor:
          <input
            type="text"
            id="elementTitle"
            value={newAuthor}
            onChange={(evt) => setNewAuthor(evt.target.value)}
          />
        </label>
        <div>
          <Button innerText="dodaj" />
        </div>
      </form>
    </>
  );
};

export default AddElement;
