import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonAtom = ({ children, onClick, variant = 'primary' }) => (
    <Button variant={variant} onClick={onClick}>
        {children}
    </Button>
);

export default ButtonAtom;