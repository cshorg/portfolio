import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import Button from "../components/Button"

const BlogLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-hidden text-white bg-zinc-100 dark:bg-zinc-950">
      <main className="flex flex-col flex-grow mx-4 mt-4 lg:flex-row md:mt-6 md:mx-10 lg:ml-20 lg:mt-20 2xl:mx-36">
        <Link to="/">
          <Button fullWidth={false} className="px-8 lg:m-2">
            Back
          </Button>
        </Link>
        <Outlet />
      </main>
      <Footer className="text-zinc-950" />
    </div>
  )
}

export default BlogLayout
