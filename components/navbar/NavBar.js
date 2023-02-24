import styled from 'styled-components';
import LogoSvg from './Logo';
import Link from 'next/link';

const NavBarStyle = styled.nav`
	height: 5rem;
	background-color: var(--backgroundColorLevel2);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default function NavBar() {
	return (
		<NavBarStyle>
			<Link href={'/'}>
				<LogoSvg />
			</Link>
		</NavBarStyle>
	);
}
