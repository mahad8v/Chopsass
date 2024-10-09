import { Outlet } from "react-router-dom";
import TopNav from "../components/Navigation/TopNav";
import SideBar from "../components/Navigation/SideBar";

function Layout() {
  return (
    <div className='flex h-[100vh]  overflow-hidden  z-0'>
      <div className=''>
        <SideBar/>
      </div>
      <div className=' w-[100%] h-[100vh] p-6 '>
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

