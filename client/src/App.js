import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Pages/landing";
import Todo from "./Pages/todo";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/home",
      element: (
        <Todo />
        // <div>
        //    <Link to="/">landing</Link>
        // </div>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
