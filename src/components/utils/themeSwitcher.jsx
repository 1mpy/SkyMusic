import { useThemeContext } from '../contexts/theme-switcher/theme'

function ThemeSwitcher() {
  const { toggleTheme } = useThemeContext()

  return (
    <button onClick={toggleTheme} type="button">
      Change Theme
    </button>
  )
}
export default ThemeSwitcher()
