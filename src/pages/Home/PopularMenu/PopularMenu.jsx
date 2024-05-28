import { useEffect, useState } from "react";
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
    <section>

      <SectionTitle subHeading={"Popular Items"}
        heading={"FROM OUR MENU"}>
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-5">
        {
          menu.map((singleItem) => <MenuItems

            key={singleItem._id}
            singleItem={singleItem}

          ></MenuItems>)
        }
      </div>

    </section>
  );
};

export default PopularMenu;