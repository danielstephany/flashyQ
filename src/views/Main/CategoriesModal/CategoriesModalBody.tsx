import React from 'react'
import styled from 'styled-components'
import Button from '@src/components/controls/Button.tsx'


const CategoriesModalBodyComp: React.ElementType = ({ className, handleClose, handleSetCatagory }) => {
    return (
        <div className={className}>
            <div className='categories__container'>
                <div className='categories__grid'>
                    <Button onClick={handleSetCatagory("countries")} fullWidth>Countries</Button>
                </div>
                <div className='categories__grid'>
                    <Button onClick={handleSetCatagory("animals")} fullWidth>Animals</Button>
                </div>
                <div className='categories__grid'>
                    <Button onClick={handleSetCatagory("movies")} fullWidth>Movies</Button>
                </div>
                <div className='categories__grid'>
                    <Button onClick={handleSetCatagory("actors")} fullWidth>Actors</Button>
                </div>
                <div className='categories__grid--full'>
                    <Button onClick={handleSetCatagory("random")} fullWidth>Random</Button>
                </div>
            </div>
        </div>
    )
}

const CategoriesModalBody = styled(CategoriesModalBodyComp)`
    border-radius: 16px;
    width: 600px;
    background-color: #070b41;
    .categories {
        &__container {
            display: flex;
            flex-wrap: wrap;
            padding: 32px 24px;
            margin-left: -12px;
            margin-right: -12px;
        }
        &__grid {
            width: 50%;
            max-width: 100%;
            margin-bottom: 24px;
            padding: 0 12px;
            &--full {
                width: 100%;
                padding: 0 12px;
            }
        }
    }
`

export default CategoriesModalBody