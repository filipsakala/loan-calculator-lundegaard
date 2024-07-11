import { atom } from "recoil";

export const paymentAtom = atom<number | undefined>({
  key: "Payment",
  default: 0,
});

export const isLoadingPaymentAtom = atom<boolean>({
  key: "PaymentIsLoading",
  default: false,
});

export const isErrorPaymentAtom = atom<boolean>({
  key: "PaymentIsError",
  default: false,
});
