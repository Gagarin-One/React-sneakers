import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="top-header-container">
        <div className="top-header common-header">
          <div className="login side-header">
            <h2>Вход</h2>
            <h2 className="red">или</h2>
            <h2>регистрация</h2>
          </div>
          <h2 className="delivery">Оплата и доставка</h2>
          <div className="contacts side-header">
            <h2 className="schedule">8-22 будни · 8-20 выходные</h2>
            <h2>+7 800 700 32 53</h2>
          </div>
        </div>
      </div>
      <div className="bottom-header-container">
        <div className="bottom-header common-header">
          <div className="product-nav side-header">
            <Link to="/">
              <h1>SNEAKERS</h1>
            </Link>
            <Link to="Products">
              <h2>Кроссовки</h2>
            </Link>
            <Link to="Nike">
              <h2>Nike</h2>
            </Link>
            <Link to="Adidas">
              <h2>Adidas</h2>
            </Link>
            <Link to="Sale">
              <h2 className="red">Распродажа</h2>
            </Link>
          </div>
          <div className="cart-and-search side-header">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.7099 20.2904L17.9999 16.6104C19.44 14.8148 20.1374 12.5357 19.9487 10.2417C19.76 7.94769 18.6996 5.81318 16.9854 4.27704C15.2713 2.7409 13.0337 1.9199 10.7328 1.98286C8.43194 2.04582 6.24263 2.98795 4.61505 4.61553C2.98747 6.24311 2.04534 8.43243 1.98237 10.7333C1.91941 13.0342 2.74041 15.2718 4.27655 16.9859C5.81269 18.7001 7.94721 19.7605 10.2412 19.9492C12.5352 20.1379 14.8143 19.4405 16.6099 18.0004L20.2899 21.6804C20.3829 21.7741 20.4935 21.8485 20.6153 21.8993C20.7372 21.9501 20.8679 21.9762 20.9999 21.9762C21.1319 21.9762 21.2626 21.9501 21.3845 21.8993C21.5063 21.8485 21.6169 21.7741 21.7099 21.6804C21.8901 21.4939 21.9909 21.2447 21.9909 20.9854C21.9909 20.7261 21.8901 20.4769 21.7099 20.2904ZM10.9999 18.0004C9.61544 18.0004 8.26206 17.5899 7.11091 16.8207C5.95977 16.0515 5.06256 14.9583 4.53275 13.6792C4.00293 12.4001 3.86431 10.9926 4.13441 9.63476C4.4045 8.27689 5.07119 7.02961 6.05016 6.05065C7.02912 5.07168 8.27641 4.40499 9.63427 4.1349C10.9921 3.8648 12.3996 4.00342 13.6787 4.53324C14.9578 5.06305 16.051 5.96026 16.8202 7.1114C17.5894 8.26255 17.9999 9.61592 17.9999 11.0004C17.9999 12.8569 17.2624 14.6374 15.9497 15.9501C14.6369 17.2629 12.8564 18.0004 10.9999 18.0004Z"
                fill="black"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 18.0001C14.2653 18.0001 14.5196 17.8948 14.7071 17.7073C14.8947 17.5197 15 17.2654 15 17.0001V15.0001C15 14.7349 14.8947 14.4806 14.7071 14.293C14.5196 14.1055 14.2653 14.0001 14 14.0001C13.7348 14.0001 13.4805 14.1055 13.2929 14.293C13.1054 14.4806 13 14.7349 13 15.0001V17.0001C13 17.2654 13.1054 17.5197 13.2929 17.7073C13.4805 17.8948 13.7348 18.0001 14 18.0001ZM10 18.0001C10.2653 18.0001 10.5196 17.8948 10.7071 17.7073C10.8947 17.5197 11 17.2654 11 17.0001V15.0001C11 14.7349 10.8947 14.4806 10.7071 14.293C10.5196 14.1055 10.2653 14.0001 10 14.0001C9.73482 14.0001 9.48047 14.1055 9.29293 14.293C9.10539 14.4806 9.00004 14.7349 9.00004 15.0001V17.0001C9.00004 17.2654 9.10539 17.5197 9.29293 17.7073C9.48047 17.8948 9.73482 18.0001 10 18.0001ZM19 6.00015H17.62L15.89 2.55015C15.8372 2.4232 15.7587 2.30852 15.6595 2.21328C15.5603 2.11803 15.4426 2.04427 15.3136 1.99659C15.1846 1.94892 15.0472 1.92836 14.9099 1.9362C14.7726 1.94404 14.6384 1.98011 14.5157 2.04216C14.3929 2.10421 14.2843 2.1909 14.1966 2.29682C14.1089 2.40274 14.044 2.5256 14.006 2.65774C13.9679 2.78988 13.9575 2.92845 13.9754 3.0648C13.9933 3.20114 14.0391 3.33232 14.11 3.45015L15.38 6.00015H8.62004L9.89004 3.45015C9.9871 3.21706 9.9924 2.95587 9.90486 2.71904C9.81732 2.4822 9.64343 2.28725 9.4181 2.17331C9.19277 2.05938 8.93268 2.03491 8.69005 2.10481C8.44742 2.17471 8.24022 2.3338 8.11004 2.55015L6.38004 6.00015H5.00004C4.29323 6.0109 3.61291 6.2709 3.07909 6.73428C2.54526 7.19767 2.19221 7.83468 2.08221 8.53296C1.9722 9.23124 2.11231 9.94594 2.47782 10.551C2.84333 11.1561 3.41076 11.6126 4.08004 11.8401L4.82004 19.3001C4.89466 20.0427 5.24338 20.7308 5.79811 21.2301C6.35284 21.7293 7.07374 22.0039 7.82004 22.0001H16.2C16.9463 22.0039 17.6672 21.7293 18.222 21.2301C18.7767 20.7308 19.1254 20.0427 19.2 19.3001L19.94 11.8401C20.6108 11.6119 21.1791 11.1537 21.5443 10.5466C21.9096 9.93955 22.0482 9.22278 21.9356 8.52329C21.823 7.8238 21.4665 7.18674 20.9292 6.72492C20.3919 6.26311 19.7085 6.00636 19 6.00015ZM17.19 19.1001C17.1652 19.3477 17.0489 19.577 16.864 19.7435C16.6791 19.9099 16.4388 20.0014 16.19 20.0001H7.81004C7.56127 20.0014 7.32097 19.9099 7.13606 19.7435C6.95115 19.577 6.83491 19.3477 6.81004 19.1001L6.10004 12.0001H17.9L17.19 19.1001ZM19 10.0001H5.00004C4.73482 10.0001 4.48047 9.89479 4.29293 9.70726C4.10539 9.51972 4.00004 9.26537 4.00004 9.00015C4.00004 8.73493 4.10539 8.48058 4.29293 8.29304C4.48047 8.10551 4.73482 8.00015 5.00004 8.00015H19C19.2653 8.00015 19.5196 8.10551 19.7071 8.29304C19.8947 8.48058 20 8.73493 20 9.00015C20 9.26537 19.8947 9.51972 19.7071 9.70726C19.5196 9.89479 19.2653 10.0001 19 10.0001Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
