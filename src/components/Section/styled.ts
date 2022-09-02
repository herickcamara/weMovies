import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: spece-between;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .trash {
    cursor: pointer;
    width: 50px;
    flex: 0;
  }
  .areaImg {
    max-width: 83px;
    img {
      width: 100%;
    }
  }

  .infoItem {
    width: 213px;
    display: block;
    margin-left: 10px;
    div {
      margin: auto;
      display: block;
      width: 133px;
    }
  }

  .cont {
    width: 100px;
    input {
      max-width: 50px;
      border: 1px solid #999999;
      outline: none;
      border-radius: 10px;
      padding: 3px;
    }
    .min,
    .max {
      cursor: pointer;
    }
  }

  .subtotal {
    width: 50px;
    margin-left: auto;
  }
  .trash {
    margin-right: auto;
    margin-left: 50px;
  }
`;
