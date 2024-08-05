import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import styles from "./DatePiker.module.css";
import { ka } from "date-fns/locale";

interface InputComponentProps {
  placeholder?: string;
  label?: string;
}

export default function DatePickerComponent(props: InputComponentProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
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
        icon={
          <svg
            className="items-center top-[5px] left-[80%]"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none">
            <mask
              id="mask0_1_2686"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20">
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_2686)">
              <path
                d="M4.75645 17.5833C4.38131 17.5833 4.06423 17.4514 3.8052 17.1875C3.54617 16.9236 3.41666 16.609 3.41666 16.2435V5.75646C3.41666 5.39104 3.54617 5.07639 3.8052 4.8125C4.06423 4.54861 4.38131 4.41667 4.75645 4.41667H6.57686V2.87813C6.57686 2.7191 6.62964 2.58639 6.7352 2.48C6.84075 2.37375 6.97242 2.32063 7.1302 2.32063C7.28812 2.32063 7.42124 2.37375 7.52957 2.48C7.63805 2.58639 7.69228 2.7191 7.69228 2.87813V4.41667H12.3398V2.86229C12.3398 2.70854 12.3912 2.57979 12.4939 2.47604C12.5969 2.37243 12.7246 2.32063 12.8771 2.32063C13.0296 2.32063 13.1587 2.37243 13.2644 2.47604C13.3702 2.57979 13.4231 2.70854 13.4231 2.86229V4.41667H15.2435C15.6187 4.41667 15.9358 4.54861 16.1948 4.8125C16.4538 5.07639 16.5833 5.39104 16.5833 5.75646V16.2435C16.5833 16.609 16.4538 16.9236 16.1948 17.1875C15.9358 17.4514 15.6187 17.5833 15.2435 17.5833H4.75645ZM4.75645 16.5H15.2435C15.3077 16.5 15.3664 16.4733 15.4198 16.4198C15.4733 16.3665 15.5 16.3077 15.5 16.2435V9.25646H4.49999V16.2435C4.49999 16.3077 4.52673 16.3665 4.5802 16.4198C4.63353 16.4733 4.69228 16.5 4.75645 16.5ZM4.49999 8.17313H15.5V5.75646C15.5 5.69229 15.4733 5.63354 15.4198 5.58021C15.3664 5.52674 15.3077 5.5 15.2435 5.5H4.75645C4.69228 5.5 4.63353 5.52674 4.5802 5.58021C4.52673 5.63354 4.49999 5.69229 4.49999 5.75646V8.17313ZM10.0044 12.0642C9.8252 12.0642 9.67068 12.0007 9.54082 11.8738C9.4111 11.7469 9.34624 11.5939 9.34624 11.4146C9.34624 11.2354 9.40964 11.0809 9.53645 10.951C9.66339 10.8213 9.81645 10.7565 9.99562 10.7565C10.1748 10.7565 10.3293 10.8199 10.4592 10.9467C10.5889 11.0736 10.6537 11.2267 10.6537 11.4058C10.6537 11.5851 10.5903 11.7397 10.4635 11.8694C10.3366 11.9992 10.1835 12.0642 10.0044 12.0642ZM6.75436 12.0642C6.5752 12.0642 6.42068 12.0007 6.29082 11.8738C6.1611 11.7469 6.09624 11.5939 6.09624 11.4146C6.09624 11.2354 6.15964 11.0809 6.28645 10.951C6.41339 10.8213 6.56645 10.7565 6.74562 10.7565C6.92478 10.7565 7.0793 10.8199 7.20916 10.9467C7.33888 11.0736 7.40374 11.2267 7.40374 11.4058C7.40374 11.5851 7.34034 11.7397 7.21353 11.8694C7.08659 11.9992 6.93353 12.0642 6.75436 12.0642ZM13.2544 12.0642C13.0752 12.0642 12.9207 12.0007 12.7908 11.8738C12.6611 11.7469 12.5962 11.5939 12.5962 11.4146C12.5962 11.2354 12.6596 11.0809 12.7864 10.951C12.9134 10.8213 13.0664 10.7565 13.2456 10.7565C13.4248 10.7565 13.5793 10.8199 13.7092 10.9467C13.8389 11.0736 13.9037 11.2267 13.9037 11.4058C13.9037 11.5851 13.8403 11.7397 13.7135 11.8694C13.5866 11.9992 13.4335 12.0642 13.2544 12.0642ZM10.0044 15C9.8252 15 9.67068 14.9365 9.54082 14.8096C9.4111 14.6828 9.34624 14.5298 9.34624 14.3506C9.34624 14.1713 9.40964 14.0168 9.53645 13.8871C9.66339 13.7572 9.81645 13.6923 9.99562 13.6923C10.1748 13.6923 10.3293 13.7558 10.4592 13.8827C10.5889 14.0095 10.6537 14.1626 10.6537 14.3419C10.6537 14.521 10.5903 14.6755 10.4635 14.8052C10.3366 14.9351 10.1835 15 10.0044 15ZM6.75436 15C6.5752 15 6.42068 14.9365 6.29082 14.8096C6.1611 14.6828 6.09624 14.5298 6.09624 14.3506C6.09624 14.1713 6.15964 14.0168 6.28645 13.8871C6.41339 13.7572 6.56645 13.6923 6.74562 13.6923C6.92478 13.6923 7.0793 13.7558 7.20916 13.8827C7.33888 14.0095 7.40374 14.1626 7.40374 14.3419C7.40374 14.521 7.34034 14.6755 7.21353 14.8052C7.08659 14.9351 6.93353 15 6.75436 15ZM13.2544 15C13.0752 15 12.9207 14.9365 12.7908 14.8096C12.6611 14.6828 12.5962 14.5298 12.5962 14.3506C12.5962 14.1713 12.6596 14.0168 12.7864 13.8871C12.9134 13.7572 13.0664 13.6923 13.2456 13.6923C13.4248 13.6923 13.5793 13.7558 13.7092 13.8827C13.8389 14.0095 13.9037 14.1626 13.9037 14.3419C13.9037 14.521 13.8403 14.6755 13.7135 14.8052C13.5866 14.9351 13.4335 15 13.2544 15Z"
                fill="#4A4A4A"
              />
            </g>
          </svg>
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