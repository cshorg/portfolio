import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import ThemeToggle from "./components/ThemeToggle.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeToggle>
    <App />
  </ThemeToggle>
)
