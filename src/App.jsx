import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { ProtectRouter } from "./components";
import { HomeLayout, Landing, Register } from "./pages";


function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRouter user={true}>
         <HomeLayout/>
        </ProtectRouter>
      ),
      children: [
        {
          index: true,
          element: <Landing />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return ( <RouterProvider router={routes}/> )
}

export default App