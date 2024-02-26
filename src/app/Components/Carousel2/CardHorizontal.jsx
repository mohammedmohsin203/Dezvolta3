import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Navigation, Pagination } from "swiper/modules";

import one from "../../../../public/NEXTEER-project-943x1024.jpg";
import two from "../../../../public/ARVOS-project-943x1024.jpg";
import three from "../../../../public/Eichoff-project-943x1024.jpg";
import four from "../../../../public/KLT-AUTOMOTIVE.jpg";
import five from "../../../../public/NCR-project-943x1024.jpg";
import six from "../../../../public/Cooper-Standard-project-943x1024.jpg";
import seven from "../../../../public/krishca4.jpg";
import eight from "../../../../public/Coldman.jpg";
import nine from "../../../../public/Deceunick.jpg";
import ten from "../../../../public/iron-mountain2.jpg";
import eleven from "../../../../public/TOPRUN-AUTO.jpg";
import twelve from "../../../../public/Acciona-_Wind.jpg";
import thirteen from "../../../../public/nirmiti.jpg";
import fourteen from "../../../../public/kohitech.jpg";
import fifteen from "../../../../public/DO-MY-HOME.jpg";
import sixteen from "../../../../public/HITACHI-1.jpg";
import seventeen from "../../../../public/Pegatron-project.jpg";
import Image from "next/image";

const CardHorizontal = () => {
  const data = [
    {
      name: `NEXTEER`,
      Image: one,
      review: `Nexteer is a global major into the production of high-quality steering and driveline systems. We have established a world-class manufacturing unit for them in 2018. Spread over 1,45,000 square feet, this is located at Mahindra World City 1 and was delivered in May 2018.`,
    },
    {
      name: `ARVOS OAK ENERGY`,
      Image: two,
      review: `Arvos Oak Energy produces high-efficiency biomass boilers and we have built a manufacturing facility that meets global standards for them spanning 80,000 sq. ft. This cutting-edge facility located at the world-class manufacturing hub, Mahindra World City 1 meets modern manufacturing infrastructure needs and was delivered in May 2017.`,
    },
    {
      name: `EICKHOFF WIND ENERGY`,
      Image: three,
      review: `Our collaboration with Eickhoff Wind Energy culminated in the establishment of an exceptional manufacturing facility spread over 248,855 square feet located at Wallajahbad. Equipped with the latest advancements in technology this facilitates Eickhoff Wind Energy in the production of top-tier components for wind turbines. This was delivered in May 2022.`,
    },
    {
      name: `KLT AUTOMOTIVE`,
      Image: four,
      review: `KLT Automotive produces high-quality automotive components and we built a modern world-class facility for them spanning 1,25,000 sq. ft. at Mappedu. This hi-tech facility features adequate space for production lines, storage, quality control, administrative areas and so on. It was delivered in September 2015.`,
    },
    {
      name: `NCR`,
      Image: five,
      review: `NCR brings out specialised products such as high-quality ATMs and self-service kiosks. We have built a world-class manufacturing facility that’s high on technology for them at industrial hub, Mahindra World City 1 that spans a massive 4,20,000 sq. ft. This was delivered in May 2017.`,
    },
    {
      name: `COOPER STANDARD`,
      Image: six,
      review: `Cooper Standard is renowned for its high-quality sealing and fluid transfer systems. We have built a s 1,15,000 sq. ft. manufacturing facility for them at Mappedu of global standards featuring the latest technology. This was handed over on May 2017.`,
    },
    {
      name: `KRISHICA SCRAPPING`,
      Image: seven,
      review: `Krishica Scrapping produces high-quality steel strapping and seals and we constructed a manufacturing facility for them following the dictates of global standards and includes an advanced automated line. Spread over 30,000 sq. ft., this is located at Mappedu and delivered on January 2019`,
    },
    {
      name: `COLDMAN`,
      Image: eight,
      review: `Coldman is known for logistic services in the field of Customized Cold Chain Solutions. We custom-built innovative cold storage solutions and proficient warehousing services in the context of temperature-controlled environments. Spread over 1,42,000 sq. ft., this was handed over on June 2018.`,
    },
    {
      name: `DECEUNICK`,
      Image: nine,
      review: `This is a leader in uPVC Windows and Doors. To cater to their extensive warehousing needs, we provided them a 35000 sq. ft. facility at Mappedu which was delivered on May 2017 and was built to meet global standards.`,
    },
    {
      name: `IRON MOUNTAIN`,
      Image: ten,
      review: `They provide data and record management and we have meticulously built a state-of-the-art warehousing facility at Mappedu for them adhering to international standards. Spread over a sprawling 45000 sq. ft. this was delivered to them on October 2017.`,
    },
    {
      name: `TOPRUN AUTO`,
      Image: eleven,
      review: `Toprun Auto manufactures high-quality automotive components and we have constructed an advanced and sophisticated manufacturing facility for them in the fast-developing region of Mappedu. This is spread across 1,56,000 sq. ft. and was handed over in October 2017.`,
    },
    {
      name: `ACCIONA WIND`,
      Image: twelve,
      review: `Acciona Wind manufactures superior quality wind turbines with a global market. We constructed this a world-class manufacturing facility at Mappedu for them. Spread over a whopping 2,40,000 sq. ft., this features the latest technology and equipment. This was delivered in July 2017.`,
    },
    {
      name: `NIRMITI PRECISION`,
      Image: thirteen,
      review: `Nirmiti Precision is a reputed manufacturer of high-quality precision components. With great attention to detail, we developed a hi-tech 65,000 sq. ft. manufacturing facility at Mappedu to suit their requirements. This was handed over to them on November 2016`,
    },
    {
      name: `KOHITECH`,
      Image: fourteen,
      review: `Kohitech is renowned in the realm of manufacturing high-quality precision molds. We constructed an advanced manufacturing facility spanning 80,000 square feet in Mappedu to align with their specific needs. The facility was successfully delivered to them in May 2016.`,
    },
    {
      name: `DO MY HOME`,
      Image: fifteen,
      review: `Do My Home is known for its innovative and high-quality interior solutions. We have crafted for them a beautifully designed manufacturing unit of world-class standards spanning 14.500 sq. ft at Mappedu. This was handed over on February 2016.`,
    },
    {
      name: `HITACHI ABB`,
      Image: sixteen,
      review: `HITACHI ABB is the Indian arm of Hitachi Energy, a global leader in power technologies and we are proud to have completed a state-of-art manufacturing hub for them at Mahindra World City 2 to manufacture high-quality power grid equipment. Encompassing an expansive 26,000 square feet, this cutting-edge facility was successfully handed over in May 2021.`,
    },
    {
      name: `PEGATRON`,
      Image: seventeen,
      review: `Pegatron is known for its top-notch electronic products and we have helped them in establishing a cutting-edge manufacturing facility encompassing an expansive area of 4,23,595 square feet. Outfitted with state-of-the-art technology and functionalities, this is located at Mahindra World City 2 and was delivered in May 2021`,
    },
  ];

  return (
    <div className="flex items-center justify-center flex-col h-full w-full bg-[#ffff]  ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[FreeMode, Pagination, Navigation]}
        className="sm:max-w-[900px] max-w-[400px] lg:max-w-[900px] "
      >
        {data.map((d) => (
          <SwiperSlide>
            <div className="flex flex-row gap-4 bg-white sm:h-[400px] h-[700px] justify-between ">
              <div className="text-black flex flex-col justify-start w-[70%] cursor-grab ">
                <h6 className="bg-[#fcad15] text-black text-[0.5rem] w-[25%] m-5 ">
                  {" "}
                  Completed projects
                </h6>
                <h1 className=" text-black text-5xl text-left m-5 ">
                  {d.name}
                </h1>
                <p className="w-[80%] text-xs text-black mx-5 text-left leading-5 tracking-wider">
                  {d.review}
                </p>
              </div>
              <div className=" border-2 border-[#fcad15] ">
                <Image
                  src={d.Image}
                  className="w-[100%] h-full object-cover  transition duration-1000 hover:scale-[1.10]  "
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardHorizontal;
