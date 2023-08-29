'use client';

import React from 'react';
import Countdown from 'react-countdown';

const endingDate = new Date('2023-09-01');

const CountDown = () => {
	return (
		<div>
			<Countdown
				className="text-yellow-300 text-5xl font-bold "
				date={endingDate}
			/>
		</div>
	);
};

export default CountDown;
