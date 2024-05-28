
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import ChefRecc from '../ChefRecommand/ChefRecc';
import PopularMenu from '../PopularMenu/PopularMenu';
import Telephone from '../Telephone/Telephone';
import SecondBanner from '../secondBanner/SecondBanner';

const Home = () => {
  return (
    <div>
      <Banner />
      <Catagories />
      <SecondBanner />
      <PopularMenu />
      <Telephone />
      <ChefRecc />
    </div >
  );
};

export default Home;