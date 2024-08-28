import React from 'react';
import FundTableRow from '../molecules/FundTableRow';
import Table from '../atoms/TableAtom';

const FundTable = ({ funds, onSubscribe }) => {
    const headers = ['Nombre del fondo', 'Categoria', 'Monto minimo', 'Acciones'];

    return (
        <Table headers={headers}>
            {funds.map(fund => (
                <FundTableRow key={fund.id} fund={fund} onSubscribe={onSubscribe} />
            ))}
        </Table>
    );
};

export default FundTable;