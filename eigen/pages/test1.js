import React, { useState } from "react";
import styles from "./test1.module.css";
import Modal from "../components/modal";

export default function test1() {
  const [flip, setFlip] = useState(false);
  const [showModal, setShowModal] = useState(false);
  console.log(flip);

  return (
    <>
      <div
        onClick={() => setFlip(!flip)}
        className={`${styles.card} ${flip ? `${styles.flip}` : ""}`}
      >
        <div className={styles.front}>FRONT</div>
        <div className={styles.back}>BACK</div>
      </div>
      <div onClick={() => setShowModal(true)}>Open Modal</div>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
