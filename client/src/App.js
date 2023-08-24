import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Pages/landing";
import { Link } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/test",
      element: (
        <div>
          hi <Link to="/">landing</Link>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
