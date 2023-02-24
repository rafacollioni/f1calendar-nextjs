import styled from 'styled-components';
import ImageCard from './ImageCard';
import bahrainPlaceholder from '../../public/bahrain-placeholder-img.jpg';

const NextRaceStyled = styled.section`
	h1 {
		text-align: center;
		color: white;
		margin: 1.5rem 0;
		letter-spacing: 3px;
	}
`;

export default function NextRace() {
	return (
		<NextRaceStyled>
			<h1>PRÓXIMA CORRIDA:</h1>
			<ImageCard />
		</NextRaceStyled>
	);
}
