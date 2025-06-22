export function getCurrencyResults() {
  return fetch(`https://api.exchangerate-api.com/v4/latest/USD`, {})
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venues:", error));
}
