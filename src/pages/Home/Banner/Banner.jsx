import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://i.ibb.co/sHJ5ZDB/01.jpg" />

        </div>
        <div>
          <img src="https://i.ibb.co/CPXMWH1/02.jpg" />

        </div>
        <div>
          <img src="https://i.ibb.co/Z1XKxmF/03.png" />

        </div>
        <div>
          <img src="https://i.ibb.co/7X3q77h/04.jpg" />

        </div>
        <div>
          <img src="https://i.ibb.co/sQ80Wzp/05.png" />

        </div>
      </Carousel>
    </div>
  );
};

export default Banner;