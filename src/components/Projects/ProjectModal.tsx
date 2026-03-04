import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ProjectModalProps {
  modalImage: string;
  closeModal: () => void;
}

export const ProjectModal = ({ modalImage, closeModal }: ProjectModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const previousActiveElement = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      previousActiveElement?.focus();
    };
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 px-4"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-label="Project image preview"
    >
      <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeButtonRef}
          type="button"
          className="absolute top-2 right-2 text-white bg-slate-800 p-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          onClick={closeModal}
          aria-label="Close image preview"
        >
          <X size={24} />
        </button>
        <img
          src={modalImage}
          alt="Expanded project preview"
          className="w-full max-h-[90vh] object-contain rounded-md"
        />
      </div>
    </div>
  );
};
