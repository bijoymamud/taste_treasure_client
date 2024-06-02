import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import SingleSoups from "./SingleSoups";

const Soups = ({ title }) => {

  const [menu] = useMenu();
  const soups = menu.filter(infoSoups => infoSoups.category === "soup")

  return (
    <section>
      <div className="md:mb-24 mt-10">
        <div className="hero min-h-96 bg-fixed " style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/bowl-soup-with-piece-bread-it_1340-23200.jpg?t=st=1717072670~exp=1717076270~hmac=998e3077cc2b4f6df943c570a9acfda1c69a033e88023ef3d9760f388be003a0&w=1060' }}>
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content " >
            <div className="max-w-2xl rounded-md md:rounded-none   md:py-10 bg-opacity-40 bg-black ">


              <h3 className=" text-amber-500 text-3xl mt-5 md:mt-0 md:text-5xl font-extrabold ">SOUPS</h3>
              <p className="w-3/4 mx-auto mt-5">Soup is a versatile and comforting dish made by combining ingredients such as meat, vegetables, and legumes with stock, juice, water, or another liquid. Soups can be served hot or cold, thick or thin, and can range from simple broths to hearty stews. </p>



              <p className="mb-5 mt-5 md:w-9/12 text-center mx-auto text-black "></p>

            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 my-20">
        {
          soups.map((infoSoups) => <SingleSoups key={infoSoups._id} infoSoups={infoSoups}></SingleSoups>)
        }
      </div>
      <div className=" text-center "><Link to={`/order/${title}`} className="uppercase btn btn-secondary   bg-gradient-to-r md:mt-2 hover:from-yellow-500 hover:to-pink-500  border-none from-green-400 to-blue-500">Order now</Link></div>

    </section>
  );
};

export default Soups;