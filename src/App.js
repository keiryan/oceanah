import "./App.css";
import MainPage from "./pages/Main Page/mainpage";
import {
  Container,
  GlobalStyle,
  Footer,
  SocialMediaIconContainer,
  Facebook,
  LinkedIn,
  Instagram,
  Twitter,
} from "./styles.app.js";
import NavBar from "./NavBar/navbar.js";
import PageTwo from "./pages/Page Two/pagetwo.js";
import PageThree from "./pages/Page 3/pagethree.js";
import PageFour from "./pages/Page 4/pagefour.js";
import FinalPage from "./pages/Final Page/finalpage.js";

export default function App() {

  return (
    <Container>
      <GlobalStyle />
      <NavBar />
      <MainPage />
      <PageTwo id="pagetwo" />
      <PageThree />
      <PageFour />
      <FinalPage />
      <Footer>
        <SocialMediaIconContainer href="#">
          <Facebook />
        </SocialMediaIconContainer>

        <SocialMediaIconContainer href="#">
          <LinkedIn />
        </SocialMediaIconContainer>

        <SocialMediaIconContainer href="#">
          <Instagram />
        </SocialMediaIconContainer>

        <SocialMediaIconContainer href="#">
          <Twitter />
        </SocialMediaIconContainer>
      </Footer>
    </Container>
  );
}
