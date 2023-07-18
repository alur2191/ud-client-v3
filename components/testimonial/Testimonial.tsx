import React from 'react';
import styles from './Testimonial.module.scss';

type TestimonialProps = {
	name: string;
	type: string;
	testimonial: string;
	image: string;
};

export const Testimonial = ({name, type, testimonial, image}:TestimonialProps) => {
	return (
		<div className={styles.container}>
			<p>
				{testimonial}
			</p>

			<div className={styles.author}>
				<div>
					<img src={image} alt={name} />
				</div>
				<div className={styles.authorInfo}>
					<p>{name}</p>
					<p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
				</div>
			</div>
		</div>
	);
};
