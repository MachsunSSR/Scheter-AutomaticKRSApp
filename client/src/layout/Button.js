import React from 'react';

const Button = ({ type, title }) => {
	return (
		<button
			className="text-center rounded-md text-white bg-primary w-full py-2"
			type={type}
		>
			{title}
		</button>
	);
};

export default Button;
