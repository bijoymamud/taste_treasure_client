import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import FoodCard from './FoodCard';

const Order = () => {

  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();


  const desserts = menu.filter(item => item.category === "dessert");
  const soup = menu.filter(item => item.category === "soup");
  const salad = menu.filter(item => item.category === "salad");
  const pizza = menu.filter(item => item.category === "pizza");
  const offered = menu.filter(item => item.offered === "offered");

  return (
    <section>
      <Helmet>
        <title>Taste Treasure | Order</title>
      </Helmet>

      <div className="hero h-[80vh] bg-fixed" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/023/010/452/non_2x/the-fast-food-meal-in-the-black-background-with-ai-generated-free-photo.jpg)' }}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="text-center text-neutral-content bg md:mt-20 md:w-4/6 w-full  items-center justify-around">
          <div className=" h-[40vh] bg-black bg-opacity-50 flex flex-col justify-center items-center px-4 md:px-32">
            <h2 className="text-7xl w-full font-extrabold uppercase">Order Food</h2>
            <p className="uppercase mt-4">Would you like to try a dish? <br />
              Lets order Now</p>
          </div>
        </div>
      </div>

      <Tabs className=" text center my-10" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="uppercase mt-5">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <div className='grid md:grid-cols-3 gap-10'>

            {
              salad.map((item) => <FoodCard
                key={item.id}
                item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid md:grid-cols-3 gap-10'>
            {
              pizza.map((item) => <FoodCard
                key={item.id}
                item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid md:grid-cols-3 gap-10'>
            {
              soup.map((item) => <FoodCard
                key={item.id}
                item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid md:grid-cols-3 gap-10'>
            {
              desserts.map((item) => <FoodCard
                key={item.id}
                item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid md:grid-cols-3 gap-10'>
            {
              offered.map((item) => <FoodCard
                key={item.id}
                item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
      </Tabs>

    </section>
  );
};

export default Order;
