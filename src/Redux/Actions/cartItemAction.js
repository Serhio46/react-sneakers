import axios from "axios";

//согласование стейта с сервером Cart
export const fetchLoadCartItems = () => (dispatch) => {
	axios.get('https://61012ec14e50960017c29c6a.mockapi.io/Cart').then(({ data }) => {
		return dispatch({ type: 'LOAD-CART-ITEMS', payload: data });
	});
};


//добавление в стейт и на сервере в Cart

export const fetchAddCartItems = (obj) => (dispatch) => {
	axios.post('https://61012ec14e50960017c29c6a.mockapi.io/Cart', obj).then(({ data }) => {
		return dispatch({ type: 'ADD-CART-ITEMS', payload: data });
	});
};

//Удаление в стейт и на сервере в Cart
export const fetchRemoveCartItems = (id) => (dispatch) => {
	axios.delete(`https://61012ec14e50960017c29c6a.mockapi.io/Cart/${id}`).then(({ data }) => {
		return dispatch({ type: 'REMOVE-CART-ITEMS', payload: data });
	});
};

//Добавление в заказ на сервер и очистка корзины на сервере и в приложении
export const fetchSendOrder = (obj, cartItems) => async (dispatch) => {
	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	await axios.post('https://61012ec14e50960017c29c6a.mockapi.io/Orders', obj);
	for (let i = 0; i < cartItems.length; i++) {
		const item = cartItems[i];
		await axios.delete(`https://61012ec14e50960017c29c6a.mockapi.io/Cart/${item.id}`);
		await delay(1000);
	};
	return dispatch({ type: 'CLEAR-CART' });
};

//Открытие -закрытие корзины
export const closeCart = () => ({
	type: 'CART-OPENED',
});