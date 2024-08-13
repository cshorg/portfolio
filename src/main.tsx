import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import ThemeToggle from "./components/ThemeToggle.tsx"
import { BrowserRouter } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeToggle>
      <Analytics />
      <SpeedInsights />
      <App />
    </ThemeToggle>
  </BrowserRouter>
)
