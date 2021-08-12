
//Изменение статуса заказа
export const changeOrderStatus = () => ({
	type: 'COMPLETED-ORDER',
});

//Загрузка на сервер
export const loading = () => ({
	type: 'LOADING',
});