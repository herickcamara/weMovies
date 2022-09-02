import styled from "styled-components";

export const Container = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 27px;
  }

  .areaCar {
    max-width: 120px;
    display: flex;
    align-items: center;

    .labelCar {
      padding: 5px;
      p {
        text-align: end;
        font-weight: 600;
        color: #fff;
        font-size: 0.7rem;
      }
    }

    .imgCar {
      width: 29.32px;

      img {
        width: 100%;
      }
    }
  }
`;
