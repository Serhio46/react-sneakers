const initialState = {
	items: [],
	isLoading: true,
};


const sneakersReducer = (state = initialState, action) => {
	if (action.type === 'LOAD-SNEAKERS') {
		return {
			...state,
			items: action.payload,
			isLoading: false,
		}
	}	return state;
};

export default sneakersReducer;