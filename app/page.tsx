"use client";
import React, { useState } from "react";

import Input from "./component/Input";

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  {
    /*http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_KEY}&q=${location}&days=7&aqi=yes&alerts=yes */
  }

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;

  {
    /* 
    specifies that 'e' is a keyboard event associated with an Html input element in a react app, used to define the type of event parameter in a react application */
  }
  async function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data); // Update data state
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData({}); // Update data state accordingly
      }
    }
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-600 to-blue-300 h-screen">
      <div className="bg-white/25 w-full flex flex-col h-fit">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 italic font-bold">
            Weather App
          </h1>
        </div>
        {data.current ? <div>{data.current.temp_f}</div> : null}
      </div>
    </div>
  );
}
