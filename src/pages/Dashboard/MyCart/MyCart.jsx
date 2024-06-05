import { Helmet } from "react-helmet";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0)

  return (
    <div>
      <Helmet>
        <title>Taste Treasure | My Cart</title>
      </Helmet>
      <div className="uppercase">
        <h2>Total Items: {cart.length}</h2>
        <h2>Total Price: ${total}</h2>
      </div>

    </div>
  );
};

export default MyCart;