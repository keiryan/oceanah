import { useState } from "react";
import {
  EnsureLegibility,
  ScrollDownContainer,
  ScrollDownText,
  ScrollDown,
  ScrollDownButton,
  Title,
  LandingPage,
} from "./styles.mainpage";

const Scroller = () => {
  const [visible, setVisible] = useState({ visible: false });
  let scrollPosition = 0;
  function handleScroll(e) {
    scrollPosition = e.target.documentElement.scrollTop;
    if (scrollPosition >= 150) {
      setVisible({ visible: true });
    } else {
      if (visible) {
        setVisible({ visible: false });
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
  return (
    <ScrollDownContainer visible={visible}>
      <ScrollDownText>Scroll down to learn more</ScrollDownText>
      <ScrollDown href="#pagetwo">
        <ScrollDownButton />
      </ScrollDown>
    </ScrollDownContainer>
  );
};

export default function MainPage() {
  return (
    <LandingPage>
      <Title>Welcome to Oceanah</Title>
      <EnsureLegibility>
        <Scroller />
      </EnsureLegibility>
    </LandingPage>
  );
}
