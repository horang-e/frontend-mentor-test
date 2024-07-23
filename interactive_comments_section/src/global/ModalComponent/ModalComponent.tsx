import React from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  cancelContent?: string;
  additionalButton?: React.ReactNode;
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  cancelContent,
  additionalButton,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-11/12 md:max-w-md mx-auto p-7 flex flex-col gap-6">
        <div className=" flex justify-between items-center">
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <div>{children}</div>
        <div className="flex justify-end items-center w-100 gap-3">
          <button
            onClick={onClose}
            className="bg-grayish_blue hover:bg-red-700 px-3 py-2 rounded text-white mr-1 w-6/12 font-semibold"
          >
            {cancelContent || 'close'}
          </button>
          {additionalButton && additionalButton}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
