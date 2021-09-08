;(() => {
  const menu = document.getElementById('menu-icon')

  const activeClass = 'header__menu-icon_active'

  const handleClick = () => {
    // console.log('clicked', menu)

    if (menu.classList.contains(activeClass)) {
      menu.classList.remove(activeClass)
    } else {
      menu.classList.add(activeClass)
    }
  }
  menu.addEventListener('click', handleClick)
})()
