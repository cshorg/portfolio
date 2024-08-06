import React from "react"
import { useEffect, useState } from "react"

const ThemeToggle = ({ children }: any) => {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { handleTheme })
      )}
    </>
  )
}

export default ThemeToggle
