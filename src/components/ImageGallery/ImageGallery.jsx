import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard.jsx';

export default function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className={css.list}>
      {images.map((image, index) => (
        <li className={css.listItem} key={index}>
          {/* Рендеринг компонента ImageCard для кожного зображення */}
          <ImageCard image={image} onClick={onOpenModal}></ImageCard>
        </li>
      ))}
    </ul>
  );
}



// import React from 'react';
// import css from './ImageGallery.module.css';
// import ImageCard from '../ImageCard/ImageCard';

// type Image = {
//   id: string;
//   url: string;
//   title: string;
//   // Додайте інші поля, які містить об'єкт зображення
// };

// type ImageGalleryProps = {
//   images: Image[];
//   onOpenModal: (image: Image) => void;
// };

// const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onOpenModal }) => {//Це оголошення функціонального компонента з типізацією пропсів.
//   return (
//     <ul className={css.list}>
//       {images.map((image) => (
//         <li className={css.listItem} key={image.id}>
//           <ImageCard image={image} onClick={() => onOpenModal(image)} /> //В обробнику подій передаємо функцію onOpenModal із передачею об'єкта зображення як параметра.
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ImageGallery;
