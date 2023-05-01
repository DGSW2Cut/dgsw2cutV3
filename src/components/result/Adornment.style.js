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

  @media print {
    &:nth-child(2) {
      transform: rotate(0deg) translateX(0%);
      z-index: -1;
    }
  }

  #float {
    z-index: 2;
    margin-top: 132px;
    position: absolute;
  }
`;

export const TemplateImg = styled.img`
  position: relative;
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
  width: 225px;
  height: 162px;
`;
