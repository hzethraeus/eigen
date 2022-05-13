import React from 'react';
import styles from './StyleSheet/projectpage.module.css';
import Image from 'next/image';
import client from '../sanity/sanityClient';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);
function urlFor(source) {
        return builder.image(source)
      }

export default function Projectpage({projItem, index}) {
    
    console.log(urlFor(projItem.images[0]).url())

    return (
        <div className={styles.projectPage}>
            <div className={index%2==0 ? `${styles.leftSide}` :`${styles.rightSide}`}>
                <div className={styles.projectPageTitle}>
                    {projItem.name}
                    </div>
                
            </div>
            <div className={index%2!=0 ? `${styles.leftSide}` :`${styles.rightSide}`}>
          
                <Image 
                    src={urlFor(projItem.images[0]).url()} 
                    height={280}
                    width={500}
                    alt={projItem.name}
                    />
            </div>
    </div>
    )
};