import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { updateUserProfile, resetUserBalance } from '../../services/userService';

const ProfileForm = ({ user, onSave, onReset }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [notification, setNotification] = useState(user.notification);
    const [showResetModal, setShowResetModal] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();
        const updatedUser = { name, email, phone, notification };
        updateUserProfile(user.id, updatedUser).then(onSave);
    };

    const handleResetBalance = () => {
        resetUserBalance(user.id).then(onReset);
        setShowResetModal(false);
    };

    return (
        <div>
            <Form onSubmit={handleSave}>
                <Form.Group controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formNotification">
                    <Form.Label>Enviar notificacion por:</Form.Label>
                    <Form.Control
                        as="select"
                        value={notification}
                        onChange={(e) => setNotification(e.target.value)}>
                        <option value="EMAIL">Email</option>
                        <option value="SMS">SMS</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar cambios
                </Button>
                <Button
                    variant="danger"
                    onClick={() => setShowResetModal(true)}
                    className="ms-2">
                    Reiniciar balance
                </Button>
            </Form>

            <Modal show={showResetModal} onHide={() => setShowResetModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar reinicio de Balance</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Está seguro de que desea restablecer el saldo? Esto también borrará el historial de transacciones.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowResetModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleResetBalance}>
                        Reiniciar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProfileForm;
