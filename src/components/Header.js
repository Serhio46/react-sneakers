import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { closeCart } from '../Redux/Actions/cartItemAction';

function Header() {

  const totalPrice = useSelector(({ cartItemsReducer }) => cartItemsReducer.totalPrice);
  const dispatch = useDispatch();

  const onClickClose = () => {
    dispatch(closeCart());
  };

  return (
    <header>
      <Link className='link' to='/'>
        <div className='headerLeft'>
          <img height={40} width={40} src="img/logo.png" alt="ЛОГО" />
          <div className='headerInfo'>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className='headerRight'>
        <li className='cartBut' onClick={onClickClose}>
          <img className='cartButton' height={18} width={18} src="img/cart.svg" alt="Cart" />
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to='/favorites'>
            <img className='heart' height={18} width={18} src="img/heart.svg" alt="Закладки" />
          </Link>
        </li>
        <li>
          <Link to='/order'>
            <img height={18} width={18} src="img/user.svg" alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;