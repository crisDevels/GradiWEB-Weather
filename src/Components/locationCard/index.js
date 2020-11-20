import React from 'react';

import './styles.css';

class LocationCard extends React.Component {

	render() {
		return (
			<div className="location-card">
				<div className="location-card__weather">
					<img className="location-card__img" src={this.props.img} alt="icono weather" />
					<div className="location-card__description">
						<h2 className="location-card__celcius">{this.props.celcius}</h2>
						<div className="location-card__location">
							<h3 className="location-card__city">{this.props.city}</h3>
							<p className="location-card__country">{this.props.country}</p>
						</div>
					</div>
				</div>
				<div className="location-card__meta">
					<p>Humidity {this.props.humidity}%</p>
					{this.props.coordinates > 0 && 90 > this.props.coordinates && <p>Northwest</p>}
					{this.props.coordinates === 0 && this.props.coordinates === 360 && <p>West</p>}
					{this.props.coordinates > 90 && 180 > this.props.coordinates && <p>Northeast</p>}
					{this.props.coordinates === 90 && <p>North</p>}
					{this.props.coordinates > 180 && 270 > this.props.coordinates && <p>Southeast</p>}
					{this.props.coordinates === 180 && <p>East</p>}
					{this.props.coordinates > 270 && 360 > this.props.coordinates && <p>Southwest</p>}
					{this.props.coordinates === 270 && <p>South</p>}
					<p>{this.props.windSpeed}km/h</p>
				</div>
			</div>
		);
	}
}
export default LocationCard;
