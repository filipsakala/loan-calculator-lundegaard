import formatNumber from "@/utils/formatNumber";
import Slider from "../Slider";
import styles from "./SliderInput.module.css";
import CurrencyInput from "../CurrencyInput";
import { InputHTMLAttributes } from "react";

type Props = {
  label: string;
  min: number;
  max: number;
  value: number;
  valueLabel: string;
  inputLabel?: string;
  sliderProps?: InputHTMLAttributes<HTMLInputElement>;
};

const SliderInput = ({
  min,
  max,
  value,
  label,
  valueLabel,
  inputLabel,
  sliderProps,
}: Props) => {
  return (
    <div className={styles.sliderInput}>
      <div className={styles.sliderWrapper}>
        <label className={styles.sliderLabel}>
          <div className={styles.label}>{label}</div>
          <Slider
            {...sliderProps}
            value={value}
            min={min}
            max={max}
            style={{ width: "100%" }}
          />
          <div className={styles.valueLabels}>
            <div className={styles.minValue}>
              {formatNumber(min)} {valueLabel}
            </div>
            <div className={styles.maxValue}>
              {formatNumber(max)} {valueLabel}
            </div>
          </div>
        </label>
      </div>
      <CurrencyInput
        valueLabel={valueLabel}
        inputLabel={inputLabel}
        inputProps={{
          value,
          size: String(max).length,
          onChange: sliderProps?.onChange,
        }}
      />
    </div>
  );
};

export default SliderInput;
