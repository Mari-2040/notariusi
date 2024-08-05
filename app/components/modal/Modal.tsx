"use client";
import AddDocumentTitile from "../addDocumentTitile/AddDocumentTitile";
import InputComponent from "../input/InputComponent";
import AttachFile from "../addAndAttachFile/attachfile/AttachFile";
import Textarea from "../input/Textarea";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose }: any) {
  return (
    // blari ar damaviwydes
    <div className="">
      {isOpen && (
        <div className={styles.modulComponent}>
          <div className="bg-white rounded-lg overflow-hidden w-[640px] ">
            <AddDocumentTitile onClose={onClose} />
            <div className={styles.form_div}>
              <InputComponent />
              <Textarea label="აღწერა" placeholder="ჩაწერეთ" />
            </div>
            <div>
              <AttachFile onClose={onClose} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
