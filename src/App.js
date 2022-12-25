import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";
import AddElementView from "./Views/AddElementView/AddElementView";
import BookView from "./Views/BookView/BookView";
import HomeView from "./Views/HomeView/HomeView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />
  },
  {
    path: "/book",
    element: <BookView type="book" />
  },
  {
    path: "/ebook",
    element: <BookView type="ebook" />
  },
  {
    path: "/cd",
    element: <BookView type="cd" />
  },
  {
    path: "/addElement",
    element: <AddElementView />
  }
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* {console.log(crypto.randomUUID())} */}
    </div>
  );
}
