import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import calculatorApi from "./calculatorApi";
const app = express();
const port = process.env.PORT || 3123;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,HEAD,POST",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/calculator", calculatorApi);

app.listen(port, () => {
  console.log(
    `Loan Calculator Lundegaard Server started at http://localhost:${port}`
  ); //eslint-disable-line no-console
});
