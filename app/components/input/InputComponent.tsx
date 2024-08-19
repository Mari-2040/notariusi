"use client";
import React, { useState } from "react";
import DatePickerComponent from "../datePicker/DatePickerComponent";
import Input from "./Input";
import styles from "./input.module.css";

export default function InputComponent() {
  const initialData = {
    documentIssuing: "",
    documentId: "",
    doumentDate: "",
  };

  const [data, setData] = useState(initialData);

  const handleInputDataFiller = (newState: any) => {
    let temp_state = {
      ...data,
      ...newState,
    };
    setData(temp_state);
  };

  console.table(data);

  return (
    <div className={styles.inputComponent_div}>
      <Input
        placeholder="ჩაწერეთ"
        type="text"
        change={(e: any) =>
          handleInputDataFiller({ documentIssuing: e?.target?.value })
        }
        label="დოკუმენტის გამცემი"
      />
      <Input
        change={(e: any) =>
          handleInputDataFiller({ documentId: e?.target?.value })
        }
        type="text"
        placeholder="ჩაწერეთ"
        label="დოკუმენტის ნომერი"
      />
      <DatePickerComponent
        change={(date: Date | null) =>
          handleInputDataFiller({ doumentDate: date?.toISOString() })
        }
        label="დოკუმენტის თარიღი"
      />
    </div>
  );
}
