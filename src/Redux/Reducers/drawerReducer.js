const initialState = {
	isOrderComplet: false,
	isLoading: false,
}

const drawerReducer = (state = initialState, action) => {
	if (action.type === 'COMPLETED-ORDER') {
		return {
			...state,
			isOrederComplet: !state.isOrderComplet,
		};
	} if (action.type === 'LOADING') {
		return {
			...state,
			isLoading: !state.isLoading,
		};
	} return state;
}

export default drawerReducer;