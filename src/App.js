import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from 'react-router-dom';

import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import Home from './pages/Home';
import Header from './components/Header';
import Drawer from './components/Drawer';

export const CartContext = React.createContext({});

function App() {

  const [cartOpened, setCardOpened] = useState(false);
  const [sneakers, setSneakers] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(sneakers);
  console.log(cartItems);
  console.log('favor', favorites);


  //Получение данных с бэка при первом рендере
  useEffect(() => {

    async function fetchData() {

      try {

        const [sneakersData, cartItemsData, favoritesData] = await Promise.all([
          axios.get('https://61012ec14e50960017c29c6a.mockapi.io/Items'),
          axios.get('https://61012ec14e50960017c29c6a.mockapi.io/Cart'),
          axios.get('https://61012ec14e50960017c29c6a.mockapi.io/favorites')
        ]);

        setIsLoading(false);
        setSneakers(sneakersData.data);
        setCartItems(cartItemsData.data);
        setFavorites(favoritesData.data);


      } catch (error) {
        alert('Ошибка при запросе данных')
      };
    };

    fetchData();

  }
    , []);


  //Согласование стейта sneakers и favorites с данными на сервере в моменте
  function changeSneaker(obj) {
    let ind = sneakers.findIndex(item => +item.keys === +obj.keys);
    if (ind !== -1) {
      sneakers.splice(ind, 1, obj);
      setSneakers(sneakers);
    }
  }

  //Согласование стейта sneakers  с данными на сервере при перезагрузке приложения
  useEffect(() => {
    cartItems.forEach(obj => {
      let ind = sneakers.findIndex(item => +item.keys === +obj.keys);
      if (ind !== -1) {
        sneakers.splice(ind, 1, obj);
      }
    });
    setSneakers(sneakers);
  }, [cartItems]);

  //Согласование стейта favorites  с данными на сервере при перезагрузке приложения
  useEffect(() => {
    favorites.forEach(obj => {
      let ind = sneakers.findIndex(item => +item.keys === +obj.keys);
      if (ind !== -1) {
        sneakers.splice(ind, 1, obj);
      }
    });
    setSneakers(sneakers);
  }, [favorites]);


  //Добавление и удаление товара в корзину
  const addToCart = async (obj) => {
    try {
      if (cartItems.find(Item => +Item.keys === +obj.keys)) {
        setCartItems(prew => prew.filter(item => +item.id !== +obj.id));
        await axios.delete(`https://61012ec14e50960017c29c6a.mockapi.io/Cart/${obj.id}`);
      } else {
        const { data } = await axios.post('https://61012ec14e50960017c29c6a.mockapi.io/Cart', obj); // тут немного притормоз идет, пока ждем ответ, а выше поднять не могу, сделать setCartItems(prew => [...prew, data]), а ниже setCartItems(prew => [...prew, data]);, тк будет работать не корректно
        changeSneaker(data); //если changeSneakers  поменять местами с setCartItems уже начинает работать не верно, нужна помощь!!!
        setCartItems(prew => [...prew, data]);
      }
    } catch (error) {
      alert('Не удалось доюавить в корзину');
    }
  }

  //Отправка заказ на сервер, удлание из корзины на сервере, очистка локального стейта корзины

  const sendOreder = async () => {
    try {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      await axios.post('https://61012ec14e50960017c29c6a.mockapi.io/Orders', { items: cartItems });
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`https://61012ec14e50960017c29c6a.mockapi.io/Cart/${item.id}`);
        await delay(1000);
      }

    }
    catch (error) {
      alert('не удалось создать заказ');
    }
  }

  //Удаление активности из карточки товара при нажатии в самой корзине
  const isItemAdded = (keys) => {
    return cartItems.some(items => +items.keys === +keys);
  }

  //Согласование закладок с сервером при перезагрузке приложения

  const isLiked = (keys) => {
    return favorites.some(items => +items.keys === +keys);
  }


  //Закрытие корзины
  const handlerCloseCart = () => {
    setCardOpened(!cartOpened);
  }

  //Добавление и удаление в/из закладки
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => +favObj.keys === +obj.keys)) {
        axios.delete(`https://61012ec14e50960017c29c6a.mockapi.io/favorites/${obj.id}`);
        setFavorites(prew => {
          return prew.filter(item => +item.id !== +obj.id);
        })
      } else {
        const { data } = await axios.post('https://61012ec14e50960017c29c6a.mockapi.io/favorites', obj);
        changeSneaker(data);
        setFavorites(prew => [...prew, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в закладки');
    }
  };

  //Управляемый поиск
  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <CartContext.Provider value={{ isItemAdded, cartItems, setCartItems }}>
      <div className="wrapper">
        {cartOpened && <Drawer sendOreder={sendOreder} cartItems={cartItems} onClose={handlerCloseCart} onRemove={addToCart} />}
        <Header onClickCloseCart={handlerCloseCart} />
        <Route path='/' exact>
          <Home
            isLiked={isLiked}
            sneakers={sneakers}
            isLoading={isLoading}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearch={onChangeSearch}
            onAddToFavorite={onAddToFavorite}
            addToCart={addToCart} />
        </Route>
        <Route path='/favorites' exact>
          <Favorites sneakers={favorites} isLiked={isLiked} onAddToFavorite={onAddToFavorite} />
        </Route>
        <Route path='/order' exact>
          <Orders onAddToFavorite={onAddToFavorite} />
        </Route>
      </div>
    </CartContext.Provider>

  );
}

export default App;
