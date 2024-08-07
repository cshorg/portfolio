import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = ({ handleTheme }: any) => {
  return (
    <div className="flex flex-col w-full text-white bg-white items dark:bg-zinc-950 h-dvh">
      <Header handleTheme={handleTheme} />
      <main className="flex max-w-screen-lg mt-4 mx-36">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
