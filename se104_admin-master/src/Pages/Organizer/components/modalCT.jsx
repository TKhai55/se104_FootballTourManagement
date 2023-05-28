import React from "react";
import { Modal } from "react-bootstrap";
import './style.css'

/**
 * @author
 * @function NewModal
 **/


const NewModal = (props) => {


    return (
        <Modal size={props.size} show={props.show} onHide={props.handleClose} className='modal'>
            <Modal.Header className="modal_header">
                <Modal.Title style={{ fontWeight: "510" }}>{props.modalTitle}</Modal.Title>
                <button className="close_btn" onClick={props.handleClose}>X</button>
            </Modal.Header>
            <Modal.Body>{props.children}</Modal.Body>
        </Modal >
    );
};

export default NewModal;
