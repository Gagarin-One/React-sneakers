import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useGetSneakersQuery } from '../Store/Api/Api';
import { useAppSelector } from '../Store/hooks';
import MyLoader from '../Components/Loader';
import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react';
type Products = {
  id: number;
  price: number;
  name: string;
  img: string;
};
type ProductsResponse = Products[];

const Products = () => {
  const Navigate = useNavigate();
  const Location = useLocation();
  const fakeArr = [...new Array(8)]; // for loader
  const { data = [], isLoading } = useGetSneakersQuery('');
  
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const popupList = ['все', 'цена(по возрастанию)', 'цена(по убыванию)'];
  const selectorList = ['all','increase', 'decrease']
  const [sortNameIndex, setSortNameIndex] = useState(0) 
  const [currentSort, setCurrentSort] = useState('all');

  const onClickSelector = (idx: number) => {
    setSortNameIndex(idx)
    setCurrentSort(selectorList[idx]);
    setIsOpenPopup(false);
  };


  return (
    <div className="home-wrapper">
      <div>
        {isOpenPopup ? (
          <ul>
            {popupList.map((item, idx) => {
              return <li onClick={()=> onClickSelector(idx)}>{item}</li>;
            })}
          </ul>
        ) : (
          <h2 onClick={()=>setIsOpenPopup(true)}>{popupList[sortNameIndex]}</h2>
        )}
      </div>
      <div className="product-item-container">
        {isLoading
          ? fakeArr.map((i) => {
              return (
                <div className="product-item">
                  <MyLoader />
                </div>
              );
            })
          : data.map((Product, i) => {
              return (
                <div
                  className="product-item"
                  key={i}
                  onClick={() => Navigate(Location.pathname + ':' + Product.id)}>
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
