const API_URL =
  "http://localhost:3000";

const getAllVenues = () => {
  return fetch(`${API_URL}/venue/`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error fetching venues:", error));
};

const getHead = () => {
  return fetch(`${API_URL}/venue`, {
    method: "HEAD",
  }).catch((error) => console.error("Server is not running:", error));
};

export const api = {
  getAllVenues,
  getHead,
};