

const MenuTitle = ({ img, disName, title }) => {


  return (
    <div>
      <div className="md:mb-24">
        <div className="hero min-h-96 bg-fixed " style={{ backgroundImage: `url("${img}")` }}>
          <div className="hero-overlay bg-opacity-50"></div>
          <div className="hero-content text-center text-neutral-content " >
            <div className="max-w-2xl rounded-md md:rounded-none   md:py-10 bg-opacity-40 bg-black ">
              {/* 
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white">Taste Treasure</span>
          </span> */}

              <h3 className=" text-amber-500 text-3xl mt-5 md:mt-0 md:text-5xl font-extrabold ">{disName}</h3>
              <p className="w-2/3 mx-auto mt-5">{title}</p>



              <p className="mb-5 mt-5 md:w-9/12 text-center mx-auto text-black "></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuTitle;