"use client";
import { useState } from "react";
import Modal from "./components/modal/Modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-[1513px] h-[700px] bg-slate-600">
      <button onClick={toggleModal} className="openModal">
        open
      </button>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}
