"use client";
import { useDispatch, useSelector } from "react-redux";
import SliderInput from "@/components/ui/SliderInput";
import { RootState } from "@/store";
import {
  updateAmount,
  updateLength,
} from "@/store/features/calculator/calculatorSlice";

const CalculatorInput = () => {
  const amount = useSelector((state: RootState) => state.calculator.amount);
  const length = useSelector((state: RootState) => state.calculator.length);
  const dispatch = useDispatch();
  const lengthInYears = Math.floor(length / 12);

  return (
    <>
      <SliderInput
        min={20000}
        max={800000}
        sliderProps={{
          step: 10000,
          onChange: (e) => dispatch(updateAmount(e.target.value)),
        }}
        value={amount}
        label="Kolik si chci půjčit"
        valueLabel="Kč"
      />
      <SliderInput
        min={24}
        max={96}
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
    </>
  );
};

export default CalculatorInput;
