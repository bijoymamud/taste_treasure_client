import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitleTwo from "../../../components/SectionTitle/SectionTitleTwo";


import '@smastrom/react-rating/style.css';


const Testimonial = () => {

  const [review, setReview] = useState([]);


  useEffect(() => {
    fetch("../../../../public/review.json")
      .then(res => res.json())
      .then(data => setReview(data))
  }, [])

  return (
    <section>
      <SectionTitleTwo subHeadingTwo={"What Our Client Says"} headingTwo={"TESTIMONIAL"}></SectionTitleTwo>



      <div>

        <div className="my-8">

          <Swiper

            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            navigation={true}
            modules={[Autoplay, Navigation]}

            className="mySwiper my-20 "
          >

            {
              review.map(info => <SwiperSlide key={info._id}>

                <div className="mx-auto text-center md:w-4/6 mt-10  w-3/4 px-5">
                  <p className="text-center mb-5 ">
                    <Rating
                      className="text-center mx-auto"
                      style={{ maxWidth: 120 }}
                      value={info.rating}
                      readOnly
                    />
                  </p>
                  <p>{info.details}</p>

                  <div className="avatar">
                    <div className="w-20 ring ring-warning rounded-full mt-2 ring-offset-base-100 ring-offset-2">
                      <img src={info.img} />
                    </div>
                  </div>
                  <p className="text-yellow-600 text-2xl font-extrabold mt-2">{info.name}</p>
                  {/* <p>{info.rating}</p> */}


                </div>

              </SwiperSlide>)
            }
            {/* <SwiperSlide>2</SwiperSlide> */}


          </Swiper>

        </div>

      </div>



    </section>
  );
};

export default Testimonial;