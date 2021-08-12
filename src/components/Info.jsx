import { useSelector } from 'react-redux';

function Info({ onClose }) {

	const { isOrderComplet } = useSelector(({ drawerReducer }) => drawerReducer);

	return (
		<div className='cartEmpty'>
			<img width={120} src={isOrderComplet ? "img/complete-order.jpg" : "img/empty-cart.jpg"} alt="emptyCart" />
			<h2>{isOrderComplet ? 'Заказ оформлен' : 'Корзина пуста'}</h2>
			<p>{isOrderComplet ? 'Менеджер свяжется с Вами в течение 15 минут' : 'Добавьте хотя бы одну пару кросcовок'}</p>
			<button onClick={onClose} className='greenButton rotate'><img src={"img/arrow.svg"} alt="arrow" />Вернуться назад</button>
		</div>
	);
};

export default Info;