

const ReccoSingle = ({ item }) => {

  const { image, name, recipe } = item;

  return (
    <section>
      <div className="card md:w-96 bg-gray-50 rounded-none drop-shadow-xl">
        <figure><img className="w-full" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge bg-[#c77dff] text-white">NEW</div>
          </h2>
          <p className="text-gray-500">{recipe}</p>
          <div className="card-actions justify-center mt-5">

          </div>
        </div>
      </div>
    </section>
  );
};

export default ReccoSingle;