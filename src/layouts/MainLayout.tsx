import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import { cn } from "@/lib/utils"
import DotPattern from "@/components/magicui/dot-pattern"

const MainLayout = ({ handleTheme }: any) => {
  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-hidden text-white font-inter layout bg-zinc-100 dark:bg-zinc-950">
      <DotPattern
        className={cn(
          "opacity-30 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
        )}
      />
      <Header handleTheme={handleTheme} />
      <main className="z-10 flex-grow mx-4 mt-4 md:mt-6 md:mx-10 lg:ml-20 2xl:mx-36">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
