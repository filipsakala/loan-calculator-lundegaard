import LoanCalculator from "./components/LoanCalculator";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>MyBank - Dej nám svoje peníze 😿</h1>
      <LoanCalculator />
    </main>
  );
}
