import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useGetSnekersQuery } from '../Store/Api/Api';
import { useAppSelector } from '../Store/hooks';
import MyLoader from './Loader';
type Products = {
  id: number;
  price: number;
  name: string;
  img: string;
};
type ProductsResponse = Products[];
const Products = () => {
  const fakeArr = [...new Array(8)]
  const { data = [], isLoading } = useGetSnekersQuery('');
  return (
    <div className="home-wrapper">
      <div className="product-item-container">
      {isLoading 
      ? fakeArr.map((i) => {
        return <div className="product-item"><MyLoader/></div>
        })
      : data.map((Product, i) => {
          return (
            <div className="product-item" key={i}>
              <img src={Product.img} alt="" />
              <h2>{Product.name}</h2>
              <b>{Product.price}</b>
            </div>
          );
        })}
         
      </div>
    </div>
  );
};
export default Products;
