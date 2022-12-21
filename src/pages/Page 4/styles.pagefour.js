import styled from "styled-components";
import { Base, Section, Half } from "../../styles.app";

export const LearnMore = styled(Section)`
  background-color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TopImage = styled(Half)`
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000;
  background-image: url("https://images.unsplash.com/photo-1615354310157-c78b1be66eed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format");
`;

export const BottomImage = styled(TopImage)`
  background-image: url("https://images.unsplash.com/photo-1506462313968-6a1f37574ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format");
`;

export const PageFourTextHalf = styled(Half)`
  color: #fff;
  background-color: #181d17;
  /* box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.5); */
`;

export const PageFourTextContainer = styled(Base)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

export const PageFourImageContainer = styled(Base)`
  flex-direction: column;
  justify-content: center;
  flex: 1;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const PageFourTitle = styled.h2`
  font-size: 3rem;
  margin: 0;
  color: #dfc384;
`;

export const PageFourText = styled.p`
  max-width: 800px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
