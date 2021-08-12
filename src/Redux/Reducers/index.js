import { combineReducers } from 'redux';



import cartItemsReducer from './cartItemsReducer';
import sneakersReducer from './sneakersReducer';
import favoriteReducer from './favoriteReducer';
import drawerReducer from './drawerReducer';
import orderReducer from './orderReducer';


const rootReduser = combineReducers({
	cartItemsReducer,
	sneakersReducer,
	favoriteReducer,
	drawerReducer,
	orderReducer,
});

export default rootReduser;