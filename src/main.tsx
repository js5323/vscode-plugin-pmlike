import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router";
import theme from "./config/theme";
import { ConfigProvider } from "antd";
import "./styles/index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(<ConfigProvider theme={theme}><RouterProvider router={router} /></ConfigProvider>);
