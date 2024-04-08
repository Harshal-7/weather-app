"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { MyCardData } from "./mycarddata";
import Image from "next/image";

export const Card = () => {
  const [location, setLocation] = useState("");
  const [myData, setMyData] = useState(null);

  const api_key = process.env.NEXT_PUBLIC_WEATHER_API;

  const base_url = "https://api.openweathermap.org/data/2.5/weather?";
  const geoLocation = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${api_key}`;

  const handleSubmit = async () => {
    try {
      const responseGeo = await axios.get(geoLocation);
      console.log(responseGeo.data[0]);
      const myLat = responseGeo.data[0].lat;
      const myLon = responseGeo.data[0].lon;

      const responseWeather = await axios.get(
        base_url + `lat=${myLat}&` + `lon=${myLon}&` + `appid=${api_key}`
      );
      const data = responseWeather.data;
      console.log("mydata1 : ", data);

      setMyData(data);
    } catch (error) {
      console.log("MyError", error);
    }

    setLocation("");
  };

  return (
    <div>
      <div className="min-w-72 md:min-w-96 rounded-lg shadow bg-[#313131] border-[#535353] bg-opacity-90	">
        <div className="relative w-full h-72 ">
          <MyCardData weatherData={myData} />
        </div>
        <div className="flex flex-col gap-y-1 justify-center items-center p-5 mt-2">
          <Input
            className=" bg-[#313131] text-white border-[#535353]"
            placeholder="Enter city name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            className="bg-[#1d1d1d] text-[#fff] font-bold hover:bg-[#0f0f0f] mt-2 rounded-xl"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
