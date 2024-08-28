import React from 'react';
import InputAtom from '../atoms/InputAtom';
import ButtonAtom from '../atoms/ButtonAtom';
import LabelAtom from '../atoms/LabelAtom';

const SubscriptionForm = ({ amount, onAmountChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <LabelAtom text="Cantidad a invertir" />
        <InputAtom type="number" placeholder="Enter amount" value={amount} onChange={onAmountChange} />
        <ButtonAtom variant="success">Confirmar Suscripción</ButtonAtom>
    </form>
);

export default SubscriptionForm;