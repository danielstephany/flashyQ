import React from 'react'
import Modal from '@src/components/modules/Modal/index.tsx'
import IntroModalBody from './IntroModalBody.tsx'


const IntroModal: React.ElementType = ({ open, handleClose, handleOpenCatagoryModal }) => {
    return (
        <Modal open={open} handleClose={handleClose}>
            <IntroModalBody 
                handleClose={handleClose}
                handleOpenCatagoryModal={handleOpenCatagoryModal}
            />
        </Modal>
    )
}

export default IntroModal