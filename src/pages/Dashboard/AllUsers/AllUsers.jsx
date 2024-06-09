import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaTrash, FaUserShield } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {

  const { data: users = [], refetch, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users')
      return res.json()
    }
  })

  const handleDelete = (user) => {
    console.log(user);
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
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);

            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }


  //change role of user
  const handleChangeRole = (user) => {
    console.log(user);

    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH"

    })
      .then(res => res.json())
      .then(data => {
        isLoading(true)
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is Admin now`,
            showConfirmButton: false,
            timer: 1500
          });
        }

      })

  }


  return (
    <section className="w-11/12">
      <Helmet>
        <title>Taste Treasure | All Users</title>
      </Helmet>
      <h2 className="uppercase text-lg font-extrabold">Total users : <span className="text-[#D1A054] text-xl">{users.length}</span></h2>



      <div className="overflow-x-auto my-20">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-lg text-[#D1A054]">
              <th>
                {/* <label>
                  <input type="checkbox" className="checkbox" />
                </label> */}
              </th>

              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-lg w-full">

            {
              users.map((user, index) =>
                <tr key={user._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        {/* <div className="mask mask-squircle w-16 h-16">
                          <img src={user.img} />
                        </div> */}
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>

                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-gray-500 text-lg">{user.email}</span>
                    <br />

                  </td>

                  <th className="text-center">
                    <button onClick={() => handleChangeRole(user)} className="  text-lg  btn-xs">{user.role === 'admin' ? 'admin' : <FaUserShield />}</button>
                  </th>
                  <th className="text-center">
                    <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-xs  text-lg hover:bg-red-500 hover:text-white"><FaTrash /></button>
                  </th>
                </tr>)
            }




          </tbody>


        </table>
      </div>
    </section>
  );
};

export default AllUsers;
