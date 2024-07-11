import express from "express";
import {
  MAX_LOAN_AMOUNT,
  MAX_LOAN_LENGTH,
  MIN_LOAN_AMOUNT,
  MIN_LOAN_LENGTH,
} from "./consts";
const LoanCalc = require("loan-calc");

const router = express.Router();

router.get("/", async (req, res) => {
  const { amount, length, withInsurance } = req.query;

  if (
    !amount ||
    !Number(amount) ||
    Number(amount) < MIN_LOAN_AMOUNT ||
    Number(amount) > MAX_LOAN_AMOUNT
  ) {
    res.status(400).json({ errorMessage: "Wrong input params: amount" });
    return;
  }

  if (
    !length ||
    !Number(length) ||
    Number(length) < MIN_LOAN_LENGTH ||
    Number(length) > MAX_LOAN_LENGTH
  ) {
    res.status(400).json({ errorMessage: "Wrong input params: length" });
    return;
  }

  if (withInsurance === undefined) {
    res.status(400).json({ errorMessage: "Wrong input params: withInsurance" });
    return;
  }

  try {
    const paymentAmount = LoanCalc.paymentCalc({
      amount,
      rate: withInsurance === "true" ? 5 : 6.9,
      termMonths: length,
    });

    res.status(200).json(paymentAmount);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      errorMessage: "General server error while loading loan calculation",
    });
  }
});

export default router;
