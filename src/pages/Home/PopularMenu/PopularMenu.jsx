import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const PopularMenu = () => {

  const [menu, setMenu] = useState([]);


  useEffect(() => {
    fetch("../../../../public/menu.json")
      .then(res => res.json())
      .then(data => {

        const popularItems = data.filter(item => item.category === "popular")
        setMenu(popularItems);
        console.log(popularItems);

      })

  }, [])

  return (
    <section className="">

      <SectionTitle subHeading={"Check it Out"}
        heading={"FROM OUR MENU"}>
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-5 my-20">
        {
          menu.map((singleItem) => <MenuItems

            key={singleItem._id}
            singleItem={singleItem}

          ></MenuItems>)
        }
      </div>
      <div className=" text-center "><Link to='/' className="uppercase btn btn-secondary   bg-gradient-to-r md:mt-2 hover:from-yellow-500 hover:to-pink-500  border-none from-green-400 to-blue-500">View  Full Menu</Link></div>
    </section>
  );
};

export default PopularMenu;