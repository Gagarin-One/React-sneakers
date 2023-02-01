import { skipToken } from "@reduxjs/toolkit/dist/query"
import { useGetSnekersQuery } from "../Store/Api/Api"
import { useAppSelector } from "../Store/hooks"
type Products = {
  id: number,
  price:number,
  name:string,
  img:string,
}
type ProductsResponse = Products[]
const Products = () => {

  const {data =[]} = useGetSnekersQuery()
  return (
    <div className="home-wrapper">
       <div className="product-item-container">
      {data.map((Product,i) => {return  <div className='product-item' key={i}>
              <img src={Product.img} alt="" />
              <h2>{Product.name}</h2>
              <b>{Product.price}</b>
              </div>
      })}
    </div>
    </div>
    
  )
}
export default Products