function Info({ onClose, title, description, image }) {
	return (
		<div className='cartEmpty'>
			<img width={120} src={image} alt="emptyCart" />
			<h2>{title}</h2>
			<p>{description}</p>
			<button onClick={onClose} className='greenButton rotate'><img src={"/img/arrow.svg"} alt="arrow" />Вернуться назад</button>
		</div>
	);
};

export default Info;