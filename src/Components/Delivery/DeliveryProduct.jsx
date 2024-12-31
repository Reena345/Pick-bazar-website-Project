import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";

// Import image from file
import DeliveryImg1 from "../../assits/offer-5.webp";
import DeliveryImg2 from "../../assits/offer-4.webp";
import DeliveryImg3 from "../../assits/offer-3.webp";
import DeliveryImg4 from "../../assits/offer-2.webp";
import DeliveryImg5 from "../../assits/offer-1.webp";
import { Grid2 } from "@mui/material";

const DeliveryProduct = () => {
  return (
    <div className="my-5">
      <Grid2 container spacing={2}>
        <Swiper
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          <Grid2 item xs={12} sm={12} md={3}>
            <SwiperSlide>
              <img src={DeliveryImg1} alt="Delivery 1" />
            </SwiperSlide>
          </Grid2>
          <Grid2 item xs={12} sm={12} md={3}>
            <SwiperSlide>
              <img src={DeliveryImg2} alt="Delivery 2" />
            </SwiperSlide>
          </Grid2>
          <Grid2 item xs={12} sm={12} md={3}>
            <SwiperSlide>
              <img src={DeliveryImg3} alt="Delivery 3" />
            </SwiperSlide>
          </Grid2>
          <Grid2 item xs={12} sm={12} md={3}>
            <SwiperSlide>
              <img src={DeliveryImg4} alt="Delivery 4" />
            </SwiperSlide>
          </Grid2>
          <Grid2 item xs={12} sm={12} md={3}>
            <SwiperSlide>
              <img src={DeliveryImg5} alt="Delivery 5" />
            </SwiperSlide>
          </Grid2>
        </Swiper>
      </Grid2>
    </div>
  );
};

export default DeliveryProduct;
