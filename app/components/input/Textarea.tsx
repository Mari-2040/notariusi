"use client";
import React, { useState } from "react";
import styles from "./input.module.css";

interface TextAreaProps {
  placeholder?: string;
  value?: string;
  change?: (e: any) => void;
  label?: string;
}
export default function Textarea(props: TextAreaProps) {
  const [inputValue, setInputValue] = useState(props.value || "");
  const changeValue = (e: any) => {
    setInputValue(e.target.value);
    props.change && props.change(e);
  };

  return (
    <div className={styles.textArea_div}>
      <span className={styles.textArea_span}>{props.label}</span>
      <textarea
        className={styles.textarea}
        placeholder={props.placeholder}
        onChange={changeValue}
        value={inputValue}></textarea>
    </div>
  );
}
