import { useContext, useEffect } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }



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
      <Link className='font-bold text-lg focus:text-yellow-500 active:text-white' to="/order/salad">Order Food</Link>

    </li>

    {user &&

      <li tabIndex={0}>
        <Link className='font-bold text-lg focus:text-yellow-500 active:text-white' to="/order/salad">

          Inbox
          <div className="badge badge-error text-white">+99</div>

        </Link>
      </li>

    }




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
          <div className='flex items-center gap-2'>


            <div className="dropdown dropdown-end">
              <label tabIndex={0} className=" ">
                {user &&
                  <div className="tooltip  tooltip-left  mt-2 " data-tip={user.displayName}>
                    <button >  <img className=' mb-1 h-[30px] w-[30px] rounded-full' src={user?.photoURL} alt="" /> </button>
                  </div>
                }
              </label>

            </div>




            <div className="mr-2">
              {user ?
                <button onClick={handleLogOut} className=" pt-1"> <FaArrowRightFromBracket className="text-red-400 text-xl" />  </button> :
                <Link className="" to='/login'>
                  <button className=" btn ">Login</button>
                </Link>

              }
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
