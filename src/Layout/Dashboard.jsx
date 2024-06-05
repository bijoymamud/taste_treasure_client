import { FaCalendar, FaWallet } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdLibraryBooks } from "react-icons/md";
import { RiHome2Fill, RiShoppingCart2Fill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full mt- bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link><RiHome2Fill />User Home</Link></li>
            <li><Link><RiShoppingCart2Fill />My Cart</Link></li>
            <li><Link><FaCalendar />Reservations</Link></li>
            <li><Link><FaWallet />Payment History</Link></li>

            <div className="divider my-10"></div>

            <li><Link to="/"><RiHome2Fill />Home</Link></li>
            <li><Link to="/ourMenu"><IoMenu />Menu</Link></li>
            <li><Link to="/order/salad"><MdLibraryBooks />Order Food</Link></li>

          </ul>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;