import ReactDOM from "react-dom/client";
import SidebarView from "./views/SidebarView";
import { ConfigProvider } from "antd";
import theme from "./config/theme";
import "./styles/index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(<ConfigProvider theme={theme}><SidebarView /></ConfigProvider>);
