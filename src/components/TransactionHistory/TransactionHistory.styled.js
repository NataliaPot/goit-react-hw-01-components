import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 750px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border-collapse: collapse;
  margin-bottom: 80px;
  box-shadow: 0px 0px 6px rgb(150, 150, 150);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid;
`;

export const TableRowHead = styled.tr`
  background-color: #00bcd5;
`;

export const TableHead = styled.th`
  width: calc(100% / 3);
  padding: 16px;
  color: #eeffff;
  text-transform: uppercase;
  border: 1px solid #8effff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 18px;
`;

export const Type = styled.td`
  color: #5f6062;
  text-transform: capitalize;
  padding: 16px;
  border-right: 1px solid #e4e4e4;
  font-family: Arial, Helvetica, sans-serif;

  font-size: 14px;
  font-weight: 550;
`;

export const Amount = styled.td`
  color: #5f6062;
  padding: 16px;
  border-right: 1px solid #e4e4e4;
  font-family: Arial, Helvetica, sans-serif;

  font-size: 14px;
  font-weight: 550;
`;

export const Currency = styled.td`
  color: #5f6062;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 550;
`;

export const TableRowBody = styled.tr`
  background-color: #fffffd;
  text-align: center;

  &:nth-child(even) {
    background-color: #ecf1f4;
  }
`;
