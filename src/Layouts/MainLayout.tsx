import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer";
import Header from "../Components/Header"

const MainLayout = () => {
  return (
    <div className="wrapper">
  
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer/>

    </div>
  );
}
export default MainLayout