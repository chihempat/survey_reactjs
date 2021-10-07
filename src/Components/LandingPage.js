import React from 'react';

import { Link } from 'react-router-dom';

const LandingPage = (props) => {
	return (
		<div>
			<div>
				<Link to="/create">
					<button className="btn-action"> Create Survey</button>
				</Link>
			</div>
			<div>
				<Link to="/take">
				<button className="btn-action"> Take Survey</button>
				</Link>
			</div>
		</div>
	);
};

export default LandingPage;

