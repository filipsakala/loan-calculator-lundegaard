import styles from "./LoanCalculator.module.css";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";

const LoanCalculator = () => {
  return (
    <div className={styles.calculator}>
      <div className={styles.inputsWrapper}>
        <h2 className={styles.title}>Express půjčku schválíme do 5 minut</h2>
        <CalculatorInput />
      </div>
      <div className={styles.calculationWrapper}>
        <CalculatorResult />
      </div>
    </div>
  );
};

export default LoanCalculator;
