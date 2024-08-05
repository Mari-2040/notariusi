import React from "react";
import styles from "./add.module.css";

export default function AdditionComponent({ onClose }: any) {
  return (
    <button className={styles.add} onClick={onClose}>
      დამატება
    </button>
  );
}
