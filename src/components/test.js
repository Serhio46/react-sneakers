const addToCart = async (obj) => {
	try {
		if (cartItems.find(Item => Item.keys === obj.keys)) {
			removeItems(obj.id)
		} else {
			const { data } = await axios.post('https://61012ec14e50960017c29c6a.mockapi.io/favorites', obj);
			changeSneaker(data);
			setCartItems(prew => [...prew, data])
		}
	} catch (error) {
		alert('Не удалось доюавить в корзину')
	}
}


if (!addItem) {
	axios.post('https://61012ec14e50960017c29c6a.mockapi.io/Cart', obj).then(response => response.data).then(objItem => {
		console.log(objItem)
		changeSneaker(objItem);
		setCartItems(prew => {
			const ind = prew.findIndex(item => item.keys === objItem.keys);
			if (ind === -1) {
				return ([...prew, objItem])
			} else {
				return (prew)
			}
		})
	});
} else {
	removeItems(obj.id);
}
}


const onAddToFavorite = async (obj) => {
	try {
		if (favorites.find(favObj => favObj.keys === obj.keys)) {
			axios.delete(`https://61012ec14e50960017c29c6a.mockapi.io/favorites/${obj.id}`);
			setFavorites(prew => {
				return prew.filter(item => item.id !== obj.id);
			})
		} else {
			const { data } = await axios.post('https://61012ec14e50960017c29c6a.mockapi.io/favorites', obj);
			changeSneaker(data);
			setFavorites(prew => [...prew, data])
		}
	} catch (error) {
		alert('Не удалось добавить в закладки')
	}
};



const data = [
	{
		"id": "1",
		"items": [
			{
				"id": "1",
				"title": "Мужские кроссовки Nike Blazer Mid Suede",
				"price": 12999,
				"imageURL": "/img/sneakers/1.jpg",
				"keys": "0"
			},
			{
				"id": "2",
				"title": "Мужские кроссовки Nike Air Max 270",
				"price": 15600,
				"imageURL": "/img/sneakers/2.jpg",
				"keys": "1"
			}
		]
	}
]



const { data } = await axios.get('https://61012ec14e50960017c29c6a.mockapi.io/Orders');
				const arr = data.map(obj => obj.items);
				const arrObj = [];
				arr.forEach(item => item.forEach(obj => arrObj.push(obj)));
				console.log('с сервера',data)
				console.log('вытащили объекты', arr);
				console.log('forEach',arrObj);
				console.log('flat', data.map((obj) => obj.items).flat())
				setOrder(data.map((obj) => obj.items).flat());
				setIsLoading(false);







console.log(data.map((obj) => obj.items).map(item => {
	let arr = [];
	for (let i = 0; i < arr.length; i++) {
		console.log(item[i])
		arr.push(item[i]);
	};
	return arr;
}));





{(isLoading ? [...Array(4)] : order)
	.map((arr, index) => {
	return	(<>
	<div>Заказ номер 1</div>
	{arr.map((obj, index) => <Card isLoading={isLoading} {...obj} key={index} />)}
	</>
		)
	})}




//согласование корзины
	
	useEffect(() => {
      cartItems.forEach(obj => {
        let ind = sneakers.findIndex(item => +item.keys === +obj.keys);
        console.log(ind)
        if (ind !== -1) {
          sneakers.splice(ind, 1, obj)
        }
      });
      setSneakers(prew => sneakers);
    }, [cartItems]);




	 useEffect(() => {
		cartItems.forEach(obj => {
		  let ind = sneakers.findIndex(item => +item.keys === +obj.keys);
		  console.log(ind);
		  if (ind !== -1) {
			 sneakers.splice(ind, 1, obj)
		  }
		});
		setSneakers(prew => sneakers);
	 }, [cartItems]);