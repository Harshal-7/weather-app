"use server";
import axios from "axios";

export const fetchWeatherData = async (location: any) => {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const host = process.env.NEXT_PUBLIC_HOST;

  const options = {
    method: "GET",
    url: `${base_url}/timezone.json`,
    params: { q: `${location}` },
    headers: {
      "x-rapidapi-key": `${api_key}`,
      "x-rapidapi-host": `${host}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
