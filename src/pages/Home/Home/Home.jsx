
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import PopularMenu from '../PopularMenu/PopularMenu';
import SecondBanner from '../secondBanner/SecondBanner';

const Home = () => {
  return (
    <div>
      <Banner />
      <Catagories />
      <SecondBanner />
      <PopularMenu />
    </div >
  );
};

export default Home;