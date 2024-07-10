const formatAmountWithCurrency = (value: number): string => {
  return new Intl.NumberFormat("cs", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(value);
};

export default formatAmountWithCurrency;
