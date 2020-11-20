import React from 'react';

import './styles.css';

import { ImPlus } from 'react-icons/im';
import PlaceCard from '../placeCard';

class PlaceToVisit extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="description">
					<h1 className="description__title">
						Place to <span>Visit</span>
					</h1>
					<div className="description__reviews">
						<ImPlus color="#757575" />
						<p>Top Reviews</p>
						<img
							className="description__review"
							src="https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt=""
						/>
						<img
							className="description__review"
							src="https://images.pexels.com/photos/709790/pexels-photo-709790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt=""
						/>
						<img
							className="description__review"
							src="https://images.pexels.com/photos/4407688/pexels-photo-4407688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							alt=""
						/>
						<div className="description__more-reviews">
							<p>9+</p>
						</div>
					</div>
				</div>
				<PlaceCard
					name="Arab Street"
					city="Singapore"
					pos="1"
					img="https://images.squarespace-cdn.com/content/v1/5d168ea325d623000135ed35/1575568235959-3KRMXK4ZFN5U6GGZPL5O/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/image-asset.jpeg?format=2500w"
				/>
				<PlaceCard
					name="Art Science"
					city="Museum"
					pos="2"
					img="https://thenewageparents.com/wp-content/uploads/2019/09/City-in-a-Garden-artscience-museum.jpg"
				/>
				<PlaceCard
					name="Fountain"
					city="Of Wealth"
					pos="3"
					img="https://images.pexels.com/photos/700413/pexels-photo-700413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				/>
			</div>
		);
	}
}

export default PlaceToVisit;
