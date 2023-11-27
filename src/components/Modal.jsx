import { createPortal } from "react-dom";
import { useEffect } from "react";

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    // remove scroll when modal opens and add keyboard listener to pressing Esc
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      // remove blocking scroll and keyboard listener when modal is unmounting
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = (e) => {
    // check if click was on bg or children component
    if (e.currentTarget === e.target) closeModal();
  };

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="w-screen h-screen bg-slate-600 bg-opacity-70 fixed top-0 left-0"
    >
      {children}
    </div>,
    document.body
  );
};

export default Modal;
