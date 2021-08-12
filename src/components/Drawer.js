import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAddCartItems, closeCart, fetchRemoveCartItems, fetchLoadCartItems, fetchSendOrder } from '../Redux/Actions/cartItemAction';
import { changeOrderStatus, loading } from '../Redux/Actions/drawerAction';

import Info from './Info';


function Drawer() {

	const dispatch = useDispatch();
	const { items: cartItems, totalPrice } = useSelector(({ cartItemsReducer }) => cartItemsReducer);
	const { isLoading } = useSelector(({ drawerReducer }) => drawerReducer);

	//const [isOrderComplet, setIsOrderComplet] = useState(false); эту часть я перенес в Redux, хотя состояние влияет толкьо на эту компоненту,
	//const [isLoading, setIsLoading] = useState(false);  как лучше делать???

	useEffect(() => {
		dispatch(fetchLoadCartItems());
	}, []);

	const onClickClose = () => {
		dispatch(closeCart());
	};

	const onClickRemove = (obj) => {
		const findItem = cartItems.find(item => item.keys === obj.keys);
		if (findItem) {
			dispatch(fetchRemoveCartItems(findItem.id));
		} else {
			dispatch(fetchAddCartItems(obj));
		}
	};

	const onClickOrder = (cartItems) => {
		dispatch(loading());
		dispatch(fetchSendOrder({ items: cartItems }, cartItems));
		dispatch(changeOrderStatus());
		dispatch(loading());
	};


	return (
		<div className="overlay">
			<div className="drawer">
				<h2>Корзина <img onClick={onClickClose} className='btn-remove' src="img/btn-remove.svg" alt="remove" /></h2>
				{cartItems && cartItems.length > 0 ? <>
					<div className="items">
						{cartItems.map((obj, index) => {
							const { imageURL, title, price } = obj;
							return (
								<div className="cartItem" key={`${title}_${index}`}>
									<img className='itemImage' width={70} height={70} src={imageURL} alt="" />
									<div className='cartInfo'>
										<p>{title}</p>
										<b>{price} руб.</b>
									</div>
									<img onClick={() => onClickRemove(obj)} className='btn-remove' src="img/btn-remove.svg" alt="remove" />
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
						<button disabled={isLoading} onClick={() => onClickOrder(cartItems)} className='greenButton'>Оформить заказ <img src="img/arrow.svg" alt="arrow" /></button>
					</div> </> : <Info
					onClose={onClickClose}
				/>
				}
			</div>
		</div>
	);
};

export default Drawer;