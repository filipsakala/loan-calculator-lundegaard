import styles from "./LoanCalculator.module.css";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";

const LoanCalculator = () => {
  return (
    <div className={styles.calculator}>
      <div className={styles.inputsWrapper}>
        <h2 className={styles.title}>Express půjčku schválíme do 5 minut</h2>
        <CalculatorInput />
        <p className={styles.notes}>
          Úroková sazba od <b>6,90%</b>, RPSN od <b>7,11%</b>, pojištění{" "}
          <b>0 Kč/měsíčně</b>, poplatek za sjednání online <b>0 Kč</b>, celkem
          zaplatíte <b>130 406,44 Kč</b>
        </p>
        <p className={styles.notes}>
          Výše uvedené splátky je pouze orientační a od výsledné schválené výše
          splátky se může lišit.
        </p>
      </div>
      <div className={styles.calculationWrapper}>
        <CalculatorResult />
      </div>
    </div>
  );
};

export default LoanCalculator;
