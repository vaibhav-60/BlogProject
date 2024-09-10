interface ModalProps {
    message: string;
    onClose: () => void;
}

export const Modal = ({ message, onClose }: ModalProps) => {
    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-lg font-semibold text-red-600 mb-4">Error</h2>
                <p className="mb-4">{message}</p>
                <button 
                    onClick={onClose} 
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};
