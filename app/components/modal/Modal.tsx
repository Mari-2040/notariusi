import AddDocumentTitile from "../addDocumentTitile/AddDocumentTitile";
import InputComponent from "../input/InputComponent";
import AttachFile from "../addAndAttachFile/attachfile/AttachFile";
import Textarea from "../input/Textarea";
import styles from "./Modal.module.css";
import { useSnapshot } from "valtio";
import { store } from "../snap/snap";
import { handleInputDataFiller } from "@/app/exshen/action";

export default function Modal({ isOpen, onClose }: any) {
  const snap = useSnapshot(store);
  const handleTextareaChange = (value: string) => {
    const newState = { description: value };
    handleInputDataFiller(store, snap, newState);
  };

  return (
    <div className="">
      {isOpen && (
        <div className={styles.modulComponent}>
          <div className="bg-white rounded-lg overflow-hidden w-[640px] ">
            <AddDocumentTitile onClose={onClose} />
            <div className={styles.form_div}>
              <InputComponent />
              <Textarea
                change={(e) => handleTextareaChange(e.target.value)}
                label="აღწერა"
                placeholder="ჩაწერეთ"
              />
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
