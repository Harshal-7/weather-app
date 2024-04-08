import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

export const MyCardData = (weatherData: any) => {
  const myData = weatherData.weatherData;
  let mySrc = myData ? myData.weather[0].icon : null;
  if (mySrc === "01d") {
    mySrc = "03d";
  } else if (mySrc === "01n") {
    mySrc = "03n";
  }

  return (
    <div>
      {myData ? (
        <div className="relative text-white font-bold">
          <div className="absolute top-2 p-2 w-full h-72 flex flex-col">
            <div className="text-3xl text-center flex flex-col justify-center items-center">
              <div>
                {myData ? myData.name : null},
                <span className="ml-1">
                  {myData ? myData.sys.country : null}
                </span>
              </div>
              <div>{myData ? myData.weather[0].description : null}</div>
              <img
                src={`https://openweathermap.org/img/wn/${mySrc}@2x.png`}
                alt=""
                className="w-[130px] "
              />
            </div>

            <div className="text-6xl text-center">
              {myData ? (myData.main.temp - 273).toFixed() : null}&#8451;
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
