const formatAmountWithCurrency = (
  value: number,
  style: "currency" | "decimal" = "decimal"
): string => {
  return new Intl.NumberFormat("cs", {
    style,
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);
};

export default formatAmountWithCurrency;
