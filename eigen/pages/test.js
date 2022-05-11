import styles from './test.module.css';
export default function Home() {
    return (< >
    <div className={styles.scene}>
        <div className={styles.box}>
          <div className={styles.box_face_front}>A</div>
          <div className={styles.box_face_back}>B</div>
          <div className={styles.box_face_right}>C</div>
          <div className={styles.box_face_left}>D</div>
        </div>
    </div>

    <div className={styles.sceneLow}>
        <div className={styles.boxLow}>
            <div className={styles.box_face_frontLow}>1</div>
            <div className={styles.box_face_backLow}>2</div>
            <div className={styles.box_face_rightLow}>4</div>
            <div className={styles.box_face_leftLow}>3</div>
        </div>
    
    </div>
    </>
    
    )
}
