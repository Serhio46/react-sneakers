import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchLoadSneakers } from '../Redux/Actions/sneakersAction';
import { fetchLoadCartItems } from '../Redux/Actions/cartItemAction';
import { fetchLoadFavoritesItems } from '../Redux/Actions/favoriteAction';

import Card from '../components/Card';

function Home() {

	const [searchValue, setSearchValue] = useState('');

	const dispatch = useDispatch();
	const { items: sneakers, isLoading } = useSelector(({ sneakersReducer }) => sneakersReducer);
	const cartItems = useSelector(({ cartItemsReducer }) => cartItemsReducer.items);
	const favorites = useSelector(({ favoriteReducer }) => favoriteReducer);

	useEffect(() => {
		dispatch(fetchLoadSneakers());
		dispatch(fetchLoadCartItems());
		dispatch(fetchLoadFavoritesItems());
	}, [dispatch]);

	//Управляемый поиск оставил здесь, или его тоже переносить в редакс???
	const onChangeSearch = (e) => {
		setSearchValue(e.target.value);
	};

	const renderItems = () => {
		const filtered = sneakers.filter(item => item.title.toUpperCase().includes(searchValue.toUpperCase()));
		return (isLoading ? [...Array(10)] : filtered)
			.map((obj, index) =>
				<Card
					favorites={favorites}
					cartItems={cartItems}
					{...obj}
					isLoading={isLoading}
					key={index} />)
	};

	return (
		<div className='content'>
			<div className='title'>
				<h1>{searchValue ? `Пооиск по: ${searchValue}` : 'Все кроссовки'}</h1>
				<div className='search-block'>
					<img src="img/search.svg" alt="search" />
					<img onClick={() => setSearchValue('')} className='btn-remove clear' src="img/btn-remove.svg" alt="remove" />
					<input onChange={onChangeSearch} value={searchValue} type="text" placeholder='Поиск...' />
				</div>
			</div>
			<div className='sneakers'>
				{renderItems()}
			</div>
		</div>
	);
};

export default Home;