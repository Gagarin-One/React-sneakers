import { useNavigate } from "react-router-dom"

const CartEmpty = () => {
  const navigate = useNavigate()
  return (
    <div className="empty-cart">
      <h1>Корзина пуста</h1>
      <button onClick={() => navigate('/')}>Вернуться на главную</button>
    </div>
  )
}
export default CartEmpty