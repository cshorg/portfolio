import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"

const BlogLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white dark:bg-zinc-950">
      <main className="flex-grow ">
        <Outlet />
      </main>
      <Footer className="text-zinc-950" />
    </div>
  )
}

export default BlogLayout
