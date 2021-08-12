import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAddCartItems, fetchRemoveCartItems } from '../../Redux/Actions/cartItemAction';
import { fetchRemoveFavorites, fetchAddFavorites } from '../../Redux/Actions/favoriteAction';

import ContentLoader from "react-content-loader";

import styles from './Card.module.scss';


function Card({ cartItems, favorites, isLoading = false, title, price, imageURL, keys, id }) {

	const obj = { title, price, imageURL, keys, id };

	const dispatch = useDispatch();

	const isItemAdded = (keys) => {
		return (cartItems && cartItems.some(items => +items.keys === +keys));
	};

	const isLiked = (keys) => {
		return (favorites && favorites.some(items => +items.keys === +keys));
	};

	const onAddToCart = (obj) => {
		const findItem = cartItems.find(item => item.keys === obj.keys);
		if (findItem) {
			dispatch(fetchRemoveCartItems(findItem.id));
		} else {
			dispatch(fetchAddCartItems(obj));
		}
	};

	const onClickLike = (obj) => {
		const findItem = favorites.find(item => item.keys === obj.keys);
		if (findItem) {
			dispatch(fetchRemoveFavorites(findItem.id));
		} else {
			dispatch(fetchAddFavorites(obj));
		}
	};

	return (
		<div className={styles.card}>
			{isLoading ? <ContentLoader
				speed={2}
				width={178}
				height={230}
				viewBox="0 0 178 230"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb">
				<circle cx="472" cy="630" r="86" />
				<rect x="0" y="0" rx="10" ry="10" width="133" height="112" />
				<rect x="0" y="135" rx="5" ry="5" width="178" height="15" />
				<rect x="0" y="155" rx="5" ry="5" width="100" height="15" />
				<rect x="0" y="199" rx="9" ry="9" width="80" height="30" />
				<rect x="146" y="198" rx="9" ry="9" width="32" height="32" />
			</ContentLoader> : <>
				{favorites && <div className={styles.favorite} onClick={() => onClickLike(obj)} >
					<img src={isLiked(keys) ? "img/liked.svg" : "img/unliked.svg"} alt="unliked" />
				</div>}
				<img width={133} height={112} src={imageURL} alt="" />
				<h5>{title}</h5>
				{cartItems && <div className={styles.cardButton}>
					<div className={styles.card__price}>
						<span>ЦЕНА</span>
						<b>{price} руб.</b>
					</div>
					<img onClick={() => onAddToCart(obj)} src={isItemAdded(keys) ? "img/btn-checked.svg" : "img/btn-plus.svg"} alt="" />
				</div>}
			</>}
		</div>)
};

export default Card;