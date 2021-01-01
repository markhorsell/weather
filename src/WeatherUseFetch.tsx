import { useEffect, useState } from "react";
import useFetch from "use-http";
import WeatherPoint from "./components/WeatherPoint";
import dayjs from "dayjs";

const fetchString = `https://markweather.azurewebsites.net/api/HttpTrigger2?code=bEePfjWLznUduliGYYUHeDGbzXLtSyCbPjgVyIe/Zh0iTlITyjywJA==`;

export default function WeatherUseFetch() {
  const options = {}; // these options accept all native `fetch` options
  // the last argument below [] means it will fire onMount (GET by default)
  const { loading, error, data = [] } = useFetch(fetchString, options, []);
  const [days, setDays] = useState<any>([]);

  //console.log(data)
  useEffect(() => {
    console.log(data);
    if (data.list) {
      setDays(
        data.list.map((x: any) => {
          {
            //  console.log(dayjs(x.dt_txt).format("DD/MM/YYYY"));
          }
          return x;
        })
      );

      let testDays: any = [[]];
      const start = data.list[0].dt_txt;
      data.list.map((d: any, i: number) => {
        {
          if (
            i > 0 &&
            dayjs(d.dt_txt).format("DD/MM/YYYY").toString() !=
              dayjs(data.list[i - 1].dt_txt)
                .format("DD/MM/YYYY")
                .toString()
          ) {
            testDays.push([]);
          }
          testDays[testDays.length - 1].push(d);
        }
      });
      console.log(testDays);
      setDays(testDays);
    }
  }, [data]);
  return (
    <div>
      {error && "Error!"}
      {loading && "Loading..."}
      {days &&
        days.map((day: any) => {
          return (
            <div>
              {day.map((dp: any) => {
                return <div style={{margin:"10px" , display:"inline-block", width:"100px", border:"1px solid grey"}}>
                  <WeatherPoint key={dp.dt} dp={dp} />
                  </div>
              })}
            </div>
          );
        })}
    </div>
  );
}
