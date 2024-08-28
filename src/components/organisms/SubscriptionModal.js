import React from 'react';
import { Modal } from 'react-bootstrap';
import SubscriptionForm from '../molecules/SubscriptionForm';

const SubscriptionModal = ({ show, onHide, fund, amount, onAmountChange, onSubmit }) => (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Suscribirse al fondo: {fund.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <SubscriptionForm amount={amount} onAmountChange={onAmountChange} onSubmit={onSubmit} />
        </Modal.Body>
    </Modal>
);

export default SubscriptionModal;