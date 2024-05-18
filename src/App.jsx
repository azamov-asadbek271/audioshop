import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { ProtectRouter } from "./components";
import { auth } from "./fairbase/FairbaseConfig";
import { authReady, login } from "./feature/user/UserConfig";
import { EarPhones, HeadPhones, HomeLayout, Landing, Register,
   Speakers } from "./pages";
// action
import { action as RegisteAction } from "./pages/Register";
import "./App.css"

// loader
// import { loader as LandingLoader } from "./pages/Landing";

function App() {
  const { user, authReadyState } = useSelector((state) => state.cartUser);
  const dispatch = useDispatch()
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRouter user={user}>
          <HomeLayout />
        </ProtectRouter>
      ),
      children: [
        {
          index: true,
          element: <Landing />,
          
        },
        {
          path: "/headphones",
          element: <HeadPhones />,
        },
        {
          path: "/speakers",
          element: <Speakers />,
        },
        {
          path: "/earphones",
          element: <EarPhones />,
        },
      ],
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      action: RegisteAction,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      dispatch(login(user))
      dispatch(authReady())
    })
  })
  return <>{authReadyState && <RouterProvider router={routes} />}</>;
}

export default App