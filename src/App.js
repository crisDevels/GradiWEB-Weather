import React from 'react';
import  useSWR from 'swr'
import styled from 'styled-components';
import DaysBogota from './Components/days3';
import WeatherBogotaF from './Components/weatherBogota';
import PlaceToVisit from './Components/placeToVisit';
import Locations from './Components/locations';
import WeatherBogota from './Components/weatherBogota';

import loadingGIF from './loading.gif'

const ForecastWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr repeat(2, 2fr);
	gap: 80px;
	max-width: 95vw;
	margin: 0 auto;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		max-width: 80vw;
	}
`;

const fetcher = (...args) => fetch(...args).then(res => res.json())

export const App = ()=> {

  const { data, error } = useSWR('http://api.openweathermap.org/data/2.5/weather?q=Bogota&units=metric&appid=230a2d842e9f8d8478b59881cc9e3568', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div className='flex-loading'><img src={loadingGIF} alt='loading gif' width='100px' height='100px'/></div>

	
	return (
		<div className='fade-content'>
			<WeatherBogota />
			<ForecastWrapper>
			<DaysBogota />
			<PlaceToVisit />
			<Locations />
			</ForecastWrapper>
		</div>
	);
}
