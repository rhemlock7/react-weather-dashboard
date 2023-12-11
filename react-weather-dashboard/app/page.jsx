"use client"
import { useEffect, useState } from "react";
import WeatherDisplay from "@/components/weather.display";
import Form from "@/components/form.component";

async function getData() {
  // API Fetch
  const APIkey = process.env.weatherAPIKey;
  const URL = `http://api.openweathermap.org/geo/1.0/direct?q=philadelphia&appid=d706a8baa5538ab15ced6f4891dbff96`;

  console.log(APIkey)

  // Fetch API to get city input's Latitude and Longitude
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
      result.json().then(json => {
        console.log(json);
        let lat = json[0].lat
        let lon = json[0].lon
        console.log("Lat: " + lat)
        console.log("Lon: " + lon)
      })
    }
    fetchData();
  }, []);

}

export default async function Home() {

  return (
    <main>
      <h1 className="mb-10">Search for a city to view the weather 👇</h1>

      <Form />

      <WeatherDisplay />

    </main>
  )
}
