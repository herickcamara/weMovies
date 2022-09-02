import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  height: 629.18px;

  .infor {
    width: 447px;

    margin: auto;
    padding-top: 62px;

    p {
      text-align: center;
      color: var(--bg-prime);
      font-size: 1.25rem;
    }

    .areaImg {
      height: 313.44px;
      display: flex;
      align-items: end;
      justify-content: center;
    }
  }
  .areaButton {
    display: flex;
    justify-content: center;

    button {
      margin-top: 30px;
    }
  }
`;
