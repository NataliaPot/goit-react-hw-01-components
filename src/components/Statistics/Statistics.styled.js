import styled from 'styled-components';
import { getRandomHexColor } from './getRandomHexColor.js';

export const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 470px;
  margin-top: 20px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0px 0px 6px rgb(150, 150, 150);
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  padding-top: 32px;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 650;
  color: #505358;
  margin-bottom: 32px;
  margin-top: 0;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  border: none;
  width: calc(100% / 5);
  background-color: ${() => getRandomHexColor};
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 500;

  color: #fff;
`;
export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 500;

  color: #fff;
`;
