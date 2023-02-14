import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-wrapper gray-background">
      <div className="footer">
        <div className="right-side">
          <h2>© 2023 Магазин Sneakers</h2>
          <div className="links">
            <Link to="Contacts">Контакты</Link>
            <Link to="Delivery">Доставка и оплата</Link>
            <Link to="Products">Кроссовки</Link>
            <Link to="Sale">Распродажа</Link>
          </div>
        </div>
        <div className="payment">
          <img
            width="60px"
            src="https://sneakerhead.ru/local/templates/sd/images/footer/visa.svg"
            alt=""
          />
          <img
            width="40px"
            src="https://sneakerhead.ru/local/templates/sd/images/footer/master.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
