import React, { Fragment } from 'react';
import styled from 'styled-components';
import DaysBogota from './Components/days3';
import WeatherBogota from './Components/weatherBogota';
import PlaceToVisit from './Components/placeToVisit';
import Locations from './Components/locations';

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
class App extends React.Component {
	render() {
		return (
			<Fragment>
				<WeatherBogota />
				<ForecastWrapper>
					<DaysBogota />
					<PlaceToVisit />
					<Locations />
				</ForecastWrapper>
			</Fragment>
		);
	}
}

export default App;
