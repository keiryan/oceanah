import styled from "styled-components";
import { Base, Section, Half } from "../../styles.app";

export const LearnMore = styled(Section)`
  background-color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PageTwoImage = styled(Half)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000;
  background-image: url("https://images.unsplash.com/photo-1601505804208-738d2d4b54b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format");
`;

export const PageTwoTextHalf = styled(Half)`
  color: #fff;
  background-color: #02121b;
  box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.5);
`;

export const PageTwoTextContainer = styled(Base)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

export const PageTwoTitle = styled.h2`
  font-size: 3rem;
  margin: 0;
  color: #dfc384;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const PageTwoText = styled.p`
  width: 80%;
  max-width: 800px;
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;
