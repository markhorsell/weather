import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export default function Weather() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example(): any {
  //code is for azure id - IS NOT the weather data secret key

const fetchString=`https://markweather.azurewebsites.net/api/HttpTrigger2?code=bEePfjWLznUduliGYYUHeDGbzXLtSyCbPjgVyIe/Zh0iTlITyjywJA==`;
//const fetchString=`http://localhost:7071/api/HttpTrigger2`;

  const { isLoading, error, data } = useQuery("weatherData", () =>
    fetch(
      fetchString
    ).then((res) => 
  
      res.json()
    )
    
      
  );
  //https://markweather.azurewebsites.net/api/HttpTrigger2?code=bEePfjWLznUduliGYYUHeDGbzXLtSyCbPjgVyIe/Zh0iTlITyjywJA==

  if (isLoading) return "Loading...";

  if (error) {
    const e: any = error;
    return "An error has occurred x: " + e.message;
  }
  if (data) {
    console.log(data);
  }

  return (
    <div style={{ padding: "0px", border: "1px solid grey" }}>
 
    <div>
    {data.list.map((dp:any) =>{
      return <div>
        {dp.dt_txt}{" "}
        {dp.weather[0].main}
        {dp.weather[0].icon}
        <img src={`http://openweathermap.org/img/w/${dp.weather[0].icon}.png`}/>
        </div>
    })}
    </div>
  

      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
