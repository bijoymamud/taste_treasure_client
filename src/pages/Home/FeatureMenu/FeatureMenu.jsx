import SectionTitleTwo from "../../../components/SectionTitle/SectionTitleTwo";

const FeatureMenu = () => {
  return (
    <section className="md:my-32 flex justify-center items-center">


      <div className="hero h-[77vh]" style={{ backgroundImage: 'url(https://i.postimg.cc/9MYH1TXk/featured.jpg)' }}>
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content mb-20">
          <div className="w-5/6 mx-auto">


            <SectionTitleTwo subHeadingTwo="Check it Out"
              headingTwo="Featured Items"
            ></SectionTitleTwo>

            <div className="md:flex justify-center gap-10 items-center mx-auto">
              <div className="w-full md:w-1/2">
                <img src="https://i.postimg.cc/9MYH1TXk/featured.jpg" alt="" />
              </div>
              <div className="w-full md:w-1/2">
                <p className="md:text-start mb-5 text-amber-500">20 March, 2024</p>
                <h2 className="md:text-start mb-2 font-extrabold text-xl text-amber-500">WHERE CAN I GET SOME?</h2>
                <p className="md:text-start text-white mb-10 ">Too busy to dine in? Simply hop onto our website at TASTE TREASURE, or download our user-friendly app from the App Store or Google Play. Prefer the personal touch? Give us a ring at (123) 456-7890, and we'll have your order ready for pickup in no time.</p>
                <button className="btn btn-secondary bg-gradient-to-r mt-2 from-yellow-500 to-pink-500 flex border-none hover:from-green-400 hover:to-blue-500">READ MORE</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default FeatureMenu;
