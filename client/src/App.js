import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Pages/landing";
import Todo from "./Pages/todo";
import { useNavigate } from "react-router-dom";
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
        <PrivateRoute>
          <Todo />
        </PrivateRoute>
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

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const token = localStorage.token;

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);

  return token ? <>{children}</> : null;
}

export default App;
