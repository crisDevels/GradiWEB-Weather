import React from 'react';

import locationImage from '../../assets/img/cityIllustration.svg';

import './styles.css';
class AddLocation extends React.Component {
	render() {
		return (
			<div className="add-container">
				<div className="add-container__button">addLocations</div>
				<img className="add-container__img" src={locationImage} alt="" />
			</div>
		);
	}
}

export default AddLocation;
