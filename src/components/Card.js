

function Card() {
	return (
		<div className="card">
			<div className="favorite">
				<img src="/img/unliked.svg" alt="unliked" />
			</div>

			<img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
			<h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
			<div className='card-button'>
				<div className='card__price'>
					<span>ЦЕНА</span>
					<b>12,999 руб.</b>
				</div>
				<button className='button'>
					<img height={11} width={11} src="/img/plus.svg" alt="" />
				</button>
			</div>
		</div>
	);
};

export default Card;