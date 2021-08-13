import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchLoadFavoritesItems } from '../Redux/Actions/favoriteAction';

import Card from '../components/Card/';

function Favorites({ onAddToFavorite }) {

	const dispatch = useDispatch();
	const favorites = useSelector(({ favoriteReducer }) => favoriteReducer);
	const cartItems = useSelector(({ cartItemsReducer }) => cartItemsReducer.items);

	useEffect(() => {
		dispatch(fetchLoadFavoritesItems())
	}, [dispatch]);

	return (
		<div className='content'>
			<div className='title'>
				<h1>Мои закладки</h1>
			</div>
			<div className='sneakers'>
				{favorites && favorites
					.map((obj, index) =>
						<Card
							favorites={favorites}
							cartItems={cartItems}
							onFavorite={onAddToFavorite}
							{...obj}
							key={`${obj.title}_${index}`} />)}
			</div>
		</div>
	);
};

export default Favorites;