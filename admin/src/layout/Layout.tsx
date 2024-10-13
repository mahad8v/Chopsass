import { Outlet } from "react-router-dom";
import TopNav from "../components/Navigation/TopNav";
import SideBar from "../components/Navigation/SideBar";

function Layout() {
  return (
    <div className='flex  overflow-hidden bg-[#F1F5F9]  z-0'>
      <div className='fixed left-0 top-0 h-full z-10'>
        <SideBar/>
      </div>
      <div className=' w-[100%]'>
        <div style={{ width: 'calc(100vw - 300px)' }} className="ml-[290px] bg-[#fff] border border-gray-[400] px-4 py-2 w-full fixed">
          <TopNav />
        </div>
        <div className=" p-4  ">  
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;

