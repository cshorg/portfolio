import { Outlet } from "react-router-dom"

const BlogLayout = () => {
  return (
    <div className="flex flex-col w-full text-white bg-white items dark:bg-zinc-950 h-dvh">
      <h1>Blog Layout</h1>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default BlogLayout
