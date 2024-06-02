
const FoodCard = ({ item }) => {

  const { name, image, price, recipe } = item;
  return (
    <section className="">
      <div className="card md:w-full md:h-92 glass ">
        <figure><img className="w-full h-[300px]" src={image} alt="Food Image" /></figure>
        <div className="card-body md:max-h-64">
          <h2 className="card-title">{name}</h2>
          <p className="bg-amber-500 text-white absolute right-0 top-0 mr-4 mt-4 p-1 rounded-md cursor-pointer">${price}</p>
          <p className="w-full">{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn mt-5 btn-primary mx-auto text-center uppercase">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCard;