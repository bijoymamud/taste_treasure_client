import useMenu from "../../hooks/useMenu";
import SingleSalad from "./SingleSalad";


const Salad = () => {

  const [menu] = useMenu();

  // if (loading) {
  //   return <span className="loading loading-bars loading-lg mx-auto text- flex items-center"></span>
  // }

  const salad = menu.filter(infoSalad => infoSalad.category === "salad");

  return (
    <section>
      <div className="md:mb-24 mt-10">
        <div className="hero min-h-96 bg-fixed " style={{ backgroundImage: 'url(https://rms.condenast.it/rms/public/5d3/f0a/a9d/thumb_3691_1200_670_0_0_auto.jpg' }}>
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content " >
            <div className="max-w-2xl rounded-md md:rounded-none   md:py-10 bg-opacity-40 bg-black ">


              <h3 className=" text-amber-500 text-3xl mt-5 md:mt-0 md:text-5xl font-extrabold ">SALAD</h3>
              <p className="w-3/4 mx-auto mt-5"> Vegetable salad is a nutritious, colorful, and versatile dish that can be served as an appetizer, side dish, or main course. It typically consists of a variety of fresh, raw vegetables that are diced, sliced, or chopped and combined together.</p>



              <p className="mb-5 mt-5 md:w-9/12 text-center mx-auto text-black "></p>

            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 my-20">
        {
          salad.map((infoSalad) => <SingleSalad key={infoSalad._id} infoSalad={infoSalad}></SingleSalad>)
        }
      </div>

    </section>
  );
};

export default Salad;