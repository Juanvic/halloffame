import styles from './InputText.module.css';

export default function InputText({ value, onChange }) {
  return (
    <div className={styles.form__group}>
      <input
        type="text"
        className={styles.form__input}
        id="name"
        placeholder="Select your team"
        value={value}
        onChange={onChange}
        required
      />
      <label htmlFor="name" className={styles.form__label}>
        Select your team
      </label>
    </div>
  );
}
