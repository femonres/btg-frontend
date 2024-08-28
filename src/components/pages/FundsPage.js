import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import FundTable from '../organisms/FundTable';
import SubscriptionModal from '../organisms/SubscriptionModal';
import { getFunds } from '../../services/fundService';

const FundsPage = () => {
    const [funds, setFunds] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedFund, setSelectedFund] = useState(null);
    const [amount, setAmount] = useState('');

    useEffect(() => {
        getFunds().then((response) => {
            setFunds(response.data)
        });
    }, []);

    const handleSubscribeClick = (fund) => {
        setSelectedFund(fund);
        setShowModal(true);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para suscribirse al fondo seleccionado con la cantidad especificada.
        setShowModal(false);
    };

    return (
        <Container>
            <FundTable funds={funds} onSubscribe={handleSubscribeClick} />
            {selectedFund && (
                <SubscriptionModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    fund={selectedFund}
                    amount={amount}
                    onAmountChange={handleAmountChange}
                    onSubmit={handleSubmit}
                />
            )}
        </Container>
    );
};

export default FundsPage;