import bahrainPlaceholder from '../../public/bahrain-placeholder-img.jpg';
import bahrainFlag from '../../assets/bahrain-flag.png';
import styled from 'styled-components';

export const StyledImageCard = styled.div`
	width: 100%;
	aspect-ratio: 7 / 5;
	background-image: url(${bahrainPlaceholder.src});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	margin: auto;
	display: flex;
	align-items: flex-end;
	position: relative;

	img {
		height: 25px;
		width: auto;
	}

	&:before {
		content: '';
		display: block;
		width: 100%;
		aspect-ratio: 7 / 5;
		background: rgb(34, 34, 50);
		background: linear-gradient(0deg, rgba(34, 34, 50, 1) 2%, rgba(0, 0, 0, 0) 30%);
		position: absolute;
		bottom: -1px;
		z-index: 0;
	}

	@media (min-width: 700px) {
		max-width: 70%;
	}
`;

const MinorContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-size: 20px;
	color: white;
	position: relative;

	div {
		display: flex;
		align-items: center;

		gap: 0.7rem;
	}

	h2 {
		font-size: 1.5rem;
		letter-spacing: 7px;
		font-weight: 800;
	}
	p {
		font-weight: 800;
		line-height: 1;
	}
`;

const Container = styled.div`
	width: inherit;
	margin: 0.7rem 1rem;
	position: relative;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: flex-end;
	h3 {
		font-size: 0.5rem;
		font-weight: 300;
		color: white;
		letter-spacing: 3px;
	}
`;

export default function ImageCard() {
	return (
		<StyledImageCard>
			<Container>
				<MinorContainer>
					<div>
						<img
							src={bahrainFlag.src}
							alt='Next Race Country Flag'
						/>
						<h2>BAHRAIN</h2>
					</div>
					<h3>BAHRAIN INTERNATION CIRCUIT</h3>
				</MinorContainer>

				<MinorContainer>
					<p>03-05</p>
					<p>MAR</p>
				</MinorContainer>
			</Container>
		</StyledImageCard>
	);
}
