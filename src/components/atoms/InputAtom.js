import React from 'react';
import { Form } from 'react-bootstrap';

const InputAtom = ({ type, placeholder, value, onChange }) => (
    <Form.Control type={type} placeholder={placeholder} value={value} onChange={onChange} />
);

export default InputAtom;