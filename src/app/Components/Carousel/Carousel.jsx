"use client";
import React from "react";
import { useRef, useEffect } from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

import styles from "./Carousel.module.scss";

// register Swiper custom elements
import Image from "next/image";
import img1 from "../../../../public/ORAGADAM-1024x574.jpg";
import img2 from "../../../../public/ORAGADAM-1024x574.jpg";
import img3 from "../../../../public/ORAGADAM-1024x574.jpg";
register();

const Carousel = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <div className={styles.main}>
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Playfair+Display&display=swap"
        rel="stylesheet"
      ></link>
      <swiper-container
        slides-per-view="1"
        speed="5000"
        ref={swiperElRef}
        loop="true"

        css-mode="true"
        className={styles.container}
      >
        <swiper-slide>
          {" "}
          <Image src={img1} alt="" className={styles.img} quality={100} />
          <h1 className={styles.h1}>
            Flexible of the
            <span className={styles.span}> rack<sup className={styles.sup}>TM</sup><br/> for today's world</span>
          </h1>
        </swiper-slide>
        <swiper-slide>
          {" "}
          <Image src={img2} alt="" className={styles.img} />
          <h1 className={styles.h1}>
            Flexible of the 
            <span className={styles.span}> rack<sup className={styles.sup}>TM</sup><br/>  for today's world</span>
          </h1>
        </swiper-slide>
        <swiper-slide>
          {" "}
          <Image src={img3} alt="" className={styles.img} />
          <h1 className={styles.h1}>
            Flexible of the 
            <span className={styles.span}> rack<sup className={styles.sup}>TM</sup><br/>  for today's world</span>
          </h1>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Carousel;
