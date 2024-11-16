import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/Header/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
