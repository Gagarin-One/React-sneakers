import { useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAddToCartMutation, useGetNikesQuery, useGetSneakersQuery } from '../Store/Api/Api';
type Products = {
  id: number;
  price: number;
  name: string;
  currentSizes: number | undefined;
  availableSize: Array<number>;
  img: string;
  desc: string;
};
const SneakersItem = () => {
  const Location = useLocation();
  const LocationId = Number(Location.pathname.slice(-1));
  const { data: selectedProducts, isLoading } = useGetNikesQuery(LocationId);
  const { data: AllProducts } = useGetSneakersQuery('');
  const [addToCart] = useAddToCartMutation();
  const [size, setSize] = useState(0);
  const [validatePopup, setValidatePopup] = useState(false);

  const handleAddToCart = async (item: Products) => {
    await addToCart(item).unwrap();
  };
  const handleSize = (s: number) => {
    setValidatePopup(false);
    setSize(s);
  };
  return (
    <div className="sneakers-wrapper">
      {selectedProducts ? (
        <div className="sneaker">
          <div className="left-side-block">
            <img className="main-img" src={selectedProducts.img} />
            <b>Вам так же будет интересно:</b>
            <div className="offers">
              {AllProducts?.map((product) => {
                return (
                  <div className="offer">
                    <img src={product.img} alt="" />
                    <h2>{product.name}</h2>
                    <b>{product.price}</b>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right-side-block">
            <h1>{selectedProducts.name}</h1>
            <b>{selectedProducts.price}</b>
            <h2>Выберете размер US:</h2>
            <div className="size-container">
              {selectedProducts?.availableSize.map((s) => {
                return (
                  <div
                    className={s === size ? 'selectedSize' : undefined}
                    onClick={() => handleSize(s)}>
                    {s}
                  </div>
                );
              })}
            </div>
            <div className="popup">{validatePopup && 'Выберете размер обуви'}</div>
            <button
              onClick={
                size === 0
                  ? () => setValidatePopup(true)
                  : () => handleAddToCart({ ...selectedProducts, ...{ currentSizes: size } })
              }>
              Добавить в корзину
            </button>
            <span>Товар доступен только по полной предоплате</span>
            <h2 className="title">Описание</h2>
            <h2>{selectedProducts.desc}</h2>
            <Link to="Contacts" className="title">
              Контакты
            </Link>
            <Link to="delivery" className="title">
              Доставка и оплата
            </Link>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
export default SneakersItem;
