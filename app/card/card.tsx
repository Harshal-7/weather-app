"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { MyCardData } from "./mycarddata";
import Image from "next/image";
import { fetchWeatherData } from "@/utils/data";
import { Loader2 } from "lucide-react";

export const Card = () => {
  const [location, setLocation] = useState("");
  const [myData, setMyData] = useState(null);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const res = await fetchWeatherData(location);
    setMyData(res.location);
    console.log("RES : ", res);
    setLocation("");
    setLoading(false);
  };

  return (
    <div className="z-50">
      <div className="min-w-72 md:min-w-96 rounded-lg shadow bg-[#313131]/50 border-black">
        <div className="w-full h-fit">
          <MyCardData weatherData={myData} />
        </div>
        <div className="flex flex-col gap-y-1 justify-center items-center p-5 mt-2 px-8">
          <Input
            className=" bg-[#313131]/40 text-white border-[#535353]"
            placeholder="Enter city name"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
          {loading ? (
            <Button className="bg-[#0f0f0f]/70 text-[#fff] font-semibold tracking-wider hover:bg-[#0f0f0f] mt-4 rounded-xl px-8">
              <Loader2 className="w-5 h-5 animate-spin" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-[#0f0f0f]/60 text-[#fff] text-[16px] hover:bg-[#0f0f0f] mt-4 rounded-xl px-8 py-6"
            >
              Search
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
