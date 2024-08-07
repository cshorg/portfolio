import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = ({ handleTheme }: any) => {
  return (
    <div className="flex flex-col w-full text-white bg-white items dark:bg-zinc-950 h-[100%] sm:h-[100dvh]">
      <Header handleTheme={handleTheme} />
      <main className="flex max-w-screen-lg mx-4 mt-4 md:mt-6 md:mx-10 lg:ml-20 2xl:mx-36">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
