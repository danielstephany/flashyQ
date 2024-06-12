import React from 'react'
import styled from 'styled-components'
import Button from '@src/components/controls/Button.tsx'


const CategoriesModalBodyComp: React.ElementType = ({ className, handleClose }) => {
    return (
        <div className={className}>
            <div className='categories__container'>
                <div className='categories__btn-container'>
                    <Button>Countries</Button>
                </div>
                <div className='categories__btn-container'>
                    <Button>Animals</Button>
                </div>
                <div className='categories__btn-container'>
                    <Button>Countries</Button>
                </div>
                <div className='categories__btn-container'>
                    <Button>Countries</Button>
                </div>
            </div>
        </div>
    )
}

const CategoriesModalBody = styled(CategoriesModalBodyComp)`
    background-color: #070b41;
    .categories {
        &__container {
            padding: 24px;
        }
        &__btn-container {
            margin-bottom: 24px;
        }
    }
`

export default CategoriesModalBody