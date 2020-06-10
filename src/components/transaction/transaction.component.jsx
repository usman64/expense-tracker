import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context/globalState';

export const Transaction = ({ id, text, amount }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = amount < 0 ? '-' : `+`;

  return (
    <li className={amount < 0 ? 'minus' : `plus`}>
      {text}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button onClick={() => deleteTransaction(id)} className='delete-btn'>
        x
      </button>
    </li>
  );
};
