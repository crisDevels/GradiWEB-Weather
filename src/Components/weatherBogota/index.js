import React from 'react';
import './styles.css';

import { ImLocation } from 'react-icons/im';

const IMAGE_bog =
	'https://bogota.gov.co/sites/default/files/styles/1050px/public/2020-03/clima-bogota.jpg';

const styleBackground = {
	backgroundImage: `url( https://images.pexels.com/photos/4604471/pexels-photo-4604471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 )`,
};

const colorIcon = {
	color: 'white',
};

class WeatherBogota extends React.Component {
	state = {
		isLoading: false,
		error: null,
		data: [],
		weather: [],
		main: [],
	};

	componentDidMount() {
		this.fetchBogota();
	}

	fetchBogota = async () => {
		this.setState({
			isLoading: true,
			error: null,
		});
		try {
			const response = await fetch(
				'http://api.openweathermap.org/data/2.5/weather?q=Bogota&units=metric&appid=230a2d842e9f8d8478b59881cc9e3568'
			);
			const data = await response.json();

			this.setState({
				data: data,
				main: data.main,
				weather: data.weather[0],
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
			<div>
				<div className="wrapper-app">
					<div className="flex-hero">
						<div
							style={styleBackground}
							className="container-background-bogota"
						>
							<div className="flex-data-bogota">
								<div className="flex-locations">
									<ImLocation style={colorIcon} size="45px" />
									<p className="title-bogota">{this.state.data.name}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fixed">
					<div className="container-icon-blue">
						<div>
							<img
								src={`http://openweathermap.org/img/wn/${this.state.weather.icon}@2x.png`}
								alt="icon weather"
								width="40px"
							/>
							<p className="title-weather">{this.state.weather.main}</p>
						</div>
					</div>
					<div className="container-icon-purple">
						<p className="title-temperatura">{this.state.main.temp}°c</p>
					</div>
				</div>
			</div>
		);
	}
}

export default WeatherBogota;
