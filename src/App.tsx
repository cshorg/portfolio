import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Wordle from "./pages/projects/Wordle"
import TftForge from "./pages/projects/TftForge"
import Complib from "./pages/projects/Complib"
import GoWebsocket from "./pages/projects/GoWebsocket"
import BlogLayout from "./layouts/BlogLayout"

function App({ handleTheme }: any) {
  return (
    <Routes>
      <Route path="/" element={<MainLayout handleTheme={handleTheme} />}>
        <Route index element={<Home />} />
      </Route>
      <Route element={<BlogLayout />}>
        <Route path="/wordle-clone" element={<Wordle />} />
        <Route path="/tft-forge" element={<TftForge />} />
        <Route path="/complib" element={<Complib />} />
        <Route path="/go-websocket" element={<GoWebsocket />} />
      </Route>
    </Routes>
  )
}

export default App
