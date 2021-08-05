import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card/';

function Orders() {

	const [order, setOrder] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {

		(async () => {
			try {
				const { data } = await axios.get('https://61012ec14e50960017c29c6a.mockapi.io/Orders');
				setOrder(data.map((obj) => obj.items).flat());
				setIsLoading(false);
			}
			catch (error) {
				alert('Ошибка загрузки страницы');
			}
		})();
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