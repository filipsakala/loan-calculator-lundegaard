import { InputHTMLAttributes } from "react";
import styles from "./CurrencyInput.module.css";

type Props = {
  valueLabel: string;
  inputLabel?: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
};

const CurrencyInput = ({ inputProps, valueLabel, inputLabel }: Props) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.valueLabel}>
        <input {...inputProps} type="number" className={styles.input} />{" "}
        {valueLabel}
        <div className={styles.inputLabel}>{inputLabel}&nbsp;</div>
      </label>
    </div>
  );
};

export default CurrencyInput;
