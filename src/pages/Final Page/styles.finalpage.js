import styled from "styled-components";
import { Base, Section } from "../../styles.app";

export const LearnMore = styled(Section)`
  min-height: 85%;
  background-color: #0d1a27;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: max-content;
  }
`;

export const ActivityContainer = styled(Base)`
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  max-width: 400px;
  text-align: center;
`;

export const ActivityText = styled.div`
  color: #fff;
  margin-top: 30px;
`;

export const SVG = styled.svg`
  width: 4rem;
`;

export function Swimming() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="1.5"
      color="#fff"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.965-3 4.965-3s2.483 3 4.345 3M3 20c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.965-3 4.965-3s2.483 3 4.345 3M5 10.5L9 8 7.813 6.516a1.262 1.262 0 01.228-1.797v0a1.261 1.261 0 011.726.202L14 10m2.5-2a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      ></path>
    </SVG>
  );
}

export function House() {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
      <path d="M20 6.093l-3-3V1h3v5.093zm1 11.349A7.902 7.902 0 0024 18v2c-3.896 0-5.083-2-8.002-2-3.04 0-4.436 2-8.002 2C4.312 20 3.62 18 0 18v-2c1.275 0 2.217.184 3 .438V12H0L12 0l12 12h-3v5.442zM15.998 16c1.269 0 2.183.255 3.002.581V9.818l-7-6.99L5 9.74v7.543c.849.39 1.711.717 2.996.717.749 0 1.396-.124 2.004-.308V13h4v3.242A8.553 8.553 0 0115.998 16zm-8.002 6C4.812 22 4.229 20 0 20v2c3.62 0 4.312 2 7.996 2 3.566 0 4.962-2 8.002-2 2.919 0 4.106 2 8.002 2v-2c-3.649 0-4.438-2-8.002-2-3.581 0-4.977 2-8.002 2z"></path>
    </SVG>
  );
}

export function Bed() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="#fff"
    >
      <path
        fillRule="evenodd"
        d="M60 60V42.5c0-.664-.262-1.3-.734-1.766A2.473 2.473 0 0057.5 40h-55c-.664 0-1.3.262-1.766.734A2.473 2.473 0 000 42.5V60h2.5v-5h55v5zM12.5 37.5V35c0-1.379 1.121-2.5 2.5-2.5h10c1.379 0 2.5 1.121 2.5 2.5v2.5h5V35c0-1.379 1.121-2.5 2.5-2.5h10c1.379 0 2.5 1.121 2.5 2.5v2.5H55v-10c0-.664-.262-1.3-.734-1.766A2.473 2.473 0 0052.5 25h-45c-.664 0-1.3.262-1.766.734A2.473 2.473 0 005 27.5v10zM7.5 15c1.379 0 2.5 1.121 2.5 2.5S8.879 20 7.5 20A2.502 2.502 0 015 17.5C5 16.121 6.121 15 7.5 15zm35 0c1.379 0 2.5 1.121 2.5 2.5S43.879 20 42.5 20a2.502 2.502 0 01-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5zm10 0c1.379 0 2.5 1.121 2.5 2.5S53.879 20 52.5 20a2.502 2.502 0 01-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5zm-35 0c1.379 0 2.5 1.121 2.5 2.5S18.879 20 17.5 20a2.502 2.502 0 01-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5zM30 3.121C29.242 1.066 27.203 0 25.094 0c-2.93 0-6 2.05-6 6.367 0 3.696 2.781 8.617 10.906 13.633 8.125-5.016 10.906-9.938 10.906-13.633 0-4.3-3.086-6.367-6.02-6.367-2.1 0-4.124 1.063-4.886 3.121zm17.5 4.59a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-35-.211c1.379 0 2.5 1.121 2.5 2.5s-1.121 2.5-2.5 2.5A2.502 2.502 0 0110 10c0-1.379 1.121-2.5 2.5-2.5zm0 0"
      ></path>
    </SVG>
  );
}
