import { createBrowserRouter } from "react-router";
import IndexView from "../views/IndexView";

const router = createBrowserRouter([
  {
    path: "/",
    Component: IndexView,
  },
]);

export default router;
