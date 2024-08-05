"use client";
import FileIcon from "@/app/public/icon/file/FileIcon";
import React, { useRef } from "react";
import AdditionComponent from "../addition/AdditionComponent";
import styles from "./attachFile.module.css";

export default function AttachFile({ onClose }: any) {
  const fileInputRef = useRef<any>(null);
  const handleClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className={styles.file_div}>
      <div className={styles.file_span} onClick={handleClick}>
        <FileIcon />
        <span className="text-[#303030] font">ფაილის მიმაგრება</span>
      </div>
      <input type="file" ref={fileInputRef} style={{ display: "none" }} />
      <AdditionComponent onClose={onClose} />
    </div>
  );
}
