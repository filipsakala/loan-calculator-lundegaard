import { Fragment } from "react";
import styles from "./RadioGroup.module.css";

type Props = {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  checked: string;
  onChange: (option: string) => void;
};

const RadioGroup = ({ name, label, options, checked, onChange }: Props) => {
  return (
    <div className={styles.radioGroup}>
      <div className={styles.label}>{label}</div>
      <div className={styles.buttonWrapper}>
        {options.map((option, index) => (
          <Fragment key={index}>
            <input
              className={styles.radio}
              type="radio"
              id={`name${index}`}
              name={name}
              value={option.value}
              checked={option.value === checked}
              onChange={() => onChange(option.value)}
            />
            <label className={styles.radioLabel} htmlFor={`name${index}`}>
              {option.label}
            </label>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
