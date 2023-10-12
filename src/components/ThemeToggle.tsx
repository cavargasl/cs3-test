import { useEffect, useState } from 'react'
import { Button } from './ui/Button'
import { IconMoon, IconSun } from './Icons'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>()

  useEffect(() => {
    if (localStorage.getItem("theme")) return setTheme(localStorage.getItem("theme")!)
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return setTheme("dark")
    return setTheme("light")
  }, [])

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    } else {
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
  }, [theme])

  const handleSwitchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
    localStorage.setItem("theme", theme === "light" ? "dark" : "light")
  }

  return (
    <div className='fixed bottom-6 right-6 z-50 flex h-6 w-6 items-center justify-center rounded-full  p-3 font-mono text-xs '>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleSwitchTheme}
        aria-label="toggleTheme"
        className='rounded-full hover:bg-transparent'
        data-testid="theme-toggle"
      >
        <IconSun
          className="h-8 w-8 rotate-0 scale-100 transition-transform duration-200 ease-out-circ dark:-rotate-90 dark:scale-0"
          aria-hidden="true"
        />
        <IconMoon
          className="absolute h-8 w-8 rotate-90 scale-0 transition-transform duration-200 ease-out-circ dark:rotate-0 dark:scale-100"
          aria-hidden="true"
        />
      </Button>
    </div>
  )
}
