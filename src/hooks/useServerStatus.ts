import { useEffect, useState } from "react";
import { venueApi } from "../shared/api/venueApi.ts";
import { useError } from "../contexts/errorContext";

export function useServerStatus() {
  const [isServerRunning, setIsServerRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsError } = useError();

  useEffect(() => {
    const checkServer = async () => {
      setIsLoading(true);
      try {
        const response = await venueApi.getHead();
        if (response instanceof Response) {
          setIsServerRunning(response.ok);
        } else {
          setIsServerRunning(false);
        }
      } catch (error) {
        setIsError(true);
        console.error("Error while getting server status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkServer();
  }, []);

  return { isServerRunning, isLoading };
}
