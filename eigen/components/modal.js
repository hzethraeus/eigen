import React from "react";
import styles from "./StyleSheet/modal.module.scss";
const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <div className={styles.modal_title}> Modal Title</div>
        </div>
        <div className={styles.modal_body}>Modal Body</div>
        <div className={styles.modal_footer}>
          <button className={styles.modal_button} onClick={props.onClose}>
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
