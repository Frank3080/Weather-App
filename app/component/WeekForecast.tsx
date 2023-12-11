interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
}

interface WeekForecastProps {
  data: {
    forecast: {
      forecastday: DayForecast[];
    };
  };
}

export default function WeekForecast({ data }: WeekForecastProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full">
      {data.forecast.forecastday.map((day, index) => (
        <div
          key={index}
          className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center"
        >
          <p>
            {new Date(day.date).toLocaleString("en-US", { weekday: "short" })}
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <div>
              <p>H {day.day.maxtemp_c.toFixed()}º</p>
              <p>L {day.day.mintemp_c.toFixed()}º</p>
            </div>
          </p>
        </div>
      ))}
    </div>
  );
}
