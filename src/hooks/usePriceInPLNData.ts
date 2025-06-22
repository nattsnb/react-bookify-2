import { useEffect, useState } from "react";
import { getCurrencyResults } from "../shared/api/getCurrencyResultsApi.ts";
import { useError } from "../contexts/errorContext.ts";

export function usePriceInPLNData(pricePerNightInEURCent: number) {
  const [priceInPLN, setPriceInPLN] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { setIsError } = useError();

  useEffect(() => {
    async function getCurrencyData() {
      setIsLoading(true);
      try {
        const currencyResponse = await getCurrencyResults();
        const plnRate = currencyResponse.rates.PLN;
        const calculatedPrice = (
          (pricePerNightInEURCent / 100) *
          plnRate
        ).toFixed(0);
        setPriceInPLN(calculatedPrice);
      } catch (error) {
        setIsError(true);
        console.error("Error while fetching currency data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getCurrencyData();
  }, [priceInPLN, setIsError]);

  return { priceInPLN, isLoading };
}
