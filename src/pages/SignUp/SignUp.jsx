import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProviders';


const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();


  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log('user profile updated');
            reset();

            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully Sign Up",
              showConfirmButton: false,
              timer: 1500
            });

          })
          .catch(error => console.log(error))

        navigate(from, { replace: true });

      })
  }



  return (
    <section className=''>

      <Helmet>
        <title>Taste Treasure | Sign Up</title>
      </Helmet>
      <div className='container md:flex items-center justify-evenly  gap-10  md:pt-28'>

        <div className='md:w-2/6'>
          <img src='https://i.ibb.co/jDMz1bj/login-page-banner.png' alt='' />

        </div>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl  dark:text-gray-100" bis_skin_checked="1">
          <h1 className="text-2xl text-black font-bold text-center">Sign Up</h1>

          <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
            <div className="space-y-1 text-sm" bis_skin_checked="1">
              <label htmlFor="name" className="block dark:text-gray-400">Username</label>
              <input type="text" name="name" id="name" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                {...register("name", { required: true })}
              />
              {errors.name && <span className='text-red-500'>This fild is required</span>}
            </div>

            <div className="space-y-1 text-sm" bis_skin_checked="1">
              <label htmlFor="email" className="block dark:text-gray-400">Email</label>
              <input type="text" name="email" id="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                {...register("email", { required: true })}

              />
              {errors.email && <span className='text-red-500'>This fild is required</span>}
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text dark:text-gray-400'>Image URL</span>
              </label>

              <input
                {...register('photoURL', { required: true })}

                type='text'
                placeholder='Image URL'
                className=' dark:bg-gray-900 text-white input input-bordered'
              />

              {errors.photoURL && (
                <span className='mt-1 aext-red-500'>
                  Image field is required
                </span>
              )}
            </div>


            <div className="space-y-1 text-sm" bis_skin_checked="1">
              <label htmlFor="password" className="block dark:text-gray-400">Password</label>
              <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                {...register("password", { required: true })}
              />
              {errors.password && <span className='text-red-500'>This field is required</span>}
            </div>




            <button className="block w-full  p-3 text-center rounded-sm dark:text-white dark:bg-violet-500 hover:text-white hover:bg-violet-600 ">Sign Up</button>
          </form>

          <div className="flex items-center pt-4 space-x-1" bis_skin_checked="1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700" bis_skin_checked="1"></div>
            <p className="px-3 text-sm dark:text-black">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700" bis_skin_checked="1"></div>
          </div>
          <div className="flex justify-center space-x-4" bis_skin_checked="1">
            <button aria-label="Log in with Google" className="p-3 rounded-sm">
              <FcGoogle className='text-gray-400 text-3xl' />
            </button>

          </div>
          <p className="text-sm text-center sm:px-6 dark:text-gray-400">Already have an account?
            <Link to="/login" rel="noopener noreferrer" href="#" className=" font-extrabold ms-2  dark:text-gray-500">Login</Link>
          </p>
        </div>

      </div >

    </section >
  );
};

export default SignUp;