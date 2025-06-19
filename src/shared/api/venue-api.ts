const OPENCAGE_API_KEY = "938e7cda5d2c45f986a8c74c468eaaa7";
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