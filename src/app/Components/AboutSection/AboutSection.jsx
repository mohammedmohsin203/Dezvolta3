'use client'

import React,{useState} from "react";
import styles from "./AboutSection.module.scss";
import Img from "../../../../public/hidden-model-home.png"
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import ScrollTrigger from "react-scroll-trigger";


function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 1000,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

const AboutSection = () => {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(!false)} onExit={() => setCounterOn(false)}>
        <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Playfair+Display&display=swap" rel="stylesheet"></link>
    <div className={styles.container}>
      <div className={styles.left}>
        <section className={styles.sectionleft}>
            <div className={styles.wholeleft}>
          <h1 className={styles.hone}>
            THE FUTURE OF MANUFACTURING & WAREHOUSING IS HERE!
          </h1>
          <h6 className={styles.h6}>
            Casagrand Industrial & Warehousing offers the best practices in
            building modern manufacturing facilities and warehousing for all
            industrial segments across the globe. The innovative concept of
            FLEXIBLE-OFF-THE-RACK ™ solutions integrate the benefits of Ready To
            Move In spaces with Built To Suit allowing for a great deal of
            customisation and shoring up based on client requirements.
          </h6>
          <Image src={Img} layout="responsive" className={styles.img} />
          </div>
        </section>
      </div>
      <div className={styles.right}>
        <section className={styles.sectionryt}>
        <div className={styles.whole}>
          <div className={styles.whole_col}>
            <div className={styles.whole_row}>
              
                <div className={styles.line}>
                  <div className={styles.Deliver}>
                    <div className={styles.DeliverNo}>
                      <Number n={40} />M 
                    </div>
                    <span className={styles.DeliverText}>
                      Delivered space
                    </span>
                  </div>
                  <span className={styles.divider}/>
                  <div className={styles.Emp}>
                    <div className={styles.EmpNo}>
                      <Number n={8} />K
                    </div>
                    <span className={styles.EmpText}>
                      Employees
                    </span>
                  </div>
                  <span className={styles.divider}/>

                  <div className={styles.years}>
                    <div className={styles.yearsNo}>
                    &gt;<Number n={19} />
                    </div>
                    <span className={styles.yearsText}>
                      Years of Experience
                    </span>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </section>
        </div>
    </div>
    </ScrollTrigger>
  );
};

export default AboutSection;
