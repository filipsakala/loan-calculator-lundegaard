"use client";
import { useDispatch, useSelector } from "react-redux";
import SliderInput from "@/components/ui/SliderInput";
import { RootState } from "@/store";
import {
  updateAmount,
  updateInsurance,
  updateLength,
} from "@/store/features/calculator/calculatorSlice";
import RadioGroup from "@/components/ui/RadioGroup";
import {
  MAX_LOAN_AMOUNT,
  MAX_LOAN_LENGTH,
  MIN_LOAN_AMOUNT,
  MIN_LOAN_LENGTH,
} from "../consts";

const CalculatorInput = () => {
  const amount = useSelector((state: RootState) => state.calculator.amount);
  const length = useSelector((state: RootState) => state.calculator.length);
  const withInsurance = useSelector(
    (state: RootState) => state.calculator.withInsurance
  );
  const dispatch = useDispatch();
  const lengthInYears = Math.floor(length / 12);

  return (
    <>
      <SliderInput
        min={MIN_LOAN_AMOUNT}
        max={MAX_LOAN_AMOUNT}
        sliderProps={{
          step: 10000,
          onChange: (e) => dispatch(updateAmount(e.target.value)),
        }}
        value={amount}
        label="Kolik si chci půjčit"
        valueLabel="Kč"
      />
      <SliderInput
        min={MIN_LOAN_LENGTH}
        max={MAX_LOAN_LENGTH}
        sliderProps={{
          step: 6,
          onChange: (e) => dispatch(updateLength(e.target.value)),
        }}
        value={length}
        label="Na jak dlouho"
        valueLabel="měsíců"
        inputLabel={`${lengthInYears}${
          lengthInYears < length / 12 ? "+" : ""
        } let`}
      />
      <RadioGroup
        name="loanInsurance"
        label="Pojištění proti neschopnosti půjčku splácet"
        options={[
          { value: "with", label: "S pojištěním" },
          { value: "without", label: "Bez pojištění" },
        ]}
        checked={withInsurance ? "with" : "without"}
        onChange={(option) => dispatch(updateInsurance(option === "with"))}
      />
    </>
  );
};

export default CalculatorInput;
