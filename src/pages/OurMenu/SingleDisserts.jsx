

const SingleDisserts = ({ singleDessert }) => {
  const { name, recipe, image, price } = singleDessert;
  return (
    <div>
      <div className="flex space-x-4">
        <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[120px]" src={image} alt="" />
        <div>
          <h3 className="uppercase font-extrabold text-lg">{name}----------</h3>
          <p className="text-md text-gray-500">{recipe}</p>
        </div>
        <p className="text-yellow-500">${price}</p>
      </div>
    </div>
  );
};

export default SingleDisserts;