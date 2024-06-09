import { Helmet } from "react-helmet";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = parseFloat(cart.reduce((sum, item) => item.price + sum, 0).toFixed(2));



  const handleDelete = (row) => {
    console.log(row);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${row._id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: `${row.name} Deleted From Cart`,
                icon: "success"
              });
            }
          })

      }
    });
  }



  return (
    <div>
      <Helmet>
        <title>Taste Treasure | My Cart</title>
      </Helmet>
      <div className="uppercase flex md:gap-96 items-center mt-16">
        <h2 className="text-lg font-extrabold">Total Items : <span className="text-[#D1A054]">{cart.length}</span></h2>
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-extrabold">Total Price : <span className="+">${total}</span></h2>
          <button className="btn btn-success text-white btn-sm">PAY</button>
        </div>
      </div>

      {/* <p>table content</p> */}

      <div className="overflow-x-auto md:my-12">
        <table className="table">
          {/* head */}
          <thead className="text-base text-black">
            <tr>
              <th>

              </th>
              <th>Image</th>
              <th className="">Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              cart.map((row, index) => <tr key={row._id}>

                <th className="text-gray-500">
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-12">
                        <img src={row.image} />
                      </div>
                    </div>

                  </div>
                </td>
                <td>

                  <span className=" badge-lg text-gray-500">{row.name}</span>
                </td>
                <td className="text-lg text-[#ad813f]">$ {row.price}</td>
                <td>
                  <button onClick={() => handleDelete(row)} className="btn btn-ghost btn-xs text-xl text-red-600"><FaDeleteLeft /></button>
                </td>
              </tr>
              )
            }

            <tr>

            </tr>

          </tbody>

        </table>
      </div>


    </div>
  );
};

export default MyCart;

