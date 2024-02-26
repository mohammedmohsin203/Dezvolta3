"use client";

import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.scss";
import Image from "next/image";
import Carousel from "./Components/Carousel/Carousel";
import Location from "./Components/Location/Location";
import Navbar from "./Components/Navbar/Navbar";
import AboutSection from "./Components/AboutSection/AboutSection";
import Brands from "./Components/Brands/Brands";
import Video from "./Components/Video/Video";
import CardHorizontal from "./Components/Carousel2/CardHorizontal";
import ChooseUs from "./Components/ChooseUs/ChooseUs";
import CardHorizontal2 from "./Components/Carousel3/CardHorizontal2";
import Footer from "./Components/Footer/Footer";
gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const container = useRef();
  useGSAP((context) => {
    let mm = gsap.matchMedia();
    mm.add(() => {
      gsap.utils.toArray(".panel").forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
        });
      });
      
    });
  });
  return (
    <main id={styles.body}>
      <Navbar className="Navbar"/>
      <div id="page">
        <main className={styles.main}>
          <section class={styles.panel} id={styles.blue}>
            <div>
              <Carousel/>
            </div>
          </section>
          <section className={styles.panel} id={styles.white} class="panel"  >
            <AboutSection/>
          </section>
          <section className={styles.panel} id={styles.white} class="panel"  >
            <Brands/>
          </section>
          <section className={styles.panel} id={styles.white} class="panel"  >
            <div>
            <Location/>
            </div>
          </section>
          <section className={styles.panel} id={styles.white} class="panel"  >
            <Video/>
          </section>
          <section className={styles.panel} id={styles.red} class="panel"  >
            <CardHorizontal/>
          </section>
          <section className={styles.panel} id={styles.red} class="panel"  >
            <ChooseUs/>
          </section>
          <section className={styles.panel} id={styles.white} class="panel"  >
            <CardHorizontal2/>
            <br/>
            <Footer/>
          </section>


        </main>
      </div>
    </main>
  );
}
