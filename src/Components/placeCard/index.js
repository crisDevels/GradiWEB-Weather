import React from 'react';

import { ImLocation } from 'react-icons/im';

import './styles.css';

class PlaceCard extends React.Component {
	render() {
		return (
			<div className={`place-card position${this.props.pos}`}>
				<img
					className="place-card__image"
					src={this.props.img}
					alt={this.props.name}
				/>
				<div className="place-card__description">
					<ImLocation />
					<div className="place-card__location">
						<p className="place-card__name">{this.props.name}</p>
						<p className="place-card__city">{this.props.city}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default PlaceCard;
