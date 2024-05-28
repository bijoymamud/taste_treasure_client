

const SecondBanner = () => {
  return (
    <div className="md:mb-24">
      <div className="hero min-h-96" style={{ backgroundImage: 'url(https://i.postimg.cc/Pf6dzRHm/chef-service.jpg)' }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content " >
          <div className="max-w-6xl rounded-md md:rounded-none  md:h-60 md:py-10 bg-opacity-80 bg-white ">
            {/* 
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
              <span className="relative text-white">Taste Treasure</span>
            </span> */}

            <h3 className=" text-amber-500 text-3xl mt-5 md:mt-0 md:text-5xl font-extrabold ">Taste Treasure</h3>



            <p className="mb-5 mt-5 md:w-9/12 text-center mx-auto text-black ">Step into Taste Trease, where every bite is a treasure waiting to be discovered. Our passion for culinary excellence drives us to create dishes that are both innovative and comforting. Whether you're looking for a casual meal or a gourmet feast, Taste Trease offers a dining experience that is sure to satisfy and inspire.</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;