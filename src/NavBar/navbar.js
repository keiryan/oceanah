import { useState } from "react";
import {
  Container,
  NavContainer,
  JoinUs,
  JoinUsLink,
  LogoContainer,
  LogoText,
  LogoLink,
  Logo,
} from "./styles.navbar.js";

export default function NavBar() {
  const [frosty, setFrosty] = useState({ frosty: false });
  let scrollPosition = 0;

  const toggleVisible = ({ target }) => {
    scrollPosition = target.documentElement.scrollTop;
    if (scrollPosition >= 300) {
      setFrosty({ frosty: true });
    } else {
      if (frosty) {
        setFrosty({ frosty: false });
      }
    }
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <Container frosty={frosty}>
      <NavContainer>
        <LogoContainer>
          <LogoLink href="#">
            <Logo
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M22.314 17c.215 1.257-.623 2.158-1.312 2.191v-3.191h1l-4-4-4 4h1v2.339c-2.108-1.262-3.308-3.569-3.308-6.062 0-2.464 1.246-5.464 4.279-4.473 2.052.67 3.947-.756 4.029-2.804.084-2.083-1.666-4-4.932-4-8.15 0-12.758 11.125-15.07 22h20.002c2.508 0 3.998-1.694 3.998-3.374 0-1.001-.531-1.996-1.686-2.626zm-5.703-13.766c2.406.531 1.594 3.349-.609 2.724-2.938-.833-6.193.297-8.953 4.292 1.593-6.012 6.488-7.694 9.562-7.016zm-6.468 6.219c-1.031 4.484.234 7.38 2.297 9.651-4.126-1.745-5.092-6.381-2.297-9.651zm6.859 6.547h2v2h-2v-2z" />
            </Logo>
            <LogoText>Oceanah</LogoText>
          </LogoLink>
        </LogoContainer>
        <JoinUs>
          <JoinUsLink href="#">Reserve</JoinUsLink>
        </JoinUs>
      </NavContainer>
    </Container>
  );
}
