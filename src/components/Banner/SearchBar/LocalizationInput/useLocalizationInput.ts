import { useState, useEffect, useMemo } from "react";
import { useSearchDropdownData } from "../useSearchBarData";

const MAX_SUGGESTIONS = 10;

export function useLocalizationInput(localizationValue: string | undefined) {
  const [isLabelShrunk, setIsLabelShrunk] = useState(false);
  const { cityNames, loading } = useSearchDropdownData();
  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);

  useEffect(() => {
    setIsLabelShrunk(!!localizationValue);
  }, [localizationValue]);

  const suggestions = useMemo(() => {
    if (loading) return [];
    if (!localizationValue) {
      return [...cityNames].sort().slice(0, MAX_SUGGESTIONS);
    }
    const query = localizationValue.toLowerCase();
    return cityNames
      .filter((name) => name.toLowerCase().includes(query))
      .sort()
      .slice(0, MAX_SUGGESTIONS);
  }, [cityNames, localizationValue, loading]);

  useEffect(() => {
    setIsAutocompleteOpen(suggestions.length > 0);
    if (!localizationValue) {
      setIsAutocompleteOpen(false);
    }
  }, [suggestions]);

  return {
    isLabelShrunk,
    setIsLabelShrunk,
    suggestions,
    loading,
    isAutocompleteOpen,
    setIsAutocompleteOpen,
  };
}
