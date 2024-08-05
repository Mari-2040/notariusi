import CloseIcon from "@/app/public/icon/closeIcon/CloseIcon";
import React from "react";
import styles from "./AddDocumentTitile.module.css";

export default function AddDocumentTitile({ onClose }: any) {
  return (
    <div className={styles.document_div}>
      <h1 className="title">დოკუმენტის დამატება</h1>
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  );
}
