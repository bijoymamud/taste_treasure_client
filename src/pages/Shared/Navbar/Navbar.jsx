import { Link } from "react-router-dom";


const Navbar = () => {


  const navOptions = <>
    <li tabIndex={0}>
      <Link className='font-bold text-lg focus:text-yellow-500 active:text-white' to="/">Home</Link>

    </li>
    <li tabIndex={0}>
      <Link className='font-bold text-lg focus:text-yellow-500 active:text-white' to="/ourMenu">Our Menu</Link>

    </li>
    <li tabIndex={0}>
      <Link className='font-bold text-lg focus:text-yellow-500 active:text-white' to="/contact">Contact Us</Link>

    </li>
    <li tabIndex={0}>
      <Link className='font-bold text-lg focus:text-yellow-500 active:text-white' to="/">Dashboard</Link>

    </li>
    <li tabIndex={0}>
      <Link className='font-bold text-lg focus:text-yellow-500 active:text-white' to="/">Our Shop</Link>

    </li>

  </>


  return (
    <>
      <div className="navbar fixed text-white z-10 bg-opacity-40 max-w-screen-xl mx-auto bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <img className="w-[100px]" src="https://i.ibb.co/SRBrWWb/Black-White-Minimalist-Business-Logo-2-removebg-preview.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">LOG IN</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;