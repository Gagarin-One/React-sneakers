import { useAppSelector } from "../Store/hooks"

const Products = () => {
  const {AllProducts} = useAppSelector(state => state.mainReducer)
  return (
    <div className="home-wrapper">
       <div className="product-item-container">
      {AllProducts.map((Product,i) => {return  <div className='product-item' key={i}>
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