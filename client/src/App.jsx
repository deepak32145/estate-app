import Register from "./routes/register/register";
import Login from "./routes/login/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./routes/profilePage/profilePage";
import HomePage from "./routes/homePage/homePage";
import { Requireauth , Layout } from "./routes/layout/layout";
import { singlePageLoader } from "./lib/loaders";
import SinglePage from "./routes/SinglePage/SinglePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path : "/:id",
          element : <SinglePage/>,
          loader : singlePageLoader,
        }
       
      ],
    },
    {
      path: "/",
      element : <Requireauth/>,
      children: [
        { path: "/profile", element: <ProfilePage /> },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
