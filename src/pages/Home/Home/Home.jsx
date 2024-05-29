
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import Catagories from '../Catagories/Catagories';
import ChefRecc from '../ChefRecommand/ChefRecc';
import FeatureMenu from '../FeatureMenu/FeatureMenu';
import PopularMenu from '../PopularMenu/PopularMenu';
import Telephone from '../Telephone/Telephone';
import Testimonial from '../Testimonial/Testimonial';
import SecondBanner from '../secondBanner/SecondBanner';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Taste Treasure | Home</title>
      </Helmet>
      <Banner />
      <Catagories />
      <SecondBanner />
      <PopularMenu />
      <Telephone />
      <ChefRecc />
      <FeatureMenu />
      <Testimonial />
    </div >
  );
};

export default Home;