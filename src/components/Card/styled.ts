import styled from "styled-components";

export const Container = styled.div`
  width: 229.59px;
  height: 297.3px;
  background: #ffffff;
  border-radius: 4px;
  padding: 10px;

  .areaThamb {
    height: 188px;
    display: flex;
    justify-content: center;
  }

  .areaTitle {
    padding: 5px;

    text-align: center;
    span {
      font-size: 0.75rem;
      color: var(--color-span);
    }
  }
  .areaPrice {
    padding: 5px;

    font-size: 0.69rem;
  }
`;

export const AddMovie = styled.div`
  height: 40px;
  background: var(--bg-btn);
  color: var(--color-btn);
  border-radius: 4px;
  padding: 3px 5px;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  cursor: pointer;
  .areaImg {
    display: flex;
    align-items: center;
    width: 11.42px;
    height: 11.9px;
  }
  small {
    margin: 0px 6px;
  }
  span {
    font-weight: 700;
    margin-left: auto;
  }

  &:hover {
    opacity: 0.8;
  }
`;
