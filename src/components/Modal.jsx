import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function CustomModal({ imageUrl, onClose }) {
    return (
        <Modal show onHide={onClose} centered>
            <Modal.Body className="text-center">
                <img src={imageUrl} alt="Full size" style={{ maxWidth: '100%' }} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomModal;
