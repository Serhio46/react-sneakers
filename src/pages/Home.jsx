import Card from '../components/Card';

function Home({ isLoading, sneakers, searchValue, setSearchValue, onChangeSearch, onAddToFavorite, addToCart, isLiked }) {

	const renderItems = () => {

		const filtered = sneakers.filter(item => item.title.toUpperCase().includes(searchValue.toUpperCase()));

		return (isLoading ? [...Array(10)] : filtered)
			.map((obj, index) =>
				<Card
					isLiked={isLiked}
					onFavorite={onAddToFavorite}
					onAddToCart={addToCart}
					{...obj}
					isLoading={isLoading}
					key={index} />)
	};

	return (
		<div className='content'>
			<div className='title'>
				<h1>{searchValue ? `Пооиск по: ${searchValue}` : 'Все кроссовки'}</h1>
				<div className='search-block'>
					<img src="/img/search.svg" alt="search" />
					<img onClick={() => setSearchValue('')} className='btn-remove clear' src="/img/btn-remove.svg" alt="remove" />
					<input onChange={onChangeSearch} value={searchValue} type="text" placeholder='Поиск...' />
				</div>
			</div>
			<div className='sneakers'>
				{renderItems()}
			</div>
		</div>
	);
}

export default Home;