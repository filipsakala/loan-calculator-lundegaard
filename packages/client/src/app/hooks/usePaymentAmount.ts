import { RootState } from "@/store";
import {
  isErrorPaymentAtom,
  isLoadingPaymentAtom,
  paymentAtom,
} from "@/store/atoms";
import getCalculation from "@/store/queries/getCalculation";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSetRecoilState } from "recoil";

const usePaymentAmount = () => {
  const amount = useSelector((state: RootState) => state.calculator.amount);
  const length = useSelector((state: RootState) => state.calculator.length);
  const withInsurance = useSelector(
    (state: RootState) => state.calculator.withInsurance
  );

  const setPayment = useSetRecoilState(paymentAtom);
  const setIsLoading = useSetRecoilState(isLoadingPaymentAtom);
  const setIsError = useSetRecoilState(isErrorPaymentAtom);

  const debouncedAmount = useDebounce(amount, 500);
  const debouncedLength = useDebounce(length, 500);

  const { isLoading, isRefetching, isError, isRefetchError, data, refetch } =
    useQuery({
      queryKey: ["payment"],
      queryFn: () =>
        getCalculation(debouncedAmount, debouncedLength, withInsurance),
      retryDelay: 500,
    });

  useEffect(() => {
    refetch();
  }, [debouncedAmount, debouncedLength, withInsurance, refetch]);

  useEffect(() => {
    setPayment(data);
  }, [data, setPayment]);

  useEffect(() => {
    setIsLoading(isLoading || isRefetching);
  }, [isLoading, isRefetching, setIsLoading]);

  useEffect(() => {
    setIsError(isError || isRefetchError);
  }, [isError, isRefetchError, setIsError]);
};

export default usePaymentAmount;
