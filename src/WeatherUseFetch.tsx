


import { useEffect } from 'react';
import useFetch from 'use-http'

const fetchString=`https://markweather.azurewebsites.net/api/HttpTrigger2?code=bEePfjWLznUduliGYYUHeDGbzXLtSyCbPjgVyIe/Zh0iTlITyjywJA==`;


export default function WeatherUseFetch() {
  const options = {} // these options accept all native `fetch` options
  // the last argument below [] means it will fire onMount (GET by default)
  const { loading, error, data = [] } = useFetch(fetchString, options, [])

  //console.log(data)
  useEffect(()=>{
    console.log(data)
  },[data])
  return (
    <>
      {error && 'Error!'}
      {loading && 'Loading...'}
      {data && data.list && data.list.map((dp:any) =>{
      return <div key={dp.dt}>
        {dp.dt_txt}{" "}
        {dp.weather[0].main}
        {dp.weather[0].icon}
        <img src={`http://openweathermap.org/img/w/${dp.weather[0].icon}.png`}/>
        </div>
    })}
    </>
  )
}
 