import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(res => {
        const loggedInUser = res.user;
        console.log(loggedInUser);
        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(() => {
            navigate(from, { replace: true });

          })


      })
  }


  return (
    <div>
      <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
        <FcGoogle className='text-gray-400 text-3xl' />
      </button>
    </div>
  );
};

export default SocialLogin;