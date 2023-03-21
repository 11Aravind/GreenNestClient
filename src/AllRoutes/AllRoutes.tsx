import {useRoutes } from "react-router-dom";
import { About } from "../Pages/About/About";
import { Gallery } from "../Pages/Gallery/Gallery";
import {Home} from "../Pages/Home/Home";

export default function AllRoutes() {
  let Routes =useRoutes([
    {
    path: "/",
    element: <Home/>
  },
    {
    path: "/gallery",
    element: <Gallery/>
  },
    {
    path: "/About",
    element: <About/>
  }
]);
  return (
    <>
    {Routes}
    </>
  );
}
