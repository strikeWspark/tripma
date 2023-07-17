import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const SignUpDialogBox = ({isOpen, onClose,title,content}) => {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Sign Up"
        >
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={onClose}>Close</button>
        </Modal>
    )
}

export default SignUpDialogBox;