import { createContext, useContext, useEffect, useState } from "react";
import { getCurrencyResults } from "../shared/api/getCurrencyResultsApi.ts";
import { useError } from "./errorContext.ts";

interface CurrencyContextType {
  currencyRate: number | null;
  isCurrencyLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within <CurrencyProvider>");
  }
  return context;
};

export function getEuroCentLimitForPLN(plnLimit: number, rate: number): number {
  return Math.round((plnLimit / rate) * 100);
}

export const CurrencyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currencyRate, setCurrencyRate] = useState<number | null>(null);
  const [isCurrencyLoading, setIsCurrencyLoading] = useState(true);
  const { setIsError } = useError();

  useEffect(() => {
    async function fetchCurrency() {
      try {
        const response = await getCurrencyResults();
        setCurrencyRate(response.rates.PLN);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching currency data:", error);
      } finally {
        setIsCurrencyLoading(false);
      }
    }
    fetchCurrency();
  }, []);

  return (
    <CurrencyContext.Provider value={{ currencyRate, isCurrencyLoading }}>
      {children}
    </CurrencyContext.Provider>
  );
};
