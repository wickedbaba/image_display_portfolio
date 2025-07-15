import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  prompt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  src,
  prompt
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-20 bg-black/50 rounded-full p-2 backdrop-blur-sm"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Main image container */}
        <div className="relative bg-black rounded-lg overflow-hidden">
          <img
            src={src}
            alt="Selected image"
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          
          {/* Bottom gradient overlay for Info button visibility */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="relative group">
              <button className="text-white text-sm italic hover:text-gray-300 transition-colors relative z-10">
                Info
              </button>
              
              
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                <div className="bg-black/85 backdrop-blur-sm text-white text-sm p-6 rounded-xl max-w-sm w-80 shadow-2xl border border-gray-600/50">
                  <p className="leading-relaxed text-left whitespace-normal break-words">{prompt}</p>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-600/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;