"use client";
import React, { useState } from "react";
import DatePickerComponent from "../datePicker/DatePickerComponent";
import Input from "./Input";
import styles from "./input.module.css";
import { useSnapshot } from "valtio";
import { store } from "../snap/snap";
import { handleInputDataFiller } from "@/app/exshen/action";

export default function InputComponent() {
  const snap = useSnapshot(store);

  const handleTextareaChange = (value: string) => {
    const newState = { description: value };
    handleInputDataFiller(store, snap, newState);
  };

  return (
    <div className={styles.inputComponent_div}>
      <Input
        placeholder="ჩაწერეთ"
        type="text"
        change={(e) => handleTextareaChange(e.target.value)}
        label="დოკუმენტის გამცემი"
      />
      <Input
        change={(e) => handleTextareaChange(e.target.value)}
        type="text"
        placeholder="ჩაწერეთ"
        label="დოკუმენტის ნომერი"
      />
      <DatePickerComponent
        change={(e: any) => handleTextareaChange(e.target.value)}
        label="დოკუმენტის თარიღი"
      />
    </div>
  );
}
