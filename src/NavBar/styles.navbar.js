import styled from "styled-components";
import { Base } from "../styles.app";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.5);
  @supports (
      -webkit-backdrop-filter: blur(30px) saturate(200%) contrast(45%) brightness(140%)
    )
    or
    (backdrop-filter: blur(30px) saturate(200%) contrast(45%) brightness(140%)) {
    transition: all 0.5s ease-in-out;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: ${({ frosty }) =>
      frosty.frosty ? "#02121B80" : "#02121B"};
    backdrop-filter: blur(30px) saturate(200%) contrast(45%) brightness(140%);
    -webkit-backdrop-filter: blur(30px) saturate(200%) contrast(45%)
      brightness(140%);
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  max-width: 1600px;
`;

export const JoinUsLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
`;

export const JoinUs = styled.div`
  background-color: transparent;
  padding: 8px 32px;
  border-radius: 50px;
  border: 2px solid #fff;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: #fff;
    ${JoinUsLink} {
      color: #000;
    }
  }
`;

export const LogoContainer = styled(Base)``;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

export const Logo = styled.svg`
  width: 2rem;
  height: 2rem;
`;

export const LogoText = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  transform: translateY(2px);
  @media (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 0;
  }
`;
