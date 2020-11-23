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

export const App = ()=> {
	
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
