import Card from '../components/Card/'

function Favorites({ sneakers, onAddToFavorite, isLiked }) {

	return (
		<div className='content'>
			<div className='title'>
				<h1>Мои закладки</h1>

			</div>
			<div className='sneakers'>
				{sneakers
					.map((obj, index) =>
						<Card
							onFavorite={onAddToFavorite}
							isLiked={isLiked}
							{...obj}
							key={`${obj.title}_${index}`} />)}
			</div>
		</div>

	);
}

export default Favorites;