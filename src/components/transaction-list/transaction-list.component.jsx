import React, { useContext } from 'react';
import { GlobalContext } from '../../context/globalState';
import { Transaction } from '../transaction/transaction.component';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((transaction) => (
          <Transaction {...transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
