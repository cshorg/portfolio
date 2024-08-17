import HeaderText from "./HeaderText"
import HeaderButtons from "./HeaderButtons"
import HeaderImages from "./HeaderImages"

const Header = ({ handleTheme }: any) => {
  return (
    <header className="max-w-screen-lg mx-4 mt-4 md:mt-6 md:mx-10 lg:mt-10 lg:ml-20 2xl:mt-16 2xl:ml-36">
      <HeaderText />
      <HeaderImages />
      <HeaderButtons handleTheme={handleTheme} />
    </header>
  )
}

export default Header
