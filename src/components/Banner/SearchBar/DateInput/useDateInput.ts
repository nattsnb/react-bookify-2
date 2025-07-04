import { useState } from "react";

export function useDateInput() {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return { isPickerOpen, setIsPickerOpen };
}
