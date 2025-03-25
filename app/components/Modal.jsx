const Modal = ({ children, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-n-6 rounded-lg shadow-lg w-96 max-w-full">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            X
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  