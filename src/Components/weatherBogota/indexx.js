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

export const WeatherBogotaF = ({ data, main, weather })=> {
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
									<p className="title-bogota">{data.name}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fixed">
					<div className="container-icon-blue">
						<div>
							<img
								src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
								alt="icon weather"
								width="40px"
							/>
							<p className="title-weather">{weather.main}</p>
						</div>
					</div>
					<div className="container-icon-purple">
						<p className="title-temperatura">{main.temp}°c</p>
					</div>
				</div>
			</div>
		);
}
