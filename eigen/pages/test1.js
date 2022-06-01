import React, { useState } from "react";
import styles from "./test1.module.css";

export default function test1() {
  const [flip, setFlip] = useState(false);
  return (
    <div
      onClick={() => setFlip(!flip)}
      className={`${styles.card} ${flip ? `${styles.flip}` : ""}`}
    >
      <div className="front">FRONT</div>
      <div className="back">BACK</div>
      {flip ? "test1" : "test2"}
    </div>
  );
}
