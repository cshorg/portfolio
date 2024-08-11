interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer
      className={`${className} absolute z-0 bottom-0 flex items-center justify-between w-full max-w-screen-lg mx-4 my-4 text-xs md:mt-6 md:mx-10 lg:ml-20 2xl:mx-36`}
    >
      <p className="dark:text-zinc-500 text-zinc-950">
        Created by{" "}
        <a className="cursor-pointer dark:text-white hover:underline">
          (@cshorgx)
        </a>
      </p>
    </footer>
  )
}

export default Footer
