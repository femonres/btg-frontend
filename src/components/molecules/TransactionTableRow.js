import React from 'react';
import Button from '../atoms/ButtonAtom';
import Text from '../atoms/TextAtom';

const TransactionTableRow = ({ transaction, onAction }) => {
  return (
    <tr>
      <td><Text>{transaction.transaction_id}</Text></td>
      <td><Text>{transaction.fund_id}</Text></td>
      <td><Text>{transaction.amount}</Text></td>
      <td><Text>{transaction.timestamp}</Text></td>
      <td><Text>{transaction.transaction_type}</Text></td>
      <td><Text>{transaction.status}</Text></td>
      <td>
        <Button onClick={() => onAction(transaction)}>View</Button>
      </td>
    </tr>
  );
};

export default TransactionTableRow;
