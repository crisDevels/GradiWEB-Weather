import React from 'react';

import LocationCard from '../locationCard';
import AddLocation from '../addLocation';
import './styles.css';

class Locations extends React.Component {
	state = {
		isLoading: false,
		error: null,
		dataLyon: [],
		weatherLyon: [],
		mainLyon: [],
		windLyon: [],
		dataMedellin: [],
		weatherMedellin: [],
		mainMedellin: [],
		windMedellin: [],
	};

	componentDidMount() {
		this.fetchParis();
		this.fetchMedellin();
	}

	fetchParis = async () => {
		this.setState({
			isLoading: true,
			error: null,
		});
		try {
			const response = await fetch(
				'http://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=230a2d842e9f8d8478b59881cc9e3568'
			);
			const dataPa = await response.json();

			this.setState({
				dataLyon: dataPa,
				mainLyon: dataPa.main,
				weatherLyon: dataPa.weather[0],
				windLyon: dataPa.wind,
				isLoading: false,
			});
		} catch (error) {
			this.setState({
				error: error,
				isLoading: false,
			});
		}
	};

	fetchMedellin = async () => {
		this.setState({
			isLoading: true,
			error: null,
		});
		try {
			const response = await fetch(
				'http://api.openweathermap.org/data/2.5/weather?q=Medellin&units=metric&appid=230a2d842e9f8d8478b59881cc9e3568'
			);
			const data = await response.json();

			this.setState({
				dataMedellin: data,
				mainMedellin: data.main,
				weatherMedellin: data.weather[0],
				windMedellin: data.wind,
				isLoading: false,
			});
		} catch (error) {
			this.setState({
				error: error,
				isLoading: false,
			});
		}
	};

	render() {
		return (
			<div className="location-wrapper">
				<div className="location-container">
					<LocationCard
						img={`http://openweathermap.org/img/wn/${this.state.weatherLyon.icon}@2x.png`}
						celcius={this.state.mainLyon.temp}
						city={this.state.dataLyon.name}
						country="Francia"
						humidity={this.state.mainLyon.humidity}
						coordinates={this.state.windLyon.deg}
						windSpeed={this.state.windLyon.speed}
					/>
					<LocationCard
						img={`http://openweathermap.org/img/wn/${this.state.weatherMedellin.icon}@2x.png`}
						celcius={this.state.mainMedellin.temp}
						city={this.state.dataMedellin.name}
						country="Colombia"
						humidity={this.state.mainMedellin.humidity}
						coordinates={this.state.windMedellin.deg}
						windSpeed={this.state.windMedellin.speed}
					/>
					<AddLocation />
				</div>
			</div>
		);
	}
}

export default Locations;
