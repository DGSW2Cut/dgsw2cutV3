import styled from "styled-components";
import lufftBtn from "../../assets/result/luffyBtn.svg";
import kuromiBtn from "../../assets/result/kuromiBtn.svg";
import ryanBtn from "../../assets/result/ryanBtn.svg";

export const Result = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`;

export const PictureContainer = styled.div`
  width: 1134px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(2) {
    display: none;

    @media print {
      display: flex;
      page-break-before: always;
    }
  }
`;

export const Split = styled.div`
  height: 100%;
  width: 1px;
  background-color: black;
`;

export const Setting = styled.div`
  width: calc(100% - 1135px);
  height: 100%;

  @media print {
    display: none;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 30px;

  button {
    cursor: pointer;
  }

  h1 {
    margin: 0;
  }

  div[id="cnt"] {
    div {
      width: 531px;
      height: 114px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 25px;
      margin-top: 38px;

      button {
        width: 114px;
        height: 114px;
        /* background: #d9d9d9; */
        /* background-color: rgb(236, 236, 236); */
        border-radius: 15px;
        border: none;

        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        color: #000000;
      }
    }
  }

  div[id="back"] {
    margin-top: 47px;

    div {
      margin-top: 38px;
      width: 400px;
      height: 241px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;

      button {
        width: 114px;
        height: 114px;
        /* background: #d9d9d9; */
        border-radius: 15px;
        border: 1px solid black;

        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        color: #000000;
      }

      #body {
        position: absolute;
        visibility: hidden;
        margin-top: 200px;
        margin-left: 190px;
      }

      #color {
        width: 114px;
        height: 114px;
        /* background: #d9d9d9; */
        border-radius: 15px;
        border: 1px solid black;

        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        color: #000000;

        background: conic-gradient(
          from 180deg at 50% 50%,
          #ffffff 0deg,
          #db8686 37.5deg,
          #fa1802 106.88deg,
          #cfd212 165deg,
          #77cb43 217.5deg,
          #129821 273.75deg,
          #388899 303.75deg,
          #0d08fa 360deg
        );
      }

      button[id="black"] {
        background: black;
      }

      button[id="white"] {
        background: white;
      }

      button[id="luffy"] {
        background-image: url(${lufftBtn});
      }

      button[id="kuromi"] {
        background: url(${kuromiBtn});
      }

      button[id="ryan"] {
        background: url(${ryanBtn});
      }
    }

    .selected {
      border: 3px solid #f6cad6;
    }
  }

  .selected {
    background-color: #f6cad6;
  }
`;

export const Print = styled.button`
  width: 699px;
  height: 124px;

  margin-top: 135px;

  background: #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;

  font-weight: 700;
  font-size: 36px;
  color: #000000;
`;
