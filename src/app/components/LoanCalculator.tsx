import Image from "next/image";
import styles from "./LoanCalculator.module.css";
import Button from "@/components/ui/Button";
import SliderInput from "@/components/ui/SliderInput";
import formatNumber from "@/utils/formatNumber";

const LoanCalculator = () => {
  return (
    <div className={styles.calculator}>
      <div className={styles.inputsWrapper}>
        <h2 className={styles.title}>Express půjčku schválíme do 5 minut</h2>
        <SliderInput
          min={20000}
          max={800000}
          sliderProps={{ step: 10000 }}
          value={100000}
          label="Kolik si chci půjčit"
          valueLabel="Kč"
        />
        <SliderInput
          min={24}
          max={96}
          sliderProps={{ step: 6 }}
          value={96}
          label="Na jak dlouho"
          valueLabel="měsíců"
          inputLabel="8 let"
        />
      </div>
      <div className={styles.calculationWrapper}>
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
      </div>
    </div>
  );
};

export default LoanCalculator;
