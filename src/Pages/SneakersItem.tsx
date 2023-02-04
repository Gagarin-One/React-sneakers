import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAddToCartMutation, useGetNikesQuery } from '../Store/Api/Api';
type Products = {
  id: number;
  price: number;
  name: string;
  size: number;
  img: string;
  desc: string;
};
const defaultProducts = {
  id: 0,
  price: 23,
  name: 'dsd',
  size: 44,
  img: 'sdsd',
  desc: 'sdsdsd',
};
const SneakersItem = () => {
  const Location = useLocation();
  const LocationId = Number(Location.pathname.slice(-1));
  const { data = defaultProducts } = useGetNikesQuery(LocationId);
  const [addToCart] = useAddToCartMutation();

  const handleAddToCart = async (item: Products) => {
    await addToCart(item).unwrap();
  };

  return (
    <div className="sneakers-wrapper">
      <div className="sneaker">
        <img src={data.img} />
        <div className="side-block">
          <h1>{data.name}</h1>
          <b>{data.price}</b>
          <button onClick={() => handleAddToCart({ ...data, ...{ size: 10 } })}>
            Добавить в корзину
          </button>
          <span>Товар доступен только по полной предоплате</span>
          <h2 className="title">Описание</h2>
          <h2>{data.desc}</h2>
          <Link to="Contacts" className="title">
            Контакты
          </Link>
          <Link to="delivery" className="title">
            Доставка и оплата
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SneakersItem;
