import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 z-40 flex h-screen w-screen items-center justify-center backdrop-blur-md bg-gradient-to-tr from-orange-100/80 via-white/70 to-amber-200/70 transition-opacity duration-300" onClick={onClose}>
          <div className="relative z-50 min-h-[200px] min-w-[320px] bg-white p-6 rounded-2xl shadow-xl animate-fadeIn" onClick={e => e.stopPropagation()}>
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="self-end text-2xl" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;