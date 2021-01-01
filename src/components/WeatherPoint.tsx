
import dayjs from 'dayjs'
export default function WeatherPoint(data: any) {
  const {dp} =data;


  return (
    <div key={dp.dt}>
      {/*dp.dt_txt} {dp.weather[0].main*/}
      <div>
      {dayjs(dp.dt_txt).format('dddd').toString()} {dayjs(dp.dt_txt).format('DD/MM/YYYY').toString()}
      </div>
      <img src={`http://openweathermap.org/img/w/${dp.weather[0].icon}.png`} />
      <div>
      {dayjs(dp.dt_txt).format('HH mm').toString()}
      </div>
    </div>
  );
}
