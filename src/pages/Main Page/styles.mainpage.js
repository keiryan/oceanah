import styled from "styled-components";
import { Base, Section } from "../../styles.app";

export const LandingPage = styled(Section)`
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: #000;
  background-image: url("https://images.unsplash.com/photo-1669908750572-112a3e982409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 0;
  }
`;

export const EnsureLegibility = styled(Base)`
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 70%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(0, 0, 0, 0)),
    color-stop(70%, rgba(0, 0, 0, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 70%
  );
  background: -o-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 70%
  );
  background: -ms-linear-gradient(
    top,
    rgba(0, 0, 255, 0) 0%,
    rgba(0, 0, 0, 1) 70%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 70%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );
`;

export const ScrollDownText = styled.div`
  color: #fff;
`;

export const ScrollDown = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 50px;
  margin-top: 20px;
  animation-name: bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  :hover {
    cursor: pointer;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-15px);
    }

    100% {
      transform: translateY(-0px);
    }
  }
`;

export const ScrollDownContainer = styled(Base)`
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 4px;
  font-size: 20px;
  font-weight: bold;
  opacity: ${({ visible }) => (visible.visible ? 0 : 1)};
  transform: translateY(${({ visible }) => (visible.visible ? 0 : -50)}px);
  transition: all 0.5s ease-in-out;
  @media (max-width: 768px) {
    bottom: 60px;
  }
`;

export function ScrollDownButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="#fff"
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M24 24H0V0h24v24z" opacity="0.87"></path>
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
    </svg>
  );
}
