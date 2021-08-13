import { useEffect } from 'react';
import ContentLoader from "react-content-loader";

import { useDispatch, useSelector } from 'react-redux';
import { fetchLoadOrder } from '../Redux/Actions/orderAction';

import Card from '../components/Card/';

function Orders() {

	const dispatch = useDispatch();
	const { order, isLoading } = useSelector(({ orderReducer }) => orderReducer);
	const rt = useSelector(({ orderReducer }) => orderReducer);
	console.log(rt);

	useEffect(() => {
		dispatch(fetchLoadOrder())
	}, [dispatch]);

	return (
		<div className='content'>
			<div className='title'>
				<h1>Мои заказы</h1>
			</div>
			<div className='orders'>
				{(isLoading ? [...Array(4)] : order)
					.map((obj, index) => {
						return <div className='orderComplet' key={index}>
							{obj ? <h2 >Заказ № {obj.id} создан {obj.date}</h2> : <ContentLoader
								speed={2}
								width={525}
								height={30}
								viewBox="0 0 525 30"
								backgroundColor="#f3f3f3"
								foregroundColor="#ecebeb">
								<circle cx="472" cy="630" r="86" />
								<rect x="0" y="0" rx="5" ry="5" width="525" height="30" />
							</ContentLoader>}
							<div className='sneakers'>{(obj && obj.items.map((obj, index) => <Card isLoading={isLoading} {...obj} key={index} />))
								|| [...Array(4)].map((obj, index) => <Card isLoading={isLoading} {...obj} key={index} />)}</div>
						</div>
					})}
			</div>
		</div>
	);
};

export default Orders;