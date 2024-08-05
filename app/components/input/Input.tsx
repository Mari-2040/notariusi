"use client";
import React, { useState } from "react";
import styles from "./input.module.css";

type inputType = "text" | "number" | "date" | "password";
interface InputComponentProps {
  type?: inputType;
  placeholder?: string;
  value?: string;
  change?: (e: any) => void;
  label?: string;
}
export default function Input(props: InputComponentProps) {
  const [inputValue, setInputValue] = useState(props.value || "");
  const changeValue = (e: any) => {
    setInputValue(e.target.value);
    props.change && props.change(e);
  };

  return (
    <div className="flex flex-col gap-1">
      <span className={styles.spanStyle}>{props.label}</span>
      <input
        className={styles.inputStyle}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeValue}
        value={inputValue}
      />
    </div>
  );
}
