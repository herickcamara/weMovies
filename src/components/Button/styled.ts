import styled from "styled-components";

export const Button = styled.button`
  width: 180px;
  height: 40px;
  background: var(--bg-btn);
  border-radius: 4px;
  color: var(--color-btn);
  font-size: 0.7rem;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
