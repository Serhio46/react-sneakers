import { useContext } from 'react'
import { CartContext } from '../App'

export function useCart() {
	const { cartItems, setCartItems } = useContext(CartContext);
	const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
	return { cartItems, setCartItems, totalPrice }
}