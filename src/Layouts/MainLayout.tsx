import { Outlet } from "react-router-dom"
import Header from "../Components/Header"

const MainLayout = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
export default MainLayout