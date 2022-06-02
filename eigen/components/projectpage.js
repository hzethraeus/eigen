import React, { useState } from "react";
import styles from "./StyleSheet/projectpage.module.css";
import Image from "next/image";
import client from "../sanity/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import gitHubImage from "../public/wallpaper_code.jpeg";
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Projectpage({ projItem, index }) {
  const [flip, setFlip] = useState(false);
  function ghClickHandle(e) {
    if (typeof window !== "undefined") {
      // Client-side-only code
      var ghLink = projItem.ghLink;
      window.open(ghLink, "_blank");
      console.log(e);
      e.stopPropagation();
    }
  }
  function linkClickHandle(e) {
    if (typeof window !== "undefined") {
      // Client-side-only code
      var liveLink = projItem.link;
      window.open(liveLink, "_blank");
      console.log(e);
      e.stopPropagation();
    }
  }

  return (
    <div className={styles.projectPage} onClick={() => setFlip(!flip)}>
      <div className={`${styles.projectCard} ${flip ? `${styles.flip}` : ""}`}>
        <div className={styles.projectFront}>
          <div
            className={
              index % 2 != 0 ? `${styles.leftSide}` : `${styles.rightSide}`
            }
          >
            <div className={styles.projectTextSide}>
              <div className={styles.projectPageTitle}>{projItem.name}</div>
              <div className={styles.shortDesc}>{projItem.description}</div>
              <div className={styles.shortDesc}>
                <div className={styles.textDescriber}>Techstack: </div>
                {projItem.techstack}
              </div>
              <div className={styles.shortDesc}>
                <div className={styles.textDescriber}>Livelink: </div>
                <div className={styles.liveLink}>
                  <a onClick={linkClickHandle}>{projItem.link}</a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              index % 2 == 0 ? `${styles.leftSide}` : `${styles.rightSide}`
            }
          >
            <div className={styles.projectImage}>
              <Image
                src={urlFor(projItem.images[0]).url()}
                height={280}
                width={500}
                alt={projItem.name}
              />
            </div>
          </div>
        </div>
        <div className={styles.projectBack}>
          <div
            className={
              index % 2 == 0 ? `${styles.leftSide}` : `${styles.rightSide}`
            }
          >
            <div className={styles.projectPageTitle}>{projItem.name}</div>
            <div className={styles.shortDesc}>{projItem.longerDesc}</div>
          </div>
          <div
            className={
              index % 2 != 0 ? `${styles.leftSide}` : `${styles.rightSide}`
            }
          >
            <div className={styles.projectImage}>
              <Image
                src={gitHubImage}
                height={280}
                width={500}
                alt={projItem.name}
              />
              <div className={styles.gitHubButton} onClick={ghClickHandle}>
                <a>GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.clickableDiv}></div>
      </div>
    </div>
  );
}
