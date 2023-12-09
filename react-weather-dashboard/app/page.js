import WeatherDisplay from "@/components/weather.display";

export default function Home() {
  return (
    <main>
      <h1 className="mb-10">This Week's Forecast</h1>
      <h3 className="mb-5">Search for a city to view the weather 👇</h3>

      <form>
        <label for='city'>City:</label>
        <input name="city" type="text" placeholder="Philadelphia" />
      </form>

      <WeatherDisplay />
      
    </main>
  )
}
