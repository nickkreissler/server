import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel = "Selected Option"
        onRequestClose= {props.removeModal}
    >
        <h3>Hello</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.removeModal}>Ok</button>
    </Modal>
)

export default OptionModal