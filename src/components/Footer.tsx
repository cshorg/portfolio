const Footer = () => {
  return (
    <footer className="absolute bottom-0 flex items-center justify-between w-full p-4 text-xs max-w-screen-2xl ">
      <p className="dark:text-zinc-600 text-zinc-500">
        Made by Cole Grohs{" "}
        <a className="text-black cursor-pointer hover:underline dark:text-white">
          (@cshorg)
        </a>
      </p>
      <a className="text-black hover:underline dark:text-white" href="">
        Source
      </a>
    </footer>
  )
}

export default Footer
