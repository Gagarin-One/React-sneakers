import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useGetSneakersQuery } from '../Store/Api/Api';
import { useAppSelector } from '../Store/hooks';
import MyLoader from '../Components/Loader';
import { useLocation, useNavigate } from 'react-router';
type Products = {
  id: number;
  price: number;
  name: string;
  img: string;
};
type ProductsResponse = Products[];

const Products = () => {
  const Navigate = useNavigate()
  const Location = useLocation()
  const fakeArr = [...new Array(8)]
  const { data = [], isLoading } = useGetSneakersQuery('');
  return (
    <div className="home-wrapper">
      <div className="product-item-container">
      {isLoading 
      ? fakeArr.map((i) => {
        return <div className="product-item"><MyLoader/></div>
        })
      : data.map((Product, i) => {
          return (
            <div 
            className="product-item" 
            key={i} 
            onClick={() => Navigate(Location.pathname + ':' + Product.id)}
            >
              <img src={Product.img} alt="" />
              <h2>{Product.name}</h2>
              <b>{Product.price + '₽'}</b>
            </div>
          );
        })}
         
      </div>
    </div>
  );
};
export default Products;
