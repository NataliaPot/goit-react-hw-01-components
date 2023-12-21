import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  width: 282px;
  box-shadow: 0px 0px 6px rgb(150, 150, 150);
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  padding-top: 8px;
  overflow: hidden;
  padding-left: 16px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.$isOnline ? '#57ab59' : '#f8574e')};
`;

export const Avatar = styled.img`
  border-radius: 8px;
  margin-left: 16px;
`;

export const Name = styled.p`
  margin-left: 16px;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 550;
  color: #030303;
`;
