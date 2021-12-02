import React from 'react';

const Container = ({ children, center }) => {
	return (
		<div className="container mx-auto min-h-screen">
			{center ? (
				<div className={`flex flex-col align-middle h-screen justify-center`}>
					{children}
				</div>
			) : (
				<div>{children}</div>
			)}
		</div>
	);
};

export default Container;
