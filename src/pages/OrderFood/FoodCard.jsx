
const FoodCard = ({ item }) => {

  const { name, image, price, recipe } = item;
  return (
    <section>
      <div className="card md:w-full md:h-92 glass">
        <figure><img className="w-full h-[300px]" src={image} alt="Food Image" /></figure>
        <div className="card-body md:h-72">
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <p className="w-full">{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary uppercase">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCard;