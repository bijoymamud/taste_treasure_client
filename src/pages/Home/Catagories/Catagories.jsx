
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Catagories = () => {
  return (
    <section >

      <SectionTitle
        subHeading={"From 11.00 am to 10.00 pm"}
        heading={"Order Online"}

      ></SectionTitle>

      <Swiper


        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src="https://i.postimg.cc/J4wPg1Rm/slide1.jpg" alt="foodDish" />
          <h3 className='text-2xl md:text-4xl uppercase text-center -mt-20 text-white '>Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/VkggdnnL/slide2.jpg" alt="foodDish" />
          <h3 className='text-2xl md:text-4xl uppercase text-center -mt-20 text-white '>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/YSS3g0zN/slide3.jpg" alt="foodDish" />
          <h3 className='text-2xl md:text-4xl uppercase text-center -mt-20 text-white '>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/rs5CcrqT/slide4.jpg" alt="foodDish" />
          <h3 className='text-2xl md:text-4xl uppercase text-center -mt-20 text-white '>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/J4wPg1Rm/slide1.jpg" alt="foodDish" />
          <h3 className='text-2xl md:text-4xl uppercase text-center -mt-20 text-white '>Salad</h3>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Catagories;