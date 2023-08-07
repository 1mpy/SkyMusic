import { useThemeContext } from '../contexts/theme-switcher/theme'

function ThemeSwitcher() {
  const { toggleTheme } = useThemeContext()
  // console.log(toggleTheme)
  return (
    <button onClick={toggleTheme} type="button">
      Change Theme
    </button>
  )
}
export default ThemeSwitcher
