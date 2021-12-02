import React from 'react';

const Card = ({ children }) => {
	return (
		<div className="flex justify-center">
			<div className="bg-white rounded-md mx-2 w-full md:w-539">
				<div className="flex flex-col justify-center">{children}</div>
			</div>
		</div>
	);
};

export default Card;
