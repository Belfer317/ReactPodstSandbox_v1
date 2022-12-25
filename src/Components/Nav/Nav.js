import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/book">Books</Link>
      </li>
      <li>
        <Link to="/ebook">E-books</Link>
      </li>
      <li>
        <Link to="/cd">CDs</Link>
      </li>
      <li>
        <Link to="/addElement">Add element</Link>
      </li>
    </ul>
  </nav>
);
export default Nav;
