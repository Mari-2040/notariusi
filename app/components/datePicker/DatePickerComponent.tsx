import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import styles from "./DatePiker.module.css";
import { ka } from "date-fns/locale";
import Calendaricon from "@/app/public/icon/calendar/Calendaricon";

interface InputComponentProps {
  placeholder?: string;
  label?: string;
  change: (date: Date | null) => void;
}

export default function DatePickerComponent(props: InputComponentProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    props.change(date);
  };
  const years = Array.from(
    { length: getYear(new Date()) - 1989 },
    (_, i) => 1990 + i
  );
  const months = [
    "იანვარი",
    "თებერვალი",
    "მარტი",
    "აპრილი",
    "მაისი",
    "ივინის",
    "ივლისი",
    "აგვისტო",
    "სექტემბერი",
    "ოქტომბერი",
    "ნოემბერი",
    "დეკემბერი",
  ];

  return (
    <div>
      <span className={styles.datePiker_span}>{props.label}</span>
      <DatePicker
        locale={ka}
        placeholderText={props.placeholder || "აირჩიეთ"}
        showIcon
        toggleCalendarOnIconClick
        icon={
          <div
            className=" cursor-pointer absolute items-center top-1 left-[81%]"
            onClick={(e: any) => e.stopPropagation()}>
            <Calendaricon />
          </div>
        }
        showPopperArrow={false}
        closeOnScroll={true}
        selected={selectedDate}
        onChange={handleDateChange}
        className={`react-datepicker__view-calendar-icon cursor-pointer rounded-[10px] outline-none w-[192px] h-[40px] px-[12px] py-[10px] font
           border-[0.66px] border-[#8A8A8A] text-[0.75em] bg-white ${
             !selectedDate ? "date-placeholder" : ""
           }`}
        renderCustomHeader={({ date, changeYear, changeMonth }) => (
          <div className={styles.datePiker_select}>
            <select
              className=" outline-none"
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(Number(value))}>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <select
              className=" outline-none"
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        )}
      />
    </div>
  );
}
