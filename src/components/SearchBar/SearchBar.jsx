import { IoSearch } from 'react-icons/io5';
import { Toaster, toast } from 'react-hot-toast';

import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const handleSubmit = event => {
    const inputValue = event.target.elements.searchInput.value; // Отримання значення введення з поля input
    event.preventDefault(); // Запобігання перезавантаження сторінки при відправленні форми
    if (!inputValue.trim()) {
      // Перевірка, чи введене значення не є порожнім або тільки з пробілами
      toast.error('Please enter a search word.');
    }
    onSearch(inputValue.trim());
    event.target.reset(); // Скидання форми після відправлення
  };

  return (
    <header className={css.header}>
      <Toaster position="top-right" />
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchInput"
          autoComplete="off"
          placeholder="Search images..."
        />
        <button className={css.btn} type="submit">
          <IoSearch size={26} className={css.iconSearch} />
        </button>
      </form>
    </header>
  );
}
