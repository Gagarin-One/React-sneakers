import { useGetCartItemsQuery } from '../Store/Api/Api';

const Cart = () => {
  const { data: CartItems } = useGetCartItemsQuery('');
  const totalPrice = CartItems?.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  const deliveryPrice = 500;
  return (
    <div className="cart-wrapper">
      <div className="left-side-block">
        <h1>Оформите заказ</h1>
      </div>
      <div className="right-side-block">
        <h1>{'В корзине ' + 1 + ' товар'}</h1>
        <ul className="calculations">
          <li>
            <b>Стоимость товаров:</b>
            <b>{totalPrice}</b>
          </li>
          <li>
            <b>Доставка:</b>
            <b>{deliveryPrice}</b>
          </li>
          <li>
            <b>Итого:</b>
            <b>{totalPrice && totalPrice + deliveryPrice}</b>
          </li>
        </ul>
        <div className="item-wrapper">
        {CartItems?.map((item) => {
          return (
            <div className="item-in-cart">
              <img src={item.img} alt="" />
              <div className="item-desc">
                <b>{item.price}</b>
                <h2>{item.name}</h2>
                <h2>{item.currentSizes}</h2>
              </div>
            </div>
          );
        })}
        </div>
      
        <h2 className="restriction">Данный товар доступен только по полной предоплате.</h2>
      </div>
    </div>
  );
};
export default Cart;
