const initialState = {
	order: [],
	isLoading: true,
};

const orderReducer = (state = initialState, action) => {
	if (action.type === 'LOADING-ORDERS') {
		return {
			...state,
			order: action.payload,
			isLoading: false,
		};
	} return state;
};

export default orderReducer;