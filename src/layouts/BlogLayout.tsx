import { Outlet, Link } from "react-router-dom"
import Footer from "../components/Footer"

const BlogLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen text-white bg-white dark:bg-zinc-950">
      <main className="flex-grow mx-4 mt-4 md:mt-6 md:mx-10 lg:mt-20 lg:ml-20 2xl:mx-36">
        <Link
          type="button"
          aria-label="back"
          className=" flex focus:outline focus:outline-2 focus-visible:outline-2 px-4 focus:outline-offset-2 focus:outline-blue-500 items-center hover:underline gap-1 text-xs border-[1px] text-zinc-950 border-zinc-200 hover:bg-zinc-100/50 dark:text-zinc-50 dark:border-zinc-800 rounded-lg h-9 w-[60px] dark:hover:bg-zinc-800/50 transition ease-in duration-75 cursor-pointer"
          to={"/"}
        >
          Back
        </Link>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default BlogLayout
