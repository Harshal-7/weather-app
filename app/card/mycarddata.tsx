"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Image from "next/image";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
  useEffect,
  useState,
} from "react";

export const MyCardData = ({ weatherData }: any) => {
  const [data, setData] = useState<any>();
  const [icon, setIcon] = useState("");
  const [time, setTime] = useState(0);
  const [isDay, setIsDay] = useState(true);
  const [condition, setCondition] = useState("");

  useEffect(() => {
    const lat = weatherData ? weatherData.lat : 18.53;
    const lon = weatherData ? weatherData.lon : 73.87;

    console.log("lot : ", lat);
    console.log("lon : ", lon);

    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: {
          q: `${lat},${lon}`,
        },
        headers: {
          "x-rapidapi-key":
            "8fd9fec7d6msh253b64b0b38c2abp1ddf82jsn09344b5aaefc",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log("DATA : ", response.data);
        setData(response.data);

        setTime(
          Number(response.data.location.localtime.split(" ")[1].split(":")[0])
        );

        setCondition(response.data.current.condition.text);

        console.log(
          "TIME : ",
          Number(response.data.location.localtime.split(" ")[1].split(":")[0])
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [weatherData]);

  useEffect(() => {
    if (time > 6 && time < 18) {
      setIsDay(true);
    } else {
      setIsDay(false);
    }

    console.log("condition : ", condition);

    if (condition === "Mist") {
      if (isDay) {
        setIcon("/cloudy-day-3.svg");
      } else {
        setIcon("/cloudy-night-3.svg");
      }
    } else if (
      condition.includes("rain" || "Rain") &&
      condition.includes("thunder" || "Thunder")
    ) {
      setIcon("/thunder.svg");
    } else if (condition === "Sunny" || "sunny") {
      if (isDay) {
        setIcon("/cloudy-day-3.svg");
      } else {
        setIcon("/cloudy-night-3.svg");
      }
    } else {
      setIcon("/cloudy.svg");
    }
  }, [weatherData, condition, time]);

  return (
    <>
      {data ? (
        <div className="flex flex-col text-white font-bold py-4 max-w-[500px]">
          <div className="text-3xl text-center flex flex-col justify-center items-center gap-2.5 px-6">
            <div className="p-4 text-emerald-400">
              {data?.location?.name},
              <span className="ml-1">{data?.location?.country}</span>
            </div>
            <div className="text-2xl px-4">
              {data?.current?.condition?.text}
            </div>

            <img src={`/animated/${icon}`} alt="" className="w-32" />
          </div>

          <div className="text-6xl text-center tracking-wider">
            {data?.current?.temp_c}&#8451;
          </div>
        </div>
      ) : null}
    </>
  );
};
