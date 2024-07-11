import Image from "next/image";
import Button from "@/components/ui/Button";
import formatNumber from "@/utils/formatNumber";
import styles from "./CalculatorResult.module.css";

const CalculatorResult = () => {
  return (
    <>
      {" "}
      <div className={styles.monthlyPaymentWrapper}>
        <div className={styles.monthlyPaymentTitle}>Měsíčně zaplatíte</div>
        <div className={styles.monthlyPaymentAmount}>
          {formatNumber(1358, "currency")}
        </div>
      </div>
      <div className={styles.monthlyPaymentWrapper}>
        <Button>Pokračovat</Button>
        <div className={styles.calculationActionCall}>
          <Image
            className={styles.calculationActionCallIcon}
            src="https://api.iconify.design/material-symbols:call-outline-sharp.svg"
            alt="phone"
            width="15"
            height="15"
          />
          <span className={styles.calculationActionCallTitle}>
            nebo Vám zavoláme
          </span>
        </div>
      </div>
    </>
  );
};

export default CalculatorResult;
