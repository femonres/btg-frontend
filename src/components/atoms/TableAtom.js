import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

const Table = ({ headers, children }) => {
  return (
    <BootstrapTable striped bordered hover>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </BootstrapTable>
  );
};

export default Table;