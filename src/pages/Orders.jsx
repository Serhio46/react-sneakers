import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchLoadOrder } from '../Redux/Actions/orderAction';

import Card from '../components/Card/';

function Orders() {

	const dispatch = useDispatch();
	const { order, isLoading } = useSelector(({ orderReducer }) => orderReducer);

	useEffect(() => {
		dispatch(fetchLoadOrder())
	}, []);

	return (
		<div className='content'>
			<div className='title'>
				<h1>Мои заказы</h1>
			</div>
			<div className='sneakers'>
				{(isLoading ? [...Array(4)] : order)
					.map((obj, index) => <Card isLoading={isLoading} {...obj} key={index} />)}
			</div>
		</div>
	);
};

export default Orders;