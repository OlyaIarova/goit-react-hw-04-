import Modal from 'react-modal';
import css from './ImageModal.module.css';
Modal.setAppElement('#root');

export default function ImageModal({
  //деструктуризація для доступу до властивостей об'єкта image.
  image: { urls: { regular }, alt_description,},
  onCloseModal,
  isOpen,
}) {
  const customStyles = {
    //Стилі для модального вікна:
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'hidden',
    },
  };

  return (
    <Modal
      className={css.Modal}
      overlayClassName={css.Overlay}
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
    >
      {/* зображення, яке закриває модальне вікно при кліку.*/}
      <img src={regular} alt={alt_description} onClick={onCloseModal} />
    </Modal>
  );
}


