import React from "react";
import styles from "./StyleSheet/test.module.css";
import Image from "next/image";
import client from "../sanity/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { useState } from "react";
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Projectpage({ projItem, index }) {
  const [flip, setFlip] = useState(false);
  console.log(projItem);

  console.log(flip);

  return (
    <div className={styles.projectPage}>
      <div className={styles.project} onClick={() => setFlip(!flip)}>
        <div
          className={`${styles.projectCard} ${flip ? `${styles.flip}` : ""}`}
        >
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
                  <a>{projItem.link}</a>
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
          <div className={styles.projectBack}>Hej</div>
        </div>
      </div>
    </div>
  );
}
