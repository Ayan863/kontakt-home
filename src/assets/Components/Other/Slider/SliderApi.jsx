import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Card from "../card/Card";
import { useQuery } from "react-query";
import axios from "axios";
import { LinearProgress } from "@mui/joy";

const CarouselApi = (props) => {
  const { data, isLoading } = useQuery(
    ["products", props.url], 
    async () => {
      const { data } = await axios.get(props.url);
      console.log(data.map((item) => item.image));
      return data;
    }
  );

  if (isLoading) return <LinearProgress />;

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={5} 
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      className="w-[95%] "
      breakpoints={{
        640: {
          slidesPerView: 1, 
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2, 
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 5, 
          spaceBetween: 50,
        },
      }}
    >
      {data && data.map((item) => (
        <SwiperSlide key={item.id} className="flex justify-center relative z-50 ">
          <Card
            image={item.image}
            title={item.title}
            firstPrice={item.firstPrice}
            lastPrice={item.lastPrice}
            sale={item.sale}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselApi;
