import styled from "styled-components";

export const Container = styled.div<{ auto?: boolean }>`
  background-color: #fff;
  border-radius: 4px;
  height:${(props) => (props.auto ? "auto" : "629.18px")} ;
  padding:10px;
  .infor {
    width: 447px;
    border-bottom: 1px solid var(--bg-prime);
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
}
.areaButton {
    display: flex;
    justify-content: center;
    
  button {
    margin-top: 33.2px;
  }
`;

export const SubContainer = styled.div`
  .infoTable {
    height: 37px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    p {
      color: #999999;
    }
  }
  .menuTotal {
    margin-top: 10px;
    height: 64px;
    border-top: 1px solid #999999;
    display: flex;
    justify-content: space-between;
    align-items: end;

    .total {
      display: flex;
      justify-content: space-between;
      align-items: end;
      small {
        color: #999999;
        margin-right: 10px;
      }
    }
  }
`;
