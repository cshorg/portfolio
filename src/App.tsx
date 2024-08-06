import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App({ handleTheme }: any) {
  return (
    <div className="flex justify-center w-full text-white bg-white dark:bg-black h-dvh">
      <Navbar handleTheme={handleTheme} />
      <Footer />
    </div>
  )
}

export default App
