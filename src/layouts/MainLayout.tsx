import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = ({ handleTheme }: any) => {
  return (
    <div className="flex flex-col w-full min-h-screen text-white bg-zinc-50 dark:bg-zinc-950">
      <Header handleTheme={handleTheme} />
      <main className="flex-grow mx-4 mt-4 md:mt-6 md:mx-10 lg:ml-20 2xl:mx-36">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
