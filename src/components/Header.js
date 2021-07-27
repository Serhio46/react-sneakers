function Header () {
	return (
		<header>
        <div className='headerLeft'>
          <img height={40} width={40} src="/img/logo.png" alt="ЛОГО" />
          <div className='headerInfo'>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='headerRight'>
          <li>
            <img height={18} width={18} src="/img/cart.svg" alt="Cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img height={18} width={18} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </header>
	);
}

export default Header;