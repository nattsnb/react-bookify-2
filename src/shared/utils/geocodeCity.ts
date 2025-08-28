export interface GeocodeResult {
  latitude: number;
  longitude: number;
}

export async function geocodeCity(
  cityName: string,
): Promise<GeocodeResult | null> {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cityName)}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Accept-Language": "en",
        "User-Agent": "name (example@example.com)",
      },
    });

    const data = await response.json();

    if (!data.length) return null;

    return {
      latitude: parseFloat(data[0].lat),
      longitude: parseFloat(data[0].lon),
    };
  } catch (error) {
    console.error("Error geocoding:", error);
    return null;
  }
}
