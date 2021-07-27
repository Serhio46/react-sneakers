function Drawer() {
	return (
		<div style={{ display: 'none' }} className="overlay">
			<div className="drawer">
				<h2>Корзина <img className='btn-remove' src="/img/btn-remove.svg" alt="remove" /></h2>
				<div className="items">
					<div className="cartItem">
						<img className='itemImage' width={70} height={70} src="/img/sneakers/1.jpg" alt="" />
						<div className='cartInfo'>
							<p>Мужские кроссовки Nike Blazer Mid Suede</p>
							<b>12,999 руб.</b>
						</div>
						<img className='btn-remove' src="/img/btn-remove.svg" alt="remove" />
					</div>
					<div className="cartItem">
						<img className='itemImage' width={70} height={70} src="/img/sneakers/1.jpg" alt="" />
						<div className='cartInfo'>
							<p>Мужские кроссовки Nike Blazer Mid Suede</p>
							<b>12,999 руб.</b>
						</div>
						<img className='btn-remove' src="/img/btn-remove.svg" alt="remove" />
					</div>
					<div className="cartItem">
						<img className='itemImage' width={70} height={70} src="/img/sneakers/1.jpg" alt="" />
						<div className='cartInfo'>
							<p>Мужские кроссовки Nike Blazer Mid Suede</p>
							<b>12,999 руб.</b>
						</div>
						<img className='btn-remove' src="/img/btn-remove.svg" alt="remove" />
					</div>
					<div className="cartItem">
						<img className='itemImage' width={70} height={70} src="/img/sneakers/1.jpg" alt="" />
						<div className='cartInfo'>
							<p>Мужские кроссовки Nike Blazer Mid Suede</p>
							<b>12,999 руб.</b>
						</div>
						<img className='btn-remove' src="/img/btn-remove.svg" alt="remove" />
					</div>
				</div>
				<div className="cartTotalBlock">
					<ul >
						<li>
							<span>Итого:</span>
							<div></div>
							<b>21 498 руб.</b>
						</li>
						<li>
							<span>Налог 5%:</span>
							<div></div>
							<b>1074 руб.</b>
						</li>
					</ul>
					<button className='greenButton'>Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
				</div>
			</div>
		</div>
	);
}

export default Drawer;