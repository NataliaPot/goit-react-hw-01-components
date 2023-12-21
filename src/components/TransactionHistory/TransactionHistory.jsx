import {
  Amount,
  Currency,
  TableHead,
  TableRowBody,
  TableRowHead,
  TransactionHistoryTable,
  Type,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <TableRowHead>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </TableRowHead>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRowBody key={id}>
              <Type>{type}</Type>
              <Amount>{amount}</Amount>
              <Currency>{currency}</Currency>
            </TableRowBody>
          );
        })}
      </tbody>
    </TransactionHistoryTable>
  );
};
