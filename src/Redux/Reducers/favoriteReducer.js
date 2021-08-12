
const favoriteReducer = (state = [], action) => {
	switch (action.type) {
		case 'LOAD-FAVORITES-ITEMS':
			return action.payload;
			break;
		case 'ADD-FAVORITES-ITEMS':
			return [...state, action.payload];
			break;
		case 'REMOVE-FAVORITES-ITEMS':
			return state.filter(item => item.keys !== action.payload.keys);
			break;
		default:
			return state;
	};
};

export default favoriteReducer;
