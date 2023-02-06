import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import CartEmpty from '../Components/CartEmpty';
import CartSkeleton from '../Components/CartSkeleton';
import { useDeleteFromCartMutation, useGetCartItemsQuery } from '../Store/Api/Api';

const Cart = () => {
  const { data: CartItems, isLoading } = useGetCartItemsQuery('');
  const [deleteFromCart] = useDeleteFromCartMutation();
  const totalPrice = CartItems?.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  const deliveryPrice = 500;
  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    await deleteFromCart(id).unwrap();
  };

  return (
    <div>
      {isLoading ? (
        <div className="cart-wrapper">
        <div className="left-side-block">
          <h1>Оформите заказ</h1>
        </div>
        <div className="right-side-block">
          <CartSkeleton/>
        </div>
      </div>
      ) : (
        totalPrice ? (<div className="cart-wrapper">
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
                  <svg
                    onClick={() => handleDelete(item.id)}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.4099 12.0002L19.7099 5.71019C19.8982 5.52188 20.004 5.26649 20.004 5.00019C20.004 4.73388 19.8982 4.47849 19.7099 4.29019C19.5216 4.10188 19.2662 3.99609 18.9999 3.99609C18.7336 3.99609 18.4782 4.10188 18.2899 4.29019L11.9999 10.5902L5.70994 4.29019C5.52164 4.10188 5.26624 3.99609 4.99994 3.99609C4.73364 3.99609 4.47824 4.10188 4.28994 4.29019C4.10164 4.47849 3.99585 4.73388 3.99585 5.00019C3.99585 5.26649 4.10164 5.52188 4.28994 5.71019L10.5899 12.0002L4.28994 18.2902C4.19621 18.3831 4.12182 18.4937 4.07105 18.6156C4.02028 18.7375 3.99414 18.8682 3.99414 19.0002C3.99414 19.1322 4.02028 19.2629 4.07105 19.3848C4.12182 19.5066 4.19621 19.6172 4.28994 19.7102C4.3829 19.8039 4.4935 19.8783 4.61536 19.9291C4.73722 19.9798 4.86793 20.006 4.99994 20.006C5.13195 20.006 5.26266 19.9798 5.38452 19.9291C5.50638 19.8783 5.61698 19.8039 5.70994 19.7102L11.9999 13.4102L18.2899 19.7102C18.3829 19.8039 18.4935 19.8783 18.6154 19.9291C18.7372 19.9798 18.8679 20.006 18.9999 20.006C19.132 20.006 19.2627 19.9798 19.3845 19.9291C19.5064 19.8783 19.617 19.8039 19.7099 19.7102C19.8037 19.6172 19.8781 19.5066 19.9288 19.3848C19.9796 19.2629 20.0057 19.1322 20.0057 19.0002C20.0057 18.8682 19.9796 18.7375 19.9288 18.6156C19.8781 18.4937 19.8037 18.3831 19.7099 18.2902L13.4099 12.0002Z"
                      fill="black"
                    />
                  </svg>
                </div>
              );
            })}
          </div>

          <h2 className="restriction">Данный товар доступен только по полной предоплате.</h2>
        </div>
      </div>)
    : (<CartEmpty/>)
    
        
      )}
    </div>
  );
};
export default Cart;
