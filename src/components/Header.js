const Header = (props) => {
  const darkModeHandler = () => {
    props.onChangeDarkMode()
  }
  return (
    <div className={`header${props.darkMode ? ' dark-mode' : ''}`}>
      <h1>Where in the world?</h1>
      <div className="theme-mode" onClick={darkModeHandler}>
        <i className="fa-regular fa-moon"></i><span>Dark Mode</span>
      </div>
    </div>
  )
}

export default Header