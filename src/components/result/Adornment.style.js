import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;

  p {
    position: absolute;
    right: -150px;
    top: 270px;

    font-size: 100px;
    font-weight: bolder;
  }

  @media print {
    p {
      display: none;
    }
    div:nth-child(1) {
      margin-left: 40rem;
    }
    div {
      margin-top: -20rem;
    }
  }
`;

export const ChooseContainer = styled.div`
  border: 1px solid black;
`;

export const NumberContainer = styled.div``;

export const ImgContainer = styled.div`
  position: relative;
  width: 300px;
  height: 900px;

  &:nth-child(2) {
    transform: rotate(15deg) translateX(-30%);
    z-index: -1;
  }

  &:nth-child(3) {
    margin-left: -5rem;
    transform: rotate(-15deg) translateX(-30%);
    z-index: -1;
  }

  &:nth-child(4) {
    margin-left: -8rem;
    transform: rotate(10deg) translateX(-30%);
    z-index: -1;
  }
  @media print {
    &:nth-child(1) {
      transform: translateX(2%);
      z-index: -1;
    }
    &:nth-child(2) {
      transform: rotate(0deg) translateX(-4%);
      z-index: -1;
    }
  }

  #luffy {
    z-index: 2;
    margin-top: 132px;
    position: absolute;
  }

  #kuromi {
    z-index: 2;
    margin-top: 121px;
    position: absolute;
  }

  #ryan {
    z-index: 2;
    margin-top: 109px;
    position: absolute;
  }
`;

export const TemplateImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.1);

  @media print {
    /* transform: translate(-97%, 22%); */
    transform: translate(-97%, 21%);
  }
`;

export const TemplateCharImg = styled.img`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;

  @media print {
    /* transform: translate(-97%, 22%); */
    transform: translate(-97%, 21%);
  }
`;

export const PictureImg = styled.img`
  position: absolute;
  left: 8%;
  /* transform: translate(-40%, 0); */

  @media print {
    transform: translate(-166%, 125%);
    left: 50%;
    height: 160px;
    width: 240px;
    top: ${({ index }) => `${12 * (index + 1) + index * 160}px`};
  }

  top: ${({ index }) => `${12 * (index + 1) + index * 162}px`};
  width: 214px;
  height: 158px;
`;
