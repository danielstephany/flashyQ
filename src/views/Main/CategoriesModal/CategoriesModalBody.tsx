import React from 'react'
import styled from 'styled-components'
import Button from '@src/components/controls/Button.tsx'
import IconButton from '@src/components/controls/IconButton.tsx'
import {X} from 'react-feather'


const CategoriesModalBodyComp: React.ElementType = ({ className, handleClose, handleSetCatagory }) => {
    return (
        <div className={className}>
            <div className='categories__container'>
                <IconButton onClick={handleClose} aria-label="close Modal"><X /></IconButton>
                <div className='categories__grid--full'>
                    <h3>Choose a new catagory.</h3>
                </div>
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
    max-width: 100%;
    background-color: #070b41;
    position: relative;
    h3 {
        font-size: 28px;
        color: #fff;
        margin: 0 0 32px;
        text-align: center;
        font-family: "Poetsen One", sans-serif;
    }
    ${IconButton} {
        position: absolute;
        top: 4px;
        right: 4px;
        background-image: none;
        background-color: transparent;
        &.button-clicked {
            box-shadow: inset 0 0 3px 3px rgba(255, 255, 255, 0.3);
        }
    }
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