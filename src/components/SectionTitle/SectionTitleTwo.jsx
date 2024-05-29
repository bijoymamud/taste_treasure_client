

const SectionTitleTwo = ({ headingTwo, subHeadingTwo }) => {
  return (
    <div>
      <div className="mx-auto text-center md:w-4/12 my-8 px-5 md:px-0">
        <p className="text-yellow-600 mb-2">--- {subHeadingTwo} ---</p>
        <h3 className="md:text-4xl text-2xl uppercase border-y-4 py-4">{headingTwo}</h3>
      </div>
    </div>
  );
};

export default SectionTitleTwo;