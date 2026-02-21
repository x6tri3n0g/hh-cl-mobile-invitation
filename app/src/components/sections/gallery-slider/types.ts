export interface GalleryImage {
    src: string;
    alt: string;
}

export interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentImage: GalleryImage;
    currentIndex: number;
    totalImages: number;
    onPrev: () => void;
    onNext: () => void;
    galleryImages: readonly GalleryImage[];
}
