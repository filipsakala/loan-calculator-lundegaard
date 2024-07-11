"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import formatNumber from "@/utils/formatNumber";
import styles from "./CalculatorResult.module.css";
import usePaymentAmount from "../hooks/usePaymentAmount";
import { useRecoilValue } from "recoil";
import {
  isErrorPaymentAtom,
  isLoadingPaymentAtom,
  paymentAtom,
} from "@/store/atoms";

const CalculatorResult = () => {
  usePaymentAmount();
  const payment = useRecoilValue(paymentAtom);
  const isLoading = useRecoilValue(isLoadingPaymentAtom);
  const isError = useRecoilValue(isErrorPaymentAtom);

  return (
    <>
      <div className={styles.monthlyPaymentWrapper}>
        <div className={styles.monthlyPaymentTitle}>Měsíčně zaplatíte</div>
        <div className={styles.monthlyPaymentAmount}>
          {isLoading && "počítám..."}
          {!isLoading && isError && "chyba :("}
          {!isLoading && !isError && payment
            ? formatNumber(payment, "currency")
            : ""}
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
