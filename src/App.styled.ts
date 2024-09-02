import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const TrafficLightGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 100%;
  gap: 20px;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;
