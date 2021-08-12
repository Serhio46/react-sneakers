const initialState = {
	items: [],
	totalPrice: 0,
	cartOpened: false
}

const cartItemsReducer = (state = initialState, action) => {

	switch (action.type) {
		case 'LOAD-CART-ITEMS':
			const currentItems = action.payload;
			return {
				...state,
				items: currentItems,
				totalPrice: currentItems.reduce((sum, obj) => sum + obj.price, 0),
			};
		//			break;  
		case 'ADD-CART-ITEMS':
			const currentItem = [...state.items, action.payload];
			return {
				...state,
				items: currentItem,
				totalPrice: currentItem.reduce((sum, obj) => sum + obj.price, 0),
			};
		//			break;
		case 'REMOVE-CART-ITEMS':
			const currentItemDel = state.items.filter(item => item.keys !== action.payload.keys);
			return {
				...state,
				items: currentItemDel,
				totalPrice: currentItemDel.reduce((sum, obj) => sum + obj.price, 0),
			};
		//			break;
		case 'CART-OPENED':
			return {
				...state,
				cartOpened: !state.cartOpened,
			};
		//			break;
		case 'CLEAR-CART':
			return {
				...state,
				items: [],
				totalPrice: 0,
			};
		//			break;
		default:
			return state;
	}

}

export default cartItemsReducer;

