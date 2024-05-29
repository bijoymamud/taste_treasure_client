

const Cover = ({ img }) => {

  return (


    <section>
      <div className="hero h-[80vh] bg-fixed" style={{ backgroundImage: `url("${img}")` }}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="text-center text-neutral-content bg md:mt-20 md:w-4/6 w-full  items-center justify-around">
          <div className=" h-[40vh] bg-black bg-opacity-50 flex flex-col justify-center items-center px-4 md:px-32">
            <h2 className="text-7xl w-full font-extrabold">OUR MENU</h2>
            <p className="uppercase mt-4">Would you like to try a dish?</p>
          </div>
        </div>
      </div>
    </section>


  );
};

export default Cover;