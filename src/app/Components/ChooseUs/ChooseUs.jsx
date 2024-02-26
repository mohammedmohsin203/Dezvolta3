"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import style from "./ChooseUs.module.scss";
import TabButton from "./TabButton";
import one from "../../../../public/choose-us1.jpg";
import two from "../../../../public/vision2.jpg";
import three from "../../../../public/mission1.jpg";
import onelogo from "../../../../public/dd3230c3-ec8d-494e-a4ac-9e3b2dbff6e3.svg";
import twologo from "../../../../public/21b39801-0468-4df8-90bf-a8d413edd29b.svg";
import threelogo from "../../../../public/813f1d2d-ec55-4eb3-b117-7b31b7d2b580.svg";

const TAB_DATA = [
  {
    title: "WHY CHOOSE US?",
    id: "skills",
    content: (
      <p>
        Casagrand Industrial & Warehousing offers a world-class infrastructure
        that’s future-forward, sustainable, and technology-integrated catering
        to diverse manufacturing and warehousing needs. We serve distinguished
        clients in diverse sectors such as Automotive, Engineering, E-Commerce
        and so on. Our best-in-class solutions are agile and scalable to meet
        the speed and precision expected. With the strength of the Casagrand -
        South India’s largest real estate developer behind us, we are confident
        of delivering excellence.
      </p>
    ),
    img: one,
  },
  {
    title: "OUR VISION",
    id: "Education",
    content: (
      <p>
        Excellence in industrial real estate is defined by the sustained
        delivery of infrastructure in accordance with globally accepted
        standards of excellence.
      </p>
    ),
    img: two,
  },
  {
    title: "OUR MISSION",
    id: "certifications",
    content: (
      <ul className="list-decimal pl-2">
        <li>20 million square feet in the next 5 years.</li>
        <li>
          To be an enterprise that prioritizes clients and delivers a seamless
          operational experience.
        </li>
      </ul>
    ),
    img: three,
  },
];

const ChooseUs = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white border-none w-full h-full">
      <div className="flex md:flex-row flex-col justify-start align-top">
        <div className="flex flex-row md:w-[50%] w-[100%] h-screen">
          <Image src={one} className="md:w-screen md:h-screen w-screen h-screen" />
        </div>
        <div className="md:w-[50%] w-[100%] md:m-auto m-0">
          <h1 className="text-5xl">Our Mission</h1>
          <p className="text-sm font-extralight"> 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            esse mollitia aliquid aperiam, perferendis pariatur quae sit
            deserunt ipsa autem, fuga sequi velit enim ducimus dicta voluptas
            saepe similique sed?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
