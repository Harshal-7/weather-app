"use server";
import axios from "axios";

export const fetchWeatherData = async (location: any) => {
  const api_key = process.env.API_KEY;
  const base_url = process.env.BASE_URL;
  const host = process.env.HOST;

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
