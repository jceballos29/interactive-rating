/** @format */

import React, { useState } from 'react';
import './styles/Card.css';

import startIcon from '../../assets/images/icon-star.svg';
import thankYou from '../../assets/images/illustration-thank-you.svg';

const Card = () => {
	const [rating, setRating] = useState(0);
	const [thanks, setThanks] = useState(false);

	const handleRating = () => {
		if (rating !== 0) {
			setThanks(true);
		}
	};

	return (
		<div className='card'>
			{!thanks ? (
				<div className='card__question'>
					<div className='card__icon'>
						<img src={startIcon} alt='icon' />
					</div>
					<h2>How did we do?</h2>
					<p>
						Please let us know how we did with your support request.
						All feedback is appreciated to help us improve our
						offering!
					</p>
					<div className='card__rating'>
						{[1, 2, 3, 4, 5].map((item, index) => (
							<div key={index}>
								<div
									className={`card__rating__item ${
										rating === item ? 'selected' : ''
									}`}
									onClick={() => setRating(item)}>
									{item}
								</div>
							</div>
						))}
					</div>
					<button onClick={handleRating}>Submit</button>
				</div>
			) : (
				<div className='card__thank_you'>
					<figure className='card__image'>
						<img src={thankYou} alt='thank you' />
					</figure>
					<div className='card__info'>
						<p>You selected {rating} out of 5</p>
					</div>
					<h2>Thank you!</h2>
					<p>
						We appreciate you taking the time to give a rating. If you
						ever need more support, don’t hesitate to get in touch!
					</p>
				</div>
			)}
		</div>
	);
};

export default Card;
