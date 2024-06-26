import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Loader from '../Loader/Loader.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from '../ImageModal/ImageModal.jsx';
import { fetchImg } from '../api.js';
import css from './App.module.css';


export default function App() {
  const [imgData, setImgData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(``);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currantImg, setCurrantImg] = useState(null);

  function openModal(imgOnClick) {
    //Відкриття модального вікна з вибраним зображенням
    setCurrantImg(imgOnClick);
    setIsOpen(true);
  }

  function closeModal() {
    //Закриття модального вікна
    setCurrantImg(null);
    setIsOpen(false);
  }

  const handleLoadMore = () => {
    //Збільшення номера сторінки для завантаження більше зображень
    setPage(page + 1);
  };

  const handleSearch = newSearchText => {
    //Оновлення пошукового запиту та скидання номера сторінки та даних зображень
    setQuery(newSearchText);
    setPage(1);
    setImgData([]);
  };

  useEffect(() => {
    //Використання useEffect для виконання пошуку зображень щоразу, коли змінюється query або page
    if (query === ``) {
      //Якщо query порожній, пошук не виконується.
      return;
    }
    async function findImg() {
      //Функція findImg виконує асинхронний запит на сервер для отримання зображень, оновлює стан зображень і обробляє помилки.
      try {
        setIsLoading(true);
        const data = await fetchImg(query, page);

        if (data.length === 0) {
         
          setIsError(true);
        } else {
          setImgData(prevImg => [...prevImg, ...data]);
          setIsError(false);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    findImg();
  }, [query, page]);
  return (
    <div className={css.appContainer}>
      <SearchBar onSearch={handleSearch}></SearchBar>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {imgData.length > 0 ? (
        <>
          <ImageGallery images={imgData} onOpenModal={openModal} />
          <LoadMoreBtn onClick={handleLoadMore} />
        </>
      ): (
        <p
          style={{
            padding: 100,
            textAlign: 'center',
            fontSize: 30,
          }}
        >
          Image gallery is empty... 📷🔎
        </p>
      )}
      {currantImg && (
        <ImageModal
          image={currantImg}
          isOpen={modalIsOpen}
          onCloseModal={closeModal}
        ></ImageModal>
      )}
    </div>
  );
}

