import styled from "styled-components";
import { Base, Section, Half } from "../../styles.app";

export const LearnMore = styled(Section)`
  background-color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PageThreeImage = styled(Half)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000;
  background-image: url("https://images.unsplash.com/photo-1580331522941-58d0812c6d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format");
  background-image: url("https://images.unsplash.com/photo-1520443240718-fce21901db79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format");

`;

export const PageThreeTextHalf = styled(Half)`
color: #fff;
  background-color: #081819;
  box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.5);
`;

export const PageThreeTextContainer = styled(Base)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

export const PageThreeTitle = styled.h2`
  font-size: 3rem;
  margin: 0;
  color: #DFC384;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const PageThreeText = styled.p`
  width: 80%;
  max-width: 800px;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;
