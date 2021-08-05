import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';

import Info from './Info';

function Drawer({ onRemove, onClose, cartItems, sendOreder }) {

	const [isOrderComplet, setIsOrderComplet] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { totalPrice } = useCart();

	const onClickOrder = () => {
		setIsLoading(true);
		sendOreder();
		setIsOrderComplet(true);
		setIsLoading(false);
	};

	return (
		<div className="overlay">
			<div className="drawer">
				<h2>Корзина <img onClick={onClose} className='btn-remove' src="img/btn-remove.svg" alt="remove" /></h2>

				{cartItems.length > 0 ?
					<>
						<div className="items">
							{cartItems.map((obj, index) => {
								return (
									<div className="cartItem" key={`${obj.title}_${index}`}>
										<img className='itemImage' width={70} height={70} src={obj.imageURL} alt="" />
										<div className='cartInfo'>
											<p>{obj.title}</p>
											<b>{obj.price} руб.</b>
										</div>
										<img onClick={() => onRemove(obj)} className='btn-remove' src="img/btn-remove.svg" alt="remove" />
									</div>
								)
							})}
						</div>
						<div className="cartTotalBlock">
							<ul >
								<li>
									<span>Итого:</span>
									<div></div>
									<b>{totalPrice} руб.</b>
								</li>
								<li>
									<span>Налог 5%:</span>
									<div></div>
									<b>{totalPrice * 0.05} руб.</b>
								</li>
							</ul>
							<button disabled={isLoading} onClick={onClickOrder} className='greenButton'>Оформить заказ <img src="img/arrow.svg" alt="arrow" /></button>
						</div></> :
					<Info
						onClose={onClose}
						title={isOrderComplet ? 'Заказ оформлен' : 'Корзина пуста'}
						description={isOrderComplet ? 'Менеджер свяжется с Вами в течение 15 минут' : 'Добавьте хотя бы одну пару кросcовок'}
						image={isOrderComplet ? "img/complete-order.jpg" : "img/empty-cart.jpg"}
					/>
				}
			</div>
		</div>
	);
};

export default Drawer;