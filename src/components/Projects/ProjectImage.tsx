import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImageProps {
  images: string[];
  title: string;
  onImageClick: (image: string) => void;
}

const carouselButtonClasses =
  'absolute top-1/2 -translate-y-1/2 bg-slate-800/90 text-white p-2 rounded-full shadow-md hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500';

export const ProjectImage = ({ images, title, onImageClick }: ProjectImageProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handlePrevImage = () => {
    if (images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[currentImageIndex];

  return (
    <div className="relative overflow-hidden mb-4">
      <div className="relative">
        <img
          src={currentImage}
          alt={`${title} screenshot ${currentImageIndex + 1}`}
          className="w-full h-60 object-cover transition-transform duration-700 cursor-pointer group-hover:scale-105"
          onClick={() => onImageClick(currentImage)}
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrevImage}
              className={`${carouselButtonClasses} left-2`}
              aria-label={`Show previous image for ${title}`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              className={`${carouselButtonClasses} right-2`}
              aria-label={`Show next image for ${title}`}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
