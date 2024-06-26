import css from './ImageCard.module.css';

export default function ImageCard({ image, onClick }) {
  return (
    <div>
      <img
        className={css.card}
        onClick={() => onClick(image)}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
