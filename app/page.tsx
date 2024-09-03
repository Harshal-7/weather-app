import Image from "next/image";
import { Card } from "./card/card";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <div className="text-4xl md:text-5xl font-bold text-white tracking-wide backdrop-blur-lg">
        Weather App
      </div>
      <Card />
    </div>
  );
}
