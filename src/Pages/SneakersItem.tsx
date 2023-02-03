import { FC, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useGetNikesQuery } from '../Store/Api/Api';

const SneakersItem = () => {
  const Location = useLocation()
  const { data = [] } = useGetNikesQuery(Number(Location.pathname.slice(-1)));

 console.log(Location)
  return (
    <div>
      <img src="" />
      <div>4545</div>
      <div>
        <h1>{data.map((item) =>{return <div>{item.id}</div>})}</h1>
      </div>
    </div>
  );
};
export default SneakersItem;
