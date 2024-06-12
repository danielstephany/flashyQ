import React from 'react'
import Modal from '@src/components/modules/Modal/index.tsx'
import CategoriesModalBody from './CategoriesModalBody.tsx'


const CategoriesModal: React.ElementType = ({open, handleClose}) => {
    return (
        <Modal open={open} handleClose={handleClose}>
            <CategoriesModalBody 
                handleClose={handleClose}
            />
        </Modal>
    )
}

export default CategoriesModal