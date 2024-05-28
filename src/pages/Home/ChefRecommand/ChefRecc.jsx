import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ReccoSingle from "./ReccoSingle";


const ChefRecc = () => {

  const [chefRecc, setChefRecc] = useState([]);

  useEffect(() => {
    fetch("../../../../public/menu.json")
      .then(res => res.json())
      .then(data => {
        const chefChose = data.filter(items => items.category === "offered")
        setChefRecc(chefChose);
        console.log(chefChose);
      })
  }, [])




  return (
    <section className="my-20">

      <SectionTitle
        subHeading={"Should Try"}
        heading={'CHEF RECOMMENDS'}></SectionTitle>


      <div className="grid md:grid-cols-3 gap-5 md:mx-auto px-5 md my-20">
        {
          chefRecc.map((item) => <ReccoSingle key={item._id} item={item}></ReccoSingle>)
        }
      </div>


    </section>
  );
};

export default ChefRecc;