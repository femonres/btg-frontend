import React from 'react';
import ButtonAtom from '../atoms/ButtonAtom';

const FundTableRow = ({ fund, onSubscribe }) => (
    <tr>
        <td>{fund.name}</td>
        <td>{fund.category}</td>
        <td>{fund.min_amount}</td>
        <td>
            <ButtonAtom variant="primary" onClick={() => onSubscribe(fund)}>Subscribe</ButtonAtom>
        </td>
    </tr>
);

export default FundTableRow;