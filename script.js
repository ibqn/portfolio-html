;(() => {
  const menuIcon = document.getElementById('menu-icon')
  const menu = document.getElementById('header-menu')

  const activeIconClass = 'header__menu-icon_active'
  const activeMenuClass = 'header__menu_show'
  const md1 = 896

  const handleResize = () => {
    console.log('resize')
    if (window.innerWidth >= md1) {
      menuIcon.classList.remove(activeIconClass)
      menu.classList.remove(activeMenuClass)
    }
  }

  window.addEventListener('resize', handleResize)

  const handleClick = () => {
    console.log('clicked', menu)

    if (menuIcon.classList.contains(activeIconClass)) {
      menuIcon.classList.remove(activeIconClass)
      menu.classList.remove(activeMenuClass)
    } else {
      menuIcon.classList.add(activeIconClass)
      menu.classList.add(activeMenuClass)
    }
  }
  menuIcon.addEventListener('click', handleClick)
})()
