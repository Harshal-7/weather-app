"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { MyCardData } from "./mycarddata";
import Image from "next/image";
import { fetchWeatherData } from "@/utils/data";

export const Card = () => {
  const [location, setLocation] = useState("");
  const [myData, setMyData] = useState(null);

  const api_key = process.env.API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      if (location.length === 0) setLocation("Mumbai");
      const res = await fetchWeatherData(location);
      console.log(res);
    };

    // fetchData();
  }, []);

  const handleSubmit = async () => {
    const res = await fetchWeatherData(location);
    setMyData(res.location);
    console.log("RES : ", res);
    setLocation("");
  };

  return (
    <div className="z-50">
      <div className="min-w-72 md:min-w-96 rounded-lg shadow bg-[#313131]/50 border-black backdrop-blur-xl	">
        <div className="w-full h-fit">
          <MyCardData weatherData={myData} />
        </div>
        <div className="flex flex-col gap-y-1 justify-center items-center p-5 mt-2">
          <Input
            className=" bg-[#313131]/40 text-white border-[#535353]"
            placeholder="Enter city name"
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            className="bg-[#0f0f0f]/70 text-[#fff] font-semibold tracking-wider hover:bg-[#0f0f0f] mt-4 rounded-xl px-8"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
