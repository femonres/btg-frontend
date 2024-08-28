import React from 'react';
import Table from '../atoms/TableAtom';
import TransactionTableRow from '../molecules/TransactionTableRow';

const TransactionTable = ({ transactions, onAction }) => {
  const headers = ['Transaction ID', 'Fund ID', 'Amount', 'Timestamp', 'Type', 'Status', 'Action'];

  return (
    <Table headers={headers}>
      {transactions.map((transaction) => (
        <TransactionTableRow key={transaction.transaction_id} transaction={transaction} onAction={onAction} />
      ))}
    </Table>
  );
};

export default TransactionTable;
