import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context/globalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(({ amount }) => amount);
  const totalBalance = amounts.reduce(
    (accumulator, amount) => (accumulator += amount),
    0
  );
  return (
    <>
      <h4>Your Balance:</h4>
      <h1>${totalBalance}</h1>
    </>
  );
};

export default Balance;
