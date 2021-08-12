import axios from "axios";

//согласование стейта с сервером Favorites
export const fetchLoadFavoritesItems = () => (dispatch) => {
	axios.get('https://61012ec14e50960017c29c6a.mockapi.io/favorites').then(({ data }) => {
		return dispatch({ type: 'LOAD-FAVORITES-ITEMS', payload: data });
	});
};


//добавление в стейт и на сервере в favorites

export const fetchAddFavorites = (obj) => (dispatch) => {
	axios.post('https://61012ec14e50960017c29c6a.mockapi.io/favorites', obj).then(({ data }) => {
		return dispatch({ type: 'ADD-FAVORITES-ITEMS', payload: data });
	});
};

//Удаление в стейт и на сервере в favorites
export const fetchRemoveFavorites = (id) => (dispatch) => {
	axios.delete(`https://61012ec14e50960017c29c6a.mockapi.io/favorites/${id}`).then(({ data }) => {
		return dispatch({ type: 'REMOVE-FAVORITES-ITEMS', payload: data });
	});
};
