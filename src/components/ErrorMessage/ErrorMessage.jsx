import style from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <h2 className={style.errorText}>
      Whoops, something went wrong! Reload page, please!
    </h2>
  );
}
