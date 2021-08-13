import axios from 'axios';

export const fetchLoadOrder = () => async (dispatch) => {
	const { data } = await axios.get('https://61012ec14e50960017c29c6a.mockapi.io/Orders');
	console.log(data);
	//const orders = data.map((obj) => obj.items).flat();
	dispatch({ type: 'LOADING-ORDERS', payload: data });
};

