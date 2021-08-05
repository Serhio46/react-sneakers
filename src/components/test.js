//Добавление и удаление в/из закладки
const onAddToFavorite = async (obj) => {
	try {
		const findItem = favorites.find(favObj => +favObj.keys === +obj.keys);
		if (findItem) {
			setFavorites(prew => prew.filter(item => +item.keys !== +obj.keys));
			await	axios.delete(`https://61012ec14e50960017c29c6a.mockapi.io/favorites/${findItem.id}`);
		} else {
			const { data } = await axios.post('https://61012ec14e50960017c29c6a.mockapi.io/favorites', obj);
			// changeSneaker(data);
			setFavorites(prew => [...prew, data]);
		}
	} catch (error) {
		alert('Не удалось добавить в закладки');
	}
};




//Добавление и удаление товара в корзину
const addToCart = async (obj) => {
	try {
		const findItem = cartItems.find(Item => +Item.keys === +obj.keys);
		if (findItem) {
			setCartItems(prew => prew.filter(item => +item.keys !== +obj.keys));
			await axios.delete(`https://61012ec14e50960017c29c6a.mockapi.io/Cart/${findItem.id}`);
		} else {
			const { data } = await axios.post('https://61012ec14e50960017c29c6a.mockapi.io/Cart', obj); // тут немного притормоз идет, пока ждем ответ, а выше поднять не могу, сделать setCartItems(prew => [...prew, data]), а ниже setCartItems(prew => [...prew, data]);, тк будет работать не корректно
			//changeSneaker(data); //если changeSneakers  поменять местами с setCartItems уже начинает работать не верно, нужна помощь!!!
			setCartItems(prew => [...prew, data]);
		}
	} catch (error) {
		alert('Не удалось доюавить в корзину');
	}
}
