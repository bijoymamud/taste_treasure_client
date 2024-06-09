import { useContext } from "react";
import { Helmet } from "react-helmet";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../providers/AuthProviders";


const UserHome = () => {
  const { user } = useContext(AuthContext);
  const [cart] = useCart();
  const total = parseFloat(cart.reduce((sum, item) => item.price + sum, 0).toFixed(2));
  // console.log(cart);
  console.log(user);
  return (
    <section>
      <Helmet>
        <title>Taste Treasure | Profile</title>
      </Helmet>
      <div className="mx-auto">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-3 gap-4 w-full ">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-5 uppercase ">Ordered Items :</h2>
              <p className="text-[#cc9616] text-4xl mt-2 text-center">{cart.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-5 uppercase">Total Amount</h2>
              <p className=" text-[#cc9616] text-4xl mt-2 text-center">${total}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2 uppercase ">Feedback</h2>
              <textarea className="textarea border-r-4  border-[#cc9616]  caret-pink-500" placeholder="Your Feedback"></textarea>
              <div className="text-end">
                <button className="btn btn-xs  ">POST</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
              {/* <img class="w-24 h-24 rounded-full mr-4" src="https://via.placeholder.com/150" alt="User Avatar"> */}
              {/* <figure><img className="w-full mr-2 pr-2" src={user.photoURL} alt="Shoes" /></figure> */}
              <div className="avatar online">
                <div className="w-24 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2 ms-5 items-center">{user.displayName}</h2>

              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2 uppercase text-[#cc9616]">User Information :</h2>
              <ul className="text-gray-700">
                <li><strong>Email:</strong> <span className="text-gray-500">{user.email}</span></li>
                <li><strong>Phone:</strong> <span className="text-gray-500">(123) 456-7890</span></li>
                <li><strong>Address:</strong> <span className="text-gray-500">1234 Main St, Anytown, USA</span></li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserHome;