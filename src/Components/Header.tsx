import React from "react"


const Header = () => {
  return (
    <div>
      <div className="top-header">
        <div className="login">
          <h2>Вход</h2>
          <h2 className="red">или</h2>
          <h2>регистрация</h2>
        </div>
        <h2 className="delivery">Оплата и доставка</h2>
        <div className="contacts">
          <h2 className="schedule">8-22 будни · 8-20 выходные</h2>
          <h2>+7 800 700 32 53</h2>
        </div>
      </div>
      <div className="bottom-header">
        
      </div>
    </div>
  )
}
export default Header