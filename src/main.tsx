import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import ThemeToggle from "./components/ThemeToggle.tsx"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeToggle>
      <App />
    </ThemeToggle>
  </BrowserRouter>
)
