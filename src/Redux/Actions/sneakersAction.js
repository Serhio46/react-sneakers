import axios from "axios";

//согласование стейта с сервером Items
export const fetchLoadSneakers = () => (dispatch) => {
	axios.get('https://61012ec14e50960017c29c6a.mockapi.io/Items').then(({ data }) => {
		return dispatch({ type: 'LOAD-SNEAKERS', payload: data });
	});
};