import { HeaderContainer, Title } from './style';
import LushaLogo from '../../assets/lusha-logo.png';

function Header() {
  return (
    <HeaderContainer>
      <img width={35} src={LushaLogo} />
      <Title>Lusha Register Generator</Title>
    </HeaderContainer>
  );
}

export default Header;
