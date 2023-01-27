import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer";
import Header from "../Components/Header"

const MainLayout = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div>
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
export default MainLayout