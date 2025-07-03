import { useState, useEffect, useCallback } from "react";

export function useDateInput(range: [Date | null, Date | null]) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    setShrink(!!range[0] || !!range[1] || Boolean(anchorEl));
  }, [range, anchorEl]);

  const openPicker = useCallback((e: React.FocusEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const closePicker = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return { anchorEl, shrink, openPicker, closePicker };
}
