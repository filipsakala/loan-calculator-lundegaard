import formatAmountWithCurrency from "@/utils/formatAmountWithCurrency";
import Slider from "../Slider";
import styles from "./SliderInput.module.css";

type Props = {
  label: string;
  min: number;
  max: number;
  value: number;
  valueLabel: string;
  inputLabel?: string;
};

const SliderInput = ({
  min,
  max,
  value,
  label,
  valueLabel,
  inputLabel,
}: Props) => {
  return (
    <div className={styles.sliderInput}>
      <div className={styles.sliderWrapper}>
        <label className={styles.sliderLabel}>
          <div>{label}</div>
          <Slider min={min} max={max} style={{ width: "100%" }} />
          <div className={styles.valueLabels}>
            <div className={styles.minValue}>
              {formatAmountWithCurrency(min)}
            </div>
            <div className={styles.maxValue}>
              {formatAmountWithCurrency(max)}
            </div>
          </div>
        </label>
      </div>
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel}>
          <input type="number" value={value}></input>
          {valueLabel}
          <div className={styles.inputLabel}>{inputLabel}</div>
        </label>
      </div>
    </div>
  );
};

export default SliderInput;
