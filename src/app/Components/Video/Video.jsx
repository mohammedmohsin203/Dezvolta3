import React from "react";
import styles from './Video.module.scss'
import bg from '../../../../public/icon-map.svg'
import Image from "next/image";

const Video = () => {

  return (
      <div id={styles.video}>
        <iframe
          src="https://player.vimeo.com/video/830585507?h=0884345419&autoplay=1&loop=1&title=0&byline=0&muted=1"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          className={styles.iframe}
          
        >
        
        </iframe>
      </div>
  );
};

export default Video;
