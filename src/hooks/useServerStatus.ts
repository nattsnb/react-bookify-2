import { useEffect, useState } from "react";
import { api } from "../shared/api/venue-api";
import { useError } from "../contexts/errorContext";

export function useServerStatus() {
  const [isServerRunning, setIsServerRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsError } = useError();

  useEffect(() => {
    const checkServer = async () => {
      setIsLoading(true);
      try {
        const response = await api.getHead();
        setIsServerRunning(response.ok);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    checkServer();
  }, []);

  return { isServerRunning, isLoading };
}
