

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>

      <div className="mx-auto text-center md:w-4/12 md:mt-32 mb-10">
        <p className="text-yellow-600 mb-1 md:text-xl">--- {subHeading} ---</p>

        <blockquote className="text-5xl pt-5 mt-5 md:mt-0 md:mb-5 font-semibold t text-slate-900">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white">{heading}</span>
          </span>

        </blockquote>

        <h3 className="text-3xl uppercase "></h3>
      </div>

    </div>


  );
};

export default SectionTitle;