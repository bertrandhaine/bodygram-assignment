import styled from "styled-components";

export const LightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 300px;
`;

export const Light = styled.div<{ color: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  color: white;
  font-size: 18px;
`;
