import React from 'react';

import './styles.css';

class DaysBogota extends React.Component {
	state = {
		isLoading: false,
		error: null,
		dataDays: [],
		weatherDays: [],
		mainDays: [],
		listDays: [],
	};

	componentDidMount() {
		this.fetchDays();
	}

	fetchDays = async () => {
		this.setState({
			isLoading: true,
			error: null,
		});
		try {
			const res = await fetch(
				'http://api.openweathermap.org/data/2.5/forecast?q=bogota&units=metric&cnt=3&appid=230a2d842e9f8d8478b59881cc9e3568'
			);
			const data = await res.json();

			this.setState({
				dataDays: data,
				listDays: data.list,
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
			<div className="days-wrapper">
				<h2 className="title-days">
					<strong className="strong-days">3 Days</strong> Forecast
				</h2>
				<ul className="ul-days">
					{this.state.listDays.map((clima) => {
						return (
							<li key={clima.dt}>
								<div className="flex-day-details">
									<img
										src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`}
										alt="icon weather"
										width="50px"
									/>
									<div>
										<p className="p-weather-days">{clima.weather[0].main}</p>
									</div>
									<div className="max-min-temp">
										<p className="p-temp-days">
											{clima.main.temp_max}° / {clima.main.temp_min}°
										</p>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default DaysBogota;
