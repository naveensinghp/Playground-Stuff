import React from "react";
import Modal from "../src/components/Modal";


export default function Filter() {
    const [isOpen, setIsOpen] = React.useState(false);
    return(
    <>
    <h1>DD</h1>
    <button
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Modal
      </button>
        <Modal
          title="Example Modal"
          isOpen={isOpen}
          handleDismiss={() => setIsOpen(false)}
         >
        Hello World
      </Modal>
    </>
    );
}