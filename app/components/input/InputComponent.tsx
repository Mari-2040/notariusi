"use client";
import React, { useState } from "react";
import DatePickerComponent from "../datePicker/DatePickerComponent";
import Input from "./Input";
import styles from "./input.module.css";


export default function InputComponent() {
  const [text, setText] = useState("");

  return (
    <div className={styles.inputComponent_div}>
      <Input
        placeholder="ჩაწერეთ"
        type="text"
        change={(e) => setText(e.target.value)}
        label="დოკუმენტის გამცემი"
      />
      <Input type="text" placeholder="ჩაწერეთ" label="დოკუმენტის ნომერი" />
      <DatePickerComponent label="დოკუმენტის თარიღი" />
    </div>
  );
}
