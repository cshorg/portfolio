import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"

function App() {
  return (
    <main className="container flex flex-col justify-center mt-10 font-inter fade-in">
      <Header />
      <Projects />
      <Footer />
    </main>
  )
}

export default App
