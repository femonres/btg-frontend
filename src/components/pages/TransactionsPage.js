import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import TransactionTable from '../organisms/TransactionTable';
import { getUserTransactionHistory } from '../../services/userService';


const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const userId = 1;
    getUserTransactionHistory(userId).then((response) => {
      setTransactions(response.data);
    });
  }, []);

  const handleAction = (transaction) => {
    console.log('View transaction:', transaction);
    // Aquí podrías manejar acciones como mostrar más detalles o revertir una transacción
  };

  return (
    <Container>
      <h1>Historico de transacciones</h1>
      <TransactionTable transactions={transactions} onAction={handleAction} />
    </Container>
  );
};

export default TransactionsPage;