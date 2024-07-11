import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const { amount, length, withInsurance } = req.query;

  if (!amount || !Number(amount) || Number(amount) <= 0) {
    res.status(400).json({ errorMessage: "Wrong input params: amount" });
    return;
  }

  if (!length || !Number(length) || Number(length) <= 0) {
    res.status(400).json({ errorMessage: "Wrong input params: length" });
    return;
  }

  if (withInsurance === undefined) {
    res.status(400).json({ errorMessage: "Wrong input params: withInsurance" });
    return;
  }

  try {
    res.status(200).json(0);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      errorMessage: "General server error while loading loan calculation",
    });
  }
});

export default router;
